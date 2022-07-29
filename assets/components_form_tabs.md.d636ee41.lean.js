import{_ as P,e as R,r as F,o as T,c as N,a as x,w as B,V as g,b as n,d as s}from"./app.c086cfa3.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:y,resolveComponent:l,withCtx:r,createVNode:k,createElementVNode:p,openBlock:E,createElementBlock:i}=g,m=y("\u8F6C\u5316"),h=p("br",null,null,-1),q=p("br",null,null,-1),A=p("span",null,"\u81EA\u5B9A\u4E49\u8868\u5934",-1);function w(t,o){const d=l("el-button"),e=l("qv-form");return E(),i("div",null,[p("div",null,[k(d,{onClick:o[0]||(o[0]=u=>t.tabs=!t.tabs)},{default:r(()=>[m]),_:1}),h,q,k(e,{modelValue:t.config.form,"onUpdate:modelValue":o[1]||(o[1]=u=>t.config.form=u),onTabClick:t.handleTabClick,ref:"qvFormRef",option:t.option,onSubmit:t.submit},{"group1-header":r(()=>[A]),_:1},8,["modelValue","onTabClick","option","onSubmit"])])])}const{defineComponent:M}=g,{reactive:b,ref:c,onMounted:v}=g;return{render:w,...M({setup(t,{expose:o}){o();const d=c(),e=c();v(()=>{R(()=>import("./app.c086cfa3.js").then(function(a){return a.m}),[]).then(a=>{e.value=a})});let u=b({form:{text:"\u6587\u672C",text1:"\u6587\u672C1",text2:"\u6587\u672C2",text3:"\u6587\u672C3"}});const C=c(!0),D=c({tabs:C,tabsActive:"2",column:[{label:"\u5185\u5BB91",prop:"text1"}],group:[{icon:"Search",label:"\u5206\u7EC41",prop:"group1",column:[{label:"\u5185\u5BB91",prop:"text1"}]},{icon:"Info",label:"\u5206\u7EC42",prop:"group2",column:[{label:"\u9009\u9879\u53612",prop:"text2"},{label:"\u9009\u9879\u53613",prop:"text3"}]}]}),_={qvFormRef:d,ElementPlus:e,config:u,tabs:C,option:D,submit:(a,f)=>{const{ElMessage:V}=e.value;console.log("\u8FC7\u6EE4\u6570\u636E--",a),f(),V.success("\u5F53\u524D\u6570\u636E"+JSON.stringify(u.form))},handleTabClick:a=>{const{ElMessage:f}=e.value;f.success("\u5E8F\u53F7\u4E3A:"+a.index)},reactive:b,ref:c,onMounted:v};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}})}}()}},L='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/tabs.md","lastUpdated":1659029761000}',S=n("blockquote",null,[n("p",null,"\u9009\u9879\u5361\u5C55\u793A")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tabs = !tabs"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u8F6C\u5316"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-form")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.form"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@tab-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleTabClick"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("qvFormRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#group1-header"),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("\u81EA\u5B9A\u4E49\u8868\u5934"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-form")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// import type { QvOption } from 'qv-vue/types/qvue-ui'"),s(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),s(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue'"),s(`
`),n("span",{class:"token comment"},"// import { ElMessage } from 'element-plus'"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("FormInstance "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6587\u672C'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"text1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6587\u672C1'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"text2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6587\u672C2'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"text3"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6587\u672C3'"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" tabs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("QvOption"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),s(" tabs"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u662F\u5426\u5F00\u542F\u9009\u9879\u5361"),s(`
	`),n("span",{class:"token literal-property property"},"tabsActive"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u9ED8\u8BA4\u9009\u4E2D\u5206\u7EC42->\u8FD9\u91CC\u76842\u662F\u7B97option\u4E2D\u7684column\u4E0B\u6807\uFF0C\u5206\u7EC42 \u521A\u597D\u662F\u7B2C\u4E09\u4E2A\u6240\u4EE5\u4E0B\u6807\u4E3A 2"),s(`
	`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5185\u5BB91'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7EC41'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'group1'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5185\u5BB91'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Info'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7EC42'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'group2'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u53612'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text2'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u53613'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text3'"),s(),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"as"),s(" QvOption"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8FC7\u6EE4\u6570\u636E--'"),n("span",{class:"token punctuation"},","),s(" form"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5F53\u524D\u6570\u636E'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("form"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleTabClick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5E8F\u53F7\u4E3A:'"),s(),n("span",{class:"token operator"},"+"),s(" tabs"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function Q(y,l,r,k,p,E){const i=F("render-demo-0"),m=F("demo");return T(),N("div",null,[S,x(m,{sourceCode:`<template>
	<div>
		<el-button @click="tabs = !tabs">\u8F6C\u5316</el-button><br /><br />
		<qv-form v-model="config.form" @tab-click="handleTabClick" ref="qvFormRef" :option="option" @submit="submit">
			<template #group1-header>
				<span>\u81EA\u5B9A\u4E49\u8868\u5934</span>
			</template>
		</qv-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
// import type { QvOption } from 'qv-vue/types/qvue-ui'
// import type { FormInstance } from 'qv-vue'
// import type { Ref } from 'vue'
// import { ElMessage } from 'element-plus'

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
const tabs = ref(true)
const option: Ref<QvOption> = ref({
	tabs: tabs, //\u662F\u5426\u5F00\u542F\u9009\u9879\u5361
	tabsActive: '2', //\u9ED8\u8BA4\u9009\u4E2D\u5206\u7EC42->\u8FD9\u91CC\u76842\u662F\u7B97option\u4E2D\u7684column\u4E0B\u6807\uFF0C\u5206\u7EC42 \u521A\u597D\u662F\u7B2C\u4E09\u4E2A\u6240\u4EE5\u4E0B\u6807\u4E3A 2
	column: [{ label: '\u5185\u5BB91', prop: 'text1' }],
	group: [
		{
			icon: 'Search',
			label: '\u5206\u7EC41',
			prop: 'group1',
			column: [{ label: '\u5185\u5BB91', prop: 'text1' }]
		},
		{
			icon: 'Info',
			label: '\u5206\u7EC42',
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
const handleTabClick = (tabs: any) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u5E8F\u53F7\u4E3A:' + tabs.index)
}
<\/script>
`},{highlight:B(()=>[I]),default:B(()=>[x(i)]),_:1})])}var z=P(O,[["render",Q]]);export{L as __pageData,z as default};
