if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,a,r)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}})).then(e=>{const s=r(...e);return i.default||(i.default=s),i})}))}}define("./service-worker.js",["./workbox-d69d5477"],(function(e){"use strict";e.setCacheNameDetails({prefix:"alex-page"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"97092827d94c15a81de8912856cd1596"},{url:"assets/blog/actions.jpg",revision:"bd92975eae17f4058c3ee93f8f6ea165"},{url:"assets/blog/gh-actions.jpg",revision:"668179f9dce00dcfe97ee0372d8a3cfc"},{url:"assets/blog/workflow.jpg",revision:"83b9342473acd69eeb89e14dc8b4be23"},{url:"assets/favicons/alex-page.jpg",revision:"3a6795ab492eed9afdd31f60905749cb"},{url:"assets/favicons/apple-touch-icon.png",revision:"3748c3e5a5053b42ca0d73921cf0d575"},{url:"assets/favicons/favicon-16x16.png",revision:"6b633b08046cb9fe1c721c564ff9d470"},{url:"assets/favicons/favicon-32x32.png",revision:"e83efafb8239f8d71de5d11e60845b84"},{url:"assets/favicons/favicon.ico",revision:"f3f3911092cf9903a257a9ccf1a446b5"},{url:"assets/favicons/icon-192.png",revision:"93fdadc2c2b1a0f322280fea0a6b8bba"},{url:"assets/favicons/icon-512.png",revision:"a82c53a9b5ed34f65d97abd0454e3969"},{url:"assets/favicons/mstile-150x150.png",revision:"44e9c875c20dc554b74e7d5954d38bee"},{url:"assets/favicons/safari-pinned-tab.svg",revision:"bd2022f41a6e2aa0028836a508aa906e"},{url:"assets/img/alex-page.png",revision:"df8a81a086b77e2ac2c6b63a8c388950"},{url:"assets/img/logo.svg",revision:"d4d2949e5dccdc92533fa2348fe2df81"},{url:"blog/github-actions-npm/index.html",revision:"0271761392fa459cdccbcde0142d53ae"},{url:"blog/index.html",revision:"c4d63c05d93f59ce06bfb2f8181c5e72"},{url:"index.html",revision:"be170dd2dc64d880c661aa942c71585a"},{url:"projects/a11ycolor/index.html",revision:"6a9547e268290505e535b49521c05a89"},{url:"projects/auds/index.html",revision:"5060604fe76f24d9f8dd986d65dc8493"},{url:"projects/chameleon/index.html",revision:"1fd7ea00630d1b1abc2bf1626b101a8d"},{url:"projects/furnace/index.html",revision:"62b21f890ebbd206609310a89c3d1af7"},{url:"projects/harmonograph/index.html",revision:"cb1abfd0c2ac4b0bef0bb6f70dca0458"},{url:"projects/index.html",revision:"7613726b3e5de00567d726bddb44cf9a"},{url:"talks/hard-work-make-simple/index.html",revision:"03215422fbfd7674d6b9413d1ad8ef50"},{url:"talks/index.html",revision:"1c4e519868b64600c0a0b41ed403aaa2"},{url:"talks/names-culture/index.html",revision:"341bb361070e9acc38c7ada1fab576d5"}],{})}));
//# sourceMappingURL=service-worker.js.map
