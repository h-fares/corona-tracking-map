(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"212f":function(t,e,a){},"307c":function(t,e,a){"use strict";a("aed8")},"45a1":function(t,e,a){"use strict";a("689c")},"4d0a":function(t,e,a){"use strict";a("212f")},"56d7":function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"namespaced",(function(){return Yt})),a.d(n,"state",(function(){return Jt})),a.d(n,"mutations",(function(){return Kt})),a.d(n,"actions",(function(){return Qt}));var o={};a.r(o),a.d(o,"namespaced",(function(){return Vt})),a.d(o,"state",(function(){return Xt})),a.d(o,"mutations",(function(){return Zt})),a.d(o,"actions",(function(){return te})),a.d(o,"getters",(function(){return ee}));var s={};a.r(s),a.d(s,"namespaced",(function(){return ae})),a.d(s,"state",(function(){return ne})),a.d(s,"mutations",(function(){return oe})),a.d(s,"actions",(function(){return se}));var r={};a.r(r),a.d(r,"namespaced",(function(){return re})),a.d(r,"state",(function(){return ie})),a.d(r,"mutations",(function(){return ce})),a.d(r,"actions",(function(){return le}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),c=(a("4989"),a("ab8b"),a("4452")),l=a.n(c),u=a("ea7f"),d=a.n(u),f=a("b6d1"),p=a.n(f),m=a("d0af"),b=a("778d"),h=a.n(b),g=a("2ead"),C=a.n(g),v=(a("a5d8"),a("eea2")),y=a("eb2e"),_=a.n(y),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid main-container",attrs:{id:"app"}},[a("nav-bar"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),a("main-footer")],1)},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg shadow rounded",attrs:{id:"nav"}},[n("img",{staticClass:"image float-left",staticStyle:{height:"2em"},attrs:{src:a("a09d"),alt:"Avatar"}}),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("svg",{staticClass:"bi bi-justify",staticStyle:{color:"#343A40"},attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"}})])]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/countries"}},[t._v("Countries List")])],1)]),"/countries"===this.path?n("form",{staticClass:"form-inline my-2 my-lg-0 "},[n("v-select",{staticClass:"mx-auto",staticStyle:{width:"15rem"},attrs:{placeholder:"Choose Country Please",label:"Country",options:this.$store.state.countries.countriesSorted},on:{input:function(e){return t.submit()}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1):t._e()])])},T=[],O={name:"NavBar",data:function(){return{path:"",selected:[]}},watch:{$route:function(){this.path=this.$router.currentRoute.fullPath,this.selected=[]}},methods:{submit:function(){this.selected&&this.$router.push({name:"country-show",params:{countryCode:this.selected.CountryCode}})}},created:function(){this.path=this.$router.currentRoute.fullPath}},j=O,z=(a("ed6b"),a("2877")),E=Object(z["a"])(j,x,T,!1,null,null,null),k=E.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"container-fluid "},[a("div",{staticClass:"alert alert-danger align-content-center",attrs:{role:"alert"}},[t._v(" For you and your Family "),a("strong",[t._v("Please #StayHome")])]),a("div",{staticClass:"card-footer text-center text-muted"},[t._v(" Developed by: Hani Fares ")])])])}],R={name:"MainFooter"},$=R,N=(a("cf2a"),Object(z["a"])($,A,D,!1,null,"53ed3ec0",null)),P=N.exports,M={components:{NavBar:k,MainFooter:P}},L=M,B=(a("5c0b"),Object(z["a"])(L,S,w,!1,null,null,null)),G=B.exports,I=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("chart-map")],1)},F=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-lg-flex justify-content-around m-3"},[a("span",{staticClass:"badge badge-danger m-1",staticStyle:{"font-size":"1em"}},[t._v("Global Total "),a("strong",[t._v("Confirmed Cases: ")]),t._v(" "+t._s(t.global.globalCases.TotalConfirmed)+" ")]),a("span",{staticClass:"badge badge-info m-1",staticStyle:{"font-size":"1em"}},[t._v("Global New "),a("strong",[t._v("Confirmed Cases: ")]),t._v(" "+t._s(t.global.globalCases.NewConfirmed)+" ")]),a("span",{staticClass:"badge badge-dark m-1",staticStyle:{"font-size":"1em"}},[t._v("Global Total "),a("strong",[t._v("Deaths: ")]),t._v(" "+t._s(t.global.globalCases.TotalDeaths)+" ")]),a("span",{staticClass:"badge badge-success m-1",staticStyle:{"font-size":"1em"}},[t._v("Global Total "),a("strong",[t._v("Recovered: ")]),t._v(" "+t._s(t.global.globalCases.TotalRecovered)+" ")])]),a("highcharts",{staticClass:"map shadow rounded\n",attrs:{"constructor-type":"mapChart",options:t.mapOptions}}),a("div",{staticClass:"updated container mb-5"},[t._v("Updated "+t._s(t._f("moment")(t.date.date,"from","now"))),a("br"),a("br")])],1)},H=[],W=a("5530"),Y=a("2f62"),J={created:function(){this.fetchAllCases()},computed:Object(W["a"])(Object(W["a"])({},Object(Y["c"])(["countries","date","global"])),{},{mapOptions:function(){return{colors:["#7cb5e8","#343a40","#28a745"],chart:{map:"myMapName",marginLeft:0,marginRight:0,plotBorderWidth:0,plotShadow:!1,backgroundColor:"#0f4c75",plotBackgroundColor:"#0f4c75",borderWidth:0},title:{text:"Coronavirus Live Map",style:{color:"#fff"}},credits:{enabled:!1},legend:{backgroundColor:"#0f4c75",itemStyle:{},title:{text:"Number of Confirmed cases",color:"#fff"}},mapNavigation:{enabled:!0,buttonOptions:{symbolStroke:"#3282b8",style:{color:"#3282b8"}}},tooltip:{backgroundColor:"none",borderWidth:0,shadow:!1,useHTML:!0,padding:0,pointFormat:'<span class="badge badge-info m-1" style="font-size:1em">{point.Country} </span> <br> <img width="50px" src="https://countryflagsapi.com/png/{point.CountryCode}"> <br><span class="badge badge-dark m-1" style="font-size:1em">Total <strong>Confirmed Cases: </strong> {point.value} </span> <br><span class="badge badge-secondary m-1" style="font-size:1em">New <strong>Confirmed Cases: </strong> {point.NewConfirmed} </span> <br><span class="badge badge-danger m-1" style="font-size:1em">Total <strong>Deaths: </strong> {point.TotalDeaths} </span> <br><span class="badge badge-success m-1" style="font-size:1em">Total <strong>Recovered: </strong> {point.TotalRecovered} </span> <br>',positioner:function(){return{x:0,y:250}}},colorAxis:{min:1,max:5e6,type:"logarithmic"},series:[{type:"map",name:"Country: ",joinBy:["iso-a2","CountryCode"],data:this.countries.countries,minSize:4,maxSize:"12%",states:{}}]}}}),methods:Object(W["a"])({},Object(Y["b"])("request",["fetchAllCases"]))},K=J,Q=(a("45a1"),Object(z["a"])(K,q,H,!1,null,"50490c23",null)),V=Q.exports,X={components:{ChartMap:V}},Z=X,tt=Object(z["a"])(Z,U,F,!1,null,"e03ad62c",null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("countries")],1)},nt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pb-0 pt-3 mx-auto"},[a("jw-pagination",{staticClass:"mx-auto",attrs:{items:t.countries.countries,pageSize:15},on:{changePage:t.onChangePage}})],1),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.paginatedCountry,(function(t){return a("country",{key:t["Country"],staticClass:"zoom mx-auto",attrs:{country:t}})})),1)]),a("svg",{staticClass:"bi goUp shadow bi-chevron-double-up mb-5 mr-5 float-right",attrs:{width:"3em",height:"6em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.scrollToTop}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}})])])},st=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{staticClass:"nav-link",staticStyle:{color:"#000000"},attrs:{to:{name:"country-show",params:{countryCode:t.country.CountryCode}}}},[t.country["value"]>0?a("div",{staticClass:"col-3 mb-4 mt-2"},[a("div",{staticClass:"card shadow p-3 mb-5 rounded",staticStyle:{width:"19rem",height:"25rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.country["Country"]))]),a("country-flag",{attrs:{country:t.country["CountryCode"],size:"big"}}),a("p",{staticClass:"card-text m-2"},[a("strong",{staticStyle:{color:"#dd4b39"}},[t._v("Confirmed Cases")])]),a("p",{staticClass:"card-text m-2",staticStyle:{color:"white"}},[t._v(t._s(t.country["value"]))]),a("br"),a("p",{staticClass:"card-text m-2",staticStyle:{color:"white"}},[t._v(" Updated: "+t._s(t._f("moment")(t.country.Date,"dddd, MMMM Do YYYY, h:mm:ss a"))+" ")]),a("button",{staticClass:"btn info-btn",attrs:{type:"button"}},[t._v(" More Information ")])],1)])]):t._e()])],1)},it=[],ct={props:["country"],name:"Country"},lt=ct,ut=(a("dc2c"),Object(z["a"])(lt,rt,it,!1,null,"50d806f9",null)),dt=ut.exports,ft={name:"Countries",components:{Country:dt},created:function(){this.fetchAllCases()},computed:Object(W["a"])({},Object(Y["c"])(["countries","date","global"])),methods:Object(W["a"])(Object(W["a"])({onChangePage:function(t){this.paginatedCountry=t}},Object(Y["b"])("request",["fetchAllCases"])),{},{scrollToTop:function(){window.scrollTo(0,0)}}),data:function(){return{paginatedCountry:[]}}},pt=ft,mt=(a("307c"),Object(z["a"])(pt,ot,st,!1,null,null,null)),bt=mt.exports,ht={name:"CountriesList",components:{Countries:bt}},gt=ht,Ct=Object(z["a"])(gt,at,nt,!1,null,"36b86eea",null),vt=Ct.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h4",{staticClass:"title"},[t._v(t._s(t.country["Country"]))]),a("country-flag",{attrs:{country:t.country["CountryCode"],size:"big"}}),a("div",{staticClass:"d-lg-flex justify-content-around"},[a("InfoCountry",{attrs:{country:t.country}}),a("CountryPieChart",{attrs:{country:t.country}})],1)],1)},_t=[],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mb-4 mt-4 shadow p-3 mb-5 rounded",staticStyle:{width:"18rem",height:"27rem"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-text mx-auto"},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center",staticStyle:{"font-size":"0.9em"}},[t._v(" Total Cases "),a("span",{staticClass:"badge badge-danger badge-pill",staticStyle:{"font-size":"1em"}},[t._v(t._s(t.country["value"]))])]),a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center",staticStyle:{"font-size":"0.9em"}},[t._v(" Active Cases "),a("span",{staticClass:"badge badge-primary badge-pill",staticStyle:{"font-size":"1em","background-color":"rgb(124, 181, 236)",color:"#ffffff"}},[t._v(t._s(t.country["value"]-t.country["TotalDeaths"]-t.country["TotalRecovered"]))])]),a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center",staticStyle:{"font-size":"0.9em"}},[t._v(" Total Deaths "),a("span",{staticClass:"badge badge-dark badge-pill",staticStyle:{"font-size":"1em"}},[t._v(t._s(t.country["TotalDeaths"]))])]),a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center",staticStyle:{"font-size":"0.9em"}},[t._v(" Total Recovered "),a("span",{staticClass:"badge badge-success badge-pill",staticStyle:{"font-size":"1em"}},[t._v(t._s(t.country["TotalRecovered"]))])]),a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center",staticStyle:{"font-size":"0.9em"}},[t._v(" New Confirmed "),a("span",{staticClass:"badge badge-info badge-pill",staticStyle:{"font-size":"1em"}},[t._v(" "+t._s(t.country["NewConfirmed"])+" ")])]),a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center",staticStyle:{"font-size":"0.9em"}},[t._v(" New Deaths "),a("span",{staticClass:"badge badge-dark badge-pill",staticStyle:{"font-size":"1em"}},[t._v(t._s(t.country["NewDeaths"])+" ")])]),a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center",staticStyle:{"font-size":"0.9em"}},[t._v(" New Recovered "),a("span",{staticClass:"badge badge-success badge-pill",staticStyle:{"font-size":"1em"}},[t._v(t._s(t.country["NewRecovered"]))])])])])])])},wt=[],xt={name:"InfoCountry",props:["country"]},Tt=xt,Ot=(a("a2b1"),Object(z["a"])(Tt,St,wt,!1,null,"1d4c59ab",null)),jt=Ot.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mb-4 mt-4 shadow p-3 mb-5 rounded",staticStyle:{width:"18rem",height:"27rem"}},[a("div",{staticClass:"card-body"},[a("highcharts",{attrs:{options:t.chartOptions}}),t._m(0),t._v(" "),a("br"),a("br"),t._m(1),t._v(" "),a("br"),a("br"),t._m(2)],1)])},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"badge ",staticStyle:{"font-size":"1em","background-color":"rgb(124, 181, 236)",color:"#ffffff"}},[a("strong",[t._v("Active")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"badge badge-success",staticStyle:{"font-size":"1em"}},[a("strong",[t._v("Recovered")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"badge badge-dark",staticStyle:{"font-size":"1em"}},[a("strong",[t._v("Death")])])}],kt={name:"CountryPieChart",props:["country"],created:function(){this.newCountry.push({name:"Active",y:this.country["value"]-this.country["TotalDeaths"]-this.country["TotalRecovered"]}),this.newCountry.push({name:"Deaths",y:this.country["TotalDeaths"]}),this.newCountry.push({name:"Recovered",y:this.country["TotalRecovered"]})},computed:{chartOptions:function(){return{colors:["#7cb5e8","#343a40","#28a745"],chart:{map:"countryPieChart",type:"pie",height:"100%",marginLeft:0,marginRight:0,plotBorderWidth:0,plotShadow:!1,backgroundColor:"#0f4c75",plotBackgroundColor:"#0f4c75",borderWidth:0},title:{text:"All Cases Diagram"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},credits:{enabled:!1},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"percentage",colorByPoint:!0,data:this.newCountry}]}}},data:function(){return{newCountry:[]}}},At=kt,Dt=(a("c44c"),Object(z["a"])(At,zt,Et,!1,null,"080fe988",null)),Rt=Dt.exports,$t={name:"CountryShow",props:["countryCode"],components:{InfoCountry:jt,CountryPieChart:Rt},computed:{country:function(){return this.$store.getters["countries/getCountryByCode"](this.countryCode)}},created:function(){this.fetchAllCases()},methods:Object(W["a"])({},Object(Y["b"])("request",["fetchAllCases"]))},Nt=$t,Pt=(a("4d0a"),Object(z["a"])(Nt,yt,_t,!1,null,"0ff0d2d0",null)),Mt=Pt.exports;i["default"].use(I["a"]);var Lt=[{path:"/",name:"Home",component:et},{path:"/countries",name:"Countries-list",component:vt},{path:"/country/:countryCode",name:"country-show",component:Mt,props:!0},{path:"*",redirect:"/"}],Bt=new I["a"]({mode:"history",base:"/",routes:Lt}),Gt=Bt,It=a("bc3a"),Ut=a.n(It),Ft=a("323e"),qt=a.n(Ft),Ht=Ut.a.create({baseURL:"https://api.covid19api.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});Ht.interceptors.request.use((function(t){return qt.a.start(),t})),Ht.interceptors.response.use((function(t){return qt.a.done(),t}));var Wt={getCountries:function(){return Ht.get("/summary")}},Yt=!0,Jt={allCases:[]},Kt={SET_ALL_CASES:function(t,e){t.allCases=e}},Qt={fetchAllCases:function(t){var e=t.commit,a=t.dispatch;Wt.getCountries().then((function(t){e("SET_ALL_CASES",t.data),a("countries/fetchCountries",t.data["Countries"],{root:!0}),a("date/fetchDate",t.data["Date"],{root:!0}),a("global/fetchGlobal",t.data["Global"],{root:!0})}))}},Vt=(a("d3b7"),a("159b"),a("4e82"),a("7db0"),!0),Xt={countries:[],countriesSorted:[]},Zt={SET_COUNTRIES:function(t,e){t.countries=e},SET_COUNTRIES_SORTED:function(t,e){t.countriesSorted=e}},te={fetchCountries:function(t,e){var a=t.commit;e.forEach((function(t){t.value=t.TotalConfirmed,delete t.TotalConfirmed,t.value=t.value<1?t=null:t.value})),a("SET_COUNTRIES_SORTED",e),e.sort((function(t,e){return e.value-t.value})),a("SET_COUNTRIES",e)}},ee={getCountryByCode:function(t){return function(e){return t.countries.find((function(t){return t.CountryCode===e}))}}},ae=!0,ne={date:null},oe={SET_DATE:function(t,e){t.date=e}},se={fetchDate:function(t,e){var a=t.commit;a("SET_DATE",e)}},re=!0,ie={globalCases:[]},ce={SET_GLOBAL_CASES:function(t,e){t.globalCases=e}},le={fetchGlobal:function(t,e){var a=t.commit;a("SET_GLOBAL_CASES",e)}};i["default"].use(Y["a"]);var ue=new Y["a"].Store({modules:{request:n,countries:o,date:s,global:r}}),de=a("4a7a"),fe=a.n(de);a("6dfc");h()(d.a),p()(d.a),d.a.maps["myMapName"]=m,i["default"].use(l.a),i["default"].use(C.a),i["default"].component("country-flag",v["a"]),i["default"].component("jw-pagination",_.a),i["default"].component("v-select",fe.a),i["default"].config.productionTip=!1,new i["default"]({router:Gt,store:ue,render:function(t){return t(G)}}).$mount("#app")},"5a3a":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"689c":function(t,e,a){},"9c0c":function(t,e,a){},a09d:function(t,e,a){t.exports=a.p+"img/coronaIcon.ad09065e.png"},a2b1:function(t,e,a){"use strict";a("c061")},aed8:function(t,e,a){},b3b5:function(t,e,a){},b8ef:function(t,e,a){},c061:function(t,e,a){},c44c:function(t,e,a){"use strict";a("b3b5")},cf2a:function(t,e,a){"use strict";a("b8ef")},d5a8:function(t,e,a){},dc2c:function(t,e,a){"use strict";a("5a3a")},ed6b:function(t,e,a){"use strict";a("d5a8")}});
//# sourceMappingURL=app.f1176a42.js.map