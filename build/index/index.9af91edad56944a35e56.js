!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.$store.commit("setTitle","click me")},methods:{handleClick:function(){this.$store.commit("setTitle","welcome")}}}},function(t,e){},function(t,e,n){"use strict";function r(t,e,n,r,o,u,i,a){var c,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),u&&(s._scopeId="data-v-"+u),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,e){return c.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},o=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"cursor",on:{click:function(t){e.handleClick()}}},[e._v(e._s(e.$store.state.title))])},o=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";n(10);var r,o=n(11),u=(r=o)&&r.__esModule?r:{default:r},i=n(13);var a=new VueRouter(i.routePath),c=new Vuex.Store(i.storeData);new Vue({el:"#index",router:a,store:c,render:function(t){return t(u.default)}})},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(0);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n(12);var i=n(6),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/pages/index/index.vue",e.default=a.exports},function(t,e,n){"use strict";var r=n(2);n.n(r).a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.storeData=e.routePath=void 0;var r,o=n(14);var u={routes:[{path:"/home",name:"home",component:((r=o)&&r.__esModule?r:{default:r}).default},{path:"/",name:"home",redirect:"/home"}]};e.routePath=u,e.storeData={state:{title:""},mutations:{setTitle:function(t,e){t.title=e}}}},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(3);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n(15);var i=n(6),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/pages/index/mods/home/index.vue",e.default=a.exports},function(t,e,n){"use strict";var r=n(5);n.n(r).a}]);