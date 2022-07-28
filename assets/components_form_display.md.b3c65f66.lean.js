import{_ as C,r as h,o as E,c as b,d as w,w as r,V as i,e as n,f as s}from"./app.f52f2e58.js";const F={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:k,createTextVNode:m,resolveComponent:e,withCtx:d,createVNode:p,openBlock:f,createElementBlock:c}=i;function l(t,o){const a=e("el-button"),u=e("qv-form");return f(),c("div",null,[p(a,{onClick:t.change},{default:d(()=>[m(k(t.show?"\u9690\u85CF":"\u663E\u793A"),1)]),_:1},8,["onClick"]),p(u,{modelValue:t.config.form,"onUpdate:modelValue":o[0]||(o[0]=y=>t.config.form=y),option:t.config.option},null,8,["modelValue","option"])])}const{defineComponent:B}=i,{reactive:g,ref:_}=i;return{render:l,...B({setup(t,{expose:o}){o();const a=_(!1);let u=g({form:{},option:{column:[{label:"\u59D3\u540D",prop:"name",span:8},{label:"\u5BC6\u7801",prop:"password",type:"password",display:a}]}});const v={show:a,config:u,change:()=>{a.value=!a.value},reactive:g,ref:_};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}})}}()}},S='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/display.md","lastUpdated":1658992381000}',D=n("blockquote",null,[n("p",null,"\u9690\u85CF\u5B57\u6BB5")],-1),V=n("div",null,"\u5BF9\u5E94\u7684\u5B57\u6BB5\u914D\u7F6E display \u4E3A false \u5373\u53EF\u9690\u85CF",-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("change"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ show ? '\u9690\u85CF' : '\u663E\u793A' }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-form")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.form"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-form")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"const"),s(" show "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),s(" show "),n("span",{class:"token comment"},"//\u5BF9\u5E94\u7684\u5B57\u6BB5\u914D\u7F6E display \u4E3A false \u5373\u53EF\u9690\u85CF"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"change"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	show`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("show"),n("span",{class:"token punctuation"},"."),s(`value
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function x(k,m,e,d,p,f){const c=h("render-demo-0"),l=h("demo");return E(),b("div",null,[D,w(l,{sourceCode:`<template>
	<el-button @click="change">{{ show ? '\u9690\u85CF' : '\u663E\u793A' }}</el-button>
	<qv-form v-model="config.form" :option="config.option"></qv-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const show = ref(false)
let config = reactive({
	form: {},
	option: {
		column: [
			{ label: '\u59D3\u540D', prop: 'name', span: 8 },
			{
				label: '\u5BC6\u7801',
				prop: 'password',
				type: 'password',
				display: show //\u5BF9\u5E94\u7684\u5B57\u6BB5\u914D\u7F6E display \u4E3A false \u5373\u53EF\u9690\u85CF
			}
		]
	}
})
const change = () => {
	show.value = !show.value
}
<\/script>
`},{description:r(()=>[V]),highlight:r(()=>[q]),default:r(()=>[w(c)]),_:1})])}var $=C(F,[["render",x]]);export{S as __pageData,$ as default};
