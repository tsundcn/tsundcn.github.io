webpackJsonp([1],{"+skl":function(t,e){},E7tI:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={name:"App",created:function(){try{document.body.removeChild(document.getElementById("appLoading")),setTimeout(function(){document.getElementById("app").style.display="block"},1e3)}catch(t){console.log(t)}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("BackTop",{attrs:{right:20,bottom:20,duration:2e3}})],1)},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(t){n("wX73")},null,null).exports,r=n("/ocq"),c={name:"Content",data:function(){return{isShows:[{isShow:!1},{isShow:!1},{isShow:!1},{isShow:!1}],progress:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){for(var t=document.querySelectorAll(".box"),e=t.length,n=0;n<e;n++){var i=t[n],o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,s=i.getBoundingClientRect()&&i.getBoundingClientRect().top,a=.75*i.clientHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)<=o/5?(this.progress=0,this.$Loading.update(this.progress)):s<=o-a&&(this.isShows[n].isShow||(this.isShows[n].isShow=!0),this.progress=(n+1)*(1/e)*100,this.$Loading.update(this.progress))}}},watch:{}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"box",staticStyle:{"background-color":"#F5F5F5"},attrs:{id:"introduce"}},[n("transition-group",{attrs:{name:"fade"}},[t.isShows[0].isShow?n("p",{key:"1"},[t._v("Hi! I'm Ji Yuanhao「吉元昊」,"),n("br")]):t._e(),t._v(" "),t.isShows[0].isShow?n("p",{key:"2"},[t._v("I graduated from "),n("strong",[t._v("Liaocheng University")]),t._v(" majoring in software\n        engineering,")]):t._e(),t._v(" "),t.isShows[0].isShow?n("p",{key:"3"},[t._v("now I am a graduate student of "),n("strong",[t._v("Xidian University.")])]):t._e()])],1),t._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"white"}},[n("transition",{attrs:{name:"fade"}},[t.isShows[1].isShow?n("h3",[t._v("You're unique, nothing can replace you.")]):t._e()])],1),t._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"#F5F5F5"}},[n("transition",{attrs:{name:"fade"}},[t.isShows[2].isShow?n("h3",[t._v("You're unique, nothing can replace you.")]):t._e()])],1),t._v(" "),n("div",{staticClass:"box",staticStyle:{"background-color":"white"}},[n("transition",{attrs:{name:"fade"}},[t.isShows[3].isShow?n("h3",[t._v("You're unique, nothing can replace you.")]):t._e()])],1)])},staticRenderFns:[]};var h={name:"Home",data:function(){return{clientHeight:"",headerShow:!1}},components:{Content:n("VU/8")(c,d,!1,function(t){n("kmT1")},"data-v-51b6dc89",null).exports},beforeCreate:function(){this.$Loading.update(this.progress)},mounted:function(){var t=this;this.clientHeight=document.documentElement.clientHeight,window.onresize=function(){t.clientHeight=document.documentElement.clientHeight},this.headerShow=!0},methods:{changeFixed:function(t){this.$refs.homePage.style.height=t+"px"}},watch:{clientHeight:function(){this.changeFixed(this.clientHeight)}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("header",{ref:"homePage"},[e("transition",{attrs:{name:"fade"}},[this.headerShow?e("h2",{attrs:{id:"title"}},[this._v("You're unique,"),e("br"),this._v("nothing can replace you.")]):this._e()])],1),this._v(" "),e("Content")],1)},staticRenderFns:[]};var l=n("VU/8")(h,u,!1,function(t){n("E7tI")},"data-v-6cef7967",null).exports;i.default.use(r.a);var g=new r.a({routes:[{path:"/",name:"Home",component:l}]}),m=n("BTaQ"),p=n.n(m);n("+skl");i.default.use(p.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:g,components:{App:a},template:"<App/>"})},kmT1:function(t,e){},wX73:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.507c5e1d12ea5f4e4aa0.js.map