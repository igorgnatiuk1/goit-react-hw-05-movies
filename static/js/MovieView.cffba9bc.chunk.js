(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{50:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},51:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"f",(function(){return f})),r.d(e,"b",(function(){return p})),r.d(e,"c",(function(){return d})),r.d(e,"e",(function(){return v})),r.d(e,"d",(function(){return y}));var n=r(52),o=r.n(n);function i(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){i(c,n,o,a,u,"next",t)}function u(t){i(c,n,o,a,u,"throw",t)}a(void 0)}))}}var a="https://api.themoviedb.org/3/",u="ab82b7774892201817b192d3a704ac1b",s="https://image.tmdb.org/t/p/w500";function l(){return h.apply(this,arguments)}function h(){return(h=c(o.a.mark((function t(){var e,r,n,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(e,r);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return l("".concat(a,"trending/movie/day?api_key=").concat(u))}function p(t){return l("".concat(a,"movie/").concat(t,"?api_key=").concat(u))}function d(t){return l("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(u))}function v(t){return l("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(u))}function y(t){return l("".concat(a,"search/movie?api_key=").concat(u,"&query=").concat(t))}},52:function(t,e,r){t.exports=r(53)},53:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new S(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=L(c,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function b(){}var g={};u(g,i,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(N([])));w&&w!==r&&n.call(w,i)&&(g=w);var x=b.prototype=y.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,c,a){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=b,u(x,"constructor",b),u(b,"constructor",m),m.displayName=u(b,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(x),u(x,a,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},56:function(t,e,r){t.exports={img:"MovieView_img__1Fm4S",card:"MovieView_card__nxzVB"}},63:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return p}));var n=r(50),o=r(0),i=r(3),c=r(9),a=r(51),u=r(56),s=r.n(u),l=r(1),h=Object(o.lazy)((function(){return r.e(2).then(r.bind(null,61))})),f=Object(o.lazy)((function(){return r.e(3).then(r.bind(null,59))}));function p(){var t,e,r=Object(i.f)(),u=Object(i.g)(),p=Object(i.i)(),d=p.url,v=p.path,y=Object(i.h)().movieId,m=Object(o.useState)(null),b=Object(n.a)(m,2),g=b[0],j=b[1];Object(o.useEffect)((function(){Object(a.b)(y).then((function(t){return j(t)}))}),[y]);return Object(l.jsxs)(l.Fragment,{children:[g&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"submit",onClick:function(){var t,e;r.push(null!==(t=null===u||void 0===u||null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies")},children:"\u2190 \u041d\u0430\u0437\u0430\u0434"}),Object(l.jsxs)("div",{className:s.a.card,children:[Object(l.jsx)("img",{className:s.a.img,src:"".concat(a.a).concat(g.poster_path),alt:g.original_title}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:g.original_title}),Object(l.jsxs)("p",{children:["User score: ",g.vote_average]}),Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsx)("p",{children:g.overview}),Object(l.jsx)("h4",{children:"Genres"}),g.genres&&g.genres.map((function(t){return Object(l.jsxs)("span",{children:[t.name," "]},t.id)}))]})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"}),Object(l.jsx)(c.b,{to:{pathname:"".concat(d,"/cast"),state:{from:null===u||void 0===u||null===(t=u.state)||void 0===t?void 0:t.from}},exact:"true",children:"\u0410\u043a\u0442\u043e\u0440\u0438"}),Object(l.jsx)("br",{}),Object(l.jsx)(c.b,{to:{pathname:"".concat(d,"/reviews"),state:{from:null===u||void 0===u||null===(e=u.state)||void 0===e?void 0:e.from}},exact:"true",children:"\u041f\u0440\u043e \u0444\u0456\u043b\u044c\u043c"}),Object(l.jsx)(o.Suspense,{fallback:Object(l.jsx)("h1",{children:"Loading..."}),children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"".concat(v,"/cast"),children:Object(l.jsx)(h,{movieId:y})}),Object(l.jsx)(i.a,{path:"".concat(v,"/reviews"),children:Object(l.jsx)(f,{movieId:y})})]})})]})}}}]);
//# sourceMappingURL=MovieView.cffba9bc.chunk.js.map