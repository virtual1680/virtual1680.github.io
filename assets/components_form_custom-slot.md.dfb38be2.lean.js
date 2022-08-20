import{_ as O,e as T,c as U,a as b,w as q,V as y,b as n,r as D,o as I,d as t}from"./app.2e64142b.js";const Q={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:l,resolveComponent:u,withCtx:o,createVNode:p,toDisplayString:f,createTextVNode:r,openBlock:g,createElementBlock:d}=y,x=l("span",null,"\u59D3\u540D22",-1),C=l("i",{class:"el-icon-warning"},null,-1),h={style:{color:"pink"}},N=r("\u81EA\u5B9A\u4E49\u63D0\u4EA4"),w=r("\u81EA\u5B9A\u4E49\u6E05\u7A7A");function V(s,c){const k=u("el-tooltip"),i=u("el-tag"),m=u("el-input"),v=u("el-button"),B=u("qv-form");return g(),d("div",null,[p(B,{modelValue:s.config.form,"onUpdate:modelValue":c[1]||(c[1]=e=>s.config.form=e),ref:"qvFormRef",option:s.config.option},{"text-label":o(()=>[x,p(k,{class:"item",effect:"dark",content:"\u6587\u5B57\u63D0\u793A",placement:"top-start"},{default:o(()=>[C]),_:1})]),text:o(e=>[l("div",null,[p(i,null,{default:o(()=>[r(f(s.config.form.text?s.config.form.text:"\u6682\u65F6\u6CA1\u6709\u5185\u5BB9"),1)]),_:1}),p(m,{modelValue:s.config.form.text,"onUpdate:modelValue":c[0]||(c[0]=a=>s.config.form.text=a),placeholder:"\u8FD9\u91CC\u662F\u81EA\u5B9A\u7684\u8868\u5355"},null,8,["modelValue"]),r(" "+f(e),1)])]),"text-error":o(({error:e})=>[l("p",h,"\u81EA\u5B9A\u4E49\u63D0\u793A"+f(e),1)]),"menu-form":o(({})=>[p(v,{icon:"User",type:"primary",onClick:s.handleSubmit},{default:o(()=>[N]),_:1},8,["onClick"]),p(v,{icon:"Delete",onClick:s.handleEmpty},{default:o(()=>[w]),_:1},8,["onClick"])]),_:1},8,["modelValue","option"])])}const{defineComponent:R}=y,{reactive:A,ref:E,Ref:S,onMounted:_}=y;return{render:V,...R({setup(s,{expose:c}){c();const k=E();_(()=>{T(()=>import("./app.2e64142b.js").then(function(a){return a.ao}),[]).then(a=>{k.value=a})});const i=E();let m=A({form:{text:""},option:{emptyBtn:!1,submitBtn:!1,column:[{label:"\u59D3\u540D",prop:"text",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}]},{label:"\u6027\u522B",prop:"sex",labelPosition:"top",span:6,className:"formClassName"}]}});const e={ElementPlus:k,qvFormRef:i,config:m,handleEmpty:()=>{var a;(a=i.value)==null||a.resetForm(),m.form.text=""},handleSubmit:()=>{var F;const{ElMessage:a}=k.value;(F=i.value)==null||F.validate((P,M)=>{P&&(a.success(JSON.stringify(m.form)),setTimeout(()=>{M()},2e3))})},reactive:A,ref:E,Ref:S,onMounted:_};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}})}}()}},G='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/custom-slot.md","lastUpdated":1658992381000}',$=n("blockquote",null,[n("p",null,"\u81EA\u5B9A\u4E49\u5361\u69FD ->\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u6807\u9898\u3001\u9519\u8BEF\u63D0\u793A\u3001\u6309\u94AE\u3001\u6837\u5F0F")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("qv-form")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("qvFormRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49label -->"),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#text-label"),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("\u59D3\u540D22"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-tooltip")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"effect"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6587\u5B57\u63D0\u793A"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top-start"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("i")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("el-icon-warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("i")]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-tooltip")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u5185\u5BB9 #text \u662F column \u7684 prop \u4E0E\u4E4B\u76F8\u5BF9\u5E94 -->"),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-tag")]),n("span",{class:"token punctuation"},">")]),t("{{ config.form.text ? config.form.text : '\u6682\u65F6\u6CA1\u6709\u5185\u5BB9' }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-tag")]),n("span",{class:"token punctuation"},">")]),t(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("config.form.text"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8FD9\u91CC\u662F\u81EA\u5B9A\u7684\u8868\u5355"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-input")]),n("span",{class:"token punctuation"},">")]),t(`
				{{ scope }}
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u9519\u8BEF\u63D0\u793A -->"),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#text-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ error }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" pink")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49\u63D0\u793A{{ error }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u6309\u94AE -->"),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#menu-form"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{}"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("User"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("el-button")]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Delete"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleEmpty"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49\u6E05\u7A7A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("el-button")]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("qv-form")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" Ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token comment"},"// import { ElMessage } from 'element-plus'"),t(`
`),n("span",{class:"token comment"},"// import type { FormInstance } from 'qv-vue'"),t(`
`),n("span",{class:"token comment"},"// import { QvOption } from 'qv-vue/es/types/qvue-ui'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" ElementPlus "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'element-plus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"module"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		ElementPlus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` module
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"qvFormRef"),n("span",{class:"token operator"},":"),t(" Ref"),n("span",{class:"token operator"},"<"),t("FormInstance "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"let"),t(" config "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token literal-property property"},"form"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
	`),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"emptyBtn"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u9690\u85CF\u672C\u8EAB\u7684\u6E05\u7A7A\u6309\u94AE"),t(`
		`),n("span",{class:"token literal-property property"},"submitBtn"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u9690\u85CF\u672C\u8EAB\u7684\u63D0\u4EA4\u6309\u94AE"),t(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
			`),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blur'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
			`),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"labelPosition"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"span"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),t(`
				`),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'formClassName'"),t(),n("span",{class:"token comment"},"//\u81EA\u5B9A\u4E49\u6837\u5F0F"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"]"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"as"),t(` QvOption
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleEmpty"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
	qvFormRef`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"resetForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
	config`),n("span",{class:"token punctuation"},"."),t("form"),n("span",{class:"token punctuation"},"."),t("text "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"''"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSubmit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" ElMessage "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" ElementPlus"),n("span",{class:"token punctuation"},"."),t(`value
	qvFormRef`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("vaild"),n("span",{class:"token punctuation"},","),t(" done")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("vaild"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("config"),n("span",{class:"token punctuation"},"."),t("form"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
			`),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".formClassName"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0 0 0 55px "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #ffffff"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" red"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function j(l,u,o,p,f,r){const g=D("render-demo-0"),d=D("demo");return I(),U("div",null,[$,b(d,{sourceCode:`<template>
	<qv-form v-model="config.form" ref="qvFormRef" :option="config.option">
		<!-- \u81EA\u5B9A\u4E49label -->
		<template #text-label>
			<span>\u59D3\u540D22</span>
			<el-tooltip class="item" effect="dark" content="\u6587\u5B57\u63D0\u793A" placement="top-start">
				<i class="el-icon-warning"></i>
			</el-tooltip>
		</template>
		<!-- \u81EA\u5B9A\u4E49\u5185\u5BB9 #text \u662F column \u7684 prop \u4E0E\u4E4B\u76F8\u5BF9\u5E94 -->
		<template #text="scope">
			<div>
				<el-tag>{{ config.form.text ? config.form.text : '\u6682\u65F6\u6CA1\u6709\u5185\u5BB9' }}</el-tag>
				<el-input v-model="config.form.text" placeholder="\u8FD9\u91CC\u662F\u81EA\u5B9A\u7684\u8868\u5355"></el-input>
				{{ scope }}
			</div>
		</template>
		<!-- \u81EA\u5B9A\u4E49\u9519\u8BEF\u63D0\u793A -->
		<template #text-error="{ error }">
			<p style="color: pink">\u81EA\u5B9A\u4E49\u63D0\u793A{{ error }}</p>
		</template>
		<!-- \u81EA\u5B9A\u4E49\u6309\u94AE -->
		<template #menu-form="{}">
			<el-button icon="User" type="primary" @click="handleSubmit">\u81EA\u5B9A\u4E49\u63D0\u4EA4</el-button>
			<el-button icon="Delete" @click="handleEmpty">\u81EA\u5B9A\u4E49\u6E05\u7A7A</el-button>
		</template>
	</qv-form>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, onMounted } from 'vue'
// import { ElMessage } from 'element-plus'
// import type { FormInstance } from 'qv-vue'
// import { QvOption } from 'qv-vue/es/types/qvue-ui'

const ElementPlus = ref()
onMounted(() => {
	import('element-plus').then(module => {
		ElementPlus.value = module
	})
})
const qvFormRef: Ref<FormInstance | undefined> = ref()
let config = reactive({
	form: {
		text: ''
	},
	option: {
		emptyBtn: false, //\u9690\u85CF\u672C\u8EAB\u7684\u6E05\u7A7A\u6309\u94AE
		submitBtn: false, //\u9690\u85CF\u672C\u8EAB\u7684\u63D0\u4EA4\u6309\u94AE
		column: [
			{
				label: '\u59D3\u540D',
				prop: 'text',
				rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D', trigger: 'blur' }]
			},
			{
				label: '\u6027\u522B',
				prop: 'sex',
				labelPosition: 'top',
				span: 6,
				className: 'formClassName' //\u81EA\u5B9A\u4E49\u6837\u5F0F
			}
		]
	} as QvOption
})
const handleEmpty = () => {
	qvFormRef.value?.resetForm()
	config.form.text = ''
}
const handleSubmit = () => {
	const { ElMessage } = ElementPlus.value
	qvFormRef.value?.validate((vaild, done) => {
		if (vaild) {
			ElMessage.success(JSON.stringify(config.form))
			setTimeout(() => {
				done()
			}, 2000)
		}
	})
}
<\/script>
<style>
.formClassName {
	padding: 0 0 0 55px !important;
	color: #ffffff;
	background-color: red;
}
</style>
`},{highlight:q(()=>[J]),default:q(()=>[b(g)]),_:1})])}var H=O(Q,[["render",j]]);export{G as __pageData,H as default};
