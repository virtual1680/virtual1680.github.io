import{H as F,au as $,a0 as v,r as C,a4 as g,k as f,O as E,P as t,u as r,X as a,a7 as _,m as i,l as w,W as h,$ as U,V as q}from"./vue.e587a6e4.js";import{u as D,a as L,r as B}from"./index.308dce99.js";import"./element-plus.99fc94f8.js";const N=i("i",{class:"icon-yonghu"},null,-1),R=i("i",{class:"icon-mima"},null,-1),T=i("i",{class:"icon-yanzhengma"},null,-1),P={class:"login-code"},W=["src"],z=F({name:"UserLogin"}),G=F({...z,setup(H){const V=$(),b=D(),k=L();let e=v({username:"admin",password:"123456",code:"",redomStr:""}),s=v({src:"",value:"",len:4,type:"text"});const d=C("password"),y=C(),m=()=>{e.redomStr=B(s.len,!0),s.type=="text"?s.value=B(s.len,!1):s.src=`/${e.redomStr}`,e.code=s.value},x={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{min:6,message:"\u5BC6\u7801\u957F\u5EA6\u6700\u5C11\u4E3A6\u4F4D",trigger:"blur"}],code:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"},{min:4,max:4,message:"\u9A8C\u8BC1\u7801\u957F\u5EA6\u4E3A4\u4F4D",trigger:"blur"},{required:!0,trigger:"blur",validator:(u,o,l)=>{s.value!=o?(e.code="",m(),l(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"))):l()}}]};m();const S=()=>{d.value==""?d.value="password":d.value=""},p=async u=>{!u||await u.validate((o,l)=>{o&&b.LoginByUsername(e).then(()=>{V.push(k.getTagWel)})})};return(u,o)=>{const l=g("el-input"),c=g("el-form-item"),A=g("el-button"),K=g("el-form");return f(),E(K,{class:"login-form","status-icon":"",rules:x,ref_key:"ruleFormRef",ref:y,model:r(e),"label-width":"0"},{default:t(()=>[a(c,{prop:"username"},{default:t(()=>[a(l,{onKeyup:_(p,["enter"]),modelValue:r(e).username,"onUpdate:modelValue":o[0]||(o[0]=n=>r(e).username=n),"auto-complete":"off",placeholder:u.$t("login.username")},{prefix:t(()=>[N]),_:1},8,["onKeyup","modelValue","placeholder"])]),_:1}),a(c,{prop:"password"},{default:t(()=>[a(l,{onKeyup:_(p,["enter"]),type:d.value,modelValue:r(e).password,"onUpdate:modelValue":o[1]||(o[1]=n=>r(e).password=n),"auto-complete":"off",placeholder:u.$t("login.password")},{suffix:t(()=>[i("i",{class:"el-icon-view el-input__icon",onClick:S})]),prefix:t(()=>[R]),_:1},8,["onKeyup","type","modelValue","placeholder"])]),_:1}),a(c,{prop:"code"},{default:t(()=>[a(l,{onKeyup:_(p,["enter"]),maxlength:r(s).len,modelValue:r(e).code,"onUpdate:modelValue":o[2]||(o[2]=n=>r(e).code=n),"auto-complete":"off",placeholder:u.$t("login.code")},{prefix:t(()=>[T]),append:t(()=>[i("div",P,[r(s).type=="text"?(f(),w("span",{key:0,class:"login-code-img",onClick:m},h(r(s).value),1)):(f(),w("img",{key:1,src:r(s).src,class:"login-code-img",onClick:m},null,8,W))])]),_:1},8,["onKeyup","maxlength","modelValue","placeholder"])]),_:1}),a(c,null,{default:t(()=>[a(A,{type:"primary",onClick:o[3]||(o[3]=U(n=>p(y.value),["prevent"])),class:"login-submit"},{default:t(()=>[q(h(u.$t("login.submit")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});export{G as default};
//# sourceMappingURL=userlogin.7a8f5970.js.map
