import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

import Api from './core/api/Api';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [fetchedWorldChart, setWorldChart] = useState(null);
	const [fetchedChart, setChart] = useState(null);
	const [fetchedCityChart, setCityChart] = useState(null);
	const [userIsSubscribed, setUserIsSubscribed] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		async function fetchData() {

			// Графики мира и России
			Api.chartWorld((chartData) => setWorldChart(chartData));
			Api.chartRussia((chartData) => setChart(chartData));

			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);

			// График города
			Api.chartCity(user.city.id, (chartData) => setCityChart(chartData));

			// Узнать подписан или нет
			Api.checkSub(user.id, (userIsSubscribed) => setUserIsSubscribed(userIsSubscribed));

			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

  const showAllowMessages = e => {
		Api.post({method: 'sub/sign', body: fetchedUser, handler: (result) => console.log('result', result)});
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home'
				fetchedUser={fetchedUser}
				fetchedWorldChart={fetchedWorldChart}
				fetchedChart={fetchedChart}
				fetchedCityChart={fetchedCityChart}

				userIsSubscribed={userIsSubscribed}
				setUserIsSubscribed={setUserIsSubscribed}

				go={go}
				showAllowMessages={showAllowMessages}
			/>
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;
