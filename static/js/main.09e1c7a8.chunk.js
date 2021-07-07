(this["webpackJsonpadd-user-app"]=this["webpackJsonpadd-user-app"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var c,r,i,o,a,b,s,d,j,l,u,O,m,h,g,x,f,p,v,y,w,k,C,F,S=t(1),A=t.n(S),B=t(11),L=t.n(B),D=t(15),M=t(4),T=t(2),J=t(3),P=Object(J.a)(c||(c=Object(T.a)(['\n* {\n  font-family: "Open Sans", sans-serif;\n}\nbody {\n    /* text-align: center; */\n    margin: 0;\n    padding: 0;\n    background: #41403f;\n  }\n']))),E=t(0),H=J.b.div(r||(r=Object(T.a)(["\n  margin-top: 2rem;\n  padding: 1rem;\n  width: 80%;\n  max-width: 35rem;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n"]))),I=function(n){var e=n.children;return Object(E.jsx)(H,{children:e})},N=J.b.button(i||(i=Object(T.a)(["\n  font-weight: bold;\n  color: white;\n  width: 5rem;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  background-color: tomato;\n  cursor: pointer;\n  transition: background-color 1s;\n  &:hover {\n    background-color: #d6452c;\n  }\n  &:focus {\n    background-color: #d6452c;\n  }\n"]))),U=function(n){var e=n.children,t=n.className,c=n.type,r=n.onClick;return Object(E.jsx)(N,{className:t,type:c||"button",onClick:r,children:e})},q=Object(J.c)(o||(o=Object(T.a)(["\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n"]))),z=Object(J.c)(a||(a=Object(T.a)(["\n    0% {top: -300px}\n    100% {top: 10%;}\n"]))),G=J.b.div(b||(b=Object(T.a)(["\n  animation: "," 0.5s;\n"])),q),K=J.b.div(s||(s=Object(T.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n"]))),Q=J.b.div(d||(d=Object(T.a)(["\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  overflow: hidden;\n  width: 80%;\n  max-width: 25rem;\n  background: white;\n  border-radius: 1rem;\n  animation: "," 0.5s;\n"])),z),R=J.b.header(j||(j=Object(T.a)(["\n  text-align: center;\n  background-color: #ff63479b;\n  padding: 0.1rem;\n"]))),V=J.b.h2(l||(l=Object(T.a)(["\n  margin: 0.5rem;\n  color: red;\n"]))),W=J.b.section(u||(u=Object(T.a)(["\n  text-align: center;\n  color: red;\n  font-weight: bold;\n"]))),X=J.b.footer(O||(O=Object(T.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px;\n"]))),Y=function(n){var e=n.title,t=n.msg,c=n.onHideModalByButton;return Object(E.jsxs)(G,{children:[Object(E.jsx)(K,{onClick:c}),Object(E.jsxs)(Q,{children:[Object(E.jsx)(R,{children:Object(E.jsx)(V,{children:e})}),Object(E.jsx)(W,{children:Object(E.jsx)("p",{children:t})}),Object(E.jsx)(X,{children:Object(E.jsx)(U,{onClick:c,children:"Close"})})]})]})},Z=Object(J.c)(m||(m=Object(T.a)(["\n    0% {margin-left: 80rem;}\n    100% {margin-left: 0;}\n"]))),$=J.b.div(h||(h=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  animation: "," 1s;\n"])),Z),_=J.b.form(g||(g=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),nn=J.b.label(x||(x=Object(T.a)(["\n  font-weight: bold;\n  margin: 0.5rem;\n"]))),en=J.b.input(f||(f=Object(T.a)(["\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid #00000026;\n  &:focus {\n    border: 1px solid tomato;\n  }\n"]))),tn=Object(J.b)(U)(p||(p=Object(T.a)(["\n  width: 15rem;\n"]))),cn=J.b.footer(v||(v=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),rn=Object(J.b)(U)(y||(y=Object(T.a)([""]))),on=function(n){var e=n.onAddDataToList,t=Object(S.useState)(""),c=Object(M.a)(t,2),r=c[0],i=c[1],o=Object(S.useState)(""),a=Object(M.a)(o,2),b=a[0],s=a[1],d=Object(S.useState)(""),j=Object(M.a)(d,2),l=j[0],u=j[1],O=Object(S.useState)(),m=Object(M.a)(O,2),h=m[0],g=m[1],x=Object(S.useState)(!1),f=Object(M.a)(x,2),p=f[0],v=f[1],y=[i,s,u];return!1===p?Object(E.jsx)(I,{children:Object(E.jsx)($,{children:Object(E.jsx)(tn,{type:"button",onClick:function(){return v(!0)},children:"Add new user"})})}):Object(E.jsxs)($,{children:[h&&Object(E.jsx)(Y,{title:h.title,msg:h.msg,onHideModalByButton:function(){return g(null)}}),Object(E.jsx)(I,{children:Object(E.jsxs)(_,{action:"",onSubmit:function(n){if(n.preventDefault(),0!==r.trim().length&&0!==b.trim().length&&0!==l.trim().length)if(+b<18)g({title:"Age is incorrect!",msg:"Age must be higher (min. 18)"});else{var t={id:Math.random().toString(),username:r,job:l,age:b};e(t),y.forEach((function(n){n("")}))}else g({title:"Form has empty fields!",msg:"Please complete all fields"})},children:[Object(E.jsx)(nn,{htmlFor:"username",children:"Username"}),Object(E.jsx)(en,{id:"username",type:"text",value:r,onChange:function(n){return i(n.target.value)}}),Object(E.jsx)(nn,{htmlFor:"name",children:"Age ( years )"}),Object(E.jsx)(en,{id:"name",type:"number",value:b,onChange:function(n){return s(n.target.value)}}),Object(E.jsx)(nn,{htmlFor:"job",children:"Job"}),Object(E.jsx)(en,{id:"job",type:"text",value:l,onChange:function(n){return u(n.target.value)}}),Object(E.jsxs)(cn,{children:[Object(E.jsx)(U,{type:"submit",children:"Add user"}),Object(E.jsx)(rn,{type:"button",onClick:function(){return v(!1)},children:"Close"})]})]})})]})},an=Object(J.c)(w||(w=Object(T.a)(["\n    0% {margin-right: 210px;}\n    100% {margin-right: 0;}\n"]))),bn=J.b.li(k||(k=Object(T.a)(["\n  display: flex;\n  justify-content: space-around;\n  border: 1px solid tomato;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: tomato;\n  color: white;\n  font-weight: bold;\n  animation: "," 1s;\n"])),an),sn=function(n){var e=n.job,t=n.username,c=n.age;return Object(E.jsxs)(bn,{children:[Object(E.jsx)("p",{children:t}),Object(E.jsx)("p",{children:e}),Object(E.jsx)("p",{children:"Age: ".concat(c)})]})},dn=Object(J.b)(I)(C||(C=Object(T.a)(["\n  text-align: center;\n"]))),jn=function(n){var e=n.dataListFromForm;return Object(E.jsx)(dn,{children:e.map((function(n){return Object(E.jsx)(sn,{job:n.job,username:n.username,age:n.age},n.id)}))})},ln=J.b.div(F||(F=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var un=function(){var n=Object(S.useState)([]),e=Object(M.a)(n,2),t=e[0],c=e[1];return Object(E.jsxs)(S.Fragment,{children:[Object(E.jsx)(P,{}),Object(E.jsxs)(ln,{children:[Object(E.jsx)(on,{onAddDataToList:function(n){c((function(e){return[n].concat(Object(D.a)(e))}))}}),0!==t.length&&Object(E.jsx)(jn,{dataListFromForm:t})]})]})},On=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),i(n),o(n)}))};L.a.render(Object(E.jsx)(A.a.StrictMode,{children:Object(E.jsx)(un,{})}),document.getElementById("root")),On()}},[[23,1,2]]]);
//# sourceMappingURL=main.09e1c7a8.chunk.js.map