(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n(8),r=n.n(o),l=n(4),s=n(6),i=n(2),d=(n(15),function(e){var t=e.todo,n=e.index,a=e.handletoggle,o=e.handleDelet;return Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){return a(t.id)},children:[n+1,".",t.desc]}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){return o(t.id)},children:"Borrar"})]},t.id)}),u=function(e){var t=e.todos,n=e.handletoggle,a=e.handleDelet;return Object(c.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(c.jsx)(d,{todo:e,index:t,handletoggle:n,handleDelet:a},e.id)}))})},j=n(9),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(j.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e}));default:return e}},h=function(){return JSON.parse(localStorage.getItem("todos"))||[]},p=function(){var e=Object(a.useReducer)(b,[],h),t=Object(l.a)(e,2),n=t[0],o=t[1],r=function(e){var t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],o=n[1];return[c,function(e){var t=e.target;o(Object(i.a)(Object(i.a)({},c),{},Object(s.a)({},t.name,t.value)))},function(){o(e)}]}({description:""}),d=Object(l.a)(r,3),j=d[0].description,p=d[1],g=d[2];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Tareas (",n.length,")"]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-7",children:Object(c.jsx)(u,{todos:n,handleDelet:function(e){o({type:"delete",payload:e})},handletoggle:function(e){o({type:"toggle",payload:e})}})}),Object(c.jsxs)("div",{className:"col-5",children:[Object(c.jsx)("h4",{children:"Agregar Tareas"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{onSubmit:function(e){if(!(j.trim().length<=1)){e.preventDefault();var t={id:(new Date).getTime(),desc:j,done:!1};o({type:"add",payload:t}),g()}},children:[Object(c.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Tarea ...",autoComplete:"off",value:j,onChange:p}),Object(c.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1 btn-block",children:"Agregar"})]})]})]})]})};r.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fc439b27.chunk.js.map