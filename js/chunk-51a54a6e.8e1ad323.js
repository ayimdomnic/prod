(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51a54a6e"],{"05db":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"page-header"},[e("div",{staticClass:"page-header__inner d-none d-sm-none d-md-flex"},[t._m(0),e("login-form",{directives:[{name:"show",rawName:"v-show",value:!t.authUser,expression:"!authUser"}],staticClass:"d-print-none"}),e("user-options",{directives:[{name:"show",rawName:"v-show",value:null!=t.authUser,expression:"authUser != null"}],staticClass:"d-print-none"})],1)]),e("div",{staticClass:"page-nav"},[e("nav",{staticClass:"navbar navbar-expand-md"},[t._m(1),e("table",{staticClass:"d-block d-xs-block d-sm-block d-md-none",staticStyle:{width:"86%","margin-left":"-24px"}},[e("tr",[e("td",{staticStyle:{width:"35%"}},[e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarNav","aria-expanded":t.isOpen,"aria-label":"Toggle navigation"},on:{click:function(){t.isOpen=!t.isOpen}}},[e("i",{staticClass:"fa fa-lg fa-bars",staticStyle:{color:"#fff"}})])]),t._m(2)])]),e("div",{staticClass:"d-block d-sm-block d-md-none d-lg-none"},[t.authUser?t._e():e("span",[e("i",{staticClass:"fa fa-sign-in-alt w",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"big-text",on:{click:function(){t.$router.push({name:"login"})}}},[t._v("Login")])]),t.authUser?e("span",{staticClass:"badge badge-success"},[e("i",{staticClass:"fa fa-clipboard"}),t._v("Betslip "),e("span",[t._v(t._s(t.betSlip.length))])]):t._e()]),e("div",{staticClass:"collapse navbar-collapse custom-navbar",class:[t.isOpen?"show":""],attrs:{id:"navbarSupportedContent"}},[e("topbar-tabs",{staticClass:"animated fadeIn"}),e("FixedScrollNavBar")],1),e("ul",{staticClass:"nav float-right d-none d-sm-none d-md-block"},[e("button",{staticClass:"btn btn-outline",attrs:{type:"button"},on:{click:function(n){return t.$router.push({name:"deposit"})}}},[t._v("\n            MPesa Paybill-933222\n          ")])])])]),e("mobile-top-nav")],1)},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"navbar-brand logo",attrs:{href:"/"}},[e("img",{staticClass:"d-print-none",attrs:{src:"/img/mobile-logo-print.png",alt:"logo",height:"50px"}}),e("img",{staticClass:"d-none d-print-block",attrs:{src:"/img/mobile-logo-print.png",alt:"logo",height:"50px"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"navbar-brand d-none d-sm-none",attrs:{href:"#"}},[e("img",{staticClass:"d-none d-sm-none d-sm-block d-md-none",attrs:{src:"/img/mobile-logo-print.png",alt:"",height:"50px"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("td",{staticStyle:{width:"30%"}},[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"mobile-img",staticStyle:{width:"150px",height:"40px"},attrs:{src:"/img/mobile-logo-print.png"}})])])}],i=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),r=e("2f62"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isScrolled,expression:"isScrolled"}],staticClass:"fadeInDown",class:t.isScrolled?"fixed-top":""},[e("img",{attrs:{height:"50px",src:"/img/mobile-logo-print.png",alt:"rafikibet-logo"},on:{click:function(n){return t.$router.push({name:"home"})}}}),e("TopnavTabs")],1)},c=[],l=e("9ce7"),u={name:"FixedScrollNavBar",components:{TopnavTabs:l["default"]},data:function(){return{isScrolled:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isScrolled=window.pageYOffset>=95},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}},d=u,f=(e("7343"),e("2877")),p=Object(f["a"])(d,o,c,!1,null,"388f9135",null),v=p.exports;function b(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?b(Object(e),!0).forEach((function(n){Object(i["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var h=function(){return e.e("chunk-852ea100").then(e.bind(null,"fe2b"))},g=function(){return e.e("chunk-1c89bc56").then(e.bind(null,"13f0"))},O=function(){return e.e("chunk-6fae3f6c").then(e.bind(null,"7855"))},C=function(){return Promise.resolve().then(e.bind(null,"9ce7"))},k={name:"Topnav",data:function(){return{isOpen:!1}},components:{FixedScrollNavBar:v,LoginForm:h,UserOptions:g,MobileTopNav:O,TopbarTabs:C},created:function(){var t=this;this.$EventBus.$on("isOpen",(function(){t.isOpen=!t.isOpen})),this.$store.dispatch("initBetSlips")},mounted:function(){this.init_auth_user()},computed:m({},Object(r["c"])(["authUser","betSlip","groupBetSlip"])),methods:m({},Object(r["b"])(["init_auth_user"]),{hasScrolled:function(){return window.scrollY>=185}})},w=k,_=(e("4a83"),Object(f["a"])(w,a,s,!1,null,"60280eee",null));n["default"]=_.exports},1065:function(t,n,e){},2232:function(t,n,e){"use strict";var a=e("3571"),s=e.n(a);s.a},"245c":function(t,n,e){},3571:function(t,n,e){},"456d":function(t,n,e){var a=e("4bf8"),s=e("0d58");e("5eda")("keys",(function(){return function(t){return s(a(t))}}))},"4a83":function(t,n,e){"use strict";var a=e("1065"),s=e.n(a);s.a},"5eda":function(t,n,e){var a=e("5ca1"),s=e("8378"),i=e("79e5");t.exports=function(t,n){var e=(s.Object||{})[t]||Object[t],r={};r[t]=n(e),a(a.S+a.F*i((function(){e(1)})),"Object",r)}},"65e8":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bet-nav-items"},[t._t("default")],2)},s=[],i={name:"BetNavTabs"},r=i,o=(e("fe38"),e("2877")),c=Object(o["a"])(r,a,s,!1,null,"7cf7b736",null);n["a"]=c.exports},7343:function(t,n,e){"use strict";var a=e("245c"),s=e.n(a);s.a},"8e6e":function(t,n,e){var a=e("5ca1"),s=e("990b"),i=e("6821"),r=e("11e9"),o=e("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var n,e,a=i(t),c=r.f,l=s(a),u={},d=0;while(l.length>d)e=c(a,n=l[d++]),void 0!==e&&o(u,n,e);return u}})},"990b":function(t,n,e){var a=e("9093"),s=e("2621"),i=e("cb7c"),r=e("7726").Reflect;t.exports=r&&r.ownKeys||function(t){var n=a.f(i(t)),e=s.f;return e?n.concat(e(t)):n}},"9ce7":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BetNavTabs",{staticClass:"top-nav"},[e("ul",{staticClass:"navbar-nav custom-navbar tablet-nav"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"},href:"#"},on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("\n        HOME\n        "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"jackpot"},href:"#"},on:{click:function(n){return n.preventDefault(),t.$EventBus.$emit("isOpen")}}},[t._v("JACKPOT")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"playing"},href:"#"},on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("\n        HOW TO PLAY\n      ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"terms"},href:"#"},on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("\n        TERMS & CONDITIONS\n      ")])],1),e("li",{staticClass:"rfb-paybill d-none d-sm-none"},[e("button",{staticClass:"btn btn-outline rounded-0",on:{click:function(n){return t.$router.push({name:"deposit"})}}},[t._v("\n        MPesa Paybill-XXXXX\n      ")])]),null!=t.authUser?e("div",{staticClass:"d-block d-sm-block d-md-none d-lg-none"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"bet_history"}}},[e("a",{on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("Bet History")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"deposit"}}},[e("a",{on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("Deposit")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"withdraw"},href:"#"}},[e("a",{on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("Withdrawals")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"transactions"}}},[e("a",{on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("Transactions")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"accounts"},href:"#"}},[e("a",{on:{click:function(n){return t.$EventBus.$emit("isOpen")}}},[t._v("Accounts")])])],1),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",on:{click:function(n){return n.preventDefault(),t.logout()}}},[t._v("Logout")])])]):t._e()])])},s=[],i=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),r=e("2f62"),o=e("65e8");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(i["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var u={name:"TopnavTabs",components:{BetNavTabs:o["a"]},computed:l({},Object(r["c"])(["authUser"])),mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push({name:"home"})}}},d=u,f=(e("2232"),e("2877")),p=Object(f["a"])(d,a,s,!1,null,"dd2c21ee",null);n["default"]=p.exports},b6a6:function(t,n,e){},f1ae:function(t,n,e){"use strict";var a=e("86cc"),s=e("4630");t.exports=function(t,n,e){n in t?a.f(t,n,s(0,e)):t[n]=e}},fe38:function(t,n,e){"use strict";var a=e("b6a6"),s=e.n(a);s.a}}]);
//# sourceMappingURL=chunk-51a54a6e.8e1ad323.js.map