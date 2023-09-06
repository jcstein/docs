"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,k=d["".concat(s,".").concat(p)]||d[p]||b[p]||r;return n?l.createElement(k,o(o({ref:t},u),{},{components:n})):l.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(67294),a=n(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>w});var l=n(87462),a=n(67294),r=n(86010),o=n(72957),i=n(16550),s=n(75238),c=n(33609),u=n(92560);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=b(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,c]=k({queryString:n,groupId:l}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,u.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),g=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,r]),tabValues:r}}var g=n(51048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),b=e=>{const t=e.currentTarget,n=u.indexOf(t),l=c[n].value;l!==i&&(d(t),s(l))},p=e=>{let t=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:b},o,{className:(0,r.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=m(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(v,(0,l.Z)({},e,t)),a.createElement(f,(0,l.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(y,(0,l.Z)({key:String(t)},e))}},66394:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v1.0.0-rc7","app-latest-sha":"2ad80bc4aa1be3ddae6b417189ce58088a93c666","core-latest-tag":"v1.23.0-tm-v0.34.28","core-latest-sha":"67cc27bcb051f911c40444530f4e5257b04dd469","node-latest-tag":"v0.11.0-rc8-arabica-improvements","node-latest-sha":"0cf4a49b8ff0f3618c88ac157b26d5fe3936f715"})},31637:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v0.13.3","app-latest-sha":"ab64b67797653e99691e846a4303bd71f44d1a8e","core-latest-tag":"v1.21.2-tm-v0.34.27","core-latest-sha":"d280f37a8376ed54ae03b10896fa25a4cbbc6d5b","node-latest-tag":"v0.10.4","node-latest-sha":"03ff94a7d779caf1225f3dccb53a68e8f1646dc6"})},45787:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.20.2",golangNodeArabica:"1.20.2",golangApp:"1.20.2",golangCore:"1.20.2",golang:"1.20.2",arabicaChainId:"arabica-9",bsrChainId:"blockspacerace-0",mochaChainId:"mocha-3",arabicaRollkitVersion:"v0.10.2",mochaRollkitVersion:"v0.10.2",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},43955:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v1.0.0-rc10","app-latest-sha":"96b86ba8c0a11b1b854da1c256c5d737dbaeede3","core-latest-tag":"v1.24.0-tm-v0.34.28","core-latest-sha":"d24c81afe0ecc4ccfbb7eb543a45a11794f04db4","node-latest-tag":"v0.11.0-rc8","node-latest-sha":"e41f62662cf1844ba52d7a93d03cf79b6e363897"})},30526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>b,toc:()=>k});var l=n(87462),a=(n(67294),n(3905)),r=n(45787),o=n(43955),i=n(66394),s=(n(31637),n(73992)),c=n(18679);const u={sidebar_label:"Installing Celestia Node",description:"Learn to build and install Celestia Node."},d="Celestia Node",b={unversionedId:"nodes/celestia-node",id:"version-v0.11.0-rc8-arabica-improvements/nodes/celestia-node",title:"Celestia Node",description:"Learn to build and install Celestia Node.",source:"@site/versioned_docs/version-v0.11.0-rc8-arabica-improvements/nodes/celestia-node.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-node",permalink:"/pr-preview/pr-1/nodes/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/versioned_docs/version-v0.11.0-rc8-arabica-improvements/nodes/celestia-node.mdx",tags:[],version:"v0.11.0-rc8-arabica-improvements",frontMatter:{sidebar_label:"Installing Celestia Node",description:"Learn to build and install Celestia Node."},sidebar:"nodes",previous:{title:"Setting up environment",permalink:"/pr-preview/pr-1/nodes/environment"},next:{title:"Installing Celestia App",permalink:"/pr-preview/pr-1/nodes/celestia-app"}},p={},k=[{value:"Install celestia-node",id:"install-celestia-node",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Upgrading your binary",id:"upgrading-your-binary",level:2}],m={toc:k},g="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,a.kt)("p",null,"This tutorial goes over building and installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/nodes/environment"},"here"),"."),(0,a.kt)("h2",{id:"install-celestia-node"},"Install celestia-node"),(0,a.kt)(s.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,a.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))))),(0,a.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,a.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null))))))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"First, we recommend reading the ",(0,a.kt)("a",{parentName:"p",href:"../overview/"},"overview"),"\nof our node types, if you haven't yet."),(0,a.kt)("p",null,"Now that you've installed Celestia Node, it's time to ",(0,a.kt)("a",{parentName:"p",href:"../decide-node/"},"pick your node type")," and run your node!"),(0,a.kt)("p",null,"If you're planning to run a light node,\nwe recommend the ",(0,a.kt)("a",{parentName:"p",href:"../../developers/node-tutorial"},"node RPC CLI tutorial"),"."),(0,a.kt)("h2",{id:"upgrading-your-binary"},"Upgrading your binary"),(0,a.kt)("p",null,"To upgrade your binary, you can install the latest version from the\ninstructions above and restart your node. If you run into any issues,\nplease refer to the ",(0,a.kt)("a",{parentName:"p",href:"../celestia-node-troubleshooting"},"troubleshooting")," section."))}h.isMDXComponent=!0}}]);