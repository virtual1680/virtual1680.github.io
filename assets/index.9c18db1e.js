import e from"./index.a4fdcf20.js";import{_ as t,u as o,e as u,w as l,f as n,d as a}from"./index.889f4e9c.js";var c=(t={})=>{let o={app:t};const u=document.createElement("div");let l=Vue.createVNode(e,o);return l.props.onDestroy=()=>{Vue.render(null,u)},Vue.render(l,u),document.body.appendChild(u.firstElementChild),l};const V=e=>(Vue.pushScopeId("data-v-14af8086"),e=e(),Vue.popScopeId(),e),r=V((()=>Vue.createElementVNode("div",{class:"mac_bg"},null,-1))),d={class:"desktop"},i={class:"top"},s=V((()=>Vue.createElementVNode("div",{class:"logo"},[Vue.createElementVNode("i",{class:"iconfont icon-pingguo"})],-1))),m=V((()=>Vue.createElementVNode("div",{class:"space"},null,-1))),p={class:"status"},v=V((()=>Vue.createElementVNode("div",{class:"audio"},[Vue.createElementVNode("i",{class:"iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-39"})],-1))),E={class:"datetime"},f=V((()=>Vue.createElementVNode("div",{class:"notification"},[Vue.createElementVNode("i",{class:"iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-25"})],-1))),N={class:"body"},g={class:"desktop-app"},k=["onClick"],C={class:"title"},h={class:"footer"},y=V((()=>Vue.createElementVNode("div",{class:"space"},null,-1))),x={class:"dock"},B=["onClick"],_={style:{"margin-top":"5px","font-size":"10px"}},w=V((()=>Vue.createElementVNode("div",{class:"space"},null,-1)));var S=t(Vue.defineComponent({__name:"index",setup(e){const t=VueRouter.useRouter(),V=o(),S=u(),b=Vue.ref(""),D=Vue.computed((()=>V.getUserInfo)),z=Vue.computed((()=>V.getMenu)),I=Vue.computed((()=>l.menu.label)),M=Vue.computed((()=>[])),F=Vue.computed((()=>Y.value)),Y=Vue.computed((()=>{let e=[];const t=o=>{o.forEach((o=>{o[L.value]&&0!==o[L.value].length?t(o[L.value]):e.push(o)}))};return t(z.value),e})),H=Vue.computed((()=>l.menu.icon)),L=Vue.computed((()=>l.menu.children)),T=Vue.computed((()=>l.menu.href)),j=Vue.computed((()=>l.menu.path)),q=()=>{S.SET_THEME_NAME(""),location.reload()},O=()=>{V.LogOut().then((()=>{t.push({path:"/login"})}))},R=e=>{c({title:e[I.value],path:e[T.value]?e[T.value]:e[j.value]})};return setInterval((()=>{b.value=a().format("YYYY年MM月DD日 HH:mm")}),1e3),V.GetMenu(),(e,t)=>{const o=Vue.resolveComponent("el-dropdown-item"),u=Vue.resolveComponent("el-dropdown-menu"),l=Vue.resolveComponent("el-dropdown");return Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[r,Vue.createElementVNode("div",d,[Vue.createElementVNode("div",i,[Vue.createVNode(l,{trigger:"click"},{dropdown:Vue.withCtx((()=>[Vue.createVNode(u,null,{default:Vue.withCtx((()=>[Vue.createVNode(o,null,{default:Vue.withCtx((()=>[Vue.createElementVNode("div",null,Vue.toDisplayString(Vue.unref(D).username),1)])),_:1}),Vue.createVNode(o,null,{default:Vue.withCtx((()=>[Vue.createVNode(n,{text:"锁定屏幕"})])),_:1}),Vue.createVNode(o,null,{default:Vue.withCtx((()=>[Vue.createElementVNode("div",{onClick:q},"退出主题")])),_:1}),Vue.createVNode(o,{onClick:O},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.$t("navbar.logOut")),1)])),_:1})])),_:1})])),default:Vue.withCtx((()=>[s])),_:1}),m,Vue.createElementVNode("div",p,[v,Vue.createElementVNode("div",E,Vue.toDisplayString(b.value),1),f])]),Vue.createElementVNode("div",N,[Vue.createElementVNode("div",g,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(F),(e=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:e.key},[e.hideInDesktop?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:"app-item",onClick:t=>R(e)},[Vue.createElementVNode("div",{class:"icon",style:Vue.normalizeStyle({backgroundColor:e.iconBgColor,color:e.iconColor})},[Vue.createElementVNode("i",{class:Vue.normalizeClass(["iconfont",e[Vue.unref(H)]])},null,2)],4),Vue.createElementVNode("div",C,Vue.toDisplayString(e[Vue.unref(I)]),1)],8,k))],64)))),128))])]),Vue.createElementVNode("div",h,[y,Vue.createElementVNode("div",x,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(M),(e=>(Vue.openBlock(),Vue.createElementBlock("div",{key:e.key,class:"item",onClick:t=>R(e)},[Vue.createElementVNode("i",{style:Vue.normalizeStyle({backgroundColor:e.iconBgColor,color:e.iconColor}),class:Vue.normalizeClass(["iconfont",e[Vue.unref(H)]])},null,6),Vue.createElementVNode("small",_,Vue.toDisplayString(e[Vue.unref(I)]),1)],8,B)))),128))]),w])])],64)}}}),[["__scopeId","data-v-14af8086"]]);export{S as default};
//# sourceMappingURL=index.9c18db1e.js.map