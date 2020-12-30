window.wp=window.wp||{},window.wp.plugins=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=411)}({0:function(e,t){e.exports=window.wp.element},13:function(e,t){e.exports=window.wp.compose},19:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},2:function(e,t){e.exports=window.lodash},20:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},23:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},24:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},26:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(40),o=n(19);function u(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?Object(o.a)(e):t}},32:function(e,t){e.exports=window.wp.hooks},370:function(e,t,n){"use strict";var r=n(0),o=n(7),u=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(o.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}));t.a=u},40:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},411:function(e,t,n){"use strict";n.r(t),n.d(t,"PluginArea",(function(){return E})),n.d(t,"withPluginContext",(function(){return O})),n.d(t,"registerPlugin",(function(){return P})),n.d(t,"unregisterPlugin",(function(){return x})),n.d(t,"getPlugin",(function(){return S})),n.d(t,"getPlugins",(function(){return _}));var r=n(23),o=n(24),u=n(19),i=n(26),c=n(27),l=n(20),s=n(0),a=n(2),f=n(32),p=n(8),g=n(13),b=Object(s.createContext)({name:null,icon:null}),d=b.Consumer,y=b.Provider,O=function(e){return Object(g.createHigherOrderComponent)((function(t){return function(n){return Object(s.createElement)(d,null,(function(r){return Object(s.createElement)(t,Object(p.a)({},n,e(r,n)))}))}}),"withPluginContext")},j=n(6),v=n(40),m=n(370);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h={};function P(e,t){return"object"!==Object(v.a)(t)?(console.error("No settings object provided!"),null):"string"!=typeof e?(console.error("Plugin names must be strings."),null):/^[a-z][a-z0-9-]*$/.test(e)?(h[e]&&console.error('Plugin "'.concat(e,'" is already registered.')),t=Object(f.applyFilters)("plugins.registerPlugin",t,e),Object(a.isFunction)(t.render)?(h[e]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:e,icon:m.a},t),Object(f.doAction)("plugins.pluginRegistered",t,e),t):(console.error('The "render" property must be specified and must be a valid function.'),null)):(console.error('Plugin names must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".'),null)}function x(e){if(h[e]){var t=h[e];return delete h[e],Object(f.doAction)("plugins.pluginUnregistered",t,e),t}console.error('Plugin "'+e+'" is not registered.')}function S(e){return h[e]}function _(){return Object.values(h)}var E=function(e){Object(i.a)(g,e);var t,n,p=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=Object(l.a)(t);if(n){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)});function g(){var e;return Object(r.a)(this,g),(e=p.apply(this,arguments)).setPlugins=e.setPlugins.bind(Object(u.a)(e)),e.state=e.getCurrentPluginsState(),e}return Object(o.a)(g,[{key:"getCurrentPluginsState",value:function(){return{plugins:Object(a.map)(_(),(function(e){var t=e.icon,n=e.name;return{Plugin:e.render,context:{name:n,icon:t}}}))}}},{key:"componentDidMount",value:function(){Object(f.addAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered",this.setPlugins),Object(f.addAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered",this.setPlugins)}},{key:"componentWillUnmount",value:function(){Object(f.removeAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered"),Object(f.removeAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered")}},{key:"setPlugins",value:function(){this.setState(this.getCurrentPluginsState)}},{key:"render",value:function(){return Object(s.createElement)("div",{style:{display:"none"}},Object(a.map)(this.state.plugins,(function(e){var t=e.context,n=e.Plugin;return Object(s.createElement)(y,{key:t.name,value:t},Object(s.createElement)(n,null))})))}}]),g}(s.Component)},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},7:function(e,t){e.exports=window.wp.primitives},8:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}});