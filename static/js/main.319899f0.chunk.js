(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{335:function(e,t,n){e.exports=n(612)},598:function(e,t,n){},599:function(e,t,n){},602:function(e,t,n){},603:function(e,t){!function(){function e(e,t,n){return"undefined"===typeof n||0===+n?Math[e](t):(t=+t,n=+n,isNaN(t)||"number"!==typeof n||n%1!==0?NaN:(t=t.toString().split("e"),+((t=(t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-n:-n)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+n:n))))}Math.round10||(Math.round10=function(t,n){return e("round",t,n)}),Math.floor10||(Math.floor10=function(t,n){return e("floor",t,n)}),Math.ceil10||(Math.ceil10=function(t,n){return e("ceil",t,n)})}()},612:function(e,t,n){"use strict";n.r(t);n(336),n(362),n(364),n(365),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404);var r=n(1),a=n.n(r),o=n(32),i=n.n(o),c=n(33),s=n.n(c),u=n(144),l=n.n(u),d=n(229),h=n(50),f=n(245),p=n.n(f),m=n(244),g=n.n(m),b=(n(413),n(63)),E=n(64),O=n(69),j=n(70),v=n(11),y=n(25),k=(n(598),function(e){var t=e.title,n=e.headerAside,r=e.data,o=e.blured;return a.a.createElement(v.e,{header:a.a.createElement(v.f,{aside:n},t)},a.a.createElement(y.b,{width:window.innerWidth,height:300,data:r,margin:{top:20,right:30,left:20,bottom:5},className:o?"BluredChart":""},a.a.createElement(y.c,{strokeDasharray:"3 3"}),a.a.createElement(y.g,{dataKey:"day",xAxisId:0}),a.a.createElement(y.g,{dataKey:"day",xAxisId:1,hide:!0}),a.a.createElement(y.g,{dataKey:"day",xAxisId:2,hide:!0}),a.a.createElement(y.h,{domain:[0,function(e){return r[r.length-1].confirmed}],tickFormatter:w}),a.a.createElement(y.f,null),a.a.createElement(y.d,null),a.a.createElement(y.e,{y:r[r.length-1].confirmed,label:"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u2014 "+parseInt(r[r.length-1].confirmed).toLocaleString(),stroke:"#ccc"}),a.a.createElement(y.a,{dataKey:"confirmed",name:"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u0439",xAxisId:0,fill:"#8884d8"}),a.a.createElement(y.a,{dataKey:"cured",name:"\u0412\u044b\u043b\u0435\u0447\u0435\u043d\u043e",xAxisId:1,fill:"#82ca9d"}),a.a.createElement(y.a,{dataKey:"deaths",name:"\u041f\u043e\u0433\u0438\u0431\u043b\u043e",xAxisId:2,fill:"#777"})))}),w=function(e){return e>1e6?Math.round10(e/1e6,-1)+" \u043c\u043b\u043d.":e>1e3?Math.round10(e/1e3,-1)+" \u0442\u044b\u0441.":e},S=(n(599),{chartLocal:function(e,t){return S.request({method:"chart/local",params:{cid:e},handler:t})},chartRegion:function(e,t){return S.request({method:"chart/region",params:{rid:e},handler:t})},chartRussia:function(e){return S.request({method:"chart/russia",handler:e})},chartWorld:function(e){return S.request({method:"chart/world",handler:e})}}),C=S,L={checkSub:function(e,t){return L.request({method:"sub/check",params:{uid:e},handler:t})},sign:function(e,t){return L.request({method:"sub/sign",params:{uid:e},handler:t})}},I=L,x={region:{list:function(e,t){return x.request({method:"region/index?world="+e,handler:t})}}},R=x,A="orlove.github.io"==window.location.host?"https://rest-news.hozya.ru":"https://api.newsapp.me",M={request:function(e){var t=e.method,n=e.params,r=e.tag,a=e.handler,o=e.options;return r&&fetch.abort(r),n=n?"?"+(n=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&")):"",fetch(A+"/"+t+n,o,r).then((function(e){return e.ok?e.json():(e.text().then((function(t){console.error(e.url,t.substr(-64),e)})),!1)})).then(a).catch((function(e){console.error(e)}))},post:function(e){var t=e.method,n=e.body,r=e.tag,a=e.handler,o=e.options;return r&&fetch.abort(r),o=Object.assign({method:"POST",body:JSON.stringify(n)},o||{}),fetch(A+"/"+t,o,r).then((function(e){return e.ok?e.json():(e.text().then((function(t){console.error(e.url,t.substr(-64),e)})),!1)})).then(a).catch((function(e){console.error(e)}))},abort:function(e){fetch.abort(e)}};[C,I,R].forEach((function(e){M=Object.assign(e,M)}));var N=M,K=n(48),W=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).openRegionsList=function(e){r.props.onOpenRegionsList(e).then((function(){return r.props.navigate("regions-list")}))},r.state={},r}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(v.i,{id:this.props.id,separator:!1},this.props.fetchedLocalChart&&a.a.createElement(v.j,null,this.props.fetchedLocalChart.date),this.props.fetchedChart&&a.a.createElement(k,{title:"\u0414\u0438\u043d\u0430\u043c\u0438\u043a\u0430 \u0437\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0432 \u0420\u043e\u0441\u0441\u0438\u0438",data:this.props.fetchedChart}),!this.props.userIsSubscribed&&a.a.createElement(v.e,{className:"SignGroup",separator:"hide"},a.a.createElement(v.d,{className:"BtnContainer"},a.a.createElement(v.a,{size:"l",onClick:function(t){s.a.send("VKWebAppAllowMessagesFromGroup",{group_id:193696611}).then((function(t){N.post({method:"sub/sign",body:e.props.fetchedUser,handler:function(t){e.props.setUserIsSubscribed(!0)}})}))}},"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0432 \u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"))),this.props.fetchedLocalChart&&a.a.createElement(k,{title:"\u0412 "+this.props.fetchedLocalChart.region.name,headerAside:a.a.createElement(v.a,{onClick:function(){e.openRegionsList(0)}},"\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u044b"),data:this.props.fetchedLocalChart.series,blured:!this.props.userIsSubscribed}),this.props.fetchedWorldChart&&a.a.createElement(k,{title:"\u0412 \u043c\u0438\u0440\u0435",headerAside:a.a.createElement(v.a,{onClick:function(){e.openRegionsList(1)},"data-to":"regions-list"},"\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b"),data:this.props.fetchedWorldChart}))}}]),n}(a.a.Component),q=Object(K.b)((function(e,t){return{}}),(function(e){return{onOpenRegionsList:function(t){return new Promise((function(n){return function(e){return new Promise((function(t,n){t({type:"REGION_LIST",world:e})}))}(t).then((function(t){e(t),n()}))}))}}}))(W),T=n(100),U=n.n(T),_=n(101),G=n.n(_),P=(n(602),Object(v.m)()),z=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).select=function(e){r.props.onSelectRegion(e).then((function(){return r.props.navigate("region-chart")}))},r.state={isLoading:!0},r}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;N.region.list(this.props.world,(function(t){e.setState({isLoading:!1,regions:t})}))}},{key:"render",value:function(){var e=this;return a.a.createElement(v.i,{id:this.props.id},a.a.createElement(v.j,{left:a.a.createElement(v.k,{onClick:function(){e.props.navigate("home")}},P===v.g?a.a.createElement(U.a,null):a.a.createElement(G.a,null))},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043c"),!this.state.isLoading&&a.a.createElement(v.e,null,a.a.createElement(v.h,{className:"RegionsList"},a.a.createElement(v.b,{expandable:!0},a.a.createElement(v.d,null),a.a.createElement(v.d,null,"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u0439")),this.state.regions.map((function(t){return a.a.createElement(v.b,{key:"region"+t.rid,expandable:!0,onClick:function(){e.select(t)}},a.a.createElement(v.d,null,t.name),a.a.createElement(v.d,null,t.confirmed,0!=t.confirmed_growth&&a.a.createElement(v.c,{size:"s"},"+",t.confirmed_growth)))})))),this.state.isLoading&&a.a.createElement(v.l,{size:"large"}))}}]),n}(a.a.Component),D=Object(K.b)((function(e,t){return console.log("RegionsList.mapStateToProps",e,t),{world:e.region.world}}),(function(e){return{onSelectRegion:function(t){return new Promise((function(n){return function(e){return new Promise((function(t,n){t({type:"REGION_SELECT",region:e})}))}(t).then((function(t){e(t),n()}))}))}}}))(z),V=Object(v.m)(),B=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={isLoading:!0},r}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;N.chartRegion(this.props.region.rid,(function(t){e.setState({isLoading:!1,chartData:t})}))}},{key:"render",value:function(){var e=this;return a.a.createElement(v.i,{id:this.props.id},a.a.createElement(v.j,{left:a.a.createElement(v.k,{onClick:function(){e.props.navigate("regions-list")}},V===v.g?a.a.createElement(U.a,null):a.a.createElement(G.a,null))},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),!this.state.isLoading&&a.a.createElement(k,{title:"\u0414\u0438\u043d\u0430\u043c\u0438\u043a\u0430 \u0437\u0430\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0432 "+this.state.chartData.region.name,data:this.state.chartData.series}),this.state.isLoading&&a.a.createElement(v.l,{size:"large"}))}}]),n}(a.a.Component),J=Object(K.b)((function(e,t){return{region:e.region.region}}))(B),F=(n(603),function(){var e=Object(r.useState)("home"),t=Object(h.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(null),c=Object(h.a)(i,2),u=c[0],f=c[1],m=Object(r.useState)(null),b=Object(h.a)(m,2),E=b[0],O=b[1],j=Object(r.useState)(null),v=Object(h.a)(j,2),y=v[0],k=v[1],w=Object(r.useState)(null),S=Object(h.a)(w,2),C=S[0],L=S[1],I=Object(r.useState)(null),x=Object(h.a)(I,2),R=x[0],A=x[1],M=Object(r.useState)(a.a.createElement(g.a,{size:"large"})),K=Object(h.a)(M,2),W=K[0],T=K[1];Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N.chartWorld((function(e){return O(e)})),N.chartRussia((function(e){return k(e)})),e.next=4,s.a.send("VKWebAppGetUserInfo");case 4:t=e.sent,f(t),N.chartLocal(t.city&&t.city.id?t.city.id:1,(function(e){return L(e)})),N.checkSub(t.id,(function(e){return A(e)})),T(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,r=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=r.scheme?r.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),function(){e.apply(this,arguments)}()}),[]);var U=function(e,t){o(e.currentTarget?e.currentTarget.dataset.to:e)};return a.a.createElement(p.a,{activePanel:n,popout:W},a.a.createElement(q,{id:"home",fetchedUser:u,fetchedWorldChart:E,fetchedChart:y,fetchedLocalChart:C,userIsSubscribed:R,setUserIsSubscribed:A,navigate:U,showAllowMessages:function(e){N.post({method:"sub/sign",body:u,handler:function(e){return console.log("result",e)}})}}),a.a.createElement(D,{id:"regions-list",navigate:U}),a.a.createElement(J,{id:"region-chart",navigate:U}))}),H=n(38),Q=n(150),X=n(246),Y=n.n(X);var Z=Object(H.b)({region:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGION_SELECT":return Object.assign({},e,{region:t.region});case"REGION_LIST":return Object.assign({},e,{world:t.world});default:return e}}}),$=function(e,t){return Z(e,t)},ee={key:"root",storage:Y.a},te=Object(Q.a)(ee,$),ne=Object(H.c)(te),re=Object(Q.b)(ne),ae=n(247);s.a.send("VKWebAppInit"),i.a.render(a.a.createElement(K.a,{store:ne},a.a.createElement(ae.a,{loading:null,persistor:re},a.a.createElement(F,null))),document.getElementById("root"))}},[[335,1,2]]]);
//# sourceMappingURL=main.319899f0.chunk.js.map