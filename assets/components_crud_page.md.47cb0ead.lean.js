import{_ as D,e as w,c as B,a as b,w as P,V as i,b as n,r as x,o as M,d as a}from"./app.2e64142b.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:g,createVNode:d,createElementVNode:m,openBlock:f,createElementBlock:y}=i;function v(e,c){const o=g("qv-crud");return f(),y("div",null,[m("div",null,[d(o,{data:e.config.data,option:e.option,page:e.config.page,"onUpdate:page":c[0]||(c[0]=s=>e.config.page=s),onSizeChange:e.sizeChange,onCurrentChange:e.currentChange,onOnLoad:e.onLoad},null,8,["data","option","page","onSizeChange","onCurrentChange","onOnLoad"])])])}const{defineComponent:u}=i,{reactive:p,computed:E,ref:h,onMounted:_,nextTick:l}=i;return{render:v,...u({setup(e,{expose:c}){c();const o=h();_(()=>{w(()=>import("./app.2e64142b.js").then(function(t){return t.ao}),[]).then(t=>{o.value=t})});let s=p({page:{currentPage:1,total:4,pageSize:10},data:[]});const z=E(()=>({align:"center",menuAlign:"center",height:300,column:[{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"sex"}]})),r=()=>{s.page.total=4,s.page.currentPage===1?s.data=[{id:1,name:"\u5F20\u4E09",sex:"\u7537"},{id:2,name:"\u674E\u56DB",sex:"\u5973"}]:s.page.currentPage==2&&(s.data=[{id:3,name:"\u738B\u4E94",sex:"\u5973"},{id:4,name:"\u8D75\u516D",sex:"\u5973"}])},C={ElementPlus:o,config:s,option:z,onLoad:r,sizeChange:t=>{s.page.currentPage=1,s.page.pageSize=t,r(),l(()=>{const{ElMessage:k}=o.value;k.success("\u884C\u6570"+t)})},currentChange:t=>{s.page.currentPage=t,r(),l(()=>{const{ElMessage:k}=o.value;k.success("\u9875\u7801"+t)})},reactive:p,computed:E,ref:h,onMounted:_,nextTick:l};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}})}}()}},$='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/crud/page.md","lastUpdated":1659102658000}',L=n("blockquote",null,[n("p",null,"\u5206\u9875")],-1),S=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"page \u53C2\u6570\u4E0E element-plus \u662F\u4E00\u81F4\u7684"),n("p",null,[n("a",{href:"https://element-plus.org/zh-CN/component/pagination.html",target:"_blank",rel:"noopener noreferrer"},"https://element-plus.org/zh-CN/component/pagination.html")])],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("qv-crud")]),a(`
			`),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("config.data"),n("span",{class:"token punctuation"},'"')]),a(`
			`),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("option"),n("span",{class:"token punctuation"},'"')]),a(`
			`),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("page")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("config.page"),n("span",{class:"token punctuation"},'"')]),a(`
			`),n("span",{class:"token attr-name"},"@size-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sizeChange"),n("span",{class:"token punctuation"},'"')]),a(`
			`),n("span",{class:"token attr-name"},"@current-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("currentChange"),n("span",{class:"token punctuation"},'"')]),a(`
			`),n("span",{class:"token attr-name"},"@on-load"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onLoad"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("qv-crud")]),n("span",{class:"token punctuation"},">")]),a(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" computed"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted"),n("span",{class:"token punctuation"},","),a(" nextTick "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" ElementPlus "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"let"),a(" config "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token literal-property property"},"page"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token literal-property property"},"currentPage"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"total"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"//\u5982\u679Ctotal\u4E3A0\u5219\u4E0D\u663E\u793A\u5206\u9875\u7EC4\u4EF6"),a(`
		`),n("span",{class:"token comment"},"// pagerCount:6,"),a(`
		`),n("span",{class:"token comment"},"// layout: 'total,pager,prev, next',"),a(`
		`),n("span",{class:"token comment"},"// background: true,"),a(`
		`),n("span",{class:"token literal-property property"},"pageSize"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"10"),a(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" option "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"menuAlign"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),a(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'sex'"),a(`
			`),n("span",{class:"token punctuation"},"}"),a(`
		`),n("span",{class:"token punctuation"},"]"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onLoad"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
	config`),n("span",{class:"token punctuation"},"."),a("page"),n("span",{class:"token punctuation"},"."),a("total "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"4"),a(`
	`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("config"),n("span",{class:"token punctuation"},"."),a("page"),n("span",{class:"token punctuation"},"."),a("currentPage "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
		config`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7537'"),a(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u674E\u56DB'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5973'"),a(`
			`),n("span",{class:"token punctuation"},"}"),a(`
		`),n("span",{class:"token punctuation"},"]"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("config"),n("span",{class:"token punctuation"},"."),a("page"),n("span",{class:"token punctuation"},"."),a("currentPage "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
		config`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u738B\u4E94'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5973'"),a(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D75\u516D'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5973'"),a(`
			`),n("span",{class:"token punctuation"},"}"),a(`
		`),n("span",{class:"token punctuation"},"]"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"sizeChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),a(" number")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
	config`),n("span",{class:"token punctuation"},"."),a("page"),n("span",{class:"token punctuation"},"."),a("currentPage "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"1"),a(`
	config`),n("span",{class:"token punctuation"},"."),a("page"),n("span",{class:"token punctuation"},"."),a("pageSize "),n("span",{class:"token operator"},"="),a(` val
	`),n("span",{class:"token function"},"onLoad"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
	`),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" ElMessage "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" ElementPlus"),n("span",{class:"token punctuation"},"."),a(`value
		ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u884C\u6570'"),a(),n("span",{class:"token operator"},"+"),a(" val"),n("span",{class:"token punctuation"},")"),a(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"currentChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),a(" number")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
	config`),n("span",{class:"token punctuation"},"."),a("page"),n("span",{class:"token punctuation"},"."),a("currentPage "),n("span",{class:"token operator"},"="),a(` val
	`),n("span",{class:"token function"},"onLoad"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
	`),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" ElMessage "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" ElementPlus"),n("span",{class:"token punctuation"},"."),a(`value
		ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u9875\u7801'"),a(),n("span",{class:"token operator"},"+"),a(" val"),n("span",{class:"token punctuation"},")"),a(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function V(g,d,m,f,y,v){const u=x("render-demo-0"),p=x("demo");return M(),B("div",null,[L,S,b(p,{sourceCode:`<template>
	<div>
		<qv-crud
			:data="config.data"
			:option="option"
			v-model:page="config.page"
			@size-change="sizeChange"
			@current-change="currentChange"
			@on-load="onLoad">
		</qv-crud>
	</div>
</template>

<script lang="ts" setup>
import { reactive, computed, ref, onMounted, nextTick } from 'vue'

const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})

