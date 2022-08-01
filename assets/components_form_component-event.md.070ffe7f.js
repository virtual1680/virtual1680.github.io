import{_ as h,e as P,c as q,a as F,w as k,V as i,b as n,r as b,o as D,d as s}from"./app.c74dcb0e.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:m,createVNode:g,openBlock:E,createElementBlock:v}=i;function f(p,l){const t=m("qv-form");return E(),v("div",null,[g(t,{ref:"form",modelValue:p.config.obj,"onUpdate:modelValue":l[0]||(l[0]=r=>p.config.obj=r),option:p.option},null,8,["modelValue","option"])])}const{defineComponent:d}=i,{computed:u,reactive:c,onMounted:B,ref:_}=i;return{render:f,...d({setup(p,{expose:l}){l();const t=_();B(()=>{P(()=>import("./app.c74dcb0e.js").then(function(a){return a.au}),[]).then(a=>{t.value=a})});let r=c({obj:{}});const M=u(()=>({column:[{label:"\u7528\u6237\u540D",prop:"username",span:24,suffixIcon:"Plus",prefixIcon:"Search",maxlength:80,minlength:2,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],click:({value:a,column:o})=>{const{ElMessage:e}=t.value;console.log(a,o),e.success("click")},change:({value:a,column:o})=>{const{ElMessage:e}=t.value;e.success("change\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0"),console.log("\u503C\u6539\u53D8",a,o)},focus:({value:a,column:o})=>{const{ElMessage:e}=t.value;e.success("focus\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0"),console.log("\u83B7\u53D6\u7126\u70B9",a,o)},blur:({value:a,column:o})=>{const{ElMessage:e}=t.value;e.success("blur\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0"),console.log("\u5931\u53BB\u7126\u70B9",a,o)},enter:({value:a,column:o})=>{const{ElMessage:e}=t.value;e.success("enter\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0"),console.log("\u56DE\u8F66\u4E8B\u4EF6",a,o)}}]})),y={ElementPlus:t,config:r,option:M,computed:u,reactive:c,onMounted:B,ref:_};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}})}}()}},O='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/component-event.md","lastUpdated":1659029761000}',V=n("blockquote",null,[n("p",null,"\u7EC4\u4EF6\u4E8B\u4EF6")],-1),x=n("div",null,"\u76EE\u524D\u7EC4\u4EF6\u6709 4 \u4E2A\u4E8B\u4EF6 change,click,focus,blur",-1),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-form")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("form"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.obj"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-form")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// import { QvOption, QvValue } from '@qv-vue/es/types/qvue-ui'"),s(`
`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"obj"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" option "),n("span",{class:"token operator"},"="),s(" computed"),n("span",{class:"token operator"},"<"),s("QvOption"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"QvOption"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7528\u6237\u540D'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u683C\u6805\u680F\u6570"),s(`
				`),n("span",{class:"token literal-property property"},"suffixIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Plus'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prefixIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"maxlength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"minlength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u7528\u6237\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token function-variable function"},"click"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" value"),n("span",{class:"token punctuation"},","),s(" column "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(" QvValue"),n("span",{class:"token punctuation"},";"),s(" column"),n("span",{class:"token operator"},":"),s(" unknown "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
					console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},")"),s(`
					ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token function-variable function"},"change"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" value"),n("span",{class:"token punctuation"},","),s(" column "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
					ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'change\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0'"),n("span",{class:"token punctuation"},")"),s(`
					console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u503C\u6539\u53D8'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token function-variable function"},"focus"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" value"),n("span",{class:"token punctuation"},","),s(" column "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
					ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'focus\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0'"),n("span",{class:"token punctuation"},")"),s(`
					console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u83B7\u53D6\u7126\u70B9'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token function-variable function"},"blur"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" value"),n("span",{class:"token punctuation"},","),s(" column "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
					ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'blur\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0'"),n("span",{class:"token punctuation"},")"),s(`
					console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5931\u53BB\u7126\u70B9'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token function-variable function"},"enter"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" value"),n("span",{class:"token punctuation"},","),s(" column "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
					ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'enter\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0'"),n("span",{class:"token punctuation"},")"),s(`
					console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u56DE\u8F66\u4E8B\u4EF6'"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function C(m,g,E,v,f,d){const u=b("render-demo-0"),c=b("demo");return D(),q("div",null,[V,F(c,{sourceCode:`<template>
	<qv-form ref="form" v-model="config.obj" :option="option"> </qv-form>
</template>

<script lang="ts" setup>
import { computed, reactive, onMounted, ref } from 'vue'
// import { QvOption, QvValue } from '@qv-vue/es/types/qvue-ui'
const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})

let config = reactive({
	obj: {}
})
const option = computed<QvOption>((): QvOption => {
	return {
		column: [
			{
				label: '\u7528\u6237\u540D',
				prop: 'username',
				span: 24, //\u683C\u6805\u680F\u6570
				suffixIcon: 'Plus',
				prefixIcon: 'Search',
				maxlength: 80,
				minlength: 2,
				rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D', trigger: 'blur' }],
				click: ({ value, column }: { value: QvValue; column: unknown }) => {
					const { ElMessage } = ElementPlus.value
					console.log(value, column)
					ElMessage.success('click')
				},
				change: ({ value, column }) => {
					const { ElMessage } = ElementPlus.value
					ElMessage.success('change\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0')
					console.log('\u503C\u6539\u53D8', value, column)
				},
				focus: ({ value, column }) => {
					const { ElMessage } = ElementPlus.value
					ElMessage.success('focus\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0')
					console.log('\u83B7\u53D6\u7126\u70B9', value, column)
				},
				blur: ({ value, column }) => {
					const { ElMessage } = ElementPlus.value
					ElMessage.success('blur\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0')
					console.log('\u5931\u53BB\u7126\u70B9', value, column)
				},
				enter: ({ value, column }) => {
					const { ElMessage } = ElementPlus.value
					ElMessage.success('enter\u4E8B\u4EF6\u67E5\u770B\u63A7\u5236\u53F0')
					console.log('\u56DE\u8F66\u4E8B\u4EF6', value, column)
				}
			}
		]
	}
})
<\/script>
`},{description:k(()=>[x]),highlight:k(()=>[A]),default:k(()=>[F(u)]),_:1})])}var I=h(w,[["render",C]]);export{O as __pageData,I as default};
