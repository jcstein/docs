"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86213:(e,t,a)=>{a.d(t,{Z:()=>n});const n=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.20.2",golangNodeArabica:"1.20.2",golangApp:"1.20.2",golangCore:"1.20.2",golang:"1.20.2",arabicaChainId:"arabica-10",bsrChainId:"blockspacerace-0",mochaChainId:"mocha-3",arabicaRollkitVersion:"v0.10.2",mochaRollkitVersion:"v0.10.2",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(72957),i=a(16550),s=a(75238),u=a(33609),p=a(92560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var k=a(51048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:c},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},72709:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=e=>{let{children:t,constant:a}=e;return n.createElement("span",{style:{display:"inline"}},t,a)}},79078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var n=a(87462),r=(a(67294),a(3905)),o=a(86213),l=a(72709),i=a(73992),s=a(18679);const u={sidebar_label:"Validator node",description:"A tutorial for setting up a Celestia validator node."},p="Setting up a Celestia validator node",d={unversionedId:"nodes/validator-node",id:"nodes/validator-node",title:"Setting up a Celestia validator node",description:"A tutorial for setting up a Celestia validator node.",source:"@site/docs/nodes/validator-node.mdx",sourceDirName:"nodes",slug:"/nodes/validator-node",permalink:"/pr-preview/pr-1/fr/next/nodes/validator-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/validator-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Validator node",description:"A tutorial for setting up a Celestia validator node."},sidebar:"nodes",previous:{title:"Validators",permalink:"/pr-preview/pr-1/fr/next/category/validators"},next:{title:"QGB",permalink:"/pr-preview/pr-1/fr/next/category/qgb"}},c={},h=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your validator node",id:"setting-up-your-validator-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install celestia-app",id:"install-celestia-app",level:3},{value:"Setup the P2P networks",id:"setup-the-p2p-networks",level:3},{value:"Configure pruning",id:"configure-pruning",level:3},{value:"Syncing",id:"syncing",level:3},{value:"State sync",id:"state-sync",level:4},{value:"Quick sync",id:"quick-sync",level:4},{value:"Start the celestia-app",id:"start-the-celestia-app",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Delegate stake to a validator",id:"delegate-stake-to-a-validator",level:3},{value:"Optional: Deploy the Celestia Node",id:"optional-deploy-the-celestia-node",level:2},{value:"Install Celestia Node",id:"install-celestia-node",level:3},{value:"Initialize the bridge node",id:"initialize-the-bridge-node",level:3},{value:"Run the bridge node",id:"run-the-bridge-node",level:3},{value:"Optional: start the bridge node with SystemD",id:"optional-start-the-bridge-node-with-systemd",level:3},{value:"Setup QGB keys",id:"setup-qgb-keys",level:3},{value:"Run a validator node",id:"run-a-validator-node",level:2},{value:"Register your validator&#39;s EVM address",id:"register-your-validators-evm-address",level:2},{value:"Run the QGB Orchestrator",id:"run-the-qgb-orchestrator",level:2}],m={toc:h},g="wrapper";function k(e){let{components:t,...u}=e;return(0,r.kt)(g,(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-validator-node"},"Setting up a Celestia validator node"),(0,r.kt)("p",null,"Validator nodes allow you to participate in consensus in the Celestia network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"validator node",src:a(63388).Z,width:"3000",height:"4098"})),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nvalidator node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: ",(0,r.kt)("strong",{parentName:"li"},"8 GB RAM")),(0,r.kt)("li",{parentName:"ul"},"CPU: ",(0,r.kt)("strong",{parentName:"li"},"6 cores")),(0,r.kt)("li",{parentName:"ul"},"Disk: ",(0,r.kt)("strong",{parentName:"li"},"500 GB SSD Storage")),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: ",(0,r.kt)("strong",{parentName:"li"},"1 Gbps for Download/1 Gbps for Upload"))),(0,r.kt)("h2",{id:"setting-up-your-validator-node"},"Setting up your validator node"),(0,r.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/fr/next/nodes/environment"},"here"),"."),(0,r.kt)("h3",{id:"install-celestia-app"},"Install celestia-app"),(0,r.kt)("p",null,"Follow the tutorial on installing ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app")," ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/fr/next/nodes/celestia-app"},"here"),"."),(0,r.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P networks"),(0,r.kt)("p",null,"Now we will setup the P2P Networks by cloning the networks repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,r.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The ',(0,r.kt)("inlineCode",{parentName:"p"},"--chain-id")," parameter we are using here is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{constant:o.Z.mochaChainId,mdxType:"InlineText"})),". Keep in\nmind that this might change if a new testnet is deployed."),(0,r.kt)("pre",null,(0,r.kt)("code",null,'celestia-appd init "node-name" --chain-id ',o.Z.mochaChainId)),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For mocha we are using:"),(0,r.kt)("pre",null,(0,r.kt)("code",null,"cp $HOME/networks/",o.Z.mochaChainId,"/genesis.json $HOME/.celestia-app/config")),(0,r.kt)("p",null,"Set seeds and peers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SEEDS="some seeds"\nPEERS="some peers"\nsed -i -e \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.celestia-app/config/config.toml\nsed -i -e "s/^seed_mode *=.*/seed_mode = \\"$SEED_MODE\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,r.kt)("p",null,"Note: You can find more peers ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mocha/peers.txt"},"here"),"."),(0,r.kt)("h3",{id:"configure-pruning"},"Configure pruning"),(0,r.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,r.kt)("h3",{id:"syncing"},"Syncing"),(0,r.kt)("p",null,"By default, a consensus node will sync using block sync; that is request, validate\nand execute every block up to the head of the blockchain. This is the most secure\nmechanism yet the slowest (taking up to days depending on the height of the blockchain)."),(0,r.kt)("p",null,"There are two alternatives for quicker syncing."),(0,r.kt)("h4",{id:"state-sync"},"State sync"),(0,r.kt)("p",null,"State sync uses light client verification to verify state snapshots from peers\nand then apply them. State sync relies on weak subjectivity; a trusted header\n(specifically the hash and height) must be provided. This can be found by querying\na trusted RPC endpoint (/block). RPC endpoints are also required for retrieving\nlight blocks. These can be found in the docs here under the respective networks or\nfrom the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry"},"chain-registry"),"."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/config.toml"),", set"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'rpc_servers = ""\ntrust_height = 0\ntrust_hash = ""\n')),(0,r.kt)("p",null,"to their respective fields. At least two different rpc endpoints should be provided.\nThe more, the greater the chance of detecting any fraudulent behavior."),(0,r.kt)("p",null,"Once setup, you should be ready to start the node as normal. In the logs, you should\nsee: ",(0,r.kt)("inlineCode",{parentName:"p"},"Discovering snapshots"),". This may take a few minutes before snapshots are found\ndepending on the network topology."),(0,r.kt)("h4",{id:"quick-sync"},"Quick sync"),(0,r.kt)("p",null,"Quick sync effectively downloads the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," directory from a third-party provider\nmeaning the node has all the application and blockchain state as the node it was\ncopied from."),(0,r.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME",(0,r.kt)("br",null),"rm -rf ~/.celestia-app/data",(0,r.kt)("br",null),"mkdir -p ~/.celestia-app/data",(0,r.kt)("br",null),"SNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\",(0,r.kt)("br",null),'egrep -o ">',o.Z.mochaChainId,'.*tar" | tr -d ">")',(0,r.kt)("br",null),"wget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\",(0,r.kt)("br",null),"-C ~/.celestia-app/data/",(0,r.kt)("br",null)))),(0,r.kt)(s.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,r.kt)("inlineCode",{parentName:"p"},"blockspacerace"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">blockspacerace.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')))),(0,r.kt)("h3",{id:"start-the-celestia-app"},"Start the celestia-app"),(0,r.kt)("p",null,"In order to start your validator node, run the following:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports"),"\nsection for information on which ports are\nrequired to be open on your machine.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd start\n")),(0,r.kt)("p",null,"Follow the tutorial on setting up ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app")," as a background process\nwith SystemD ",(0,r.kt)("a",{parentName:"p",href:"../systemd"},"here"),"."),(0,r.kt)("h3",{id:"wallet"},"Wallet"),(0,r.kt)("p",null,"Follow the tutorial on creating a wallet ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/fr/next/developers/celestia-app-wallet"},"here"),"."),(0,r.kt)("h3",{id:"delegate-stake-to-a-validator"},"Delegate stake to a validator"),(0,r.kt)("p",null,"Create an environment variable for the address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"VALIDATOR_WALLET=<validator-wallet-name>\n")),(0,r.kt)("p",null,"If you want to delegate more stake to any validator, including your own you\nwill need the ",(0,r.kt)("inlineCode",{parentName:"p"},"celesvaloper")," address of the validator in question. You can\neither check it using the block explorer mentioned above or you can run the\ncommand below to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"celesvaloper")," of your local validator wallet in\ncase you want to delegate more to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd keys show $VALIDATOR_WALLET --bech val -a\n")),(0,r.kt)("p",null,"After entering the wallet passphrase you should see a similar output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Enter keyring passphrase:\ncelesvaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u43cv6hd\n")),(0,r.kt)("p",null,"To delegate tokens to the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," validator, as an\nexample you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd tx staking delegate \\\n    celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p 1000000utia \\\n    --from=$VALIDATOR_WALLET --chain-id=mocha\n")),(0,r.kt)("p",null,"If successful, you should see a similar output as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,r.kt)("p",null,"You can check if the TX hash went through using the block explorer by\ninputting the ",(0,r.kt)("inlineCode",{parentName:"p"},"txhash")," ID that was returned."),(0,r.kt)("h2",{id:"optional-deploy-the-celestia-node"},"Optional: Deploy the Celestia Node"),(0,r.kt)("p",null,"Running a bridge node is critical to the Celestia network as it enables\nthe data availability and consensus nodes to communicate with one\nanother. It is recommended to support the data availability network,\nbut is not required for ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app"),"."),(0,r.kt)("p",null,"If you are not running a bridge node, you can skip to\n",(0,r.kt)("a",{parentName:"p",href:"#run-a-validator-node"},"Run a validator node"),"."),(0,r.kt)("p",null,"This section describes part 2 of Celestia validator node setup: running a\nCelestia bridge node daemon."),(0,r.kt)("h3",{id:"install-celestia-node"},"Install Celestia Node"),(0,r.kt)("p",null,"You can follow the tutorial for installing ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/fr/next/nodes/celestia-node"},"here")),(0,r.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the bridge node"),(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia bridge init --core.ip <ip-address>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports"),"\nsection for information on which ports are\nrequired to be open on your machine.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"../mocha-testnet#rpc-endpoints"},"here")),(0,r.kt)("h3",{id:"run-the-bridge-node"},"Run the bridge node"),(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia bridge start\n")),(0,r.kt)("h3",{id:"optional-start-the-bridge-node-with-systemd"},"Optional: start the bridge node with SystemD"),(0,r.kt)("p",null,"Follow the tutorial on setting up the bridge node as a background process with\nSystemD ",(0,r.kt)("a",{parentName:"p",href:"../systemd"},"here"),"."),(0,r.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."),(0,r.kt)("h3",{id:"setup-qgb-keys"},"Setup QGB keys"),(0,r.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"v1.0.0-rc12+",label:"v1.0.0-rc12+",mdxType:"TabItem"},(0,r.kt)("p",null,"This step helps get you prepared for when the Quantum Gravity Bridge\nis enabled."),(0,r.kt)("p",null,"First, prepare an EVM address with a private key that you have\naccess to. We will use it to register your validator's EVM address\n",(0,r.kt)("a",{parentName:"p",href:"#register-your-validators-evm-address"},"later")," in this page.")),(0,r.kt)(s.Z,{value:"previous",label:"Previous versions",mdxType:"TabItem"},"This step helps get you prepared for when the Quantum Gravity Bridge is enabled. You would still need to go through this step before running a validator to configure an extra key.",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--evm-address"),": This flag should contain a ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")," EVM address. Here,\nyou can add any Ethereum-based address to this flag. You can also modify\nit later if you decide to switch addresses.")),(0,r.kt)("p",null,"You can set this value to the above flag as an\nenvironment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"EVM_ADDRESS=<EVM_ADDRESS>\n")),(0,r.kt)("p",null,"Remember to add the value for your address in the above\nenvironment variable before setting it."))),(0,r.kt)("h2",{id:"run-a-validator-node"},"Run a validator node"),(0,r.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"v1.0.0-rc12+",label:"v1.0.0-rc12+",mdxType:"TabItem"},(0,r.kt)("p",null,"After completing all the necessary steps, you are now ready to run a validator!\nIn order to create your validator on-chain, follow the instructions below.\nKeep in mind that these steps are necessary ONLY if you want to participate\nin the consensus."),(0,r.kt)("p",null,"Pick a ",(0,r.kt)("inlineCode",{parentName:"p"},"moniker")," name of your choice! This is the validator name that will show\nup on public dashboards and explorers. ",(0,r.kt)("inlineCode",{parentName:"p"},"VALIDATOR_WALLET")," must be the same you\ndefined previously. Parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--min-self-delegation=1000000")," defines the\namount of tokens that are self delegated from your validator wallet."),(0,r.kt)("p",null,"Now, connect to the network of your choice."),(0,r.kt)("p",null,"You have the following option of connecting to list of networks shown below:"),(0,r.kt)("p",null,"Continuing the validator tutorial, here are the steps to connect your\nvalidator to Mocha:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'MONIKER="your_moniker"\nVALIDATOR_WALLET="validator"\n\ncelestia-appd tx staking create-validator \\\n    --amount=1000000utia \\\n    --pubkey=$(celestia-appd tendermint show-validator) \\\n    --moniker=$MONIKER \\\n    --chain-id=mocha \\\n    --commission-rate=0.1 \\\n    --commission-max-rate=0.2 \\\n    --commission-max-change-rate=0.01 \\\n    --min-self-delegation=1000000 \\\n    --from=$VALIDATOR_WALLET \\\n    --keyring-backend=test\n')),(0,r.kt)("p",null,"You will be prompted to confirm the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"confirm transaction before signing and broadcasting [y/N]: y\n")),(0,r.kt)("p",null,"Inputting ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," should provide an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,r.kt)("h2",{id:"register-your-validators-evm-address"},"Register your validator's EVM address"),(0,r.kt)("p",null,"This section will cover how to register your validator's EVM address.\nThis is required to run an orchestrator."),(0,r.kt)("p",null,"To register your EVM address, run the following. Be sure to replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_EVM_ADDRESS")," with your EVM address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'VALIDATOR_ADDRESS=$(celestia-appd keys show $VALIDATOR_WALLET --home "${HOME_DIR}" --bech val -a)\nEVM_ADDRESS="YOUR_EVM_ADDRESS"\n\ncelestia-appd tx qgb register \\\n    "${VALIDATOR_ADDRESS}" \\\n    "${EVM_ADDRESS}" \\\n    --from $VALIDATOR_WALLET \\\n    --home "${HOME_DIR}" \\\n    --fees 30000utia \\\n    -b block \\\n    -y &\n'))),(0,r.kt)(s.Z,{value:"previous",label:"Previous versions",mdxType:"TabItem"},(0,r.kt)("p",null,"After completing all the necessary steps, you are now ready to run a validator!\nIn order to create your validator on-chain, follow the instructions below.\nKeep in mind that these steps are necessary ONLY if you want to participate\nin the consensus."),(0,r.kt)("p",null,"Pick a ",(0,r.kt)("inlineCode",{parentName:"p"},"moniker")," name of your choice! This is the validator name that will show\nup on public dashboards and explorers. ",(0,r.kt)("inlineCode",{parentName:"p"},"VALIDATOR_WALLET")," must be the same you\ndefined previously. Parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--min-self-delegation=1000000")," defines the\namount of tokens that are self delegated from your validator wallet."),(0,r.kt)("p",null,"Now, connect to the network of your choice."),(0,r.kt)("p",null,"You have the following option of connecting to list of networks shown below:"),(0,r.kt)("p",null,"Continuing the validator tutorial, here are the steps to connect your\nvalidator to Mocha:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'MONIKER="your_moniker"\nVALIDATOR_WALLET="validator"\n\ncelestia-appd tx staking create-validator \\\n    --amount=1000000utia \\\n    --pubkey=$(celestia-appd tendermint show-validator) \\\n    --moniker=$MONIKER \\\n    --chain-id=mocha \\\n    --commission-rate=0.1 \\\n    --commission-max-rate=0.2 \\\n    --commission-max-change-rate=0.01 \\\n    --min-self-delegation=1000000 \\\n    --from=$VALIDATOR_WALLET \\\n    --evm-address=$EVM_ADDRESS \\\n    --keyring-backend=test\n')),(0,r.kt)("p",null,"You will be prompted to confirm the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"confirm transaction before signing and broadcasting [y/N]: y\n")),(0,r.kt)("p",null,"Inputting ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," should provide an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')))),(0,r.kt)("p",null,"You should now be able to see your validator from a block explorer like ",(0,r.kt)("a",{parentName:"p",href:"https://celestia.explorers.guru"},"here")),(0,r.kt)("h2",{id:"run-the-qgb-orchestrator"},"Run the QGB Orchestrator"),(0,r.kt)("p",null,"Now that the QGB will be enabled for Blockspace Race (BSR), all validators\nwill need to run the QGB orchestrator to be able to sign attestations.\nTo run it, please check the docs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/qgb-orchestrator/#how-to-run"},"here"),"."))}k.isMDXComponent=!0},63388:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/validator-edee331bf4603da249a91b8ebbf4266b.png"}}]);