import{_ as v,r as g,o as y,c as D,a as _,w as p,V as c,b as n,d as t}from"./app.c086cfa3.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:u,openBlock:r,createElementBlock:i}=c;function k(s,o){const f=l("qv-form");return r(),i("div",null,[u(f,{modelValue:s.config.form,"onUpdate:modelValue":o[0]||(o[0]=e=>s.config.form=e),option:s.config.option},null,8,["modelValue","option"])])}const{defineComponent:m}=c,{reactive:a}=c;return{render:k,...m({setup(s,{expose:o}){o();const e={config:a({form:{},option:{column:[{label:"\u59D3\u540D",prop:"name",tip:"\u6211\u662F\u59D3\u540D",labelTip:"\u6211\u662Flabel"}]}}),reactive:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}})}}()}},F='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/tip.md","lastUpdated":1659029761000}',B=n("blockquote",null,[n("p",null,"\u8F85\u52A9\u63D0\u793A\u8BED")],-1),q=n("div",null,"\u901A\u8FC7 tip\u3001labelTip \u8BBE\u7F6E\u63D0\u793A\u8BED",-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("qv-form")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("qv-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"let"),t(" config "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
	`),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"tip"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6211\u662F\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"labelTip"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6211\u662Flabel'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"as"),t(` QvOption
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function h(l,u,r,i,k,m){const a=g("render-demo-0"),d=g("demo");return y(),D("div",null,[B,_(d,{sourceCode:`<template>
	<qv-form v-model="config.form" :option="config.option"></qv-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

let config = reactive({
	form: {},
	option: {
		column: [{ label: '\u59D3\u540D', prop: 'name', tip: '\u6211\u662F\u59D3\u540D', labelTip: '\u6211\u662Flabel' }]
	} as QvOption
})
<\/script>
`},{description:p(()=>[q]),highlight:p(()=>[V]),default:p(()=>[_(a)]),_:1})])}var C=v(b,[["render",h]]);export{F as __pageData,C as default};
