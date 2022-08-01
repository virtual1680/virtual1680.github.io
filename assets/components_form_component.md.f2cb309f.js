import{_ as C,e as D,c as L,a as f,w as u,V as r,b as n,r as h,o as A,d as s}from"./app.c74dcb0e.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:k,createVNode:i,openBlock:m,createElementBlock:d}=r;function v(p,l){const t=k("qv-form");return m(),d("div",null,[i(t,{ref:"form",modelValue:p.config.obj,"onUpdate:modelValue":l[0]||(l[0]=c=>p.config.obj=c),option:p.option},null,8,["modelValue","option"])])}const{defineComponent:y}=r,{computed:e,reactive:o,onMounted:E,ref:b}=r;return{render:v,...y({setup(p,{expose:l}){l();const t=b();E(()=>{D(()=>import("./app.c74dcb0e.js").then(function(a){return a.au}),[]).then(a=>{t.value=a})});const c={VAILD:[{label:"\u771F",value:"true"},{label:"\u5047",value:"false"}],SEX:[{label:"\u7537",value:0},{label:"\u5973",value:1}]};let B=o({obj:{}});const _=e(()=>({column:[{label:"\u59D3\u540D",prop:"name"},{label:"\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6",labelWidth:120,prop:"divider",component:"elTree",span:24,event:{"node-click":a=>{const{ElMessage:F}=t.value;F.success("\u70B9\u5230"+a.label+"\u4E86")}},params:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]}]}},{label:"",labelWidth:40,prop:"divider",component:"elDivider",span:24,event:{click:()=>{const{ElMessage:a}=t.value;a.success("\u70B9\u51FB\u65B9\u6CD5")}},params:{html:'<h4 style="color:red">\u81EA\u5B9A\u4E49html\u6807\u7B7E,\u70B9\u6211\u89E6\u53D1\u65B9\u6CD5</h4>',contentPosition:"left"}}]})),g={ElementPlus:t,DIC1:c,config:B,option:_,computed:e,reactive:o,onMounted:E,ref:b};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}})}}()}},Q='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/component.md","lastUpdated":1659029761000}',P=n("blockquote",null,[n("p",null,"\u5F15\u5165\u4E09\u65B9\u7EC4\u4EF6")],-1),V=n("div",null,"\u901A\u8FC7\u8BBE\u7F6E component \u6765\u52A0\u8F7D\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0Cevent \u6DFB\u52A0\u7EC4\u4EF6\u4E8B\u4EF6\uFF0Cparams \u6DFB\u52A0\u7EC4\u4EF6\u6240\u9700\u53C2\u6570",-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
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

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"DIC1"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token constant"},"VAILD"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u771F'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'true'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5047'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'false'"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token constant"},"SEX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"obj"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" option "),n("span",{class:"token operator"},"="),s(" computed"),n("span",{class:"token operator"},"<"),s("QvOption"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"QvOption"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"labelWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'divider'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elTree'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//ele\u6811"),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"event"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token comment"},"//\u7EC4\u4EF6\u4E8B\u4EF6"),s(`
					`),n("span",{class:"token string-property property"},"'node-click'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"node"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
						ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u70B9\u5230'"),s(),n("span",{class:"token operator"},"+"),s(" node"),n("span",{class:"token punctuation"},"."),s("label "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'\u4E86'"),n("span",{class:"token punctuation"},")"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token comment"},"// \u7EC4\u4EF6\u9700\u8981\u7ED1\u5B9A\u7684\u6570\u636E"),s(`
					`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level one 1'"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
								`),n("span",{class:"token punctuation"},"{"),s(`
									`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level two 1-1'"),n("span",{class:"token punctuation"},","),s(`
									`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level three 1-1-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
								`),n("span",{class:"token punctuation"},"}"),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level one 2'"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
								`),n("span",{class:"token punctuation"},"{"),s(`
									`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level two 2-1'"),n("span",{class:"token punctuation"},","),s(`
									`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level three 2-1-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
								`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
								`),n("span",{class:"token punctuation"},"{"),s(`
									`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level two 2-2'"),n("span",{class:"token punctuation"},","),s(`
									`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level three 2-2-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
								`),n("span",{class:"token punctuation"},"}"),s(`
							`),n("span",{class:"token punctuation"},"]"),s(`
						`),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"labelWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'divider'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elDivider'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//ele\u5206\u5272\u7EBF"),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"event"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token function-variable function"},"click"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
						ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u70B9\u51FB\u65B9\u6CD5'"),n("span",{class:"token punctuation"},")"),s(`
					`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token literal-property property"},"html"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`'<h4 style="color:red">\u81EA\u5B9A\u4E49html\u6807\u7B7E,\u70B9\u6211\u89E6\u53D1\u65B9\u6CD5</h4>'`),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token literal-property property"},"contentPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function M(k,i,m,d,v,y){const e=h("render-demo-0"),o=h("demo");return A(),L("div",null,[P,f(o,{sourceCode:`<template>
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

const DIC1 = {
	VAILD: [
		{ label: '\u771F', value: 'true' },
		{ label: '\u5047', value: 'false' }
	],
	SEX: [
		{ label: '\u7537', value: 0 },
		{ label: '\u5973', value: 1 }
	]
}
let config = reactive({
	obj: {}
})
const option = computed<QvOption>((): QvOption => {
	return {
		column: [
			{ label: '\u59D3\u540D', prop: 'name' },
			{
				label: '\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
				labelWidth: 120,
				prop: 'divider',
				component: 'elTree', //ele\u6811
				span: 24,
				event: {
					//\u7EC4\u4EF6\u4E8B\u4EF6
					'node-click': node => {
						const { ElMessage } = ElementPlus.value
						ElMessage.success('\u70B9\u5230' + node.label + '\u4E86')
					}
				},
				params: {
					// \u7EC4\u4EF6\u9700\u8981\u7ED1\u5B9A\u7684\u6570\u636E
					data: [
						{
							label: 'Level one 1',
							children: [
								{
									label: 'Level two 1-1',
									children: [{ label: 'Level three 1-1-1' }]
								}
							]
						},
						{
							label: 'Level one 2',
							children: [
								{
									label: 'Level two 2-1',
									children: [{ label: 'Level three 2-1-1' }]
								},
								{
									label: 'Level two 2-2',
									children: [{ label: 'Level three 2-2-1' }]
								}
							]
						}
					]
				}
			},
			{
				label: '',
				labelWidth: 40,
				prop: 'divider',
				component: 'elDivider', //ele\u5206\u5272\u7EBF
				span: 24,
				event: {
					click: () => {
						const { ElMessage } = ElementPlus.value
						ElMessage.success('\u70B9\u51FB\u65B9\u6CD5')
					}
				},
				params: {
					html: '<h4 style="color:red">\u81EA\u5B9A\u4E49html\u6807\u7B7E,\u70B9\u6211\u89E6\u53D1\u65B9\u6CD5</h4>',
					contentPosition: 'left'
				}
			}
		]
	}
})
<\/script>
`},{description:u(()=>[V]),highlight:u(()=>[q]),default:u(()=>[f(e)]),_:1})])}var I=C(w,[["render",M]]);export{Q as __pageData,I as default};
