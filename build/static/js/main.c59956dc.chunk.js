(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,a,t){e.exports=t(31)},19:function(e,a,t){},20:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t.n(n),o=t(13),s=t.n(o),r=(t(19),t(10)),i=(t(20),t(8)),m=function(e){var a=e.messages;return c.a.createElement("div",{className:"chat-messages"},null!==a&&Object.keys(a).map((function(e){return c.a.createElement("div",{key:e,id:e,className:"chat-message"},a[e])})))},u=function(){var e=i.database(),a=Object(n.useState)(null),t=Object(r.a)(a,2),o=t[0],s=t[1],u=Object(n.useState)(""),l=Object(r.a)(u,2),p=l[0],h=l[1];Object(n.useEffect)((function(){e.ref("messages").on("value",(function(e){s(e.val())}))}),[e]);return c.a.createElement("div",{className:"chat"},c.a.createElement(m,{messages:o}),c.a.createElement("form",{onSubmit:function(a){a.preventDefault(),h(""),e.ref("messages").push(p)},className:"chat-input_form"},c.a.createElement("textarea",{value:p,className:"chat-textarea",onChange:function(e){return h(e.target.value)}}),c.a.createElement("input",{type:"submit",value:"Send",className:"chat-submit_button"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.initializeApp({apiKey:"AIzaSyAh9H4vAVYxkFob8tWfeWiOOMqZ1UMLZMQ",authDomain:"chatroom-97c43.firebaseapp.com",databaseURL:"https://chatroom-97c43.firebaseio.com",projectId:"chatroom-97c43",storageBucket:"chatroom-97c43.appspot.com",messagingSenderId:"174907672317",appId:"1:174907672317:web:548a943edd0ed3ac3ae094"}),s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c59956dc.chunk.js.map