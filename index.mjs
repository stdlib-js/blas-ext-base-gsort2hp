// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function i(e,i,n,o,a,d){var m,f,l,p,j,h,u,b,c,v,x,g,y;if(e<=0||0===i)return n;for(i<0&&(o*=-1,d*=-1),m=o<0?(1-e)*o:0,f=d<0?(1-e)*d:0,x=e,l=t(e/2);;){if(l>0)u=n[m+(l-=1)*o],b=a[f+l*d];else{if(0===(x-=1))return n;u=n[c=m+x*o],b=a[v=f+x*d],n[c]=n[m],a[v]=a[f]}for(p=2*(g=l)+1;p<x&&((y=p+1)<x&&((j=n[m+y*o])>(h=n[m+p*o])||r(j)||j===h&&s(j))&&(p+=1),(j=n[m+p*o])>u||r(j)||j===u&&s(j));)n[m+g*o]=j,a[f+g*d]=a[f+p*d],p=2*(g=p)+1;n[m+g*o]=u,a[f+g*d]=b}}function n(e,i,n,o,a,d,m,f){var l,p,j,h,u,b,c,v,x,g,y;if(e<=0||0===i)return n;for(i<0&&(a-=(e-1)*(o*=-1),f-=(e-1)*(m*=-1)),x=e,l=t(e/2);;){if(l>0)u=n[a+(l-=1)*o],b=d[f+l*m];else{if(0===(x-=1))return n;u=n[c=a+x*o],b=d[v=f+x*m],n[c]=n[a],d[v]=d[f]}for(p=2*(g=l)+1;p<x&&((y=p+1)<x&&((j=n[a+y*o])>(h=n[a+p*o])||r(j)||j===h&&s(j))&&(p+=1),(j=n[a+p*o])>u||r(j)||j===u&&s(j));)n[a+g*o]=j,d[f+g*m]=d[f+p*m],p=2*(g=p)+1;n[a+g*o]=u,d[f+g*m]=b}}e(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
