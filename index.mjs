// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";function i(e,i,n,o,a,d){var m,f,l,p,j,h,v,u,b,c,x,g,y;if(e<=0||0===i)return n;for(i<0&&(o*=-1,d*=-1),m=o<0?(1-e)*o:0,f=d<0?(1-e)*d:0,x=e,l=t(e/2);;){if(l>0)v=n[m+(l-=1)*o],u=a[f+l*d];else{if(0===(x-=1))return n;v=n[b=m+x*o],u=a[c=f+x*d],n[b]=n[m],a[c]=a[f]}for(p=2*(g=l)+1;p<x&&((y=p+1)<x&&((j=n[m+y*o])>(h=n[m+p*o])||r(j)||j===h&&s(j))&&(p+=1),(j=n[m+p*o])>v||r(j)||j===v&&s(j));)n[m+g*o]=j,a[f+g*d]=a[f+p*d],p=2*(g=p)+1;n[m+g*o]=v,a[f+g*d]=u}}function n(e,i,n,o,a,d,m,f){var l,p,j,h,v,u,b,c,x,g,y;if(e<=0||0===i)return n;for(i<0&&(a-=(e-1)*(o*=-1),f-=(e-1)*(m*=-1)),x=e,l=t(e/2);;){if(l>0)v=n[a+(l-=1)*o],u=d[f+l*m];else{if(0===(x-=1))return n;v=n[b=a+x*o],u=d[c=f+x*m],n[b]=n[a],d[c]=d[f]}for(p=2*(g=l)+1;p<x&&((y=p+1)<x&&((j=n[a+y*o])>(h=n[a+p*o])||r(j)||j===h&&s(j))&&(p+=1),(j=n[a+p*o])>v||r(j)||j===v&&s(j));)n[a+g*o]=j,d[f+g*m]=d[f+p*m],p=2*(g=p)+1;n[a+g*o]=v,d[f+g*m]=u}}e(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
