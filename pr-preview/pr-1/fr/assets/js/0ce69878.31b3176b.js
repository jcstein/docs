"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86213:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.20.2",golangNodeArabica:"1.20.2",golangApp:"1.20.2",golangCore:"1.20.2",golang:"1.20.2",arabicaChainId:"arabica-10",bsrChainId:"blockspacerace-0",mochaChainId:"mocha-3",arabicaRollkitVersion:"v0.10.2",mochaRollkitVersion:"v0.10.2",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},41942:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({"app-latest-tag":"v1.0.0-rc10","app-latest-sha":"96b86ba8c0a11b1b854da1c256c5d737dbaeede3","core-latest-tag":"v1.24.0-tm-v0.34.28","core-latest-sha":"d24c81afe0ecc4ccfbb7eb543a45a11794f04db4","node-latest-tag":"v0.11.0-rc8","node-latest-sha":"e41f62662cf1844ba52d7a93d03cf79b6e363897"})},43638:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=e=>{let{mochaVersions:t,constants:a}=e;return n.createElement("ul",null,n.createElement("li",null,"Celestia Chain ID - ",n.createElement("a",{href:`https://github.com/celestiaorg/networks/tree/master/${a.mochaChainId}`,target:"_blank",rel:"noopener noreferrer"},a.mochaChainId)),n.createElement("li",null,"Celestia Node - ",n.createElement("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${t["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["node-latest-tag"])),n.createElement("li",null,"Celestia App - ",n.createElement("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${t["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["app-latest-tag"])),n.createElement("li",null,"Rollkit - ",n.createElement("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${a.mochaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},a.mochaRollkitVersion)))}},4883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(43638),l=a(41942),i=a(86213);const s={sidebar_label:"Mocha testnet",description:"Learn how to connect to the Mocha network."},p="Mocha testnet",c={unversionedId:"nodes/mocha-testnet",id:"nodes/mocha-testnet",title:"Mocha testnet",description:"Learn how to connect to the Mocha network.",source:"@site/docs/nodes/mocha-testnet.mdx",sourceDirName:"nodes",slug:"/nodes/mocha-testnet",permalink:"/pr-preview/pr-1/fr/next/nodes/mocha-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/mocha-testnet.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Mocha testnet",description:"Learn how to connect to the Mocha network."},sidebar:"nodes",previous:{title:"Arabica devnet",permalink:"/pr-preview/pr-1/fr/next/nodes/arabica-devnet"},next:{title:"Quick start",permalink:"/pr-preview/pr-1/fr/next/nodes/quick-start"}},h={},m=[{value:"Software version numbers",id:"software-version-numbers",level:2},{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"API endpoints",id:"api-endpoints",level:2},{value:"gRPC endpoints",id:"grpc-endpoints",level:2},{value:"Mocha testnet faucet",id:"mocha-testnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2},{value:"Network upgrades",id:"network-upgrades",level:2}],u={toc:m},d="wrapper";function k(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mocha-testnet"},"Mocha testnet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mocha-testnet",src:a(66014).Z,width:"3000",height:"1500"})),(0,r.kt)("p",null,"This guide contains the relevant sections for how to connect to Mocha,\ndepending on the type of node you are running. Mocha testnet is designed\nto help validators test out their infrastructure and node software.\nDevelopers are encouraged to deploy their\nsovereign rollups on Mocha, but we also recommend ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/fr/next/nodes/arabica-devnet"},"Arabica devnet"),"\nfor that as it is designed for development purposes."),(0,r.kt)("p",null,"Mocha is a milestone in Celestia, allowing everyone to test out\ncore functionalities on the network. Read the announcement ",(0,r.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api"},"here"),".\nYour best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,r.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Mocha:"),(0,r.kt)("p",null,"Consensus:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/fr/next/nodes/validator-node"},"Validator node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/fr/next/nodes/full-consensus-node"},"Full consensus node"))),(0,r.kt)("p",null,"Data Availability:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/fr/next/nodes/bridge-node"},"Bridge node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/fr/next/nodes/full-storage-node"},"Full storage node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/fr/next/nodes/light-node"},"Light node"))),(0,r.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Mocha")," in order to refer\nto the correct instructions on this page on how to connect to Mocha."),(0,r.kt)("h2",{id:"software-version-numbers"},"Software version numbers"),(0,r.kt)(o.Z,{mochaVersions:l.Z,constants:i.Z,mdxType:"MochaVersionTags"}),(0,r.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,r.kt)("p",null,"The RPC endpoint is to allow users to interact with Celestia's nodes by\nquerying the node's state and broadcasting transactions on the\nCelestia network. The default port is 26657."),(0,r.kt)("p",null,"Below is a list of RPC endpoints you can use to connect to Mocha testnet:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We advise that if you are running a bridge node, that you also\nrun a local ",(0,r.kt)("a",{parentName:"p",href:"../full-consensus-node"},"full consensus node")," in order to download full blocks from\nit. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc-mocha.pops.one")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc.mocha.celestia.counterpoint.software")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"celestia-testnet-rpc.itrocket.net")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"celestia-testnet.rpc.kjnodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc-t.celestia.nodestake.top")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"celestia.cumulo.org.es")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"celestia-testnet-rpc.polkachu.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc.mocha-3.celestia.aviaone.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc-celestia-mocha3.architectnodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"celestia-rpc.f5nodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc-celestia-testnet.mms.team")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"celestia-testnet.nodejumper.io"))),(0,r.kt)("h2",{id:"api-endpoints"},"API endpoints"),(0,r.kt)("p",null,"The API endpoint is to allow users to interact with the REST API in Cosmos\nSDK which is implemented using gRPC-gateway, which exposes gRPC endpoints\nas REST endpoints. This allows for communication with the node using REST\ncalls, which can be useful if the client does not support gRPC or HTTP2.\nThe default port is 1317."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api-mocha.pops.one"},"https://api-mocha.pops.one")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.mocha.celestia.counterpoint.software"},"https://api.mocha.celestia.counterpoint.software")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-testnet-api.itrocket.net:443"},"https://celestia-testnet-api.itrocket.net")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-testnet.api.kjnodes.com"},"https://celestia-testnet.api.kjnodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api-t.celestia.nodestake.top"},"https://api-t.celestia.nodestake.top")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia.api.cumulo.org.es"},"https://celestia.api.cumulo.org.es")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-testnet-api.polkachu.com"},"https://celestia-testnet-api.polkachu.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.mocha-3.celestia.aviaone.com"},"https://api.mocha-3.celestia.aviaone.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rest-celestia-mocha3.architectnodes.com"},"https://rest-celestia-mocha3.architectnodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-api.f5nodes.com"},"https://celestia-api.f5nodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api-celestia-testnet.mms.team"},"https://api-celestia-testnet.mms.team")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-testnet.nodejumper.io:1317"},"https://celestia-testnet.nodejumper.io:1317"))),(0,r.kt)("h2",{id:"grpc-endpoints"},"gRPC endpoints"),(0,r.kt)("p",null,"The gRPC endpoint is to allow users to interact with a Celestia Node using\ngRPC, a modern open-source and high-performance RPC framework. The default\nport is 9090. In the Cosmos SDK, gRPC is used to define state queries and\nbroadcast transactions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc-mocha.pops.one"},"https://grpc-mocha.pops.one")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc.mocha.celestia.counterpoint.software"},"https://grpc.mocha.celestia.counterpoint.software")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-testnet-grpc.itrocket.net:11090"},"https://celestia-testnet-grpc.itrocket.net:11090")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-testnet.grpc.kjnodes.com"},"https://celestia-testnet.grpc.kjnodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc-t.celestia.nodestake.top"},"https://grpc-t.celestia.nodestake.top")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gprc.mocha-3.celestia.aviaone.com/"},"https://gprc.mocha-3.celestia.aviaone.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc-celestia-mocha3.architectnodes.com:1443"},"https://grpc-celestia-mocha3.architectnodes.com:1443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia.grpc.cumulo.org.es"},"https://celestia.grpc.cumulo.org.es")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-grpc.f5nodes.com"},"https://celestia-grpc.f5nodes.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc-celestia-testnet.mms.team"},"https://grpc-celestia-testnet.mms.team:12090")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia-testnet.nodejumper.io:9090"},"https://celestia-testnet.nodejumper.io:9090"))),(0,r.kt)("h2",{id:"mocha-testnet-faucet"},"Mocha testnet faucet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,r.kt)("p",null,"You can request from Mocha Testnet Faucet on the #mocha-faucet channel on\nCelestia's Discord server with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,r.kt)("h2",{id:"explorers"},"Explorers"),(0,r.kt)("p",null,"There are several explorers you can use for Mocha:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet.mintscan.io/celestia-testnet"},"https://testnet.mintscan.io/celestia-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia.explorers.guru"},"https://celestia.explorers.guru/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestiascan.vercel.app"},"https://celestiascan.vercel.app/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.nodestake.top/celestia-testnet"},"https://explorer.nodestake.top/celestia-testnet/"))),(0,r.kt)("h2",{id:"network-upgrades"},"Network upgrades"),(0,r.kt)("p",null,"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/+smSFIA7XXLU4MjJh"},"Telegram announcement channel"),"\nfor network upgrades."))}k.isMDXComponent=!0},66014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mocha-57e8627f3a1ad8d70c559a19553f439d.jpg"}}]);