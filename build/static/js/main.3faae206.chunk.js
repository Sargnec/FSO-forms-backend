(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(14),o=n.n(a),r=n(0),c=n.n(r),u=n(4),l=n(2),i=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return c.a.createElement("li",{className:"note"},e.content,c.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null==e?null:c.a.createElement("div",{className:"error"},e)},f=n(3),s=n.n(f),p=function(){return s.a.get("/api/notes").then((function(t){return t.data}))},d=function(t){return s.a.post("/api/notes",t).then((function(t){return t.data}))},v=function(t,e){return s.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},E=function(){return c.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},c.a.createElement("br",null),c.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2021"))},b=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],o=Object(r.useState)("a new note..."),f=Object(l.a)(o,2),s=f[0],b=f[1],g=Object(r.useState)(!0),h=Object(l.a)(g,2),O=h[0],j=h[1],S=Object(r.useState)(null),k=Object(l.a)(S,2),y=k[0],w=k[1];Object(r.useEffect)((function(){console.log("noteservice"),p().then((function(t){console.log("getAll",t),a(t)}))}),[]);var N=O?n:n.filter((function(t){return!0===t.important}));return c.a.createElement("div",null,c.a.createElement("h1",null,"Notes"),c.a.createElement(m,{message:y}),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),c.a.createElement("ul",null,N.map((function(t){return c.a.createElement(i,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),o=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});v(t,o).then((function(e){a(n.map((function(n){return n.id!==t?n:e})))})).catch((function(o){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),a(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:s,date:(new Date).toISOString(),important:Math.random()>.5};d(e).then((function(t){a(n.concat(t)),b("")}))}},c.a.createElement("input",{value:s,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),c.a.createElement("button",{type:"submit"},"save")),c.a.createElement(E,null))};n(38);o.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3faae206.chunk.js.map