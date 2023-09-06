"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5098],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),b=n,h=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},65294:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=e=>{let{arabicaVersions:t,constants:a}=e;return r.createElement("ul",null,r.createElement("li",null,"Celestia Chain ID - ",r.createElement("a",{href:`https://github.com/celestiaorg/networks/tree/master/${a.arabicaChainId}`,target:"_blank",rel:"noopener noreferrer"},a.arabicaChainId)),r.createElement("li",null,"Celestia Node - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${t["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["node-latest-tag"])),r.createElement("li",null,"Celestia App - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${t["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["app-latest-tag"])),r.createElement("li",null,"Rollkit - ",r.createElement("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${a.arabicaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},a.arabicaRollkitVersion)))}},43638:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=e=>{let{mochaVersions:t,constants:a}=e;return r.createElement("ul",null,r.createElement("li",null,"Celestia Chain ID - ",r.createElement("a",{href:`https://github.com/celestiaorg/networks/tree/master/${a.mochaChainId}`,target:"_blank",rel:"noopener noreferrer"},a.mochaChainId)),r.createElement("li",null,"Celestia Node - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${t["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["node-latest-tag"])),r.createElement("li",null,"Celestia App - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${t["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["app-latest-tag"])),r.createElement("li",null,"Rollkit - ",r.createElement("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${a.mochaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},a.mochaRollkitVersion)))}},35672:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({"app-latest-tag":"v1.0.0-rc7","app-latest-sha":"2ad80bc4aa1be3ddae6b417189ce58088a93c666","core-latest-tag":"v1.23.0-tm-v0.34.28","core-latest-sha":"67cc27bcb051f911c40444530f4e5257b04dd469","node-latest-tag":"v0.11.0-rc8","node-latest-sha":"e41f62662cf1844ba52d7a93d03cf79b6e363897"})},17943:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.20.2",golangNodeArabica:"1.20.2",golangApp:"1.20.2",golangCore:"1.20.2",golang:"1.20.2",arabicaChainId:"arabica-9",bsrChainId:"blockspacerace-0",mochaChainId:"mocha-3",arabicaRollkitVersion:"v0.10.2",mochaRollkitVersion:"v0.10.2",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},35589:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({"app-latest-tag":"v1.0.0-rc10","app-latest-sha":"96b86ba8c0a11b1b854da1c256c5d737dbaeede3","core-latest-tag":"v1.24.0-tm-v0.34.28","core-latest-sha":"d24c81afe0ecc4ccfbb7eb543a45a11794f04db4","node-latest-tag":"v0.11.0-rc8","node-latest-sha":"e41f62662cf1844ba52d7a93d03cf79b6e363897"})},26021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),o=a(43638),i=a(65294),l=a(35672),s=a(35589),c=a(17943);const p={sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},d="Participate in the Celestia testnets",u={unversionedId:"nodes/participate",id:"version-v0.11.0-rc8/nodes/participate",title:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in.",source:"@site/versioned_docs/version-v0.11.0-rc8/nodes/participate.mdx",sourceDirName:"nodes",slug:"/nodes/participate",permalink:"/pr-preview/pr-1/v0.11.0-rc8/nodes/participate",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/versioned_docs/version-v0.11.0-rc8/nodes/participate.mdx",tags:[],version:"v0.11.0-rc8",frontMatter:{sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},sidebar:"nodes",previous:{title:"Overview",permalink:"/pr-preview/pr-1/v0.11.0-rc8/nodes/overview"},next:{title:"Arabica devnet",permalink:"/pr-preview/pr-1/v0.11.0-rc8/nodes/arabica-devnet"}},b={},h=[{value:"Network upgrades",id:"network-upgrades",level:2}],m={toc:h},g="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"participate-in-the-celestia-testnets"},"Participate in the Celestia testnets"),(0,n.kt)("p",null,"Celestia currently has three existing testnets that you can participate in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/v0.11.0-rc8/nodes/arabica-devnet"},"Arabica devnet"),": A devnet focused on developers who\nwant to deploy sovereign rollups on the latest changes from Celestia's codebase.\nArabica will be updated frequently and might be unstable at times given new updates.\nValidators won't be able to validate on Arabica as it is not designed for\nvalidators to participate.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compatible software versions",(0,n.kt)(i.Z,{arabicaVersions:l.Z,constants:c.Z,mdxType:"ArabicaVersionTags"})))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/v0.11.0-rc8/nodes/mocha-testnet"},"Mocha testnet"),": A testnet focused on enabling validators\nto test out their infrastructure by running nodes connected to the network. Developers\ncan also deploy sovereign rollups on Mocha, it just will always be behind Arabica\nas Mocha upgrades are slower given they need to be done via hardforks in coordination\nwith the validator community on Mocha.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compatible software versions",(0,n.kt)(o.Z,{mochaVersions:s.Z,constants:c.Z,mdxType:"MochaVersionTags"}))))),(0,n.kt)("h2",{id:"network-upgrades"},"Network upgrades"),(0,n.kt)("p",null,"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/+smSFIA7XXLU4MjJh"},"Telegram announcement channel"),"\nfor network upgrades."))}f.isMDXComponent=!0}}]);