(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),i=n(8),s=n(6),l=n(14),u=(n(27),n(2)),h=n(3),d=n(5),b=n(4),m=(n(28),function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))}),E=function(e){var t=e.robots,n=t.map((function(e,n){return a.a.createElement(m,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}));return a.a.createElement("div",null,n)},p=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",borderBottom:"1px solid black",height:"700px"}},e.children)},f=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),n}(r.Component),v=n(15),g=function(e){var t=e.color,n=Object(r.useState)(0),o=Object(v.a)(n,2),c=o[0],i=o[1];return a.a.createElement("button",{color:t,onClick:function(){return i(c+1)}},"Count: ",c)},j=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(g,{color:"red"}),a.a.createElement("h1",{className:"f1"},"Robo Friends"))}}]),n}(r.Component),y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement(j,null),a.a.createElement(f,{searchChange:n}),a.a.createElement(p,null,a.a.createElement(O,null,a.a.createElement(E,{robots:c}))))}}]),n}(r.Component),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(1),C={searchField:""},w={robots:[],error:"",isPending:!1},_=(n(29),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(S.a)(Object(S.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(S.a)(Object(S.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object(S.a)(Object(S.a)({},e),{},{isPending:!1,error:t.payload});default:return e}}})),k=Object(s.d)(_,Object(s.a)(l.a));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:k},a.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.ab30e19a.chunk.js.map