import{_ as z,e as T,c as P,a as _,w as x,V as A,b as n,r as w,o as V,d as s}from"./app.c74dcb0e.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:y,resolveComponent:c,withCtx:l,createVNode:o,createElementVNode:m,openBlock:C,createElementBlock:d}=A,g=y("\u6807\u9898");function S(a,t){const u=c("el-tag"),r=c("el-input"),h=c("qv-crud");return C(),d("div",null,[m("div",null,[o(h,{data:a.config.data,search:a.config.search,"onUpdate:search":t[2]||(t[2]=k=>a.config.search=k),option:a.option,onSearchChange:a.searchChange,onSearchReset:a.resetChange,onDateChange:a.dateChange},{search:l(({row:k,size:i})=>[m("div",null,[o(u,null,{default:l(()=>[g]),_:1}),o(r,{placeholder:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846",style:{width:"200px"},size:i.value,modelValue:a.config.search.name,"onUpdate:modelValue":t[0]||(t[0]=E=>a.config.search.name=E)},null,8,["size","modelValue"])])]),"sex-search":l(({row:k,size:i})=>[o(r,{placeholder:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846",size:i.value,modelValue:a.config.search.sex,"onUpdate:modelValue":t[1]||(t[1]=E=>a.config.search.sex=E)},null,8,["size","modelValue"])]),_:1},8,["data","search","option","onSearchChange","onSearchReset","onDateChange"])])])}const{defineComponent:q}=A,{reactive:D,computed:F,ref:B,onMounted:v,nextTick:M}=A;return{render:S,...q({setup(a,{expose:t}){t();const u=B();v(()=>{T(()=>import("./app.c74dcb0e.js").then(function(e){return e.au}),[]).then(e=>{u.value=e})});let r=D({search:{name:"virtual1680"},data:[{name:"\u5F20\u4E09",sex:"\u7537",address:"\u7ED9\u4ED8\u5BF9\u4EF7\u963F\u5361\u4E3D"},{name:"\u674E\u56DB",sex:"\u5973",address:"\u53D1\u62C9\u8FDB\u6765"}]});const h=F(()=>({align:"center",menuAlign:"center",height:300,searchIndex:2,searchIcon:!0,dateBtn:!0,searchMenuSpan:8,searchBtnText:"\u67E5\u8BE2",searchBtnIcon:"Search",emptyBtnText:"\u91CD\u7F6E",emptyBtnIcon:"Close",searchLabelWidth:80,column:[{searchLabelWidth:55,label:"\u59D3\u540D",prop:"name",searchTip:"\u6211\u662F\u4E00\u4E2A\u9ED8\u8BA4\u63D0\u793A\u8BED",searchTipPlacement:"left",searchRules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}],search:!0},{label:"\u6027\u522B",prop:"sex",search:!0,searchOrder:1},{label:"\u5730\u5740",prop:"address"},{label:"\u65E5\u671F",prop:"date",type:"datetime",searchSpan:12,searchRange:!0,search:!0}]})),f={ElementPlus:u,config:r,option:h,resetChange:e=>{const{ElMessage:p}=u.value;p.success("\u6E05\u7A7A\u56DE\u8C03")},searchChange:(e,p)=>{const{ElMessage:b}=u.value;b.success("2s\u540E\u5173\u95ED\u9501\u5B9A"),setTimeout(()=>{p(),b.success(JSON.stringify(e))},2e3)},dateChange:e=>{const{ElMessage:p}=u.value;p.success(JSON.stringify(e))},reactive:D,computed:F,ref:B,onMounted:v,nextTick:M};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}})}}()}},J='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/crud/search.md","lastUpdated":1659102658000}',I=n("blockquote",null,[n("p",null,"\u641C\u7D22")],-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-crud")]),s(`
			`),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.data"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("search")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.search"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@search-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("searchChange"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@search-reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("resetChange"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@date-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dateChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE -->"),s(`
			`),n("span",{class:"token comment"},`<!-- <template #search-menu="{ row, size }">
				<el-button :size="size.value" @click="searchSubmit(row)">\u81EA\u5B9A\u4E49\u63D0\u4EA4</el-button>
			</template> -->`),s(`
			`),n("span",{class:"token comment"},"<!-- \u5728search\u8868\u5355\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6 -->"),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ row, size }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
					`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-tag")]),n("span",{class:"token punctuation"},">")]),s("\u6807\u9898"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-tag")]),n("span",{class:"token punctuation"},">")]),s(`
					`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-input")]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u81EA\u5B9A\u4E49\u8F93\u5165\u6846"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("200px")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size.value"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.search.name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-input")]),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49 sex \u641C\u7D22\u7EC4\u4EF6-->"),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#sex-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ row, size }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-input")]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u81EA\u5B9A\u4E49\u8F93\u5165\u6846"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size.value"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.search.sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-input")]),n("span",{class:"token punctuation"},">")]),s(`
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

