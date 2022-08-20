import{_ as x,e as q,c as S,a as h,w as A,V as f,b as n,r as w,o as P,d as s}from"./app.2e64142b.js";const j={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:r,resolveComponent:k,createVNode:u,toDisplayString:E,createTextVNode:i,withCtx:y,openBlock:m,createElementBlock:g}=f,M=r("div",null,"\u8BBE\u7F6Egutter\u5C5E\u6027\u8C03\u8282\u680F\u4E4B\u95F4\u7684\u8DDD\u79BB",-1),_=i(" \u8BE6\u60C5\u5C55\u793A: "),Y=i("\u81EA\u5B9A\u4E49\u6309\u94AE");function V(a,o){const e=k("el-slider"),p=k("el-button"),l=k("qv-form");return m(),g("div",null,[r("div",null,[M,u(e,{modelValue:a.config.gutter,"onUpdate:modelValue":o[0]||(o[0]=c=>a.config.gutter=c)},null,8,["modelValue"]),r("div",null,[_,u(p,{onClick:o[1]||(o[1]=c=>a.config.detail=!a.config.detail),style:{"margin-left":"20px"}},{default:y(()=>[i(E(a.config.detail?"\u5C55\u793A\u8868\u5355":"\u5C55\u793A\u8BE6\u60C5"),1)]),_:1})]),u(l,{ref:"form",modelValue:a.config.obj,"onUpdate:modelValue":o[2]||(o[2]=c=>a.config.obj=c),option:a.option,onResetChange:a.emptytChange,onSubmit:a.submit},{"menu-form":y(()=>[u(p,{onClick:a.tip},{default:y(()=>[Y]),_:1},8,["onClick"])]),_:1},8,["modelValue","option","onResetChange","onSubmit"])])])}const{defineComponent:I}=f,{computed:v,reactive:D,onMounted:F,ref:C}=f;return{render:V,...I({setup(a,{expose:o}){o();const e=C();F(()=>{q(()=>import("./app.2e64142b.js").then(function(t){return t.ao}),[]).then(t=>{e.value=t})});const p={VAILD:[{label:"\u771F",value:"true"},{label:"\u5047",value:"false"}],SEX:[{label:"\u7537",value:0},{label:"\u5973",value:1}]};let l=D({showLoading:!1,obj:{},sizeValue:"default",gutter:20,detail:!1});const c=v(()=>({size:l.sizeValue,submitText:"\u5B8C\u6210",printBtn:!1,gutter:l.gutter,detail:l.detail,column:[{label:"\u7528\u6237\u540D",prop:"username",tip:"\u8FD9\u662F\u4FE1\u606F\u63D0\u793A",span:8,suffixIcon:"Plus",prefixIcon:"Search",maxlength:3,minlength:2,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],click:({value:t,column:d})=>{const{ElMessage:b}=e.value;console.log(t,d),b.success("click")}},{label:"\u59D3\u540D",prop:"name",disabled:!0,span:8},{label:"\u5BC6\u7801",prop:"password",type:"password",span:8},{label:"\u7C7B\u578B",prop:"type",type:"select",dicData:p.VAILD,span:8},{label:"\u6743\u9650",prop:"grade",span:8,type:"checkbox",dicData:p.VAILD},{label:"\u5F00\u5173",prop:"switch",span:8,type:"switch",dicData:p.SEX,hide:!0,row:!0},{label:"\u6027\u522B",prop:"sex",type:"radio",dicData:p.SEX,row:!0,span:24,order:1},{label:"\u6570\u5B57",prop:"number",type:"number",precision:2,minRows:0,maxRows:3},{label:"\u7F51\u7AD9",span:12,prop:"url",prepend:"http://",append:"com",row:!0,value:"90909090"},{label:"\u65E5\u671F",prop:"date",type:"date",span:8,format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"},{label:"\u65E5\u671F\u65F6\u95F4",prop:"datetime",type:"datetime",span:8,format:"YYYY-MM-DD hh:mm:ss",valueFormat:"YYYY-MM-DD hh:mm:ss"},{label:"\u65F6\u95F4",prop:"time",type:"time",span:8,format:"HH:mm:ss",valueFormat:"HH:mm:ss"},{label:"\u5730\u5740",span:24,prop:"address"},{label:"\u5EFA\u8BAE",span:24,type:"upload",action:"api/upload",listType:"picture-img",prop:"adit"}]})),B={ElementPlus:e,DIC1:p,config:l,option:c,emptytChange:()=>{const{ElMessage:t}=e.value;t.success("\u6E05\u7A7A\u65B9\u6CD5\u56DE\u8C03")},submit:(t,d)=>{const{ElMessage:b}=e.value;console.log("\u8FC7\u6EE4\u6570\u636E--",t),console.log("\u6B63\u5E38\u6570\u636E--",l.obj),d(),b.success("\u5F53\u524D\u6570\u636E"+JSON.stringify(l.obj))},tip:()=>{const{ElMessage:t}=e.value;t.success("\u81EA\u5B9A\u4E49\u6309\u94AE")},computed:v,reactive:D,onMounted:F,ref:C};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}})}}()}},X='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/basics.md","lastUpdated":1658992381000}',L=n("blockquote",null,[n("p",null,"\u57FA\u7840\u7528\u6CD5")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("\u8BBE\u7F6Egutter\u5C5E\u6027\u8C03\u8282\u680F\u4E4B\u95F4\u7684\u8DDD\u79BB"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-slider")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.gutter"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-slider")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
			\u8BE6\u60C5\u5C55\u793A:
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.detail = !config.detail"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(" {{ !config.detail ? '\u5C55\u793A\u8BE6\u60C5' : '\u5C55\u793A\u8868\u5355' }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-form")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("form"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.obj"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@reset-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("emptytChange"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#menu-form"),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tip"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u81EA\u5B9A\u4E49\u6309\u94AE"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("qv-form")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" computed"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token comment"},"// import { QvOption, QvValue } from '@qv-vue/es/types/qvue-ui'"),s(`
`),n("span",{class:"token keyword"},"const"),s(" ElementPlus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"DIC1"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token constant"},"VAILD"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u771F'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'true'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5047'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'false'"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token constant"},"SEX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"let"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token literal-property property"},"showLoading"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"obj"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"sizeValue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),s(),n("span",{class:"token keyword"},"as"),s(),n("span",{class:"token string"},"''"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'default'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'small'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'large'"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"gutter"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"detail"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" option "),n("span",{class:"token operator"},"="),s(" computed"),n("span",{class:"token operator"},"<"),s("QvOption"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"QvOption"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),s(" config"),n("span",{class:"token punctuation"},"."),s("sizeValue"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"submitText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5B8C\u6210'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"printBtn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"gutter"),n("span",{class:"token operator"},":"),s(" config"),n("span",{class:"token punctuation"},"."),s("gutter"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"detail"),n("span",{class:"token operator"},":"),s(" config"),n("span",{class:"token punctuation"},"."),s("detail"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7528\u6237\u540D'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"tip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8FD9\u662F\u4FE1\u606F\u63D0\u793A'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u683C\u6805\u680F\u6570"),s(`
				`),n("span",{class:"token literal-property property"},"suffixIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Plus'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prefixIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Search'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"maxlength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"minlength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u7528\u6237\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'blur'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token function-variable function"},"click"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" value"),n("span",{class:"token punctuation"},","),s(" column "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(" QvValue"),n("span",{class:"token punctuation"},";"),s(" column"),n("span",{class:"token operator"},":"),s(" unknown "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
					console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},")"),s(`
					ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'type'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VAILD"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6743\u9650'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'grade'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VAILD"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F00\u5173'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SEX"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"hide"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"DIC1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SEX"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"order"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"// \u5B57\u6BB5\u6392\u5E8F"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6570\u5B57'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"precision"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"minRows"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"maxRows"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F51\u7AD9'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'url'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prepend"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"append"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'com'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'90909090'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"valueFormat"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E5\u671F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'datetime'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'datetime'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD hh:mm:ss'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"valueFormat"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'YYYY-MM-DD hh:mm:ss'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'HH:mm:ss'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"valueFormat"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'HH:mm:ss'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5EFA\u8BAE'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'upload'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"action"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'api/upload'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"listType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'picture-img'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'adit'"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"emptytChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6E05\u7A7A\u65B9\u6CD5\u56DE\u8C03'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("form"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"done"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8FC7\u6EE4\u6570\u636E--'"),n("span",{class:"token punctuation"},","),s(" form"),n("span",{class:"token punctuation"},")"),s(`
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6B63\u5E38\u6570\u636E--'"),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},"."),s("obj"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5F53\u524D\u6570\u636E'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tip"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u6309\u94AE'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function N(r,k,u,E,i,y){const m=w("render-demo-0"),g=w("demo");return P(),S("div",null,[L,h(g,{sourceCode:`<template>
	<div>
		<div>\u8BBE\u7F6Egutter\u5C5E\u6027\u8C03\u8282\u680F\u4E4B\u95F4\u7684\u8DDD\u79BB</div>
		<el-slider v-model="config.gutter"></el-slider>
		<div>
			\u8BE6\u60C5\u5C55\u793A:
			<el-button @click="config.detail = !config.detail" style="margin-left: 20px"> {{ !config.detail ? '\u5C55\u793A\u8BE6\u60C5' : '\u5C55\u793A\u8868\u5355' }}</el-button>
		</div>
		<qv-form ref="form" v-model="config.obj" :option="option" @reset-change="emptytChange" @submit="submit">
			<template #menu-form>
				<el-button @click="tip">\u81EA\u5B9A\u4E49\u6309\u94AE</el-button>
			</template>
		</qv-form>
	</div>
</template>

<script lang="ts" setup>
import { computed, reactive, onMounted, ref } from 'vue'
// import { QvOption, QvValue } from '@qv-vue/es/types/qvue-ui'
const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})
const DIC1 = {
	VAILD: [
		{ label: '\u771F', value: 'true' },
		{ label: '\u5047', value: 'false' }
	],
	SEX: [
		{ label: '\u7537', value: 0 },
		{ label: '\u5973', value: 1 }
	]
}
let config = reactive({
	showLoading: false,
	obj: {},
	sizeValue: 'default' as '' | 'default' | 'small' | 'large',
	gutter: 20,
	detail: false
})
const option = computed<QvOption>((): QvOption => {
	return {
		size: config.sizeValue,
		submitText: '\u5B8C\u6210',
		printBtn: false,
		gutter: config.gutter,
		detail: config.detail,
		column: [
			{
				label: '\u7528\u6237\u540D',
				prop: 'username',
				tip: '\u8FD9\u662F\u4FE1\u606F\u63D0\u793A',
				span: 8, //\u683C\u6805\u680F\u6570
				suffixIcon: 'Plus',
				prefixIcon: 'Search',
				maxlength: 3,
				minlength: 2,
				rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D', trigger: 'blur' }],
				click: ({ value, column }: { value: QvValue; column: unknown }) => {
					const { ElMessage } = ElementPlus.value
					console.log(value, column)
					ElMessage.success('click')
				}
			},
			{ label: '\u59D3\u540D', prop: 'name', disabled: true, span: 8 },
			{ label: '\u5BC6\u7801', prop: 'password', type: 'password', span: 8 },
			{ label: '\u7C7B\u578B', prop: 'type', type: 'select', dicData: DIC1.VAILD, span: 8 },
			{
				label: '\u6743\u9650',
				prop: 'grade',
				span: 8,
				type: 'checkbox',
				dicData: DIC1.VAILD
			},
			{
				label: '\u5F00\u5173',
				prop: 'switch',
				span: 8,
				type: 'switch',
				dicData: DIC1.SEX,
				hide: true,
				row: true
			},
			{
				label: '\u6027\u522B',
				prop: 'sex',
				type: 'radio',
				dicData: DIC1.SEX,
				row: true,
				span: 24,
				order: 1 // \u5B57\u6BB5\u6392\u5E8F
			},
			{
				label: '\u6570\u5B57',
				prop: 'number',
				type: 'number',
				precision: 2,
				minRows: 0,
				maxRows: 3
			},
			{
				label: '\u7F51\u7AD9',
				span: 12,
				prop: 'url',
				prepend: 'http://',
				append: 'com',
				row: true,
				value: '90909090'
			},
			{
				label: '\u65E5\u671F',
				prop: 'date',
				type: 'date',
				span: 8,
				format: 'YYYY-MM-DD',
				valueFormat: 'YYYY-MM-DD'
			},
			{
				label: '\u65E5\u671F\u65F6\u95F4',
				prop: 'datetime',
				type: 'datetime',
				span: 8,
				format: 'YYYY-MM-DD hh:mm:ss',
				valueFormat: 'YYYY-MM-DD hh:mm:ss'
			},
			{
				label: '\u65F6\u95F4',
				prop: 'time',
				type: 'time',
				span: 8,
				format: 'HH:mm:ss',
				valueFormat: 'HH:mm:ss'
			},
			{
				label: '\u5730\u5740',
				span: 24,
				prop: 'address'
			},
			{
				label: '\u5EFA\u8BAE',
				span: 24,
				type: 'upload',
				action: 'api/upload',
				listType: 'picture-img',
				prop: 'adit'
			}
		]
	}
})
const emptytChange = () => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u6E05\u7A7A\u65B9\u6CD5\u56DE\u8C03')
}
const submit = (form: any, done: () => void) => {
	const { ElMessage } = ElementPlus.value
	console.log('\u8FC7\u6EE4\u6570\u636E--', form)
	console.log('\u6B63\u5E38\u6570\u636E--', config.obj)
	done()
	ElMessage.success('\u5F53\u524D\u6570\u636E' + JSON.stringify(config.obj))
}
const tip = () => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u81EA\u5B9A\u4E49\u6309\u94AE')
}
<\/script>
`},{highlight:A(()=>[H]),default:A(()=>[h(m)]),_:1})])}var $=x(j,[["render",N]]);export{X as __pageData,$ as default};
