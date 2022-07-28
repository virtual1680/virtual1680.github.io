import{_ as P,b as A,r as q,o as M,c as V,d as D,w as k,V as i,e as n,f as s}from"./app.f52f2e58.js";const R={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:d,createVNode:m,openBlock:y,createElementBlock:g}=i;function f(e,r){const p=d("qv-form");return y(),g("div",null,[m(p,{modelValue:e.config.form,"onUpdate:modelValue":r[0]||(r[0]=l=>e.config.form=l),ref:"qvFormRef",option:e.option,onSubmit:e.submit,onError:e.error},null,8,["modelValue","option","onSubmit","onError"])])}const{defineComponent:v}=i,{reactive:u,ref:c,computed:b,onMounted:E}=i;return{render:f,...v({setup(e,{expose:r}){r();const p=c();E(()=>{A(()=>import("./app.f52f2e58.js").then(function(a){return a.m}),[]).then(a=>{p.value=a})});const l=c(),B=[{value:"zhinan",label:"\u6307\u5357",children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"}]}]}];let F=u({form:{name:"\u5F20\u4E09",password:""}});const w=(a,t,o)=>{t===""?o(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):o()},_=(a,t,o)=>{t===""?o(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):t!==F.form.password?o(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):o()},h=b(()=>({column:[{label:"\u59D3\u540D",prop:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}]},{label:"\u6027\u522B",prop:"sex",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6027\u522B",trigger:"blur"}]},{label:"\u591A\u9009",prop:"cascader",type:"cascader",dicData:B,rules:[{required:!0,type:"array",message:"\u8BF7\u9009\u62E9\u591A\u9009",trigger:"blur"}]},{label:"\u5BC6\u7801",prop:"password",type:"password",rules:[{validator:w,trigger:"blur"}]},{label:"\u786E\u8BA4\u5BC6\u7801",prop:"oldpassword",type:"password",rules:[{validator:_,trigger:"blur"}]}]})),C={ElementPlus:p,qvFormRef:l,dic:B,config:F,validatePass:w,validatePass2:_,option:h,submit:(a,t)=>{const{ElMessage:o}=p.value;o.success(JSON.stringify(a)),t()},error:a=>{const{ElMessage:t}=p.value;t.success("\u8BF7\u67E5\u770B\u63A7\u5236\u53F0"),console.log(a)},reactive:u,ref:c,computed:b,onMounted:E};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}})}}()}},J='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/data-validate.md","lastUpdated":1658992381000}',z=n("blockquote",null,[n("p",null,"\u6570\u636E\u9A8C\u8BC1")],-1),N=n("div",null,"\u914D\u7F6E\u9A8C\u8BC1\u5B57\u6BB5\u7684 rules \u7684\u6570\u636E\u5BF9\u8C61\u5373\u53EF\uFF0C\u5177\u4F53\u53C2\u8003 element \u4E2D form \u8868\u5355\u6821\u9A8C\u7684\u914D\u7F6E\u89C4\u5219\u5B98\u65B9\u89C4\u5219",-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-form")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.form"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("qvFormRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-form")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),s(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue'"),s(`
`),n("span",{class:"token comment"},"// import { ElMessage } from 'element-plus'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("FormInstance "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" dic "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
	`),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zhinan'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6307\u5357'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'shejiyuanze'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BBE\u8BA1\u539F\u5219'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yizhi'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E00\u81F4'"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'fankui'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u53CD\u9988'"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"validatePass"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("_"),n("span",{class:"token operator"},":"),s(" unknown"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("error"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Error")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5BC6\u7801'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"validatePass2"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("_"),n("span",{class:"token operator"},":"),s(" unknown"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("error"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Error")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"!=="),s(" config"),n("span",{class:"token punctuation"},"."),s("form"),n("span",{class:"token punctuation"},"."),s("password"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" option "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u591A\u9009'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(" dic"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'array'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u591A\u9009'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"validator"),n("span",{class:"token operator"},":"),s(" validatePass"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u786E\u8BA4\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'oldpassword'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"validator"),n("span",{class:"token operator"},":"),s(" validatePass2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"error"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"err"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8BF7\u67E5\u770B\u63A7\u5236\u53F0'"),n("span",{class:"token punctuation"},")"),s(`
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function x(d,m,y,g,f,v){const u=q("render-demo-0"),c=q("demo");return M(),V("div",null,[z,D(c,{sourceCode:`<template>
	<qv-form v-model="config.form" ref="qvFormRef" :option="option" @submit="submit" @error="error"> </qv-form>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from 'vue'
// import type { FormInstance } from 'qv-vue'
// import type { Ref } from 'vue'
// import { ElMessage } from 'element-plus'

const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})

const qvFormRef: Ref<FormInstance | undefined> = ref()
const dic = [
	{
		value: 'zhinan',
		label: '\u6307\u5357',
		children: [
			{
				value: 'shejiyuanze',
				label: '\u8BBE\u8BA1\u539F\u5219',
				children: [
					{
						value: 'yizhi',
						label: '\u4E00\u81F4'
					},
					{
						value: 'fankui',
						label: '\u53CD\u9988'
					}
				]
			}
		]
	}
]
let config = reactive({
	form: {
		name: '\u5F20\u4E09',
		password: ''
	}
})
const validatePass = (_: unknown, value: string, callback: (error?: Error) => void) => {
	if (value === '') {
		callback(new Error('\u8BF7\u8F93\u5165\u5BC6\u7801'))
	} else {
		callback()
	}
}
const validatePass2 = (_: unknown, value: string, callback: (error?: Error) => void) => {
	if (value === '') {
		callback(new Error('\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801'))
	} else if (value !== config.form.password) {
		callback(new Error('\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'))
	} else {
		callback()
	}
}
const option = computed(() => {
	return {
		column: [
			{
				label: '\u59D3\u540D',
				prop: 'name',
				rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D', trigger: 'blur' }]
			},
			{
				label: '\u6027\u522B',
				prop: 'sex',
				rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u6027\u522B', trigger: 'blur' }]
			},
			{
				label: '\u591A\u9009',
				prop: 'cascader',
				type: 'cascader',
				dicData: dic,
				rules: [{ required: true, type: 'array', message: '\u8BF7\u9009\u62E9\u591A\u9009', trigger: 'blur' }]
			},
			{
				label: '\u5BC6\u7801',
				prop: 'password',
				type: 'password',
				rules: [{ validator: validatePass, trigger: 'blur' }]
			},
			{
				label: '\u786E\u8BA4\u5BC6\u7801',
				prop: 'oldpassword',
				type: 'password',
				rules: [{ validator: validatePass2, trigger: 'blur' }]
			}
		]
	}
})
const submit = (form: any, done: () => void) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success(JSON.stringify(form))
	done()
}
const error = (err: any) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u8BF7\u67E5\u770B\u63A7\u5236\u53F0')
	console.log(err)
}
<\/script>
`},{description:k(()=>[N]),highlight:k(()=>[S]),default:k(()=>[D(u)]),_:1})])}var T=P(R,[["render",x]]);export{J as __pageData,T as default};
