(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{371:function(e,t,s){"use strict";var a={props:{categories:{type:Array,required:!0}}},o=s(31),n=Object(o.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"list-inline"},e._l(e.categories,(function(t,a){return s("li",{key:t.id,staticClass:"list-inline-item m-0"},[s("g-link",{staticClass:"text-uppercase font-weight-bold mx-1",attrs:{to:t.path}},[e._v(e._s(t.title))]),a<e.categories.length-1?s("span",[e._v("·")]):e._e()],1)})),0)}),[],!1,null,null,null).exports,i=s(243),r=s.n(i),l={props:{date:{type:String,required:!0}},computed:{formatedDate:function(){return r()(this.date).locale("en_gb").format("ll")}}},c=Object(o.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("span",[this._v(this._s(this.formatedDate))])}),[],!1,null,null,null).exports,d=(s(105),s(69),{components:{FormatedDate:c},props:{post:{type:Object,required:!0}},computed:{readingTime:function(){var e=this.post&&this.post.content?this.post.content.split(" ").filter((function(e){return e.length>2})).length:0,t=Math.round(e/200);return" &asymp;".concat(Math.max(1,t),"min")}}}),b={components:{CategoriesList:n,FormatedDate:c,ReadMore:Object(o.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-button",{staticClass:"read-more border-0 mb-5",attrs:{variant:"primary",to:this.post.path}},[t("span",[t("b",{staticClass:"text-uppercase"},[this._v("Read More")]),t("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.readingTime)}})])])}),[],!1,null,null,null).exports},props:{post:{type:Object,required:!0}}},p=Object(o.a)(b,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-row",{attrs:{tag:"article"}},[s("b-col",{staticClass:"meta-data py-md-5 text-center position-relative d-flex",attrs:{"data-first":e.post.title?e.post.title.charAt(0):"",md:"3"}},[s("div",{staticClass:"mx-auto mb-2 position-relative"},[s("formated-date",{staticClass:"post-date font-weight-bold",attrs:{date:e.post.date}}),s("i",{staticClass:"d-none d-md-block"},[e._v("in:")]),s("categories-list",{staticClass:"mb-0",attrs:{categories:e.post.categories}}),e.post.author?s("div",[s("i",[e._v("by: ")]),s("g-link",{staticClass:"font-weight-bold",attrs:{to:e.post.author.path}},[e._v("\n          "+e._s(e.post.author.name)+"\n        ")])],1):e._e()],1)]),s("b-col",{staticClass:"mb-5 py-md-5"},[e._t("default",[s("g-link",{staticClass:"text-dark",attrs:{to:e.post.path}},[s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h1 post-title text-break mb-4",domProps:{innerHTML:e._s(e.post.title)}})]),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-excerpt text-break mb-4",domProps:{innerHTML:e._s(e.post.excerpt)}}),s("read-more",{attrs:{post:e.post}})])],2)],1)}),[],!1,null,null,null);t.a=p.exports},373:function(e,t,s){var a={"./af":244,"./af.js":244,"./ar":245,"./ar-dz":246,"./ar-dz.js":246,"./ar-kw":247,"./ar-kw.js":247,"./ar-ly":248,"./ar-ly.js":248,"./ar-ma":249,"./ar-ma.js":249,"./ar-sa":250,"./ar-sa.js":250,"./ar-tn":251,"./ar-tn.js":251,"./ar.js":245,"./az":252,"./az.js":252,"./be":253,"./be.js":253,"./bg":254,"./bg.js":254,"./bm":255,"./bm.js":255,"./bn":256,"./bn.js":256,"./bo":257,"./bo.js":257,"./br":258,"./br.js":258,"./bs":259,"./bs.js":259,"./ca":260,"./ca.js":260,"./cs":261,"./cs.js":261,"./cv":262,"./cv.js":262,"./cy":263,"./cy.js":263,"./da":264,"./da.js":264,"./de":265,"./de-at":266,"./de-at.js":266,"./de-ch":267,"./de-ch.js":267,"./de.js":265,"./dv":268,"./dv.js":268,"./el":269,"./el.js":269,"./en-SG":270,"./en-SG.js":270,"./en-au":271,"./en-au.js":271,"./en-ca":272,"./en-ca.js":272,"./en-gb":273,"./en-gb.js":273,"./en-ie":274,"./en-ie.js":274,"./en-il":275,"./en-il.js":275,"./en-nz":276,"./en-nz.js":276,"./eo":277,"./eo.js":277,"./es":278,"./es-do":279,"./es-do.js":279,"./es-us":280,"./es-us.js":280,"./es.js":278,"./et":281,"./et.js":281,"./eu":282,"./eu.js":282,"./fa":283,"./fa.js":283,"./fi":284,"./fi.js":284,"./fo":285,"./fo.js":285,"./fr":286,"./fr-ca":287,"./fr-ca.js":287,"./fr-ch":288,"./fr-ch.js":288,"./fr.js":286,"./fy":289,"./fy.js":289,"./ga":290,"./ga.js":290,"./gd":291,"./gd.js":291,"./gl":292,"./gl.js":292,"./gom-latn":293,"./gom-latn.js":293,"./gu":294,"./gu.js":294,"./he":295,"./he.js":295,"./hi":296,"./hi.js":296,"./hr":297,"./hr.js":297,"./hu":298,"./hu.js":298,"./hy-am":299,"./hy-am.js":299,"./id":300,"./id.js":300,"./is":301,"./is.js":301,"./it":302,"./it-ch":303,"./it-ch.js":303,"./it.js":302,"./ja":304,"./ja.js":304,"./jv":305,"./jv.js":305,"./ka":306,"./ka.js":306,"./kk":307,"./kk.js":307,"./km":308,"./km.js":308,"./kn":309,"./kn.js":309,"./ko":310,"./ko.js":310,"./ku":311,"./ku.js":311,"./ky":312,"./ky.js":312,"./lb":313,"./lb.js":313,"./lo":314,"./lo.js":314,"./lt":315,"./lt.js":315,"./lv":316,"./lv.js":316,"./me":317,"./me.js":317,"./mi":318,"./mi.js":318,"./mk":319,"./mk.js":319,"./ml":320,"./ml.js":320,"./mn":321,"./mn.js":321,"./mr":322,"./mr.js":322,"./ms":323,"./ms-my":324,"./ms-my.js":324,"./ms.js":323,"./mt":325,"./mt.js":325,"./my":326,"./my.js":326,"./nb":327,"./nb.js":327,"./ne":328,"./ne.js":328,"./nl":329,"./nl-be":330,"./nl-be.js":330,"./nl.js":329,"./nn":331,"./nn.js":331,"./pa-in":332,"./pa-in.js":332,"./pl":333,"./pl.js":333,"./pt":334,"./pt-br":335,"./pt-br.js":335,"./pt.js":334,"./ro":336,"./ro.js":336,"./ru":337,"./ru.js":337,"./sd":338,"./sd.js":338,"./se":339,"./se.js":339,"./si":340,"./si.js":340,"./sk":341,"./sk.js":341,"./sl":342,"./sl.js":342,"./sq":343,"./sq.js":343,"./sr":344,"./sr-cyrl":345,"./sr-cyrl.js":345,"./sr.js":344,"./ss":346,"./ss.js":346,"./sv":347,"./sv.js":347,"./sw":348,"./sw.js":348,"./ta":349,"./ta.js":349,"./te":350,"./te.js":350,"./tet":351,"./tet.js":351,"./tg":352,"./tg.js":352,"./th":353,"./th.js":353,"./tl-ph":354,"./tl-ph.js":354,"./tlh":355,"./tlh.js":355,"./tr":356,"./tr.js":356,"./tzl":357,"./tzl.js":357,"./tzm":358,"./tzm-latn":359,"./tzm-latn.js":359,"./tzm.js":358,"./ug-cn":360,"./ug-cn.js":360,"./uk":361,"./uk.js":361,"./ur":362,"./ur.js":362,"./uz":363,"./uz-latn":364,"./uz-latn.js":364,"./uz.js":363,"./vi":365,"./vi.js":365,"./x-pseudo":366,"./x-pseudo.js":366,"./yo":367,"./yo.js":367,"./zh-cn":368,"./zh-cn.js":368,"./zh-hk":369,"./zh-hk.js":369,"./zh-tw":370,"./zh-tw.js":370};function o(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=n,e.exports=o,o.id=373},379:function(e,t){},387:function(e,t,s){"use strict";var a=s(379),o=s.n(a);t.default=o.a},392:function(e){e.exports=JSON.parse('{"/blog/from-zero-to-fully-fledged-decentralized-application-in-less-than-10-minutes":[1,"0e8f7646"],"/blog/blockchain-art":[1,"8780ef84"],"/blog/how-are-smart-contracts-and-blockchain-adding-value-to-my-business":[1,"bdb6c486"],"/blog/0x0f-introduction-to-hyperledger-sawtooth-blockchain-developers-meetup":[1,"b2660216"],"/blog/aeternity-universe-one":[1,"2b657ae2"],"/blog/how-to-create-aeternity-fungible-token-tutorial":[1,"3ee007bc"],"/blog/0x0e-building-dapps-on-top-of-defi-decentralized-finance-blockchain-developers-meetup":[1,"aed34288"],"/blog/0x0d-accepting-bitcoin-the-right-way-blockchain-dev-meetup":[1,"c417e092"],"/blog/berlin-blockchain-week-2019-summarized":[1,"855b922e"],"/blog/blockchain-in-real-estate":[1,"66cbd3ea"],"/blog/blockchain-developers-meetup-12-1-year-birthday":[1,"e5c24892"],"/blog/hack-blockchain-development-company-joins-forces-with-blockrocket":[1,"3a817e3e"],"/blog/blockchain-in-insurance":[1,"fb490a3a"],"/blog/telerik-academy-ethereum-master-class":[1,"628810a8"],"/blog/crypto-games-meetup":[1,"63dee35b"],"/blog/waellet-development-update":[1,"bba2184c"],"/blog/0x0b-building-decentralized-autonomous-organizations-blockchain-dev-meetup":[1,"75f1c6da"],"/blog/blockchain-in-gaming":[1,"dfc86c5a"],"/blog/waellet-browser-extension-wallet-for-aeternity-blockchain-network":[1,"21342975"],"/blog/0x0a-confidential-transactions-with-zksnarks-blockchain-developers-meetup":[1,"7936a435"],"/blog/buidling-on-aeternity-workshop-at-wearedevelopers":[1,"5dd144ce"],"/blog/blockchain-in-healthcare":[1,"9d04b2ac"],"/blog/blockchain-in-supply-chain":[1,"6018e3ab"],"/blog/tips-tricks-and-best-approaches-for-developing-decentralized-applications-0x09-blockchain-developers-meetup":[1,"8bb3976c"],"/blog/wearedevelopers-tickets-winners":[1,"1645a8dd"],"/blog/the-dronathon":[1,"50d099ac"],"/blog/are-ieos-really-worth-the-hype":[1,"ab881390"],"/blog/blockchain-best-use-case-series-blockchain-in-finance":[1,"7671ba45"],"/blog/cumulus-tool-for-substrate-and-grandpa-in-depth-04-sofia-polkadot":[1,"2d180c5a"],"/blog/0x08-introduction-to-tron-blockchain-developers-meetup":[1,"1c254ed1"],"/blog/hack-partners-with-wearedevelopers":[1,"b5f91c9e"],"/blog/how-to-run-your-own-aeternity-node-on-amazon-aws":[1,"e2e9df46"],"/blog/tezos-decentralized-voting":[1,"3657b386"],"/blog/the-future-of-blockchain":[1,"4f050095"],"/blog/parachains-and-smart-contracts-03-sofia-polkadot":[1,"6463cbd6"],"/blog/0x07-aeternity-sophia-ml-workshop-blockchain-developers-meetup":[1,"4888f900"],"/blog/aeternity-sophia-language-visual-studio-code-extension":[1,"b3a64844"],"/blog/ico-or-sto-7-steps-to-success":[1,"43a263f5"],"/blog/blockchain-developers-meetup-0x06-jump-oriented-programming-in-ethereum-smart-contract":[1,"07880069"],"/blog/how-to-setup-our-environment-for-developing-on-ethereum":[1,"1cdea77f"],"/blog/polkadot-sofia-meetup-02-recent-development":[1,"1dfb0019"],"/blog/building-voting-aepp-with-sophia-ml-on-aeternity-blockchain":[1,"5491c16a"],"/blog/how-to-boost-your-business-with-blockchain-part-2":[1,"17f94d70"],"/blog/build-your-first-decentralized-application-aepp-on-aeternity-blockchain-sophia-smart-contract-address-book":[1,"367fdfa6"],"/blog/part-two-unit-testing-build-a-decentralized-domain-name-system-ddns-on-top-of-ethereum":[1,"8fd35aba"],"/blog/how-to-boost-your-business-with-blockchain":[1,"4c361500"],"/blog/blockchain-developers-meetup-0x05-e2-80-8a-e2-80-8aintroduction-to-polkadot":[1,"6ba65262"],"/blog/part-one-smart-contracts-build-a-decentralized-domain-name-system-ddns-on-top-of-ethereum":[1,"f1985086"],"/blog/blockchain-developers-meetup-bulgaria-0x04-introduction-to-solidity-assembly":[1,"28832fba"],"/blog/at-the-web3-summit-in-berlin":[1,"12c00630"],"/blog/blockchain-developers-meetup-0x03-e2-80-8a-e2-80-8alivecoding-workshop":[1,"6fe415a1"],"/blog/hack-team-was-at-the-nextblock-conference":[1,"5497194e"],"/blog/blockchain-developers-meetup-0x02-building-ai-run-economy-on-top-of-smart-contracts":[1,"444d9bf9"],"/blog/blockchain-developers-meetup-0x01-dark-daos-and-on-chain-vote-buying":[1,"866e746a"],"/blog/aeternity-starfleet-incubator-demo-day-2-a-sip-of-inspiration":[1,"76890b8e"],"/blog/we-started-the-blockchain-developers-meetup-0x00":[1,"23396b58"],"/blog/initial-exchange-offering-ieo-pros-and-cons":[1,"111275f3"],"/blog/hack-bg-we-develop-the-future":[1,"45b71a8a"]}')},400:function(e,t,s){"use strict";s.r(t);var a={components:{Post:s(371).a},metaInfo:function(){return{title:this.$page.post.title}}},o=s(31),n=s(387),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Layout",[s("b-row",{staticClass:"align-items-start"},[s("transition",{attrs:{name:"fade",appear:""}},[s("b-col",{staticClass:"bg-white p-0 rounded shadow-lg",attrs:{tag:"main",cols:"12",lg:"12"}},[s("div",{staticClass:"overflow-hidden p-4 p-sm-5 "},[s("Post",{attrs:{post:e.$page.post}},[s("header",{staticClass:"mb-4"},[s("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-break",domProps:{innerHTML:e._s(e.$page.post.title)}}),e.$page.post.featuredMedia?s("b-img",{staticClass:"mt-4",attrs:{src:e.$page.post.featuredMedia.sourceUrl,width:e.$page.post.featuredMedia.mediaDetails.width,alt:e.$page.post.featuredMedia.altText,fluid:""}}):e._e()],1),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content text-break",domProps:{innerHTML:e._s(e.$page.post.content)}}),e.$page.post.tags.length?[s("h2",{staticClass:"font-family-sans-serif h4"},[e._v("Tags:")]),s("ul",{staticClass:"list-inline"},e._l(e.$page.post.tags,(function(t){return s("li",{key:t.id,staticClass:"list-inline-item"},[s("b-button",{staticClass:"mb-2",attrs:{variant:"primary",size:"sm",to:t.path}},[e._v("\n                    "+e._s(t.title)+" ("+e._s(t.count)+")\n                  ")])],1)})),0)]:e._e()],2)],1)])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof n.default&&Object(n.default)(i);t.default=i.exports}}]);