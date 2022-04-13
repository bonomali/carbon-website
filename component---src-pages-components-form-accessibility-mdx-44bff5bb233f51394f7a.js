"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[78754],{28399:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(67294),n=r(88650),i=r.n(n),s=r(1597),l=r(64905),o=r(68636),c=r(75900),m=r.n(c);var u=e=>{let{title:t,theme:r,tabs:n=[]}=e;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:o}=r||n,c=`${i}/edit/${o}${l}/src/pages${t}`;return i?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=r(56328),h=r(51721);let w=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,n=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(`${n}/?(#.*)?$`),c=r.replace(o,t);return a.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var k=w,b=r(17680),f=r(75387),g=r(50041);var N=e=>{let{date:t}=e;const r=new Date(t);return t?a.createElement(g.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(g.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:r,location:n,Title:c}=e;const{frontmatter:m={},relativePagePath:h,titleType:w}=t,{tabs:g,title:y,theme:A,description:C,keywords:v,date:E}=m,{interiorTheme:T}=(0,f.Z)(),{site:{pathPrefix:S}}=(0,s.useStaticQuery)("2456312558"),L=S?n.pathname.replace(S,""):n.pathname,x=g?L.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"",R=A||T;return a.createElement(o.Z,{tabs:g,homepage:!1,theme:R,pageTitle:y,pageDescription:C,pageKeywords:v,titleType:w},a.createElement(u,{title:c?a.createElement(c,null):y,label:"label",tabs:g,theme:R}),g&&a.createElement(k,{title:y,slug:L,tabs:g,currentTab:x}),a.createElement(b.Z,{padded:!0},r,a.createElement(d,{relativePagePath:h}),a.createElement(N,{date:E})),a.createElement(p.Z,{pageContext:t,location:n,slug:L,tabs:g,currentTab:x}),a.createElement(l.Z,null))}},21156:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return o},default:function(){return k}});var a=r(45987),n=(r(67294),r(64983)),i=r(28399),s=r(79359);const l=["components"],o={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=c("AnchorLinks"),u=c("AnchorLink"),d=c("Row"),p=c("Column"),h={_frontmatter:o},w=i.Z;function k(e){let{components:t}=e,r=(0,a.Z)(e,l);return(0,n.kt)(w,Object.assign({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(m,{mdxType:"AnchorLinks"},(0,n.kt)(u,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"The form React Carbon component can contain any number of React Carbon\ncomponents that are used to obtain input data from a user. Validation messages\nshould be included to advise the user of data that is input incorrectly or a\nrequired field that is missing information. Helper text should also be used to\nprovide instructions to help users understand how to complete the form fields as\nwell as indicate any required and optional input, data formats, and other\nrelevant information. See the individual form components for additional\ninformation."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("p",null,"This component has been validated to meet the\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,n.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Provide labels and instructions that are clear and concise."),(0,n.kt)("li",{parentName:"ol"},"Carbon Components should be used to create the form fields."),(0,n.kt)("li",{parentName:"ol"},"Provide ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/forms/instructions/"},"instructions"),"\nfor completing the field. For example, passwords must contain at least eight\nletters and/or numbers."),(0,n.kt)("li",{parentName:"ol"},"If the number input is a required field include the\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"},"aria-required property")," and\nindicate that it is a required field."),(0,n.kt)("li",{parentName:"ol"},"Although the form component passes accessibility testing, content authors\nneed to ensure all content that is added to the form is accessible.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/forms/labels/"},"W3C Web Tutorial: Labeling Controls"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/forms/instructions/"},"W3C Web Tutorial: Form Instructions"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_1"},"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"},"3.3.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_2"},"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"},"3.3.2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_3"},"3.3.3 Error Suggestion"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"},"3.3.3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"},"4.1.2"),")")))),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Accessibility issues are tracked in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+form%22+"},"Carbon Component GitHub repository"),".\nFor screen reader test results refer to the Accessibility guidance for each\nCarbon Component form control used."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(d,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(s.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.2 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test:"),(0,n.kt)("br",null),"- No violations")))))))}k.isMDXComponent=!0}}]);