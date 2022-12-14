"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8665],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:e},c),{},{components:n})):a.createElement(f,l({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[d]="string"==typeof t?t:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6792:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},l=void 0,r={unversionedId:"Glific Documentation/Reporting and Analytics/Populate data in Field Views report.",id:"Glific Documentation/Reporting and Analytics/Populate data in Field Views report.",title:"Populate data in Field Views report.",description:"Flat fields table contains contact specific data based on the data points an Organisation has defined in their system.",source:"@site/docs/Glific Documentation/5. Reporting and Analytics/04. Populate data in Field Views report..md",sourceDirName:"Glific Documentation/5. Reporting and Analytics",slug:"/Glific Documentation/Reporting and Analytics/Populate data in Field Views report.",permalink:"/docs/docs/Glific Documentation/Reporting and Analytics/Populate data in Field Views report.",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/Glific Documentation/5. Reporting and Analytics/04. Populate data in Field Views report..md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Making custom reports on DataStudio",permalink:"/docs/docs/Glific Documentation/Reporting and Analytics/Making custom reports on DataStudio"},next:{title:"Understanding Data Studio Reports",permalink:"/docs/docs/Glific Documentation/Reporting and Analytics/Understanding Data Studio Reports"}},s={},p=[{value:"How to verify if you have enough contact fields information available.",id:"how-to-verify-if-you-have-enough-contact-fields-information-available",level:2},{value:"Steps to configure your Field Views (User info) report.",id:"steps-to-configure-your-field-views-user-info-report",level:2},{value:"Plot the data in the charts.",id:"plot-the-data-in-the-charts",level:2}],c={toc:p};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flat fields table contains contact specific data based on the data points an Organisation has defined in their system."),(0,o.kt)("p",null,"Organisation needs to have enough contact fields information available to visualise this report."),(0,o.kt)("h2",{id:"how-to-verify-if-you-have-enough-contact-fields-information-available"},"How to verify if you have enough contact fields information available."),(0,o.kt)("p",null,"1 .  Go to Big query and execute the below queries to check if there is enough data  in contacts and messages tables."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note - beginner-290513.917777711114  needs to be changed with your product ID"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SELECT * \xa0FROM ",(0,o.kt)("inlineCode",{parentName:"em"},"beginner-290513.917777711114.contacts"),"LIMIT 1000")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SELECT * FROM ",(0,o.kt)("inlineCode",{parentName:"em"},"beginner-290513.917777711114.messages")," LIMIT 1000")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/3x-VLbt2oPUNFpCcEFpv5rfN.png",alt:null})),(0,o.kt)("p",null,"2 . Get the data in your reports for Contacts and Messages tables. Follow the steps from 1 to 6 in ",(0,o.kt)("a",{parentName:"p",href:"https://glific.slab.com/public/posts/vzlvtpuw"},"Integrate DataStudio to create visualisations ","&"," reports")," to get the data for Contacts and Messages tables."),(0,o.kt)("h2",{id:"steps-to-configure-your-field-views-user-info-report"},"Steps to configure your Field Views (User info) report."),(0,o.kt)("p",null,"1 .  Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Field View (User Info)")," report from the dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/z5JuCQvNGYfiJKLZLFBO2tHs.png",alt:null})),(0,o.kt)("p",null,"2 . You may see error in the report chart section."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/_DSZadv4FyZMSROKSaVMKzlv.png",alt:null})),(0,o.kt)("p",null,"3 . Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Resources >> Manage added data source")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/5Ez9K1WQSD_lcN2aHM5BvSCD.png",alt:null})),(0,o.kt)("p",null,"4 . Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Flat fields")," section."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/i4btazKzgPUCcUrpkKh3ZeQr.png",alt:null})),(0,o.kt)("p",null,"5 . Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit connections")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/dNvWoTKMVgo78eTtgOspeU-z.png",alt:null})),(0,o.kt)("p",null,"6 .  Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"My Projects"),". Click your ",(0,o.kt)("inlineCode",{parentName:"p"},"project")," . Click on your ",(0,o.kt)("inlineCode",{parentName:"p"},"data set"),". Then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"flat_fields")," table."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/38bTcoxLc7sZtJWrLYVLo-7Y.png",alt:null})),(0,o.kt)("p",null,"7 .  It will open up Big Query. select ",(0,o.kt)("inlineCode",{parentName:"p"},"flat_field")," table from the list of tables."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/f3SaCwgfDzSa_mlqgsK_duac.png",alt:null})),(0,o.kt)("p",null,"8 . Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoke store procedure")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/AtGT616WSCLxiJy-KRts-aE0.png",alt:null})),(0,o.kt)("p",null,"9 .  Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," button"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/lFdFAsYAM889iuwdtXRNzfLm.png",alt:null})),(0,o.kt)("p",null,"10 . Click on Reconnect"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/w87g9Anazqr0JXpGIxF1xxN9.png",alt:null})),(0,o.kt)("p",null,"11 . Click on Done"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/NoNrbnKqUWg0j0oQR7_Spz1y.png",alt:null})),(0,o.kt)("p",null,"12 .  Now data will be updated in Flat_fields."),(0,o.kt)("h2",{id:"plot-the-data-in-the-charts"},"Plot the data in the charts."),(0,o.kt)("p",null,"1 .  Click on the chat where you want to plot the data from Flat fields."),(0,o.kt)("p",null,"2 .  Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," link in right pane."),(0,o.kt)("p",null,"3 .  Notice under ",(0,o.kt)("inlineCode",{parentName:"p"},"Dimension")," section it says Invalid dimension"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/cPr-oYU_BdnYtJSdzGSHU0Rs.png",alt:null})),(0,o.kt)("p",null,"4 . Drag the data field from the Available fields section to the dimension section."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/3GXJanjDTBTIHCM0ugVjU_MP.png",alt:null})),(0,o.kt)("p",null,"5 .  And you will be able to see the data in the charts."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/SqI-9_-d7ERupmKVEK2A9tK9.png",alt:null})))}d.isMDXComponent=!0}}]);