/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,i=e.props,a=r(),o=a.default;void 0===o&&(o=[]);var s=a.placeholder;return n._isMounted?o:(n.$once("hook:mounted",function(){n.$forceUpdate()}),i.placeholderTag&&(i.placeholder||s)?t(i.placeholderTag,{class:["no-ssr-placeholder"]},i.placeholder||s):o.length>0?o.map(function(){return t(!1)}):t(!1))}};t.exports=r},66:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},68:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s={id:t+":"+i,css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return m});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},f=null,h="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t,e,n,i){l=n,f=i||{};var o=r(t,e);return v(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i];(c=a[s.id]).refs--,n.push(c)}e?v(o=r(t,e)):o=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete a[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=a[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(d(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(d(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:o}}}}function g(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function d(t){var e,n,r=document.querySelector("style["+h+'~="'+t.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(p){var i=c++;r=s||(s=g()),e=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0)}else r=g(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(h,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var _,y=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function b(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}},72:function(t,e,n){"use strict";function r(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function i(t){return null!==t&&"object"==typeof t}var a=Object.prototype.toString,o="[object Object]";function s(t){return a.call(t)===o}function c(t){return null==t}function l(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?i(t[0])||Array.isArray(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(i(t[1])||Array.isArray(t[1]))&&(r=t[1])),{locale:n,params:r}}function u(t){return JSON.parse(JSON.stringify(t))}var f=Object.prototype.hasOwnProperty;function h(t,e){return f.call(t,e)}function p(t){for(var e=arguments,n=Object(t),r=1;r<arguments.length;r++){var a=e[r];if(null!=a){var o=void 0;for(o in a)h(a,o)&&(i(a[o])?n[o]=p(n[o],a[o]):n[o]=a[o])}}return n}function m(t,e){if(t===e)return!0;var n=i(t),r=i(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var a=Array.isArray(t),o=Array.isArray(e);if(a&&o)return t.length===e.length&&t.every(function(t,n){return m(t,e[n])});if(a||o)return!1;var s=Object.keys(t),c=Object.keys(e);return s.length===c.length&&s.every(function(n){return m(t[n],e[n])})}catch(t){return!1}}var v,g={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n)if(t.i18n instanceof Q){if(t.__i18n)try{var e={};t.__i18n.forEach(function(t){e=p(e,JSON.parse(t))}),Object.keys(e).forEach(function(n){t.i18n.mergeLocaleMessage(n,e[n])})}catch(t){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0}else if(s(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Q&&(t.i18n.root=this.$root,t.i18n.formatter=this.$root.$i18n.formatter,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn,t.i18n.pluralizationRules=this.$root.$i18n.pluralizationRules,t.i18n.preserveDirectiveContent=this.$root.$i18n.preserveDirectiveContent),t.__i18n)try{var n={};t.__i18n.forEach(function(t){n=p(n,JSON.parse(t))}),t.i18n.messages=n}catch(t){0}this._i18n=new Q(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0,(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Q?(this._i18n=this.$root.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0):t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof Q&&(this._i18n=t.parent.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){this._i18n&&(this._subscribing&&(this._i18n.unsubscribeDataChanging(this),delete this._subscribing),this._i18nWatcher&&(this._i18nWatcher(),delete this._i18nWatcher),this._localeWatcher&&(this._localeWatcher(),delete this._localeWatcher),this._i18n=null)}},d={name:"i18n",functional:!0,props:{tag:{type:String,default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.props,r=e.data,i=e.children,a=e.parent.$i18n;if(i=(i||[]).filter(function(t){return t.tag||(t.text=t.text.trim())}),!a)return i;var o=n.path,s=n.locale,c={},l=n.places||{},u=(Array.isArray(l)?l.length:Object.keys(l).length,i.every(function(t){if(t.data&&t.data.attrs){var e=t.data.attrs.place;return void 0!==e&&""!==e}}));return Array.isArray(l)?l.forEach(function(t,e){c[e]=t}):Object.keys(l).forEach(function(t){c[t]=l[t]}),i.forEach(function(t,e){var n=u?""+t.data.attrs.place:""+e;c[n]=t}),t(n.tag,r,a.i(o,s,c))}};function _(t,e,n){$(t,n)&&w(t,e,n)}function y(t,e,n,r){if($(t,n)){var i=n.context.$i18n;(function(t,e){var n=e.context;return t._locale===n.$i18n.locale})(t,n)&&m(e.value,e.oldValue)&&m(t._localeMessage,i.getLocaleMessage(i.locale))||w(t,e,n)}}function b(t,e,n,i){if(n.context){var a=n.context.$i18n||{};e.modifiers.preserve||a.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}else r("Vue instance does not exists in VNode context")}function $(t,e){var n=e.context;return n?!!n.$i18n||(r("VueI18n instance does not exists in Vue instance"),!1):(r("Vue instance doest not exists in VNode context"),!1)}function w(t,e,n){var i,a,o=function(t){var e,n,r,i;"string"==typeof t?e=t:s(t)&&(e=t.path,n=t.locale,r=t.args,i=t.choice);return{path:e,locale:n,args:r,choice:i}}(e.value),c=o.path,l=o.locale,u=o.args,f=o.choice;if(c||l||u)if(c){var h=n.context;t._vt=t.textContent=f?(i=h.$i18n).tc.apply(i,[c,f].concat(F(l,u))):(a=h.$i18n).t.apply(a,[c].concat(F(l,u))),t._locale=h.$i18n.locale,t._localeMessage=h.$i18n.getLocaleMessage(h.$i18n.locale)}else r("`path` is required in v-t directive");else r("value type not supported")}function F(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||s(e))&&n.push(e),n}function k(t){k.installed=!0;(v=t).version&&Number(v.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var i=this.$i18n;return i._tc.apply(i,[t,i.locale,i._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}})(v),v.mixin(g),v.directive("t",{bind:_,update:y,unbind:b}),v.component(d.name,d),v.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}var T=function(){this._caches=Object.create(null)};T.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=function(t){var e=[],n=0,r="";for(;n<t.length;){var i=t[n++];if("{"===i){r&&e.push({type:"text",value:r}),r="";var a="";for(i=t[n++];void 0!==i&&"}"!==i;)a+=i,i=t[n++];var o="}"===i,s=x.test(a)?"list":o&&D.test(a)?"named":"unknown";e.push({value:a,type:s})}else"%"===i?"{"!==t[n]&&(r+=i):r+=i}return r&&e.push({type:"text",value:r}),e}(t),this._caches[t]=n),function(t,e){var n=[],r=0,a=Array.isArray(e)?"list":i(e)?"named":"unknown";if("unknown"===a)return n;for(;r<t.length;){var o=t[r];switch(o.type){case"text":n.push(o.value);break;case"list":n.push(e[parseInt(o.value,10)]);break;case"named":"named"===a&&n.push(e[o.value]);break;case"unknown":0}r++}return n}(n,e)};var x=/^(?:\d)+/,D=/^(?:\w)+/;var C=0,L=1,M=2,O=3,N=0,j=4,A=5,S=6,R=7,I=8,W=[];W[N]={ws:[N],ident:[3,C],"[":[j],eof:[R]},W[1]={ws:[1],".":[2],"[":[j],eof:[R]},W[2]={ws:[2],ident:[3,C],0:[3,C],number:[3,C]},W[3]={ident:[3,C],0:[3,C],number:[3,C],ws:[1,L],".":[2,L],"[":[j,L],eof:[R,L]},W[j]={"'":[A,C],'"':[S,C],"[":[j,M],"]":[1,O],eof:I,else:[j,C]},W[A]={"'":[j,C],eof:I,else:[A,C]},W[S]={'"':[j,C],eof:I,else:[S,C]};var E=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function U(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function V(t){var e,n,r,i=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(r=i,E.test(r)?(n=(e=i).charCodeAt(0))!==e.charCodeAt(e.length-1)||34!==n&&39!==n?e:e.slice(1,-1):"*"+i)}var z=function(){this._cache=Object.create(null)};z.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=function(t){var e,n,r,i,a,o,s,c=[],l=-1,u=N,f=0,h=[];function p(){var e=t[l+1];if(u===A&&"'"===e||u===S&&'"'===e)return l++,r="\\"+e,h[C](),!0}for(h[L]=function(){void 0!==n&&(c.push(n),n=void 0)},h[C]=function(){void 0===n?n=r:n+=r},h[M]=function(){h[C](),f++},h[O]=function(){if(f>0)f--,u=j,h[C]();else{if(f=0,!1===(n=V(n)))return!1;h[L]()}};null!==u;)if("\\"!==(e=t[++l])||!p()){if(i=U(e),(a=(s=W[u])[i]||s.else||I)===I)return;if(u=a[0],(o=h[a[1]])&&(r=void 0===(r=a[2])?e:r,!1===o()))return;if(u===R)return c}}(t))&&(this._cache[t]=e),e||[]},z.prototype.getPathValue=function(t,e){if(!i(t))return null;var n=this.parsePath(e);if(0===n.length)return null;for(var r=n.length,a=t,o=0;o<r;){var s=a[n[o]];if(void 0===s)return null;a=s,o++}return a};var P,J=["style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","localeMatcher","formatMatcher"],B=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,q=/^@(?:\.([a-z]+))?:/,G=/[()]/g,H={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()}},K=new T,Q=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!=typeof window&&window.Vue&&k(window.Vue);var n=t.locale||"en-US",r=t.fallbackLocale||"en-US",i=t.messages||{},a=t.dateTimeFormats||{},o=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||K,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&!!t.silentTranslationWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new z,this._dataListeners=[],this.pluralizationRules=t.pluralizationRules||{},this.preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this._exist=function(t,n){return!(!t||!n)&&!c(e._path.getPathValue(t,n))},this._initVM({locale:n,fallbackLocale:r,messages:i,dateTimeFormats:a,numberFormats:o})},X={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0}};Q.prototype._initVM=function(t){var e=v.config.silent;v.config.silent=!0,this._vm=new v({data:t}),v.config.silent=e},Q.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},Q.prototype.unsubscribeDataChanging=function(t){!function(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)t.splice(n,1)}}(this._dataListeners,t)},Q.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",function(){for(var e=t._dataListeners.length;e--;)v.nextTick(function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()})},{deep:!0})},Q.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",function(e){t.$set(t,"locale",e),t.$forceUpdate()},{immediate:!0})},X.vm.get=function(){return this._vm},X.messages.get=function(){return u(this._getMessages())},X.dateTimeFormats.get=function(){return u(this._getDateTimeFormats())},X.numberFormats.get=function(){return u(this._getNumberFormats())},X.locale.get=function(){return this._vm.locale},X.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},X.fallbackLocale.get=function(){return this._vm.fallbackLocale},X.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},X.missing.get=function(){return this._missing},X.missing.set=function(t){this._missing=t},X.formatter.get=function(){return this._formatter},X.formatter.set=function(t){this._formatter=t},X.silentTranslationWarn.get=function(){return this._silentTranslationWarn},X.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},Q.prototype._getMessages=function(){return this._vm.messages},Q.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},Q.prototype._getNumberFormats=function(){return this._vm.numberFormats},Q.prototype._warnDefault=function(t,e,n,r,i){if(!c(n))return n;if(this._missing){var a=this._missing.apply(null,[t,e,r,i]);if("string"==typeof a)return a}else 0;return e},Q.prototype._isFallbackRoot=function(t){return!t&&!c(this._root)&&this._fallbackRoot},Q.prototype._interpolate=function(t,e,n,r,i,a,o){if(!e)return null;var l,u=this._path.getPathValue(e,n);if(Array.isArray(u)||s(u))return u;if(c(u)){if(!s(e))return null;if("string"!=typeof(l=e[n]))return null}else{if("string"!=typeof u)return null;l=u}return(l.indexOf("@:")>=0||l.indexOf("@.")>=0)&&(l=this._link(t,e,l,r,i,a,o)),this._render(l,i,a,n)},Q.prototype._link=function(t,e,n,r,i,a,o){var s=n,c=s.match(B);for(var l in c)if(c.hasOwnProperty(l)){var u=c[l],f=u.match(q),h=f[0],p=f[1],m=u.replace(h,"").replace(G,"");if(o.includes(m))return s;o.push(m);var v=this._interpolate(t,e,m,r,"raw"===i?"string":i,"raw"===i?void 0:a,o);if(this._isFallbackRoot(v)){if(!this._root)throw Error("unexpected error");var g=this._root.$i18n;v=g._translate(g._getMessages(),g.locale,g.fallbackLocale,m,r,i,a)}v=this._warnDefault(t,m,v,r,Array.isArray(a)?a:[a]),H.hasOwnProperty(p)&&(v=H[p](v)),o.pop(),s=v?s.replace(u,v):s}return s},Q.prototype._render=function(t,e,n,r){var i=this._formatter.interpolate(t,n,r);return i||(i=K.interpolate(t,n,r)),"string"===e?i.join(""):i},Q.prototype._translate=function(t,e,n,r,i,a,o){var s=this._interpolate(e,t[e],r,i,a,o,[r]);return c(s)&&c(s=this._interpolate(n,t[n],r,i,a,o,[r]))?null:s},Q.prototype._t=function(t,e,n,r){for(var i,a=[],o=arguments.length-4;o-- >0;)a[o]=arguments[o+4];if(!t)return"";var s=l.apply(void 0,a),c=s.locale||e,u=this._translate(n,c,this.fallbackLocale,t,r,"string",s.params);if(this._isFallbackRoot(u)){if(!this._root)throw Error("unexpected error");return(i=this._root).$t.apply(i,[t].concat(a))}return this._warnDefault(c,t,u,r,a)},Q.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},Q.prototype._i=function(t,e,n,r,i){var a=this._translate(n,e,this.fallbackLocale,t,r,"raw",i);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,i)}return this._warnDefault(e,t,a,r,[i])},Q.prototype.i=function(t,e,n){return t?("string"!=typeof e&&(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},Q.prototype._tc=function(t,e,n,r,i){for(var a,o=[],s=arguments.length-5;s-- >0;)o[s]=arguments[s+5];if(!t)return"";void 0===i&&(i=1);var c={count:i,n:i},u=l.apply(void 0,o);return u.params=Object.assign(c,u.params),o=null===u.locale?[u.params]:[u.locale,u.params],this.fetchChoice((a=this)._t.apply(a,[t,e,n,r].concat(o)),i)},Q.prototype.fetchChoice=function(t,e){if(!t&&"string"!=typeof t)return null;var n=t.split("|");return n[e=this.getChoiceIndex(e,n.length)]?n[e].trim():t},Q.prototype.getChoiceIndex=function(t,e){var n,r;return this.locale in this.pluralizationRules?this.pluralizationRules[this.locale].apply(this,[t,e]):(n=t,r=e,n=Math.abs(n),2===r?n?n>1?1:0:1:n?Math.min(n,2):0)},Q.prototype.tc=function(t,e){for(var n,r=[],i=arguments.length-2;i-- >0;)r[i]=arguments[i+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},Q.prototype._te=function(t,e,n){for(var r=[],i=arguments.length-3;i-- >0;)r[i]=arguments[i+3];var a=l.apply(void 0,r).locale||e;return this._exist(n[a],t)},Q.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},Q.prototype.getLocaleMessage=function(t){return u(this._vm.messages[t]||{})},Q.prototype.setLocaleMessage=function(t,e){this._vm.$set(this._vm.messages,t,e)},Q.prototype.mergeLocaleMessage=function(t,e){this._vm.$set(this._vm.messages,t,p(this._vm.messages[t]||{},e))},Q.prototype.getDateTimeFormat=function(t){return u(this._vm.dateTimeFormats[t]||{})},Q.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e)},Q.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,p(this._vm.dateTimeFormats[t]||{},e))},Q.prototype._localizeDateTime=function(t,e,n,r,i){var a=e,o=r[a];if((c(o)||c(o[i]))&&(o=r[a=n]),c(o)||c(o[i]))return null;var s=o[i],l=a+"__"+i,u=this._dateTimeFormatters[l];return u||(u=this._dateTimeFormatters[l]=new Intl.DateTimeFormat(a,s)),u.format(t)},Q.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},Q.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,a=null;return 1===e.length?"string"==typeof e[0]?a=e[0]:i(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(a=e[0].key)):2===e.length&&("string"==typeof e[0]&&(a=e[0]),"string"==typeof e[1]&&(r=e[1])),this._d(t,r,a)},Q.prototype.getNumberFormat=function(t){return u(this._vm.numberFormats[t]||{})},Q.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e)},Q.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,p(this._vm.numberFormats[t]||{},e))},Q.prototype._localizeNumber=function(t,e,n,r,i,a){var o=e,s=r[o];if((c(s)||c(s[i]))&&(s=r[o=n]),c(s)||c(s[i]))return null;var l,u=s[i];if(a)l=new Intl.NumberFormat(o,Object.assign({},u,a));else{var f=o+"__"+i;(l=this._numberFormatters[f])||(l=this._numberFormatters[f]=new Intl.NumberFormat(o,u))}return l.format(t)},Q.prototype._n=function(t,e,n,r){if(!Q.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var i=this._localizeNumber(t,e,this.fallbackLocale,this._getNumberFormats(),n,r);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return i||""},Q.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,a=null,o=null;return 1===e.length?"string"==typeof e[0]?a=e[0]:i(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(a=e[0].key),o=Object.keys(e[0]).reduce(function(t,n){var r;return J.includes(n)?Object.assign({},t,((r={})[n]=e[0][n],r)):t},null)):2===e.length&&("string"==typeof e[0]&&(a=e[0]),"string"==typeof e[1]&&(r=e[1])),this._n(t,r,a,o)},Object.defineProperties(Q.prototype,X),Object.defineProperty(Q,"availabilities",{get:function(){if(!P){var t="undefined"!=typeof Intl;P={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return P}}),Q.install=k,Q.version="8.7.0",e.a=Q}}]);