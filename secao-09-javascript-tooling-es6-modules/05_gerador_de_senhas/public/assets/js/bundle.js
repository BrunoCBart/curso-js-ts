(()=>{"use strict";var n={122:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(537),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  margin-bottom: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n\nform input[type=number] {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n  width: 100%;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;;AAGA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,WAAW;AACb;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  margin-bottom: 10px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n\nform input[type=number] {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n  width: 100%;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=t.base?c[0]+t.base:c[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var A=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==A)e[A].references++,e[A].updater(f);else{var d=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:l,updater:d,references:1})}i.push(l)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),u=0;u<a.length;u++){var p=r(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),s=r(565),c=r.n(s),u=r(216),p=r.n(u),l=r(589),A=r.n(l),f=r(122),d={};function m(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}d.styleTagTransform=A(),d.setAttributes=c(),d.insert=i().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=p(),e()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals;var h=document.querySelector("#password-length"),g=document.querySelector("#numbers"),v=document.querySelector("#uppercase-letters"),C=document.querySelector("#lowercase-letters"),y=document.querySelector("#symbols"),b=document.querySelector("#form"),E=document.querySelector("#password");console.log("aqui"),new(function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.formSubmit(),this.charset=""}var e,r;return e=n,(r=[{key:"formSubmit",value:function(){var n=this;b.addEventListener("submit",(function(e){e.preventDefault();var r=n.generatePassword();E.innerText=r}))}},{key:"generatePassword",value:function(){h.value>20&&(h.value=20),this.checkCharset();for(var n="",e=0;e<=h.value;e++)n+=this.charset[Math.floor(Math.random()*this.charset.length)];return n}},{key:"checkCharset",value:function(){this.charset="",g.checked&&(this.charset+=this.getNumbers()),C.checked&&(this.charset+=this.getLowerCaseLetters()),v.checked&&(this.charset+=this.getUpperCaseLetters()),y.checked&&(this.charset+=this.getSymbols())}},{key:"getLowerCaseLetters",value:function(){return"abcdefghijklmnopqrstuvwxyz"}},{key:"getUpperCaseLetters",value:function(){return"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},{key:"getNumbers",value:function(){return"0123456789"}},{key:"getSymbols",value:function(){return"!@#$%&*()-_,"}}])&&m(e.prototype,r),n}())})()})();
//# sourceMappingURL=bundle.js.map