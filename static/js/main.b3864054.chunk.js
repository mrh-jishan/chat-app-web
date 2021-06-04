(this["webpackJsonpchat-app-web"]=this["webpackJsonpchat-app-web"]||[]).push([[0],{162:function(e,t,c){},263:function(e,t,c){},264:function(e,t,c){"use strict";c.r(t);c(157);var a=c(0),n=c.n(a),s=c(25),r=c.n(s),o=c(45),i=c(23),j=(c(162),c(81)),l=c(272),b=c(72),h=c(43),d=c(270),p=c(268),u=c(49),m=c.n(u),O="https://chat-app-api-1.herokuapp.com",x=c(27),g=c(154),f=c(141),y=c.n(f),C=c(271),w=c(269),v=c(267),P=c(266),I=c(153),T=c(6),F=C.a.TextArea,q={labelCol:{span:8},wrapperCol:{span:16}},S={wrapperCol:{offset:8,span:16}},_=function(){var e=Object(i.g)().slug,t=w.a.useForm(),c=Object(j.a)(t,1)[0],n=Object(a.useState)([]),s=Object(j.a)(n,2),r=s[0],o=s[1];Object(a.useEffect)((function(){y.a.createConsumer("ws://chat-app-api-1.herokuapp.com/cable").subscriptions.create({channel:"MessagesChannel",chatroom_slug:"messages_".concat(e)},{connected:function(){console.log("connected!")},disconnected:function(){console.log("disconnected")},received:function(e){console.log("socket data----------------",e),o((function(t){return[].concat(Object(g.a)(t),[e.message])}))}})}),[e]),Object(a.useEffect)((function(){m.a.get("".concat(O,"/chatrooms/").concat(e,"/messages")).then((function(e){var t=e.data.data;console.log("messages-------, ",t),o(t.messages)})).catch((function(e){console.log("err: ",e.response)}))}),[e]);return Object(T.jsxs)("div",{children:[Object(T.jsxs)("h3",{children:["Chat Room: ",e]}),Object(T.jsx)(v.b,{className:"comment-list",header:"".concat(r.length," replies"),itemLayout:"horizontal",dataSource:r,renderItem:function(e){return Object(T.jsx)("li",{children:Object(T.jsx)(P.a,{actions:e.actions,author:e.user.username,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:e.content,datetime:e.created_at})})}}),Object(T.jsxs)(w.a,Object(x.a)(Object(x.a)({},q),{},{name:"basic",onFinish:function(t){console.log("Success:",t),m.a.post("".concat(O,"/chatrooms/").concat(e,"/messages"),{message:{content:t.content,user_id:2}}).then((function(e){console.log(e),console.log(e.data),c.resetFields()})).catch((function(e){console.log("err: ",e.response)}))},form:c,children:[Object(T.jsx)(w.a.Item,{name:"content",rules:[{required:!0,message:"Please input your message!"}],children:Object(T.jsx)(F,{rows:4})}),Object(T.jsx)(w.a.Item,Object(x.a)(Object(x.a)({},S),{},{children:Object(T.jsx)(I.a,{type:"primary",htmlType:"submit",children:" Submit "})}))]}))]})},H=l.a.Header,L=l.a.Content,k=function(){var e=Object(i.h)(),t=e.path,c=e.url,n=Object(a.useState)([]),s=Object(j.a)(n,2),r=s[0],u=s[1];return Object(a.useEffect)((function(){m.a.get("".concat(O,"/chatrooms")).then((function(e){var t=e.data.data;u(t.rooms)})).catch((function(e){console.log("err: ",e.response)}))}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(l.a,{children:[Object(T.jsx)(H,{children:Object(T.jsx)("div",{className:"logo"})}),Object(T.jsx)(L,{style:{padding:"0 50px",marginTop:64},children:Object(T.jsx)(b.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(T.jsxs)(h.a,{span:24,children:[Object(T.jsx)(d.a.Title,{children:"Welcome to Chat App"}),Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(h.a,{span:24,children:["  ",Object(T.jsx)("h2",{children:"Chat Topic"})," "]}),Object(T.jsx)(h.a,{span:10,children:Object(T.jsx)(p.a,{children:Object(T.jsx)("ul",{children:r.map((function(e,t){return Object(T.jsx)("li",{children:Object(T.jsx)(o.b,{to:"".concat(c,"/").concat(e.slug),children:e.topic})},t)}))})})}),Object(T.jsx)(h.a,{span:14,children:Object(T.jsx)(p.a,{children:Object(T.jsxs)(i.d,{children:[Object(T.jsx)(i.b,{exact:!0,path:t,component:function(){return Object(T.jsx)("h3",{children:"Please select a chat topic."})}}),Object(T.jsx)(i.b,{path:"".concat(t,"/:slug"),component:_})]})})})]}),","]})})})]}),Object(T.jsx)(o.b,{to:"/",children:"Go Back"})]})},A=l.a.Header,N=l.a.Content,E={labelCol:{span:8},wrapperCol:{span:16}},B={wrapperCol:{offset:8,span:16}},D=function(e){var t=e.history;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(l.a,{children:[Object(T.jsx)(A,{children:Object(T.jsx)("div",{className:"logo"})}),Object(T.jsx)(N,{style:{padding:"0 50px",marginTop:64},children:Object(T.jsx)(b.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(T.jsxs)(h.a,{span:10,children:[Object(T.jsx)(d.a.Title,{children:"Welcome to Chat App"}),Object(T.jsxs)(w.a,Object(x.a)(Object(x.a)({},E),{},{name:"login-form",initialValues:{username:"test",password:"test"},onFinish:function(e){m.a.post("".concat(O,"/login"),{user:e}).then((function(e){t.push("/chat")})).catch((function(e){console.log("err: ",e.response)}))},children:[Object(T.jsx)(w.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(w.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(T.jsx)(C.a.Password,{})}),Object(T.jsx)(w.a.Item,Object(x.a)(Object(x.a)({},B),{},{children:Object(T.jsxs)(d.a.Paragraph,{children:["Don't you have an account?   ",Object(T.jsx)(o.b,{to:"/register",children:" Register here"})]})})),Object(T.jsx)(w.a.Item,Object(x.a)(Object(x.a)({},B),{},{children:Object(T.jsx)(I.a,{type:"primary",htmlType:"submit",children:"Login"})}))]}))]})})})]})})},R=l.a.Header,V=l.a.Content,W={labelCol:{span:8},wrapperCol:{span:16}},z={wrapperCol:{offset:8,span:16}},J=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(l.a,{children:[Object(T.jsx)(R,{children:Object(T.jsx)("div",{className:"logo"})}),Object(T.jsx)(V,{style:{padding:"0 50px",marginTop:64},children:Object(T.jsx)(b.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(T.jsxs)(h.a,{span:18,children:[Object(T.jsx)(d.a.Title,{children:"Welcome to Chat App"}),Object(T.jsxs)(w.a,Object(x.a)(Object(x.a)({},W),{},{name:"basic",initialValues:{username:"test",password:"test",first_name:"hi",last_name:"there"},onFinish:function(e){console.log("Success:",e),m.a.post("".concat(O,"/signup"),{user:e}).then((function(e){console.log(e),console.log(e.data)})).catch((function(e){console.log("err: ",e.response)}))},children:[Object(T.jsx)(w.a.Item,{label:"First Name",name:"first_name",rules:[{required:!0,message:"Please input your first name!"}],children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(w.a.Item,{label:"Last Name",name:"last_name",rules:[{required:!0,message:"Please input your last name!"}],children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(w.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(w.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(T.jsx)(C.a.Password,{})}),Object(T.jsx)(w.a.Item,Object(x.a)(Object(x.a)({},z),{},{children:Object(T.jsxs)(d.a.Paragraph,{children:["Already have an account?   ",Object(T.jsx)(o.b,{to:"/",children:" Login here"})]})})),Object(T.jsx)(w.a.Item,Object(x.a)(Object(x.a)({},z),{},{children:Object(T.jsx)(I.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))]})})})]})})};var M=function(){return Object(T.jsx)(o.a,{children:Object(T.jsxs)(i.d,{children:[Object(T.jsx)(i.b,{exact:!0,path:"/login",component:D}),Object(T.jsx)(i.b,{exact:!0,path:"/register",component:J}),Object(T.jsx)(i.b,{path:"/chat",component:k}),Object(T.jsx)(i.a,{to:"/login",from:"/"}),Object(T.jsx)(i.b,{path:"*",exact:!0,component:D})]})})},U=(c(263),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,273)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))});r.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(M,{})}),document.getElementById("root")),U()}},[[264,1,2]]]);
//# sourceMappingURL=main.b3864054.chunk.js.map