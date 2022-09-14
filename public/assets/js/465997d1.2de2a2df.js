"use strict";(self.webpackChunkgds_bootcamp=self.webpackChunkgds_bootcamp||[]).push([[2066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="3.5 Clean Up",l={unversionedId:"ci-cd/CleanUp",id:"ci-cd/CleanUp",title:"3.5 Clean Up",description:"Introduction",source:"@site/docs/ci-cd/35-CleanUp.md",sourceDirName:"ci-cd",slug:"/ci-cd/CleanUp",permalink:"/docs/ci-cd/CleanUp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ci-cd/35-CleanUp.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.4 CI/CD Pipeline Enhancements",permalink:"/docs/ci-cd/CICD-Enhancements"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Removing Everything from the Cloud",id:"removing-everything-from-the-cloud",level:2},{value:"Removing Your Resources",id:"removing-your-resources",level:3},{value:"Background",id:"background",level:4},{value:"Instructions",id:"instructions",level:4},{value:"Definition of Done",id:"definition-of-done",level:4},{value:"Removing Access",id:"removing-access",level:3},{value:"Background",id:"background-1",level:4},{value:"Instructions",id:"instructions-1",level:4},{value:"Optional - Deleting AWS Account",id:"optional---deleting-aws-account",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"35-clean-up"},"3.5 Clean Up"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WARNING: Remember to clean up all AWS resources to ensure that you do not get a surprise charge 12 months from today.\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"removing-everything-from-the-cloud"},"Removing Everything from the Cloud"),(0,r.kt)("h3",{id:"removing-your-resources"},"Removing Your Resources"),(0,r.kt)("h4",{id:"background"},"Background"),(0,r.kt)("p",null,"One of the reasons we deploy our resources using Infrastructure-as-Code (IaC) is because of the ease of representing all resources that are deployed."),(0,r.kt)("p",null,"If the resource exists in code, it exists in the cloud. Similarly, if the resource ceases to exist within the code, it would cease to exist in the cloud as well (which is exactly what we want at this moment)."),(0,r.kt)("h4",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Comment out all the resources in ",(0,r.kt)("strong",{parentName:"li"},"gds-backend.tf, gds-frontend.tf and gds-networking.tf"),"."),(0,r.kt)("li",{parentName:"ol"},"Push to git, and verify that the resources in AWS are all deleted."),(0,r.kt)("li",{parentName:"ol"},"Sign in to the AWS Console: ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com"},"https://console.aws.amazon.com")),(0,r.kt)("li",{parentName:"ol"},"Delete the following resources:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"All S3 Buckets: ",(0,r.kt)("inlineCode",{parentName:"li"},"gdsbucket-tf-xxxxxxxxxxxx")),(0,r.kt)("li",{parentName:"ol"},"All DynamoDB Tables: ",(0,r.kt)("inlineCode",{parentName:"li"},"gdstable-tf-xxxxxxxxxxxx")))),(0,r.kt)("li",{parentName:"ol"},"All done!")),(0,r.kt)("h4",{id:"definition-of-done"},"Definition of Done"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All resources in AWS are deleted")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removing-access"},"Removing Access"),(0,r.kt)("h4",{id:"background-1"},"Background"),(0,r.kt)("p",null,"In 20-DevOps, you created access keys in order to manage your AWS resources from the GitHub Actions pipeline. Since you are no longer using those keys (now that we're at the end of this exercise), it is best practice to have the keys deleted."),(0,r.kt)("h4",{id:"instructions-1"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign in to the AWS Console: ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com"},"https://console.aws.amazon.com")),(0,r.kt)("li",{parentName:"ol"},'Click on your account name in the navigation bar, and then choose "My Security Credentials"'),(0,r.kt)("li",{parentName:"ol"},'Expand the "Access keys" section'),(0,r.kt)("li",{parentName:"ol"},"Delete the Access Key"),(0,r.kt)("li",{parentName:"ol"},"All done!")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"optional---deleting-aws-account"},"Optional - Deleting AWS Account"),(0,r.kt)("p",null,"If you no longer want to keep your AWS Account for whatever reasons (e.g. fear of unauthorised usage charges appearing on your credit card), you may choose to delete your AWS Account by following the instructions here: ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/close-aws-account/"},"https://aws.amazon.com/premiumsupport/knowledge-center/close-aws-account/")),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);