const e=Vue.defineComponent({name:"AuthRedirect"}),o=Vue.defineComponent({...e,setup(e){const o=VueRouter.useRoute();window.close();const n=o.query,t=n.state,u=n.code;return window.opener.location.href=`${window.location.origin}/#/login?state=${t}&code=${u}`,(e,o)=>(Vue.openBlock(),Vue.createElementBlock("div"))}});export{o as default};
//# sourceMappingURL=authredirect.1c78bfce.js.map
