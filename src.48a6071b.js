parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(){if(!Worker)return void alert("Sorry, but your browser does not support web workers, which are required by this website.");const e=document.getElementById("run"),t=document.getElementById("numberOfGames"),n=document.getElementById("minNumberOfPads"),r=document.getElementById("maxNumberOfPads"),a=document.getElementById("numberOfThreads"),u=document.getElementById("output"),s=e=>{u.value+=`${e.numberOfPads},${e.averageJumps}\n`};e.addEventListener("click",async()=>{const e=t.value,o=n.value,d=r.value,m=a.value,c=Math.round(e/m);u.value="";const l=[];for(let t=0;t<m;t++)l.push(new Worker("/worker.ac34f191.js"));for(let t=o;t<=d;t++){const e=[];for(let r=0;r<m;r++)e.push(new Promise(e=>{const n=l[r];n.onmessage=(t=>{e(t.data)}),n.postMessage({numberOfGames:c,numberOfPads:t})}));const n=(await Promise.all(e)).reduce((e,t)=>e+t.jumps,0);s({numberOfPads:t,averageJumps:n/(m*c)})}})}document.addEventListener("DOMContentLoaded",e);
},{"./worker.js":[["worker.ac34f191.js","iltZ"],"worker.ac34f191.js.map","iltZ"]}]},{},["Focm"], null)
//# sourceMappingURL=/src.48a6071b.js.map