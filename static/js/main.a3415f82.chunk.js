(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(7),c=n.n(a),i=n(8),s=n(6),l=n(14),u=(n(27),n(2)),d=n(3),h=n(5),b=n(4),f=(n(28),function(e){var t=e.id,n=e.name,o=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,o)))}),p=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(f,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},m=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",borderBottom:"1px solid black",height:"700px"}},e.children)},E=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),n}(o.Component),g=n(15),O=function(e){var t=e.color,n=Object(o.useState)(0),a=Object(g.a)(n,2),c=a[0],i=a[1];return r.a.createElement("button",{color:t,onClick:function(){return i(c+1)}},"Count: ",c)},w=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{color:"red"}),r.a.createElement("h1",{className:"f1"},"Robo Friends"))}}]),n}(o.Component),y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(w,null),r.a.createElement(E,{searchChange:n}),r.a.createElement(m,null,r.a.createElement(v,null,r.a.createElement(p,{robots:c}))))}}]),n}(o.Component),j=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(y),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=n(1),k={searchField:""},_={robots:[],error:"",isPending:!1},T=(n(29),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(C.a)(Object(C.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(C.a)(Object(C.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object(C.a)(Object(C.a)({},e),{},{isPending:!1,error:t.payload});default:return e}}})),N=Object(s.d)(T,Object(s.a)(l.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:N},r.a.createElement(j,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robo","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.a3415f82.chunk.js.map