import{u as e,a as u,r as o}from"./index.889f4e9c.js";const t=Vue.createElementVNode("i",{class:"icon-yonghu"},null,-1),r=Vue.createElementVNode("i",{class:"icon-mima"},null,-1),l=Vue.createElementVNode("i",{class:"icon-yanzhengma"},null,-1),a={class:"login-code"},n=["src"],s=Vue.defineComponent({name:"UserLogin"}),i=Vue.defineComponent({...s,setup(s){const i=VueRouter.useRouter(),V=e(),d=u();let c=Vue.reactive({username:"admin",password:"123456",code:"",redomStr:""}),m=Vue.reactive({src:"",value:"",len:4,type:"text"});const p=Vue.ref("password"),f=Vue.ref(),g=()=>{c.redomStr=o(m.len,!0),"text"==m.type?m.value=o(m.len,!1):m.src=`/${c.redomStr}`,c.code=m.value},h={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码长度最少为6位",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:4,message:"验证码长度为4位",trigger:"blur"},{required:!0,trigger:"blur",validator:(e,u,o)=>{m.value!=u?(c.code="",g(),o(new Error("请输入正确的验证码"))):o()}}]};g();const w=()=>{""==p.value?p.value="password":p.value=""},y=async e=>{e&&await e.validate(((e,u)=>{e&&V.LoginByUsername(c).then((()=>{i.push(d.getTagWel)}))}))};return(e,u)=>{const o=Vue.resolveComponent("el-input"),s=Vue.resolveComponent("el-form-item"),i=Vue.resolveComponent("el-button"),V=Vue.resolveComponent("el-form");return Vue.openBlock(),Vue.createBlock(V,{class:"login-form","status-icon":"",rules:h,ref_key:"ruleFormRef",ref:f,model:Vue.unref(c),"label-width":"0"},{default:Vue.withCtx((()=>[Vue.createVNode(s,{prop:"username"},{default:Vue.withCtx((()=>[Vue.createVNode(o,{onKeyup:Vue.withKeys(y,["enter"]),modelValue:Vue.unref(c).username,"onUpdate:modelValue":u[0]||(u[0]=e=>Vue.unref(c).username=e),"auto-complete":"off",placeholder:e.$t("login.username")},{prefix:Vue.withCtx((()=>[t])),_:1},8,["onKeyup","modelValue","placeholder"])])),_:1}),Vue.createVNode(s,{prop:"password"},{default:Vue.withCtx((()=>[Vue.createVNode(o,{onKeyup:Vue.withKeys(y,["enter"]),type:p.value,modelValue:Vue.unref(c).password,"onUpdate:modelValue":u[1]||(u[1]=e=>Vue.unref(c).password=e),"auto-complete":"off",placeholder:e.$t("login.password")},{suffix:Vue.withCtx((()=>[Vue.createElementVNode("i",{class:"el-icon-view el-input__icon",onClick:w})])),prefix:Vue.withCtx((()=>[r])),_:1},8,["onKeyup","type","modelValue","placeholder"])])),_:1}),Vue.createVNode(s,{prop:"code"},{default:Vue.withCtx((()=>[Vue.createVNode(o,{onKeyup:Vue.withKeys(y,["enter"]),maxlength:Vue.unref(m).len,modelValue:Vue.unref(c).code,"onUpdate:modelValue":u[2]||(u[2]=e=>Vue.unref(c).code=e),"auto-complete":"off",placeholder:e.$t("login.code")},{prefix:Vue.withCtx((()=>[l])),append:Vue.withCtx((()=>[Vue.createElementVNode("div",a,["text"==Vue.unref(m).type?(Vue.openBlock(),Vue.createElementBlock("span",{key:0,class:"login-code-img",onClick:g},Vue.toDisplayString(Vue.unref(m).value),1)):(Vue.openBlock(),Vue.createElementBlock("img",{key:1,src:Vue.unref(m).src,class:"login-code-img",onClick:g},null,8,n))])])),_:1},8,["onKeyup","maxlength","modelValue","placeholder"])])),_:1}),Vue.createVNode(s,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{type:"primary",onClick:u[3]||(u[3]=Vue.withModifiers((e=>y(f.value)),["prevent"])),class:"login-submit"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.$t("login.submit")),1)])),_:1})])),_:1})])),_:1},8,["model"])}}});export{i as default};
//# sourceMappingURL=userlogin.2c03b76c.js.map