(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports={navbar:"styles_navbar__38b7V",white_btn:"styles_white_btn__3LZN9"}},26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},5:function(e,t,a){e.exports={signup_container:"styles_signup_container__16kZq",signup_form_container:"styles_signup_form_container__31d3w",left:"styles_left__A-sbX",right:"styles_right__3xLAv",form_container:"styles_form_container__3cxAi",input:"styles_input__1_J9o",error_msg:"styles_error_msg__onZhY",white_btn:"styles_white_btn__cY_P0",green_btn:"styles_green_btn__1HR_o"}},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(25),l=a.n(s),c=a(7),o=(a(31),a(0)),i=a(15),m=a.n(i),u=function(){return r.a.createElement("div",{className:m.a.main_container},r.a.createElement("nav",{className:m.a.navbar},r.a.createElement("h1",null,"fakebook"),r.a.createElement("button",{className:m.a.white_btn,onClick:function(){localStorage.removeItem("token"),window.location.reload()}},"Logout")))},_=a(9),p=a.n(_),g=a(12),b=a(8),d=a(13),h=a(4),f=a(14),E=a.n(f),v=a(5),w=a.n(v),N=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(h.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(""),i=Object(h.a)(l,2),m=i[0],u=i[1],_=Object(o.g)(),f=function(e){var t=e.currentTarget;s(Object(d.a)({},a,Object(b.a)({},t.name,t.value)))},v=function(){var e=Object(g.a)(p.a.mark(function e(t){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=5,E.a.post("http://localhost:27017/api/users",a);case 5:n=e.sent,r=n.data,_("/login"),console.log(r.message),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<=500&&u(e.t0.response.data.message);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:w.a.signup_container},r.a.createElement("div",{className:w.a.signup_form_container},r.a.createElement("div",{className:w.a.left},r.a.createElement("h1",null,"Welcome Back"),r.a.createElement(c.b,{to:"/login"},r.a.createElement("button",{type:"button",className:w.a.white_btn},"Sign in"))),r.a.createElement("div",{className:w.a.right},r.a.createElement("form",{className:w.a.form_container,onSubmit:v},r.a.createElement("h1",null,"Create Account"),r.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstName",onChange:f,value:a.firstName,required:!0,className:w.a.input}),r.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastName",onChange:f,value:a.lastName,required:!0,className:w.a.input}),r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",onChange:f,value:a.email,required:!0,className:w.a.input}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",onChange:f,value:a.password,required:!0,className:w.a.input}),m&&r.a.createElement("div",{className:w.a.error_msg},m),r.a.createElement("button",{type:"submit",className:w.a.green_btn},"Sign Up")))))},y=a(6),x=a.n(y),j=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(h.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(""),o=Object(h.a)(l,2),i=o[0],m=o[1],u=function(e){var t=e.currentTarget;s(Object(d.a)({},a,Object(b.a)({},t.name,t.value)))},_=function(){var e=Object(g.a)(p.a.mark(function e(t){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=5,E.a.post("http://localhost:27017/api/auth",a);case 5:n=e.sent,r=n.data,localStorage.setItem("token",r.data),window.location="/",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response&&e.t0.response.status>=400&&e.t0.response.status<=500&&m(e.t0.response.data.message);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:x.a.login_container},r.a.createElement("div",{className:x.a.login_form_container},r.a.createElement("div",{className:x.a.left},r.a.createElement("form",{className:x.a.form_container,onSubmit:_},r.a.createElement("h1",null,"Login to Your Account"),r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",onChange:u,value:a.email,required:!0,className:x.a.input}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",onChange:u,value:a.password,required:!0,className:x.a.input}),i&&r.a.createElement("div",{className:x.a.error_msg},i),r.a.createElement("button",{type:"submit",className:x.a.green_btn},"Sign In"))),r.a.createElement("div",{className:x.a.right},r.a.createElement("h1",null,"New Here ?"),r.a.createElement(c.b,{to:"/signup"},r.a.createElement("button",{type:"button",className:x.a.white_btn},"Sign Up")))))};var O=function(){var e=localStorage.getItem("token");return r.a.createElement(o.d,null,e&&r.a.createElement(o.b,{path:"/",exact:!0,element:r.a.createElement(u,null)}),r.a.createElement(o.b,{path:"/signup",exact:!0,element:r.a.createElement(N,null)}),r.a.createElement(o.b,{path:"/login",exact:!0,element:r.a.createElement(j,null)}),r.a.createElement(o.b,{path:"/",element:r.a.createElement(o.a,{replace:!0,to:"/login"})}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(O,null))),document.getElementById("root"))},6:function(e,t,a){e.exports={login_container:"styles_login_container__1EBWe",login_form_container:"styles_login_form_container__35IJY",left:"styles_left__3nAKR",form_container:"styles_form_container__3UhVV",input:"styles_input__2QQrb",error_msg:"styles_error_msg__LASi4",right:"styles_right__33dPJ",white_btn:"styles_white_btn__2aFgR",green_btn:"styles_green_btn__1QvAb"}}},[[26,2,1]]]);
//# sourceMappingURL=main.0e4992f2.chunk.js.map