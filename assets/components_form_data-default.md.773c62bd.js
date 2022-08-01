import{_ as F,r as v,o as D,c as x,a as _,w as y,V as r,b as n,d as t}from"./app.2554123b.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:u,openBlock:i,createElementBlock:k}=r;function m(o,e){const c=l("qv-form");return i(),k("div",null,[u(c,{modelValue:o.config.form,"onUpdate:modelValue":e[0]||(e[0]=p=>o.config.form=p),ref:"qvFormRef",option:o.option},null,8,["modelValue","option"])])}const{defineComponent:f}=r,{reactive:s,ref:a,computed:d}=r;return{render:m,...f({setup(o,{expose:e}){e();const c=a();let p=s({form:{text:""}});const q=d(()=>({column:[{label:"\u59D3\u540D",prop:"text",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}]}]}));p.form.text="9090909";const g={qvFormRef:c,config:p,option:q,reactive:s,ref:a,computed:d};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}})}}()}},C='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/data-default.md","lastUpdated":1658992381000}',B=n("blockquote",null,[n("p",null,"\u6570\u636E\u9ED8\u8BA4\u503C")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("qv-form")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("qvFormRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("qv-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" computed "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),t(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),t(" Ref"),n("span",{class:"token operator"},"<"),t("FormInstance "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"let"),t(" config "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" option "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
			`),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"]"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
config`),n("span",{class:"token punctuation"},"."),t("form"),n("span",{class:"token punctuation"},"."),t("text "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'9090909'"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function V(l,u,i,k,m,f){const s=v("render-demo-0"),a=v("demo");return D(),x("div",null,[B,_(a,{sourceCode:`<template>
	<qv-form v-model="config.form" ref="qvFormRef" :option="option"> </qv-form>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
// import type { FormInstance } from 'qv-vue'
// import type { Ref } from 'vue'
const qvFormRef: Ref<FormInstance | undefined> = ref()
let config = reactive({
	form: {
		text: ''
	}
})
const option = computed(() => {
	return {
		column: [
			{
				label: '\u59D3\u540D',
				prop: 'text',
				rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D', trigger: 'blur' }]
			}
		]
	}
})
config.form.text = '9090909'
<\/script>
`},{highlight:y(()=>[R]),default:y(()=>[_(s)]),_:1})])}var E=F(b,[["render",V]]);export{C as __pageData,E as default};
