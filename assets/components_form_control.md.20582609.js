import{_ as B,c as q,a as v,w as r,V as c,b as n,r as g,o as C,d as t}from"./app.c74dcb0e.js";const F={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:k,openBlock:i,createElementBlock:m}=c;function y(o,e){const p=u("qv-form");return i(),m("div",null,[k(p,{modelValue:o.config.form,"onUpdate:modelValue":e[0]||(e[0]=l=>o.config.form=l),ref:"qvFormRef",option:o.option},null,8,["modelValue","option"])])}const{defineComponent:f}=c,{reactive:a,ref:s}=c;return{render:y,...f({setup(o,{expose:e}){e();const p=s();let l=a({tabs:!0,form:{text:"\u6587\u672C",text1:0,text2:"\u6587\u672C2",text3:"\u6587\u672C3"}});const b=s({column:[{label:"\u63A7\u5236\u5668",prop:"text1",type:"radio",dicData:[{label:"\u663E\u793A",value:0},{label:"\u9690\u85CF",value:1}],control:(x,_)=>(console.log(_),x===0?{text2:{display:!0},text3:{label:"\u5185\u5BB93"}}:{text2:{display:!1},text3:{label:"\u53D1\u73B0\u6211\u53D8\u4E86"}})},{label:"\u5185\u5BB92",prop:"text2",display:!0},{label:"\u5185\u5BB93",prop:"text3"}]}),d={qvFormRef:p,config:l,option:b,reactive:a,ref:s};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}})}}()}},A='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/control.md","lastUpdated":1659029761000}',w=n("blockquote",null,[n("p",null,"\u63A7\u5236\u5176\u5B83\u5B57\u6BB5")],-1),E=n("div",null,"\u901A\u8FC7 control \u65B9\u6CD5\u5C5E\u6027\u6765\u63A7\u5236\u5176\u4ED6\u5B57\u6BB5",-1),D=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("qv-form")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("qvFormRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("qv-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token comment"},"// import type { QvOption } from 'qv-vue/types/qvue-ui'"),t(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),t(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),t(" Ref"),n("span",{class:"token operator"},"<"),t("FormInstance "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"let"),t(" config "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C'"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"text1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"text2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C2'"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"text3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C3'"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(" Ref"),n("span",{class:"token operator"},"<"),t("QvOption"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u63A7\u5236\u5668'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text1'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u663E\u793A'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9690\u85CF'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token function-variable function"},"control"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),t(" number"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),t(" any")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
				console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token punctuation"},")"),t(`
				`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
						`),n("span",{class:"token literal-property property"},"text2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
						`),n("span",{class:"token literal-property property"},"text3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5185\u5BB93'"),t(),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"}"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
					`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
						`),n("span",{class:"token literal-property property"},"text2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
						`),n("span",{class:"token literal-property property"},"text3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u53D1\u73B0\u6211\u53D8\u4E86'"),t(),n("span",{class:"token punctuation"},"}"),t(`
					`),n("span",{class:"token punctuation"},"}"),t(`
				`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5185\u5BB92'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5185\u5BB93'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text3'"),t(),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"as"),t(" QvOption"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function R(u,k,i,m,y,f){const a=g("render-demo-0"),s=g("demo");return C(),q("div",null,[w,v(s,{sourceCode:`<template>
	<qv-form v-model="config.form" ref="qvFormRef" :option="option"> </qv-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
// import type { QvOption } from 'qv-vue/types/qvue-ui'
// import type { FormInstance } from 'qv-vue'
// import type { Ref } from 'vue'
const qvFormRef: Ref<FormInstance | undefined> = ref()

let config = reactive({
	tabs: true,
	form: {
		text: '\u6587\u672C',
		text1: 0,
		text2: '\u6587\u672C2',
		text3: '\u6587\u672C3'
	}
})
const option: Ref<QvOption> = ref({
	column: [
		{
			label: '\u63A7\u5236\u5668',
			prop: 'text1',
			type: 'radio',
			dicData: [
				{ label: '\u663E\u793A', value: 0 },
				{ label: '\u9690\u85CF', value: 1 }
			],
			control: (val: number, form: any) => {
				console.log(form)
				if (val === 0) {
					return {
						text2: { display: true },
						text3: { label: '\u5185\u5BB93' }
					}
				} else {
					return {
						text2: { display: false },
						text3: { label: '\u53D1\u73B0\u6211\u53D8\u4E86' }
					}
				}
			}
		},
		{ label: '\u5185\u5BB92', prop: 'text2', display: true },
		{ label: '\u5185\u5BB93', prop: 'text3' }
	]
} as QvOption)
<\/script>
`},{description:r(()=>[E]),highlight:r(()=>[D]),default:r(()=>[v(a)]),_:1})])}var O=B(F,[["render",R]]);export{A as __pageData,O as default};
