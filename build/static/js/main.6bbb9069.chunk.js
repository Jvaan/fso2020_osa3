(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),l=t.n(r),c=(t(20),t(4)),u=t(2),i=function(e){var n=e.value,t=e.onChange;return o.a.createElement("div",null,"filter shown with: ",o.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.person,t=e.handleDelete;return o.a.createElement("li",null,n.name," ",n.number,o.a.createElement("button",{onClick:t},"delete"))},m=function(e){var n=e.persons,t=e.handleDelete;return o.a.createElement("ul",null,n.map((function(e){return o.a.createElement(s,{key:e.id,person:e,handleDelete:function(){return t(e)}})})))},d=function(e){var n=e.name,t=e.number,a=e.nameHandler,r=e.numberHandler,l=e.addNameHandler;return o.a.createElement("form",{onSubmit:l},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:n,onChange:a})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:t,onChange:r})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},f=t(3),g=t.n(f),p="/api/persons",h=function(){return g.a.get(p).then((function(e){return e.data}))},b=function(e){return g.a.post(p,e).then((function(e){return e.data}))},v=function(e){return g.a.delete("".concat(p,"/").concat(e.id)).then((function(e){return e.data}))},E=function(e){return g.a.put("".concat(p,"/").concat(e.id),e).then((function(e){return e.data}))},w=function(e){var n=e.notification;return null===n||null===n.message||null===n.className?null:(console.log(n),o.a.createElement("div",{className:n.className},n.message))},j=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),f=s[0],g=s[1],p=Object(a.useState)(""),j=Object(u.a)(p,2),O=j[0],N=j[1],y=Object(a.useState)(""),C=Object(u.a)(y,2),D=C[0],k=C[1],S=Object(a.useState)({message:null,className:null}),H=Object(u.a)(S,2),F=H[0],A=H[1],J=function(e,n){var t={message:e,className:n},a={message:null,className:null};console.log(n,e),A(t),setTimeout((function(){A(a)}),5e3)},L=t.filter((function(e){return e.name.toLowerCase().match(D.toLowerCase())})),x=function(){h().then((function(e){console.log("get all persons ok"),r(e)})).catch((function(e){alert(e+"\nDid you remember to start json server (npm run server)?")}))};return Object(a.useEffect)((function(){console.log("effect"),x()}),[]),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(w,{notification:F}),o.a.createElement(i,{value:D,onChange:function(e){console.log(e.target.value),k(e.target.value)}}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(d,{name:f,number:O,nameHandler:function(e){console.log(e.target.value),g(e.target.value)},numberHandler:function(e){console.log(e.target.value),N(e.target.value)},addNameHandler:function(e){if(console.log("Adding new name ".concat(f)),e.preventDefault(),f)if(O){var n=t.find((function(e){return e.name===f}));if(n){var a=Object(c.a)(Object(c.a)({},n),{},{number:O});window.confirm("".concat(a.name," is already added to phonebook, replace the old number with new one?"))&&E(o=a).then((function(e){console.log("person updated"),r(t.map((function(n){return n.id!==o.id?n:e}))),g(""),N(""),J("Updated ".concat(e.name),"information")})).catch((function(e){404===e.response.status?J("Failed updating person. ".concat(o.name," has already been deleted from the server."),"error"):J("Failed updating person. ".concat(e.message),"error"),x()}))}else{var o;!function(e){b(e).then((function(e){console.log("person added"),r(t.concat(e)),g(""),N(""),J("Added ".concat(e.name),"information")})).catch((function(e){J("Failed adding new person. ".concat(e.message),"error")}))}({name:f,number:O})}}else J("Number is mandatory.","error");else J("Name is mandatory.","error")}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(m,{persons:L,handleDelete:function(e){window.confirm("Really delete ".concat(e.name,"?"))&&(console.log("Deleting ".concat(e.name)),v(e).then((function(n){console.log("person deleted"),x(),J("Deleted ".concat(e.name),"information")})).catch((function(n){404===n.response.status?J("Failed deleting person. ".concat(e.name," has already been deleted from the server."),"error"):J("Failed deleting person. ".concat(n.message),"error"),x()})))}}))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6bbb9069.chunk.js.map