const e=Vue.createElementVNode("h3",null,"表单例子",-1),o=Vue.defineComponent({__name:"form",setup(o){const l=Vue.ref({});let t=Vue.reactive({labelWidth:110,column:[{label:"用户名",prop:"username",row:!0},{label:"密码",prop:"password",type:"password",row:!0},{label:"再次输入密码",prop:"passwords",type:"password",row:!0},{label:"申请日期",prop:"date",type:"date",row:!0},{label:"个性签名",prop:"textarea",type:"textarea",minRows:8,row:!0}]});return(o,a)=>{const r=Vue.resolveComponent("avue-form"),u=Vue.resolveComponent("basic-container");return Vue.openBlock(),Vue.createBlock(u,null,{default:Vue.withCtx((()=>[e,Vue.createVNode(r,{option:Vue.unref(t),modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["option","modelValue"])])),_:1})}}});export{o as default};
//# sourceMappingURL=form.fe819aec.js.map