"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(i,".").concat(f)]||u[f]||m[f]||l;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const l={},a=void 0,s={unversionedId:"Glific Documentation/Flows/Flow Features/Multiple Contactsprofiles with one phone number",id:"Glific Documentation/Flows/Flow Features/Multiple Contactsprofiles with one phone number",title:"Multiple Contactsprofiles with one phone number",description:"It has been observed in some cases, beneficiaries have one phone number and there is more than one person who needs to have their profile created to access the Chat.",source:"@site/docs/Glific Documentation/3. Flows/3. Flow Features/05. Multiple Contactsprofiles with one phone number.md",sourceDirName:"Glific Documentation/3. Flows/3. Flow Features",slug:"/Glific Documentation/Flows/Flow Features/Multiple Contactsprofiles with one phone number",permalink:"/docs/Glific Documentation/Flows/Flow Features/Multiple Contactsprofiles with one phone number",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/Glific Documentation/3. Flows/3. Flow Features/05. Multiple Contactsprofiles with one phone number.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrate Google sheets in Flows",permalink:"/docs/Glific Documentation/Flows/Flow Features/Integrate Google sheets in Flows"},next:{title:"Flows not working - Troubleshoot checklist",permalink:"/docs/Glific Documentation/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist"}},i={},p=[{value:"Create New Profile",id:"create-new-profile",level:2},{value:"Access Old profile",id:"access-old-profile",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It has been observed in some cases, beneficiaries have one phone number and there is more than one person who needs to have their profile created to access the Chat."),(0,r.kt)("p",null,"In Glific we have introduced a multiple profile feature, which will help more than one person to create their profiles and use the chatbot to access the information with one phone number."),(0,r.kt)("p",null,"Below are the steps on how to implement multiple profile features in your flow."),(0,r.kt)("h2",{id:"create-new-profile"},"Create New Profile"),(0,r.kt)("p",null,"1 . Create a new flow and ask a question, the contact if he/she wants to create a new profile."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/Qu96sdeIs8SUSUhTIMtFiLVW.png",alt:null})),(0,r.kt)("p",null,"2 .  If contact press 1.  As contact to provide their profile attributes like name and role"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/1sbH2Wc3nsaYe5m-m-k4HCd-.png",alt:null})),(0,r.kt)("p",null,"3 .  Once the contact share the details use the node with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"manage profile")," and add the details to the profile."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/_t_6HItT0Txq04uN1PFUJCcX.png",alt:null})),(0,r.kt)("p",null,"4 .  It will return success or failure. If it returns success add the values. in the contact variables."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/y9p_fjhSgO_OV13WotzUYDb8.png",alt:null})),(0,r.kt)("p",null,"Output after executing the flow (",(0,r.kt)("strong",{parentName:"p"},"Create User"),")"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/Uh4tiVJORYHv8h7x2gi4cDl4.png",alt:null})),(0,r.kt)("h2",{id:"access-old-profile"},"Access Old profile"),(0,r.kt)("p",null,"To access the old profile or the profile just create."),(0,r.kt)("p",null,"1 .  Enter option 2  (Switch to the existing user) in the first node created"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/bXlqwdP9OMgvmfLcmFpaqOH2.png",alt:null})),(0,r.kt)("p",null,"2 .  Use ",(0,r.kt)("inlineCode",{parentName:"p"},"@contact.list_profiles")," to show all profiles that exist for this phone number."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/rZxYJ4Ls_o4n7s4zW9Vz8sVg.png",alt:null})),(0,r.kt)("p",null,"3 . Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"manage profile")," node to switch the user profile"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/dufhVXpMFolbcdZxZ-tcWb4w.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/71-f090CZHK0rtccrHq9e3YL.png",alt:null})),(0,r.kt)("p",null,"4 .  ",(0,r.kt)("strong",{parentName:"p"},"On success"),", access the profile contact variables with ",(0,r.kt)("inlineCode",{parentName:"p"},"@contact.fields.name")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On Failure")," ask the contact to choose the option again."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/RmFml9MOCjUHoD2rfnuN_Eqy.png",alt:null})),(0,r.kt)("p",null,"Output after executing the flow (",(0,r.kt)("strong",{parentName:"p"},"Switch User"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User profile 1.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/6GJ9Ifw_xhfREbUiG2rfpY5L.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User profile 2")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/C0Hg96qjQ700NhkjFjC9iKzp.png",alt:null})))}u.isMDXComponent=!0}}]);