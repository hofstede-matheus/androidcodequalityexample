(this["webpackJsonpsimulador-compras-internacionais"]=this["webpackJsonpsimulador-compras-internacionais"]||[]).push([[0],{53:function(e){e.exports=JSON.parse('[{"id":0,"name":"Nubank","backgroundColor":"#8A05BE","textColor":"#FFF","spreadPercentage":4,"spreadLink":"https://nubank.com.br/contrato/"},{"id":1,"name":"Inter","backgroundColor":"#FF8700","textColor":"#000","spreadPercentage":1,"spreadLink":"https://ajuda.bancointer.com.br/pt-BR/articles/1520202-como-e-composta-a-taxa-cobrada-em-compras-internacionais"}]')},69:function(e,t,a){},71:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(10),o=a(0),r=a.n(o),c=a(8),i=a.n(c),s=(a(69),a(27)),l=a.n(s),u=a(38),d=a(35),p=(a(71),a(52)),b=a(53),f=a(54),m=function e(t,a,n,o,r,c){Object(f.a)(this,e),this.id=void 0,this.name=void 0,this.backgroundColor=void 0,this.textColor=void 0,this.spreadPercentage=void 0,this.spreadLink=void 0,this.id=t,this.name=a,this.backgroundColor=n,this.textColor=o,this.spreadPercentage=r,this.spreadLink=c},h=a(131),j=a(141),x=a(138),v=a(139),C=a(140),O=a(99),g=a(137),k=a(23),S=a.n(k),y=a(91);function I(){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S()(F(S()())).format("MM-DD-YYYY"),e.next=3,fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao='".concat(t,"'"),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return y(e.format("YYYY-MM-DD"))||F(e.subtract(1,"days")),e}var N=function(){var e=Object(p.plainToClass)(m,b),t=Object(o.useState)(e[0]),a=Object(d.a)(t,2),r=a[0],c=a[1],i=Object(o.useState)(0),s=Object(d.a)(i,2),f=s[0],k=s[1],S=Object(o.useState)(""),y=Object(d.a)(S,2),M=y[0],F=y[1],N=Object(o.useState)(0),T=Object(d.a)(N,2),D=T[0],L=T[1];function P(){return(P=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I().then((function(e){return e.json()})).then((function(e){L(e.value[0].cotacaoVenda)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){F(function(e,t,a,n){return(e*(t*(1+a/100))*(1+n/100)).toFixed(2)}(f,D,r.spreadPercentage,6.38))}),[r,f,D]);var Y=Object(h.a)((function(){return Object(j.a)({main:{backgroundColor:r.backgroundColor,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},bankSelect:{fontSize:24,borderColor:r.textColor,margin:8,color:r.textColor},bankSelectIcon:{color:r.textColor},input:{margin:8,fontSize:20,"& .MuiInputBase-root":{color:r.textColor},"& .MuiInputLabel-root":{color:r.textColor},"& .MuiInput-underline:before":{borderBottom:"2px solid ".concat(r.textColor)},"& .MuiInput-underline:after":{borderBottom:"2px solid ".concat(r.textColor)},"& .MuiInput-underline:hover:before":{borderBottom:"2px solid ".concat(r.textColor)}},spreadLinkText:{fontSize:14,color:r.textColor},priceText:{margin:24,fontSize:48,color:r.textColor}})}))();return Object(n.jsxs)("div",{className:Y.main,children:[Object(n.jsx)(x.a,{disableUnderline:!0,id:"bank-select",classes:{root:Y.bankSelect,icon:Y.bankSelectIcon},value:r.id,onChange:function(t){return c(e[t.target.value])},children:e.map((function(e){return Object(n.jsx)(v.a,{value:e.id,children:e.name})}))}),Object(n.jsx)(C.a,{className:Y.input,id:"value-dolar",type:"number",onChange:function(e){k(parseFloat(e.target.value)||0)},value:f,label:"Valor em d\xf3lar $"}),Object(n.jsx)(C.a,{id:"dolar-ptax",value:D,className:Y.input,type:"number",onChange:function(e){L(parseFloat(e.target.value)||0)},label:"D\xf3lar PTAX"}),Object(n.jsx)(C.a,{id:"iof",className:Y.input,type:"number",value:6.38,label:"IOF (%)"}),Object(n.jsx)(C.a,{id:"spread",className:Y.input,type:"number",value:r.spreadPercentage,label:"Spread (%)"}),Object(n.jsx)(O.a,{children:Object(n.jsx)(g.a,{className:Y.spreadLinkText,target:"_blank",href:r.spreadLink,children:"* Informa\xe7\xf5es oficiais de spread"})}),Object(n.jsxs)(O.a,{className:Y.priceText,children:["R$ ",M]})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.16ac5b5f.chunk.js.map