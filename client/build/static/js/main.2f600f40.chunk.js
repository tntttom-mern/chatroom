(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n(43),a=n.n(r),o=(n(51),n(6)),u=n(18),i=n(44),j=n.n(i),b=function(e){var t=e.username,n=Object(s.useState)((function(){return j()(":8000")})),r=Object(o.a)(n,1)[0],a=Object(s.useState)(""),i=Object(o.a)(a,2),b=i[0],l=i[1],m=Object(s.useState)([]),f=Object(o.a)(m,2),d=f[0],O=f[1],h=Object(s.useRef)(null);Object(s.useEffect)((function(){h.current.scrollIntoView({behavior:"smooth"})}),[d]),Object(s.useEffect)((function(){return console.log("Running"),r.on("messages",(function(e){return O((function(){return Object(u.a)(e)}))})),r.emit("new_user",{username:t,msg:"".concat(t," has joined!")}),function(){return r.disconnect(!0)}}),[]),Object(s.useEffect)((function(){return r.on("user_join",(function(e){return O((function(t){return[].concat(Object(u.a)(t),[e])}))})),function(){return r.disconnect(!0)}}),[]),Object(s.useEffect)((function(){r.on("new_message_from_server",(function(e){return O((function(t){return[].concat(Object(u.a)(t),[e])})),function(){return r.disconnect(!0)}}))}),[]);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"d-flex flex-column",children:[d&&d.map((function(e,n){return t==e.username?Object(c.jsxs)("div",{className:"border rounded bg-info w-25 mb-4 align-self-end p-2",children:[Object(c.jsx)("p",{className:"font-weight-bold",children:e.username}),Object(c.jsx)("p",{children:e.msg})]},n):Object(c.jsxs)("div",{className:"border rounded w-25 mb-4 p-2",children:[Object(c.jsx)("p",{className:"font-weight-bold",children:e.username}),Object(c.jsx)("p",{children:e.msg})]},n)})),Object(c.jsx)("div",{ref:h})]}),Object(c.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),r.emit("new_message_from_client",{username:t,msg:b}),l(""),!1},className:"d-flex justify-content-between mb-4",children:[Object(c.jsx)("input",{className:"form-control ",type:"text",value:b,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("input",{className:"btn btn-primary btn-md",type:"submit"})]})]})},l=n(17),m=function(e){var t=Object(s.useState)(),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.setName(r),Object(l.b)("/chatroom")},className:"container w-50",children:[Object(c.jsx)("h3",{className:"text-center mt-4",children:"Get Started right now!"}),Object(c.jsxs)("div",{className:"form-group mt-4",children:[Object(c.jsx)("label",{children:"I want to start chatting with the name..."}),Object(c.jsx)("input",{className:"form-control",type:"text",onChange:function(e){return a(e.target.value)},placeholder:"My name.."})]}),Object(c.jsx)("input",{className:"btn btn-md btn-info",type:"submit",value:"Start Chatting"})]})};var f=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(c.jsxs)("div",{className:"container mt-4",children:[Object(c.jsx)("h1",{className:" text-center",children:"MERN Chat"}),Object(c.jsxs)(l.a,{children:[Object(c.jsx)(m,{path:"/",setName:function(e){r(e)}}),Object(c.jsx)(b,{path:"/chatroom",username:n})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(c.jsx)(f,{}),document.getElementById("root")),d()}},[[87,1,2]]]);
//# sourceMappingURL=main.2f600f40.chunk.js.map