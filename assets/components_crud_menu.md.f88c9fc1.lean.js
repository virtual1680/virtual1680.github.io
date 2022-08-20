import{_ as S,e as P,c as R,a as w,w as _,V as g,b as n,f as N,r as b,o as V,d as s}from"./app.2e64142b.js";const U={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:f,resolveComponent:l,withCtx:r,createVNode:k,createElementVNode:y,openBlock:B,createElementBlock:i}=g,d=f("\u81EA\u5B9A\u4E49");function A(e,C){const a=l("el-button"),m=l("qv-crud");return B(),i("div",null,[y("div",null,[k(m,{ref:"avueRef",data:e.config.data,option:e.option,onRefreshChange:e.refreshChange,onRowSave:e.rowSave,onRowUpdate:e.rowUpdate,onRowDel:e.rowDel},{menu:r(()=>[k(a,{link:""},{default:r(()=>[d]),_:1})]),_:1},8,["data","option","onRefreshChange","onRowSave","onRowUpdate","onRowDel"])])])}const{defineComponent:M}=g,{reactive:F,computed:v,ref:E,onMounted:D,nextTick:x}=g;return{render:A,...M({setup(e,{expose:C}){C();const a=E();D(()=>{P(()=>import("./app.2e64142b.js").then(function(t){return t.ao}),[]).then(t=>{a.value=t})});const m=E();let T=F({data:[{name:"\u5F20\u4E09",age:12,address:"\u7801\u4E91\u7684\u5730\u5740"},{name:"\u674E\u56DB",age:13,address:"\u7801\u4E91\u7684\u5730\u5740"}]});const q=v(()=>({height:200,viewBtn:!0,editBtn:!1,delBtn:!1,copyBtn:!0,column:[{label:"\u59D3\u540D",prop:"name"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5730\u5740",span:24,prop:"address",type:"textarea"}]})),h={ElementPlus:a,avueRef:m,config:T,option:q,refreshChange:()=>{const{ElMessage:t}=a.value;t.success("\u5237\u65B0\u56DE\u8C03")},rowSave:(t,p,u)=>{const{ElMessage:o}=a.value;t.id=new Date().getTime(),o.success("\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42"),setTimeout(()=>{o.success("\u5173\u95ED\u6309\u94AE\u7B49\u5F85"),u()},1e3),setTimeout(()=>{o.success("\u65B0\u589E\u6570\u636E"+JSON.stringify(t)),p(t)},2e3)},rowDel:(t,p,u)=>{const{ElMessage:o,ElMessageBox:c}=a.value;c.confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{u(t),o({type:"success",message:"\u5220\u9664\u6210\u529F!"})}).catch(()=>{})},rowUpdate:(t,p,u,o)=>{const{ElMessage:c}=a.value;c.success("\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42"),setTimeout(()=>{c.success("\u5173\u95ED\u6309\u94AE\u7B49\u5F85"),o()},1e3),setTimeout(()=>{c.success("\u7F16\u8F91\u6570\u636E"+JSON.stringify(t)+"\u6570\u636E\u5E8F\u53F7"+p),u(t)},2e3)},reactive:F,computed:v,ref:E,onMounted:D,nextTick:x};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}})}}()}},K='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/crud/menu.md","lastUpdated":1659349838000}',O=n("blockquote",null,[n("p",null,"\u64CD\u4F5C\u680F\u914D\u7F6E")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-crud")]),s(`
			`),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avueRef"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.data"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@refresh-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("refreshChange"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@row-save"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rowSave"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@row-update"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rowUpdate"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@row-del"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rowDel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#menu"),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"link"),n("span",{class:"token punctuation"},">")]),s("\u81EA\u5B9A\u4E49"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-crud")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" computed"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" nextTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"avueRef"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("CrudInstance "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7801\u4E91\u7684\u5730\u5740'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u674E\u56DB'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"13"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7801\u4E91\u7684\u5730\u5740'"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" option "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"viewBtn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"editBtn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"delBtn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"copyBtn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'textarea'"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"refreshChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5237\u65B0\u56DE\u8C03'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowSave"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("form"),n("span",{class:"token punctuation"},","),s(" done"),n("span",{class:"token punctuation"},","),s(" loading")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	form`),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5173\u95ED\u6309\u94AE\u7B49\u5F85'"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u65B0\u589E\u6570\u636E'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowDel"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("form"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" done")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage"),n("span",{class:"token punctuation"},","),s(" ElMessageBox "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessageBox`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u63D0\u793A'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"confirmButtonText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u786E\u5B9A'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"cancelButtonText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u53D6\u6D88'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'warning'"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token function"},"ElMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5220\u9664\u6210\u529F!'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowUpdate"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("form"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" done"),n("span",{class:"token punctuation"},","),s(" loading")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5173\u95ED\u6309\u94AE\u7B49\u5F85'"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u7F16\u8F91\u6570\u636E'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'\u6570\u636E\u5E8F\u53F7'"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),$=N("<blockquote><p>\u5C5E\u6027</p></blockquote><table><thead><tr><th>\u5C5E\u6027\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E\u53CA\u6CE8\u610F\u4E8B\u9879</th></tr></thead><tbody><tr><td><code>menu</code></td><td><code>boolean</code></td><td>\u662F\u5426\u663E\u793A\u64CD\u4F5C\u680F</td></tr><tr><td><code>menuWidth</code></td><td><code>number</code> <code>string</code></td><td>\u64CD\u4F5C\u680F\u5BBD\u5EA6</td></tr><tr><td><code>viewBtn</code></td><td><code>boolean</code></td><td>\u662F\u5426\u663E\u793A\u8BE6\u60C5\u6309\u94AE</td></tr><tr><td><code>addBtn</code></td><td><code>boolean</code></td><td>\u662F\u5426\u663E\u793A\u65B0\u589E\u6309\u94AE</td></tr><tr><td><code>editBtn</code></td><td><code>boolean</code></td><td>\u662F\u5426\u663E\u793A\u7F16\u8F91\u6309\u94AE</td></tr><tr><td><code>copyBtn</code></td><td><code>boolean</code></td><td>\u662F\u5426\u663E\u793A\u590D\u5236\u6309\u94AE</td></tr><tr><td><code>delBtn</code></td><td><code>boolean</code></td><td>\u662F\u5426\u663E\u793A\u5220\u9664\u6309\u94AE</td></tr><tr><td><code>menuAlign</code></td><td><code>string</code></td><td>\u64CD\u4F5C\u680F\u5E03\u5C40</td></tr><tr><td><code>menuHeaderAlign</code></td><td><code>string</code></td><td>\u64CD\u4F5C\u680F\u5934\u90E8\u5E03\u5C40</td></tr></tbody></table><blockquote><p>\u65B9\u6CD5</p></blockquote><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E\u53CA\u6CE8\u610F\u4E8B\u9879</th></tr></thead><tbody><tr><td><code>row-save</code></td><td><code>form,done,loading</code></td><td>\u70B9\u51FB\u65B0\u589E\u4FDD\u5B58\u56DE\u8C03</td></tr><tr><td><code>row-update</code></td><td><code>form,index,done,loading</code></td><td>\u70B9\u51FB\u7F16\u8F91\u56DE\u8C03</td></tr><tr><td><code>row-del</code></td><td><code>form,index</code></td><td>\u70B9\u51FB\u5220\u9664\u56DE\u8C03</td></tr><tr><td><code>refresh-change</code></td><td><code>\u65E0</code></td><td>\u70B9\u51FB\u5237\u65B0\u56DE\u8C03</td></tr></tbody></table>",4);function I(f,l,r,k,y,B){const i=b("render-demo-0"),d=b("demo");return V(),R("div",null,[O,w(d,{sourceCode:`<template>
	<div>
		<qv-crud
			ref="avueRef"
			:data="config.data"
			:option="option"
			@refresh-change="refreshChange"
			@row-save="rowSave"
			@row-update="rowUpdate"
			@row-del="rowDel">
			<template #menu>
				<el-button link>\u81EA\u5B9A\u4E49</el-button>
			</template>
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

const avueRef: Ref<CrudInstance | undefined> = ref()
let config = reactive({
	data: [
		{ name: '\u5F20\u4E09', age: 12, address: '\u7801\u4E91\u7684\u5730\u5740' },
		{ name: '\u674E\u56DB', age: 13, address: '\u7801\u4E91\u7684\u5730\u5740' }
	]
})
const option = computed(() => {
	return {
		height: 200,
		viewBtn: true,
		editBtn: false,
		delBtn: false,
		copyBtn: true,
		column: [
			{ label: '\u59D3\u540D', prop: 'name' },
			{ label: '\u5E74\u9F84', prop: 'age' },
			{ label: '\u5730\u5740', span: 24, prop: 'address', type: 'textarea' }
		]
	}
})
const refreshChange = () => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u5237\u65B0\u56DE\u8C03')
}
const rowSave = (form, done, loading) => {
	const { ElMessage } = ElementPlus.value
	form.id = new Date().getTime()
	ElMessage.success('\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42')
	setTimeout(() => {
		ElMessage.success('\u5173\u95ED\u6309\u94AE\u7B49\u5F85')
		loading()
	}, 1000)
	setTimeout(() => {
		ElMessage.success('\u65B0\u589E\u6570\u636E' + JSON.stringify(form))
		done(form)
	}, 2000)
}
const rowDel = (form, index, done) => {
	const { ElMessage, ElMessageBox } = ElementPlus.value
	ElMessageBox.confirm('\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?', '\u63D0\u793A', {
		confirmButtonText: '\u786E\u5B9A',
		cancelButtonText: '\u53D6\u6D88',
		type: 'warning'
	})
		.then(() => {
			done(form)
			ElMessage({ type: 'success', message: '\u5220\u9664\u6210\u529F!' })
		})
		.catch(() => {})
}
const rowUpdate = (form, index, done, loading) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42')
	setTimeout(() => {
		ElMessage.success('\u5173\u95ED\u6309\u94AE\u7B49\u5F85')
		loading()
	}, 1000)
	setTimeout(() => {
		ElMessage.success('\u7F16\u8F91\u6570\u636E' + JSON.stringify(form) + '\u6570\u636E\u5E8F\u53F7' + index)
		done(form)
	}, 2000)
}
<\/script>
`},{highlight:_(()=>[J]),default:_(()=>[w(i)]),_:1}),$])}var Q=S(U,[["render",I]]);export{K as __pageData,Q as default};
