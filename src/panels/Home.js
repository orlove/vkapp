import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import { Header, InfoRow } from '@vkontakte/vkui';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Home.css';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

import Api from '../core/api/Api';

const Home = ({ id, go, fetchedUser, fetchedWorldChart, fetchedChart, fetchedCityChart, userIsSubscribed, setUserIsSubscribed }) => {

	return (
		<Panel id={id}>
			<PanelHeader>Статистика эпидемии</PanelHeader>
			{/*fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>*/}

			<Group header={<Header>Динамика заражений в мире</Header>}>
				<BarChart
	        width={window.innerWidth}
	        height={300}
	        data={fetchedWorldChart}
	        margin={{
	          top: 20, right: 30, left: 20, bottom: 5,
	        }}
	      >
	        <CartesianGrid strokeDasharray="3 3" />
	        <XAxis dataKey="day" />
	        <YAxis />
	        <Tooltip />
	        <Legend />
					<Bar dataKey="deaths" name="Погибло" stackId="a" fill="#000" />
					<Bar dataKey="cured" name="Вылечившиеся" stackId="a" fill="#82ca9d" />
					<Bar dataKey="confirmed" name="Заражено" stackId="a" fill="#8884d8" />
	      </BarChart>
			</Group>

			<Group header={<Header>Динамика заражений в России</Header>}>
				<BarChart
	        width={window.innerWidth}
	        height={300}
	        data={fetchedChart}
	        margin={{
	          top: 20, right: 30, left: 20, bottom: 5,
	        }}
	      >
	        <CartesianGrid strokeDasharray="3 3" />
	        <XAxis dataKey="day" />
	        <YAxis />
	        <Tooltip />
	        <Legend />
					<Bar dataKey="deaths" name="Погибло" stackId="a" fill="#000" />
					<Bar dataKey="cured" name="Вылечившиеся" stackId="a" fill="#82ca9d" />
					<Bar dataKey="confirmed" name="Заражено" stackId="a" fill="#8884d8" />
	      </BarChart>
			</Group>

			{!userIsSubscribed && <Group className="SignGroup" separator="hide">
				{/*<Div>
					<Button size="xl" level="2" onClick={go} data-to="persik">
						Show me the Persik, please
					</Button>
				</Div>*/}
				<Div>
					<Button size="xl" level="2" onClick={e => {
						Api.post({method: 'sub/sign', body: fetchedUser, handler: (result) => {
							setUserIsSubscribed(true);
						}});
					}}>
						Получать статистику в личные сообщения
					</Button>
				</Div>
			</Group>}

			{fetchedUser && <Group header={<Header>Динамика заражений в г.{fetchedUser.city.title}</Header>}>
				<BarChart
	        width={window.innerWidth}
	        height={300}
	        data={fetchedCityChart}
					className={!userIsSubscribed ? 'BluredCityChart' : ''}
	        margin={{
	          top: 20, right: 30, left: 20, bottom: 5,
	        }}
	      >
	        <CartesianGrid strokeDasharray="3 3" />
	        <XAxis dataKey="day" />
	        <YAxis />
	        <Tooltip />
	        <Legend />
					<Bar dataKey="deaths" name="Погибло" stackId="a" fill="#000" />
					<Bar dataKey="cured" name="Вылечившиеся" stackId="a" fill="#82ca9d" />
					<Bar dataKey="confirmed" name="Заражено" stackId="a" fill="#8884d8" />
	      </BarChart>
			</Group>}

		</Panel>
)};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	})
};

export default Home;
