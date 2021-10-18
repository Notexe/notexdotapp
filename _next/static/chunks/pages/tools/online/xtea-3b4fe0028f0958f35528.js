(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[109],{8771:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));var o=r=i(i({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};s(n(7294));var a=s(n(4860));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4860:function(e,t,n){"use strict";var r=n(2553),o=n(2012),i=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,d=(u=n(7294))&&u.__esModule?u:{default:u},f=n(7161),h=n(1083);var p=[],m=[],v=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=d.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!v&&"function"===typeof n.webpack&&!n.suspense){var i=n.webpack();m.push((function(e){var t,n=l(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=n.suspense?function(e,t){return d.default.createElement(n.lazy,s(s({},e),{},{ref:t}))}:function(e,t){o();var i=d.default.useContext(h.LoadableContext),a=f.useSubscription(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return a.preload=function(){return!n.suspense&&o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}(y,e)}function j(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return j(e,t)}))}x.preloadAll=function(){return new Promise((function(e,t){j(p).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return v=!0,t()};j(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var g=x;t.default=g},8832:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});n(7294);var r=n(8142),o=n(5152),i=n(6394),a=n(5893),s=(0,o.default)((function(){return n.e(735).then(n.bind(n,735))}),{loadableGenerated:{webpack:function(){return[735]},modules:["tools/online/xtea.tsx -> ../../../src/XteaImage"]}});function l(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{title:"XTEA Online Tool",description:"An online tool built to encode and decode files that use IOI's modified XTEA algorithm.",pageUrl:"/tools/online/xtea"}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(r.Z,{logo:(0,a.jsx)(s,{}),isMessingWithNext:!0}),(0,a.jsx)("p",{id:"failed-load-notif",children:"You may need to reload the page unless you see the big box below. Sorry about that."}),(0,a.jsxs)("a",{href:"/xtea/prepatched",className:"description",style:{color:"white",cursor:"pointer"},children:["Looking for a version of ",(0,a.jsx)("code",{children:"packagedefinition.txt"})," ","that is already patched? Click here!"]}),(0,a.jsx)("main",{className:"main"})]})]})}},8142:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(6311),o=n(1664),i=n(7294),a=n(2642),s=n(3568),l=n(4347),c=n(5893);function u(e){var t=e.logo,n=e.isMessingWithNext,u=void 0!==n&&n,d=i.useState(null),f=(0,r.Z)(d,2),h=f[0],p=f[1],m=Boolean(h),v=function(e){return p(e.currentTarget)},y=function(){return p(null)};return(0,c.jsx)("header",{className:"header",children:(0,c.jsxs)("span",{className:"header-inner",children:[void 0!==t?t:(0,c.jsx)(o.default,{href:"/",children:"Notex.app"}),(0,c.jsxs)("span",{className:"header-right",children:[(0,c.jsx)("nav",{className:"menu",children:(0,c.jsxs)("ul",{className:"menu-inner",children:[(0,c.jsx)(a.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,c.jsx)(o.default,{href:"/rpkg",children:"RPKG Tool"})}),u?(0,c.jsx)(a.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,c.jsx)("a",{href:"/tools/offline/h6xtea.7z",children:"Offline XTEA Tool"})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":m?"true":void 0,onClick:v,children:"XTEA Tool"}),(0,c.jsxs)(s.Z,{id:"basic-menu",anchorEl:h,open:m,onClose:y,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,c.jsx)(l.Z,{onClick:y,children:(0,c.jsx)("a",{href:"/tools/online/xtea",children:"Online Tool"})}),(0,c.jsx)(l.Z,{onClick:y,children:(0,c.jsx)("a",{href:"/tools/offline/h6xtea.7z",children:"Offline Tool"})})]})]}),(0,c.jsx)(a.Z,{style:{fontSize:"1rem",textTransform:"none"},variant:"text",color:"inherit",children:(0,c.jsx)("a",{href:"https://hitmandb.notex.app",children:"HitmanDB"})})]})}),(0,c.jsx)("a",{href:"https://discord.gg/6UDtuYhZP6",children:(0,c.jsx)("span",{className:"discord-icon",children:(0,c.jsxs)("svg",{className:"discord-icon",width:"100",height:"34",viewBox:"0 0 800 272.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{className:"st0",d:"M142.8 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zM106.3 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z"}),(0,c.jsx)("path",{className:"st0",d:"M191.4 36.9h-134c-11.3 0-20.5 9.2-20.5 20.5v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V57.4c-.1-11.3-9.3-20.5-20.6-20.5zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zM303.8 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2v-29.8c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7v-30.6c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM417.3 113c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V79.7h-22.4v88.8zM728 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H728c17.8.1 34.5-8.8 34.5-29.2v-29.8c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V109c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V109c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10v30.3zM682.4 109c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L665 138.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2v-20.3h13.2c14.1 0 14.1 20.3 0 20.3z"})]})})})]})]})})}},6394:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(7294);var r=n(9008),o=n(5893);function i(e){var t=e.pageUrl,n=e.title,i=e.description,a="".concat(n," - Notex.app");return(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:a}),(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:i}),(0,o.jsx)("meta",{name:"keywords",content:"glacier engine, hitman, tools, resources, modding, mod, rpkg, locr, rtlv, dlge, gfxf, unpack, pack, discord, 007, ioi, io interactive"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@Notex_"}),(0,o.jsx)("meta",{name:"twitter:title",content:a}),(0,o.jsx)("meta",{name:"twitter:description",content:i}),(0,o.jsx)("meta",{name:"twitter:dnt",content:"on"}),(0,o.jsx)("meta",{name:"twitter:url",content:"https://notex.app".concat(t)}),(0,o.jsx)("link",{rel:"author",href:"https://twitter.com/Notex_"}),(0,o.jsx)("link",{rel:"publisher",href:"https://rdil.rocks"}),(0,o.jsx)("link",{rel:"canonical",href:"https://notex.app/".concat(t)}),(0,o.jsx)("meta",{itemProp:"name",content:a})]})}},9696:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/online/xtea",function(){return n(8832)}])},5152:function(e,t,n){e.exports=n(8771)}},function(e){e.O(0,[774,789,888,179],(function(){return t=9696,e(e.s=t);var t}));var t=e.O();_N_E=t}]);