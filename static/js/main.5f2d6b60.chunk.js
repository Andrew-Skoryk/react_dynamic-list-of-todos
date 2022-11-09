(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(7),l=c(2),i=c(4),o=c.n(i),d=c(1),r=(c(13),c(14),c(5)),j=c.n(r),u=c(0),b=Object(d.memo)((function(e){var t=e.todos,c=e.selectedTodoId,s=e.handleSelectTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=t===c;return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:n&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()({"far fa-eye-slash":l,"far fa-eye":!l})})})})})]},t)}))})]})})),h=function(e,t){var c;return function(s){clearTimeout(c),c=setTimeout(e,t,s)}},O=Object(d.memo)((function(e){var t=e.query,c=e.selectedOption,s=e.setSelectedOption,a=e.setQuery,n=Object(d.useState)(t),i=Object(l.a)(n,2),o=i[0],r=i[1],j=Object(d.useCallback)((function(e){var t=e.target.value;r(t),h(a,1e3)(t)}),[r,h]),b=Object(d.useCallback)((function(e){s(e.target.value)}),[c]),O=Object(d.useCallback)((function(){r(""),a("")}),[r,a]);return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:b,children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:o,onChange:j}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:O})})]})]})}));function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var x,f=function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.selectedTodo,c=e.handleUnselectTodo,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],o=Object(d.useState)(!1),r=Object(l.a)(o,2),j=r[0],b=r[1],h=t.id,O=t.title,x=t.completed,p=t.userId;return Object(d.useEffect)((function(){(function(e){return m("/users/".concat(e))})(p).then((function(e){i(e),b(!0)}))}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),j?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(h)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:O}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[x?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(u.jsx)(f,{})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(x||(x={}));var v=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(0),i=Object(l.a)(a,2),r=i[0],j=i[1],h=Object(d.useState)(!1),v=Object(l.a)(h,2),N=v[0],y=v[1],g=Object(d.useState)(""),k=Object(l.a)(g,2),C=k[0],S=k[1],T=Object(d.useState)(x.All),w=Object(l.a)(T,2),A=w[0],I=w[1],_=Object(d.useCallback)((function(e){j(e)}),[]),E=Object(d.useCallback)((function(){j(0)}),[]),L=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/todos");case 2:t=e.sent,s(t),y(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){L()}),[]);var B=Object(d.useMemo)((function(){return c.filter((function(e){var t=e.title,c=C.toLowerCase();return t.toLowerCase().includes(c)})).filter((function(e){switch(A){case x.Active:return!e.completed;case x.Completed:return e.completed;default:return e}}))}),[A,C,c]),q=c.find((function(e){return e.id===r}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(O,{query:C,selectedOption:A,setSelectedOption:I,setQuery:S})}),Object(u.jsx)("div",{className:"block",children:N?Object(u.jsx)(b,{todos:B,selectedTodoId:r,handleSelectTodo:_}):Object(u.jsx)(f,{})})]})})}),q&&Object(u.jsx)(p,{selectedTodo:q,handleUnselectTodo:E})]})};a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5f2d6b60.chunk.js.map