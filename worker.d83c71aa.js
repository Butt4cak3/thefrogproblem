!function(){function t(t){let n=0;const o=[];for(;n<t;)a=n+1,e=t,n=Math.floor(a+Math.random()*(e-a+1)),o.push(n);var a,e;return{path:o}}onmessage=function(n){const{numberOfGames:o,numberOfPads:a}=n.data;let e=0;for(let n=0;n<o;n++){const{path:n}=t(a);e+=n.length}postMessage({jumps:e})}}();
//# sourceMappingURL=worker.d83c71aa.js.map
