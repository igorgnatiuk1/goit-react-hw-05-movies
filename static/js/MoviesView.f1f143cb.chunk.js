(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{55:function(e,t,n){e.exports={input:"PageHeading_input__2YfQc",button:"PageHeading_button__1Y3lt"}},60:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,"default",(function(){return g}));var i=n(50),o=n(0),u=n(51),s=n(3),b=n(9),l=n(55),j=n.n(l),O=n(1);var f=function(e){var t=e.onSubmit,n=Object(o.useState)(""),c=Object(i.a)(n,2),r=c[0],a=c[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==r.length&&(t(r),a(""))},children:[Object(O.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u041f\u043e\u0448\u0443\u043a \u0444\u0456\u043b\u044c\u043c\u0443",onChange:function(e){a(e.currentTarget.value)},value:r,className:j.a.input}),Object(O.jsx)("button",{className:j.a.button,type:"submit",children:"\u0417\u043d\u0430\u0439\u0442\u0438"})]})})},p=n(54),h=n.n(p);function g(){var e,t=Object(s.i)().url,n=Object(s.g)(),c=Object(s.f)(),r=Object(o.useState)(null),l=Object(i.a)(r,2),j=l[0],p=l[1],g=Object(o.useState)(null!==(e=new URLSearchParams(n.search).get("query"))&&void 0!==e?e:""),m=Object(i.a)(g,2),d=m[0],y=m[1],v=Object(o.useState)(null),x=Object(i.a)(v,2),w=x[0],P=x[1];Object(o.useEffect)((function(){d&&Object(u.d)(d).then((function(e){p(e.results)})).catch((function(e){return P(e.message)}))}),[d]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{onSubmit:function(e){p([]),P(null),y(e),c.push(a(a({},n),{},{search:"query=".concat(e)}))}}),w&&Object(O.jsxs)("p",{style:{color:"red",textAlign:"center",fontSize:"20px"},children:["This is error: ",w]}),Object(O.jsx)("section",{children:j&&Object(O.jsx)("ul",{children:j.map((function(e){return Object(O.jsx)("li",{className:h.a.item,children:Object(O.jsxs)(b.b,{to:{pathname:"".concat(t,"/").concat(e.id),state:{from:n}},children:[Object(O.jsx)("img",{className:h.a.image,src:"".concat(u.a).concat(e.poster_path),alt:e.original_title}),e.title]})},e.id)}))})})]})}}}]);
//# sourceMappingURL=MoviesView.f1f143cb.chunk.js.map