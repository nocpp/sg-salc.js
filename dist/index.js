parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
var define;
var global = arguments[3];
var n,t=arguments[3];function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":r(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof n&&n.amd?n(e):t.sg_calc=e()}(this,function(){function n(n){var t=n.indexOf("e");if(t>-1&&n.indexOf("-")>0){var r=n.slice(0,t),e=parseInt(n.slice(t+2)),u=r.replace(".","");return"0."+"0".repeat(e-1)+u}return n}function t(n,t){var r=u(n,t),e=r.num1Arr,o=r.num2Arr,l=r.len1,p=r.len2,f=r.multiplyTempNum,a=parseInt(e[0]),m=i(n)?parseInt(-e[1]||-0):parseInt(e[1]||0),s=parseInt(o[0]),c=i(t)?parseInt(-o[1]||-0):parseInt(o[1]||0),d=s*f;return(a*f+m*(f/Math.pow(10,l)))*(d+c*(f/Math.pow(10,p)))/Math.pow(f,2)}function r(n,r){var e=u(n,r).multiplyTempNum;return t(n,e)/t(r,e)}function e(n,e){var i=u(n,e).multiplyTempNum;return r(t(n,i)+t(e,i),i)}function u(t,r){var e=n(t.toString()).split("."),u=n(r.toString()).split("."),i=e[1]?e[1].length:0,o=u[1]?u[1].length:0,l=Math.max(i,o);return{num1Arr:e,num2Arr:u,len1:i,len2:o,multiplyTempNum:Math.pow(10,l)}}function i(n){return 0===n.toString().indexOf("-")}var o={add:e,minus:function(n,t){return e(n,-t)},multiply:t,divide:r,result:0,start:function(n){return function n(t,r){return{add:function(e){var u=o.add(r,e);return t.result=u,n(t,u)},minus:function(e){var u=o.minus(r,e);return t.result=u,n(t,u)},multiply:function(e){var u=o.multiply(r,e);return t.result=u,n(t,u)},divide:function(e){var u=o.divide(r,e);return t.result=u,n(t,u)},end:function(){return t.end()}}}(this,n)},end:function(){return this.result}};return o});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/index.map