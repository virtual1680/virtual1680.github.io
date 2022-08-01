import{_ as R,e as N,c as D,a as x,w as q,V as y,b as n,r as B,o as O,d as t}from"./app.c74dcb0e.js";const M={name:"component-doc",components:{"render-demo-0":function(){const{resolveDynamicComponent:v,openBlock:i,createBlock:E,resolveComponent:e,withCtx:p,createVNode:c,toDisplayString:m,createTextVNode:g,createElementVNode:F,createElementBlock:w}=y;function h(s,o){const f=e("el-icon"),u=e("el-tag"),k=e("el-input"),d=e("qv-form");return i(),w("div",null,[F("div",null,[c(d,{modelValue:s.config.form,"onUpdate:modelValue":o[1]||(o[1]=a=>s.config.form=a),ref:"qvFormRef",option:s.option,onSubmit:s.submit},{"group1-header":p(({column:a})=>[c(f,null,{default:p(()=>[(i(),E(v(a.icon)))]),_:2},1024),c(u,null,{default:p(()=>[g(m(a.label),1)]),_:2},1024)]),text3:p(({})=>[c(k,{placeholder:"\u81EA\u5B9A\u4E49",modelValue:s.config.form.text3,"onUpdate:modelValue":o[0]||(o[0]=a=>s.config.form.text3=a)},null,8,["modelValue"])]),_:1},8,["modelValue","option","onSubmit"])])])}const{defineComponent:V}=y,{reactive:_,ref:r,onMounted:b}=y;return{render:h,...V({setup(s,{expose:o}){o();const f=r(),u=r();b(()=>{N(()=>import("./app.c74dcb0e.js").then(function(l){return l.au}),[]).then(l=>{u.value=l})});let k=_({form:{text:"\u6587\u672C",text1:"\u6587\u672C1",text2:"\u6587\u672C2",text3:"\u6587\u672C3"}});const d=r({column:[{label:"\u5185\u5BB9",prop:"text"}],group:[{icon:"Pouring",label:"\u5206\u7EC41",collapse:!0,prop:"group1",column:[{label:"\u5185\u5BB91",prop:"text1"}]},{icon:"Info",label:"\u5206\u7EC42",arrow:!1,prop:"group2",column:[{label:"\u9009\u9879\u53612",prop:"text2"},{label:"\u9009\u9879\u53613",prop:"text3"}]}]}),C={qvFormRef:f,ElementPlus:u,config:k,option:d,submit:(l,A)=>{const{ElMessage:P}=u.value;console.log("\u8FC7\u6EE4\u6570\u636E--",l),A(),P.success("\u5F53\u524D\u6570\u636E"+JSON.stringify(k.form))},reactive:_,ref:r,onMounted:b};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}})}}()}},J='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/group.md","lastUpdated":1659029761000}',S=n("blockquote",null,[n("p",null,"\u5206\u7EC4\u5C55\u793A")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("qv-form")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("qvFormRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("option"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u5206\u7EC4\u5934\u90E8 -->"),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#group1-header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ column }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-icon")]),n("span",{class:"token punctuation"},">")]),t(`
					`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("component")]),t(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("column.icon"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-icon")]),n("span",{class:"token punctuation"},">")]),t(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-tag")]),n("span",{class:"token punctuation"},">")]),t("{{ column.label }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-tag")]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u9009\u9879\u53613\u8F93\u5165\u6846 -->"),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#text3"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{}"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-input")]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u81EA\u5B9A\u4E49"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form.text3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-input")]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),t(`
		`),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("qv-form")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),t(`
`),n("span",{class:"token comment"},"// import type { QvOption } from 'qv-vue/types/qvue-ui'"),t(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),t(" Ref"),n("span",{class:"token operator"},"<"),t("FormInstance "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" ElementPlus "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"let"),t(" config "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C'"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"text1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C1'"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"text2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C2'"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token literal-property property"},"text3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C3'"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(" Ref"),n("span",{class:"token operator"},"<"),t("QvOption"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
	`),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Pouring'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5206\u7EC41'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"collapse"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u662F\u5426\u5C55\u5F00"),t(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'group1'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5185\u5BB91'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
		`),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Info'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5206\u7EC42'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"arrow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u662F\u5426\u7981\u7528\u5C55\u5F00\u5173\u95ED"),t(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'group2'"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
				`),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u53612'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text2'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u53613'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text3'"),t(),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token punctuation"},"]"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"as"),t(" QvOption"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("form"),n("span",{class:"token operator"},":"),t(" any"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" ElMessage "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" ElementPlus"),n("span",{class:"token punctuation"},"."),t(`value
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8FC7\u6EE4\u6570\u636E--'"),n("span",{class:"token punctuation"},","),t(" form"),n("span",{class:"token punctuation"},")"),t(`
	`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5F53\u524D\u6570\u636E'"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("config"),n("span",{class:"token punctuation"},"."),t("form"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function Q(v,i,E,e,p,c){const m=B("render-demo-0"),g=B("demo");return O(),D("div",null,[S,x(g,{sourceCode:`<template>
	<div>
		<qv-form v-model="config.form" ref="qvFormRef" :option="option" @submit="submit">
			<!-- \u81EA\u5B9A\u4E49\u5206\u7EC4\u5934\u90E8 -->
			<template #group1-header="{ column }">
				<el-icon>
					<component :is="column.icon" />
				</el-icon>
				<el-tag>{{ column.label }}</el-tag>
			</template>
			<!-- \u81EA\u5B9A\u4E49\u9009\u9879\u53613\u8F93\u5165\u6846 -->
			<template #text3="{}"> <el-input placeholder="\u81EA\u5B9A\u4E49" v-model="config.form.text3"></el-input> </template
		></qv-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
// import type { FormInstance } from 'qv-vue'
// import type { QvOption } from 'qv-vue/types/qvue-ui'
// import type { Ref } from 'vue'
const qvFormRef: Ref<FormInstance | undefined> = ref()

const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})

let config = reactive({
	form: {
		text: '\u6587\u672C',
		text1: '\u6587\u672C1',
		text2: '\u6587\u672C2',
		text3: '\u6587\u672C3'
	}
})
const option: Ref<QvOption> = ref({
	column: [{ label: '\u5185\u5BB9', prop: 'text' }],
	group: [
		{
			icon: 'Pouring',
			label: '\u5206\u7EC41',
			collapse: true, //\u662F\u5426\u5C55\u5F00
			prop: 'group1',
			column: [{ label: '\u5185\u5BB91', prop: 'text1' }]
		},
		{
			icon: 'Info',
			label: '\u5206\u7EC42',
			arrow: false, //\u662F\u5426\u7981\u7528\u5C55\u5F00\u5173\u95ED
			prop: 'group2',
			column: [
				{ label: '\u9009\u9879\u53612', prop: 'text2' },
				{ label: '\u9009\u9879\u53613', prop: 'text3' }
			]
		}
	]
} as QvOption)

const submit = (form: any, done: () => void) => {
	const { ElMessage } = ElementPlus.value
	console.log('\u8FC7\u6EE4\u6570\u636E--', form)
	done()
	ElMessage.success('\u5F53\u524D\u6570\u636E' + JSON.stringify(config.form))
}
<\/script>
`},{highlight:q(()=>[I]),default:q(()=>[x(m)]),_:1})])}var U=R(M,[["render",Q]]);export{J as __pageData,U as default};
