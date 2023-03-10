"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[22],{4167:function(n,e,r){r.d(e,{z:function(){return v}});var t,i,o,a,l,s=r(1413),c=r(4925),d=r(168),u=(r(2791),r(6031)),h=r(184),p=u.ZP.div(t||(t=(0,d.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),f=function(n){var e=n.size,r=void 0===e?"40px":e,t=n.borderSize,i=void 0===t?"5px":t;return(0,h.jsx)(p,{size:r,borderSize:i})},g=r(3504),x=["type","onClick","children","kind"],m=u.ZP.button(i||(i=(0,d.Z)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n  ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return n.height||"66px"}),(function(n){return"secondary"===n.kind&&(0,u.iv)(o||(o=(0,d.Z)(["\n      color: ",";\n      background-color: white;\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"primary"===n.kind&&(0,u.iv)(a||(a=(0,d.Z)(["\n      color: white;\n      background-color: ",";\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"ghost"===n.kind&&(0,u.iv)(l||(l=(0,d.Z)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(function(n){return n.theme.primary}))})),v=function(n){var e=n.type,r=void 0===e?"button":e,t=n.onClick,i=void 0===t?function(){}:t,o=n.children,a=n.kind,l=void 0===a?"primary":a,d=(0,c.Z)(n,x),u=d.isLoading,p=d.to,v=u?(0,h.jsx)(f,{}):o;return""!==p&&"string"===typeof p?(0,h.jsx)(g.OL,{to:p,className:"inline-block",children:(0,h.jsx)(m,(0,s.Z)((0,s.Z)({type:r,kind:l},d),{},{children:v}))}):(0,h.jsx)(m,(0,s.Z)((0,s.Z)({type:r,kind:l,onClick:i},d),{},{children:v}))}},5456:function(n,e,r){r.d(e,{Y:function(){return s}});r(2791);var t=r(184),i=r(1413),o=r(4925),a=r(1134),l=["checked","children","control","name"],s=function(n){var e=n.checked,r=n.children,s=n.control,c=n.name,d=(0,o.Z)(n,l),u=(0,a.bc)({control:s,name:c,defaultValue:""}).field;return(0,t.jsxs)("label",{children:[(0,t.jsx)("input",(0,i.Z)((0,i.Z)({checked:e,type:"radio",className:"hidden-input"},u),d)),(0,t.jsxs)("div",{className:"flex items-center gap-x-3 font-medium cursor-pointer",children:[(0,t.jsx)("div",{className:"w-7 h-7 rounded-full border flex items-center justify-center p-1  ".concat(e?"bg-primary border-primary text-white":"border-gray-200 text-transparent"),children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})}),(0,t.jsx)("span",{children:r})]})]})}},9501:function(n,e,r){r.d(e,{L:function(){return h}});var t=r(1413),i=r(4925),o=r(2791),a=r(9439),l=r(184),s=(0,o.createContext)();function c(n){var e=(0,o.useState)(!1),r=(0,a.Z)(e,2),t=r[0],i=r[1],c={show:t,setShow:i,toggle:function(){i(!t)}};return(0,l.jsx)(s.Provider,{value:c,children:n.children})}function d(){var n=(0,o.useContext)(s);if("undefined"===typeof n)throw new Error("useDropdown must be used within DropdownProvider");return n}var u=["children"],h=function(n){var e=n.children,r=(0,i.Z)(n,u);return(0,l.jsx)(c,(0,t.Z)((0,t.Z)({},r),{},{children:(0,l.jsx)("div",{className:"relative inline-block w-full",children:e})}))},p=function(n){var e=n.onClick,r=d().setShow;return(0,l.jsx)("div",{className:"py-4 px-5 cursor-pointer flex items-center justify-between hover:text-primary transition-all text-sm",onClick:function(){e&&e(),r(!1)},children:n.children})},f=["placeholder"],g=function(n){var e=n.placeholder,r=(0,i.Z)(n,f),o=d().onChange;return(0,l.jsx)("div",{className:"p-2",children:(0,l.jsx)("input",(0,t.Z)({type:"text",placeholder:e,className:"p-4 outline-none w-full border border-gray-200 rounded",onChange:o},r))})},x=function(n){var e=n.placeholder,r=void 0===e?"":e,t=n.className,i=void 0===t?"":t,o=d(),a=o.toggle,s=o.show;return(0,l.jsxs)("div",{className:"flex items-center justify-between py-4 px-5 bg-white border border-grayf1 rounded-lg cursor-pointer text-sm text-[#B2B3BD] ".concat(i),onClick:a,children:[(0,l.jsx)("span",{children:r}),(0,l.jsx)("span",{children:s?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})},m=function(n){var e=n.children,r=d().show;return(0,l.jsx)(l.Fragment,{children:r&&(0,l.jsx)("div",{className:"absolute top-full left-0 w-full bg-white shadow-sm",children:e})})};h.Option=p,h.Search=g,h.Select=x,h.List=m},9248:function(n,e,r){r.d(e,{g:function(){return s},Y:function(){return c}});var t,i=r(168),o=(r(2791),r(6031)),a=r(184),l=o.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 10px;\n  margin-bottom: 25px;\n"]))),s=function(n){var e=n.children;return(0,a.jsx)(l,{children:e})},c=function(n){var e=n.children;return(0,a.jsx)("div",{className:"flex flex-wrap gap-5",children:e})}},3031:function(n,e,r){var t=r(1413),i=r(4925),o=r(2791),a=r(184),l=["name","className","progress","image","handleDeleteImage"];e.Z=function(n){var e=n.name,r=n.className,s=void 0===r?"":r,c=n.progress,d=void 0===c?0:c,u=n.image,h=void 0===u?"":u,p=n.handleDeleteImage,f=void 0===p?function(){}:p,g=(0,i.Z)(n,l);return(0,a.jsxs)("label",{className:"cursor-pointer flex items-center justify-center border border-dashed w-full min-h-[200px] rounded-lg ".concat(s," relative overflow-hidden group"),children:[(0,a.jsx)("input",(0,t.Z)({type:"file",name:e,className:"hidden-input",onChange:function(){}},g)),0!==d&&!h&&(0,a.jsx)("div",{className:"absolute z-10 w-16 h-16 border-8 border-green-500 rounded-full loading border-t-transparent animate-spin"}),!h&&0===d&&(0,a.jsxs)("div",{className:"flex flex-col items-center text-center pointer-events-none",children:[(0,a.jsx)("img",{src:"/img-upload.png",alt:"upload-img",className:"max-w-[80px] mb-5"}),(0,a.jsx)("p",{className:"font-semibold",children:"Choose photo"})]}),h&&(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)("img",{src:h,className:"object-cover w-full h-full",alt:""}),(0,a.jsx)("button",{type:"button",className:"absolute z-10 flex items-center justify-center invisible w-16 h-16 text-red-500 transition-all bg-white rounded-full opacity-0 cursor-pointer group-hover:opacity-100 group-hover:visible",onClick:f,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),!h&&(0,a.jsx)("div",{className:"absolute bottom-0 left-0 w-10 h-1 transition-all bg-green-400 image-upload-progress",style:{width:"".concat(Math.ceil(d),"%")}})]})}},3175:function(n,e,r){var t,i=r(1413),o=r(4925),a=r(168),l=(r(2791),r(6031)),s=r(1134),c=r(184),d=["name","type","children","control"],u=l.ZP.div(t||(t=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  input {\n    width: 100%;\n    padding: ",";\n    background-color: transparent;\n    border: 1px solid ",";\n    border-radius: 8px;\n    transition: all 0.2s linear;\n    color: ",";\n    font-size: 14px;\n  }\n  input::-webkit-input-placeholder {\n    color: #b2b3bd;\n  }\n  input::-moz-input-placeholder {\n    color: #b2b3bd;\n  }\n  .input-icon {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n"])),(function(n){return n.hasIcon?"16px 60px 16px 20px":"16px 20px"}),(function(n){return n.theme.grayf1}),(function(n){return n.theme.black}));e.Z=function(n){var e=n.name,r=void 0===e?"":e,t=n.type,a=void 0===t?"text":t,l=n.children,h=n.control,p=(0,o.Z)(n,d),f=(0,s.bc)({control:h,name:r,defaultValue:""}).field;return(0,c.jsxs)(u,{hasIcon:!!l,children:[(0,c.jsx)("input",(0,i.Z)((0,i.Z)({id:r,type:a},f),p)),l?(0,c.jsx)("div",{className:"input-icon",children:l}):null]})}},3117:function(n,e,r){r.d(e,{I:function(){return t.Z}});var t=r(3175)},6848:function(n,e,r){r.d(e,{_:function(){return h},O:function(){return f}});var t,i,o=r(1413),a=r(4925),l=r(168),s=(r(2791),r(6031)),c=r(184),d=["htmlFor","children"],u=s.ZP.label(t||(t=(0,l.Z)(["\n  color: ",";\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n"])),(function(n){return n.theme.gray4b})),h=function(n){var e=n.htmlFor,r=void 0===e?"":e,t=n.children,i=(0,a.Z)(n,d);return(0,c.jsx)(u,(0,o.Z)((0,o.Z)({htmlFor:r},i),{},{children:t}))},p=s.ZP.span(i||(i=(0,l.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n"]))),f=function(n){var e=n.children,r=n.type,t="text-gray-500 bg-gray-100";switch(void 0===r?"default":r){case"success":t="text-green-500 bg-green-100";break;case"warning":t="text-orange-500 bg-orange-100";break;case"danger":t="text-red-500 bg-red-100"}return(0,c.jsx)(p,{className:t,children:e})}},4961:function(n,e,r){var t=r(1413),i=r(4925),o=(r(2791),r(184)),a=["on","onClick"];e.Z=function(n){var e=n.on,r=n.onClick,l=(0,i.Z)(n,a);return(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",checked:e,className:"hidden-input",onChange:function(){},onClick:r}),(0,o.jsx)("div",(0,t.Z)((0,t.Z)({className:"inline-block w-[70px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ".concat(e?"bg-green-500":"bg-gray-300")},l),{},{children:(0,o.jsx)("span",{className:"transition-all w-[34px] h-[34px] bg-white rounded-full inline-block ".concat(e?"translate-x-[28px]":"")})}))]})}},1776:function(n,e,r){r.d(e,{Z:function(){return d}});var t=r(9439),i=r(9808),o=r(4453),a=r(2791),l=r(1830),s=r.n(l),c=r(3585);function d(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,d=(0,i.a)(),u=d.userInfo,h=(0,a.useState)(0),p=(0,t.Z)(h,2),f=p[0],g=p[1],x=(0,a.useState)(""),m=(0,t.Z)(x,2),v=m[0],b=m[1];if(n&&e){var w=function(n){if((null===u||void 0===u?void 0:u.role)===c.xZ.ADMIN){var e=(0,o.cF)(),r=(0,o.iH)(e,"images/"+n.name),t=(0,o.B0)(r,n);t.on("state_changed",(function(n){var e=n.bytesTransferred/n.totalBytes*100;switch(g(e),n.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break;default:console.log("Nothing at all")}}),(function(n){console.log("Error"),b("")}),(function(){(0,o.Jt)(t.snapshot.ref).then((function(n){console.log("File available at",n),b(n)}))}))}else s().fire("Failed","You have no right to do this action","warning")},j=function(e){var r=e.target.files[0];r&&(n("image_name",r.name),w(r))},k=function(){if((null===u||void 0===u?void 0:u.role)===c.xZ.ADMIN){var n=(0,o.cF)(),t=(0,o.iH)(n,"images/"+(r||e("image_name")));(0,o.oq)(t).then((function(){console.log("Remove image successfully"),b(""),g(0),l&&l()})).catch((function(n){console.log("handleDeleteImage ~ error",n),console.log("Can not delete image"),b("")}))}else s().fire("Failed","You have no right to do this action","warning")},y=function(){b(""),g(0)};return{image:v,setImage:b,handleResetUpload:y,progress:f,handleSelectImage:j,handleDeleteImage:k}}}},8322:function(n,e,r){r(2791);var t=r(184);e.Z=function(n){var e=n.title,r=void 0===e?"":e,i=n.desc,o=void 0===i?"":i,a=n.children;return(0,t.jsxs)("div",{className:"mb-10 flex items-start justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"dashboard-heading",children:r}),(0,t.jsx)("p",{className:"dashboard-short-desc",children:o})]}),a]})}}}]);
//# sourceMappingURL=22.efcee2cc.chunk.js.map