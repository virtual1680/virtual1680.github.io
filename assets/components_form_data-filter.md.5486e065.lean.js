import{_ as V,e as R,c as O,a as q,w as D,V as y,b as n,r as A,o as P,d as s}from"./app.c74dcb0e.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:l,resolveComponent:m,withCtx:u,createVNode:o,createElementVNode:E,openBlock:g,createElementBlock:f}=y,d=l("\u8FC7\u6EE4\u6570\u636E\u5B57\u5178"),C=l("\u8FC7\u6EE4\u7A7A\u6570\u636E"),F=l("\u4E0D\u8FC7\u6EE4");function N(a,i){const t=m("el-button"),v=m("qv-form");return g(),f("div",null,[E("div",null,[o(t,{size:"small",type:"danger",onClick:a.filterDic},{default:u(()=>[d]),_:1},8,["onClick"]),o(t,{size:"small",type:"success",onClick:a.filterNull},{default:u(()=>[C]),_:1},8,["onClick"]),o(t,{size:"small",type:"primary",onClick:a.filter},{default:u(()=>[F]),_:1},8,["onClick"]),o(v,{modelValue:a.config.form,"onUpdate:modelValue":i[0]||(i[0]=e=>a.config.form=e),ref:"qvFormRef",option:a.option,onSubmit:a.submit},null,8,["modelValue","option","onSubmit"])])])}const{defineComponent:w}=y,{reactive:b,ref:r,onMounted:_}=y;return{render:N,...w({setup(a,{expose:i}){i();const t=r();_(()=>{R(()=>import("./app.c74dcb0e.js").then(function(c){return c.au}),[]).then(c=>{t.value=c})});const v=r();let e=b({reload:Math.random(),form:{cascader:[0,1],tree:0}});const p=r({column:[{label:"\u59D3\u540D",prop:"name"},{label:"\u7EA7\u522B",prop:"cascader",type:"cascader",dicData:[{label:"\u4E00\u7EA7",value:0,children:[{label:"\u4E00\u7EA71",value:1},{label:"\u4E00\u7EA72",value:2}]}]},{label:"\u6811\u578B",prop:"tree",type:"tree",dicData:[{label:"\u4E00\u7EA7",value:0,children:[{label:"\u4E00\u7EA71",value:1},{label:"\u4E00\u7EA72",value:2}]}]}]}),k=()=>{e.reload=Math.random()},h={ElementPlus:t,qvFormRef:v,config:e,option:p,refresh:k,filter:()=>{p.value.filterDic=!1,p.value.filterNull=!1,k()},filterDic:()=>{p.value.filterDic=!0,k()},filterNull:()=>{p.value.filterNull=!0,k()},submit:(c,B)=>{const{ElMessage:M}=t.value;console.log("\u8FC7\u6EE4\u6570\u636E--",c),B(),M.success("\u5F53\u524D\u6570\u636E"+JSON.stringify(e.form))},reactive:b,ref:r,onMounted:_};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}})}}()}},L='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/data-filter.md","lastUpdated":1659029761000}',S=n("blockquote",null,[n("p",null,"\u6570\u636E\u8FC7\u6EE4")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("small"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("filterDic"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u8FC7\u6EE4\u6570\u636E\u5B57\u5178"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("small"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("filterNull"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u8FC7\u6EE4\u7A7A\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("small"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("filter"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4E0D\u8FC7\u6EE4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-form")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.form"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("qvFormRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-form")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// import type { QvOption } from 'qv-vue/es/types/qvue-ui';"),s(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue';"),s(`
`),n("span",{class:"token comment"},"// import type { Ref } from 'vue';"),s(`

`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("FormInstance "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"reload"),n("span",{class:"token operator"},":"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"cascader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"tree"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("QvOption"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EA7\u522B'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E00\u7EA7'"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E00\u7EA71'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E00\u7EA72'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6811\u578B'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tree'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tree'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
				`),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E00\u7EA7'"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
						`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E00\u7EA71'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E00\u7EA72'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),s(`
					`),n("span",{class:"token punctuation"},"]"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"as"),s(" QvOption"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"refresh"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	config`),n("span",{class:"token punctuation"},"."),s("reload "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"filter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	option`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("filterDic "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
	option`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("filterNull "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
	`),n("span",{class:"token function"},"refresh"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"filterDic"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	option`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("filterDic "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
	`),n("span",{class:"token function"},"refresh"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"filterNull"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	option`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("filterNull "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
	`),n("span",{class:"token function"},"refresh"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8FC7\u6EE4\u6570\u636E--'"),n("span",{class:"token punctuation"},","),s(" form"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5F53\u524D\u6570\u636E'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("form"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function x(l,m,u,o,E,g){const f=A("render-demo-0"),d=A("demo");return P(),O("div",null,[S,q(d,{sourceCode:`<template>
	<div>
		<el-button size="small" type="danger" @click="filterDic">\u8FC7\u6EE4\u6570\u636E\u5B57\u5178</el-button>
		<el-button size="small" type="success" @click="filterNull">\u8FC7\u6EE4\u7A7A\u6570\u636E</el-button>
		<el-button size="small" type="primary" @click="filter">\u4E0D\u8FC7\u6EE4</el-button>
		<qv-form v-model="config.form" ref="qvFormRef" :option="option" @submit="submit"> </qv-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
// import type { QvOption } from 'qv-vue/es/types/qvue-ui';
// import type { FormInstance } from 'qv-vue';
// import type { Ref } from 'vue';

const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})

const qvFormRef: Ref<FormInstance | undefined> = ref()

let config = reactive({
	reload: Math.random(),
	form: {
		cascader: [0, 1],
		tree: 0
	}
})
const option: Ref<QvOption> = ref({
	column: [
		{ label: '\u59D3\u540D', prop: 'name' },
		{
			label: '\u7EA7\u522B',
			prop: 'cascader',
			type: 'cascader',
			dicData: [
				{
					label: '\u4E00\u7EA7',
					value: 0,
					children: [
						{ label: '\u4E00\u7EA71', value: 1 },
						{ label: '\u4E00\u7EA72', value: 2 }
					]
				}
			]
		},
		{
			label: '\u6811\u578B',
			prop: 'tree',
			type: 'tree',
			dicData: [
				{
					label: '\u4E00\u7EA7',
					value: 0,
					children: [
						{ label: '\u4E00\u7EA71', value: 1 },
						{ label: '\u4E00\u7EA72', value: 2 }
					]
				}
			]
		}
	]
} as QvOption)
const refresh = () => {
	config.reload = Math.random()
}
const filter = () => {
	option.value.filterDic = false
	option.value.filterNull = false
	refresh()
}
const filterDic = () => {
	option.value.filterDic = true
	refresh()
}
const filterNull = () => {
	option.value.filterNull = true
	refresh()
}
const submit = (form: any, done: () => void) => {
	const { ElMessage } = ElementPlus.value
	console.log('\u8FC7\u6EE4\u6570\u636E--', form)
	done()
	ElMessage.success('\u5F53\u524D\u6570\u636E' + JSON.stringify(config.form))
}
<\/script>
`},{highlight:D(()=>[Q]),default:D(()=>[q(f)]),_:1})])}var G=V(z,[["render",x]]);export{L as __pageData,G as default};
