!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="dist/",o(o.s=1)}([function(t,e,n){var r,o,a;function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(){"use strict";function o(t,e){var n,r=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)}function d(t,e){return t.getAttribute("data-"+e)}function a(t,e,n){var r="data-"+e;null!==n?t.setAttribute(r,n):t.removeAttribute(r)}function i(t){return"true"===d(t,"was-processed")}function c(t,e){return a(t,"ll-timeout",e)}function s(t){return d(t,"ll-timeout")}function u(t,e){t&&t(e)}function f(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&u(t._settings.callback_finish)}function r(t){for(var e,n=[],r=0;e=t.children[r];r+=1)"SOURCE"===e.tagName&&n.push(e);return n}function n(t,e,n){n&&t.setAttribute(e,n)}function l(t,e){n(t,"sizes",d(t,e.data_sizes)),n(t,"srcset",d(t,e.data_srcset)),n(t,"src",d(t,e.data_src))}function _(t,e){I?t.classList.add(e):t.className+=(t.className?" ":"")+e}function b(t,e,n){t.addEventListener(e,n)}function v(t,e,n){t.removeEventListener(e,n)}function g(t,e,n){v(t,"load",e),v(t,"loadeddata",e),v(t,"error",n)}function m(t,e,n){var r,o,a=n._settings,i=e?a.class_loaded:a.class_error,l=e?a.callback_loaded:a.callback_error,c=t.target;r=c,o=a.class_loading,I?r.classList.remove(o):r.className=r.className.replace(new RegExp("(^|\\s+)"+o+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""),_(c,i),u(l,c),f(n,-1)}function p(t,e){var n=e._observer;L(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)}function h(t){var e=s(t);e&&(clearTimeout(e),c(t,null))}function y(l){return!!w&&(l._observer=new IntersectionObserver(function(t){t.forEach(function(t){return(i=t).isIntersecting||0<i.intersectionRatio?(r=t.target,a=(o=l)._settings,u(a.callback_enter,r),void(a.load_delay?function(t,e){var n=e._settings.load_delay,r=s(t);r||(r=setTimeout(function(){p(t,e),h(t)},n),c(t,r))}(r,o):p(r,o))):(e=t.target,n=l._settings,u(n.callback_exit,e),void(n.load_delay&&h(e)));var e,n,r,o,a,i})},{root:(t=l._settings).container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),!0);var t}function E(t,e){return(r=t||(n=e).container.querySelectorAll(n.elements_selector),Array.prototype.slice.call(r)).filter(function(t){return!i(t)});var n,r}function t(t,e){this._settings=M({},O,t),this._loadingCount=0,y(this),this.update(e)}var e="undefined"!=typeof window,k=e&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),w=e&&"IntersectionObserver"in window,I=e&&"classList"in document.createElement("p"),O={elements_selector:"img",container:k||e?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},x={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&r(n).forEach(function(t){l(t,e)}),l(t,e)},IFRAME:function(t,e){n(t,"src",d(t,e.data_src))},VIDEO:function(t,e){r(t).forEach(function(t){n(t,"src",d(t,e.data_src))}),n(t,"src",d(t,e.data_src)),t.load()}},A=["IMG","IFRAME","VIDEO"],L=function(t,e,n){var r=e._settings;!n&&i(t)||(-1<A.indexOf(t.tagName)&&(function(n,r){function o(t){m(t,!0,r),g(n,o,i)}var t,e,a,i=function t(e){m(e,!1,r),g(n,o,t)};a=i,b(t=n,"load",e=o),b(t,"loadeddata",e),b(t,"error",a)}(t,e),_(t,r.class_loading)),function(t,e){var n,r,o,a,i,l,c=e._settings,s=t.tagName,u=x[s];if(u)return u(t,c),f(e,1),e._elements=(n=e._elements,r=t,n.filter(function(t){return t!==r}));i=d(o=t,(a=c).data_src),l=d(o,a.data_bg),i&&(o.style.backgroundImage='url("'.concat(i,'")')),l&&(o.style.backgroundImage=l)}(t,e),a(t,"was-processed","true"),u(r.callback_reveal,t),u(r.callback_set,t))},S=["IMG","IFRAME"];return t.prototype={update:function(t){var e,n=this,r=this._settings;this._elements=E(t,r),!k&&this._observer?(r.use_native&&"loading"in HTMLImageElement.prototype&&((e=this)._elements.forEach(function(t){-1!==S.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),L(t,e))}),this._elements=E(t,r)),this._elements.forEach(function(t){n._observer.observe(t)})):this.loadAll()},destroy:function(){var e=this;this._observer&&(this._elements.forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){L(t,this,e)},loadAll:function(){var e=this;this._elements.forEach(function(t){p(t,e)})}},e&&function(t,e){if(e)if(e.length)for(var n,r=0;n=e[r];r+=1)o(t,n);else o(t,e)}(t,window.lazyLoadOptions),t},"object"===i(e)&&void 0!==t?t.exports=a():void 0===(o="function"==typeof(r=a)?r.call(e,n,e,t):r)||(t.exports=o)},function(t,e,n){"use strict";n.r(e);n(2),n(3);var r=n(0);function o(t,e){console.log(t,e.getAttribute("data-src"))}new(n.n(r).a)({elements_selector:".photo img",threshold:0,callback_enter:function(t){o("🔑 ENTERED",t)},callback_exit:function(t){o("🚪 EXITED",t)},callback_reveal:function(t){o("👁️ REVEALED",t)},callback_loaded:function(t){o("👍 LOADED",t)},callback_error:function(t){o("💀 ERROR",t),t.src="https://via.placeholder.com/440x560/?text=Error+Placeholder"},callback_finish:function(){o("✔️ FINISHED",document.documentElement)}})},function(t,e,n){},function(t,e,n){}]);