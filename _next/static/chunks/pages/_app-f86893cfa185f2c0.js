(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8484)}])},2422:function(e,t,n){"use strict";n.d(t,{MP:function(){return i},z1:function(){return a}});var r=n(603),o=n(5893),u=n(7294),i={backgroundImage:"url('assets/img/home-bg.jpg')",pageTitle:"Architecture Blog",pageSubTitle:"A Blog for architecture",githubToken:"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",firebaseConfi:{apiKey:"AIzaSyBczw0vICVnVZcfrdYXW1DJTaAvbdhGR0M",authDomain:"blog-hector.firebaseapp.com",projectId:"blog-hector",storageBucket:"blog-hector.appspot.com",messagingSenderId:"782647056381",appId:"1:782647056381:web:c4b836092a06d03fc0ab94",measurementId:"G-5LDTLQ3CPB"}},a=(0,u.createContext)();t.ZP=function(e){var t=(0,r.Z)((0,u.useState)(i),2),n=t[0],c=t[1];return(0,o.jsx)(a.Provider,{value:{pageSettings:n,setPageSettings:c},children:e.children})}},7645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=u.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(e instanceof Promise?o.loader=function(){return e}:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),(o=r({},o,t)).suspense&&(delete o.ssr,delete o.loading),o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"==typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(n,o);delete o.ssr}return n(o)},t.noSSR=i;var r=n(6495).Z,o=n(2648).Z,u=(o(n(7294)),o(n(4588)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(6495).Z,i=(0,n(1598).Z)(n(7294)),a=n(3644),c=[],l=[],s=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var d=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=function(){if(!c){var t=new d(e,o);c={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return c.promise()},r=function(){n();var e=i.default.useContext(a.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach(function(t){e(t)})},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=i.default.lazy(o.loader));var c=null;if(!s){var f=o.webpack?o.webpack():o.modules;f&&l.push(function(e){var t=!0,r=!1,o=void 0;try{for(var u,i=f[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var a=u.value;if(-1!==e.indexOf(a))return n()}}catch(c){r=!0,o=c}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}})}var p=o.suspense?function(e,t){return r(),i.default.createElement(o.lazy,u({},e,{ref:t}))}:function(e,t){r();var n=i.useSyncExternalStore(c.subscribe,c.getCurrentValue,c.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:c.retry}},[]),i.default.useMemo(function(){var t;return n.loading||n.error?i.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:c.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",i.default.forwardRef(p)}(f,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return h(e,t)})}p.preloadAll=function(){return new Promise(function(e,t){h(c).then(e,t)})},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return s=!0,t()};h(l,e).then(n,n)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},8484:function(e,t,n){"use strict";n.r(t);var r=n(6042),o=n(5893),u=n(9008),i=n.n(u),a=n(4298),c=n.n(a),l=n(1018);n(953),n(302),n(279),n(9789),n(3031),n(2937),t.default=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.default,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"_CEGB1blc7j4nO9Axyzlkf-DPCWnRHCJOJXZN2FaKec"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,o.jsx)("meta",{name:"HandheldFriendly",content:"true"}),(0,o.jsx)("link",{rel:"apple-touch-icon",href:"/logo192.png"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://googletagmanager.com",crossOrigin:"true"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://identitytoolkit.googleapis.com",crossOrigin:"true"}),(0,o.jsx)("title",{children:"Blog Hector Abraham Romano"}),(0,o.jsx)(c(),{src:"./scripts/gitpage.js"})]}),(0,o.jsx)(t,(0,r.Z)({},n))]}),(0,o.jsx)(c(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-J121YJLNSF"}),(0,o.jsx)(c(),{src:"/scripts/analytics.js"}),(0,o.jsx)(c(),{src:"/template.js"})]})}},1018:function(e,t,n){"use strict";n.r(t);var r=n(1438),o=n(2951),u=n(8029),i=n(460),a=n(5893),c=n(7294),l=n(5152),s=n.n(l),f=n(2422);n(1535);var d=s()(function(){return n.e(657).then(n.bind(n,9657))},{loadableGenerated:{webpack:function(){return[9657]}},ssr:!1}),p=s()(function(){return n.e(723).then(n.bind(n,723))},{loadableGenerated:{webpack:function(){return[723]}},ssr:!1}),h=function(e){(0,u.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{}),(0,a.jsx)(f.ZP,{children:this.props.children}),(0,a.jsx)(p,{})]})}}]),n}(c.Component);t.default=h},2937:function(){},1535:function(){},279:function(){},302:function(){},953:function(){},3031:function(){},9789:function(){},5152:function(e,t,n){e.exports=n(7645)},9008:function(e,t,n){e.exports=n(3121)},4298:function(e,t,n){e.exports=n(3573)},4111:function(e,t,n){"use strict";function r(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},1438:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},2951:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},460:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return u}});var o=n(4111);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,u,i=r(e);if(t){var a=r(this).constructor;u=Reflect.construct(i,arguments,a)}else u=i.apply(this,arguments);return(n=u)&&("object"==(n&&n.constructor===Symbol?"symbol":typeof n)||"function"==typeof n)?n:(0,o.Z)(this)}}},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},8029:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4924);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){(0,r.Z)(e,t,n[t])})}return e}},603:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);