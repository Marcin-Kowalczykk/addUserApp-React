(this["webpackJsonpadd-user-app"]=this["webpackJsonpadd-user-app"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,b,s,d,j,l,u,O,m,h,g,x,f,p,v,y,w,k,C,F=t(1),S=t.n(F),A=t(11),B=t.n(A),L=t(15),D=t(4),M=t(2),T=t(3),J=Object(T.a)(r||(r=Object(M.a)(['\n* {\n  font-family: "Open Sans", sans-serif;\n}\nbody {\n    /* text-align: center; */\n    margin: 0;\n    padding: 0;\n    background: #41403f;\n  }\n']))),P=t(0),E=T.b.div(c||(c=Object(M.a)(["\n  margin-top: 2rem;\n  padding: 1rem;\n  width: 80%;\n  max-width: 35rem;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n"]))),H=function(n){var e=n.children;return Object(P.jsx)(E,{children:e})},I=T.b.button(i||(i=Object(M.a)(["\n  font-weight: bold;\n  color: white;\n  width: 5rem;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  background-color: tomato;\n  cursor: pointer;\n  transition: background-color 1s;\n  &:hover {\n    background-color: #d6452c;\n  }\n  &:focus {\n    background-color: #d6452c;\n  }\n"]))),N=function(n){var e=n.children,t=n.className,r=n.type,c=n.onClick;return Object(P.jsx)(I,{className:t,type:r||"button",onClick:c,children:e})},U=Object(T.c)(o||(o=Object(M.a)(["\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n"]))),q=Object(T.c)(a||(a=Object(M.a)(["\n    0% {top: -300px}\n    100% {top: 10%;}\n"]))),z=T.b.div(b||(b=Object(M.a)(["\n  animation: "," 0.5s;\n"])),U),G=T.b.div(s||(s=Object(M.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n"]))),K=T.b.div(d||(d=Object(M.a)(["\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  overflow: hidden;\n  width: 80%;\n  max-width: 25rem;\n  background: white;\n  border-radius: 1rem;\n  animation: "," 0.5s;\n"])),q),Q=T.b.header(j||(j=Object(M.a)(["\n  text-align: center;\n  background-color: #ff63479b;\n  padding: 0.1rem;\n"]))),R=T.b.h2(l||(l=Object(M.a)(["\n  margin: 0.5rem;\n  color: red;\n"]))),V=T.b.section(u||(u=Object(M.a)(["\n  text-align: center;\n  color: red;\n  font-weight: bold;\n"]))),W=T.b.footer(O||(O=Object(M.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px;\n"]))),X=function(n){var e=n.title,t=n.msg,r=n.onHideModalByButton;return Object(P.jsxs)(z,{children:[Object(P.jsx)(G,{onClick:r}),Object(P.jsxs)(K,{children:[Object(P.jsx)(Q,{children:Object(P.jsx)(R,{children:e})}),Object(P.jsx)(V,{children:Object(P.jsx)("p",{children:t})}),Object(P.jsx)(W,{children:Object(P.jsx)(N,{onClick:r,children:"Close"})})]})]})},Y=Object(T.c)(m||(m=Object(M.a)(["\n    0% {margin-left: 80rem;}\n    100% {margin-left: 0;}\n"]))),Z=T.b.div(h||(h=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  animation: "," 1s;\n"])),Y),$=T.b.form(g||(g=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),_=T.b.label(x||(x=Object(M.a)(["\n  font-weight: bold;\n  margin: 0.5rem;\n"]))),nn=T.b.input(f||(f=Object(M.a)(["\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid #00000026;\n  &:focus {\n    border: 1px solid tomato;\n  }\n"]))),en=Object(T.b)(N)(p||(p=Object(M.a)(["\n  width: 15rem;\n"]))),tn=Object(T.b)(N)(v||(v=Object(M.a)(["\n  margin-left: 63%;\n"]))),rn=function(n){var e=n.onAddDataToList,t=Object(F.useState)(""),r=Object(D.a)(t,2),c=r[0],i=r[1],o=Object(F.useState)(""),a=Object(D.a)(o,2),b=a[0],s=a[1],d=Object(F.useState)(""),j=Object(D.a)(d,2),l=j[0],u=j[1],O=Object(F.useState)(),m=Object(D.a)(O,2),h=m[0],g=m[1],x=Object(F.useState)(!1),f=Object(D.a)(x,2),p=f[0],v=f[1],y=[i,s,u];return!1===p?Object(P.jsx)(H,{children:Object(P.jsx)(Z,{children:Object(P.jsx)(en,{type:"button",onClick:function(){return v(!0)},children:"Add new user"})})}):Object(P.jsxs)(Z,{children:[h&&Object(P.jsx)(X,{title:h.title,msg:h.msg,onHideModalByButton:function(){return g(null)}}),Object(P.jsx)(H,{children:Object(P.jsxs)($,{action:"",onSubmit:function(n){if(n.preventDefault(),0!==c.trim().length&&0!==b.trim().length&&0!==l.trim().length)if(+b<18)g({title:"Age is incorrect!",msg:"Age must be higher (min. 18)"});else{var t={id:Math.random().toString(),username:c,job:l,age:b};e(t),y.forEach((function(n){n("")}))}else g({title:"Form has empty fields!",msg:"Please complete all fields"})},children:[Object(P.jsx)(_,{htmlFor:"username",children:"Username"}),Object(P.jsx)(nn,{id:"username",type:"text",value:c,onChange:function(n){return i(n.target.value)}}),Object(P.jsx)(_,{htmlFor:"name",children:"Age ( years )"}),Object(P.jsx)(nn,{id:"name",type:"number",value:b,onChange:function(n){return s(n.target.value)}}),Object(P.jsx)(_,{htmlFor:"job",children:"Job"}),Object(P.jsx)(nn,{id:"job",type:"text",value:l,onChange:function(n){return u(n.target.value)}}),Object(P.jsxs)("footer",{children:[Object(P.jsx)(N,{type:"submit",children:"Add user"}),Object(P.jsx)(tn,{type:"button",onClick:function(){return v(!1)},children:"Close"})]})]})})]})},cn=Object(T.c)(y||(y=Object(M.a)(["\n    0% {margin-right: 210px;}\n    100% {margin-right: 0;}\n"]))),on=T.b.li(w||(w=Object(M.a)(["\n  display: flex;\n  justify-content: space-around;\n  border: 1px solid tomato;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: tomato;\n  color: white;\n  font-weight: bold;\n  animation: "," 1s;\n"])),cn),an=function(n){var e=n.job,t=n.username,r=n.age;return Object(P.jsxs)(on,{children:[Object(P.jsx)("p",{children:t}),Object(P.jsx)("p",{children:e}),Object(P.jsx)("p",{children:"Age: ".concat(r)})]})},bn=Object(T.b)(H)(k||(k=Object(M.a)(["\n  text-align: center;\n"]))),sn=function(n){var e=n.dataListFromForm;return Object(P.jsx)(bn,{children:e.map((function(n){return Object(P.jsx)(an,{job:n.job,username:n.username,age:n.age},n.id)}))})},dn=T.b.div(C||(C=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var jn=function(){var n=Object(F.useState)([]),e=Object(D.a)(n,2),t=e[0],r=e[1];return Object(P.jsxs)(F.Fragment,{children:[Object(P.jsx)(J,{}),Object(P.jsxs)(dn,{children:[Object(P.jsx)(rn,{onAddDataToList:function(n){r((function(e){return[n].concat(Object(L.a)(e))}))}}),0!==t.length&&Object(P.jsx)(sn,{dataListFromForm:t})]})]})},ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};B.a.render(Object(P.jsx)(S.a.StrictMode,{children:Object(P.jsx)(jn,{})}),document.getElementById("root")),ln()}},[[23,1,2]]]);
//# sourceMappingURL=main.96709fcf.chunk.js.map