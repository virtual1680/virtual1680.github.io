import{_ as q,e as z,r as f,o as C,c as P,a as A,w,V as m,b as n,d as a}from"./app.c086cfa3.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:r,createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:e,createElementVNode:g,openBlock:k,createElementBlock:i}=m,B=u("\u81EA\u5B9A\u4E49\u6309\u94AE");function x(p,_){const l=o("el-tag"),c=o("el-button"),y=o("qv-crud");return k(),i("div",null,[g("div",null,[e(y,{data:p.config.data,option:p.option,"table-loading":p.config.showLoading},{"name-header":t(({column:s})=>[e(l,null,{default:t(()=>[u("\u81EA\u5B9A\u4E49"+r((s||{}).label)+"-"+r((s||{}).prop),1)]),_:2},1024)]),"menu-left":t(({size:s})=>[e(c,{type:"primary",size:s},{default:t(()=>[B]),_:2},1032,["size"])]),"menu-right":t(({size:s})=>[e(c,{type:"primary",icon:"Edit",circle:"",size:s},null,8,["size"])]),_:1},8,["data","option","table-loading"])])])}const{defineComponent:F}=m,{reactive:h,computed:b,ref:E,onMounted:v,nextTick:D}=m;return{render:x,...F({setup(p,{expose:_}){_();const l=E();v(()=>{z(()=>import("./app.c086cfa3.js").then(function(d){return d.m}),[]).then(d=>{l.value=d})});let c=h({search:{name:"small",sex:1},data:[{name:"\u5F20\u4E09",age:14,address:"110000",phone1:"17547400800",phone:"17547400800",icon:"el-icon-time",test:1,sex:"\u7537"},{name:"\u738B\u4E94",age:10,address:"120000",test:1,sex:"\u5973",icon:"el-icon-star-on",phone1:"17547400800",phone:"17547400800"}],menuType:"text",showLoading:!1,showCard:!1,showBorder:!0,showStripe:!1,showHeader:!0,showIndex:!0,showCheckbox:!1,showPage:!0,sizeValue:"small"});const y=b(()=>({headerAlign:"center",showHeader:!0,expandLevel:3,searchMenuSpan:6,height:300,column:[{label:"\u8D85\u7EA7\u59D3\u540D",type:"input",prop:"name",search:!0},{label:"\u591A\u7EA7\u8868\u5934",children:[{label:"\u4FE1\u606F",children:[{label:"\u5E74\u9F84",prop:"age",search:!0},{label:"\u624B\u673A\u53F7",search:!0,prop:"phone"}]},{label:"\u5730\u533A",prop:"address",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]},{search:!0,label:"\u6027\u522B",prop:"sex",type:"select",dicData:[{label:"\u7537",value:1},{label:"\u5973",value:2}]},{search:!0,label:"\u6027\u522B1",prop:"sex1",type:"select",dicData:[{label:"\u7537",value:1},{label:"\u5973",value:2}]}]})),s={ElementPlus:l,config:c,option:y,reactive:h,computed:b,ref:E,onMounted:v,nextTick:D};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}})}}()}},H='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/crud/header.md","lastUpdated":null}',L=n("blockquote",null,[n("p",null,"\u8868\u5934\u8BBE\u7F6E")],-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("qv-crud")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("config.data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("option"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":table-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("config.showLoading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u8868\u5934 -->"),a(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#name-header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ column }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("el-tag")]),n("span",{class:"token punctuation"},">")]),a("\u81EA\u5B9A\u4E49{{ (column || {}).label }}-{{ (column || {}).prop }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("el-tag")]),n("span",{class:"token punctuation"},">")]),a(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u5DE6\u8FB9\u6309\u94AE -->"),a(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#menu-left"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ size }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("el-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u81EA\u5B9A\u4E49\u6309\u94AE"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("el-button")]),n("span",{class:"token punctuation"},">")]),a(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u53F3\u8FB9\u6309\u94AE -->"),a(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#menu-right"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ size }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("el-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Edit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"circle"),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("el-button")]),n("span",{class:"token punctuation"},">")]),a(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
	`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'small'"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),a(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
		`),n("span",{class:"token punctuation"},"{"),a(`
			`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'110000'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"phone1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17547400800'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17547400800'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'el-icon-time'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7537'"),a(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token punctuation"},"{"),a(`
			`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u738B\u4E94'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'120000'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'el-icon-star-on'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"phone1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17547400800'"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'17547400800'"),a(`
		`),n("span",{class:"token punctuation"},"}"),a(`
	`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"menuType"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showLoading"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showCard"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showBorder"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showStripe"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showHeader"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showIndex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showCheckbox"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"showPage"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
	`),n("span",{class:"token literal-property property"},"sizeValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'small'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"const"),a(" option "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token literal-property property"},"headerAlign"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"showHeader"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"//\u662F\u5426\u663E\u793A\u8868\u5934"),a(`
		`),n("span",{class:"token literal-property property"},"expandLevel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"searchMenuSpan"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),a(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D85\u7EA7\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u591A\u7EA7\u8868\u5934'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
					`),n("span",{class:"token punctuation"},"{"),a(`
						`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4FE1\u606F'"),n("span",{class:"token punctuation"},","),a(`
						`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
							`),n("span",{class:"token punctuation"},"{"),a(`
								`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),a(`
								`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
								`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
							`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
							`),n("span",{class:"token punctuation"},"{"),a(`
								`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u624B\u673A\u53F7'"),n("span",{class:"token punctuation"},","),a(`
								`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
								`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),a(`
							`),n("span",{class:"token punctuation"},"}"),a(`
						`),n("span",{class:"token punctuation"},"]"),a(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
					`),n("span",{class:"token punctuation"},"{"),a(`
						`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5730\u533A'"),n("span",{class:"token punctuation"},","),a(`
						`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
						`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),a(`
						`),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
							`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
							`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'code'"),a(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
						`),n("span",{class:"token literal-property property"},"dicUrl"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://cli.avuejs.com/api/area/getProvince'"),a(`
					`),n("span",{class:"token punctuation"},"}"),a(`
				`),n("span",{class:"token punctuation"},"]"),a(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
					`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
					`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),a(`
				`),n("span",{class:"token punctuation"},"]"),a(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
			`),n("span",{class:"token punctuation"},"{"),a(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6027\u522B1'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'sex1'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),a(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
					`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
					`),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),a(`
				`),n("span",{class:"token punctuation"},"]"),a(`
			`),n("span",{class:"token punctuation"},"}"),a(`
		`),n("span",{class:"token punctuation"},"]"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function T(r,u,o,t,e,g){const k=f("render-demo-0"),i=f("demo");return C(),P("div",null,[L,A(i,{sourceCode:`<template>
	<div>
		<qv-crud :data="config.data" :option="option" :table-loading="config.showLoading">
			<!-- \u81EA\u5B9A\u4E49\u8868\u5934 -->
			<template #name-header="{ column }">
				<el-tag>\u81EA\u5B9A\u4E49{{ (column || {}).label }}-{{ (column || {}).prop }}</el-tag>
			</template>
			<!-- \u81EA\u5B9A\u4E49\u5DE6\u8FB9\u6309\u94AE -->
			<template #menu-left="{ size }">
				<el-button type="primary" :size="size">\u81EA\u5B9A\u4E49\u6309\u94AE</el-button>
			</template>
			<!-- \u81EA\u5B9A\u4E49\u53F3\u8FB9\u6309\u94AE -->
			<template #menu-right="{ size }">
				<el-button type="primary" icon="Edit" circle :size="size"></el-button>
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
	search: {
		name: 'small',
		sex: 1
	},
	data: [
		{
			name: '\u5F20\u4E09',
			age: 14,
			address: '110000',
			phone1: '17547400800',
			phone: '17547400800',
			icon: 'el-icon-time',
			test: 1,
			sex: '\u7537'
		},
		{
			name: '\u738B\u4E94',
			age: 10,
			address: '120000',
			test: 1,
			sex: '\u5973',
			icon: 'el-icon-star-on',
			phone1: '17547400800',
			phone: '17547400800'
		}
	],
	menuType: 'text',
	showLoading: false,
	showCard: false,
	showBorder: true,
	showStripe: false,
	showHeader: true,
	showIndex: true,
	showCheckbox: false,
	showPage: true,
	sizeValue: 'small'
})
const option = computed(() => {
	return {
		headerAlign: 'center',
		showHeader: true, //\u662F\u5426\u663E\u793A\u8868\u5934
		expandLevel: 3,
		searchMenuSpan: 6,
		height: 300,
		column: [
			{
				label: '\u8D85\u7EA7\u59D3\u540D',
				type: 'input',
				prop: 'name',
				search: true
			},
			{
				label: '\u591A\u7EA7\u8868\u5934',
				children: [
					{
						label: '\u4FE1\u606F',
						children: [
							{
								label: '\u5E74\u9F84',
								prop: 'age',
								search: true
							},
							{
								label: '\u624B\u673A\u53F7',
								search: true,
								prop: 'phone'
							}
						]
					},
					{
						label: '\u5730\u533A',
						prop: 'address',
						type: 'select',
						props: {
							label: 'name',
							value: 'code'
						},
						dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
					}
				]
			},
			{
				search: true,
				label: '\u6027\u522B',
				prop: 'sex',
				type: 'select',
				dicData: [
					{ label: '\u7537', value: 1 },
					{ label: '\u5973', value: 2 }
				]
			},
			{
				search: true,
				label: '\u6027\u522B1',
				prop: 'sex1',
				type: 'select',
				dicData: [
					{ label: '\u7537', value: 1 },
					{ label: '\u5973', value: 2 }
				]
			}
		]
	}
})
<\/script>
`},{highlight:w(()=>[S]),default:w(()=>[A(k)]),_:1})])}var j=q(V,[["render",T]]);export{H as __pageData,j as default};
