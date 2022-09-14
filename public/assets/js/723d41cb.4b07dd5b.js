"use strict";(self.webpackChunkgds_bootcamp=self.webpackChunkgds_bootcamp||[]).push([[1881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="3.0 DevOps Setup",c={unversionedId:"ci-cd/DevOps-Setup",id:"ci-cd/DevOps-Setup",title:"3.0 DevOps Setup",description:"In this segment, we will deploy the applications that were created in the frontend and backend workshops into the cloud (AWS).",source:"@site/docs/ci-cd/30-DevOps-Setup.md",sourceDirName:"ci-cd",slug:"/ci-cd/DevOps-Setup",permalink:"/docs/ci-cd/DevOps-Setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ci-cd/30-DevOps-Setup.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. Continuous Integration & Continuous Deployment",permalink:"/docs/category/3-continuous-integration--continuous-deployment"},next:{title:"3.1 Docker Images",permalink:"/docs/ci-cd/Docker-Images"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Setting Up Your AWS Account",id:"setting-up-your-aws-account",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:3},{value:"Instructions",id:"instructions",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"30-devops-setup"},"3.0 DevOps Setup"),(0,o.kt)("p",null,"In this segment, we will deploy the applications that were created in the frontend and backend workshops into the cloud (AWS)."),(0,o.kt)("p",null,"The following tools will be used and covered in this segment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terraform"),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions (CI Pipeline)"),(0,o.kt)("li",{parentName:"ul"},"TFSec")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this exercise, we will be setting up an Amazon Web Services (AWS) Account. The setup of your own AWS account is an absolute requirement for the workshop component of the DevOps segment."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setting-up-your-aws-account"},"Setting Up Your AWS Account"),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An email that has never been used to create an AWS account (you may want to create a new email account)"),(0,o.kt)("li",{parentName:"ol"},"A personal credit card")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARNING: Resources deployed on the cloud do cost money, you are\nresponsible for any cost associated to these resources.\n\nAll resources deployed in this workshop is free. While we recommend\nsome creativity here and there, don't stray too far off course or you\nmight enter the paid zone.\n\nIt is your responsibility to protect your account.\n")),(0,o.kt)("h3",{id:"instructions"},"Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create your AWS account here: ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/free/"},"https://aws.amazon.com/free/"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Setup as a Personal account"),(0,o.kt)("li",{parentName:"ol"},"Use the Basic Support plan"))),(0,o.kt)("li",{parentName:"ol"},"Sign in as root user: ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com"},"https://console.aws.amazon.com")),(0,o.kt)("li",{parentName:"ol"},"Setup MFA for root user",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"IAM > Add MFA"))),(0,o.kt)("li",{parentName:"ol"},"All done!")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Approach a peer or a workshop instructor for help if you have trouble with this exercise"),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);