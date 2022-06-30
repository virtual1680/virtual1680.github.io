import{H as o,ax as s,k as a,l as r}from"./vue.e587a6e4.js";const i=o({name:"AuthRedirect"}),p=o({...i,setup(d){const t=s();window.close();const e=t.query,n=e.state,c=e.code;return window.opener.location.href=`${window.location.origin}/#/login?state=${n}&code=${c}`,(l,u)=>(a(),r("div"))}});export{p as default};
//# sourceMappingURL=authredirect.95b34641.js.map
