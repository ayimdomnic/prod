(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d233f4a","chunk-7d64f71e"],{"18b4":function(t,e,a){"use strict";var s=a("4d73"),i=a.n(s);i.a},"312d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.betSlip&&t.betSlip.length?a("div",[a("div",{ref:"betSlipBox",staticClass:"bet-slip",class:[t.isOpen?"d-none":"d-show",{"full-height":t.betSlip.length>2}]},[a("div",{staticClass:"bet-slip__header",class:{added:t.showAnSlip},on:{click:t.hideSlip}},[a("span",[t._v("Bet slip "+t._s(t.betSlip.length>1?"("+t.betSlip.length+")":""))])]),a("ul",{staticClass:"bet-slip__tabs"},[a("li",{staticClass:"bet-slip__tab active"},[t._v("\n        "+t._s(t.betSlip.length>1?"Multi Bet":"Single Bet")+"\n      ")]),t.possibleWin()?a("li",{staticClass:"bet-slip__tab"},[t._v("\n        Possible Win "+t._s(t.possibleWin())+"\n      ")]):t._e()]),a("div",{staticClass:"bet-slip__main"},[a("div",{staticClass:"bet-slip__actions"},[t.betSlip.length?a("a",{staticClass:"remove-all-slips",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$store.dispatch("clearBetSlip")}}},[t._v("\n          Clear bet slip\n        ")]):t._e()]),a("table",{staticClass:"bet-slip__items"},t._l(t.betSlip,(function(e){return t.betSlip?a("tr",{key:e.gameId,staticClass:"bet-slip-item bet-slip__item"},[a("td",{staticClass:"bet-slip-item__remove"},[a("a",{staticClass:"remove-betitem-link",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.removeFromBetSlip(e)}}})]),a("td",{staticClass:"bet-slip-item__players"},[t._v("\n            "+t._s(e.game.home_team)+"\n            "),a("div",{staticClass:"vs"},[t._v("vs")]),t._v("\n            "+t._s(e.game.away_team)+"\n            "),a("div",{staticClass:"market-selected"},[t._v(" "+t._s(e.odd.market_name)+" "+t._s(e.odd.market_handicap>0?e.odd.market_handicap:"")+" ")])]),a("td",{staticClass:"bet-slip-item__selected-pick text-right"},[a("div",{staticClass:"picked-team"},[a("span",[t._v("Your Pick: "+t._s(e.oddOutCome)+" "+t._s(e.odd.market_handicap>0?e.odd.market_handicap:"")+" ")])]),a("span",{staticClass:"odd"},[t._v("\n            "+t._s(e.oddValue)+"\n            ")])])]):t._e()})),0),t.betSlip?a("div",[t.isGroup||t.dareFriend?t._e():[a("div",{staticClass:"bet-slip-amount bet-slip__amount"},[a("BetForm",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"betAmount"}},[t._v(" Total odds ")]),a("span",{staticClass:"bet-slip-amount__num text-right"},[t._v("\n                  "+t._s(t.getTotalOdds())+"\n                ")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"betAmount"}},[t._v("Stake")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stake,expression:"stake"}],staticClass:"form-control bet-slip-amount__num text-right",attrs:{type:"number",id:"betAmount",name:"",value:"",required:""},domProps:{value:t.stake},on:{input:function(e){e.target.composing||(t.stake=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"betAmount"}},[t._v("Possible Win")]),a("span",{staticClass:"bet-slip-amount__num text-right",attrs:{type:"number",name:"",value:""}},[t._v("\n                  "+t._s(t.possibleWin())+"\n                ")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"account"}},[t._v("Select Account Type")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.accountType,expression:"accountType"}],staticClass:"form-control",attrs:{id:"account",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.accountType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v(" Select account ")]),a("option",{attrs:{value:"main"}},[t._v("Main Account ")]),a("option",{attrs:{value:"bonus"}},[t._v(" Bonus Account ")]),a("option",{attrs:{value:"sambaza"}},[t._v(" Sambaza Account ")])])])])],1)]],2):t._e(),a("div",{staticClass:"clearfix"})]),a("div",{staticClass:"bet-slip__help"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.authUser,expression:"!authUser"}],staticClass:"bg-danger p-2 m-3"},[a("span",{on:{click:function(e){return t.$router.push({name:"login"})}}},[t._v("Please login to place your bet ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.mainAccountIsSufficient(),expression:"mainAccountIsSufficient()"}],staticClass:"bg-danger p-2 m-3"},[a("span",{on:{click:function(e){return t.$router.push({name:"deposit"})}}},[t._v("\n            Please recharge your account to at least ksh.25\n          ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.sambazaAccountIsSufficient(),expression:"sambazaAccountIsSufficient()"}],staticClass:"bg-danger p-2 m-3"},[a("span",{on:{click:function(e){return t.$router.push({name:"deposit"})}}},[t._v("\n            Your Sambaza account is not sufficient\n          ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.bonusAccountIsSufficient(),expression:"bonusAccountIsSufficient()"}],staticClass:"bg-danger p-2 m-3"},[a("span",{on:{click:function(e){return t.$router.push({name:"deposit"})}}},[t._v("\n            Your Bonus account is not sufficient\n          ")])])]),a("div",{staticClass:"bet-slip-buttons bet-slip__buttons text-center"},[a("div",{staticClass:"clearfix"}),t.isLoading?a("LoadingIndicator"):t._e(),t.isGroup||t.dareFriend||t.isLoading?t._e():a("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:!t.stake||!t.authUser||!t.accountType||!t.accountSelectedIsSufficient(t.accountType)},on:{click:function(e){return e.preventDefault(),t.submitBetSlip()}}},[t._v("\n          Place Bet\n        ")])],1)]),t.betSlip?a("div",{ref:"betSlipBtn",staticClass:"floating-slip-btn",class:[t.isOpen?"d-open":"d-none",t.showAnSlip?"added":""],on:{click:t.hideSlip}},[a("span",[t._v(" Bet Slip "+t._s(t.betSlip.length>0?"("+t.betSlip.length+")":"")+" ")])]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAnSlip,expression:"showAnSlip"}],staticClass:"animated-slip",class:{active:t.showAnSlip},style:t.anSlip})]):t._e()},i=[],n=(a("8e6e"),a("456d"),a("c5f6"),a("bd86")),o=(a("ac6a"),a("26e6")),r=a("2f62"),c=a("bc3a"),u=a.n(c),l=a("c1df"),d=a.n(l),p=a("56c0"),m=a("b9f0"),h=a("eb6e"),f=a("fc64");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _={name:"BetSlip",components:{LoadingIndicator:f["default"],BetForm:h["a"]},data:function(){return{stake:50,accountType:"",potentialWin:"",bets:[],isOpen:!0,responseData:[],betSubmitted:!1,isGroup:!1,uuid:"",dareFriend:!1,opponentPhone:"",groups:[],gamesInBetSlip:[],anSlip:{},showAnSlip:!1,isLoading:!1}},created:function(){this.getBetSlip()},watch:{betSlip:function(t,e){var a=this;this.betSlip.forEach((function(t){t.game&&o["a"].isStarted(t.game)&&(a.$noty.error("The game "+t.game.home_team+"VS"+t.game.away_team+" is already started, Please review your bet."),a.$store.dispatch("removeFromSlip",t))})),t.length>=e.length&&t[t.length-1]&&this.animateAddedSlip(t[t.length-1].oddId)},authUser:function(){null===this.authUser&&(this.isGroup=!1)},isGroup:function(){this.isGroup&&(this.dareFriend=!1)},dareFriend:function(){this.dareFriend&&(this.isGroup=!1)}},computed:v({},Object(r["c"])(["betSlip","authUser","userDetails","userGroups"])),methods:v({},Object(r["b"])(["getBetSlip","getUserDetails"]),{removeFromBetSlip:function(t){this.$store.dispatch("removeFromSlip",t)},accountSelectedIsSufficient:function(t){switch(t){case"main":return this.authUser.account.main>=25;case"bonus":return this.authUser.account.bonus>=25;case"sambaza":return this.authUser.account.sambaza>=25;default:return!1}},mainAccountIsSufficient:function(){if(this.authUser||this.accountType)return"main"===this.accountType&&this.authUser.account.main<25},bonusAccountIsSufficient:function(){if(this.authUser||this.accountType)return"bonus"===this.accountType&&this.authUser.account.bonus<25},sambazaAccountIsSufficient:function(){if(this.authUser||this.accountType)return"sambaza"===this.accountType&&this.authUser.account.sambaza<25},submitSuggestions:function(){var t=this,e=[],a=!1;if(this.betSlip.forEach((function(s){o["a"].isStarted(s.game)?(t.$noty.error("The game "+s.game.home_team+"vs"+s.game.away_team+" is already started, Please review your bet slip"),t.$store.dispatch("removeFromSlip",s),a=!0):e.push({game_id:parseInt(s.gameId),home_team:s.game.home_team,away_team:s.game.away_team,jackpot:s.game.is_jackpot,odd:s.oddValue,id:s.oddId,pick:s.oddOutCome,scheduled:s.scheduled,market_id:s.market_id})})),!a){var s={picks:e,is_group:this.isGroup,group_id:this.uuid};u.a.post(p["q"],s,{headers:m["a"].getHeaders()}).then((function(e){e.data;t.$noty.success("Suggestions sent successfully"),t.$store.dispatch("init_auth_user",{request:"refresh"}),t.$store.dispatch("clearBetSlip"),t.isGroup=!1}),(function(){t.$noty.error(t.$Exception.showErrorMessage())}))}},getTotalOdds:function(){var t=this.betSlip,e=Number(1);return t.forEach((function(t){e*=t.oddValue})),e?e.toFixed(2):null},hideSlip:function(){this.isOpen=!this.isOpen},possibleWin:function(){var t=this.getTotalOdds()*this.stake;return t=t>1e6?1e6:t,t?t.toFixed(2):null},submitDare:function(){var t=this,e=this.betSlip[0],a={game_id:parseInt(e.gameId),home_team:e.game.home_team,away_team:e.game.away_team,odd:e.oddValue,id:e.oddId,pick:e.oddOutCome,scheduled:d()(e.scheduled).format("YYYY-MM-DD HH:mm:ss"),market_id:e.market_id},s={stake:this.stake,picks:a,opponent:this.opponentPhone};u.a.post(p["x"],s,{headers:m["a"].getHeaders()}).then((function(e){var a=e.data;"200"===a.code&&(t.$noty.success(a.message),t.$store.dispatch("init_auth_user",{request:"refresh"}),t.$store.dispatch("clearBetSlip"))}),(function(){return t.$noty.error(t.$Exception.showErrorMessage())}))},submitBetSlip:function(){var t=this;this.isLoading=!0,this.betSubmitted=!0;var e=!1,a=[];if(this.betSlip.forEach((function(s){o["a"].isStarted(s.game)?(t.$noty.error("The game "+s.game.home_team+"vs"+s.game.away_team+" is already started, Please review your bet slip"),t.$store.dispatch("removeFromSlip",s),e=!0):a.push({game_id:parseInt(s.gameId),home_team:s.game.home_team,away_team:s.game.away_team,jackpot:s.game.is_jackpot,odd:s.oddValue,id:s.oddId,pick:s.oddOutCome,scheduled:s.scheduled,market_id:s.market_id})})),!e){var s={user_id:this.authUser.owner_id,jackpot:!1,amount:this.stake,account:this.accountType,picks:a,is_group:this.isGroup};this.responseData=[],u.a.post(p["y"],s,{headers:m["a"].getHeaders()}).then((function(e){var a=e.data;200===a.code?(t.isLoading=!1,t.$noty.success(a.message),t.$store.dispatch("clearBetSlip"),t.betSubmitted=!1,t.$store.dispatch("init_auth_user",{request:"refresh"})):(t.responseData.push(a.message),t.$noty.error(a.message),t.betSubmitted=!1,t.isLoading=!1)}),(function(){t.$noty.error(t.$Exception.showErrorMessage()),t.isLoading=!1}))}},animateAddedSlip:function(t){var e=this,a=document.querySelectorAll(".slip".concat(t)),s=this.isOpen?this.$refs.betSlipBtn:this.$refs.betSlipBox;a.length&&(a=a.length>1?[].filter.call(a,(function(t){return t.getBoundingClientRect().width>0}))[0]:a[0],this.anSlip={width:"".concat(a.offsetWidth,"px"),height:"".concat(a.offsetHeight,"px"),top:"".concat(a.getBoundingClientRect().top,"px"),left:"".concat(a.getBoundingClientRect().left,"px")},this.showAnSlip=!0,setTimeout((function(){window.innerWidth<768?e.anSlip=v({},e.anSlip,{width:"100vw",top:"100vh",left:"0px"}):e.anSlip=v({},e.anSlip,{width:"20px",top:"".concat(s?s.getBoundingClientRect().top:200,"px"),left:s?"".concat(s.getBoundingClientRect().left,"px"):"100vw"})}),1),setTimeout((function(){e.showAnSlip=!1,e.anSlip={}}),700))}})},g=_,S=(a("f8c9"),a("2877")),w=Object(S["a"])(g,s,i,!1,null,"494e4a10",null);e["default"]=w.exports},"456d":function(t,e,a){var s=a("4bf8"),i=a("0d58");a("5eda")("keys",(function(){return function(t){return i(s(t))}}))},"4d73":function(t,e,a){},"5eda":function(t,e,a){var s=a("5ca1"),i=a("8378"),n=a("79e5");t.exports=function(t,e){var a=(i.Object||{})[t]||Object[t],o={};o[t]=e(a),s(s.S+s.F*n((function(){a(1)})),"Object",o)}},6005:function(t,e,a){},"7f76":function(t,e,a){"use strict";var s=a("b476"),i=a.n(s);i.a},"8e6e":function(t,e,a){var s=a("5ca1"),i=a("990b"),n=a("6821"),o=a("11e9"),r=a("f1ae");s(s.S,"Object",{getOwnPropertyDescriptors:function(t){var e,a,s=n(t),c=o.f,u=i(s),l={},d=0;while(u.length>d)a=c(s,e=u[d++]),void 0!==a&&r(l,e,a);return l}})},"990b":function(t,e,a){var s=a("9093"),i=a("2621"),n=a("cb7c"),o=a("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=s.f(n(t)),a=i.f;return a?e.concat(a(t)):e}},b476:function(t,e,a){},eb6e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bet-form"},[t._t("default")],2)},i=[],n={name:"BetForm"},o=n,r=(a("18b4"),a("2877")),c=Object(r["a"])(o,s,i,!1,null,"71cfc8cd",null);e["a"]=c.exports},f1ae:function(t,e,a){"use strict";var s=a("86cc"),i=a("4630");t.exports=function(t,e,a){e in t?s.f(t,e,i(0,a)):t[e]=a}},f8c9:function(t,e,a){"use strict";var s=a("6005"),i=a.n(s);i.a},fc64:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-ellipsis",staticStyle:{margin:"3px auto","text-align":"center"}},[a("div"),a("div"),a("div"),a("div")])}],n={name:"LoadingIndicator"},o=n,r=(a("7f76"),a("2877")),c=Object(r["a"])(o,s,i,!1,null,"2e03ed55",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-8d233f4a.2aba41dc.js.map