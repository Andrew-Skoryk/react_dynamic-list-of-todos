(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(4)),d=c.n(i),o=c(0),r=Object(l.memo)((function(e){var t=e.todos,c=e.selectedTodoId,s=e.handleSelectTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=t===c;return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:t}),Object(o.jsx)("td",{className:"is-vcentered",children:n&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()({"far fa-eye-slash":l,"far fa-eye":!l})})})})})]},t)}))})]})})),j=function(e,t){var c;return function(s){clearTimeout(c),c=setTimeout(e,t,s)}},b=Object(l.memo)((function(e){var t=e.query,c=e.selectedOption,s=e.setSelectedOption,a=e.setQuery,i=Object(l.useState)(t),d=Object(n.a)(i,2),r=d[0],b=d[1],u=Object(l.useCallback)((function(e){var t=e.target.value;b(t),j(a,1e3)(t)}),[b,j]),h=Object(l.useCallback)((function(e){s(e.target.value)}),[c]),O=Object(l.useCallback)((function(){b(""),a("")}),[b,a]);return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:h,children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:r,onChange:u}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:O})})]})]})}));function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h,O=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.selectedTodo,c=e.handleUnselectTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],d=a[1],r=Object(l.useState)(!1),j=Object(n.a)(r,2),b=j[0],h=j[1],m=t.id,x=t.title,f=t.completed,p=t.userId;return Object(l.useEffect)((function(){(function(e){return u("/users/".concat(e))})(p).then((function(e){d(e),h(!0)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),b?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(m)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:x}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[f?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(o.jsx)(O,{})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(h||(h={}));var x=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),i=Object(n.a)(a,2),d=i[0],j=i[1],x=Object(l.useState)(!1),f=Object(n.a)(x,2),p=f[0],v=f[1],N=Object(l.useState)(""),y=Object(n.a)(N,2),g=y[0],k=y[1],C=Object(l.useState)(h.All),S=Object(n.a)(C,2),T=S[0],w=S[1],A=Object(l.useCallback)((function(e){j(e)}),[]),I=Object(l.useCallback)((function(){j(0)}),[]);Object(l.useEffect)((function(){u("/todos").then((function(e){s(e),v(!0)}))}),[]);var _=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title,c=g.toLowerCase();return t.toLowerCase().includes(c)}))}),[g,c]),E=Object(l.useMemo)((function(){return _.filter((function(e){switch(T){case h.Active:return!e.completed;case h.Completed:return e.completed;default:return e}}))}),[T,_]),L=c.find((function(e){return e.id===d}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(b,{query:g,selectedOption:T,setSelectedOption:w,setQuery:k})}),Object(o.jsx)("div",{className:"block",children:p?Object(o.jsx)(r,{todos:E,selectedTodoId:d,handleSelectTodo:A}):Object(o.jsx)(O,{})})]})})}),L&&Object(o.jsx)(m,{selectedTodo:L,handleUnselectTodo:I})]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1b787153.chunk.js.map