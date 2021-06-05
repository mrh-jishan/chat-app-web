(this["webpackJsonpchat-app-web"]=this["webpackJsonpchat-app-web"]||[]).push([[0],{207:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);a(197);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),o=a(78),i=a(32),u=a(27),b=(a(207),a(164)),j=a(74),p=a(45),l=a(179),d=a.n(l),O=a(192),m=a(24),g=a(46),h=Object(g.b)({hashType:"hashbang"});function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(j.b)(Object(m.a)({router:Object(o.b)(h)},e));return t}var f=a(130),y=a(308),E=a(304),k=a(98),v=a(56),C=a(305),S=a(80),w=a(303),R=a(58),_=a(33),L=a(306),T=a(307),P=a(6),I={labelCol:{span:8},wrapperCol:{span:16}},A={wrapperCol:{offset:8,span:16}},M=function(e){var t=e.form,a=e.isModalVisible,n=e.handleOk,r=e.handleCancel;return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(L.a,{title:"Create Chat Topic",centered:!0,visible:a,onOk:n,onCancel:r,footer:null,children:Object(P.jsx)(E.a,Object(m.a)(Object(m.a)({},I),{},{form:t,onFinish:n,children:Object(P.jsx)(k.a,{align:"middle",justify:"center",children:Object(P.jsxs)(v.a,{span:16,children:[Object(P.jsx)(E.a.Item,{label:"Topic Name",name:"topic",rules:[{required:!0,message:"Please input your topic name!"}],children:Object(P.jsx)(T.a,{})}),Object(P.jsx)(E.a.Item,Object(m.a)(Object(m.a)({},A),{},{children:Object(P.jsx)(S.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]})})}))})})},N=a(184),U=a.n(N),F=a(302),G=a(301),H="app/MessagePage/MESSAGE_REQUEST",q="app/MessagePage/MESSAGE_SUCCESS",D="app/MessagePage/MESSAGE_ERROR",V="app/MessagePage/NEW_MESSAGE_REQUEST",Q="app/MessagePage/NEW_MESSAGE_SUCCESS",W="app/MessagePage/NEW_MESSAGE_ERROR",X="app/MessagePage/NEW_SOCKET_MESSAGE_SUCCESS";var B=a(69),z={content:null,isLoading:!1,error:{},messages:[],slug:null,message:{}},J=Object(B.a)((function(e,t){switch(t.type){case H:e.slug=t.slug,e.isLoading=!0;break;case q:e.messages=t.messages,e.isLoading=!1;break;case D:e.isLoading=!1,e.error=t.error;break;case V:e.isLoading=!0,e.content=t.content;break;case Q:e.message=t.message,e.isLoading=!1;break;case W:e.isLoading=!1,e.error=t.error;break;case X:e.messages.push(t.message);break;default:return e}}),z),K=a(30),Y=a.n(K),Z=a(23),$=a(141),ee=a.n($),te=ee.a.create(),ae="https://chat-app-api-1.herokuapp.com";te.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e.headers.Authorization="Bearer ".concat(t),e}));var ne=function(e){return ee.a.post("".concat(ae,"/login"),{user:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},re=function(e){return ee.a.post("".concat(ae,"/signup"),{user:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},ce=function(e){return te.get("".concat(ae,"/chatrooms")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},se=function(e){return te.post("".concat(ae,"/chatrooms"),{chatroom:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},oe=function(e){return te.get("".concat(ae,"/chatrooms/").concat(e,"/messages")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},ie=function(e,t){return te.post("".concat(ae,"/chatrooms/").concat(e,"/messages"),{message:{content:t}}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},ue=function(e){return e.messageList||z},be=function(){return Object(_.a)(ue,(function(e){return e.slug}))},je=Y.a.mark(de),pe=Y.a.mark(Oe),le=Y.a.mark(me);function de(){var e,t,a;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Z.c)(be());case 2:return e=n.sent,n.prev=3,n.next=6,Object(Z.a)(oe,e);case 6:if(t=n.sent,a=t.data,!t.success){n.next=12;break}return n.next=12,Object(Z.b)((r=a.messages,{type:q,messages:r}));case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(3),console.log("Error => ",n.t0);case 17:case"end":return n.stop()}var r}),je,null,[[3,14]])}function Oe(){var e,t,a,n;return Y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Z.c)(be());case 2:return e=r.sent,r.next=5,Object(Z.c)(Object(_.a)(ue,(function(e){return e.content})));case 5:return t=r.sent,r.prev=6,r.next=9,Object(Z.a)(ie,e,t);case 9:if(a=r.sent,n=a.data,!a.success){r.next=15;break}return r.next=15,Object(Z.b)((c=n.message,{type:Q,message:c}));case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(6),console.log("Error => ",r.t0);case 20:case"end":return r.stop()}var c}),pe,null,[[6,17]])}function me(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.d)(H,de);case 2:return e.next=4,Object(Z.d)(V,Oe);case 4:case"end":return e.stop()}}),le)}var ge=T.a.TextArea,he={labelCol:{span:8},wrapperCol:{span:16}},xe={wrapperCol:{offset:8,span:16}},fe="messageList",ye=function(){Object(p.b)({key:fe,reducer:J}),Object(p.c)({key:fe,saga:me});var e=Object(i.d)(),t=Object(_.b)({messages:Object(_.a)(ue,(function(e){return e.messages}))}),a=Object(i.e)(t).messages,r=Object(u.g)().slug,c=E.a.useForm(),s=Object(f.a)(c,1)[0];return Object(n.useEffect)((function(){U.a.createConsumer("wss://chat-app-api-1.herokuapp.com/cable").subscriptions.create({channel:"MessagesChannel",chatroom_slug:"messages_".concat(r)},{connected:function(){console.log("connected!")},disconnected:function(){console.log("disconnected")},received:function(t){var a;console.log("socket data----------------",t),e((a=t.message,{type:X,message:a}))}})}),[r,e]),Object(n.useEffect)((function(){e(function(e){return{slug:e,type:H}}(r))}),[r,e]),Object(P.jsxs)("div",{children:[Object(P.jsxs)("h3",{children:["Chat Room: ",r]}),Object(P.jsx)(F.b,{className:"comment-list",header:"".concat(a.length," replies"),itemLayout:"horizontal",dataSource:a,renderItem:function(e){return Object(P.jsx)("li",{children:Object(P.jsx)(G.a,{actions:e.actions,author:e.user.username,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:e.content,datetime:e.created_at})})}}),Object(P.jsxs)(E.a,Object(m.a)(Object(m.a)({},he),{},{name:"basic",onFinish:function(t){var a;e((a=t.content,{type:V,content:a})),s.resetFields()},form:s,children:[Object(P.jsx)(E.a.Item,{name:"content",rules:[{required:!0,message:"Please input your message!"}],children:Object(P.jsx)(ge,{rows:4})}),Object(P.jsx)(E.a.Item,Object(m.a)(Object(m.a)({},xe),{},{children:Object(P.jsx)(S.a,{type:"primary",htmlType:"submit",children:" Submit "})}))]}))]})},Ee=a(195),ke="app/LoginPage/LOGIN_REQUEST",ve="app/LoginPage/LOGIN_SUCCESS",Ce="app/LoginPage/LOGIN_ERROR";function Se(e,t){return{type:ve,user:e,token:t}}var we={body:{},token:"",isLoading:!1,isLogged:!1,error:{},user:{}},Re=Object(B.a)((function(e,t){switch(t.type){case ke:e.body=t.user,e.isLoading=!0;break;case ve:e.token=t.token,e.user=t.user,e.isLogged=!0,e.isLoading=!1;break;case Ce:e.body=t.error,e.isLoading=!1;break;default:return e}}),we),_e=function(e){return e.auth||we},Le=["component"],Te=Object(_.b)({isLogged:Object(_.a)(_e,(function(e){return e.isLogged}))}),Pe=function(e){var t=e.component,a=Object(Ee.a)(e,Le),n=Object(i.e)(Te).isLogged;return Object(P.jsx)(u.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return n?Object(P.jsx)(t,Object(m.a)({},e)):Object(P.jsx)(u.a,{to:"/login"})}}))},Ie="app/ChatPage/OPEN_MODAL_REQUEST",Ae="app/ChatPage/CLOSE_MODAL_REQUEST",Me="app/ChatPage/CHAT_REQUEST",Ne="app/ChatPage/CHAT_SUCCESS",Ue="app/ChatPage/CHAT_ERROR",Fe="app/ChatPage/CHAT_CREATE_REQUEST",Ge="app/ChatPage/CHAT_CREATE_SUCCESS",He="app/ChatPage/CHAT_CREATE_ERROR";function qe(e,t){return{type:Ge,chatroom:e,message:t}}function De(e,t){return{type:He,error:e,message:t}}var Ve={rooms:[],isLoading:!1,error:{},topic:{},message:"",modalOpen:!1},Qe=Object(B.a)((function(e,t){switch(t.type){case Me:e.isLoading=!0;break;case Ne:e.rooms=t.rooms,e.isLoading=!1;break;case Ue:e.error=t.error,e.isLoading=!1;break;case Fe:e.isLoading=!0,e.topic=t.topic;break;case Ge:console.log("action: ",t),e.rooms.push(t.chatroom),e.message=t.message,e.isLoading=!1,e.modalOpen=!1;break;case He:console.log("action: ",t),e.error=t.error,e.message=t.message,e.isLoading=!0;break;case Ie:e.modalOpen=!0;break;case Ae:e.modalOpen=!1;break;default:return e}}),Ve),We=a(196),Xe=function(e){return e.chatroom||Ve},Be=Y.a.mark(Ke),ze=Y.a.mark(Ye),Je=Y.a.mark(Ze);function Ke(){var e,t,a;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Z.a)(ce);case 3:if(e=n.sent,t=e.data,a=e.success,console.log("res login: ",t),!a){n.next=10;break}return n.next=10,Object(Z.b)((r=t.rooms,{type:Ne,rooms:r}));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("Error => ",n.t0);case 15:case"end":return n.stop()}var r}),Be,null,[[0,12]])}function Ye(){var e,t,a,n,r;return Y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Z.c)(Object(_.a)(Xe,(function(e){return e.topic})));case 2:return e=c.sent,c.prev=3,c.next=6,Object(Z.a)(se,e);case 6:if(t=c.sent,a=t.data,n=t.success,r=t.message,!n){c.next=16;break}return c.next=13,Object(Z.b)(qe(a.chatroom,r));case 13:We.a.info({description:r,placement:"bottomRight"}),c.next=19;break;case 16:return c.next=18,Object(Z.b)(De({},r));case 18:We.a.error({message:r,placement:"bottomRight"});case 19:c.next=27;break;case 21:return c.prev=21,c.t0=c.catch(3),console.log("Error => ",c.t0),c.next=26,Object(Z.b)(De(c.t0,""));case 26:We.a.error({message:c.t0,placement:"bottomRight"});case 27:case"end":return c.stop()}}),ze,null,[[3,21]])}function Ze(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.d)(Me,Ke);case 2:return e.next=4,Object(Z.d)(Fe,Ye);case 4:case"end":return e.stop()}}),Je)}var $e=y.a.Header,et=y.a.Content,tt="chatroom",at=function(){Object(p.b)({key:tt,reducer:Qe}),Object(p.c)({key:tt,saga:Ze});var e=Object(i.d)(),t=Object(_.b)({rooms:Object(_.a)(Xe,(function(e){return e.rooms})),isModalVisible:Object(_.a)(Xe,(function(e){return e.modalOpen}))}),a=Object(i.e)(t),r=a.rooms,c=a.isModalVisible,s=Object(u.h)(),o=s.path,b=s.url,j=E.a.useForm(),l=Object(f.a)(j,1)[0];return Object(n.useEffect)((function(){e({type:Me})}),[e]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(y.a,{children:[Object(P.jsx)($e,{children:Object(P.jsx)("div",{className:"logo"})}),Object(P.jsx)(et,{style:{padding:"0 50px",marginTop:64},children:Object(P.jsx)(k.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(P.jsxs)(v.a,{span:24,children:[Object(P.jsx)(C.a.Title,{children:"Welcome to Chat App"}),Object(P.jsxs)(k.a,{gutter:[16,16],align:"middle",justify:"center",children:[Object(P.jsxs)(v.a,{span:24,children:[Object(P.jsx)("h2",{children:"Chat Topic"}),Object(P.jsx)(S.a,{type:"primary",onClick:function(){return e({type:Ie})},children:"Create Topic"}),Object(P.jsx)(M,{form:l,isModalVisible:c,handleOk:function(t){return e(function(e){return{type:Fe,topic:e}}(t))},handleCancel:function(){return e({type:Ae})}})]}),Object(P.jsx)(v.a,{span:10,children:Object(P.jsx)(w.a,{children:Object(P.jsxs)("ul",{children:[r.length<=0&&Object(P.jsx)("h3",{children:" No topic found "}),r.map((function(e,t){return Object(P.jsx)("li",{children:Object(P.jsx)(R.a,{to:"".concat(b,"/").concat(e.slug),children:e.topic})},t)}))]})})}),Object(P.jsx)(v.a,{span:14,children:Object(P.jsx)(w.a,{children:Object(P.jsxs)(u.d,{children:[Object(P.jsx)(Pe,{exact:!0,path:o,component:function(){return Object(P.jsx)("h3",{children:"Please select a chat topic."})}}),Object(P.jsx)(Pe,{path:"".concat(o,"/:slug"),component:ye})]})})})]}),","]})})})]}),Object(P.jsx)(R.a,{to:"/",children:"Go Back"})]})},nt=a(40),rt=Y.a.mark(st),ct=Y.a.mark(ot);function st(){var e,t,a,n,r;return Y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Z.c)(Object(_.a)(_e,(function(e){return e.body})));case 2:return e=c.sent,c.prev=3,c.next=6,Object(Z.a)(ne,e);case 6:if(t=c.sent,a=t.data,n=t.success,r=t.message,!n){c.next=19;break}return localStorage.setItem("token",a.token),c.next=14,Object(Z.b)(Se(a.user,a.token));case 14:return We.a.info({description:r,placement:"bottomRight"}),c.next=17,Object(Z.b)(Object(nt.d)("/chat"));case 17:c.next=20;break;case 19:We.a.error({description:r,placement:"bottomRight"});case 20:c.next=26;break;case 22:c.prev=22,c.t0=c.catch(3),console.log("Error => ",c.t0),We.a.info({description:c.t0,placement:"bottomRight"});case 26:case"end":return c.stop()}}),rt,null,[[3,22]])}function ot(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.d)(ke,st);case 2:case"end":return e.stop()}}),ct)}var it=y.a.Header,ut=y.a.Content,bt={labelCol:{span:8},wrapperCol:{span:16}},jt={wrapperCol:{offset:8,span:16}},pt="auth",lt=function(){Object(p.b)({key:pt,reducer:Re}),Object(p.c)({key:pt,saga:ot});var e=Object(i.d)();return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(y.a,{children:[Object(P.jsx)(it,{children:Object(P.jsx)("div",{className:"logo"})}),Object(P.jsx)(ut,{style:{padding:"0 50px",marginTop:64},children:Object(P.jsx)(k.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(P.jsxs)(v.a,{span:10,children:[Object(P.jsx)(C.a.Title,{children:"Welcome to Chat App"}),Object(P.jsxs)(E.a,Object(m.a)(Object(m.a)({},bt),{},{initialValues:{username:"test",password:"test"},onFinish:function(t){return e(function(e){return{user:e,type:ke}}(t))},children:[Object(P.jsx)(E.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(P.jsx)(T.a,{})}),Object(P.jsx)(E.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(P.jsx)(T.a.Password,{})}),Object(P.jsx)(E.a.Item,Object(m.a)(Object(m.a)({},jt),{},{children:Object(P.jsxs)(C.a.Paragraph,{children:["Don't you have an account? ",Object(P.jsx)(R.a,{to:"/register",children:" Register here"})]})})),Object(P.jsx)(E.a.Item,Object(m.a)(Object(m.a)({},jt),{},{children:Object(P.jsx)(S.a,{type:"primary",htmlType:"submit",children:"Login"})}))]}))]})})})]})})},dt="app/RegisterPage/REGISTER_REQUEST",Ot="app/RegisterPage/REGISTER_SUCCESS",mt="app/RegisterPage/REGISTER_ERROR";function gt(e,t){return{type:Ot,user:e,message:t}}var ht={body:{},message:"",isLoading:!1,error:{},user:{}},xt=Object(B.a)((function(e,t){switch(t.type){case dt:e.body=t.body,e.isLoading=!0;break;case Ot:e.message=t.message,e.user=t.user,e.isLoading=!1;break;case mt:e.body=t.error,e.message=t.message,e.isLoading=!1;break;default:return e}}),ht),ft=function(e){return e.register||ht},yt=Y.a.mark(kt),Et=Y.a.mark(vt);function kt(){var e,t,a,n,r;return Y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Z.c)(Object(_.a)(ft,(function(e){return e.body})));case 2:return e=c.sent,c.prev=3,c.next=6,Object(Z.a)(re,e);case 6:if(t=c.sent,a=t.data,n=t.success,r=t.message,!n){c.next=18;break}return c.next=13,Object(Z.b)(gt(a.user,r));case 13:return c.next=15,Object(Z.b)(Object(nt.d)("/login"));case 15:We.a.info({description:r,placement:"bottomRight"}),c.next=21;break;case 18:return c.next=20,Object(Z.b)({type:mt,error:{}});case 20:We.a.error({message:r,placement:"bottomRight"});case 21:c.next=27;break;case 23:c.prev=23,c.t0=c.catch(3),console.log("Error => ",c.t0),We.a.error({message:c.t0,placement:"bottomRight"});case 27:case"end":return c.stop()}}),yt,null,[[3,23]])}function vt(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.d)(dt,kt);case 2:case"end":return e.stop()}}),Et)}var Ct=y.a.Header,St=y.a.Content,wt={labelCol:{span:8},wrapperCol:{span:16}},Rt={wrapperCol:{offset:8,span:16}},_t="register",Lt=function(){Object(p.b)({key:_t,reducer:xt}),Object(p.c)({key:_t,saga:vt});var e=Object(i.d)();return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(y.a,{children:[Object(P.jsx)(Ct,{children:Object(P.jsx)("div",{className:"logo"})}),Object(P.jsx)(St,{style:{padding:"0 50px",marginTop:64},children:Object(P.jsx)(k.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(P.jsxs)(v.a,{span:10,children:[Object(P.jsx)(C.a.Title,{children:"Welcome to Chat App"}),Object(P.jsxs)(E.a,Object(m.a)(Object(m.a)({},wt),{},{name:"basic",initialValues:{username:"test",password:"test",first_name:"hi",last_name:"there"},onFinish:function(t){return e({body:t,type:dt})},children:[Object(P.jsx)(E.a.Item,{label:"First Name",name:"first_name",rules:[{required:!0,message:"Please input your first name!"}],children:Object(P.jsx)(T.a,{})}),Object(P.jsx)(E.a.Item,{label:"Last Name",name:"last_name",rules:[{required:!0,message:"Please input your last name!"}],children:Object(P.jsx)(T.a,{})}),Object(P.jsx)(E.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(P.jsx)(T.a,{})}),Object(P.jsx)(E.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(P.jsx)(T.a.Password,{})}),Object(P.jsx)(E.a.Item,Object(m.a)(Object(m.a)({},Rt),{},{children:Object(P.jsxs)(C.a.Paragraph,{children:["Already have an account?   ",Object(P.jsx)(R.a,{to:"/",children:" Login here"})]})})),Object(P.jsx)(E.a.Item,Object(m.a)(Object(m.a)({},Rt),{},{children:Object(P.jsx)(S.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))]})})})]})})},Tt=function(e){var t=j.c;"object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&(t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}));var a=Object(O.a)({}),n=a.run,r=[a,Object(b.a)(e),d.a],c=[j.a.apply(void 0,r),Object(p.a)({createReducer:x,runSaga:n})];return Object(j.d)(x(),t.apply(void 0,c))}(h);var Pt=function(){return Object(P.jsx)(i.a,{store:Tt,children:Object(P.jsx)(o.a,{history:h,children:Object(P.jsxs)(u.d,{children:[Object(P.jsx)(u.b,{exact:!0,path:"/login",component:lt}),Object(P.jsx)(u.b,{exact:!0,path:"/register",component:Lt}),Object(P.jsx)(Pe,{path:"/chat",component:at}),Object(P.jsx)(u.a,{to:"/login",from:"/"}),Object(P.jsx)(u.b,{path:"*",exact:!0,component:lt})]})})})},It=(a(298),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,309)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))});s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(Pt,{})}),document.getElementById("root")),It()}},[[299,1,2]]]);
//# sourceMappingURL=main.f5976c29.chunk.js.map