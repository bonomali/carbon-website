"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[88541],{28399:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),r=a(88650),i=a.n(r),o=a(1597),s=a(64905),l=a(68636),d=a(75900),c=a.n(d);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:s,branch:l}=a||r,d=`${i}/edit/${l}${s}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},g=a(56328),p=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),s=t===r,l=new RegExp(`${r}/?(#.*)?$`),d=a.replace(l,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=h,k=a(17680),v=a(75387),f=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:r,Title:d}=e;const{frontmatter:c={},relativePagePath:p,titleType:h}=t,{tabs:f,title:y,theme:E,description:T,keywords:x,date:N}=c,{interiorTheme:C}=(0,v.Z)(),{site:{pathPrefix:P}}=(0,o.useStaticQuery)("2456312558"),D=P?r.pathname.replace(P,""):r.pathname,L=f?D.split("/").filter(Boolean).slice(-1)[0]||i()(f[0],{lower:!0}):"",I=E||C;return n.createElement(l.Z,{tabs:f,homepage:!1,theme:I,pageTitle:y,pageDescription:T,pageKeywords:x,titleType:h},n.createElement(m,{title:d?n.createElement(d,null):y,label:"label",tabs:f,theme:I}),f&&n.createElement(b,{title:y,slug:D,tabs:f,currentTab:L}),n.createElement(k.Z,{padded:!0},a,n.createElement(u,{relativePagePath:p}),n.createElement(w,{date:N})),n.createElement(g.Z,{pageContext:t,location:r,slug:D,tabs:f,currentTab:L}),n.createElement(s.Z,null))}},12247:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var n=a(45987),r=(a(67294),a(64983)),i=a(28399);a(79359);const o=["components"],s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=l("PageDescription"),c=l("AnchorLinks"),m=l("AnchorLink"),u=l("Video"),g={_frontmatter:s},p=i.Z;function h(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,r.kt)(p,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{mdxType:"PageDescription"},(0,r.kt)("p",null,"The Carbon design tutorials will get you set up to start designing with Carbon\nand teach you about some of the foundational pieces of the design system.")),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(m,{mdxType:"AnchorLink"},"Introduction to Carbon"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Designing with Carbon"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Using the 2x Grid")),(0,r.kt)("h2",null,"Introduction to Carbon"),(0,r.kt)("p",null,"Learn about Carbon and its history. This video covers how the IBM Design\nLanguage is applied to Carbon, how Carbon interacts with domain level guidance,\nand what it means to be an open source design system."),(0,r.kt)(u,{title:"Introduction to Carbon",vimeoId:"457802924",mdxType:"Video"}),(0,r.kt)("p",null,"For further learning, check out\n",(0,r.kt)("a",{parentName:"p",href:"/all-about-carbon/what-is-carbon"},"All about Carbon"),",\n",(0,r.kt)("a",{parentName:"p",href:"/designing/get-started"},"Get started"),", and the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/"},"IBM Design Language"),"."),(0,r.kt)("h2",null,"Designing with Carbon"),(0,r.kt)("p",null,"This video covers how to design with components and type styles, and where to\nfind relevant guidance and resources while designing. It also goes through the\nsteps of getting set up with the Carbon Sketch kits and grid template."),(0,r.kt)(u,{title:"Designing with Carbon",vimeoId:"457803206",mdxType:"Video"}),(0,r.kt)("p",null,"To learn more about our Sketch kits, head over to\n",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/sketch"},"Design kits"),"."),(0,r.kt)("h2",null,"Using the 2x Grid"),(0,r.kt)("p",null,"Learn about the fundamentals of using our 2x Grid. This video gives an overview\nof basic grid terminology, breakpoints, the three grid modes, and some resources\nto get started designing with the 2x Grid."),(0,r.kt)(u,{title:"Using the 2x grid",vimeoId:"457802917",mdxType:"Video"}),(0,r.kt)("p",null,"You can find detailed grid guidance on the\n",(0,r.kt)("a",{parentName:"p",href:"/guidelines/2x-grid/overview"},"2x Grid")," page."))}h.isMDXComponent=!0}}]);