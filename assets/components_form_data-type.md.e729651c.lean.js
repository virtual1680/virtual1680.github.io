import{_ as F,r as g,o as B,c as C,d as v,w as f,V as l,e as n,f as a}from"./app.f52f2e58.js";const _={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:u,openBlock:k,createElementBlock:i}=l;function y(e,o){const p=c("qv-form");return k(),i("div",null,[u(p,{modelValue:e.config.form,"onUpdate:modelValue":o[0]||(o[0]=r=>e.config.form=r),ref:"qvFormRef",option:e.option},null,8,["modelValue","option"])])}const{defineComponent:m}=l,{reactive:t,ref:s}=l;return{render:y,...m({setup(e,{expose:o}){o();const p=s();let r=t({form:{cascader:"1,2",province:12e4,radio:1,checkbox:"1,2,3",selects:"1,2,3"}}),d="https://cli.avuejs.com/api/area";const E=s({column:[{label:"\u5355\u9009",prop:"radio",type:"radio",dataType:"number",dicData:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3}]},{label:"\u591A\u9009",prop:"checkbox",type:"checkbox",dataType:"number",dicData:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3}]},{label:"\u591A\u9009",prop:"selects",type:"select",multiple:!0,dicData:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}]},{label:"\u7EA7\u8054",prop:"cascader",type:"cascader",dataType:"number",dicData:[{label:"\u7EA7\u522B1",value:1,children:[{label:"\u7EA7\u522B2",value:2}]}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7EA7\u8054",trigger:"blur"}]},{label:"\u7701\u4EFD",prop:"province",type:"select",dataType:"number",props:{label:"name",value:"code"},dicUrl:`${d}/getProvince?time=789`,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7701\u4EFD",trigger:"blur"}]}]}),b={qvFormRef:p,config:r,baseUrl:d,option:E,reactive:t,ref:s};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}})}}()}},x='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/data-type.md","lastUpdated":1658992381000}',q=n("blockquote",null,[n("p",null,"\u6570\u636E\u7C7B\u578B \u6709\u4E9B\u6570\u636E\u662F\u6570\u7EC4\u5F62\u5F0F\u7684\uFF0C\u6211\u4EEC\u4F20\u5165\u5B57\u7B26\u4E32\u662F\u65E0\u6CD5\u8BC6\u522B\u7684\uFF0C\u89E3\u51B3\u6570\u636E\u5B57\u5178\u548C\u5B57\u6BB5\u7C7B\u578B\u4E0D\u5339\u914D\u95EE\u9898,\u914D\u7F6E dataType \u5C5E\u6027(string / number)")],-1),D=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("qv-form")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("config.form"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("qvFormRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("qv-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token comment"},"// import type { QvOption } from 'qv-vue/types/qvue-ui'"),a(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),a(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue'"),a(`
`),n("span",{class:"token comment"},"// import { ElMessage } from 'element-plus'"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),a(" Ref"),n("span",{class:"token operator"},"<"),a("FormInstance "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"let"),a(" config "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token literal-property property"},"cascader"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1,2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"//\u8FD9\u91CC\u5B9E\u9645\u6211\u4EEC\u9700\u8981\u7684\u662F\u6570\u7EC4number[1,2],\u4F46\u662F\u6211\u4EEC\u4F20\u7684\u662F\u5B57\u7B26\u4E32 \u8FD9\u5C31\u9700\u8981\u8BBE\u7F6E dataType: 'number',\u5185\u90E8\u8F6C\u6362"),a(`
		`),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"120000"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"radio"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"checkbox"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1,2,3'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// \u540C\u7406"),a(`
		`),n("span",{class:"token literal-property property"},"selects"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1,2,3'"),a(),n("span",{class:"token comment"},"// \u540C\u7406"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"let"),a(" baseUrl "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'https://cli.avuejs.com/api/area'"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),a(" Ref"),n("span",{class:"token operator"},"<"),a("QvOption"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
		`),n("span",{class:"token punctuation"},"{"),a(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5355\u9009'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dataType"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98791'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98792'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98793'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),a(),n("span",{class:"token punctuation"},"}"),a(`
			`),n("span",{class:"token punctuation"},"]"),a(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token punctuation"},"{"),a(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u591A\u9009'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dataType"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98791'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98792'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98793'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),a(),n("span",{class:"token punctuation"},"}"),a(`
			`),n("span",{class:"token punctuation"},"]"),a(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token punctuation"},"{"),a(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u591A\u9009'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'selects'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"multiple"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token comment"},"// dataType: 'string',"),a(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98791'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98792'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9009\u98793'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),a(),n("span",{class:"token punctuation"},"}"),a(`
			`),n("span",{class:"token punctuation"},"]"),a(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token punctuation"},"{"),a(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EA7\u8054'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dataType"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
				`),n("span",{class:"token punctuation"},"{"),a(`
					`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EA7\u522B1'"),n("span",{class:"token punctuation"},","),a(`
					`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
					`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EA7\u522B2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
				`),n("span",{class:"token punctuation"},"}"),a(`
			`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u7EA7\u8054'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token punctuation"},"{"),a(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7701\u4EFD'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'province'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dataType"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'code'"),a(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("baseUrl"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/getProvince?time=789"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
				`),n("span",{class:"token punctuation"},"{"),a(`
					`),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
					`),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u7701\u4EFD'"),n("span",{class:"token punctuation"},","),a(`
					`),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),a(`
				`),n("span",{class:"token punctuation"},"}"),a(`
			`),n("span",{class:"token punctuation"},"]"),a(`
		`),n("span",{class:"token punctuation"},"}"),a(`
	`),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"as"),a(" QvOption"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function h(c,u,k,i,y,m){const t=g("render-demo-0"),s=g("demo");return B(),C("div",null,[q,v(s,{sourceCode:`<template>
	<qv-form v-model="config.form" ref="qvFormRef" :option="option"> </qv-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
// import type { QvOption } from 'qv-vue/types/qvue-ui'
// import type { FormInstance } from 'qv-vue'
// import type { Ref } from 'vue'
// import { ElMessage } from 'element-plus'

const qvFormRef: Ref<FormInstance | undefined> = ref()

let config = reactive({
	form: {
		cascader: '1,2', //\u8FD9\u91CC\u5B9E\u9645\u6211\u4EEC\u9700\u8981\u7684\u662F\u6570\u7EC4number[1,2],\u4F46\u662F\u6211\u4EEC\u4F20\u7684\u662F\u5B57\u7B26\u4E32 \u8FD9\u5C31\u9700\u8981\u8BBE\u7F6E dataType: 'number',\u5185\u90E8\u8F6C\u6362
		province: 120000,
		radio: 1,
		checkbox: '1,2,3', // \u540C\u7406
		selects: '1,2,3' // \u540C\u7406
	}
})
let baseUrl = 'https://cli.avuejs.com/api/area'
const option: Ref<QvOption> = ref({
	column: [
		{
			label: '\u5355\u9009',
			prop: 'radio',
			type: 'radio',
			dataType: 'number',
			dicData: [
				{ label: '\u9009\u98791', value: 1 },
				{ label: '\u9009\u98792', value: 2 },
				{ label: '\u9009\u98793', value: 3 }
			]
		},
		{
			label: '\u591A\u9009',
			prop: 'checkbox',
			type: 'checkbox',
			dataType: 'number',
			dicData: [
				{ label: '\u9009\u98791', value: 1 },
				{ label: '\u9009\u98792', value: 2 },
				{ label: '\u9009\u98793', value: 3 }
			]
		},
		{
			label: '\u591A\u9009',
			prop: 'selects',
			type: 'select',
			multiple: true,
			// dataType: 'string',
			dicData: [
				{ label: '\u9009\u98791', value: '1' },
				{ label: '\u9009\u98792', value: '2' },
				{ label: '\u9009\u98793', value: '3' }
			]
		},
		{
			label: '\u7EA7\u8054',
			prop: 'cascader',
			type: 'cascader',
			dataType: 'number',
			dicData: [
				{
					label: '\u7EA7\u522B1',
					value: 1,
					children: [{ label: '\u7EA7\u522B2', value: 2 }]
				}
			],
			rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u7EA7\u8054', trigger: 'blur' }]
		},
		{
			label: '\u7701\u4EFD',
			prop: 'province',
			type: 'select',
			dataType: 'number',
			props: {
				label: 'name',
				value: 'code'
			},
			dicUrl: \`\${baseUrl}/getProvince?time=789\`,
			rules: [
				{
					required: true,
					message: '\u8BF7\u9009\u62E9\u7701\u4EFD',
					trigger: 'blur'
				}
			]
		}
	]
} as QvOption)
<\/script>
`},{highlight:f(()=>[D]),default:f(()=>[v(t)]),_:1})])}var R=F(_,[["render",h]]);export{x as __pageData,R as default};
