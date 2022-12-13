"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5551],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>w});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=c(o),f=r,w=h["".concat(s,".").concat(f)]||h[f]||u[f]||i;return o?n.createElement(w,l(l({ref:t},p),{},{components:o})):n.createElement(w,l({ref:t},p))}));function w(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[h]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1045:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={},l=void 0,a={unversionedId:"Glific Documentation/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",id:"Glific Documentation/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",title:"Flows not working - Troubleshoot checklist",description:"1. Is the flow published? If the desired result not showing while executing the flow. Make sure you have published the flow after modifying it.",source:"@site/docs/Glific Documentation/3. Flows/4. Flow Troubleshooting/01. Flows not working - Troubleshoot checklist.md",sourceDirName:"Glific Documentation/3. Flows/4. Flow Troubleshooting",slug:"/Glific Documentation/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",permalink:"/docs/Glific Documentation/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/Glific Documentation/3. Flows/4. Flow Troubleshooting/01. Flows not working - Troubleshoot checklist.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multiple Contactsprofiles with one phone number",permalink:"/docs/Glific Documentation/Flows/Flow Features/Multiple Contactsprofiles with one phone number"},next:{title:"Setting up GCS in Glific",permalink:"/docs/Glific Documentation/Integrations/Setting up GCS in Glific"}},s={},c=[{value:"Logs to know if any errors are thrown while executing the flow",id:"logs-to-know-if-any-errors-are-thrown-while-executing-the-flow",level:2}],p={toc:c};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Is the flow published?")," If the desired result not showing while executing the flow. Make sure you have published the flow after modifying it."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Check messages in all language"),". If you are getting messages which you are not expecting. Please check if different messages are saved in other languages and check which language preference is user is having which you are using for testing the flow.  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Variable not defined properly.")," If variables are not defined properly the flow will not give expected results. Refer  ",(0,r.kt)("a",{parentName:"li",href:"https://glific.slab.com/public/posts/9qlaxpa3"},"Flow level variable Vs Contact level variable")," for details about how to use variables in flows."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Linked flow is not published."),"  The flow will not execute if any other flow is called from a flow and the other flow is not published. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Web hook errors.")," The flow will not give desired results if there is any error in the web hook call. Refer ",(0,r.kt)("a",{parentName:"li",href:"https://glific.slab.com/public/posts/nllntvgc"},"How to check Webhook Logs in Glific?"),"  to know more about web hook logs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Flow should start with a Send a Message")," - Flow should start with a message, so that it gives related message. Starting a flow with ",(0,r.kt)("inlineCode",{parentName:"li"},"Wait for response")," action type will confuse if the flow has started or not."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Ignore Keyword is checked or not? -")," Check if ",(0,r.kt)("inlineCode",{parentName:"li"},"Ignore Keyword")," is checked for the flow, which is currently executing for the contact. If Ignore Keyword is checked, then it will not allow to start another flow, if contact type any other keyword."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Flow should be active")," - Check if flow is inactive. Click on isActive check box and save to activate the flow.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/S6ZevQL4Vccd2Hvwkq4gcetC.png",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Node"),"  ",(0,r.kt)("strong",{parentName:"li"},"placement"),"- There should be only single first node at the top in flow editor. All other node should be below that. "),(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Correct"),"  ",(0,r.kt)("strong",{parentName:"p"},"placement")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/AJnqxSt2GUC-xcdeW2IAglWd.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Incorrect placement")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/LGKMqvhnuftHA7XiAAXp7Rg_.png",alt:null})),(0,r.kt)("p",null,"10 . ",(0,r.kt)("strong",{parentName:"p"},"Ignore keywords")," - Check if contact is already in a flow, which has  ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore keywords"),"implemented. If contact tries to strat flow with the keyword, in this case, it will not start the flow."),(0,r.kt)("p",null,"11 . ",(0,r.kt)("strong",{parentName:"p"},"OptedOut")," - check if a contact is not opted out. An easy test is to ask the contact to type optin and send it to the BOT (",(0,r.kt)("strong",{parentName:"p"},"Note, Your optin flow should always have optin keyword set to it"),"). See if it starts working."),(0,r.kt)("p",null,"Also, make sure, that the default optin message from the Gupshup portal is disabled."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/z_DMbEghWZGGxyJz-5GQsXxk.png",alt:null})),(0,r.kt)("h2",{id:""}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/gvFadj-hoIBnE8UI-AVVOIX9.png",alt:null})),(0,r.kt)("p",null,"12 . ",(0,r.kt)("strong",{parentName:"p"},"Session Window -")," Check if contacts are in the session window, to start a flow with them, if not make sure the flow is started with HSM (with an expected response). The same is true if the flow is started for a collection."),(0,r.kt)("h2",{id:"logs-to-know-if-any-errors-are-thrown-while-executing-the-flow"},"Logs to know if any errors are thrown while executing the flow"),(0,r.kt)("p",null,"Refer ",(0,r.kt)("a",{parentName:"p",href:"https://glific.slab.com/public/posts/3fwqk0b9"},"Notifications for system errors")))}h.isMDXComponent=!0}}]);