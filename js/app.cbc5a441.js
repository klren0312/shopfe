(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about",area:"area",auth:"auth",home:"home",result:"result"}[e]||e)+"."+{about:"2bda909a",area:"df5f6c4b",auth:"2b4ec346",home:"8e698907",result:"01148ee0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={area:1,auth:1,home:1,result:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",area:"area",auth:"auth",home:"home",result:"result"}[e]||e)+"."+{about:"31d6cfe0",area:"73e3b7c9",auth:"006ece60",home:"9b97a4a1",result:"501df822"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},a6c8:function(e,t,n){"use strict";(function(e,t){function n(){var r=e.innerWidth;r>e.screen.width?e.requestAnimationFrame(n):(r>750&&(r=750),t.documentElement.style.fontSize=100*r/750+"px")}n(),e.addEventListener("resize",n)})(window,document)},c4df:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("4160"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("f5df1"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),a=[],u=n("2877"),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),l=i.exports,s=n("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("99af"),n("d3b7");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"main-content"},[n("router-view")],1)])},h=[],p={name:"Layout",data:function(){return{}},methods:{}},m=p,b=(n("ef83"),Object(u["a"])(m,d,h,!1,null,null,null)),g=b.exports;r["default"].use(f["a"]);var v=[{path:"/",component:g,children:[{name:"index",path:"",redirect:"/homePage"}]},{path:"/homePage",component:g,children:[{name:"homePage",path:"",component:function(){return n.e("home").then(n.bind(null,"926c"))}}]},{path:"/authPage",component:g,children:[{name:"authPage",path:"",component:function(){return n.e("auth").then(n.bind(null,"6c21"))}}]},{path:"/areaPage",component:g,children:[{name:"areaPage",path:"",component:function(){return n.e("area").then(n.bind(null,"6bcb"))}}]},{path:"/resultPage",component:g,children:[{name:"resultPage",path:"",component:function(){return n.e("result").then(n.bind(null,"1c32"))}}]}],y=[].concat(v,[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]),w=new f["a"]({mode:"history",base:"/",routes:y}),P=w,j=n("2f62");r["default"].use(j["a"]);var E=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=(n("a6c8"),n("a027")),k=n.n(O),_=(n("5ac1"),n("3ea7")),S=n.n(_),x=(n("7c76"),n("a7f5")),A=n.n(x),C=(n("b2c8"),n("0149")),N=n.n(C),T=(n("c5c3"),n("c854")),L=n.n(T),q=(n("0240"),n("11d6")),B=n.n(q),F=(n("bba0"),n("1f5a")),M=n.n(F),$=(n("6179"),n("638f")),z=n.n($),D=(n("4c51"),n("390f")),J=n.n(D),H=(n("dff8"),n("9178")),I=n.n(H);n("de2b");[k.a,S.a,A.a,N.a,L.a,B.a,M.a,z.a,J.a,I.a].forEach((function(e){return e.install(r["default"])})),r["default"].config.productionTip=!1,new r["default"]({router:P,store:E,render:function(e){return e(l)}}).$mount("#app")},ef83:function(e,t,n){"use strict";var r=n("c4df"),o=n.n(r);o.a}});
//# sourceMappingURL=app.cbc5a441.js.map