`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"//\u641C\u7D22\u7684\u8868\u5355\u5BF9\u8C61"),s(`
	`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'virtual1680'"),s(),n("span",{class:"token comment"},"//\u641C\u7D22\u9ED8\u8BA4\u503C"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7ED9\u4ED8\u5BF9\u4EF7\u963F\u5361\u4E3D'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u674E\u56DB'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u53D1\u62C9\u8FDB\u6765'"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" option "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"menuAlign"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"searchIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u914D\u7F6E\u6536\u7F29\u5C55\u793A\u7684\u4E2A\u6570,\u9ED8\u8BA4\u4E3A3\u4E2A"),s(`
		`),n("span",{class:"token literal-property property"},"searchIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u662F\u5426\u542F\u7528\u529F\u80FD\u6309\u94AE,"),s(`
		`),n("span",{class:"token literal-property property"},"dateBtn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u662F\u5426\u663E\u793A\u5355\u72EC\u65E5\u671F\u641C\u7D22"),s(`
		`),n("span",{class:"token literal-property property"},"searchMenuSpan"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u641C\u7D22\u6309\u94AE\u5355\u72EC\u6210\u884C"),s(`
		`),n("span",{class:"token comment"},"// searchShowBtn: false, //\u9690\u85CF\u641C\u7D22\u6298\u53E0\u6309\u94AE"),s(`
		`),n("span",{class:"token literal-property property"},"searchBtnText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u67E5\u8BE2'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE\u6587\u6848"),s(`
		`),n("span",{class:"token literal-property property"},"searchBtnIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE\u56FE\u6807"),s(`
		`),n("span",{class:"token literal-property property"},"emptyBtnText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u7F6E'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u81EA\u5B9A\u4E49\u641C\u7D22\u6E05\u7A7A\u6309\u94AE\u6587\u6848"),s(`
		`),n("span",{class:"token literal-property property"},"emptyBtnIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Close'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u81EA\u5B9A\u4E49\u641C\u7D22\u6E05\u7A7A\u6309\u94AE\u56FE\u6807"),s(`
		`),n("span",{class:"token literal-property property"},"searchLabelWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//searchLabelWidth\u4E3A\u6807\u9898\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A110\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5230option\u4E0B\u4F5C\u7528\u4E8E\u5168\u90E8,\u4E5F\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u6BCF\u4E00\u9879"),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"searchLabelWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u5355\u72EC\u914D\u7F6E"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"searchTip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6211\u662F\u4E00\u4E2A\u9ED8\u8BA4\u63D0\u793A\u8BED'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u8BBE\u7F6E\u63D0\u793A\u6587\u6848"),s(`
				`),n("span",{class:"token literal-property property"},"searchTipPlacement"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u8BBE\u7F6E\u63D0\u793A\u663E\u793A\u4F4D\u7F6E"),s(`
				`),n("span",{class:"token literal-property property"},"searchRules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u9A8C\u8BC1\u89C4\u5219"),s(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token comment"},"//\u662F\u5426\u53C2\u4E0E\u641C\u7D22"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"searchOrder"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"//\u641C\u7D22\u8868\u5355item\u6392\u5E8F"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'datetime'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"searchSpan"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//searchSpan\u641C\u7D22\u6846\u7684\u5BBD\u5EA6"),s(`
				`),n("span",{class:"token literal-property property"},"searchRange"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//searchRange\u914D\u7F6E\u540E\u53EF\u4EE5\u5F00\u542F\u8303\u56F4\u641C\u7D22"),s(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// search-reset\u70B9\u51FB\u6E05\u7A7A\u7684\u6267\u884C\u65B9\u6CD5"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"resetChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6E05\u7A7A\u56DE\u8C03'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// search-change\u4E3A\u70B9\u51FB\u641C\u7D22\u540E\u6267\u884C\u65B9\u6CD5\uFF0Cdone\u65B9\u6CD5\u4E3A\u5173\u95ED\u7B49\u5F85\u6846"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"searchChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2s\u540E\u5173\u95ED\u9501\u5B9A'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dateChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function R(y,c,l,o,m,C){const d=w("render-demo-0"),g=w("demo");return V(),P("div",null,[I,_(g,{sourceCode:`<template>
	<div>
		<qv-crud
			:data="config.data"
			v-model:search="config.search"
			:option="option"
			@search-change="searchChange"
			@search-reset="resetChange"
			@date-change="dateChange">
			<!-- \u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE -->
			<!-- <template #search-menu="{ row, size }">
				<el-button :size="size.value" @click="searchSubmit(row)">\u81EA\u5B9A\u4E49\u63D0\u4EA4</el-button>
			</template> -->
			<!-- \u5728search\u8868\u5355\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6 -->
			<template #search="{ row, size }">
				<div>
					<el-tag>\u6807\u9898</el-tag>
					<el-input placeholder="\u81EA\u5B9A\u4E49\u8F93\u5165\u6846" style="width:200px" :size="size.value" v-model="config.search.name"></el-input>
				</div>
			</template>
			<!-- \u81EA\u5B9A\u4E49 sex \u641C\u7D22\u7EC4\u4EF6-->
			<template #sex-search="{ row, size }">
				<el-input placeholder="\u81EA\u5B9A\u4E49\u8F93\u5165\u6846" :size="size.value" v-model="config.search.sex"></el-input>
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

