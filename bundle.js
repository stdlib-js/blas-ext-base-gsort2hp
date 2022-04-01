// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gsort2hp=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},_=r()?l:c;var p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Number.POSITIVE_INFINITY;var s=function(e){return 0===e&&1/e===d};var b=function(e){return e!=e},y=Math.floor,v=s,m=b,g=y;var j=s,h=b,w=y;var T=function(e,r,t,n,o,i){var a,u,f,l,c,_,p,d,s,b,y,j,h;if(e<=0||0===r)return t;for(r<0&&(n*=-1,i*=-1),a=n<0?(1-e)*n:0,u=i<0?(1-e)*i:0,y=e,f=g(e/2);;){if(f>0)p=t[a+(f-=1)*n],d=o[u+f*i];else{if(0===(y-=1))return t;p=t[s=a+y*n],d=o[b=u+y*i],t[s]=t[a],o[b]=o[u]}for(l=2*(j=f)+1;l<y&&((h=l+1)<y&&((c=t[a+h*n])>(_=t[a+l*n])||m(c)||c===_&&v(c))&&(l+=1),(c=t[a+l*n])>p||m(c)||c===p&&v(c));)t[a+j*n]=c,o[u+j*i]=o[u+l*i],l=2*(j=l)+1;t[a+j*n]=p,o[u+j*i]=d}};return p(T,"ndarray",(function(e,r,t,n,o,i,a,u){var f,l,c,_,p,d,s,b,y,v,m;if(e<=0||0===r)return t;for(r<0&&(o-=(e-1)*(n*=-1),u-=(e-1)*(a*=-1)),y=e,f=w(e/2);;){if(f>0)p=t[o+(f-=1)*n],d=i[u+f*a];else{if(0===(y-=1))return t;p=t[s=o+y*n],d=i[b=u+y*a],t[s]=t[o],i[b]=i[u]}for(l=2*(v=f)+1;l<y&&((m=l+1)<y&&((c=t[o+m*n])>(_=t[o+l*n])||h(c)||c===_&&j(c))&&(l+=1),(c=t[o+l*n])>p||h(c)||c===p&&j(c));)t[o+v*n]=c,i[u+v*a]=i[u+l*a],l=2*(v=l)+1;t[o+v*n]=p,i[u+v*a]=d}})),T}));
//# sourceMappingURL=bundle.js.map
