!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var o,i,a,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,l=setTimeout(h,t),s?y(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=a}function h(){var e=p();if(O(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return m?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,d&&o?y(e):(o=i=void 0,u)}function D(){var e=p(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return S(f);if(m)return l=setTimeout(h,t),y(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),D.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},D.flush=function(){return void 0===l?u:w(p())},D}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),O={email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]')};S.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(w))}),500)),S.addEventListener("submit",(function(e){e.preventDefault,localStorage.removeItem(h)}));var h="feedback-form-state",w={};localeFormData=JSON.parse(localStorage.getItem(h)),localeFormData&&(console.log(localeFormData),localeFormData.email&&(O.email.value=localeFormData.email),localeFormData.message&&(O.message.value=localeFormData.message))}();
//# sourceMappingURL=03-feedback.13fc5539.js.map
