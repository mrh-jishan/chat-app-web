(this["webpackJsonpchat-app-web"]=this["webpackJsonpchat-app-web"]||[]).push([[0],{208:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);n(200);var a=n(0),r=n.n(a),c=n(31),s=n.n(c),o=n(91),i=n(29),u=n(30),b=(n(208),n(169)),j=n(78),l=n(40),p=n(183),d=n.n(p),O=n(196),h=n(26),g=n(48),m=Object(g.b)({hashType:"hashbang"});function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(j.b)(Object(h.a)({router:Object(o.b)(m)},e));return t}var f=n(108),y=n(304),E=n(301),k=n(102),v=n(59),C=n(83),S=n(303),w=n(118),R=n(33),L=n(302),_=n(308),T=n(305),P=n(62),I=n(6),M=function(e){var t=e.toggleMenu,n=e.rooms,a=e.url;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(S.a,{children:[Object(I.jsx)("h3",{children:"Select Chat Room"}),Object(I.jsx)(L.b,{header:"".concat(n.length," chat rooms"),size:"small",itemLayout:"horizontal",dataSource:n,style:{height:"calc(100vh - 270px)",overflowY:"scroll"},bordered:!0,renderItem:function(e){return Object(I.jsx)(P.a,{to:"".concat(a,"/").concat(e.slug),onClick:t,children:Object(I.jsx)(S.a,{bodyStyle:{padding:10},children:Object(I.jsx)(S.a.Meta,{avatar:Object(I.jsx)(_.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:Object(I.jsx)(T.a.Text,{children:e.topic})})})})}})]})})},A=n(75),U=n(310),F=function(e){var t=e.isOpen,n=e.toggleMenu;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(C.a,{type:"primary",size:"large",icon:t?Object(I.jsx)(A.a,{}):Object(I.jsx)(U.a,{}),onClick:n,style:{position:"fixed",left:"20px",top:"75px",zIndex:2}})})},N=n(306),H=n(307),G={labelCol:{span:8},wrapperCol:{span:16}},Q={wrapperCol:{offset:8,span:16}},V=function(e){var t=e.form,n=e.isModalVisible,a=e.handleOk,r=e.handleCancel;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(N.a,{title:"Create Chat Topic",centered:!0,visible:n,onOk:a,onCancel:r,footer:null,children:Object(I.jsx)(y.a,Object(h.a)(Object(h.a)({},G),{},{form:t,onFinish:a,children:Object(I.jsx)(k.a,{align:"middle",justify:"center",children:Object(I.jsxs)(v.a,{span:16,children:[Object(I.jsx)(y.a.Item,{label:"Topic Name",name:"topic",rules:[{required:!0,message:"Please input your topic name!"}],children:Object(I.jsx)(H.a,{})}),Object(I.jsx)(y.a.Item,Object(h.a)(Object(h.a)({},Q),{},{children:Object(I.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]})})}))})})},q=n(191),z=n.n(q),D=n(300),W="app/MessagePage/MESSAGE_REQUEST",X="app/MessagePage/MESSAGE_SUCCESS",K="app/MessagePage/MESSAGE_ERROR",B="app/MessagePage/NEW_MESSAGE_REQUEST",Y="app/MessagePage/NEW_MESSAGE_SUCCESS",J="app/MessagePage/NEW_MESSAGE_ERROR",Z="app/MessagePage/NEW_SOCKET_MESSAGE_SUCCESS";var $=n(63),ee={content:null,isLoading:!1,error:{},messages:[],slug:null,message:{}},te=Object($.a)((function(e,t){switch(t.type){case W:e.slug=t.slug,e.isLoading=!0;break;case X:e.messages=t.messages,e.isLoading=!1;break;case K:e.isLoading=!1,e.error=t.error;break;case B:e.isLoading=!0,e.content=t.content;break;case Y:e.message=t.message,e.isLoading=!1;break;case J:e.isLoading=!1,e.error=t.error;break;case Z:e.messages.push(t.message);break;default:return e}}),ee),ne=n(27),ae=n.n(ne),re=n(21),ce=n(145),se=n.n(ce),oe=se.a.create(),ie="https://chat-app-api-1.herokuapp.com";oe.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e.headers.Authorization="Bearer ".concat(t),e}));var ue=function(e){return se.a.post("".concat(ie,"/login"),{user:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},be=function(e){return se.a.post("".concat(ie,"/signup"),{user:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},je=function(){return oe.get("".concat(ie,"/user")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},le=function(){return oe.get("".concat(ie,"/chatrooms")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},pe=function(e){return oe.post("".concat(ie,"/chatrooms"),{chatroom:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},de=function(e){return oe.get("".concat(ie,"/chatrooms/").concat(e,"/messages")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},Oe=function(e,t){return oe.post("".concat(ie,"/chatrooms/").concat(e,"/messages"),{message:{content:t}}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},he=function(e){return e.messageList||ee},ge=function(){return Object(R.a)(he,(function(e){return e.slug}))},me=ae.a.mark(ye),xe=ae.a.mark(Ee),fe=ae.a.mark(ke);function ye(){var e,t,n;return ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(re.c)(ge());case 2:return e=a.sent,a.prev=3,a.next=6,Object(re.a)(de,e);case 6:if(t=a.sent,n=t.data,!t.success){a.next=12;break}return a.next=12,Object(re.b)((r=n.messages,{type:X,messages:r}));case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(3),console.log("Error => ",a.t0);case 17:case"end":return a.stop()}var r}),me,null,[[3,14]])}function Ee(){var e,t,n,a;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(re.c)(ge());case 2:return e=r.sent,r.next=5,Object(re.c)(Object(R.a)(he,(function(e){return e.content})));case 5:return t=r.sent,r.prev=6,r.next=9,Object(re.a)(Oe,e,t);case 9:if(n=r.sent,a=n.data,!n.success){r.next=15;break}return r.next=15,Object(re.b)((c=a.message,{type:Y,message:c}));case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(6),console.log("Error => ",r.t0);case 20:case"end":return r.stop()}var c}),xe,null,[[6,17]])}function ke(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)(W,ye);case 2:return e.next=4,Object(re.d)(B,Ee);case 4:case"end":return e.stop()}}),fe)}var ve=H.a.TextArea,Ce={labelCol:{span:8},wrapperCol:{span:16}},Se="messageList",we=function(){Object(l.b)({key:Se,reducer:te}),Object(l.c)({key:Se,saga:ke});var e=Object(i.d)(),t=Object(R.b)({messages:Object(R.a)(he,(function(e){return e.messages}))}),n=Object(i.e)(t).messages,r=Object(a.useRef)(null),c=Object(u.g)().slug,s=y.a.useForm(),o=Object(f.a)(s,1)[0];return Object(a.useEffect)((function(){var t=z.a.createConsumer("wss://chat-app-api-1.herokuapp.com/cable").subscriptions.create({channel:"MessagesChannel",chatroom_slug:"messages_".concat(c)},{connected:function(){console.log("connected!")},disconnected:function(){console.log("disconnected")},received:function(t){var n,a;e((a=t.message,{type:Z,message:a})),console.log("inputEl: ",r),null===(n=r.current)||void 0===n||n.scrollIntoView()}});return function(){t.consumer.disconnect()}}),[c,e]),Object(a.useEffect)((function(){e(function(e){return{slug:e,type:W}}(c)),setTimeout((function(){return r.current.scrollIntoView()}),500)}),[c,e]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("h3",{children:["Chat Room: ",c]}),Object(I.jsx)(L.b,{style:{height:"calc(100vh - 400px)",overflow:"auto"},header:"".concat(n.length," replies"),dataSource:n,bordered:!0,footer:Object(I.jsx)("div",{ref:r}),renderItem:function(e){return Object(I.jsx)(S.a,{bodyStyle:{padding:"0 10px"},children:Object(I.jsx)(D.a,{actions:e.actions,author:e.user.username,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:e.content,datetime:e.created_at})})}}),Object(I.jsxs)(y.a,Object(h.a)(Object(h.a)({},Ce),{},{name:"basic",onFinish:function(t){var n;e((n=t.content,{type:B,content:n})),o.resetFields()},form:o,children:[Object(I.jsx)(y.a.Item,{wrapperCol:{span:24},name:"content",rules:[{required:!0,message:"Please input your message!"}],children:Object(I.jsx)(ve,{rows:2,placeholder:"Message..."})}),Object(I.jsx)(y.a.Item,{wrapperCol:{span:24},style:{textAlign:"right"},children:Object(I.jsx)(C.a,{type:"primary",htmlType:"submit",children:" Submit "})})]}))]})},Re="app/ChatPage/OPEN_MODAL_REQUEST",Le="app/ChatPage/CLOSE_MODAL_REQUEST",_e="app/ChatPage/CHAT_REQUEST",Te="app/ChatPage/CHAT_SUCCESS",Pe="app/ChatPage/CHAT_ERROR",Ie="app/ChatPage/CHAT_CREATE_REQUEST",Me="app/ChatPage/CHAT_CREATE_SUCCESS",Ae="app/ChatPage/CHAT_CREATE_ERROR";function Ue(e,t){return{type:Me,chatroom:e,message:t}}function Fe(e,t){return{type:Ae,error:e,message:t}}var Ne={rooms:[],isLoading:!1,error:{},topic:{},message:"",modalOpen:!1},He=Object($.a)((function(e,t){switch(t.type){case _e:e.isLoading=!0;break;case Te:e.rooms=t.rooms,e.isLoading=!1;break;case Pe:e.error=t.error,e.isLoading=!1;break;case Ie:e.isLoading=!0,e.topic=t.topic;break;case Me:e.rooms.splice(0,0,t.chatroom),e.message=t.message,e.isLoading=!1,e.modalOpen=!1;break;case Ae:e.error=t.error,e.message=t.message,e.isLoading=!0;break;case Re:e.modalOpen=!0;break;case Le:e.modalOpen=!1;break;default:return e}}),Ne),Ge=n(199),Qe=function(e){return e.chatroom||Ne},Ve=ae.a.mark(De),qe=ae.a.mark(We),ze=ae.a.mark(Xe);function De(){var e,t;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(re.a)(le);case 3:if(e=n.sent,t=e.data,!e.success){n.next=9;break}return n.next=9,Object(re.b)((a=t.rooms,{type:Te,rooms:a}));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("Error => ",n.t0);case 14:case"end":return n.stop()}var a}),Ve,null,[[0,11]])}function We(){var e,t,n,a,r;return ae.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(re.c)(Object(R.a)(Qe,(function(e){return e.topic})));case 2:return e=c.sent,c.prev=3,c.next=6,Object(re.a)(pe,e);case 6:if(t=c.sent,n=t.data,a=t.success,r=t.message,!a){c.next=16;break}return c.next=13,Object(re.b)(Ue(n.chatroom,r));case 13:Ge.a.info({description:r,placement:"bottomRight"}),c.next=19;break;case 16:return c.next=18,Object(re.b)(Fe({},r));case 18:Ge.a.error({message:r,placement:"bottomRight"});case 19:c.next=27;break;case 21:return c.prev=21,c.t0=c.catch(3),console.log("Error => ",c.t0),c.next=26,Object(re.b)(Fe(c.t0,""));case 26:Ge.a.error({message:c.t0,placement:"bottomRight"});case 27:case"end":return c.stop()}}),qe,null,[[3,21]])}function Xe(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)(_e,De);case 2:return e.next=4,Object(re.d)(Ie,We);case 4:case"end":return e.stop()}}),ze)}var Ke="chatroom",Be=function(){Object(l.b)({key:Ke,reducer:He}),Object(l.c)({key:Ke,saga:Xe});var e=Object(w.useMediaQuery)({maxWidth:767}),t=Object(a.useState)(!1),n=Object(f.a)(t,2),r=n[0],c=n[1],s=Object(i.d)(),o=Object(R.b)({rooms:Object(R.a)(Qe,(function(e){return e.rooms})),isModalVisible:Object(R.a)(Qe,(function(e){return e.modalOpen}))}),b=Object(i.e)(o),j=b.rooms,p=b.isModalVisible,d=Object(u.h)(),O=d.path,h=d.url,g=y.a.useForm(),m=Object(f.a)(g,1)[0];Object(a.useEffect)((function(){s({type:_e})}),[s]);var x=function(){e&&c(!r)};return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(E.a,{style:{marginTop:20},children:Object(I.jsxs)(k.a,{gutter:[16,16],justify:"center",style:{height:"250px"},children:[Object(I.jsxs)(v.a,{span:24,children:[Object(I.jsx)(k.a,{gutter:[16,16],align:"middle",justify:"end",children:Object(I.jsx)(v.a,{children:Object(I.jsx)(C.a,{type:"primary",onClick:function(){return s({type:Re})},children:"Create Topic"})})}),Object(I.jsx)(V,{form:m,isModalVisible:p,handleOk:function(e){return s(function(e){return{type:Ie,topic:e}}(e))},handleCancel:function(){return s({type:Le})}})]}),Object(I.jsx)(v.a,{span:24,children:Object(I.jsxs)(k.a,{gutter:[16,16],align:"stretch",justify:"center",children:[e&&Object(I.jsx)(F,{isOpen:r,toggleMenu:x}),r&&e&&Object(I.jsx)(v.a,{style:{position:"fixed",zIndex:1,top:64,width:"100%"},children:Object(I.jsx)(M,{toggleMenu:x,rooms:j,url:h})}),!e&&Object(I.jsx)(v.a,{style:{width:"35%"},children:Object(I.jsx)(M,{toggleMenu:x,rooms:j,url:h})}),Object(I.jsx)(v.a,{flex:"auto",children:Object(I.jsx)(S.a,{children:j.length<=0?Object(I.jsx)("h3",{children:" No topic found "}):Object(I.jsxs)(u.d,{children:[Object(I.jsx)(u.b,{exact:!0,path:O,component:function(){return Object(I.jsxs)("div",{style:{textAlign:"center"},children:[Object(I.jsx)("h3",{children:"Please select a chat topic..."}),e&&Object(I.jsx)(C.a,{type:"primary",onClick:x,children:"Open Chat Room"})]})}}),Object(I.jsx)(u.b,{path:"".concat(O,"/:slug"),component:we})]})})})]})})]})})})},Ye="app/LoginPage/LOGIN_REQUEST",Je="app/LoginPage/LOGIN_SUCCESS",Ze="app/LoginPage/LOGIN_ERROR";function $e(e){return{type:Ze,error:e}}var et={body:{},isLoading:!1,error:{}},tt=Object($.a)((function(e,t){switch(t.type){case Ye:e.body=t.user,e.isLoading=!0;break;case Je:e.isLoading=!1;break;case Ze:e.body=t.error,e.isLoading=!1;break;default:return e}}),et),nt="app/StartUpPage/CHECK_LOGIN_REQUEST",at="app/StartUpPage/CHECK_LOGIN_SUCCESS",rt="app/StartUpPage/CHECK_LOGIN_ERROR",ct="app/StartUpPage/LOGOUT_REQUEST";function st(e,t){return{type:at,token:t,user:e}}function ot(e){return{type:rt,error:e}}var it=function(e){return e.auth||et},ut=ae.a.mark(jt),bt=ae.a.mark(lt);function jt(){var e,t,n,a,r;return ae.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(re.c)(Object(R.a)(it,(function(e){return e.body})));case 2:return e=c.sent,c.prev=3,c.next=6,Object(re.a)(ue,e);case 6:if(t=c.sent,n=t.data,a=t.success,r=t.message,!a){c.next=19;break}return localStorage.setItem("token",n.token),c.next=14,Object(re.b)({type:Je});case 14:return c.next=16,Object(re.b)(st(n.user,n.token));case 16:Ge.a.info({description:r,placement:"bottomRight"}),c.next=22;break;case 19:return c.next=21,Object(re.b)($e({}));case 21:Ge.a.error({description:r,placement:"bottomRight"});case 22:c.next=30;break;case 24:return c.prev=24,c.t0=c.catch(3),console.log("Error => ",c.t0),c.next=29,Object(re.b)($e(c.t0));case 29:Ge.a.info({description:c.t0,placement:"bottomRight"});case 30:case"end":return c.stop()}}),ut,null,[[3,24]])}function lt(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)(Ye,jt);case 2:case"end":return e.stop()}}),bt)}var pt=E.a.Content,dt={labelCol:{span:8},wrapperCol:{span:16}},Ot={wrapperCol:{offset:8,span:16}},ht="auth",gt=function(){Object(l.b)({key:ht,reducer:tt}),Object(l.c)({key:ht,saga:lt});var e=Object(i.d)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(pt,{style:{padding:"0 50px",marginTop:64},children:Object(I.jsx)(k.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(I.jsxs)(v.a,{span:10,children:[Object(I.jsx)(T.a.Title,{children:"Welcome to Chat App"}),Object(I.jsxs)(y.a,Object(h.a)(Object(h.a)({},dt),{},{initialValues:{username:"test",password:"test"},onFinish:function(t){return e(function(e){return{user:e,type:Ye}}(t))},children:[Object(I.jsx)(y.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(I.jsx)(H.a,{})}),Object(I.jsx)(y.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(I.jsx)(H.a.Password,{})}),Object(I.jsx)(y.a.Item,Object(h.a)(Object(h.a)({},Ot),{},{children:Object(I.jsxs)(T.a.Paragraph,{children:["Don't you have an account? ",Object(I.jsx)(P.a,{to:"/register",children:" Register here"})]})})),Object(I.jsx)(y.a.Item,Object(h.a)(Object(h.a)({},Ot),{},{children:Object(I.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Login"})}))]}))]})})})})},mt="app/RegisterPage/REGISTER_REQUEST",xt="app/RegisterPage/REGISTER_SUCCESS",ft="app/RegisterPage/REGISTER_ERROR";function yt(e,t){return{type:xt,user:e,message:t}}var Et={body:{},message:"",isLoading:!1,error:{},user:{}},kt=Object($.a)((function(e,t){switch(t.type){case mt:e.body=t.body,e.isLoading=!0;break;case xt:e.message=t.message,e.user=t.user,e.isLoading=!1;break;case ft:e.body=t.error,e.message=t.message,e.isLoading=!1;break;default:return e}}),Et),vt=n(41),Ct=function(e){return e.register||Et},St=ae.a.mark(Rt),wt=ae.a.mark(Lt);function Rt(){var e,t,n,a,r;return ae.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(re.c)(Object(R.a)(Ct,(function(e){return e.body})));case 2:return e=c.sent,c.prev=3,c.next=6,Object(re.a)(be,e);case 6:if(t=c.sent,n=t.data,a=t.success,r=t.message,!a){c.next=18;break}return c.next=13,Object(re.b)(yt(n.user,r));case 13:return c.next=15,Object(re.b)(Object(vt.d)("/login"));case 15:Ge.a.info({description:r,placement:"bottomRight"}),c.next=21;break;case 18:return c.next=20,Object(re.b)({type:ft,error:{}});case 20:Ge.a.error({message:r,placement:"bottomRight"});case 21:c.next=27;break;case 23:c.prev=23,c.t0=c.catch(3),console.log("Error => ",c.t0),Ge.a.error({message:c.t0,placement:"bottomRight"});case 27:case"end":return c.stop()}}),St,null,[[3,23]])}function Lt(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)(mt,Rt);case 2:case"end":return e.stop()}}),wt)}var _t=E.a.Content,Tt={labelCol:{span:8},wrapperCol:{span:16}},Pt={wrapperCol:{offset:8,span:16}},It="register",Mt=function(){Object(l.b)({key:It,reducer:kt}),Object(l.c)({key:It,saga:Lt});var e=Object(i.d)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(_t,{style:{padding:"0 50px",marginTop:64},children:Object(I.jsx)(k.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(I.jsxs)(v.a,{span:10,children:[Object(I.jsx)(T.a.Title,{children:"Welcome to Chat App"}),Object(I.jsxs)(y.a,Object(h.a)(Object(h.a)({},Tt),{},{name:"basic",initialValues:{username:"test",password:"test",first_name:"hi",last_name:"there"},onFinish:function(t){return e({body:t,type:mt})},children:[Object(I.jsx)(y.a.Item,{label:"First Name",name:"first_name",rules:[{required:!0,message:"Please input your first name!"}],children:Object(I.jsx)(H.a,{})}),Object(I.jsx)(y.a.Item,{label:"Last Name",name:"last_name",rules:[{required:!0,message:"Please input your last name!"}],children:Object(I.jsx)(H.a,{})}),Object(I.jsx)(y.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(I.jsx)(H.a,{})}),Object(I.jsx)(y.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(I.jsx)(H.a.Password,{})}),Object(I.jsx)(y.a.Item,Object(h.a)(Object(h.a)({},Pt),{},{children:Object(I.jsxs)(T.a.Paragraph,{children:["Already have an account?   ",Object(I.jsx)(P.a,{to:"/",children:" Login here"})]})})),Object(I.jsx)(y.a.Item,Object(h.a)(Object(h.a)({},Pt),{},{children:Object(I.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))]})})})})},At=n(158),Ut=n(309),Ft={token:"",isLoading:!1,isLogged:!1,error:{},user:{}},Nt=Object($.a)((function(e,t){switch(t.type){case nt:e.token=t.token,e.isLoading=!0;break;case at:e.token=t.token,e.user=t.user,e.isLogged=!0,e.isLoading=!1;break;case rt:e.body=t.error,e.isLoading=!1;break;case ct:e.isLogged=!1;break;default:return e}}),Ft),Ht=function(e){return e.root||Ft},Gt=["component"],Qt=["component","restricted"],Vt=E.a.Header,qt=E.a.Footer,zt=E.a.Content,Dt=Object(R.b)({isLogged:Object(R.a)(Ht,(function(e){return e.isLogged}))}),Wt=function(e){var t=e.component,n=Object(At.a)(e,Gt),r=Object(i.e)(Dt).isLogged,c=Object(i.d)(),s=Object(w.useMediaQuery)({maxWidth:767}),o=function(e){c({type:ct})};return Object(a.useEffect)((function(){console.log("ismpb",s)}),[s]),Object(I.jsx)(u.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return r?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(E.a,{children:[Object(I.jsx)(Vt,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(I.jsxs)(k.a,{justify:"space-between",children:[Object(I.jsxs)(v.a,{span:10,children:[Object(I.jsx)("div",{className:"logo"}),Object(I.jsx)(Ut.a,{theme:"dark",mode:"horizontal",children:Object(I.jsx)(Ut.a.Item,{children:"Home"},"1")})]}),Object(I.jsx)(v.a,{span:8,children:Object(I.jsx)(k.a,{justify:"end",children:Object(I.jsx)(v.a,{children:Object(I.jsxs)(Ut.a,{theme:"dark",mode:"horizontal",onClick:o,children:[Object(I.jsx)(Ut.a.Item,{children:"Profile"},"3"),Object(I.jsx)(Ut.a.Item,{children:"Logout"},"4")]})})})})]})}),Object(I.jsx)(zt,{style:{padding:s?"0 5px":"0 50px",marginTop:64,minHeight:"calc(100vh - 120px)"},children:Object(I.jsx)(t,Object(h.a)({},e))}),Object(I.jsx)(qt,{style:{textAlign:"center"},children:"ChatApp \xa92021 Created by Robiul Hassan"})]})}):Object(I.jsx)(u.a,{to:"/login"})}}))},Xt=function(e){var t=e.component,n=(e.restricted,Object(At.a)(e,Qt)),a=Object(i.e)(Dt).isLogged;return Object(I.jsx)(u.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return a?Object(I.jsx)(u.a,{to:"/chat"}):Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(E.a,{children:[Object(I.jsx)(Vt,{children:Object(I.jsx)("div",{className:"logo"})}),Object(I.jsx)(t,Object(h.a)({},e)),Object(I.jsx)(qt,{style:{textAlign:"center"},children:"ChatApp \xa92021 Created by Robiul Hassan"})]})})}}))},Kt=ae.a.mark(Yt),Bt=ae.a.mark(Zt);function Yt(){var e,t,n;return ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(re.c)(Object(R.a)(Ht,(function(e){return e.token})));case 2:return e=a.sent,a.prev=3,a.next=6,Object(re.a)(je);case 6:if(t=a.sent,n=t.data,!t.success){a.next=14;break}return a.next=12,Object(re.b)(st(n.user,e));case 12:a.next=16;break;case 14:return a.next=16,Object(re.b)(ot({}));case 16:a.next=23;break;case 18:return a.prev=18,a.t0=a.catch(3),console.log("Error => ",a.t0),a.next=23,Object(re.b)(ot(a.t0));case 23:case"end":return a.stop()}}),Kt,null,[[3,18]])}function Jt(){localStorage.clear()}function Zt(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)(nt,Yt);case 2:return e.next=4,Object(re.d)(ct,Jt);case 4:case"end":return e.stop()}}),Bt)}var $t="root",en=function(e){Object(l.b)({key:$t,reducer:Nt}),Object(l.c)({key:$t,saga:Zt});var t=Object(i.d)();return Object(a.useEffect)((function(){return t((e=localStorage.getItem("token"),{type:nt,token:e}));var e}),[t]),e.children},tn=function(e){var t=j.c;"object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&(t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}));var n=Object(O.a)({}),a=n.run,r=[n,Object(b.a)(e),d.a],c=[j.a.apply(void 0,r),Object(l.a)({createReducer:x,runSaga:a})];return Object(j.d)(x(),t.apply(void 0,c))}(m);var nn=function(){return Object(I.jsx)(i.a,{store:tn,children:Object(I.jsx)(o.a,{history:m,children:Object(I.jsx)(en,{children:Object(I.jsxs)(u.d,{children:[Object(I.jsx)(Xt,{exact:!0,path:"/login",component:gt}),Object(I.jsx)(Xt,{exact:!0,path:"/register",component:Mt}),Object(I.jsx)(Wt,{path:"/chat",component:Be}),Object(I.jsx)(u.a,{to:"/login",from:"/"}),Object(I.jsx)(Xt,{path:"*",exact:!0,component:gt})]})})})})},an=(n(296),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,311)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))});s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(nn,{})}),document.getElementById("root")),an()}},[[297,1,2]]]);
//# sourceMappingURL=main.f030b3d8.chunk.js.map