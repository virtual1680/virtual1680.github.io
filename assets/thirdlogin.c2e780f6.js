import{_ as r,o as l}from"./index.308dce99.js";import{H as a,k as d,l as p,m as t}from"./vue.e587a6e4.js";import"./element-plus.99fc94f8.js";const _={class:"third"},f={class:"box"},x=a({name:"ThirdLogin"}),u=a({...x,setup(m){const i=n=>{let e,o,s,c="";s=encodeURIComponent(window.location.origin+"/#/authredirect"),n==="wx"?(e="xxxx",c="https://open.weixin.qq.com/connect/qrconnect?appid="+e+"&redirect_uri="+s+"&state=WX&response_type=code&scope=snsapi_login#wechat_redirect"):n==="qq"&&(o="xxxx",c="https://graph.qq.com/oauth2.0/authorize?response_type=code&state=QQ&client_id="+o+"&redirect_uri="+s),l(c,n,540,540)};return(n,e)=>(d(),p("div",_,[t("div",f,[t("i",{class:"iconfont icon-QQ",onClick:e[0]||(e[0]=o=>i("qq")),style:{color:"#53a4d8"}}),t("i",{class:"iconfont icon-weixinicon2x",onClick:e[1]||(e[1]=o=>i("wx")),style:{color:"#71c252"}}),t("i",{class:"iconfont icon-weibo",onClick:e[2]||(e[2]=o=>i("wb")),style:{color:"#c73420"}}),t("i",{class:"iconfont icon-zhifubao",onClick:e[3]||(e[3]=o=>i("zfb")),style:{color:"#439fe2"}}),t("i",{class:"iconfont icon-huaban88",onClick:e[4]||(e[4]=o=>i("github")),style:{color:"#666"}})])]))}});var w=r(u,[["__scopeId","data-v-afa76ec2"]]);export{w as default};
//# sourceMappingURL=thirdlogin.c2e780f6.js.map