let config = reactive({
	page: {
		currentPage: 1,
		total: 4, //\u5982\u679Ctotal\u4E3A0\u5219\u4E0D\u663E\u793A\u5206\u9875\u7EC4\u4EF6
		// pagerCount:6,
		// layout: 'total,pager,prev, next',
		// background: true,
		pageSize: 10
	},
	data: []
})

const option = computed(() => {
	return {
		align: 'center',
		menuAlign: 'center',
		height: 300,
		column: [
			{
				label: '\u59D3\u540D',
				prop: 'name'
			},
			{
				label: '\u6027\u522B',
				prop: 'sex'
			}
		]
	}
})
const onLoad = () => {
	config.page.total = 4
	if (config.page.currentPage === 1) {
		config.data = [
			{
				id: 1,
				name: '\u5F20\u4E09',
				sex: '\u7537'
			},
			{
				id: 2,
				name: '\u674E\u56DB',
				sex: '\u5973'
			}
		]
	} else if (config.page.currentPage == 2) {
		config.data = [
			{
				id: 3,
				name: '\u738B\u4E94',
				sex: '\u5973'
			},
			{
				id: 4,
				name: '\u8D75\u516D',
				sex: '\u5973'
			}
		]
	}
}
const sizeChange = (val: number) => {
	config.page.currentPage = 1
	config.page.pageSize = val
	onLoad()
	nextTick(() => {
		const { ElMessage } = ElementPlus.value
		ElMessage.success('\u884C\u6570' + val)
	})
}
const currentChange = (val: number) => {
	config.page.currentPage = val
	onLoad()
	nextTick(() => {
		const { ElMessage } = ElementPlus.value
		ElMessage.success('\u9875\u7801' + val)
	})
}
<\/script>
`},{highlight:P(()=>[T]),default:P(()=>[b(u)]),_:1})])}var j=D(q,[["render",V]]);export{$ as __pageData,j as default};
