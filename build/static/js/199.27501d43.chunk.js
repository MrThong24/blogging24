"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[199],{4167:function(n,e,i){i.d(e,{z:function(){return f}});var t,o,a,r,s,d=i(1413),l=i(4925),c=i(168),u=(i(2791),i(6031)),p=i(184),m=u.ZP.div(t||(t=(0,c.Z)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.borderSize}),(function(n){return n.borderSize}),(function(n){return n.borderSize})),x=function(n){var e=n.size,i=void 0===e?"40px":e,t=n.borderSize,o=void 0===t?"5px":t;return(0,p.jsx)(m,{size:i,borderSize:o})},h=i(3504),g=["type","onClick","children","kind"],v=u.ZP.button(o||(o=(0,c.Z)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n  ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(function(n){return n.height||"66px"}),(function(n){return"secondary"===n.kind&&(0,u.iv)(a||(a=(0,c.Z)(["\n      color: ",";\n      background-color: white;\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"primary"===n.kind&&(0,u.iv)(r||(r=(0,c.Z)(["\n      color: white;\n      background-color: ",";\n    "])),(function(n){return n.theme.primary}))}),(function(n){return"ghost"===n.kind&&(0,u.iv)(s||(s=(0,c.Z)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(function(n){return n.theme.primary}))})),f=function(n){var e=n.type,i=void 0===e?"button":e,t=n.onClick,o=void 0===t?function(){}:t,a=n.children,r=n.kind,s=void 0===r?"primary":r,c=(0,l.Z)(n,g),u=c.isLoading,m=c.to,f=u?(0,p.jsx)(x,{}):a;return""!==m&&"string"===typeof m?(0,p.jsx)(h.OL,{to:m,className:"inline-block",children:(0,p.jsx)(v,(0,d.Z)((0,d.Z)({type:i,kind:s},c),{},{children:f}))}):(0,p.jsx)(v,(0,d.Z)((0,d.Z)({type:i,kind:s,onClick:o},c),{},{children:f}))}},7386:function(n,e,i){var t,o=i(168),a=(i(2791),i(6031)),r=i(184),s=a.ZP.h2(t||(t=(0,o.Z)(["\n  font-size: 28px;\n  position: relative;\n  margin-bottom: 30px;\n  font-weight: 600;\n  @media screen and (max-width: 1023.98px) {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n"])));e.Z=function(n){var e=n.className,i=void 0===e?"":e,t=n.children;return(0,r.jsx)(s,{className:i,children:t})}},2185:function(n,e,i){i.d(e,{Z:function(){return x}});var t,o=i(2791),a=i(168),r=i(4167),s=i(9808),d=i(3504),l=i(6031),c=i(184),u=[{url:"/",title:"Home"},{url:"/blog",title:"Blog"},{url:"/contact",title:"Contact"}],p=l.ZP.header(t||(t=(0,a.Z)(["\n  padding: 20px 0;\n  .header-main {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .header-auth {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n  .logo {\n    display: block;\n    max-width: 50px;\n  }\n  .menu {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    margin-left: 40px;\n    list-style: none;\n    font-weight: 500;\n  }\n  .search {\n    margin-left: auto;\n    padding: 15px 25px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    width: 100%;\n    max-width: 320px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin-right: 20px;\n  }\n  .search-input {\n    flex: 1;\n    padding-right: 45px;\n    font-weight: 500;\n  }\n  .search-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 25px;\n  }\n  @media screen and (max-width: 1023.98px) {\n    .logo {\n      max-width: 30px;\n    }\n    .menu,\n    .search,\n    .header-button,\n    .header-auth {\n      display: none;\n    }\n  }\n"]))),m=function(){var n=(0,s.a)().userInfo;return(0,c.jsx)(p,{children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"header-main",children:[(0,c.jsx)(d.OL,{to:"/",children:(0,c.jsx)("img",{srcSet:"/logo.png 2x",alt:"monkey-blogging",className:"logo"})}),(0,c.jsx)("ul",{className:"menu",children:u.map((function(n){return(0,c.jsx)("li",{className:"menu-item",children:(0,c.jsx)(d.OL,{to:n.url,className:"menu-link",children:n.title})},n.title)}))}),n?(0,c.jsx)("div",{className:"header-auth",children:(0,c.jsx)(r.z,{type:"button",height:"56px",className:"header-button",to:"/dashboard",children:"Dashboard"})}):(0,c.jsx)(r.z,{type:"button",height:"56px",className:"header-button",to:"/sign-in",children:"Login"})]})})})},x=function(n){var e=n.children;return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(m,{}),e]})}},238:function(n,e,i){var t,o,a,r=i(168),s=(i(2791),i(3504)),d=i(6031),l=i(184),c=d.ZP.div(t||(t=(0,r.Z)(["\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n  @media screen and (max-width: 1023.98px) {\n    font-size: 10px;\n  }\n"])),(function(n){return n.theme.gray6B}),(function(n){return"primary"===n.type&&(0,d.iv)(o||(o=(0,r.Z)(["\n      background-color: ","; ;\n    "])),(function(n){return n.theme.grayF3}))}),(function(n){return"secondary"===n.type&&(0,d.iv)(a||(a=(0,r.Z)(["\n      background-color: white;\n    "])))}));e.Z=function(n){var e=n.children,i=n.type,t=void 0===i?"primary":i,o=n.className,a=void 0===o?"":o,r=n.to,d=void 0===r?"":r;return(0,l.jsx)(c,{type:t,className:"post-category ".concat(a),children:(0,l.jsx)(s.rU,{to:"/category/".concat(d),children:e})})}},7149:function(n,e,i){var t,o=i(168),a=(i(2791),i(3504)),r=i(6031),s=i(184),d=r.ZP.div(t||(t=(0,o.Z)(["\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: inherit;\n  }\n"])));e.Z=function(n){var e=n.className,i=void 0===e?"":e,t=n.url,o=void 0===t?"":t,r=n.alt,l=void 0===r?"":r,c=n.to,u=void 0===c?"":c;return u?(0,s.jsx)(a.rU,{to:"/".concat(u),style:{display:"block"},children:(0,s.jsx)(d,{className:"post-image ".concat(i),children:(0,s.jsx)("img",{src:o,alt:l,loading:"lazy"})})}):(0,s.jsx)(d,{className:"post-image ".concat(i),children:(0,s.jsx)("img",{src:o,alt:l,loading:"lazy"})})}},6795:function(n,e,i){var t,o=i(168),a=(i(2791),i(3504)),r=i(6031),s=i(184),d=r.ZP.div(t||(t=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: inherit;\n  .post {\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n  }\n  @media screen and (max-width: 1023.98px) {\n    font-size: 10px;\n    gap: 6px;\n  }\n"])));e.Z=function(n){var e=n.date,i=void 0===e?"Mar 23":e,t=n.authorName,o=void 0===t?"Andiez Le":t,r=n.className,l=void 0===r?"":r,c=n.to,u=void 0===c?"":c;return(0,s.jsxs)(d,{className:"post-meta ".concat(l),children:[(0,s.jsx)("span",{className:"post-time",children:i}),(0,s.jsx)("span",{className:"post-dot"}),(0,s.jsx)(a.rU,{to:"/author/".concat(u),children:(0,s.jsx)("span",{className:"post-author",children:o})})]})}},9978:function(n,e,i){var t,o,a,r=i(168),s=(i(2791),i(3504)),d=i(6031),l=i(184),c=d.ZP.h3(t||(t=(0,r.Z)(["\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.25px;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n"])),(function(n){return"normal"===n.size&&(0,d.iv)(o||(o=(0,r.Z)(["\n      font-size: 18px;\n      @media screen and (max-width: 1023.98px) {\n        font-size: 14px;\n      }\n    "])))}),(function(n){return"big"===n.size&&(0,d.iv)(a||(a=(0,r.Z)(["\n      font-size: 22px;\n      @media screen and (max-width: 1023.98px) {\n        font-size: 16px;\n      }\n    "])))}));e.Z=function(n){var e=n.children,i=n.className,t=void 0===i?"":i,o=n.size,a=void 0===o?"normal":o,r=n.to,d=void 0===r?"":r;return(0,l.jsx)(c,{size:a,className:"post-title ".concat(t),children:(0,l.jsx)(s.rU,{to:"/".concat(d),children:e})})}},6199:function(n,e,i){i.r(e),i.d(e,{default:function(){return M}});var t,o,a,r,s,d,l,c=i(168),u=i(2185),p=i(4167),m=i(2791),x=i(6031),h=i(184),g=x.ZP.div(t||(t=(0,c.Z)(["\n  min-height: 520px;\n  padding: 40px 0;\n  background-image: linear-gradient(\n    to right bottom,\n    ",",\n    ","\n  );\n  margin-bottom: 60px;\n  .banner {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    &-content {\n      max-width: 600px;\n      color: white;\n    }\n    &-heading {\n      font-size: 36px;\n      margin-bottom: 20px;\n      font-weight: bold;\n    }\n    &-desc {\n      line-height: 1.75;\n      margin-bottom: 40px;\n    }\n  }\n  @media screen and (max-width: 1023.98px) {\n    .banner {\n      flex-direction: column;\n      min-height: unset;\n      &-heading {\n        font-size: 30px;\n        margin-bottom: 10px;\n      }\n      &-desc {\n        font-size: 14px;\n        margin-bottom: 20px;\n      }\n      &-image {\n        margin-top: 25px;\n      }\n      &-button {\n        font-size: 14px;\n        height: auto;\n        padding: 15px;\n      }\n    }\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary})),v=function(){return(0,h.jsx)(g,{children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"banner",children:[(0,h.jsxs)("div",{className:"banner-content",children:[(0,h.jsx)("h1",{className:"banner-heading",children:"Monkey Blogging"}),(0,h.jsx)("p",{className:"banner-desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam similique accusantium natus esse facilis! Quaerat voluptates possimus dolorem officiis pariatur, repellat, cupiditate porro, quidem molestiae impedit laudantium neque quo!"}),(0,h.jsx)(p.z,{to:"/sign-up",kind:"secondary",className:"banner-button",children:"Get started"})]}),(0,h.jsx)("div",{className:"banner-image",children:(0,h.jsx)("img",{src:"/img-banner.png",alt:"banner"})})]})})})},f=i(1413),b=i(9439),j=i(7386),y=i(1199),Z=i(9062),w=i(333),k=i.n(w),N=i(9978),z=i(6795),P=i(7149),L=i(238),D=i(7470),S=x.ZP.div(o||(o=(0,c.Z)(["\n  width: 100%;\n  border-radius: 16px;\n  position: relative;\n  height: 169px;\n  .post {\n    &-image {\n      width: 100%;\n      height: 100%;\n      border-radius: 16px;\n    }\n    &-overlay {\n      position: absolute;\n      inset: 0;\n      border-radius: 16px;\n      background-color: rgba(0, 0, 0, 0.75);\n      mix-blend-mode: multiply;\n      opacity: 0.6;\n    }\n    &-content {\n      position: absolute;\n      inset: 0;\n      z-index: 10;\n      padding: 20px;\n      color: white;\n    }\n    &-top {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 16px;\n    }\n  }\n\n  @media screen and (min-width: 1024px) {\n    height: 272px;\n  }\n  @media screen and (max-width: 1023.98px) {\n    .post {\n      &-content {\n        padding: 15px;\n      }\n    }\n  }\n"]))),C=(0,D.withErrorBoundary)((function(n){var e,i,t=n.data;if(!t||!t.id)return null;var o=null!==t&&void 0!==t&&null!==(e=t.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===t||void 0===t||null===(i=t.createdAt)||void 0===i?void 0:i.seconds)):new Date,a=new Date(o).toLocaleDateString("vi-VI"),r=t.category,s=t.user;return(0,h.jsxs)(S,{children:[(0,h.jsx)(P.Z,{url:t.image,alt:"unsplash"}),(0,h.jsx)("div",{className:"post-overlay"}),(0,h.jsxs)("div",{className:"post-content",children:[(0,h.jsxs)("div",{className:"post-top",children:[(null===r||void 0===r?void 0:r.name)&&(0,h.jsx)(L.Z,{to:r.slug,children:r.name}),(0,h.jsx)(z.Z,{to:k()((null===s||void 0===s?void 0:s.username)||"",{lower:!0}),authorName:null===s||void 0===s?void 0:s.fullname,date:a})]}),(0,h.jsx)(N.Z,{to:t.slug,size:"big",children:t.title})]})]})}),{FallbackComponent:(0,h.jsx)("p",{className:"p-3 text-red-500 bg-red-100",children:"Look like this component error"})}),A=x.ZP.div(a||(a=(0,c.Z)([""]))),E=(0,D.withErrorBoundary)((function(){var n=(0,m.useState)([]),e=(0,b.Z)(n,2),i=e[0],t=e[1];return(0,m.useEffect)((function(){var n=(0,Z.hJ)(y.db,"posts"),e=(0,Z.IO)(n,(0,Z.ar)("status","==",1),(0,Z.ar)("hot","==",!0),(0,Z.b9)(3));(0,Z.cf)(e,(function(n){var e=[];n.forEach((function(n){e.push((0,f.Z)({id:n.id},n.data()))})),t(e)}))}),[]),i.length<=0?null:(0,h.jsx)(A,{className:"home-block",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(j.Z,{children:"Featured posts"}),(0,h.jsx)("div",{className:"grid-layout",children:i.map((function(n){return(0,h.jsx)(C,{data:n},n.id)}))})]})})}),{FallbackComponent:(0,h.jsx)("p",{className:"p-3 text-red-500 bg-red-100",children:"Look like this component error"})}),I=i(4506),_=x.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 28px;\n  padding-bottom: 28px;\n  border-bottom: 1px solid #ddd;\n  &:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n  .post {\n    &-image {\n      display: block;\n      flex-shrink: 0;\n      width: 180px;\n      height: 130px;\n      border-radius: 12px;\n    }\n    &-category {\n      margin-bottom: 8px;\n    }\n    &-content {\n      flex: 1;\n    }\n\n    &-title {\n      margin-bottom: 8px;\n    }\n  }\n  @media screen and (max-width: 1023.98px) {\n    margin-bottom: 14px;\n    padding-bottom: 14px;\n    .post {\n      &-image {\n        width: 140px;\n        height: 100px;\n      }\n    }\n  }\n"]))),B=function(n){var e,i,t,o,a,r,s=n.data;if(!s.id)return null;var d=null!==s&&void 0!==s&&null!==(e=s.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===s||void 0===s||null===(i=s.createdAt)||void 0===i?void 0:i.seconds)):new Date,l=new Date(d).toLocaleDateString("vi-VI");return(0,h.jsxs)(_,{children:[(0,h.jsx)(P.Z,{url:s.image,alt:"",to:null===s||void 0===s?void 0:s.slug}),(0,h.jsxs)("div",{className:"post-content",children:[(0,h.jsx)(L.Z,{to:null===s||void 0===s||null===(t=s.category)||void 0===t?void 0:t.slug,type:"secondary",children:null===(o=s.category)||void 0===o?void 0:o.name}),(0,h.jsx)(N.Z,{to:null===s||void 0===s?void 0:s.slug,children:s.title}),(0,h.jsx)(z.Z,{to:k()((null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.username)||"",{lower:!0}),authorName:null===s||void 0===s||null===(r=s.user)||void 0===r?void 0:r.fullname,date:l})]})]})},F=x.ZP.div(s||(s=(0,c.Z)(["\n  .post {\n    &-image {\n      display: block;\n      margin-bottom: 20px;\n      height: 433px;\n      border-radius: 16px;\n    }\n    &-category {\n      margin-bottom: 10px;\n    }\n    &-title {\n      margin-bottom: 20px;\n    }\n    @media screen and (max-width: 1023.98px) {\n      &-image {\n        height: 250px;\n      }\n    }\n  }\n"]))),O=function(n){var e,i,t,o,a,r,s=n.data;if(!s.id)return null;var d=null!==s&&void 0!==s&&null!==(e=s.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===s||void 0===s||null===(i=s.createdAt)||void 0===i?void 0:i.seconds)):new Date,l=new Date(d).toLocaleDateString("vi-VI");return(0,h.jsxs)(F,{children:[(0,h.jsx)(P.Z,{url:null===s||void 0===s?void 0:s.image,alt:"",to:null===s||void 0===s?void 0:s.slug}),(0,h.jsx)(L.Z,{to:null===s||void 0===s||null===(t=s.category)||void 0===t?void 0:t.slug,children:null===s||void 0===s||null===(o=s.category)||void 0===o?void 0:o.name}),(0,h.jsx)(N.Z,{to:null===s||void 0===s?void 0:s.slug,size:"big",children:null===s||void 0===s?void 0:s.title}),(0,h.jsx)(z.Z,{to:k()((null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.username)||"",{lower:!0}),authorName:null===s||void 0===s||null===(r=s.user)||void 0===r?void 0:r.fullname,date:l})]})},q=i(2810),U=x.ZP.div(d||(d=(0,c.Z)(["\n  .layout {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    grid-gap: 40px;\n    margin-bottom: 40px;\n    align-items: start;\n  }\n  .sidebar {\n    padding: 28px 20px;\n    background-color: #f3edff;\n    border-radius: 16px;\n  }\n  @media screen and (max-width: 1023.98px) {\n    .layout {\n      grid-template-columns: 100%;\n    }\n    .sidebar {\n      padding: 14px 10px;\n    }\n  }\n"]))),V=function(){var n=(0,m.useState)([]),e=(0,b.Z)(n,2),i=e[0],t=e[1];if((0,m.useEffect)((function(){var n=(0,Z.hJ)(y.db,"posts"),e=(0,Z.IO)(n,(0,Z.ar)("status","==",1),(0,Z.ar)("hot","==",!1),(0,Z.b9)(4));(0,Z.cf)(e,(function(n){var e=[];n.forEach((function(n){e.push((0,f.Z)({id:n.id},n.data()))})),t(e)}))}),[]),i.length<=0)return null;var o=(0,I.Z)(i),a=o[0],r=o.slice(1);return(0,h.jsx)(U,{className:"home-block",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(j.Z,{children:"Latest posts"}),(0,h.jsxs)("div",{className:"layout",children:[(0,h.jsx)(O,{data:a}),(0,h.jsx)("div",{className:"sidebar",children:r.length>0&&r.map((function(n){return(0,h.jsx)(B,{data:n},(0,q.Z)())}))})]})]})})},J=x.ZP.div(l||(l=(0,c.Z)([""]))),M=function(){return(0,h.jsx)(J,{children:(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(v,{}),(0,h.jsx)(E,{}),(0,h.jsx)(V,{})]})})}}}]);
//# sourceMappingURL=199.27501d43.chunk.js.map