(this["webpackJsonpchat-app-web"]=this["webpackJsonpchat-app-web"]||[]).push([[0],{210:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);n(200);var a=n(0),r=n.n(a),c=n(29),s=n.n(c),o=n(90),i=n(31),u=n(28),b=(n(210),n(168)),j=n(76),l=n(40),p=n(183),d=n.n(p),O=n(196),h=n(26),m=n(46),g=Object(m.b)({hashType:"hashbang"});function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(j.b)(Object(h.a)({router:Object(o.b)(g)},e));return t}var f=n(133),y=n(305),E=n(308),k=n(312),v=n(101),C=n(59),S=n(309),w=n(81),R=n(307),_=n(63),L=n(33),T=n(310),P=n(311),I=n(6),A={labelCol:{span:8},wrapperCol:{span:16}},U={wrapperCol:{offset:8,span:16}},M=function(e){var t=e.form,n=e.isModalVisible,a=e.handleOk,r=e.handleCancel;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(T.a,{title:"Create Chat Topic",centered:!0,visible:n,onOk:a,onCancel:r,footer:null,children:Object(I.jsx)(E.a,Object(h.a)(Object(h.a)({},A),{},{form:t,onFinish:a,children:Object(I.jsx)(v.a,{align:"middle",justify:"center",children:Object(I.jsxs)(C.a,{span:16,children:[Object(I.jsx)(E.a.Item,{label:"Topic Name",name:"topic",rules:[{required:!0,message:"Please input your topic name!"}],children:Object(I.jsx)(P.a,{})}),Object(I.jsx)(E.a.Item,Object(h.a)(Object(h.a)({},U),{},{children:Object(I.jsx)(w.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]})})}))})})},N=n(188),F=n.n(N),G=n(306),H=n(304),D="app/MessagePage/MESSAGE_REQUEST",V="app/MessagePage/MESSAGE_SUCCESS",q="app/MessagePage/MESSAGE_ERROR",Q="app/MessagePage/NEW_MESSAGE_REQUEST",W="app/MessagePage/NEW_MESSAGE_SUCCESS",z="app/MessagePage/NEW_MESSAGE_ERROR",X="app/MessagePage/NEW_SOCKET_MESSAGE_SUCCESS";var K=n(61),B={content:null,isLoading:!1,error:{},messages:[],slug:null,message:{}},J=Object(K.a)((function(e,t){switch(t.type){case D:e.slug=t.slug,e.isLoading=!0;break;case V:e.messages=t.messages,e.isLoading=!1;break;case q:e.isLoading=!1,e.error=t.error;break;case Q:e.isLoading=!0,e.content=t.content;break;case W:e.message=t.message,e.isLoading=!1;break;case z:e.isLoading=!1,e.error=t.error;break;case X:e.messages.push(t.message);break;default:return e}}),B),Y=n(27),Z=n.n(Y),$=n(21),ee=n(145),te=n.n(ee),ne=te.a.create(),ae="https://chat-app-api-1.herokuapp.com";ne.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e.headers.Authorization="Bearer ".concat(t),e}));var re=function(e){return te.a.post("".concat(ae,"/login"),{user:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},ce=function(e){return te.a.post("".concat(ae,"/signup"),{user:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},se=function(){return ne.get("".concat(ae,"/user")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},oe=function(){return ne.get("".concat(ae,"/chatrooms")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},ie=function(e){return ne.post("".concat(ae,"/chatrooms"),{chatroom:e}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},ue=function(e){return ne.get("".concat(ae,"/chatrooms/").concat(e,"/messages")).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},be=function(e,t){return ne.post("".concat(ae,"/chatrooms/").concat(e,"/messages"),{message:{content:t}}).then((function(e){return e.data})).catch((function(e){return e.response.data||e.response}))},je=function(e){return e.messageList||B},le=function(){return Object(L.a)(je,(function(e){return e.slug}))},pe=Z.a.mark(he),de=Z.a.mark(me),Oe=Z.a.mark(ge);function he(){var e,t,n;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object($.c)(le());case 2:return e=a.sent,a.prev=3,a.next=6,Object($.a)(ue,e);case 6:if(t=a.sent,n=t.data,!t.success){a.next=12;break}return a.next=12,Object($.b)((r=n.messages,{type:V,messages:r}));case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(3),console.log("Error => ",a.t0);case 17:case"end":return a.stop()}var r}),pe,null,[[3,14]])}function me(){var e,t,n,a;return Z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object($.c)(le());case 2:return e=r.sent,r.next=5,Object($.c)(Object(L.a)(je,(function(e){return e.content})));case 5:return t=r.sent,r.prev=6,r.next=9,Object($.a)(be,e,t);case 9:if(n=r.sent,a=n.data,!n.success){r.next=15;break}return r.next=15,Object($.b)((c=a.message,{type:W,message:c}));case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(6),console.log("Error => ",r.t0);case 20:case"end":return r.stop()}var c}),de,null,[[6,17]])}function ge(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.d)(D,he);case 2:return e.next=4,Object($.d)(Q,me);case 4:case"end":return e.stop()}}),Oe)}var xe=P.a.TextArea,fe={labelCol:{span:8},wrapperCol:{span:16}},ye="messageList",Ee=function(){Object(l.b)({key:ye,reducer:J}),Object(l.c)({key:ye,saga:ge});var e=Object(i.d)(),t=Object(L.b)({messages:Object(L.a)(je,(function(e){return e.messages}))}),n=Object(i.e)(t).messages,r=Object(a.useRef)(null),c=Object(u.g)().slug,s=E.a.useForm(),o=Object(f.a)(s,1)[0];return Object(a.useEffect)((function(){var t=F.a.createConsumer("wss://chat-app-api-1.herokuapp.com/cable").subscriptions.create({channel:"MessagesChannel",chatroom_slug:"messages_".concat(c)},{connected:function(){console.log("connected!")},disconnected:function(){console.log("disconnected")},received:function(t){var n;e((n=t.message,{type:X,message:n})),console.log("inputEl: ",r),r.current.scrollIntoView()}});return function(){t.consumer.disconnect()}}),[c,e]),Object(a.useEffect)((function(){e(function(e){return{slug:e,type:D}}(c)),setTimeout((function(){return r.current.scrollIntoView()}),500)}),[c,e]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("h3",{children:["Chat Room: ",c]}),Object(I.jsx)(G.b,{className:"comment-list",style:{height:380,overflow:"auto"},header:"".concat(n.length," replies"),dataSource:n,bordered:!0,footer:Object(I.jsx)("div",{ref:r}),renderItem:function(e){return Object(I.jsx)(H.a,{actions:e.actions,author:e.user.username,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:e.content,datetime:e.created_at})}}),Object(I.jsxs)(E.a,Object(h.a)(Object(h.a)({},fe),{},{name:"basic",onFinish:function(t){var n;e((n=t.content,{type:Q,content:n})),o.resetFields()},form:o,children:[Object(I.jsx)(E.a.Item,{wrapperCol:{span:24},name:"content",rules:[{required:!0,message:"Please input your message!"}],children:Object(I.jsx)(xe,{rows:2,placeholder:"Message..."})}),Object(I.jsx)(E.a.Item,{wrapperCol:{span:24},style:{textAlign:"right"},children:Object(I.jsx)(w.a,{type:"primary",htmlType:"submit",children:" Submit "})})]}))]})},ke="app/ChatPage/OPEN_MODAL_REQUEST",ve="app/ChatPage/CLOSE_MODAL_REQUEST",Ce="app/ChatPage/CHAT_REQUEST",Se="app/ChatPage/CHAT_SUCCESS",we="app/ChatPage/CHAT_ERROR",Re="app/ChatPage/CHAT_CREATE_REQUEST",_e="app/ChatPage/CHAT_CREATE_SUCCESS",Le="app/ChatPage/CHAT_CREATE_ERROR";function Te(e,t){return{type:_e,chatroom:e,message:t}}function Pe(e,t){return{type:Le,error:e,message:t}}var Ie={rooms:[],isLoading:!1,error:{},topic:{},message:"",modalOpen:!1},Ae=Object(K.a)((function(e,t){switch(t.type){case Ce:e.isLoading=!0;break;case Se:e.rooms=t.rooms,e.isLoading=!1;break;case we:e.error=t.error,e.isLoading=!1;break;case Re:e.isLoading=!0,e.topic=t.topic;break;case _e:e.rooms.splice(0,0,t.chatroom),e.message=t.message,e.isLoading=!1,e.modalOpen=!1;break;case Le:e.error=t.error,e.message=t.message,e.isLoading=!0;break;case ke:e.modalOpen=!0;break;case ve:e.modalOpen=!1;break;default:return e}}),Ie),Ue=n(199),Me=function(e){return e.chatroom||Ie},Ne=Z.a.mark(He),Fe=Z.a.mark(De),Ge=Z.a.mark(Ve);function He(){var e,t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($.a)(oe);case 3:if(e=n.sent,t=e.data,!e.success){n.next=9;break}return n.next=9,Object($.b)((a=t.rooms,{type:Se,rooms:a}));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("Error => ",n.t0);case 14:case"end":return n.stop()}var a}),Ne,null,[[0,11]])}function De(){var e,t,n,a,r;return Z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object($.c)(Object(L.a)(Me,(function(e){return e.topic})));case 2:return e=c.sent,c.prev=3,c.next=6,Object($.a)(ie,e);case 6:if(t=c.sent,n=t.data,a=t.success,r=t.message,!a){c.next=16;break}return c.next=13,Object($.b)(Te(n.chatroom,r));case 13:Ue.a.info({description:r,placement:"bottomRight"}),c.next=19;break;case 16:return c.next=18,Object($.b)(Pe({},r));case 18:Ue.a.error({message:r,placement:"bottomRight"});case 19:c.next=27;break;case 21:return c.prev=21,c.t0=c.catch(3),console.log("Error => ",c.t0),c.next=26,Object($.b)(Pe(c.t0,""));case 26:Ue.a.error({message:c.t0,placement:"bottomRight"});case 27:case"end":return c.stop()}}),Fe,null,[[3,21]])}function Ve(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.d)(Ce,He);case 2:return e.next=4,Object($.d)(Re,De);case 4:case"end":return e.stop()}}),Ge)}var qe=y.a.Content,Qe=y.a.Sider,We="chatroom",ze=function(){Object(l.b)({key:We,reducer:Ae}),Object(l.c)({key:We,saga:Ve});var e=Object(i.d)(),t=Object(L.b)({rooms:Object(L.a)(Me,(function(e){return e.rooms})),isModalVisible:Object(L.a)(Me,(function(e){return e.modalOpen}))}),n=Object(i.e)(t),r=n.rooms,c=n.isModalVisible,s=Object(u.h)(),o=s.path,b=s.url,j=E.a.useForm(),p=Object(f.a)(j,1)[0];return Object(a.useEffect)((function(){e({type:Ce})}),[e]),Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(qe,{style:{padding:"0 50px",marginTop:64},children:Object(I.jsxs)(y.a,{children:[Object(I.jsx)(Qe,{style:{overflow:"auto",height:"calc(100vh - 60px)",position:"fixed",left:0,top:60},children:Object(I.jsx)(k.a,{theme:"dark",mode:"inline",children:r.map((function(e,t){return Object(I.jsxs)(a.Fragment,{children:[Object(I.jsx)(k.a.Divider,{type:"horizontal"}),Object(I.jsx)(k.a.Item,{children:Object(I.jsx)(_.a,{to:"".concat(b,"/").concat(e.slug),children:e.topic})},t)]},t)}))})}),Object(I.jsx)(y.a,{className:"site-layout",style:{marginLeft:200,marginTop:20},children:Object(I.jsxs)(v.a,{align:"middle",justify:"center",style:{minHeight:"250px"},children:[Object(I.jsxs)(C.a,{span:24,children:[Object(I.jsxs)(v.a,{gutter:[16,16],align:"middle",justify:"space-between",children:[Object(I.jsx)(C.a,{children:Object(I.jsx)(S.a.Title,{children:"Welcome to Chat App"})}),Object(I.jsx)(C.a,{children:Object(I.jsx)(w.a,{type:"primary",onClick:function(){return e({type:ke})},children:"Create Topic"})})]}),Object(I.jsx)(M,{form:p,isModalVisible:c,handleOk:function(t){return e(function(e){return{type:Re,topic:e}}(t))},handleCancel:function(){return e({type:ve})}})]}),Object(I.jsx)(C.a,{span:24,children:Object(I.jsx)(R.a,{children:r.length<=0?Object(I.jsx)("h3",{children:" No topic found "}):Object(I.jsxs)(u.d,{children:[Object(I.jsx)(u.b,{exact:!0,path:o,component:function(){return Object(I.jsx)("h3",{children:"Please select a chat topic."})}}),Object(I.jsx)(u.b,{path:"".concat(o,"/:slug"),component:Ee})]})})})]})})]})})})},Xe="app/LoginPage/LOGIN_REQUEST",Ke="app/LoginPage/LOGIN_SUCCESS",Be="app/LoginPage/LOGIN_ERROR";function Je(e){return{type:Be,error:e}}var Ye={body:{},isLoading:!1,error:{}},Ze=Object(K.a)((function(e,t){switch(t.type){case Xe:e.body=t.user,e.isLoading=!0;break;case Ke:e.isLoading=!1;break;case Be:e.body=t.error,e.isLoading=!1;break;default:return e}}),Ye),$e="app/StartUpPage/CHECK_LOGIN_REQUEST",et="app/StartUpPage/CHECK_LOGIN_SUCCESS",tt="app/StartUpPage/CHECK_LOGIN_ERROR";function nt(e,t){return{type:et,token:t,user:e}}function at(e){return{type:tt,error:e}}var rt=function(e){return e.auth||Ye},ct=Z.a.mark(ot),st=Z.a.mark(it);function ot(){var e,t,n,a,r;return Z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object($.c)(Object(L.a)(rt,(function(e){return e.body})));case 2:return e=c.sent,c.prev=3,c.next=6,Object($.a)(re,e);case 6:if(t=c.sent,n=t.data,a=t.success,r=t.message,!a){c.next=19;break}return localStorage.setItem("token",n.token),c.next=14,Object($.b)({type:Ke});case 14:return c.next=16,Object($.b)(nt(n.user,n.token));case 16:Ue.a.info({description:r,placement:"bottomRight"}),c.next=22;break;case 19:return c.next=21,Object($.b)(Je({}));case 21:Ue.a.error({description:r,placement:"bottomRight"});case 22:c.next=30;break;case 24:return c.prev=24,c.t0=c.catch(3),console.log("Error => ",c.t0),c.next=29,Object($.b)(Je(c.t0));case 29:Ue.a.info({description:c.t0,placement:"bottomRight"});case 30:case"end":return c.stop()}}),ct,null,[[3,24]])}function it(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.d)(Xe,ot);case 2:case"end":return e.stop()}}),st)}var ut=y.a.Content,bt={labelCol:{span:8},wrapperCol:{span:16}},jt={wrapperCol:{offset:8,span:16}},lt="auth",pt=function(){Object(l.b)({key:lt,reducer:Ze}),Object(l.c)({key:lt,saga:it});var e=Object(i.d)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(ut,{style:{padding:"0 50px",marginTop:64},children:Object(I.jsx)(v.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(I.jsxs)(C.a,{span:10,children:[Object(I.jsx)(S.a.Title,{children:"Welcome to Chat App"}),Object(I.jsxs)(E.a,Object(h.a)(Object(h.a)({},bt),{},{initialValues:{username:"test",password:"test"},onFinish:function(t){return e(function(e){return{user:e,type:Xe}}(t))},children:[Object(I.jsx)(E.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(I.jsx)(P.a,{})}),Object(I.jsx)(E.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(I.jsx)(P.a.Password,{})}),Object(I.jsx)(E.a.Item,Object(h.a)(Object(h.a)({},jt),{},{children:Object(I.jsxs)(S.a.Paragraph,{children:["Don't you have an account? ",Object(I.jsx)(_.a,{to:"/register",children:" Register here"})]})})),Object(I.jsx)(E.a.Item,Object(h.a)(Object(h.a)({},jt),{},{children:Object(I.jsx)(w.a,{type:"primary",htmlType:"submit",children:"Login"})}))]}))]})})})})},dt="app/RegisterPage/REGISTER_REQUEST",Ot="app/RegisterPage/REGISTER_SUCCESS",ht="app/RegisterPage/REGISTER_ERROR";function mt(e,t){return{type:Ot,user:e,message:t}}var gt={body:{},message:"",isLoading:!1,error:{},user:{}},xt=Object(K.a)((function(e,t){switch(t.type){case dt:e.body=t.body,e.isLoading=!0;break;case Ot:e.message=t.message,e.user=t.user,e.isLoading=!1;break;case ht:e.body=t.error,e.message=t.message,e.isLoading=!1;break;default:return e}}),gt),ft=n(41),yt=function(e){return e.register||gt},Et=Z.a.mark(vt),kt=Z.a.mark(Ct);function vt(){var e,t,n,a,r;return Z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object($.c)(Object(L.a)(yt,(function(e){return e.body})));case 2:return e=c.sent,c.prev=3,c.next=6,Object($.a)(ce,e);case 6:if(t=c.sent,n=t.data,a=t.success,r=t.message,!a){c.next=18;break}return c.next=13,Object($.b)(mt(n.user,r));case 13:return c.next=15,Object($.b)(Object(ft.d)("/login"));case 15:Ue.a.info({description:r,placement:"bottomRight"}),c.next=21;break;case 18:return c.next=20,Object($.b)({type:ht,error:{}});case 20:Ue.a.error({message:r,placement:"bottomRight"});case 21:c.next=27;break;case 23:c.prev=23,c.t0=c.catch(3),console.log("Error => ",c.t0),Ue.a.error({message:c.t0,placement:"bottomRight"});case 27:case"end":return c.stop()}}),Et,null,[[3,23]])}function Ct(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.d)(dt,vt);case 2:case"end":return e.stop()}}),kt)}var St=y.a.Content,wt={labelCol:{span:8},wrapperCol:{span:16}},Rt={wrapperCol:{offset:8,span:16}},_t="register",Lt=function(){Object(l.b)({key:_t,reducer:xt}),Object(l.c)({key:_t,saga:Ct});var e=Object(i.d)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(St,{style:{padding:"0 50px",marginTop:64},children:Object(I.jsx)(v.a,{align:"middle",justify:"center",style:{minHeight:"300px"},children:Object(I.jsxs)(C.a,{span:10,children:[Object(I.jsx)(S.a.Title,{children:"Welcome to Chat App"}),Object(I.jsxs)(E.a,Object(h.a)(Object(h.a)({},wt),{},{name:"basic",initialValues:{username:"test",password:"test",first_name:"hi",last_name:"there"},onFinish:function(t){return e({body:t,type:dt})},children:[Object(I.jsx)(E.a.Item,{label:"First Name",name:"first_name",rules:[{required:!0,message:"Please input your first name!"}],children:Object(I.jsx)(P.a,{})}),Object(I.jsx)(E.a.Item,{label:"Last Name",name:"last_name",rules:[{required:!0,message:"Please input your last name!"}],children:Object(I.jsx)(P.a,{})}),Object(I.jsx)(E.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(I.jsx)(P.a,{})}),Object(I.jsx)(E.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(I.jsx)(P.a.Password,{})}),Object(I.jsx)(E.a.Item,Object(h.a)(Object(h.a)({},Rt),{},{children:Object(I.jsxs)(S.a.Paragraph,{children:["Already have an account?   ",Object(I.jsx)(_.a,{to:"/",children:" Login here"})]})})),Object(I.jsx)(E.a.Item,Object(h.a)(Object(h.a)({},Rt),{},{children:Object(I.jsx)(w.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))]})})})})},Tt=n(157),Pt={token:"",isLoading:!1,isLogged:!1,error:{},user:{}},It=Object(K.a)((function(e,t){switch(t.type){case $e:e.token=t.token,e.isLoading=!0;break;case et:e.token=t.token,e.user=t.user,e.isLogged=!0,e.isLoading=!1;break;case tt:e.body=t.error,e.isLoading=!1;break;default:return e}}),Pt),At=function(e){return e.root||Pt},Ut=["component"],Mt=["component","restricted"],Nt=y.a.Header,Ft=y.a.Footer,Gt=Object(L.b)({isLogged:Object(L.a)(At,(function(e){return e.isLogged}))}),Ht=function(e){var t=e.component,n=Object(Tt.a)(e,Ut),a=Object(i.e)(Gt).isLogged;return Object(I.jsx)(u.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return a?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(y.a,{children:[Object(I.jsx)(Nt,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(I.jsxs)(v.a,{justify:"space-between",children:[Object(I.jsxs)(C.a,{span:10,children:[Object(I.jsx)("div",{className:"logo"}),Object(I.jsxs)(k.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["0"],children:[Object(I.jsx)(k.a.Item,{children:"Home"},"1"),Object(I.jsx)(k.a.Item,{children:"Feeds"},"2")]})]}),Object(I.jsx)(C.a,{span:8,children:Object(I.jsx)(v.a,{justify:"end",children:Object(I.jsx)(C.a,{children:Object(I.jsxs)(k.a,{theme:"dark",mode:"horizontal",children:[Object(I.jsx)(k.a.Item,{children:"Profile"},"3"),Object(I.jsx)(k.a.Item,{children:"Logout"},"4")]})})})})]})}),Object(I.jsx)(t,Object(h.a)({},e)),Object(I.jsx)(Ft,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})}):Object(I.jsx)(u.a,{to:"/login"})}}))},Dt=function(e){var t=e.component,n=(e.restricted,Object(Tt.a)(e,Mt)),a=Object(i.e)(Gt).isLogged;return Object(I.jsx)(u.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return a?Object(I.jsx)(u.a,{to:"/chat"}):Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(y.a,{children:[Object(I.jsx)(Nt,{children:Object(I.jsx)("div",{className:"logo"})}),Object(I.jsx)(t,Object(h.a)({},e)),Object(I.jsx)(Ft,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})})}}))},Vt=Z.a.mark(Qt),qt=Z.a.mark(Wt);function Qt(){var e,t,n;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object($.c)(Object(L.a)(At,(function(e){return e.token})));case 2:return e=a.sent,a.prev=3,a.next=6,Object($.a)(se);case 6:if(t=a.sent,n=t.data,!t.success){a.next=14;break}return a.next=12,Object($.b)(nt(n.user,e));case 12:a.next=16;break;case 14:return a.next=16,Object($.b)(at({}));case 16:a.next=23;break;case 18:return a.prev=18,a.t0=a.catch(3),console.log("Error => ",a.t0),a.next=23,Object($.b)(at(a.t0));case 23:case"end":return a.stop()}}),Vt,null,[[3,18]])}function Wt(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.d)($e,Qt);case 2:case"end":return e.stop()}}),qt)}var zt="root",Xt=function(e){Object(l.b)({key:zt,reducer:It}),Object(l.c)({key:zt,saga:Wt});var t=Object(i.d)();return Object(a.useEffect)((function(){return t((e=localStorage.getItem("token"),{type:$e,token:e}));var e}),[t]),e.children},Kt=function(e){var t=j.c;"object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&(t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}));var n=Object(O.a)({}),a=n.run,r=[n,Object(b.a)(e),d.a],c=[j.a.apply(void 0,r),Object(l.a)({createReducer:x,runSaga:a})];return Object(j.d)(x(),t.apply(void 0,c))}(g);var Bt=function(){return Object(I.jsx)(i.a,{store:Kt,children:Object(I.jsx)(o.a,{history:g,children:Object(I.jsx)(Xt,{children:Object(I.jsxs)(u.d,{children:[Object(I.jsx)(Dt,{exact:!0,path:"/login",component:pt}),Object(I.jsx)(Dt,{exact:!0,path:"/register",component:Lt}),Object(I.jsx)(Ht,{path:"/chat",component:ze}),Object(I.jsx)(u.a,{to:"/login",from:"/"}),Object(I.jsx)(Dt,{path:"*",exact:!0,component:pt})]})})})})},Jt=(n(301),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,313)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))});s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(Bt,{})}),document.getElementById("root")),Jt()}},[[302,1,2]]]);
//# sourceMappingURL=main.8b2f1f21.chunk.js.map