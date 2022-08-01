import{_ as P,e as M,c as N,a as F,w as D,V as w,b as n,r as _,o as L,d as s}from"./app.c74dcb0e.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:r,resolveComponent:k,withCtx:c,createVNode:u,createElementVNode:f,openBlock:b,createElementBlock:y}=w,m=r("\u9009\u4E2D\u7B2C\u4E8C\u884C"),S=r("\u53D6\u6D88\u9009\u62E9"),I=r("\u81EA\u5B9A\u4E49\u5185\u5BB9");function A(e,l){const o=k("el-button"),i=k("el-tag"),p=k("qv-crud");return b(),y("div",null,[f("div",null,[u(p,{ref:"avueRef",data:e.config.data,option:e.option,onSelectionChange:e.selectionChange,onOnLoad:e.onLoad,onRowClick:e.rowClick,page:e.config.page,"row-class-name":e.tableRowClassName},{"menu-left":c(({size:d})=>[u(o,{type:"success",icon:"Check",size:d,onClick:l[0]||(l[0]=x=>e.toggleSelection([e.config.data[1]]))},{default:c(()=>[m]),_:2},1032,["size"]),u(o,{type:"danger",icon:"Delete",size:d,onClick:l[1]||(l[1]=x=>e.toggleSelection())},{default:c(()=>[S]),_:2},1032,["size"])]),tip:c(()=>[u(i,{type:"danger",size:"mini"},{default:c(()=>[I]),_:1})]),_:1},8,["data","option","onSelectionChange","onOnLoad","onRowClick","page","row-class-name"])])])}const{defineComponent:R}=w,{reactive:E,computed:v,ref:g,onMounted:h,nextTick:q}=w;return{render:A,...R({setup(e,{expose:l}){l();const o=g();h(()=>{M(()=>import("./app.c74dcb0e.js").then(function(a){return a.au}),[]).then(a=>{o.value=a})});const i=g();let p=E({selectRow:"",page:{total:0,currentPage:1,pageSize:2},search:{name:"small",sex:1},data:[{name:"\u5F20\u4E09",sex:"\u7537"},{name:"\u738B\u4E94",sex:"\u5973"}],menuType:"text",showLoading:!1,showCard:!1,showBorder:!0,showStripe:!1,showHeader:!0,showIndex:!0,showCheckbox:!1,showPage:!0,sizeValue:"small"});const d=v(()=>({tip:!0,border:!0,stripe:!0,selection:!0,searchMenuSpan:6,selectable:(a,t)=>t===1,reserveSelection:!1,index:!0,rowKey:"name",column:[{label:"\u59D3\u540D",type:"input",prop:"name",search:!0},{search:!0,label:"\u6027\u522B",prop:"sex",type:"select",dicData:[{label:"\u7537",value:1},{label:"\u5973",value:2}]},{search:!0,label:"\u6027\u522B1",prop:"sex1",type:"select",dicData:[{label:"\u7537",value:1},{label:"\u5973",value:2}]}]})),C={ElementPlus:o,avueRef:i,config:p,option:d,onLoad:a=>{console.log("-=-=-=onLoad-=-=-==--=-=",a),p.page.total=4,a.currentPage===1?p.data=[{name:"\u5F20\u4E09",sex:"\u7537"},{name:"\u674E\u56DB",sex:"\u5973"}]:a.currentPage==2&&(p.data=[{name:"\u738B\u4E94",sex:"\u5973"},{name:"\u8D75\u516D",sex:"\u5973"}])},spanMethod:({row:a,column:t,rowIndex:z,columnIndex:B})=>{if(z%2===0){if(B===0)return[1,2];if(B===1)return[0,0]}},rowClick:a=>{p.selectRow=a.$index;const{ElMessage:t}=o.value;t.success("\u9009\u62E9\u5E8F\u53F7"+a.$index)},selectionChange:a=>{const{ElMessage:t}=o.value;t.success("\u9009\u4E2D\u7684\u6570\u636E"+JSON.stringify(a))},toggleSelection:a=>{var t;(t=i.value)==null||t.toggleSelection(a)},rowStyle:({rowIndex:a})=>{if(a%2===0)return{backgroundColor:"#eee",color:"red"}},cellStyle:({row:a,columnIndex:t})=>{if(t==1)return a.money<=3e3?{color:"green",fontWeight:"bold",fontSize:"20"}:{color:"red",fontWeight:"bold",fontSize:"20"}},tableRowClassName:({row:a,rowIndex:t})=>t===0?"warning-row":t===1?"success-row":"",reactive:E,computed:v,ref:g,onMounted:h,nextTick:q};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}})}}()}},Z='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/crud/row.md","lastUpdated":1659102658000}',$=n("blockquote",null,[n("p",null,"\u8868\u884C\u8BBE\u7F6E")],-1),T=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"\u8868\u683C\u52FE\u9009\u53EF\u914D\u7F6E\u5355\u9009")],-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
		`),n("span",{class:"token comment"},'<!-- :cell-style="cellStyle"  \u4FEE\u6539\u5217\u6837\u5F0F-->'),s(`
		`),n("span",{class:"token comment"},'<!-- :row-style="rowStyle" \u4FEE\u6539\u884C\u6837\u5F0F-->'),s(`
		`),n("span",{class:"token comment"},'<!-- :span-method="spanMethod" \u5217\u5408\u5E76 -->'),s(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("qv-crud")]),s(`
			`),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avueRef"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.data"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("option"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@selection-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectionChange"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@on-load"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onLoad"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},"@row-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rowClick"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},":page"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("config.page"),n("span",{class:"token punctuation"},'"')]),s(`
			`),n("span",{class:"token attr-name"},":row-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableRowClassName"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token comment"},"<!-- \u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6309\u94AE -->"),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#menu-left"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ size }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Check"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toggleSelection([config.data[1]])"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u9009\u4E2D\u7B2C\u4E8C\u884C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Delete"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toggleSelection()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u53D6\u6D88\u9009\u62E9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#tip"),n("span",{class:"token punctuation"},">")]),s(`
				`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-tag")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("danger"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mini"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u81EA\u5B9A\u4E49\u5185\u5BB9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-tag")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
			`),n("span",{class:"token comment"},"<!-- \u914D\u7F6E\u5355\u9009 \u7B2C\u4E8C\u6B65-->"),s(`
			`),n("span",{class:"token comment"},`<!-- <template #radio="{ row }">
				<el-radio v-model="config.selectRow" :label="row.$index">-</el-radio>
			</template> -->`),s(`
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
	`),n("span",{class:"token literal-property property"},"selectRow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"page"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"total"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"currentPage"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"pageSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'small'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u738B\u4E94'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"menuType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showLoading"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showCard"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showBorder"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showStripe"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showHeader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showCheckbox"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"showPage"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token literal-property property"},"sizeValue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'small'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" option "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token literal-property property"},"tip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u662F\u5426\u663E\u793A\u591A\u9009\u63D0\u793A\u4FE1\u606F"),s(`
		`),n("span",{class:"token literal-property property"},"border"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u662F\u5426\u663E\u793A\u8FB9\u6846"),s(`
		`),n("span",{class:"token literal-property property"},"stripe"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6591\u9A6C\u7EBF"),s(`
		`),n("span",{class:"token literal-property property"},"selection"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u662F\u5426\u5F00\u542F\u591A\u9009"),s(`
		`),n("span",{class:"token literal-property property"},"searchMenuSpan"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token comment"},"// \u7981\u6B62\u9009\u62E9\u7B2C\u4E00\u6761"),s(`
		`),n("span",{class:"token function-variable function"},"selectable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"index"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(" index "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"reserveSelection"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u5206\u9875\u4FDD\u7559\u4E4B\u524D\u52FE\u9009\u7684\u6570\u636E"),s(`
		`),n("span",{class:"token literal-property property"},"index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"rowKey"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token comment"},"// { label: '', prop: 'radio', width: 60, hide: false }, //\u914D\u7F6E\u5355\u9009 \u7B2C\u4E00\u6B65"),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"search"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B1'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex1'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"dicData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onLoad"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"page"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'-=-=-=onLoad-=-=-==--=-='"),n("span",{class:"token punctuation"},","),s(" page"),n("span",{class:"token punctuation"},")"),s(`
	config`),n("span",{class:"token punctuation"},"."),s("page"),n("span",{class:"token punctuation"},"."),s("total "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),s(`
	`),n("span",{class:"token comment"},"//\u6A21\u62DF\u5206\u9875"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("page"),n("span",{class:"token punctuation"},"."),s("currentPage "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		config`),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u674E\u56DB'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("page"),n("span",{class:"token punctuation"},"."),s("currentPage "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		config`),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u738B\u4E94'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D75\u516D'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5973'"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// \u5217\u5408\u5E76\u7B56\u7565"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"spanMethod"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex"),n("span",{class:"token punctuation"},","),s(" columnIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowIndex "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("columnIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("columnIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowClick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"row"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	config`),n("span",{class:"token punctuation"},"."),s("selectRow "),n("span",{class:"token operator"},"="),s(" row"),n("span",{class:"token punctuation"},"."),s(`$index
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u9009\u62E9\u5E8F\u53F7'"),s(),n("span",{class:"token operator"},"+"),s(" row"),n("span",{class:"token punctuation"},"."),s("$index"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"selectionChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"list"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" ElementPlus"),n("span",{class:"token punctuation"},"."),s(`value
	ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u9009\u4E2D\u7684\u6570\u636E'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("list"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"toggleSelection"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("val"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	avueRef`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"toggleSelection"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowStyle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},";"),s(" rowIndex"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowIndex "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"backgroundColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#eee'"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'red'"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"cellStyle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" columnIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},";"),s(" column"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},";"),s(" rowIndex"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},";"),s(" columnIndex"),n("span",{class:"token operator"},":"),s(" number "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("columnIndex "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("row"),n("span",{class:"token punctuation"},"."),s("money "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"fontWeight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"fontWeight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bold'"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableRowClassName"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" rowIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'warning-row'"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'success-row'"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"''"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function W(r,k,c,u,f,b){const y=_("render-demo-0"),m=_("demo");return L(),N("div",null,[$,T,F(m,{sourceCode:`<template>
	<div>
		<!-- :cell-style="cellStyle"  \u4FEE\u6539\u5217\u6837\u5F0F-->
		<!-- :row-style="rowStyle" \u4FEE\u6539\u884C\u6837\u5F0F-->
		<!-- :span-method="spanMethod" \u5217\u5408\u5E76 -->
		<qv-crud
			ref="avueRef"
			:data="config.data"
			:option="option"
			@selection-change="selectionChange"
			@on-load="onLoad"
			@row-click="rowClick"
			:page="config.page"
			:row-class-name="tableRowClassName">
			<!-- \u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6309\u94AE -->
			<template #menu-left="{ size }">
				<el-button type="success" icon="Check" :size="size" @click="toggleSelection([config.data[1]])">\u9009\u4E2D\u7B2C\u4E8C\u884C</el-button>
				<el-button type="danger" icon="Delete" :size="size" @click="toggleSelection()">\u53D6\u6D88\u9009\u62E9</el-button>
			</template>
			<template #tip>
				<el-tag type="danger" size="mini">\u81EA\u5B9A\u4E49\u5185\u5BB9</el-tag>
			</template>
			<!-- \u914D\u7F6E\u5355\u9009 \u7B2C\u4E8C\u6B65-->
			<!-- <template #radio="{ row }">
				<el-radio v-model="config.selectRow" :label="row.$index">-</el-radio>
			</template> -->
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
	selectRow: '',
	page: {
		total: 0,
		currentPage: 1,
		pageSize: 2
	},
	search: { name: 'small', sex: 1 },
	data: [
		{ name: '\u5F20\u4E09', sex: '\u7537' },
		{ name: '\u738B\u4E94', sex: '\u5973' }
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
		tip: true, //\u662F\u5426\u663E\u793A\u591A\u9009\u63D0\u793A\u4FE1\u606F
		border: true, //\u662F\u5426\u663E\u793A\u8FB9\u6846
		stripe: true, // \u6591\u9A6C\u7EBF
		selection: true, //\u662F\u5426\u5F00\u542F\u591A\u9009
		searchMenuSpan: 6,
		// \u7981\u6B62\u9009\u62E9\u7B2C\u4E00\u6761
		selectable: (row: any, index: number) => {
			return index === 1
		},
		reserveSelection: false, // \u5206\u9875\u4FDD\u7559\u4E4B\u524D\u52FE\u9009\u7684\u6570\u636E
		index: true,
		rowKey: 'name',
		column: [
			// { label: '', prop: 'radio', width: 60, hide: false }, //\u914D\u7F6E\u5355\u9009 \u7B2C\u4E00\u6B65
			{
				label: '\u59D3\u540D',
				type: 'input',
				prop: 'name',
				search: true
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
const onLoad = (page: any) => {
	console.log('-=-=-=onLoad-=-=-==--=-=', page)
	config.page.total = 4
	//\u6A21\u62DF\u5206\u9875
	if (page.currentPage === 1) {
		config.data = [
			{
				name: '\u5F20\u4E09',
				sex: '\u7537'
			},
			{
				name: '\u674E\u56DB',
				sex: '\u5973'
			}
		]
	} else if (page.currentPage == 2) {
		config.data = [
			{
				name: '\u738B\u4E94',
				sex: '\u5973'
			},
			{
				name: '\u8D75\u516D',
				sex: '\u5973'
			}
		]
	}
}
// \u5217\u5408\u5E76\u7B56\u7565
const spanMethod = ({ row, column, rowIndex, columnIndex }) => {
	if (rowIndex % 2 === 0) {
		if (columnIndex === 0) {
			return [1, 2]
		} else if (columnIndex === 1) {
			return [0, 0]
		}
	}
}
const rowClick = row => {
	config.selectRow = row.$index
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u9009\u62E9\u5E8F\u53F7' + row.$index)
}
const selectionChange = (list: any) => {
	const { ElMessage } = ElementPlus.value
	ElMessage.success('\u9009\u4E2D\u7684\u6570\u636E' + JSON.stringify(list))
}
const toggleSelection = (val?: any) => {
	avueRef.value?.toggleSelection(val)
}
const rowStyle = ({ rowIndex }: { row: any; rowIndex: number }) => {
	if (rowIndex % 2 === 0) {
		return {
			backgroundColor: '#eee',
			color: 'red'
		}
	}
}
const cellStyle = ({ row, columnIndex }: { row: any; column: any; rowIndex: number; columnIndex: number }) => {
	if (columnIndex == 1) {
		if (row.money <= 3000) {
			return {
				color: 'green',
				fontWeight: 'bold',
				fontSize: '20'
			}
		} else {
			return {
				color: 'red',
				fontWeight: 'bold',
				fontSize: '20'
			}
		}
	}
}
const tableRowClassName = ({ row, rowIndex }) => {
	if (rowIndex === 0) {
		return 'warning-row'
	} else if (rowIndex === 1) {
		return 'success-row'
	}
	return ''
}
<\/script>
`},{highlight:D(()=>[O]),default:D(()=>[F(y)]),_:1})])}var nn=P(V,[["render",W]]);export{Z as __pageData,nn as default};