let config = reactive({
	//\u641C\u7D22\u7684\u8868\u5355\u5BF9\u8C61
	search: {
		name: 'virtual1680' //\u641C\u7D22\u9ED8\u8BA4\u503C
	},
	data: [
		{ name: '\u5F20\u4E09', sex: '\u7537', address: '\u7ED9\u4ED8\u5BF9\u4EF7\u963F\u5361\u4E3D' },
		{ name: '\u674E\u56DB', sex: '\u5973', address: '\u53D1\u62C9\u8FDB\u6765' }
	]
})

const option = computed(() => {
	return {
		align: 'center',
		menuAlign: 'center',
		height: 300,
		searchIndex: 2, //\u914D\u7F6E\u6536\u7F29\u5C55\u793A\u7684\u4E2A\u6570,\u9ED8\u8BA4\u4E3A3\u4E2A
		searchIcon: true, //\u662F\u5426\u542F\u7528\u529F\u80FD\u6309\u94AE,
		dateBtn: true, //\u662F\u5426\u663E\u793A\u5355\u72EC\u65E5\u671F\u641C\u7D22
		searchMenuSpan: 8, //\u641C\u7D22\u6309\u94AE\u5355\u72EC\u6210\u884C
		// searchShowBtn: false, //\u9690\u85CF\u641C\u7D22\u6298\u53E0\u6309\u94AE
		searchBtnText: '\u67E5\u8BE2', //\u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE\u6587\u6848
		searchBtnIcon: 'Search', //\u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE\u56FE\u6807
		emptyBtnText: '\u91CD\u7F6E', //\u81EA\u5B9A\u4E49\u641C\u7D22\u6E05\u7A7A\u6309\u94AE\u6587\u6848
		emptyBtnIcon: 'Close', //\u81EA\u5B9A\u4E49\u641C\u7D22\u6E05\u7A7A\u6309\u94AE\u56FE\u6807
		searchLabelWidth: 80, //searchLabelWidth\u4E3A\u6807\u9898\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A110\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5230option\u4E0B\u4F5C\u7528\u4E8E\u5168\u90E8,\u4E5F\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u6BCF\u4E00\u9879
		column: [
			{
				searchLabelWidth: 55, //\u5355\u72EC\u914D\u7F6E
				label: '\u59D3\u540D',
				prop: 'name',
				searchTip: '\u6211\u662F\u4E00\u4E2A\u9ED8\u8BA4\u63D0\u793A\u8BED', //\u8BBE\u7F6E\u63D0\u793A\u6587\u6848
				searchTipPlacement: 'left', //\u8BBE\u7F6E\u63D0\u793A\u663E\u793A\u4F4D\u7F6E
				searchRules: [{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D', trigger: 'blur' }], //\u9A8C\u8BC1\u89C4\u5219
				search: true //\u662F\u5426\u53C2\u4E0E\u641C\u7D22
			},
			{
				label: '\u6027\u522B',
				prop: 'sex',
				search: true,
				searchOrder: 1 //\u641C\u7D22\u8868\u5355item\u6392\u5E8F
			},
			{
				label: '\u5730\u5740',
				prop: 'address'
			},
			{
				label: '\u65E5\u671F',
				prop: 'date',
				type: 'datetime',
				searchSpan: 12, //searchSpan\u641C\u7D22\u6846\u7684\u5BBD\u5EA6
				searchRange: true, //searchRange\u914D\u7F6E\u540E\u53EF\u4EE5\u5F00\u542F\u8303\u56F4\u641C\u7D22
				search: true
			}
		]
	}
})
// search-reset\u70B9\u51FB\u6E05\u7A7A\u7684\u6267\u884C\u65B9\u6CD5
const resetChange = (item: any) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u6E05\u7A7A\u56DE\u8C03')
}
// search-change\u4E3A\u70B9\u51FB\u641C\u7D22\u540E\u6267\u884C\u65B9\u6CD5\uFF0Cdone\u65B9\u6CD5\u4E3A\u5173\u95ED\u7B49\u5F85\u6846
const searchChange = (params: any, done: () => void) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('2s\u540E\u5173\u95ED\u9501\u5B9A')
	setTimeout(() => {
		done()
		ElMessage.success(JSON.stringify(params))
	}, 2000)
}
const dateChange = (date: any) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success(JSON.stringify(date))
}
<\/script>
`},{highlight:x(()=>[O]),default:x(()=>[_(d)]),_:1})])}var U=z(N,[["render",R]]);export{J as __pageData,U as default};
