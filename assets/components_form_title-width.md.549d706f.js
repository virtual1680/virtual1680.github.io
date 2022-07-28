import{_ as E,r as f,o as _,c as v,a as g,w as p,V as u,b as n,d as t}from"./app.75dfeaf0.js";const y={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:l,openBlock:r,createElementBlock:i}=u;function k(s,o){const B=c("qv-form");return r(),i("div",null,[l(B,{modelValue:s.config.form,"onUpdate:modelValue":o[0]||(o[0]=e=>s.config.form=e),option:s.config.option},null,8,["modelValue","option"])])}const{defineComponent:m}=u,{reactive:a}=u;return{render:k,...m({setup(s,{expose:o}){o();const e={config:a({form:{name:"\u6211\u662F50\u7684\u5BBD\u5EA6",sex:"\u6211\u7684\u5BBD\u5EA6\u662F150"},option:{labelWidth:150,column:[{labelWidth:50,label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex"}]}}),reactive:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}})}}()}},C='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/title-width.md","lastUpdated":null}',F=n("blockquote",null,[n("p",null,"\u6807\u9898\u5B57\u6BB5\u5BBD\u5EA6")],-1),D=n("div",null,"widthLabel \u4E3A\u6807\u9898\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 110\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5230 option \u4E0B\u4F5C\u7528\u4E8E\u5168\u90E8,\u4E5F\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u6BCF\u4E00\u9879",-1),b=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("qv-form")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("qv-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"let"),t(" config "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6211\u662F50\u7684\u5BBD\u5EA6'"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6211\u7684\u5BBD\u5EA6\u662F150'"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
	`),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token comment"},"// \u6240\u6709\u5B57\u6BB5\u751F\u6548"),t(`
		`),n("span",{class:"token literal-property property"},"labelWidth"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
			`),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token comment"},"// \u5355\u4E2A\u5B57\u6BB5\u751F\u6548 \u4F18\u5148\u7EA7\u9AD8\u4E8E\u6240\u6709\u5B57\u6BB5"),t(`
				`),n("span",{class:"token literal-property property"},"labelWidth"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),t(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),t(),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"]"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function h(c,l,r,i,k,m){const a=f("render-demo-0"),d=f("demo");return _(),v("div",null,[F,g(d,{sourceCode:`<template>
	<qv-form v-model="config.form" :option="config.option"></qv-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

let config = reactive({
	form: {
		name: '\u6211\u662F50\u7684\u5BBD\u5EA6',
		sex: '\u6211\u7684\u5BBD\u5EA6\u662F150'
	},
	option: {
		// \u6240\u6709\u5B57\u6BB5\u751F\u6548
		labelWidth: 150,
		column: [
			{
				// \u5355\u4E2A\u5B57\u6BB5\u751F\u6548 \u4F18\u5148\u7EA7\u9AD8\u4E8E\u6240\u6709\u5B57\u6BB5
				labelWidth: 50,
				label: '\u59D3\u540D',
				prop: 'name'
			},
			{ label: '\u6027\u522B', prop: 'sex' }
		]
	}
})
<\/script>
`},{description:p(()=>[D]),highlight:p(()=>[b]),default:p(()=>[g(a)]),_:1})])}var x=E(y,[["render",h]]);export{C as __pageData,x as default};
