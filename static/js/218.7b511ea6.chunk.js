"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[218],{383:function(n,t,e){e(791);t.Z=e.p+"static/media/Logo.e917114d7945c04c85a8946a331d28b6.svg"},218:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,o,a,i,p,s,x,c,l,f=e(433),u=e(861),d=e(439),h=e(687),g=e.n(h),b=e(791),m=e(243),Z=e(87),w=e(383),j=e(311),k=e(168),v=e(686),y=v.Z.ul(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 48px;\n  justify-content: center;\n  margin-bottom: 30px;\n  padding: 0;\n"]))),L=v.Z.li(o||(o=(0,k.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n  list-style: none;\n"]))),S=v.Z.img(a||(a=(0,k.Z)(["\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  margin-top: 170px;\n  margin-left: 54px;\n  border: 8px solid #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50%;\n  z-index: 10;\n"]))),O=v.Z.div(i||(i=(0,k.Z)(["\n  position: absolute;\n  top: 214px;\n  left: 0;\n  height: 8px;\n  width: 380px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),z=v.Z.img(p||(p=(0,k.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),C=v.Z.img(s||(s=(0,k.Z)(["\n  position: absolute;\n  top: 28px;\n  left: 36px;\n"]))),E=v.Z.p(x||(x=(0,k.Z)(["\n  margin-top: 242px;\n  margin-bottom: 16px;\n  text-align: center;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),M=v.Z.p(c||(c=(0,k.Z)(["\n  margin-bottom: 26px;\n  text-align: center;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),_=v.Z.button(l||(l=(0,k.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 196px;\n  height: 50px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #5CD3A8;\n"]))),F=e(184),T=function(){var n=(0,b.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],o=(0,b.useState)(1),a=(0,d.Z)(o,2),i=a[0],p=a[1],s=(0,b.useState)(!0),x=(0,d.Z)(s,2),c=x[0],l=x[1];(0,b.useEffect)((function(){var n=function(){var n=(0,u.Z)(g().mark((function n(){var t,e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.Z.get("".concat("https://647c6f74c0bae2880ad0b04c.mockapi.io","/users?page=").concat(i,"&limit=3"));case 3:t=n.sent,e=t.data,r((function(n){return 1===i?e:[].concat((0,f.Z)(n),(0,f.Z)(e))})),0===e.length&&l(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{children:(0,F.jsx)(_,{type:"button",children:(0,F.jsx)(Z.OL,{to:"/",children:(0,F.jsx)("span",{children:"Back"})})})}),e&&0!==e.length?(0,F.jsx)(y,{children:e.map((function(n){var t=n.id,e=n.tweets,r=n.followers,o=n.avatar;return(0,F.jsxs)(L,{children:[(0,F.jsx)(z,{src:w.Z,alt:"logo GOIT"}),(0,F.jsx)(C,{src:j,alt:""}),(0,F.jsx)(S,{src:o,alt:"avatar"}),(0,F.jsx)(O,{}),(0,F.jsxs)(E,{children:[e," TWEETS"]}),(0,F.jsxs)(M,{children:[r.toLocaleString("en-US")," FOLLOWERS"]}),(0,F.jsx)(_,{type:"button",children:"FOLLOW"})]},t)}))}):(0,F.jsx)("b",{children:"Request in progress..."}),c&&(0,F.jsx)(_,{type:"button",onClick:function(){return p((function(n){return n+1}))},children:"Load More"})]})}},311:function(n,t,e){n.exports=e.p+"static/media/picture.204c52a4d4fe08cebf94.png"}}]);
//# sourceMappingURL=218.7b511ea6.chunk.js.map