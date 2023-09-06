"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),o=a(67294),r=a(86010),l=a(72957),i=a(16550),s=a(75238),c=a(33609),u=a(92560);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=h({queryString:a,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var b=a(51048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},66394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v1.0.0-rc7","app-latest-sha":"2ad80bc4aa1be3ddae6b417189ce58088a93c666","core-latest-tag":"v1.23.0-tm-v0.34.28","core-latest-sha":"67cc27bcb051f911c40444530f4e5257b04dd469","node-latest-tag":"v0.11.0-rc8-arabica-improvements","node-latest-sha":"0cf4a49b8ff0f3618c88ac157b26d5fe3936f715"})},31637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v0.13.3","app-latest-sha":"ab64b67797653e99691e846a4303bd71f44d1a8e","core-latest-tag":"v1.21.2-tm-v0.34.27","core-latest-sha":"d280f37a8376ed54ae03b10896fa25a4cbbc6d5b","node-latest-tag":"v0.10.4","node-latest-sha":"03ff94a7d779caf1225f3dccb53a68e8f1646dc6"})},43955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v1.0.0-rc10","app-latest-sha":"96b86ba8c0a11b1b854da1c256c5d737dbaeede3","core-latest-tag":"v1.24.0-tm-v0.34.28","core-latest-sha":"d24c81afe0ecc4ccfbb7eb543a45a11794f04db4","node-latest-tag":"v0.11.0-rc8","node-latest-sha":"e41f62662cf1844ba52d7a93d03cf79b6e363897"})},84460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=a(87462),o=(a(67294),a(3905)),r=a(43955),l=a(66394),i=(a(31637),a(73992)),s=a(18679);const c={sidebar_label:"Docker images",description:"Running Celestia Node using Docker."},u="\ud83d\udc33 Docker setup",d={unversionedId:"nodes/docker-images",id:"version-v0.11.0-rc8-arabica-improvements/nodes/docker-images",title:"\ud83d\udc33 Docker setup",description:"Running Celestia Node using Docker.",source:"@site/versioned_docs/version-v0.11.0-rc8-arabica-improvements/nodes/docker-images.mdx",sourceDirName:"nodes",slug:"/nodes/docker-images",permalink:"/pr-preview/pr-1/fr/nodes/docker-images",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/versioned_docs/version-v0.11.0-rc8-arabica-improvements/nodes/docker-images.mdx",tags:[],version:"v0.11.0-rc8-arabica-improvements",frontMatter:{sidebar_label:"Docker images",description:"Running Celestia Node using Docker."},sidebar:"nodes",previous:{title:"Deciding which node to run",permalink:"/pr-preview/pr-1/fr/nodes/decide-node"},next:{title:"Setting up environment",permalink:"/pr-preview/pr-1/fr/nodes/environment"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Blockspace Race light node setup",id:"blockspace-race-light-node-setup",level:2},{value:"Mocha testnet light node setup",id:"mocha-testnet-light-node-setup",level:2},{value:"Arabica devnet light node setup",id:"arabica-devnet-light-node-setup",level:2},{value:"Blockspace Race bridge node setup",id:"blockspace-race-bridge-node-setup",level:2},{value:"Mocha bridge node setup",id:"mocha-bridge-node-setup",level:2},{value:"Arabica bridge node setup",id:"arabica-bridge-node-setup",level:2},{value:"Blockspace Race full node setup",id:"blockspace-race-full-node-setup",level:2},{value:"Mocha full node setup",id:"mocha-full-node-setup",level:2},{value:"Arabica full node setup",id:"arabica-full-node-setup",level:2},{value:"Light node setup with persistent storage",id:"light-node-setup-with-persistent-storage",level:2},{value:"Initialize the node store and key",id:"initialize-the-node-store-and-key",level:3},{value:"Start the node",id:"start-the-node",level:3},{value:"Video walkthrough",id:"video-walkthrough",level:2},{value:"2.5 minute version",id:"25-minute-version",level:3}],h={toc:m},k="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-docker-setup"},"\ud83d\udc33 Docker setup"),(0,o.kt)("p",null,"This page has instructions to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," using Docker. If you are\nlooking for instructions to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," using a binary, please\nrefer to the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/fr/nodes/celestia-node"},"celestia-node")," page."),(0,o.kt)("p",null,"Using Docker is the easiest way to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," for most\nusers. Docker is a containerization platform that allows you to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\nin an isolated environment."),(0,o.kt)("p",null,"This means that you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," on your machine without having\nto worry about installing and configuring all of the dependencies required\nto run the node."),(0,o.kt)("p",null,"If you would like to learn more about\nkey management in Docker, visit the ",(0,o.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key/#docker-and-cel-key"},"Docker\nand ",(0,o.kt)("inlineCode",{parentName:"a"},"cel-key")," section"),"."),(0,o.kt)("p",null,"The easiest way to install Docker is to use the Docker Desktop installer or\nUbuntu. You can find the instructions for your operating system\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install"},"here"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")," and basic understanding of Docker")),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)(i.Z,{groupID:"node",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,o.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h2",{id:"mocha-testnet-light-node-setup"},"Mocha testnet light node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia light start --core.ip rpc-mocha.pops.one --p2p.network mocha")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Mocha testnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h2",{id:"arabica-devnet-light-node-setup"},"Arabica devnet light node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",l.Z["node-latest-tag"],".slice(0, 7)} celestia light start --core.ip consensus-validator-arabica-9.celestia-arabica.com --p2p.network arabica")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Arabica devnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,o.kt)(s.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,o.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h2",{id:"mocha-bridge-node-setup"},"Mocha bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia bridge start --core.ip rpc-mocha.pops.one --p2p.network mocha")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Mocha network."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h2",{id:"arabica-bridge-node-setup"},"Arabica bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",l.Z["node-latest-tag"],".slice(0, 7)} celestia bridge start --core.ip consensus-validator-arabica-9.celestia-arabica.com --p2p.network arabica")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Arabica network."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,o.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,o.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h2",{id:"mocha-full-node-setup"},"Mocha full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia full start --core.ip rpc-mocha.pops.one --p2p.network mocha")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full storage node running on the Mocha network."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h2",{id:"arabica-full-node-setup"},"Arabica full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",l.Z["node-latest-tag"],".slice(0, 7)} celestia full start --core.ip consensus-validator-arabica-9.celestia-arabica.com --p2p.network arabica")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full storage node running on the Arabica network."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page."))))),(0,o.kt)("h2",{id:"light-node-setup-with-persistent-storage"},"Light node setup with persistent storage"),(0,o.kt)("p",null,"If you delete a container that you started above, all data will be lost.\nTo avoid this, you can mount a volume to the container.\nThis will allow you to persist data even after the container is deleted."),(0,o.kt)("p",null,"First, you will need to create a directory on your host machine.\nThis directory will be used to store the data for the container.\nCreate a directory on your host machine and give it a name.\nFor example, you can name it ",(0,o.kt)("inlineCode",{parentName:"p"},"my-node-store"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nmkdir my-node-store\n")),(0,o.kt)("p",null,"Now, you can mount this directory to the container.\nBefore mounting a volume, you ",(0,o.kt)("em",{parentName:"p"},"may")," need to set permissions for\nthe user on the host machine by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown 10001:10001 $HOME/my-node-store\n")),(0,o.kt)("h3",{id:"initialize-the-node-store-and-key"},"Initialize the node store and key"),(0,o.kt)("p",null,"In order to mount a volume to the container, you need to specify\nthe path to the volume. When you run your container, you can specify\nthe path to the volume using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--volume")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," for short) flag.\nIn this command, we'll create our key and initialize the node store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# --volume == -v [local path]:[container path]\ndocker run [...args] -v $HOME/my-node-store:/home/celestia celestia <node-type> init [...args]\n")),(0,o.kt)("p",null,"An example init command for Mocha testnet will look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=mocha -v $HOME/my-node-store:/home/celestia ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia light init --p2p.network mocha")),(0,o.kt)("h3",{id:"start-the-node"},"Start the node"),(0,o.kt)("p",null,"Run the following command to start the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# --volume == -v [local path]:[container path]\ndocker run [...args] -v $HOME/my-node-store:/home/celestia celestia <node-type> start [...args]\n")),(0,o.kt)("p",null,"A full start command will look similar to below. This is an example using\na light node on Mocha testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=mocha -v $HOME/my-node-store:/home/celestia ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia light start --core.ip rpc-mocha.pops.one --p2p.network mocha")),(0,o.kt)("h2",{id:"video-walkthrough"},"Video walkthrough"),(0,o.kt)("div",{class:"youtube-wrapper"},(0,o.kt)("iframe",{class:"youtube-video",title:"Running a Celestia light node",src:"https://youtube.com/embed/WFubhQc8tGk",allowfullscreen:!0})),(0,o.kt)("h3",{id:"25-minute-version"},"2.5 minute version"),(0,o.kt)("div",{class:"youtube-wrapper"},(0,o.kt)("iframe",{class:"youtube-video",title:"Running a Celestia light node",src:"https://youtube.com/embed/ROZv871Q7RM",allowfullscreen:!0})))}b.isMDXComponent=!0}}]);