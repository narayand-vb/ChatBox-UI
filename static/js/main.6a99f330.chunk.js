(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(9),c=a.n(r),i=(a(16),a(6)),o=a.n(i),m=a(10),d=a(7),l=a(8),g=a(0),u=function(e){var t={order:0},a="msg-container agent",n="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";return"user"===e.sender&&(t={order:2},a="msg-container user",n="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg"),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:a,children:[Object(g.jsxs)("div",{className:"msg-line",children:[Object(g.jsx)("img",{src:n,alt:e.sender,className:"image",style:t}),Object(g.jsx)("p",{children:e.message})]}),Object(g.jsx)("small",{className:"time",children:e.time})]})})},j=[{message:"Hi user",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",_id:1},{message:"How are you doing today",createdAt:"2021-09-14T13:23:02.298Z",sender:"user",_id:2},{message:"I am good, how about you",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",_id:3},{message:"I am good, thanks for asking",createdAt:"2021-09-14T13:23:02.298Z",sender:"user",_id:4},{message:"How can I help you today ?",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",_id:5}];var h=function(){return j},b={hello:"hello",hi:"hello",hii:"hello",helo:"hello",halo:"hello",howareyou:"I am fine. What about you?",iamalsofine:"Okay!! \ud83d\ude0a",goodmorning:"Good Morning  \ud83d\udee3",goodafternoon:"Good Afternoon \ud83c\udfdc",goodnight:"Good Night \u2728",bye:"Bye \ud83d\udc4b"},p=function(e){var t=e.replace(/[? ]/gi,"").toLowerCase();return b.hasOwnProperty(t)?b[t]:"Didn't get you."},f=a(4),O=a.n(f),x=a(11),v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(h()),c=Object(l.a)(r,2),i=c[0],j=c[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"profile",children:[Object(g.jsx)("img",{src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",alt:"",className:"profile-pic"}),Object(g.jsx)("span",{className:"profile-name",children:"Agent"})]}),Object(g.jsx)("div",{className:"messages",children:Object(g.jsx)("div",{className:"inhert",children:Object(g.jsx)(x.a,{className:"messages",children:i.map((function(e){return Object(g.jsx)(u,{message:e.message,time:O()(e.createdAt).fromNow(),sender:e.sender},e._id)}))})})}),Object(g.jsxs)("form",{action:"",className:"input-btn",onSubmit:function(e){e.preventDefault()},children:[Object(g.jsx)("input",{type:"text",name:"msg",placeholder:"Enter your message",value:a,onChange:function(e){s(e.target.value)}}),Object(g.jsx)("button",{type:"submit",className:"send",onClick:function(){if(""!==a.trim()){var e={message:a,createdAt:O()().format(),sender:"user",_id:i.length+1};j((function(t){return[].concat(Object(d.a)(t),[e])})),setTimeout(Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(a);case 2:e.t0=e.sent,e.t1=O()().format(),e.t2=i.length+2,t={message:e.t0,createdAt:e.t1,sender:"agent",_id:e.t2},j((function(e){return[].concat(Object(d.a)(e),[t])}));case 7:case"end":return e.stop()}}),e)}))),2e3)}s("")},children:"Send"})]})]})})},y=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(v,{})})};c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6a99f330.chunk.js.map