"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[706],{4167:function(n,e,r){r.d(e,{z:function(){return v}});var t,i,o,a,s,c=r(1413),l=r(4925),d=r(168),u=(r(2791),r(6031)),p=r(184),h=u.ZP.div(t||(t=(0,d.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),f=function(n){var e=n.size,r=void 0===e?"40px":e,t=n.borderSize,i=void 0===t?"5px":t;return(0,p.jsx)(h,{size:r,borderSize:i})},m=r(3504),x=["type","onClick","children","kind"],g=u.ZP.button(i||(i=(0,d.Z)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n  ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return n.height||"66px"}),(function(n){return"secondary"===n.kind&&(0,u.iv)(o||(o=(0,d.Z)(["\n      color: ",";\n      background-color: white;\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"primary"===n.kind&&(0,u.iv)(a||(a=(0,d.Z)(["\n      color: white;\n      background-color: ",";\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"ghost"===n.kind&&(0,u.iv)(s||(s=(0,d.Z)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(function(n){return n.theme.primary}))})),v=function(n){var e=n.type,r=void 0===e?"button":e,t=n.onClick,i=void 0===t?function(){}:t,o=n.children,a=n.kind,s=void 0===a?"primary":a,d=(0,l.Z)(n,x),u=d.isLoading,h=d.to,v=u?(0,p.jsx)(f,{}):o;return""!==h&&"string"===typeof h?(0,p.jsx)(m.OL,{to:h,className:"inline-block",children:(0,p.jsx)(g,(0,c.Z)((0,c.Z)({type:r,kind:s},d),{},{children:v}))}):(0,p.jsx)(g,(0,c.Z)((0,c.Z)({type:r,kind:s,onClick:i},d),{},{children:v}))}},9248:function(n,e,r){r.d(e,{g:function(){return c},Y:function(){return l}});var t,i=r(168),o=(r(2791),r(6031)),a=r(184),s=o.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 10px;\n  margin-bottom: 25px;\n"]))),c=function(n){var e=n.children;return(0,a.jsx)(s,{children:e})},l=function(n){var e=n.children;return(0,a.jsx)("div",{className:"flex flex-wrap gap-5",children:e})}},3175:function(n,e,r){var t,i=r(1413),o=r(4925),a=r(168),s=(r(2791),r(6031)),c=r(1134),l=r(184),d=["name","type","children","control"],u=s.ZP.div(t||(t=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  input {\n    width: 100%;\n    padding: ",";\n    background-color: transparent;\n    border: 1px solid ",";\n    border-radius: 8px;\n    transition: all 0.2s linear;\n    color: ",";\n    font-size: 14px;\n  }\n  input::-webkit-input-placeholder {\n    color: #b2b3bd;\n  }\n  input::-moz-input-placeholder {\n    color: #b2b3bd;\n  }\n  .input-icon {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n"])),(function(n){return n.hasIcon?"16px 60px 16px 20px":"16px 20px"}),(function(n){return n.theme.grayf1}),(function(n){return n.theme.black}));e.Z=function(n){var e=n.name,r=void 0===e?"":e,t=n.type,a=void 0===t?"text":t,s=n.children,p=n.control,h=(0,o.Z)(n,d),f=(0,c.bc)({control:p,name:r,defaultValue:""}).field;return(0,l.jsxs)(u,{hasIcon:!!s,children:[(0,l.jsx)("input",(0,i.Z)((0,i.Z)({id:r,type:a},f),h)),s?(0,l.jsx)("div",{className:"input-icon",children:s}):null]})}},6652:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(9439),i=r(2791),o=r(184),a=function(n){var e=n.className,r=void 0===e?"":e,t=n.onClick,i=void 0===t?function(){}:t;return(0,o.jsx)("span",{className:r,onClick:i,children:(0,o.jsxs)("svg",{width:"22",height:"14",viewBox:"0 0 22 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M14.5 1.62156C16.8312 2.50868 18.7928 4.24569 20.5245 6.37837C20.8098 6.72982 20.8099 7.23217 20.5245 7.58361C17.9889 10.7065 14.96 12.981 11 12.981C7.04003 12.981 4.01115 10.7065 1.4755 7.58361C1.19014 7.23216 1.19016 6.72981 1.47551 6.37837C3.69735 3.64197 6.29789 1.55697 9.5717 1.0828C9.75303 1.05654 9.93641 1.03522 10.1219 1.019L10.561 1",stroke:"#999999",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M13.5 6.98096C13.5 8.36167 12.3807 9.48096 11 9.48096C9.61929 9.48096 8.5 8.36167 8.5 6.98096C8.5 5.60025 9.61929 4.48096 11 4.48096C12.3807 4.48096 13.5 5.60025 13.5 6.98096Z",stroke:"#999999",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})})},s=function(n){var e=n.className,r=void 0===e?"":e,t=n.onClick,i=void 0===t?function(){}:t;return(0,o.jsx)("span",{className:r,onClick:i,children:(0,o.jsxs)("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M13.5356 8.46454C13.7677 8.69669 13.9519 8.97229 14.0775 9.27561C14.2032 9.57892 14.2678 9.90401 14.2678 10.2323C14.2678 10.5606 14.2031 10.8857 14.0775 11.189C13.9518 11.4923 13.7677 11.7679 13.5355 12.0001C13.3034 12.2322 13.0278 12.4164 12.7245 12.542C12.4211 12.6676 12.0961 12.7323 11.7678 12.7323C11.4394 12.7323 11.1144 12.6676 10.811 12.5419C10.5077 12.4163 10.2321 12.2322 10 12",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round"}),(0,o.jsx)("path",{d:"M11 4C7.04003 4 4.01115 6.27449 1.4755 9.39738C1.19014 9.74883 1.19009 10.2511 1.47544 10.6025C2.18711 11.479 2.93763 12.2887 3.73669 13M6.74043 15.0348C8.03446 15.6495 9.44549 16 11 16C11.2884 16 11.5719 15.9879 11.8507 15.9643L12.2607 15.9122M15.7029 5.18844C17.5178 6.15443 19.0991 7.64187 20.5245 9.39741C20.8099 9.74885 20.8099 10.2512 20.5245 10.6026C19.1774 12.2617 17.6911 13.6813 16 14.6476",stroke:"#999999",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M19.1217 1.11547L1.9998 18.9996",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})},c=r(3175),l=function(n){var e=n.control,r=(0,i.useState)(!1),l=(0,t.Z)(r,2),d=l[0],u=l[1];return e?(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(c.Z,{type:d?"text":"password",name:"password",placeholder:"Enter your password",control:e,children:d?(0,o.jsx)(a,{onClick:function(){return u(!1)}}):(0,o.jsx)(s,{onClick:function(){return u(!0)}})})}):null}},3117:function(n,e,r){r.d(e,{I:function(){return t.Z}});var t=r(3175)},6848:function(n,e,r){r.d(e,{_:function(){return p},O:function(){return f}});var t,i,o=r(1413),a=r(4925),s=r(168),c=(r(2791),r(6031)),l=r(184),d=["htmlFor","children"],u=c.ZP.label(t||(t=(0,s.Z)(["\n  color: ",";\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n"])),(function(n){return n.theme.gray4b})),p=function(n){var e=n.htmlFor,r=void 0===e?"":e,t=n.children,i=(0,a.Z)(n,d);return(0,l.jsx)(u,(0,o.Z)((0,o.Z)({htmlFor:r},i),{},{children:t}))},h=c.ZP.span(i||(i=(0,s.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n"]))),f=function(n){var e=n.children,r=n.type,t="text-gray-500 bg-gray-100";switch(void 0===r?"default":r){case"success":t="text-green-500 bg-green-100";break;case"warning":t="text-orange-500 bg-orange-100";break;case"danger":t="text-red-500 bg-red-100"}return(0,l.jsx)(h,{className:t,children:e})}},5318:function(n,e,r){var t,i=r(168),o=(r(2791),r(3504)),a=r(6031),s=r(184),c=a.ZP.div(t||(t=(0,i.Z)(["\n  min-height: 100vh;\n  padding: 40px;\n  .logo {\n    margin: 0 auto 20px;\n  }\n  .heading {\n    text-align: center;\n    color: ",";\n    font-weight: bold;\n    font-size: 40px;\n    margin-bottom: 60px;\n  }\n  .form {\n    max-width: 600px;\n    margin: 0 auto;\n  }\n  .have-account {\n    margin-bottom: 20px;\n    font-size: 14px;\n    a {\n      display: inline-block;\n      color: ",";\n      font-weight: 500;\n    }\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}));e.Z=function(n){var e=n.children;return(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(o.OL,{to:"/",className:"inline-block",children:(0,s.jsx)("img",{srcSet:"/logo.png 2x",alt:"monkey-blogging",className:"logo"})})}),(0,s.jsx)("h1",{className:"heading",children:"Monkey Blogging"}),e]})})}},7706:function(n,e,r){r.r(e);var t=r(5861),i=r(7757),o=r.n(i),a=r(4167),s=r(9248),c=r(3117),l=r(6848),d=r(9808),u=r(2791),p=r(1134),h=r(6871),f=r(3504),m=r(5318),x=r(1724),g=r(1265),v=r(577),b=r(289),k=r(1199),w=r(6652),j=r(184),y=x.Ry({email:x.Z_().email("Please enter valid email address").required("Please enter your email address"),password:x.Z_().min(8,"Your password must be at least 8 characters or greater").required("Please enter your password")});e.default=function(){var n=(0,p.cI)({mode:"onChange",resolver:(0,g.X)(y)}),e=n.handleSubmit,r=n.control,i=n.formState,x=i.isValid,C=i.isSubmitting,Z=i.errors;(0,u.useEffect)((function(){var n,e=Object.values(Z);e.length>0&&v.Am.error(null===(n=e[0])||void 0===n?void 0:n.message,{pauseOnHover:!1,delay:0})}),[Z]);var L=(0,d.a)().userInfo,z=(0,h.s0)();(0,u.useEffect)((function(){document.title="Login Page",null!==L&&void 0!==L&&L.email&&z("/")}),[L]);var N=function(){var n=(0,t.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(x){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,(0,b.e5)(k.I,e.email,e.password);case 5:z("/"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),n.t0.message.includes("wrong-password")&&v.Am.error("It seems your password was wrong");case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,j.jsx)(m.Z,{children:(0,j.jsxs)("form",{className:"form",onSubmit:e(N),autoComplete:"off",children:[(0,j.jsxs)(s.g,{children:[(0,j.jsx)(l._,{htmlFor:"email",children:"Email address"}),(0,j.jsx)(c.I,{type:"email",name:"email",placeholder:"Enter your email address",control:r})]}),(0,j.jsxs)(s.g,{children:[(0,j.jsx)(l._,{htmlFor:"password",children:"Password"}),(0,j.jsx)(w.Z,{control:r})]}),(0,j.jsxs)("div",{className:"have-account",children:["You have not had an account?"," ",(0,j.jsx)(f.OL,{to:"/sign-up",children:"Register an account"})," "]}),(0,j.jsx)(a.z,{type:"submit",className:"w-full max-w-[300px] mx-auto",isLoading:C,disabled:C,children:"Login"})]})})}}}]);
//# sourceMappingURL=706.5b0946fc.chunk.js.map