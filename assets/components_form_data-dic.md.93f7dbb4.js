import{_ as V,b as q,r as U,o as M,c as $,d as x,w as D,V as b,e as n,f as s}from"./app.f52f2e58.js";const R={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:m,resolveComponent:y,withCtx:d,createVNode:r,createElementVNode:f,openBlock:E,createElementBlock:g}=b,v=m("\u5207\u6362\u7C7B\u578B"),w=m("\u5207\u6362\u5B57\u5178\u6570\u636E");function O(e,i){const o=y("el-button"),l=y("qv-form");return E(),g("div",null,[f("div",null,[r(o,{onClick:e.updateOption},{default:d(()=>[v]),_:1},8,["onClick"]),r(o,{onClick:e.updateUrlDic},{default:d(()=>[w]),_:1},8,["onClick"]),r(l,{modelValue:e.config.form,"onUpdate:modelValue":i[0]||(i[0]=u=>e.config.form=u),ref:"qvFormRef",option:e.option,onSubmit:e.submit,onError:e.error},null,8,["modelValue","option","onSubmit","onError"])])])}const{defineComponent:P}=b,{reactive:B,ref:c,onMounted:F,nextTick:C}=b;return{render:O,...P({setup(e,{expose:i}){i();const o=c(),l=c();F(()=>{q(()=>import("./app.f52f2e58.js").then(function(a){return a.m}),[]).then(a=>{o.value=a}),q(()=>import("./app.f52f2e58.js").then(function(a){return a.n}),[]).then(a=>{l.value=a})});const u=c();let A=B({form:{name:"\u5F20\u4E09",province:"110000",city1:"110100",city2:"110100",area:"110101"}}),p="https://cli.avuejs.com/api/area";const _=c({column:[{label:"\u6743\u9650",prop:"grade",type:"select",props:{label:"name",value:"code"},dicData:[{name:"\u6709\u6743\u9650",code:1},{name:"\u65E0\u6743\u9650",code:0},{name:"\u7981\u6B62\u9879",code:-1,disabled:!0}]},{label:"get\u8BF7\u6C42",prop:"province1",type:"select",props:{label:"name",value:"code"},dicUrl:`${p}/getProvince?time=123`,dicFormatter:a=>(a.forEach(t=>{t.name=t.name+"\u5B57\u5178\u683C\u5F0F\u5316"}),a.unshift({name:"\u8FFD\u52A0\u5B57\u5178",code:-1}),a)},{label:"\u7701\u4EFD",prop:"province",type:"select",cascader:["city1","city2"],cascaderIndex:1,props:{label:"name",value:"code"},dicUrl:`${p}/getProvince?time=456`},{width:120,label:"\u57CE\u5E021",prop:"city1",type:"select",cascader:["area"],cascaderIndex:1,cell:!0,props:{label:"name",value:"code"},dicUrl:`${p}/getCity/{{key}}`,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u57CE\u5E021",trigger:"blur"}]},{width:120,label:"\u57CE\u5E022",prop:"city2",type:"select",cascaderIndex:2,cell:!0,props:{label:"name",value:"code"},dicUrl:`${p}/getCity/{{key}}`,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u57CE\u5E022",trigger:"blur"}]},{width:120,label:"\u5730\u533A",prop:"area",cell:!0,props:{label:"name",value:"code"},type:"select",dicUrl:`${p}/getArea/{{key}}?province={{province}}`,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"blur"}]},{label:"\u5B57\u5178",prop:"checkbox",span:24,type:"checkbox",dicUrl:`${p}/getProvince?time=789`,props:{label:"name",value:"code"},dicData:[{name:"\u5355\u9009\u5B57\u51781",code:1},{name:"\u5355\u9009\u5B57\u51780",code:2}]}]}),h={ElementPlus:o,QvVue:l,qvFormRef:u,config:A,baseUrl:p,option:_,submit:(a,t)=>{const{ElMessage:k}=o.value;k.success(JSON.stringify(a)),t()},error:a=>{const{ElMessage:t}=o.value;t.success("\u8BF7\u67E5\u770B\u63A7\u5236\u53F0"),console.log(a)},updateOption:()=>{const{findObject:a}=l.value;C(()=>{let t=a(_.value.column,"checkbox");t.type="radio",t.dicData=[{label:"\u4E0B\u62C9\u6846\u5B57\u51781",value:1},{label:"\u4E0B\u62C9\u6846\u5B57\u51780",value:2}]})},updateUrlDic:()=>{var t;const{ElMessage:a}=o.value;a.success("\u5148\u8BBE\u7F6E\u672C\u5730\u5B57\u51781s\u540E\u8BF7\u6C42url"),(t=u.value)==null||t.updateDic("checkbox",[{name:"\u5B57\u51781",code:1},{name:"\u5B57\u51780",code:2}]),setTimeout(()=>{var k;(k=u.value)==null||k.updateDic("checkbox")},1e3)},reactive:B,ref:c,onMounted:F,nextTick:C};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}})}}()}},H='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/data-dic.md","lastUpdated":1658992381000}',I=n("blockquote",null,[n("p",null,"\u6570\u636E\u5B57\u5178")],-1),T=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("div",{class:"language-"},[n("pre",null,[n("code",null,`//\u4F7F\u7528\u7F51\u7EDC\u8BF7\u6C42\u5B57\u5178\u9700\u8981\u5F15\u5165 axios
import { createApp } from 'vue'
import axios from 'axios'
const app = createApp({})
app.use(QvVue,{axios})

//\u5177\u4F53demo https://github.com/virtual1680/q-admin
`)])])],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("updateOption"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5207\u6362\u7C7B\u578B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("updateUrlDic"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5207\u6362\u5B57\u5178\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-form")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.form"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("qvFormRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-form")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" nextTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(),n("span",{class:"token comment"},"//, nextTick"),s(`
`),n("span",{class:"token comment"},"// import { findObject } from 'qv-vue';"),s(`
`),n("span",{class:"token comment"},"// import type { QvOption } from 'qv-vue/es/types/qvue-ui'"),s(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),s(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue'"),s(`
`),n("span",{class:"token comment"},"// import { ElMessage } from 'element-plus'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" QvVue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@qv-vue'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		QvVue`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("FormInstance "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'110000'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"city1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'110100'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"city2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'110100'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'110101'"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"let"),s(" baseUrl "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'https://cli.avuejs.com/api/area'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("QvOption"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6743\u9650'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'grade'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"// * \u5B57\u6BB5\u914D\u7F6E \u914D\u7F6Eprops\u5BF9\u5E94\u7684label\u548Cvalue\u5373\u53EF"),s(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6709\u6743\u9650'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E0\u6743\u9650'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7981\u6B62\u9879'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token comment"},"//\u8BBE\u7F6Edisabled \u7981\u6B62\u9009\u62E9"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'get\u8BF7\u6C42'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'province1'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("baseUrl"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/getProvince?time=123"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token comment"},"//\u683C\u5F0F\u5316\u6570\u636E"),s(`
			`),n("span",{class:"token function-variable function"},"dicFormatter"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
				data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"ele"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					ele`),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"="),s(" ele"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'\u5B57\u5178\u683C\u5F0F\u5316'"),s(`
				`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
				data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8FFD\u52A0\u5B57\u5178'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token keyword"},"return"),s(` data
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7701\u4EFD'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'province'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cascader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'city1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'city2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cascaderIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("baseUrl"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/getProvince?time=456"),n("span",{class:"token template-punctuation string"},"`")]),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u57CE\u5E021'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'city1'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cascader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'area'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cascaderIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("baseUrl"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/getCity/{{key}}"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6CE8\u610F\u7531\u4E8E\u6CA1\u6709moke\u6570\u636E\u8FD9\u91CC\u4F1A\u62A5\u9519\uFF0C"),s(`
			`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u57CE\u5E021'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u57CE\u5E022'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'city2'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cascaderIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("baseUrl"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/getCity/{{key}}"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u57CE\u5E022'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'area'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"cell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("baseUrl"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/getArea/{{key}}?province={{province}}"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5B57\u5178'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("baseUrl"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/getProvince?time=789"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'code'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5355\u9009\u5B57\u51781'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5355\u9009\u5B57\u51780'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"as"),s(" QvOption"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"error"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"err"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8BF7\u67E5\u770B\u63A7\u5236\u53F0'"),n("span",{class:"token punctuation"},")"),s(`
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updateOption"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" findObject "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" QvVue"),n("span",{class:"token punctuation"},"."),s(`value
	`),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" column "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findObject"),n("span",{class:"token punctuation"},"("),s("option"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("column"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},")"),s(`
		column`),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'radio'"),s(`
		column`),n("span",{class:"token punctuation"},"."),s("dicData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u6846\u5B57\u51781'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u6846\u5B57\u51780'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updateUrlDic"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5148\u8BBE\u7F6E\u672C\u5730\u5B57\u51781s\u540E\u8BF7\u6C42url'"),n("span",{class:"token punctuation"},")"),s(`
	qvFormRef`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"updateDic"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5B57\u51781'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5B57\u51780'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"code"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		qvFormRef`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"updateDic"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function j(m,y,d,r,f,E){const g=U("render-demo-0"),v=U("demo");return M(),$("div",null,[I,T,x(v,{sourceCode:`<template>
	<div>
		<el-button @click="updateOption">\u5207\u6362\u7C7B\u578B</el-button>
		<el-button @click="updateUrlDic">\u5207\u6362\u5B57\u5178\u6570\u636E</el-button>
		<qv-form v-model="config.form" ref="qvFormRef" :option="option" @submit="submit" @error="error"> </qv-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, nextTick } from 'vue' //, nextTick
// import { findObject } from 'qv-vue';
// import type { QvOption } from 'qv-vue/es/types/qvue-ui'
// import type { FormInstance } from 'qv-vue'
// import type { Ref } from 'vue'
// import { ElMessage } from 'element-plus'

const ElementPlus = ref()
const QvVue = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
	import('@qv-vue').then(module => {
		QvVue.value = module
	})
})

const qvFormRef: Ref<FormInstance | undefined> = ref()

let config = reactive({
	form: {
		name: '\u5F20\u4E09',
		province: '110000',
		city1: '110100',
		city2: '110100',
		area: '110101'
	}
})
let baseUrl = 'https://cli.avuejs.com/api/area'
const option: Ref<QvOption> = ref({
	column: [
		{
			label: '\u6743\u9650',
			prop: 'grade',
			type: 'select',
			// * \u5B57\u6BB5\u914D\u7F6E \u914D\u7F6Eprops\u5BF9\u5E94\u7684label\u548Cvalue\u5373\u53EF
			props: { label: 'name', value: 'code' },
			dicData: [
				{ name: '\u6709\u6743\u9650', code: 1 },
				{ name: '\u65E0\u6743\u9650', code: 0 },
				{ name: '\u7981\u6B62\u9879', code: -1, disabled: true } //\u8BBE\u7F6Edisabled \u7981\u6B62\u9009\u62E9
			]
		},
		{
			label: 'get\u8BF7\u6C42',
			prop: 'province1',
			type: 'select',
			props: {
				label: 'name',
				value: 'code'
			},
			dicUrl: \`\${baseUrl}/getProvince?time=123\`,
			//\u683C\u5F0F\u5316\u6570\u636E
			dicFormatter: (data: any) => {
				data.forEach((ele: any) => {
					ele.name = ele.name + '\u5B57\u5178\u683C\u5F0F\u5316'
				})
				data.unshift({ name: '\u8FFD\u52A0\u5B57\u5178', code: -1 })
				return data
			}
		},
		{
			label: '\u7701\u4EFD',
			prop: 'province',
			type: 'select',
			cascader: ['city1', 'city2'],
			cascaderIndex: 1,
			props: {
				label: 'name',
				value: 'code'
			},
			dicUrl: \`\${baseUrl}/getProvince?time=456\`
		},
		{
			width: 120,
			label: '\u57CE\u5E021',
			prop: 'city1',
			type: 'select',
			cascader: ['area'],
			cascaderIndex: 1,
			cell: true,
			props: { label: 'name', value: 'code' },
			dicUrl: \`\${baseUrl}/getCity/{{key}}\`, // \u6CE8\u610F\u7531\u4E8E\u6CA1\u6709moke\u6570\u636E\u8FD9\u91CC\u4F1A\u62A5\u9519\uFF0C
			rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u57CE\u5E021', trigger: 'blur' }]
		},
		{
			width: 120,
			label: '\u57CE\u5E022',
			prop: 'city2',
			type: 'select',
			cascaderIndex: 2,
			cell: true,
			props: { label: 'name', value: 'code' },
			dicUrl: \`\${baseUrl}/getCity/{{key}}\`,
			rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u57CE\u5E022', trigger: 'blur' }]
		},
		{
			width: 120,
			label: '\u5730\u533A',
			prop: 'area',
			cell: true,
			props: { label: 'name', value: 'code' },
			type: 'select',
			dicUrl: \`\${baseUrl}/getArea/{{key}}?province={{province}}\`,
			rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u5730\u533A', trigger: 'blur' }]
		},
		{
			label: '\u5B57\u5178',
			prop: 'checkbox',
			span: 24,
			type: 'checkbox',
			dicUrl: \`\${baseUrl}/getProvince?time=789\`,
			props: {
				label: 'name',
				value: 'code'
			},
			dicData: [
				{ name: '\u5355\u9009\u5B57\u51781', code: 1 },
				{ name: '\u5355\u9009\u5B57\u51780', code: 2 }
			]
		}
	]
} as QvOption)
const submit = (form: any, done: () => void) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success(JSON.stringify(form))
	done()
}
const error = (err: any) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u8BF7\u67E5\u770B\u63A7\u5236\u53F0')
	console.log(err)
}

const updateOption = () => {
	const { findObject } = QvVue.value
	nextTick(() => {
		let column = findObject(option.value.column, 'checkbox')
		column.type = 'radio'
		column.dicData = [
			{
				label: '\u4E0B\u62C9\u6846\u5B57\u51781',
				value: 1
			},
			{
				label: '\u4E0B\u62C9\u6846\u5B57\u51780',
				value: 2
			}
		]
	})
}
const updateUrlDic = () => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u5148\u8BBE\u7F6E\u672C\u5730\u5B57\u51781s\u540E\u8BF7\u6C42url')
	qvFormRef.value?.updateDic('checkbox', [
		{
			name: '\u5B57\u51781',
			code: 1
		},
		{
			name: '\u5B57\u51780',
			code: 2
		}
	])
	setTimeout(() => {
		qvFormRef.value?.updateDic('checkbox')
	}, 1000)
}
<\/script>
`},{highlight:D(()=>[Q]),default:D(()=>[x(g)]),_:1})])}var K=V(R,[["render",j]]);export{H as __pageData,K as default};
