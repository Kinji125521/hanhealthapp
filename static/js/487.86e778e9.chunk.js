/*! For license information please see 487.86e778e9.chunk.js.LICENSE.txt */
(self.webpackChunkhanhealthapp=self.webpackChunkhanhealthapp||[]).push([[487],{1734:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pe}});var o=n(4165),r=n(5861),i=n(9439),a=n(7363),c=n(7253),l=(n(6949),n.p+"static/media/pressure.ee8435613c0de0d8b656.png"),s=n.p+"static/media/normal.946a1d40b0142c6d2a71.png",d=n.p+"static/media/relax.3fbb2c1005240fceb066.png",u=n(7027),h=n(4942),f=n(7557),g=n(2621),p=n(732),m=n(187),v=n(3844),y=n(1694),b=n.n(y),x=n(5207),w=n(1929),S=n(9019),Z=n(1113),C=n(5671),j=n(3144),z=n(136),E=n(7277),k=function(e){(0,z.Z)(n,e);var t=(0,E.Z)(n);function n(){var e;return(0,C.Z)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,j.Z)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,o=e.children,r=this.state,i=r.error,c=r.info,l=c&&c.componentStack?c.componentStack:null,s="undefined"===typeof t?(i||"").toString():t,d="undefined"===typeof n?l:n;return i?a.createElement(V,{type:"error",message:s,description:a.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},d)}):o}}]),n}(a.Component),O=k,N=n(5564),B=n(9922),M=n(7521),I=function(e,t,n,o,r){return(0,h.Z)({backgroundColor:e,border:"".concat(o.lineWidth,"px ").concat(o.lineType," ").concat(t)},"".concat(r,"-icon"),{color:n})},R=function(e){var t,n,o,r=e.componentCls,i=e.motionDurationSlow,a=e.marginXS,c=e.marginSM,l=e.fontSize,s=e.fontSizeLG,d=e.lineHeight,u=e.borderRadiusLG,f=e.motionEaseInOutCirc,g=e.alertIconSizeLG,p=e.colorText,m=e.paddingContentVerticalSM,v=e.alertPaddingHorizontal,y=e.paddingMD,b=e.paddingContentHorizontalLG;return o={},(0,h.Z)(o,r,Object.assign(Object.assign({},(0,M.Wf)(e)),(t={position:"relative",display:"flex",alignItems:"center",padding:"".concat(m,"px ").concat(v,"px"),wordWrap:"break-word",borderRadius:u,"&&-rtl":{direction:"rtl"}},(0,h.Z)(t,"".concat(r,"-content"),{flex:1,minWidth:0}),(0,h.Z)(t,"".concat(r,"-icon"),{marginInlineEnd:a,lineHeight:0}),(0,h.Z)(t,"&-description",{display:"none",fontSize:l,lineHeight:d}),(0,h.Z)(t,"&-message",{color:p}),(0,h.Z)(t,"&&-motion-leave",{overflow:"hidden",opacity:1,transition:"max-height ".concat(i," ").concat(f,", opacity ").concat(i," ").concat(f,",\n        padding-top ").concat(i," ").concat(f,", padding-bottom ").concat(i," ").concat(f,",\n        margin-bottom ").concat(i," ").concat(f)}),(0,h.Z)(t,"&&-motion-leave-active",{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}),t))),(0,h.Z)(o,"".concat(r,"-with-description"),(n={alignItems:"flex-start",paddingInline:b,paddingBlock:y},(0,h.Z)(n,"".concat(r,"-icon"),{marginInlineEnd:c,fontSize:g,lineHeight:0}),(0,h.Z)(n,"".concat(r,"-message"),{display:"block",marginBottom:a,color:p,fontSize:s}),(0,h.Z)(n,"".concat(r,"-description"),{display:"block"}),n)),(0,h.Z)(o,"".concat(r,"-banner"),{marginBottom:0,border:"0 !important",borderRadius:0}),o},H=function(e){var t=e.componentCls,n=e.colorSuccess,o=e.colorSuccessBorder,r=e.colorSuccessBg,i=e.colorWarning,a=e.colorWarningBorder,c=e.colorWarningBg,l=e.colorError,s=e.colorErrorBorder,d=e.colorErrorBg,u=e.colorInfo,f=e.colorInfoBorder,g=e.colorInfoBg;return(0,h.Z)({},t,{"&-success":I(r,o,n,e,t),"&-info":I(g,f,u,e,t),"&-warning":I(c,a,i,e,t),"&-error":Object.assign(Object.assign({},I(d,s,l,e,t)),(0,h.Z)({},"".concat(t,"-description > pre"),{margin:0,padding:0}))})},T=function(e){var t,n=e.componentCls,o=e.iconCls,r=e.motionDurationMid,i=e.marginXS,a=e.fontSizeIcon,c=e.colorIcon,l=e.colorIconHover;return(0,h.Z)({},n,(t={},(0,h.Z)(t,"&-action",{marginInlineStart:i}),(0,h.Z)(t,"".concat(n,"-close-icon"),(0,h.Z)({marginInlineStart:i,padding:0,overflow:"hidden",fontSize:a,lineHeight:"".concat(a,"px"),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer"},"".concat(o,"-close"),{color:c,transition:"color ".concat(r),"&:hover":{color:l}})),(0,h.Z)(t,"&-close-text",{color:c,transition:"color ".concat(r),"&:hover":{color:l}}),t))},P=function(e){return[R(e),H(e),T(e)]},A=(0,N.Z)("Alert",(function(e){var t=e.fontSizeHeading3,n=(0,B.TS)(e,{alertIconSizeLG:t,alertPaddingHorizontal:12});return[P(n)]})),L=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},W={success:f.Z,info:v.Z,error:g.Z,warning:m.Z},D=function(e){var t=e.icon,n=e.prefixCls,o=e.type,r=W[o]||null;return t?(0,Z.wm)(t,a.createElement("span",{className:"".concat(n,"-icon")},t),(function(){return{className:b()("".concat(n,"-icon"),(0,h.Z)({},t.props.className,t.props.className))}})):a.createElement(r,{className:"".concat(n,"-icon")})},G=function(e){var t=e.isClosable,n=e.closeText,o=e.prefixCls,r=e.closeIcon,i=e.handleClose;return t?a.createElement("button",{type:"button",onClick:i,className:"".concat(o,"-close-icon"),tabIndex:0},n?a.createElement("span",{className:"".concat(o,"-close-text")},n):r):null},U=function(e){var t,n=e.description,o=e.prefixCls,r=e.message,c=e.banner,l=e.className,s=void 0===l?"":l,d=e.style,u=e.onMouseEnter,f=e.onMouseLeave,g=e.onClick,m=e.afterClose,v=e.showIcon,y=e.closable,Z=e.closeText,C=e.closeIcon,j=void 0===C?a.createElement(p.Z,null):C,z=e.action,E=L(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),k=a.useState(!1),O=(0,i.Z)(k,2),N=O[0],B=O[1],M=a.useRef(),I=a.useContext(w.E_),R=I.getPrefixCls,H=I.direction,T=R("alert",o),P=A(T),W=(0,i.Z)(P,2),U=W[0],V=W[1],q=function(e){var t;B(!0),null===(t=E.onClose)||void 0===t||t.call(E,e)},X=!!Z||y,_=function(){var e=E.type;return void 0!==e?e:c?"warning":"info"}(),F=!(!c||void 0!==v)||v,J=b()(T,"".concat(T,"-").concat(_),(t={},(0,h.Z)(t,"".concat(T,"-with-description"),!!n),(0,h.Z)(t,"".concat(T,"-no-icon"),!F),(0,h.Z)(t,"".concat(T,"-banner"),!!c),(0,h.Z)(t,"".concat(T,"-rtl"),"rtl"===H),t),s,V),Y=(0,S.Z)(E);return U(a.createElement(x.Z,{visible:!N,motionName:"".concat(T,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:m},(function(e){var t=e.className,o=e.style;return a.createElement("div",Object.assign({ref:M,"data-show":!N,className:b()(J,t),style:Object.assign(Object.assign({},d),o),onMouseEnter:u,onMouseLeave:f,onClick:g,role:"alert"},Y),F?a.createElement(D,{description:n,icon:E.icon,prefixCls:T,type:_}):null,a.createElement("div",{className:"".concat(T,"-content")},r?a.createElement("div",{className:"".concat(T,"-message")},r):null,n?a.createElement("div",{className:"".concat(T,"-description")},n):null),z?a.createElement("div",{className:"".concat(T,"-action")},z):null,a.createElement(G,{isClosable:!!X,closeText:Z,prefixCls:T,closeIcon:j,handleClose:q}))})))};U.ErrorBoundary=O;var V=U,q=n(7309),X=n(5529),_=n(7128),F=n(1413),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},Y=n(4291),K=function(e,t){return a.createElement(Y.Z,(0,F.Z)((0,F.Z)({},e),{},{ref:t,icon:J}))};K.displayName="SmileOutlined";var Q=a.forwardRef(K),$={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"video-camera",theme:"outlined"},ee=function(e,t){return a.createElement(Y.Z,(0,F.Z)((0,F.Z)({},e),{},{ref:t,icon:$}))};ee.displayName="VideoCameraOutlined";var te=a.forwardRef(ee),ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},oe=function(e,t){return a.createElement(Y.Z,(0,F.Z)((0,F.Z)({},e),{},{ref:t,icon:ne}))};oe.displayName="UndoOutlined";var re=a.forwardRef(oe),ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},ae=function(e,t){return a.createElement(Y.Z,(0,F.Z)((0,F.Z)({},e),{},{ref:t,icon:ie}))};ae.displayName="SwapOutlined";var ce=a.forwardRef(ae),le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 00-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 00-11.2-1.4l-37.9 29.7a7.97 7.97 0 00-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z"}}]},name:"monitor",theme:"outlined"},se=function(e,t){return a.createElement(Y.Z,(0,F.Z)((0,F.Z)({},e),{},{ref:t,icon:le}))};se.displayName="MonitorOutlined";var de=a.forwardRef(se),ue=n(7500),he=n(3263),fe=n(4038),ge=n(184),pe=function(){var e=(0,c.PR)("user_key"),t=(0,a.useState)(!1),n=(0,i.Z)(t,2),h=n[0],f=n[1],g=(0,a.useState)(!1),p=(0,i.Z)(g,2),m=p[0],v=p[1],y=(0,a.useState)(!1),b=(0,i.Z)(y,2),x=b[0],w=b[1],S=(0,a.useState)(!1),Z=(0,i.Z)(S,2),C=Z[0],j=Z[1],z=(0,a.useState)(!1),E=(0,i.Z)(z,2),k=E[0],O=E[1],N=(0,a.useState)("none"),B=(0,i.Z)(N,2),M=B[0],I=B[1],R=(0,a.useState)("none"),H=(0,i.Z)(R,2),T=H[0],P=H[1],A=(0,a.useState)("none"),L=(0,i.Z)(A,2),W=L[0],D=L[1],G=(0,a.useState)("\u958b\u59cb\u9304\u88fd"),U=(0,i.Z)(G,2),F=U[0],J=U[1],Y=(0,a.useState)(5),K=(0,i.Z)(Y,2),$=K[0],ee=K[1],ne=(0,a.useState)(!1),oe=(0,i.Z)(ne,2),ie=(oe[0],oe[1]),ae=(0,a.useRef)(null),le=(0,a.useRef)(""),se=(0,a.useState)("warning"),pe=(0,i.Z)(se,2),me=pe[0],ve=pe[1],ye=function(e){return e.toString().padStart(2,"0")},be=((0,a.useRef)(null),(0,a.useState)(null)),xe=(0,i.Z)(be,2),we=(xe[0],xe[1],(0,a.useState)(!1)),Se=(0,i.Z)(we,2),Ze=Se[0],Ce=Se[1],je=(0,a.useState)(null),ze=(0,i.Z)(je,2),Ee=(ze[0],ze[1],(0,a.useState)(null)),ke=(0,i.Z)(Ee,2),Oe=(ke[0],ke[1]),Ne=(0,a.useState)(!0),Be=(0,i.Z)(Ne,2),Me=Be[0],Ie=Be[1],Re=(0,a.useState)(),He=(0,i.Z)(Re,2),Te=He[0],Pe=He[1],Ae=(0,a.useState)(),Le=(0,i.Z)(Ae,2),We=Le[0],De=Le[1],Ge=(0,a.useState)(),Ue=(0,i.Z)(Ge,2),Ve=Ue[0],qe=Ue[1],Xe=(0,a.useState)(),_e=(0,i.Z)(Xe,2),Fe=_e[0],Je=_e[1],Ye=(0,a.useState)(0),Ke=(0,i.Z)(Ye,2),Qe=Ke[0],$e=Ke[1],et=(0,a.useState)(0),tt=(0,i.Z)(et,2),nt=tt[0],ot=tt[1],rt=(0,a.useState)(0),it=(0,i.Z)(rt,2),at=it[0],ct=it[1],lt=(0,a.useState)(0),st=(0,i.Z)(lt,2),dt=st[0],ut=st[1],ht=(0,a.useState)(0),ft=(0,i.Z)(ht,2),gt=ft[0],pt=ft[1],mt=(0,a.useState)(0),vt=(0,i.Z)(mt,2),yt=vt[0],bt=vt[1],xt=(0,a.useState)(0),wt=(0,i.Z)(xt,2),St=(wt[0],wt[1]),Zt=(0,a.useState)("\u58d3\u529b\u6b63\u5e38"),Ct=(0,i.Z)(Zt,2),jt=Ct[0],zt=Ct[1],Et=(0,a.useState)(s),kt=(0,i.Z)(Et,2),Ot=kt[0],Nt=kt[1];function Bt(e,t){var n=document.querySelector("#viodes");navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:Me?"user":"environment"}}).then((function(e){"srcObject"in n?(n.srcObject=e,n.play(),Ce(e)):(n.src=window.URL&&window.URL.createObjectURL(e)||e,console.log("\u7b2c\u4e8c\u7a2e"))})):(navigator.webkitGetUserMedia||navigator.mozGetUserMedia)&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),console.log("\u6211\u662fwebkit\u5185\u6838"))}(0,a.useEffect)((function(){Tt(),f("none"),w("none"),Bt()}),[]);function Mt(){ve("warning"),J("\u958b\u59cb\u9304\u88fd"),f("none"),v("none"),O(),j("none"),w(),I("none"),P("none"),D();var e=new MediaRecorder(Ze,{audioBitsPerSecond:128e3,videoBitsPerSecond:25e5,mimeType:"video/webm;codecs=vp8,opus"});setTimeout((function(){console.log("\u958b\u59cb\u9304\u88fd"),Oe(e),e.ondataavailable=function(e){window.bobals=new Blob([e.data],{type:e.data.type})},e.start()}),0),setTimeout((function(){!function(){if(null!==ae.current)return;ie(!0),le.current="",ae.current=setInterval((function(){ee((function(e){return J("\u9304\u5f71 ".concat(e," \u79d2\u5f8c\u7d50\u675f")),e>=1?e-1:(clearInterval(ae.current),ve("success"),J("\u5b8c\u6210\u9304\u5f71"),ee(5),ie(!1),ae.current=null,0)}))}),1e3)}()}),0),setTimeout((function(){e.stop()}),7e3),setTimeout((function(e){console.log("\u9304\u5f71\u4e0a\u50b3",window.bobals);var t=new Blob([window.bobals]),n=document.createElement("a"),o=window.URL.createObjectURL(t);n.href=o,Ht(t),document.body.removeChild(n),window.URL.revokeObjectURL(o)}),8e3),setTimeout((function(){f(),v("none"),O("none"),D("none"),I();var e=document.getElementById("viodes"),t=document.getElementById("canvas");t.getContext("2d").drawImage(e,0,0,270,300),t.toBlob((function(e){console.log(e)}))}),9e3)}var It=function(){var e=document.getElementById("viodes");e.srcObject&&e.srcObject.getTracks().forEach((function(e){e.stop(),Bt()}))};var Rt=ye(Math.floor($/60)),Ht=(ye($-60*Rt),function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){!function(e){var t=e,n=t.substr(37,t.lenth);Je(n),console.log(n)}(t.result)}}),Tt=function(){var t=(0,r.Z)((0,o.Z)().mark((function t(){var n,r,i,a,c;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,he.Z.get("https://192.168.11.118:7000/user/profile/".concat(e));case 2:n=t.sent,r=n.data,i=r.data[0].Tel,a=r.data[0].height,c=r.data[0].weight,Pe(i),De(a),qe(c);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Pt={uuid:Te,height:We,weight:Ve,content:Fe},At=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var t,n,r,i,a,c,h,g,p,m;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ve("warning"),J("\u8cc7\u6599\u8655\u7406\u4e2d"),u.ZP.loading("\u4e0a\u50b3\u4e2d",0),e.next=5,fetch("/api1/api/v1.0/measure/",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Content-Type,Access-Control-Allow-Headers,Content-Length,Accept,Authorization,X-Requested-With","Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"},body:JSON.stringify(Pt)});case 5:if(200!==(t=e.sent).status){e.next=13;break}return u.ZP.destroy(),e.next=10,t.json();case 10:n=e.sent,r=JSON.parse(n),!1===Array.isArray(r)&&r.hbr.length<1?(ve("error"),u.ZP.error("\u56de\u50b3\u51fa\u73fe\u932f\u8aa4"),J("\u8acb\u91cd\u65b0\u9304\u88fd!!")):(i=r.hbr[r.hbr.length-1],a=r.ica[r.hbr.length-1].SBP,c=r.ica[r.hbr.length-1].DBP,h=r.sp[r.hbr.length-1],g=r.hrv[r.hbr.length-1].RMSSD,p=r.hrv[r.hbr.length-1].SDNN,m=p/g,console.log(m),ve("success"),J("\u6aa2\u6e2c\u7d50\u679c"),f("none"),w(),I("none"),u.ZP.success("\u8a08\u7b97\u5b8c\u6210"),$e(i),ot(a),ct(c),ut(h),bt(g),pt(p),St(m),m>2.8?(zt("\u58d3\u529b\u5c71\u5927"),Nt(l)):m<1.2?(zt("\u5fc3\u60c5\u653e\u9b06"),Nt(d)):(zt("\u5fc3\u5e73\u6c23\u548c"),Nt(s)),P());case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,ge.jsxs)("div",{className:"webrtc",children:[(0,ge.jsx)("div",{className:"Alert",type:"primary",style:{marginBottom:10,display:W},children:(0,ge.jsx)(V,{type:"info",banner:!0,message:(0,ge.jsxs)(fe.Z,{pauseOnHover:!0,gradient:!1,children:["\u5f71\u7247\u9304\u88fd\u4e2d~\u8acb\u5fae\u7b11 ",(0,ge.jsx)(Q,{})]}),style:{color:"#2050c0",fontSize:18,fontWeight:"bold",height:50,width:230,opacity:.7}})}),(0,ge.jsxs)("div",{className:"buttons",style:{marginBottom:20},children:[(0,ge.jsx)(q.ZP,{onClick:Mt,icon:(0,ge.jsx)(te,{}),style:{backgroundColor:" #fe9003",color:"white",height:50,width:370,fontSize:18,marginRight:10,display:m},children:"\u9304\u88fd\u81c9\u90e8\u7279\u5fb5"}),(0,ge.jsx)(q.ZP,{onClick:Mt,icon:(0,ge.jsx)(re,{}),style:{backgroundColor:" #808080",color:"white",height:50,width:250,fontSize:18,display:h,marginRight:10},children:"\u91cd\u65b0\u9304\u88fd"}),(0,ge.jsx)(q.ZP,{onClick:function(){Ie(!Me),It()},icon:(0,ge.jsx)(ce,{}),style:{backgroundColor:" #02a65a",color:"white",height:50,width:100,fontSize:18,display:m},children:"\u5207\u63db"}),(0,ge.jsx)(q.ZP,{onClick:function(){At()},icon:(0,ge.jsx)(de,{}),style:{backgroundColor:" #ff0101",color:"white",height:50,width:250,fontSize:18,display:h},children:"\u958b\u59cb\u6aa2\u6e2c"})]}),(0,ge.jsxs)("div",{className:"vedio",children:[(0,ge.jsx)("video",{id:"viodes",style:{width:"420px",height:"300px",display:k}}),(0,ge.jsx)("canvas",{id:"canvas",width:270,height:300,style:{width:270,height:300,display:M}})]}),(0,ge.jsxs)("div",{className:"tops",style:{marginTop:30,marginBottom:30},children:[(0,ge.jsx)(V,{message:(0,ge.jsxs)("div",{style:{color:"#2050c0",fontSize:20},children:["\u7576\u524d\u93e1\u982d\uff1a",Me?"\u524d\u7f6e":"\u5f8c\u7f6e"]}),type:"info",style:{display:C}}),(0,ge.jsx)(V,{message:(0,ge.jsx)("div",{style:{color:" #e90003",fontSize:20},children:F}),type:me,showIcon:!0,style:{display:x}})]}),(0,ge.jsxs)("div",{className:"cards",style:{marginBottom:20},children:[(0,ge.jsx)(X.Z,{title:"\u8eab\u9ad8(Height)",bordered:!1,size:"small",headStyle:{background:"#dedede"},bodyStyle:{padding:15},style:{color:"#026697",textAlign:"center",fontSize:20,fontWeight:"bold",width:300,marginRight:30},children:(0,ge.jsxs)("p",{children:[We," cm"]})}),(0,ge.jsx)(X.Z,{title:"\u9ad4\u91cd(Weight)",bordered:!1,size:"small",headStyle:{background:"#dedede"},bodyStyle:{padding:15},style:{color:"#026697",textAlign:"center",fontSize:20,fontWeight:"bold",width:300},children:(0,ge.jsxs)("p",{children:[Ve," kg"]})})]}),(0,ge.jsxs)("div",{className:"cards",style:{marginBottom:20,display:T},children:[(0,ge.jsx)(X.Z,{title:"\u5fc3\u7387(HR)",bordered:!1,size:"small",headStyle:{background:"#dedede"},bodyStyle:{padding:15},style:{className:"cardstyle",color:"#026697",textAlign:"center",fontSize:20,fontWeight:"bold",width:"300px",marginRight:30},children:(0,ge.jsxs)("p",{children:[Qe," bpm"]})}),(0,ge.jsxs)(X.Z,{title:"\u8840\u58d3(BP)",bordered:!1,size:"small",headStyle:{background:"#dedede"},bodyStyle:{padding:0},style:{width:"300px",textAlign:"center",color:"#026697",fontSize:18,fontWeight:"bold"},children:[(0,ge.jsxs)("p",{children:[" SBP: ",nt,"mmHg"]}),(0,ge.jsxs)("p",{children:[" DBP: ",at,"mmHg"]})]})]}),(0,ge.jsx)("div",{className:"cards",style:{marginBottom:20,display:T},children:(0,ge.jsx)(X.Z,{title:"\u8840\u6c27(SpO2)",bordered:!1,size:"small",headStyle:{background:"#dedede"},bodyStyle:{padding:15},style:{color:"#026697",textAlign:"center",fontSize:20,fontWeight:"bold",width:630},children:(0,ge.jsxs)("p",{children:[" ",dt,"%"]})})}),(0,ge.jsx)("div",{className:"cards",style:{marginBottom:280,display:T},children:(0,ge.jsxs)(X.Z,{title:"\u58d3\u529b\u6307\u6578(Stress)",bordered:!1,headStyle:{background:"#dedede"},bodyStyle:{padding:5},style:{color:"#026697",textAlign:"center",fontSize:18,fontWeight:"bold",width:630,height:380},children:[(0,ge.jsx)("p",{children:jt}),(0,ge.jsx)("hr",{style:{borderTopWidth:3,borderTopColor:"#dedede"}}),(0,ge.jsx)("img",{className:"login-logo",alt:"",src:Ot}),(0,ge.jsx)("hr",{style:{borderTopWidth:3,borderTopColor:"#dedede"}}),(0,ge.jsxs)("p",{children:[" HRV  SDNN : ",gt,"  RMSSD : ",yt]})]})}),(0,ge.jsx)("div",{className:"buttons",children:(0,ge.jsx)(q.ZP,{onClick:function(){J("\u9304\u524d\u8abf\u6574"),v(),w("none"),j(),O(),P("none")},icon:(0,ge.jsx)(de,{}),style:{backgroundColor:"#70cce1",color:"white",height:50,width:500,fontSize:18,fontWeight:"bold",display:T},children:"\u91cd\u65b0\u6aa2\u6e2c"})}),(0,ge.jsxs)(_.Z,{className:"dash",style:{color:"#4cb804",fontWeight:"bold",fontSize:20,borderColor:"white"},children:[" ",(0,ge.jsx)(ue.Z,{}),(new Date).getFullYear(),"-\u9060\u6f22\u79d1\u6280"]}),(0,ge.jsx)("p",{className:"content",children:"\u6b64\u70ba\u8f14\u52a9\u6aa2\u6e2c\u7528\u9014\uff0c\u6578\u64da\u50c5\u4f9b\u53c3\u8003"})]})}},7500:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(1413),r=n(7363),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright",theme:"outlined"},a=n(4291),c=function(e,t){return r.createElement(a.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:i}))};c.displayName="CopyrightOutlined";var l=r.forwardRef(c)},9019:function(e,t,n){"use strict";function o(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{Z:function(){return o}})},7128:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(4942),r=n(9439),i=n(1694),a=n.n(i),c=n(7363),l=n(1929),s=n(5564),d=n(9922),u=n(7521),h=function(e){var t,n=e.componentCls,r=e.sizePaddingEdgeHorizontal,i=e.colorSplit,a=e.lineWidth;return(0,o.Z)({},n,Object.assign(Object.assign({},(0,u.Wf)(e)),(t={borderBlockStart:"".concat(a,"px solid ").concat(i),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 ".concat(e.dividerVerticalGutterMargin,"px"),verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(a,"px solid ").concat(i)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")},"&-horizontal&-with-text":{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(i),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(a,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},"&-horizontal&-with-text-left":{"&::before":{width:"5%"},"&::after":{width:"95%"}},"&-horizontal&-with-text-right":{"&::before":{width:"95%"},"&::after":{width:"5%"}}},(0,o.Z)(t,"".concat(n,"-inner-text"),{display:"inline-block",padding:"0 1em"}),(0,o.Z)(t,"&-dashed",{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:"".concat(a,"px 0 0")}),(0,o.Z)(t,"&-horizontal&-with-text&-dashed",{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,o.Z)(t,"&-vertical&-dashed",{borderInlineStart:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,o.Z)(t,"&-plain&-with-text",{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,o.Z)(t,"&-horizontal&-with-text-left&-no-default-orientation-margin-left",(0,o.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(n,"-inner-text"),{paddingInlineStart:r})),(0,o.Z)(t,"&-horizontal&-with-text-right&-no-default-orientation-margin-right",(0,o.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(n,"-inner-text"),{paddingInlineEnd:r})),t)))},f=(0,s.Z)("Divider",(function(e){var t=(0,d.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[h(t)]}),{sizePaddingEdgeHorizontal:0}),g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var p=function(e){var t,n=c.useContext(l.E_),i=n.getPrefixCls,s=n.direction,d=e.prefixCls,u=e.type,h=void 0===u?"horizontal":u,p=e.orientation,m=void 0===p?"center":p,v=e.orientationMargin,y=e.className,b=e.children,x=e.dashed,w=e.plain,S=g(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),Z=i("divider",d),C=f(Z),j=(0,r.Z)(C,2),z=j[0],E=j[1],k=m.length>0?"-".concat(m):m,O=!!b,N="left"===m&&null!=v,B="right"===m&&null!=v,M=a()(Z,E,"".concat(Z,"-").concat(h),(t={},(0,o.Z)(t,"".concat(Z,"-with-text"),O),(0,o.Z)(t,"".concat(Z,"-with-text").concat(k),O),(0,o.Z)(t,"".concat(Z,"-dashed"),!!x),(0,o.Z)(t,"".concat(Z,"-plain"),!!w),(0,o.Z)(t,"".concat(Z,"-rtl"),"rtl"===s),(0,o.Z)(t,"".concat(Z,"-no-default-orientation-margin-left"),N),(0,o.Z)(t,"".concat(Z,"-no-default-orientation-margin-right"),B),t),y),I=Object.assign(Object.assign({},N&&{marginLeft:v}),B&&{marginRight:v});return z(c.createElement("div",Object.assign({className:M},S,{role:"separator"}),b&&"vertical"!==h&&c.createElement("span",{className:"".concat(Z,"-inner-text"),style:I},b)))}},4038:function(e,t,n){var o=n(7363);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=r(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');t.Z=function(e){var t,n,r,c,l=e.style,s=void 0===l?{}:l,d=e.className,u=void 0===d?"":d,h=e.play,f=void 0===h||h,g=e.pauseOnHover,p=void 0!==g&&g,m=e.pauseOnClick,v=void 0!==m&&m,y=e.direction,b=void 0===y?"left":y,x=e.speed,w=void 0===x?20:x,S=e.delay,Z=void 0===S?0:S,C=e.loop,j=void 0===C?0:C,z=e.gradient,E=void 0===z||z,k=e.gradientColor,O=void 0===k?[255,255,255]:k,N=e.gradientWidth,B=void 0===N?200:N,M=e.onFinish,I=e.onCycleComplete,R=e.children,H=o.useState(0),T=H[0],P=H[1],A=o.useState(0),L=A[0],W=A[1],D=o.useState(!1),G=D[0],U=D[1],V=o.useRef(null),q=o.useRef(null);o.useEffect((function(){if(G){var e=function(){q.current&&V.current&&(P(V.current.getBoundingClientRect().width),W(q.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[G]),o.useEffect((function(){U(!0)}),[]);var X="rgba("+O[0]+", "+O[1]+", "+O[2],_=L<T?T/w:L/w;return i.default.createElement(o.Fragment,null,G?i.default.createElement("div",{ref:V,style:a(a({},s),(t={},t["--pause-on-hover"]=!f||p?"paused":"running",t["--pause-on-click"]=!f||p&&!v||v?"paused":"running",t)),className:u+" marquee-container"},E&&i.default.createElement("div",{style:(n={},n["--gradient-color"]=X+", 1), "+X+", 0)",n["--gradient-width"]="number"===typeof B?B+"px":B,n),className:"overlay"}),i.default.createElement("div",{ref:q,style:(r={},r["--play"]=f?"running":"paused",r["--direction"]="left"===b?"normal":"reverse",r["--duration"]=_+"s",r["--delay"]=Z+"s",r["--iteration-count"]=j?""+j:"infinite",r),className:"marquee",onAnimationIteration:I,onAnimationEnd:M},R),i.default.createElement("div",{style:(c={},c["--play"]=f?"running":"paused",c["--direction"]="left"===b?"normal":"reverse",c["--duration"]=_+"s",c["--delay"]=Z+"s",c["--iteration-count"]=j?""+j:"infinite",c),className:"marquee","aria-hidden":"true"},R)):null)}},6949:function(e,t,n){"use strict";e.exports=n.p+"static/media/logo.5c952a4a295eab887d56.png"}}]);
//# sourceMappingURL=487.86e778e9.chunk.js.map