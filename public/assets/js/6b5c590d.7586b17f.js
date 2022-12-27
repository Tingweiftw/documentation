"use strict";(self.webpackChunkgds_bootcamp=self.webpackChunkgds_bootcamp||[]).push([[3035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="4.2 ECS Cluster",c={unversionedId:"infrastructure/ECS-Cluster",id:"infrastructure/ECS-Cluster",title:"4.2 ECS Cluster",description:"An Amazon ECS cluster is a logical grouping of tasks or services. Your tasks and services are run on infrastructure that is registered to a cluster. The infrastructure capacity can be provided by AWS Fargate, which is serverless infrastructure that AWS manages, Amazon EC2 instances that you manage, or an on-premise server or virtual machine (VM) that you manage remotely.",source:"@site/docs/infrastructure/42-ECS-Cluster.md",sourceDirName:"infrastructure",slug:"/infrastructure/ECS-Cluster",permalink:"/docs/infrastructure/ECS-Cluster",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/infrastructure/42-ECS-Cluster.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.1 VPC and Subnets",permalink:"/docs/infrastructure/VPC-Subnets"},next:{title:"4.3 ECS Task Definitions",permalink:"/docs/infrastructure/ECS-Task"}},l={},u=[{value:"ECS Fargate Vs ECS EC2",id:"ecs-fargate-vs-ecs-ec2",level:3},{value:"EC2:",id:"ec2",level:4},{value:"Fargate:",id:"fargate",level:4},{value:"Load Balancer and Target Groups",id:"load-balancer-and-target-groups",level:3},{value:"Instructions",id:"instructions",level:4}],s={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"42-ecs-cluster"},"4.2 ECS Cluster"),(0,a.kt)("p",null,"An Amazon ECS cluster is a logical grouping of tasks or services. Your tasks and services are run on infrastructure that is registered to a cluster. The infrastructure capacity can be provided by AWS Fargate, which is serverless infrastructure that AWS manages, Amazon EC2 instances that you manage, or an on-premise server or virtual machine (VM) that you manage remotely."),(0,a.kt)("h3",{id:"ecs-fargate-vs-ecs-ec2"},"ECS Fargate Vs ECS EC2"),(0,a.kt)("h4",{id:"ec2"},"EC2:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deploy and manage your own cluster of EC2 instances for running the containers"),(0,a.kt)("li",{parentName:"ul"},"Bill by underlying EC2 instance lauch type")),(0,a.kt)("h4",{id:"fargate"},"Fargate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run containers directly, without any EC2 instances"),(0,a.kt)("li",{parentName:"ul"},"Bill by CPU cores, and gigabytes of memory your task requires")),(0,a.kt)("h3",{id:"load-balancer-and-target-groups"},"Load Balancer and Target Groups"),(0,a.kt)("p",null,"Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets and virtual appliances in one or more Availability Zones (AZs)."),(0,a.kt)("p",null,"Each target group is used to route requests to one or more registered targets. When you create each listener rule, you specify a target group and conditions. When a rule condition is met, traffic is forwarded to the corresponding target group"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"Now we will take a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"ecs-cluster.yml")," to understand the creation of our ECS Clusters, Load Balancers and Target Groups."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AWSTemplateFormatVersion: '2010-09-09'\nDescription: container cluster on ECS and loadbalancer\n\nResources:\n\n  ECSCluster:\n    Type: AWS::ECS::Cluster\n    Properties:\n      ClusterName: 'bootcamp-demo-application'\n  \n  # A security group for the containers we will run in Fargate.\n  # allowing network traffic from a public facing loadbalancer, \n  FargateContainerSecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: Access to fargate containers\n      VpcId: !ImportValue 'VPC'\n  \n  EcsSecurityGroupIngressFromPublicALB:\n    Type: AWS::EC2::SecurityGroupIngress\n    Properties:\n      Description: Ingress from public ALB\n      GroupId: !Ref 'FargateContainerSecurityGroup'\n      SourceSecurityGroupId: !Ref 'PublicLoadBalancerSecurityGroup'\n      IpProtocol: -1\n\n  # A public facing load balancer, this is used for accepting traffic from the public\n  # internet and directing it to public facing microservices\n  PublicLoadBalancerSecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: Security group for loadbalancer to services on ECS\n      VpcId: !ImportValue 'VPC'\n      SecurityGroupIngress:\n        # Allow access to ALB from anywhere on the internet\n        - CidrIp: 0.0.0.0/0\n          IpProtocol: -1\n  \n  PublicLoadBalancer:\n    Type: AWS::ElasticLoadBalancingV2::LoadBalancer\n    Properties:\n      Name: 'public-ecs-services'\n      Scheme: internet-facing\n      Subnets:\n        # The load balancer is placed into the public subnets, so that traffic\n        # from the internet can reach the load balancer directly via the internet gateway\n        - !ImportValue 'PublicSubnet1'\n        - !ImportValue 'PublicSubnet2'\n      SecurityGroups:\n        - !Ref 'PublicLoadBalancerSecurityGroup'\n  \n  # A target group tells a load balancer where to drop traffic to\n  # Healthcheck is set to run check on the frontend endpoint\n  # It will attempt to re-register the ecs service if unhealthy \n  PublicTargetGroupFrontend:\n    Type: AWS::ElasticLoadBalancingV2::TargetGroup\n    Properties:\n      Name: frontend-tg\n      VpcId: !ImportValue VPC\n      # This will create a frontend target group to direct user to the frontend application\n      Port: 3000\n      Protocol: HTTP\n      Matcher:\n        HttpCode: 200-399\n      HealthCheckIntervalSeconds: 60\n      HealthCheckPath: /\n      HealthCheckProtocol: HTTP\n      HealthCheckTimeoutSeconds: 10\n      HealthyThresholdCount: 10\n      TargetType: ip\n  \n  # A target group tells a load balancer where to drop traffic to\n  # Healthcheck is set to run check on the backend endpoint\n  # It will attempt to re-register the ecs service if unhealthy\n  PublicTargetGroupBackend:\n    Type: AWS::ElasticLoadBalancingV2::TargetGroup\n    Properties:\n      Name: backend-tg\n      VpcId: !ImportValue VPC\n      # This will create a backend target group to direct user to the backend application\n      Port: 9000\n      Protocol: HTTP\n      Matcher:\n        HttpCode: 200-399\n      HealthCheckIntervalSeconds: 60\n      HealthCheckPath: /api/todos\n      HealthCheckProtocol: HTTP\n      HealthCheckTimeoutSeconds: 10\n      HealthyThresholdCount: 10\n      TargetType: ip\n  \n  # The Load Balancer will automatically distribute incoming application traffic across \n  # multiple targets and virtual appliances in one or more Availability Zones (AZs).\n  PublicLoadBalancerListener:\n    Type: AWS::ElasticLoadBalancingV2::Listener\n    DependsOn:\n      - PublicLoadBalancer\n    Properties:\n      LoadBalancerArn: !Ref 'PublicLoadBalancer'\n      Protocol: HTTP\n      Port: 80\n      DefaultActions:\n        - Type: forward\n          TargetGroupArn: !Ref 'PublicTargetGroupFrontend'\n\nOutputs:\n  \n  Cluster:\n    Value: !Ref ECSCluster\n    Export:\n      Name: 'ECSCluster'\n\n  PublicLoadBalancerListener:\n    Description: listener port 80\n    Value: !Ref PublicLoadBalancerListener\n    Export:\n      Name: 'PublicLoadBalancerListener'\n\n  FargateContainerSecurityGroup:\n    Description: A security group used to allow Fargate containers to receive traffic\n    Value: !Ref FargateContainerSecurityGroup\n    Export:\n      Name: 'FargateContainerSecurityGroup'\n\n  PublicLoadBalancerDNS:\n    Description: Domain name for the public loadbalancer\n    Value: !GetAtt PublicLoadBalancer.DNSName\n    Export:\n      Name: 'PublicDomainName'\n\n  PublicTargetGroupFrontend:\n    Description: Target group pointing to frontend service\n    Value: !Ref PublicTargetGroupFrontend\n    Export:\n      Name: 'PublicTargetGroupFrontend'\n\n  PublicTargetGroupBackend:\n    Description: Target group pointing to backend service\n    Value: !Ref PublicTargetGroupBackend\n    Export:\n      Name: 'PublicTargetGroupBackend'\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Proceed to upload this template to Cloudformation to provision our ECS Cluster layer and setup the loadbalancer traffic distribution. The following is a high level diagram to illustrate what you have just built."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ecs-cluster",src:r(1698).Z,width:"967",height:"785"})))}p.isMDXComponent=!0},1698:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ecs-cluster-lb-722e066dc1f3315e0d1e5fc2ab18b72c.png"}}]);