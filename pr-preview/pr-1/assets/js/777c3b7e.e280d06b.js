"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var l=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,o=function(e,t){if(null==e)return{};var r,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=l.createContext({}),p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?l.createElement(v,i(i({ref:t},c),{},{components:r})):l.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<n;p++)i[p]=r[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var l=r(87462),o=(r(67294),r(3905));const n={sidebar_label:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit."},i="Rollkit",a={unversionedId:"developers/rollkit",id:"version-v0.11.0-rc8-arabica-improvements/developers/rollkit",title:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit.",source:"@site/versioned_docs/version-v0.11.0-rc8-arabica-improvements/developers/rollkit.mdx",sourceDirName:"developers",slug:"/developers/rollkit",permalink:"/pr-preview/pr-1/developers/rollkit",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/versioned_docs/version-v0.11.0-rc8-arabica-improvements/developers/rollkit.mdx",tags:[],version:"v0.11.0-rc8-arabica-improvements",frontMatter:{sidebar_label:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit."},sidebar:"developers",previous:{title:"Deploy a Rollup",permalink:"/pr-preview/pr-1/category/deploy-a-rollup"},next:{title:"Optimism",permalink:"/pr-preview/pr-1/category/optimism"}},s={},p=[{value:"Tutorials",id:"tutorials",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rollkit"},"Rollkit"),(0,o.kt)("p",null,"Validator nodes allow you to participate in consensus in the Celestia network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rollkit",src:r(37712).Z,width:"2500",height:"2825"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rollkit.dev"},"Rollkit")," is an ABCI\n(Application Blockchain Interface) implementation for sovereign\nrollups to deploy on top of Celestia."),(0,o.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,o.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,o.kt)("p",null,"The goal of Rollkit is to enable anyone to design and\ndeploy a sovereign rollup on Celestia in minutes."),(0,o.kt)("p",null,'Furthermore, while Rollkit allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollkit currently only supports\na single sequencer.'),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Rollkit. We call those chains Sovereign Rollups."),(0,o.kt)("p",null,"You can get started with the following tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/gm-world"},"GM World rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/gm-world-frontend"},"GM World frontend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/recipe-book"},"Recipe Book rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/wordle"},"Wordle app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/cosmwasm"},"CosmWasm rollup")),(0,o.kt)("li",{parentName:"ul"},"EVM rollup - Coming soon!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/developers/full-stack-modular-development-guide/"},"Full stack modular blockchain development guide"))))}d.isMDXComponent=!0},37712:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/rollkit-a3c303985129391d591d82877628422a.png"}}]);