import{N as e}from"./index.9ee08915.js";const t=["src"],n=Vue.defineComponent({name:"AvueIframe"}),u=Vue.defineComponent({...n,setup(n){const u=VueRouter.useRoute(),o=Vue.ref();e.configure({showSpinner:!1});const r=Vue.computed((()=>u.query.url.replace(/#/g,"&")));Vue.watch((()=>u.query),(()=>{c()}));const a=()=>{e.done()},c=()=>{e.start();let t=3;const n=setInterval((()=>{t--,0==t&&(a(),clearInterval(n))}),1e3);l()},l=()=>{const e=document.documentElement.clientHeight-150;o.value&&(o.value.style.height=`${e}px`,o.value.onload=()=>{a()})};return c(),(e,n)=>{const u=Vue.resolveComponent("basic-container");return Vue.openBlock(),Vue.createBlock(u,null,{default:Vue.withCtx((()=>[Vue.createElementVNode("iframe",{src:Vue.unref(r),class:"iframe",ref_key:"iframeRef",ref:o},null,8,t)])),_:1})}}});export{u as default};
//# sourceMappingURL=main.a8ede781.js.map
