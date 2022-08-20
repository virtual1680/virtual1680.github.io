import{_ as V,e as P,c as T,a as f,w as E,V as i,b as n,r as B,o as R,d as s}from"./app.2e64142b.js";const S={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:y,resolveComponent:r,withCtx:m,createVNode:c,createElementVNode:d,openBlock:g,createElementBlock:u}=i,k={class:"play-container"},w=y("\u6253\u5F00\u5F39\u7A97");function _(p,D){const l=r("el-button"),t=r("qv-dialog-form");return g(),u("div",null,[d("div",k,[c(l,{onClick:p.open},{default:m(()=>[w]),_:1},8,["onClick"]),c(t,{option:p.option,data:p.data,ref:"qvDialogFormRef"},null,8,["option","data"])])])}const{defineComponent:C}=i,{getCurrentInstance:b,ref:e,nextTick:Y,onMounted:v}=i;return{render:_,...C({setup(p,{expose:D}){var h;D();const l=e(),t=e();v(()=>{P(()=>import("./app.2e64142b.js").then(function(a){return a.ao}),[]).then(a=>{t.value=a})});const A=e({username:"\u6211\u662F\u7528\u6237\u540D"}),o={VAILD:[{label:"\u771F",value:"true"},{label:"\u5047",value:"false"}],SEX:[{label:"\u7537",value:0},{label:"\u5973",value:1}]};let x=e({size:"default",addTitle:"\u6211\u662F\u6807\u9898",submitText:"\u5B8C\u6210",column:[{label:"\u7528\u6237\u540D",prop:"username",tip:"\u8FD9\u662F\u4FE1\u606F\u63D0\u793A",span:8,searchLabelWidth:3,suffixIcon:"Plus",prefixIcon:"Search",maxlength:3,minlength:2,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}]},{label:"\u59D3\u540D",prop:"name",disabled:!0,span:8},{label:"\u5BC6\u7801",prop:"password",type:"password",span:8},{label:"\u7C7B\u578B",prop:"type",type:"select",dicData:o.VAILD,span:8},{label:"\u6743\u9650",prop:"grade",span:8,type:"checkbox",dicData:o.VAILD},{label:"\u5F00\u5173",prop:"switch",span:8,type:"switch",dicData:o.SEX,hide:!0,row:!0},{label:"\u6027\u522B",prop:"sex",type:"radio",dicData:o.SEX,row:!0},{label:"\u6570\u5B57",prop:"number",type:"number",span:8,precision:2,minRows:0,maxRows:3,row:!0},{label:"\u7F51\u7AD9",span:12,prop:"url",prepend:"http://",append:"com",row:!0},{label:"\u65E5\u671F",prop:"date",type:"date",span:8,format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"},{label:"\u65E5\u671F\u65F6\u95F4",prop:"datetime",type:"datetime",span:8,format:"YYYY-MM-DD hh:mm:ss",valueFormat:"YYYY-MM-DD hh:mm:ss"},{label:"\u65F6\u95F4",prop:"time",type:"time",span:8,format:"HH:mm:ss",valueFormat:"HH:mm:ss"},{label:"\u5730\u5740",span:24,prop:"address"},{label:"\u5EFA\u8BAE",span:24,type:"upload",listType:"picture-img",prop:"adit"},{label:"\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6",labelWidth:120,prop:"divider",component:"elTree",span:24,event:{click:()=>{const{ElMessage:a}=t.value;a.success("\u70B9\u51FB\u65B9\u6CD5")}},params:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]}]}},{label:"",labelWidth:40,prop:"divider",component:"elDivider",span:24,event:{click:()=>{const{ElMessage:a}=t.value;a.success("\u70B9\u51FB\u65B9\u6CD5")}},params:{html:'<h2 style="color:red">\u81EA\u5B9A\u4E49html\u6807\u7B7E,\u70B9\u6211\u89E6\u53D1\u65B9\u6CD5</h2>',contentPosition:"left"}}]});const M=(h=b())==null?void 0:h.proxy,F={qvDialogFormRef:l,ElementPlus:t,data:A,DIC:o,option:x,$proxy:M,open:()=>{var a;(a=l.value)==null||a.show((L,I,q)=>{q(),I(),console.log(L)})},getCurrentInstance:b,ref:e,nextTick:Y,onMounted:v};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}})}}()}},z='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/function.md","lastUpdated":1660901445000}',H=n("blockquote",null,[n("p",null,"\u51FD\u6570\u7528\u6CD5 \u540E\u671F\u66F4\u65B0")],-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("play-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u6253\u5F00\u5F39\u7A97"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-dialog-form")]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("data"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("qvDialogFormRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-dialog-form")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// code here"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getCurrentInstance"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" nextTick"),n("span",{class:"token punctuation"},","),s(" onMounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// import { QvDialogFormInstance } from '@qv-vue/qv-vue'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"qvDialogFormRef"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("QvDialogFormInstance "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6211\u662F\u7528\u6237\u540D'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"DIC"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token constant"},"VAILD"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u771F'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'true'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5047'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'false'"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token constant"},"SEX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"let"),s(" option "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"addTitle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6211\u662F\u6807\u9898'"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"submitText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5B8C\u6210'"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7528\u6237\u540D'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"tip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8FD9\u662F\u4FE1\u606F\u63D0\u793A'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"searchLabelWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"suffixIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Plus'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prefixIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"maxlength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"minlength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u7528\u6237\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'type'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VAILD"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6743\u9650'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'grade'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VAILD"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F00\u5173'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SEX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"hide"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SEX"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6570\u5B57'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"precision"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"minRows"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"maxRows"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F51\u7AD9'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'url'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prepend"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"append"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'com'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"valueFormat"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E5\u671F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'datetime'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'datetime'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD hh:mm:ss'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"valueFormat"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD hh:mm:ss'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'HH:mm:ss'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"valueFormat"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'HH:mm:ss'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5EFA\u8BAE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'upload'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"listType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'picture-img'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'adit'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token comment"},"//\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),s(`
		`),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"labelWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'divider'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'elTree'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//ele\u6811"),s(`
			`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"event"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"//\u7EC4\u4EF6\u4E8B\u4EF6"),s(`
				`),n("span",{class:"token function-variable function"},"click"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
					ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u70B9\u51FB\u65B9\u6CD5'"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level one 1'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
							`),n("span",{class:"token punctuation"},"{"),s(`
								`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level two 1-1'"),n("span",{class:"token punctuation"},","),s(`
								`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
									`),n("span",{class:"token punctuation"},"{"),s(`
										`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level three 1-1-1'"),s(`
									`),n("span",{class:"token punctuation"},"}"),s(`
								`),n("span",{class:"token punctuation"},"]"),s(`
							`),n("span",{class:"token punctuation"},"}"),s(`
						`),n("span",{class:"token punctuation"},"]"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level one 2'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
							`),n("span",{class:"token punctuation"},"{"),s(`
								`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level two 2-1'"),n("span",{class:"token punctuation"},","),s(`
								`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
									`),n("span",{class:"token punctuation"},"{"),s(`
										`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level three 2-1-1'"),s(`
									`),n("span",{class:"token punctuation"},"}"),s(`
								`),n("span",{class:"token punctuation"},"]"),s(`
							`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token punctuation"},"{"),s(`
								`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level two 2-2'"),n("span",{class:"token punctuation"},","),s(`
								`),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
									`),n("span",{class:"token punctuation"},"{"),s(`
										`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Level three 2-2-1'"),s(`
									`),n("span",{class:"token punctuation"},"}"),s(`
								`),n("span",{class:"token punctuation"},"]"),s(`
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
				`),n("span",{class:"token literal-property property"},"html"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`'<h2 style="color:red">\u81EA\u5B9A\u4E49html\u6807\u7B7E,\u70B9\u6211\u89E6\u53D1\u65B9\u6CD5</h2>'`),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"contentPosition"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" $proxy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?."),s(`proxy
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"open"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	qvDialogFormRef`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"close"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"//\u5173\u95ED\u52A0\u8F7D"),s(`
		`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token comment"},"// \u5173\u95ED\u5F39\u7A97"),s(`
		`),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token comment"},"// \u8868\u5355\u6570\u636E"),s(`
		console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function W(y,r,m,c,d,g){const u=B("render-demo-0"),k=B("demo");return R(),T("div",null,[H,f(k,{sourceCode:`<template>
	<div class="play-container">
		<el-button @click="open">\u6253\u5F00\u5F39\u7A97</el-button>
		<qv-dialog-form :option="option" :data="data" ref="qvDialogFormRef"></qv-dialog-form>
	</div>
</template>
<script setup lang="ts">
// code here
import { getCurrentInstance, ref, nextTick, onMounted } from 'vue'
// import { QvDialogFormInstance } from '@qv-vue/qv-vue'
const qvDialogFormRef: Ref<QvDialogFormInstance | undefined> = ref()
const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})
const data = ref({ username: '\u6211\u662F\u7528\u6237\u540D' })
const DIC = {
	VAILD: [
		{ label: '\u771F', value: 'true' },
		{ label: '\u5047', value: 'false' }
	],
	SEX: [
		{ label: '\u7537', value: 0 },
		{ label: '\u5973', value: 1 }
	]
}
let option = ref({
	size: 'default',
	addTitle: '\u6211\u662F\u6807\u9898',
	submitText: '\u5B8C\u6210',
	column: [
		{
			label: '\u7528\u6237\u540D',
			prop: 'username',
			tip: '\u8FD9\u662F\u4FE1\u606F\u63D0\u793A',
			span: 8,
			searchLabelWidth: 3,
			suffixIcon: 'Plus',
			prefixIcon: 'Search',
			maxlength: 3,
			minlength: 2,
			rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D', trigger: 'blur' }]
		},
		{ label: '\u59D3\u540D', prop: 'name', disabled: true, span: 8 },
		{ label: '\u5BC6\u7801', prop: 'password', type: 'password', span: 8 },
		{ label: '\u7C7B\u578B', prop: 'type', type: 'select', dicData: DIC.VAILD, span: 8 },
		{ label: '\u6743\u9650', prop: 'grade', span: 8, type: 'checkbox', dicData: DIC.VAILD },
		{ label: '\u5F00\u5173', prop: 'switch', span: 8, type: 'switch', dicData: DIC.SEX, hide: true, row: true },
		{ label: '\u6027\u522B', prop: 'sex', type: 'radio', dicData: DIC.SEX, row: true },
		{ label: '\u6570\u5B57', prop: 'number', type: 'number', span: 8, precision: 2, minRows: 0, maxRows: 3, row: true },
		{ label: '\u7F51\u7AD9', span: 12, prop: 'url', prepend: 'http://', append: 'com', row: true },
		{ label: '\u65E5\u671F', prop: 'date', type: 'date', span: 8, format: 'YYYY-MM-DD', valueFormat: 'YYYY-MM-DD' },
		{ label: '\u65E5\u671F\u65F6\u95F4', prop: 'datetime', type: 'datetime', span: 8, format: 'YYYY-MM-DD hh:mm:ss', valueFormat: 'YYYY-MM-DD hh:mm:ss' },
		{ label: '\u65F6\u95F4', prop: 'time', type: 'time', span: 8, format: 'HH:mm:ss', valueFormat: 'HH:mm:ss' },
		{ label: '\u5730\u5740', span: 24, prop: 'address' },
		{ label: '\u5EFA\u8BAE', span: 24, type: 'upload', listType: 'picture-img', prop: 'adit' },
		//\u81EA\u5B9A\u4E49\u7EC4\u4EF6
		{
			label: '\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
			labelWidth: 120,
			prop: 'divider',
			component: 'elTree', //ele\u6811
			span: 24,
			event: {
				//\u7EC4\u4EF6\u4E8B\u4EF6
				click: () => {
					const { ElMessage } = ElementPlus.value
					ElMessage.success('\u70B9\u51FB\u65B9\u6CD5')
				}
			},
			params: {
				data: [
					{
						label: 'Level one 1',
						children: [
							{
								label: 'Level two 1-1',
								children: [
									{
										label: 'Level three 1-1-1'
									}
								]
							}
						]
					},
					{
						label: 'Level one 2',
						children: [
							{
								label: 'Level two 2-1',
								children: [
									{
										label: 'Level three 2-1-1'
									}
								]
							},
							{
								label: 'Level two 2-2',
								children: [
									{
										label: 'Level three 2-2-1'
									}
								]
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
				html: '<h2 style="color:red">\u81EA\u5B9A\u4E49html\u6807\u7B7E,\u70B9\u6211\u89E6\u53D1\u65B9\u6CD5</h2>',
				contentPosition: 'left'
			}
		}
	]
})
const $proxy = getCurrentInstance()?.proxy
const open = () => {
	qvDialogFormRef.value?.show((data: any, close: () => void, done: () => void) => {
		//\u5173\u95ED\u52A0\u8F7D
		done()
		// \u5173\u95ED\u5F39\u7A97
		close()
		// \u8868\u5355\u6570\u636E
		console.log(data)
	})
}
<\/script>
`},{highlight:E(()=>[N]),default:E(()=>[f(u)]),_:1})])}var j=V(S,[["render",W]]);export{z as __pageData,j as default};
