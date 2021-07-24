(this["webpackJsonpadd-user-app"]=this["webpackJsonpadd-user-app"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,b,d,s,l,j,u,m,O,h,g,x,f,p,y,v,w,k,B,C=t(1),F=t.n(C),S=t(5),A=t.n(S),M=t(15),H=t(4),L=t(2),P=t(3),D=Object(P.a)(r||(r=Object(L.a)(['\n* {\n  font-family: "Open Sans", sans-serif;\n}\nbody {\n    /* text-align: center; */\n    margin: 0;\n    padding: 0;\n    background: #41403f;\n  }\n']))),E=t(0),I=P.b.div(c||(c=Object(L.a)(["\n  margin-top: 2rem;\n  padding: 1rem;\n  width: 80%;\n  max-width: 35rem;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n"]))),T=function(n){var e=n.children;return Object(E.jsx)(I,{children:e})},J=P.b.button(o||(o=Object(L.a)(["\n  font-weight: bold;\n  color: white;\n  width: 5rem;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  background-color: tomato;\n  cursor: pointer;\n  transition: background-color 1s;\n  &:hover {\n    background-color: #d6452c;\n  }\n  &:focus {\n    background-color: #d6452c;\n  }\n"]))),N=function(n){var e=n.children,t=n.className,r=n.type,c=n.onClick;return Object(E.jsx)(J,{className:t,type:r||"button",onClick:c,children:e})},U=P.b.div(i||(i=Object(L.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n"]))),q=function(n){var e=n.onHideModalByButton;return Object(E.jsx)(U,{onClick:e})},z=Object(P.c)(a||(a=Object(L.a)(["\n    0% {top: -300px}\n    100% {top: 10%;}\n"]))),G=P.b.div(b||(b=Object(L.a)(["\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  overflow: hidden;\n  width: 80%;\n  max-width: 25rem;\n  background: white;\n  border-radius: 1rem;\n  animation: "," 0.5s;\n"])),z),K=P.b.header(d||(d=Object(L.a)(["\n  text-align: center;\n  background-color: #ff63479b;\n  padding: 0.1rem;\n"]))),Q=P.b.h2(s||(s=Object(L.a)(["\n  margin: 0.5rem;\n  color: red;\n"]))),R=P.b.section(l||(l=Object(L.a)(["\n  text-align: center;\n  color: red;\n  font-weight: bold;\n"]))),V=P.b.footer(j||(j=Object(L.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px;\n"]))),W=function(n){var e=n.title,t=n.msg,r=n.onHideModalByButton;return Object(E.jsxs)(G,{children:[Object(E.jsx)(K,{children:Object(E.jsx)(Q,{children:e})}),Object(E.jsx)(R,{children:Object(E.jsx)("p",{children:t})}),Object(E.jsx)(V,{children:Object(E.jsx)(N,{onClick:r,children:"Close"})})]})},X=Object(P.c)(u||(u=Object(L.a)(["\n     0% {opacity: 0;}\n     100% {opacity: 1;}\n"]))),Y=P.b.div(m||(m=Object(L.a)(["\n  animation: "," 0.5s;\n"])),X),Z=function(n){var e=n.title,t=n.msg,r=n.onHideModalByButton;return Object(E.jsxs)(Y,{children:[A.a.createPortal(Object(E.jsx)(q,{onHideModalByButton:r}),document.getElementById("shadow-root")),A.a.createPortal(Object(E.jsx)(W,{title:e,msg:t,onHideModalByButton:r}),document.getElementById("modal-root"))]})},$=Object(P.c)(O||(O=Object(L.a)(["\n    0% {margin-left: 80rem;}\n    100% {margin-left: 0;}\n"]))),_=P.b.div(h||(h=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  animation: "," 1s;\n"])),$),nn=P.b.form(g||(g=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),en=P.b.label(x||(x=Object(L.a)(["\n  font-weight: bold;\n  margin: 0.5rem;\n"]))),tn=P.b.input(f||(f=Object(L.a)(["\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid #00000026;\n  &:focus {\n    border: 1px solid tomato;\n  }\n"]))),rn=Object(P.b)(N)(p||(p=Object(L.a)(["\n  width: 15rem;\n"]))),cn=P.b.footer(y||(y=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),on=function(n){var e=n.onAddDataToList,t=Object(C.useState)(""),r=Object(H.a)(t,2),c=r[0],o=r[1],i=Object(C.useState)(""),a=Object(H.a)(i,2),b=a[0],d=a[1],s=Object(C.useState)(""),l=Object(H.a)(s,2),j=l[0],u=l[1],m=Object(C.useState)(),O=Object(H.a)(m,2),h=O[0],g=O[1],x=Object(C.useState)(!1),f=Object(H.a)(x,2),p=f[0],y=f[1],v=[o,d,u];return!1===p?Object(E.jsx)(T,{children:Object(E.jsx)(_,{children:Object(E.jsx)(rn,{type:"button",onClick:function(){return y(!0)},children:"Add new user"})})}):Object(E.jsxs)(_,{children:[h&&Object(E.jsx)(Z,{title:h.title,msg:h.msg,onHideModalByButton:function(){return g(null)}}),Object(E.jsx)(T,{children:Object(E.jsxs)(nn,{action:"",onSubmit:function(n){if(n.preventDefault(),0!==c.trim().length&&0!==b.trim().length&&0!==j.trim().length)if(+b<18)g({title:"Age is incorrect!",msg:"Age must be higher (min. 18)"});else{var t={id:Math.random().toString(),username:c,job:j,age:b};e(t),v.forEach((function(n){n("")}))}else g({title:"Form has empty fields!",msg:"Please complete all fields"})},children:[Object(E.jsx)(en,{htmlFor:"username",children:"Username"}),Object(E.jsx)(tn,{id:"username",type:"text",value:c,onChange:function(n){return o(n.target.value)}}),Object(E.jsx)(en,{htmlFor:"name",children:"Age ( years )"}),Object(E.jsx)(tn,{id:"name",type:"number",value:b,onChange:function(n){return d(n.target.value)}}),Object(E.jsx)(en,{htmlFor:"job",children:"Job"}),Object(E.jsx)(tn,{id:"job",type:"text",value:j,onChange:function(n){return u(n.target.value)}}),Object(E.jsxs)(cn,{children:[Object(E.jsx)(N,{type:"submit",children:"Add user"}),Object(E.jsx)(N,{type:"button",onClick:function(){return y(!1)},children:"Close"})]})]})})]})},an=Object(P.c)(v||(v=Object(L.a)(["\n    0% {margin-right: 210px;}\n    100% {margin-right: 0;}\n"]))),bn=P.b.li(w||(w=Object(L.a)(["\n  display: flex;\n  justify-content: space-around;\n  border: 1px solid tomato;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: tomato;\n  color: white;\n  font-weight: bold;\n  animation: "," 1s;\n"])),an),dn=function(n){var e=n.job,t=n.username,r=n.age;return Object(E.jsxs)(bn,{children:[Object(E.jsx)("p",{children:t}),Object(E.jsx)("p",{children:e}),Object(E.jsx)("p",{children:"Age: ".concat(r)})]})},sn=Object(P.b)(T)(k||(k=Object(L.a)(["\n  text-align: center;\n"]))),ln=function(n){var e=n.dataListFromForm;return Object(E.jsx)(sn,{children:e.map((function(n){return Object(E.jsx)(dn,{job:n.job,username:n.username,age:n.age},n.id)}))})},jn=P.b.div(B||(B=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var un=function(){var n=Object(C.useState)([]),e=Object(H.a)(n,2),t=e[0],r=e[1];return Object(E.jsxs)(C.Fragment,{children:[Object(E.jsx)(D,{}),Object(E.jsxs)(jn,{children:[Object(E.jsx)(on,{onAddDataToList:function(n){r((function(e){return[n].concat(Object(M.a)(e))}))}}),0!==t.length&&Object(E.jsx)(ln,{dataListFromForm:t})]})]})},mn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),o(n),i(n)}))};A.a.render(Object(E.jsx)(F.a.StrictMode,{children:Object(E.jsx)(un,{})}),document.getElementById("root")),mn()}},[[23,1,2]]]);
//# sourceMappingURL=main.fe9822be.chunk.js.map