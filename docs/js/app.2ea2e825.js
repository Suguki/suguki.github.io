(function(t){function a(a){for(var i,o,l=a[0],n=a[1],c=a[2],u=0,v=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,l=1;l<e.length;l++){var n=e[l];0!==s[n]&&(i=!1)}i&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},s={app:0},r=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=n;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2421:function(t,a,e){"use strict";var i=e("4a32"),s=e.n(i);s.a},3023:function(t,a,e){"use strict";var i=e("e795"),s=e.n(i);s.a},"4a32":function(t,a,e){},"4c03":function(t,a,e){},"4c43":function(t,a,e){"use strict";var i=e("c7ad"),s=e.n(i);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("nav-bar"),e("my-Profile"),e("mySkills"),e("myPortfolio")],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-skills container-fluid h-100",attrs:{id:"my-skills"}},[e("h1",[t._v("My Skills")]),e("br"),e("h3",[t._v("Languages")]),e("div",{staticClass:"card-deck row"},t._l(t.cardItems,(function(a,i){return e("div",{key:i,staticClass:"col-md-4"},[e("card",t._b({staticClass:"cursor img img-responsive"},"card",a,!1))],1)})),0),e("br"),e("br"),e("hr"),e("h3",[t._v("Frameworks/Libraries")]),e("div",{staticClass:"card-deck row"},t._l(t.frameworks,(function(a,i){return e("div",{key:i,staticClass:"col-md-6"},[e("card",t._b({staticClass:"cursor img"},"card",a,!1))],1)})),0),e("br"),e("br"),e("hr"),e("h3",[t._v("Others")]),e("div",{staticClass:"card-deck row"},t._l(t.others,(function(a,i){return e("div",{key:i,staticClass:"col-md-6"},[e("card",t._b({staticClass:"cursor img"},"card",a,!1))],1)})),0),e("br")])},l=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"profile-item card text-center",attrs:{ontouchstart:""},on:{click:function(a){return t.reverse()}}},[t.is_reversed?e("div",[e("div",{staticClass:"profile-title card-header text-info"},[t._v(t._s(t.title))]),e("div",{staticClass:"profile-body card-body p-2"},[t._v(t._s(t.comment))])]):e("div",[e("div",{staticClass:"prifile-title card-header"},[t._v(t._s(t.title))]),e("div",{staticClass:"profile-body card-body p-2"},[e("img",{staticClass:"img",staticStyle:{height:"180px"},attrs:{src:t.dumpImg()}})])])])},c=[],d={name:"Card",props:{title:String,logo:String,comment:String},data:function(){return{is_reversed:!1}},methods:{reverse:function(){this.is_reversed=!this.is_reversed},dumpImg:function(){return this.logo}}},u=d,v=(e("4c43"),e("2877")),m=Object(v["a"])(u,n,c,!1,null,"bab63904",null),f=m.exports,p={components:{Card:f},data:function(){return{cardItems:[{title:"HTML&CSS",logo:"images/HTML&CSS-logo.png",comment:"CSSライブラリであるBootStrapを用いて簡単なサイトデザインを作ることのできるレベルです."},{title:"Java Script",logo:"images/JS-logo.png",comment:"簡単なDOM操作を利用し、小規模なアルゴリズムを1からかけるレベルです.Vue.jsを扱うにあたり最低限の基礎知識を持っています."},{title:"php",logo:"images/php-logo.png",comment:"CRUD操作やログインページの実装(バリデーション含む)を1から一人で行うことができるレベルです."}],frameworks:[{title:"Laravel",logo:"images/Laravel-logo.png",comment:"CRUD機能に加え、DBテーブルのリレーション管理、画像ファイルのアップロード機能の実装を一人で行うことができるレベルです."},{title:"Vue.js",logo:"images/Vue.js-logo.png",comment:"セレクトボックスやラジオボタン等のコンポーネントを自作し、当サイトページのようなものを作ることができるレベルです."}],others:[{title:"Docker",logo:"images/Docker-logo.png",comment:"Dockerを使ってアプリの環境構築を行うことができるレベルです"},{title:"GitHub",logo:"images/GitHub-logo.png",comment:"push&pull、marge&rebase、pullRequestなど、チーム開発にあたり必要な最低限の操作知識があります。Soucetreeを使っています."}]}}},g=p,b=(e("3023"),Object(v["a"])(g,o,l,!1,null,"2c2917ff",null)),h=b.exports,_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-profile container-fluid h-100",attrs:{id:"my-profile"}},[e("div",[e("h1",[t._v("My Profile")])]),e("br"),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 img-edge"},[e("img",{staticClass:"img",attrs:{src:"images/my-icon.JPG"}})]),e("div",{staticClass:"col-md-8"},[e("ul",[e("li",[e("h5",{staticClass:"font-weight"},[t._v("名前:")])]),e("p",{staticClass:"space"},[t._v("藤田 佑真")]),e("br"),e("li",[e("h5",{staticClass:"font-weight"},[t._v("前職：")])]),e("p",{staticClass:"space"},[t._v(" メック株式会社 研究開発本部 技術開発センター "),e("br"),t._v("化学メーカーで電子基板の製造工程に用いられる薬液の開発をしていました。 ")])])])]),e("br"),e("div",{attrs:{claaa:"row"}},[e("div",{staticClass:"col-md-12 h-100 parallel"},[e("ul",{staticClass:"col-md-12"},[e("li",[e("h5",{staticClass:"font-weight"},[t._v("自己紹介：")])]),e("p",{staticClass:"space"},[t._v(" 2019年4月に化学メーカーであるメック株式会社へ入社し、研究開発員として基板関連製品の開発に携わってきました。 2020年6月末日を以て退職し、現在に至ります。 勤務地は近畿圏内を希望しています。 業界未経験ではありますが、業務時間外の勉強を惜しまず、いち早く業務に馴染めるよう食らいついてく所存です。 ")]),e("br"),e("li",[e("h5",{staticClass:"font-weight"},[t._v("自身の強み・実績")])]),e("p",{staticClass:"space"},[t._v(" 学生時代の部活動"),e("br"),t._v(" ・中高6年間を通してソフトテニス部に所属し、中学では団体で京都府優勝、高校では個人戦で市内ベスト4の実績があります。"),e("br"),t._v(" ・中学では全国大会出場経験のあるジュニア選手が半数を占める中未経験で入部し、3年生でレギュラー入りし上記の実績を 残すことができました。"),e("br"),t._v(" ・実績を残すことができた理由にもつながるのですが、一度熱が入ると一日中そのことについて考えるタイプであることが 強みです。"),e("br")]),e("br"),e("li",[e("h5",{staticClass:"font-weight"},[t._v("専攻分野:")])]),e("p",{staticClass:"space"},[t._v(" ・前職で培った電子基板業界の知識があります。 "),e("br"),t._v("・学生時代は分子生物学、免疫学、遺伝子工学について専攻していました。余談ですが、新型コロナウイルス検査に用いられる PCR検査についても精通しています。 "),e("br"),t._v("・また学生時代、前職では特にコミュニケーションに気を配ってきました。研究生活では自身のタスク進行状況がクローズになる 傾向があるため、常に周りに対し、仕事の見える化を意識して取り組んできました。それに加え前職では顧客と直接やり取りを 行いながら新製品のプレゼン、導入に携わった経験もあり、社会人としてコミュニケーションの基礎はしっかり身につけている という自負があります。 ")]),e("br"),e("li",[e("h5",{staticClass:"font-weight"},[t._v("この先やってみたいこと:")])]),e("p",{staticClass:"space"},[t._v(" フロント、バックエンドどちらにも強い興味がありますが、まずはバックエンドの開発業務に携わりたいと考えています。 理由としては、バックエンドで設計やセキュリティ対策についてより深く学びたいという気持ちがあるためです。 ")]),e("br"),e("li",[e("h5",{staticClass:"font-weight"},[t._v("最後に:")])]),e("p",{staticClass:"space"},[t._v(" WEBエンジニアとしての開発業務に強い好奇心はありますが、まずは自社の製品、サービスに愛を持って仕事をして いきたいです。前職での経験をもとに、貴社のビジネスに対して愛が持てそうか、という観点を大事に求職活動をさせて頂いて おります。採用いただけましたら貴社の事業拡大に貢献すべく、精一杯努力していくつもりです。 以上、よろしくお願いいたします。 ")])])])])])}],y=(e("7f03"),{}),w=Object(v["a"])(y,_,C,!1,null,"121394da",null),k=w.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-portfolio container-fluid h-100",attrs:{id:"my-portfolio"}},[e("h1",[t._v("My Portfolio")]),e("div",{staticClass:"card-deck row"},[e("div",{staticClass:"col-md-6"},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"20rem"},attrs:{title:"pigGame","img-src":"images/pig_game.png","img-alt":"Image","img-top":"",tag:"article"}},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.PigGameModal",modifiers:{PigGameModal:!0}}]},[t._v("詳細")]),e("b-modal",{attrs:{id:"PigGameModal",title:"PigGame"}},[e("div",{staticClass:"my-4"},[e("ul",[e("li",[e("span",{staticClass:"font-weight"},[t._v("概要：")]),t._v("二人でサイコロを振り、どちらが早く出た目の合計が100になるか競うゲーム。意外とゲーム性あります。")]),e("li",[e("span",{staticClass:"font-weight"},[t._v("使用言語")]),t._v("JavaScript/HMTL/CSS"),e("br"),t._v(" DOM操作を利用し、ページ遷移することなくアクションを実行するため、JavaScriptを使用し作成しました。 ")]),e("li",[e("span",{staticClass:"font-weight"},[t._v("使用環境")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Githubページへ")])]),e("li",[t._v("あそぶ")])])])])],1)],1),e("div",{staticClass:"col-md-6 content-center"},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"20rem"},attrs:{title:"今日どこ行く？","img-src":"images/whereAreYouGoToday.png","img-alt":"Image","img-top":"",tag:"article"}},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.KyodokoikuModal",modifiers:{KyodokoikuModal:!0}}]},[t._v("詳細")]),e("b-modal",{attrs:{id:"KyodokoikuModal",title:"今日どこ行く？"}},[e("div",{staticClass:"my-4"},[e("ul",[e("li",[e("span",{staticClass:"font-weight"},[t._v("概要：")]),t._v("休日何かしたいけど何しようかな...そんなときはこのアプリで案を出すのもいいのではないでしょうか。 気分に沿って案を出してくれます。割と細かく案を絞れます。")]),e("li",[e("span",{staticClass:"font-weight"},[t._v("使用言語：")]),t._v("HTML/CSS/Bootstrap/PHP"),e("br"),t._v(" アプリの機能を実装するに当たり、DBを使ったバックエンド処理が必要であったためphpを使用し作成しました。")]),e("li",[e("span",{staticClass:"font-weight"},[t._v("使用環境: ")]),t._v("Docker/MySQL/nginx")]),e("li",[e("a",{attrs:{target:"_blank",href:"https://github.com/Suguki/kyodokoiku"}},[t._v("Githubページへ")])])])])])],1)],1)]),e("br"),e("br"),e("div",{staticClass:"card-deck row"},[e("div",{staticClass:"col-md-6 text-center"},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"20rem"},attrs:{title:"TripCoffee","img-src":"images/Trip-Coffee.png","img-alt":"Image","img-top":"",tag:"article"}},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.TripCoffeeModal",modifiers:{TripCoffeeModal:!0}}]},[t._v("詳細")]),e("b-modal",{attrs:{id:"TripCoffeeModal",title:"TripCoffee"}},[e("div",{staticClass:"my-4"},[e("ul",[e("li",[e("span",{staticClass:"font-weight"},[t._v("概要：")]),t._v("カフェ好きが高じて誕生しました.今日どこ行く？")]),e("p",[t._v("とは違いレビューや店の評価ができます.")]),e("li",[e("span",{staticClass:"font-weight"},[t._v("使用言語：")]),t._v("HTML/CSS/Bootstrap/PHP/Laravel "),e("br"),t._v("今日どこ行く？を作成phpの基礎をしある程度学んだので、フレームワークを利用しもう少しリッチなアプリを作成したいと思いLaravelを使いました。")]),e("li",[e("span",{staticClass:"font-weight"},[t._v("使用環境：")]),t._v(" Docker/MySQL/nginx")]),e("li",[e("a",{attrs:{href:"https://github.com/Suguki/cafe_review",target:"_blank"}},[t._v("Githubページへ")])])])])])],1)],1)])])},x=[],M=(e("77bb"),{}),P=Object(v["a"])(M,S,x,!1,null,"20d9c28b",null),O=P.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:" container-fluid navbar navbar-expand navbar-dark bg-dark fixed-top"},[e("div",{staticClass:"collapse navbar-collapse justify-content-center custom-nav",attrs:{id:"navbarSupportedContent"}},[e("div",{staticClass:"navbar-nav"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#my-profile",expression:"'#my-profile'"}]},[t._v("My Profile")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#my-skills",expression:"'#my-skills'"}]},[t._v("My Skills")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#my-portfolio",expression:"'#my-portfolio'"}]},[t._v("My Portfolio")])])])])])},T=[],L={components:{},data:function(){return{drawer:!0}},methods:{toTop:function(){this.drawer=!1,this.$router.push({name:"top"}).catch((function(){}))},toTerm:function(){this.drawer=!1,this.$router.push({name:"term"}).catch((function(){}))},toPrivacyPolicy:function(){this.drawer=!1,this.$router.push({name:"privacy_policy"}).catch((function(){}))}}},G=L,D=(e("9f3f"),Object(v["a"])(G,j,T,!1,null,"640e3c10",null)),$=D.exports,H={components:{myProfile:k,mySkills:h,myPortfolio:O,NavBar:$},data:function(){return{drawer:!1}}},E=H,B=(e("2421"),Object(v["a"])(E,s,r,!1,null,"2d008ed6",null)),I=B.exports,J=e("5f5b"),N=(e("f9e3"),e("2dd8"),e("f13c")),R=e.n(N);i["default"].use(J["a"]),i["default"].use(R.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(I)}}).$mount("#app")},"5c8a":function(t,a,e){},"77bb":function(t,a,e){"use strict";var i=e("928a"),s=e.n(i);s.a},"7f03":function(t,a,e){"use strict";var i=e("5c8a"),s=e.n(i);s.a},"928a":function(t,a,e){},"9f3f":function(t,a,e){"use strict";var i=e("4c03"),s=e.n(i);s.a},c7ad:function(t,a,e){},e795:function(t,a,e){}});
//# sourceMappingURL=app.2ea2e825.js.map