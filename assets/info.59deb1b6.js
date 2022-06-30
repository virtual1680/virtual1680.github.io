const e={class:"user-info"},u={class:"user-info__content"},t=["src"],l={class:"user-info__name"},a=Vue.createTextVNode("个人设置"),o={class:"user-info__desc"},V={class:"user-info__detail-desc"},n=Vue.createElementVNode("i",{class:"el-icon-message"},null,-1),r=Vue.createElementVNode("i",{class:"el-icon-postcard"},null,-1),d=Vue.createElementVNode("i",{class:"el-icon-location-information"},null,-1),s=Vue.createElementVNode("div",{class:"user-info__divider"},null,-1),c=Vue.createElementVNode("h4",null,"标签",-1),i={class:"user-info__tags"},m=["src"],p={key:1,class:"el-icon-plus avatar-uploader-icon"},f=Vue.createTextVNode("确认"),w=Vue.createTextVNode("取消"),N=Vue.createTextVNode("确认"),_=Vue.createTextVNode("重置"),x=Vue.defineComponent({__name:"info",setup(x){const C=Vue.ref(0),h=Vue.ref([" 善解人意","开朗乐观","真诚热情","心地善良","谦恭有礼","彬彬有礼","虚怀若谷","严于律己","雍容大度","热情洋溢","从容自若","诚挚","温厚","谦让","勤恳","耿直"]);let v=Vue.reactive({img:"https://avatar.gitee.com/uploads/61/632261_smallweigit.jpg!avatar100?1518660401",username:"avue",name:"smallwei",ms:"保护头发，人人有责",yx:"1634566606@qq.com",gs:"某某公司",bm:"某某部门",zw:"前端开发工程师",dz:"内蒙古",bq:[1,2,3,4],password:"9999",oldpassword:11111111,newpassword:22222222,newpasswords:22222222});return(x,g)=>{const y=Vue.resolveComponent("router-link"),E=Vue.resolveComponent("el-tag"),b=Vue.resolveComponent("basic-container"),k=Vue.resolveComponent("el-col"),B=Vue.resolveComponent("el-upload"),D=Vue.resolveComponent("el-form-item"),S=Vue.resolveComponent("el-input"),U=Vue.resolveComponent("el-button"),T=Vue.resolveComponent("el-form"),z=Vue.resolveComponent("el-tab-pane"),q=Vue.resolveComponent("el-tabs"),j=Vue.resolveComponent("el-row");return Vue.openBlock(),Vue.createElementBlock("div",e,[Vue.createVNode(j,{span:24},{default:Vue.withCtx((()=>[Vue.createVNode(k,{span:8},{default:Vue.withCtx((()=>[Vue.createVNode(b,null,{default:Vue.withCtx((()=>[Vue.createElementVNode("div",u,[Vue.createElementVNode("img",{class:"user-info__img",src:Vue.unref(v).img,alt:""},null,8,t),Vue.createElementVNode("p",l,Vue.toDisplayString(Vue.unref(v).name),1),Vue.createVNode(y,{class:"user-info__setting",to:{path:"/info/setting"}},{default:Vue.withCtx((()=>[a])),_:1}),Vue.createElementVNode("p",o,Vue.toDisplayString(Vue.unref(v).ms),1),Vue.createElementVNode("div",V,[Vue.createElementVNode("p",null,[n,Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(v).yx),1)]),Vue.createElementVNode("p",null,[r,Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(v).gs)+" · "+Vue.toDisplayString(Vue.unref(v).bm)+" · "+Vue.toDisplayString(Vue.unref(v).zw),1)]),Vue.createElementVNode("p",null,[d,Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(v).dz),1)])]),s,c,Vue.createElementVNode("div",i,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(h.value,((e,u)=>(Vue.openBlock(),Vue.createBlock(E,{effect:"plain",key:u},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e),1)])),_:2},1024)))),128))])])])),_:1})])),_:1}),Vue.createVNode(k,{span:16},{default:Vue.withCtx((()=>[Vue.createVNode(b,null,{default:Vue.withCtx((()=>[Vue.createVNode(q,{modelValue:C.value,"onUpdate:modelValue":g[6]||(g[6]=e=>C.value=e)},{default:Vue.withCtx((()=>[Vue.createVNode(z,{label:"个人信息",name:0},{default:Vue.withCtx((()=>[Vue.createVNode(T,{"label-width":"110px"},{default:Vue.withCtx((()=>[Vue.createVNode(D,{label:"头像"},{default:Vue.withCtx((()=>[Vue.createVNode(B,{class:"avatar-uploader","show-file-list":!1},{default:Vue.withCtx((()=>[Vue.unref(v).img?(Vue.openBlock(),Vue.createElementBlock("img",{key:0,src:Vue.unref(v).img,class:"avatar"},null,8,m)):(Vue.openBlock(),Vue.createElementBlock("i",p))])),_:1})])),_:1}),Vue.createVNode(D,{label:"姓名"},{default:Vue.withCtx((()=>[Vue.createVNode(S,{modelValue:Vue.unref(v).name,"onUpdate:modelValue":g[0]||(g[0]=e=>Vue.unref(v).name=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(D,{label:"用户名"},{default:Vue.withCtx((()=>[Vue.createVNode(S,{modelValue:Vue.unref(v).username,"onUpdate:modelValue":g[1]||(g[1]=e=>Vue.unref(v).username=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(D,{label:"邮箱"},{default:Vue.withCtx((()=>[Vue.createVNode(S,{modelValue:Vue.unref(v).yx,"onUpdate:modelValue":g[2]||(g[2]=e=>Vue.unref(v).yx=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(D,null,{default:Vue.withCtx((()=>[Vue.createVNode(U,{type:"primary"},{default:Vue.withCtx((()=>[f])),_:1}),Vue.createVNode(U,null,{default:Vue.withCtx((()=>[w])),_:1})])),_:1})])),_:1})])),_:1}),Vue.createVNode(z,{label:"修改密码",name:1},{default:Vue.withCtx((()=>[Vue.createVNode(T,{"label-width":"110px"},{default:Vue.withCtx((()=>[Vue.createVNode(D,{label:"原密码",prop:"oldpassword"},{default:Vue.withCtx((()=>[Vue.createVNode(S,{type:"password",modelValue:Vue.unref(v).password,"onUpdate:modelValue":g[3]||(g[3]=e=>Vue.unref(v).password=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),Vue.createVNode(D,{label:"新密码",prop:"newpassword"},{default:Vue.withCtx((()=>[Vue.createVNode(S,{type:"password",modelValue:Vue.unref(v).newpassword,"onUpdate:modelValue":g[4]||(g[4]=e=>Vue.unref(v).newpassword=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),Vue.createVNode(D,{label:"确认密码",prop:"newpasswords"},{default:Vue.withCtx((()=>[Vue.createVNode(S,{type:"password",modelValue:Vue.unref(v).newpasswords,"onUpdate:modelValue":g[5]||(g[5]=e=>Vue.unref(v).newpasswords=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),Vue.createVNode(D,null,{default:Vue.withCtx((()=>[Vue.createVNode(U,{type:"primary"},{default:Vue.withCtx((()=>[N])),_:1}),Vue.createVNode(U,null,{default:Vue.withCtx((()=>[_])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])}}});export{x as default};
//# sourceMappingURL=info.59deb1b6.js.map