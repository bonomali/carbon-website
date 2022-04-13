"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[57180],{28399:function(e,t,r){r.d(t,{Z:function(){return x}});var i=r(67294),n=r(88650),s=r.n(n),l=r(1597),a=r(64905),d=r(68636),o=r(75900),u=r.n(o);var c=e=>{let{title:t,theme:r,tabs:n=[]}=e;return i.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:n}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:a,branch:d}=r||n,o=`${s}/edit/${d}${a}/src/pages${t}`;return s?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:o},"Edit this page on GitHub"))):null},k=r(56328),p=r(51721);let L=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,n=r.split("/").filter(Boolean).slice(-1)[0],a=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),a=t===n,d=new RegExp(`${n}/?(#.*)?$`),o=r.replace(d,t);return i.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":a},"PageTabs-module--list-item--024o6")},i.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${o}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},a))))))},t}(i.Component);var h=L,y=r(17680),S=r(75387),b=r(50041);var T=e=>{let{date:t}=e;const r=new Date(t);return t?i.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(b.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:r,location:n,Title:o}=e;const{frontmatter:u={},relativePagePath:p,titleType:L}=t,{tabs:b,title:x,theme:g,description:v,keywords:w,date:C}=u,{interiorTheme:A}=(0,S.Z)(),{site:{pathPrefix:f}}=(0,l.useStaticQuery)("2456312558"),R=f?n.pathname.replace(f,""):n.pathname,N=b?R.split("/").filter(Boolean).slice(-1)[0]||s()(b[0],{lower:!0}):"",I=g||A;return i.createElement(d.Z,{tabs:b,homepage:!1,theme:I,pageTitle:x,pageDescription:v,pageKeywords:w,titleType:L},i.createElement(c,{title:o?i.createElement(o,null):x,label:"label",tabs:b,theme:I}),b&&i.createElement(h,{title:x,slug:R,tabs:b,currentTab:N}),i.createElement(y.Z,{padded:!0},r,i.createElement(m,{relativePagePath:p}),i.createElement(T,{date:C})),i.createElement(k.Z,{pageContext:t,location:n,slug:R,tabs:b,currentTab:N}),i.createElement(a.Z,null))}},11277:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return d},default:function(){return h}});var i=r(45987),n=(r(67294),r(64983)),s=r(28399),l=r(79359);const a=["components"],d={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=o("AnchorLinks"),c=o("AnchorLink"),m=o("Row"),k=o("Column"),p={_frontmatter:d},L=s.Z;function h(e){let{components:t}=e,r=(0,i.Z)(e,a);return(0,n.kt)(L,Object.assign({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{mdxType:"AnchorLinks"},(0,n.kt)(c,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"The link Carbon component is primarily a native HTML hyperlink navigational\nelement. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," key activates the link and causes the user agent to move\nfocus to the link destination. When you use the disabled link component the ARIA\nstate is set to ",(0,n.kt)("inlineCode",{parentName:"p"},'aria-disabled="true"'),", which changes the appearance and the\n",(0,n.kt)("inlineCode",{parentName:"p"},'tabindex="-1"')," which removes the link for the tab order. When the link becomes\nactive the ARIA state changes to ",(0,n.kt)("inlineCode",{parentName:"p"},'aria-disabled="false"')," and the link is present\nin the tab order."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("p",null,"This component has been validated to meet the\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,n.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Link text is the visible label for the native HTML link and is used to\nprovide the purpose of the link which is clear and easy to understand for all\nusers."),(0,n.kt)("li",{parentName:"ol"},"The alt attribute for the img element is used to describe the purpose of a\ngraphical link with an image inside the link."),(0,n.kt)("li",{parentName:"ol"},"The title attribute can be used to supplement the link text with any\nadditional useful description.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("h4",null,"Helpful resources for creating customized accessible implementations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#link"},"W3C WAI-ARIA Authoring Practices Link Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_4"},"IBM Accessibility Checklist - Checkpoint 2.4.4 Link Purpose (In Context)"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html"},"2.4.4"),")")),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Accessibility issues are tracked in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+link%22+"},"Carbon Component GitHub repository")),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(k,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test"),(0,n.kt)("br",null),"- No violations")))))),(0,n.kt)("h3",null,"macOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(k,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Tab to the link. VO announces, that you are on a link, and the link text."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Press Control-Option-Space (or Enter) to navigate to the link destination."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Note: Disabled link is not in the tab order as expected.")))),(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.0.2",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Press Control-Option-Right Arrow to read all content."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Press Control-Option-Space to navigate to the link destination."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Note: The link is not in the tab order and the Enter key does not navigate to the link destination.")))))))),(0,n.kt)("h3",null,"Windows screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(k,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Firefox version 67",(0,n.kt)("br",null),"- JAWS 19.1810.64",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link using the Tab key or Shift-Tab keys and JAWS announces, "Link example link".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link using the Arrow keys. JAWS announces, "Link link example".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'It is not possible to Tab to the disabled link, but using the Arrow keys JAWS announces, "Unavailable disabled link".')))),(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",(0,n.kt)("br",null),"- JAWS version 19.1810.64",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link using the Tab key or Shift-Tab keys and JAWS announces, "Link example link".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link using the Arrow keys. JAWS announces, "Link link example".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'It is not possible to Tab to the disabled link, but using the Arrow keys JAWS announces, "Unavailable disabled link".')))),(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",(0,n.kt)("br",null),"- NVDA version 2018.4.1",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"NVDA test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link using the Tab key or Shift-Tab keys and NVDA announces, "Link example link".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link using the Arrow keys. NVDA announces, "Link link example".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'It is not possible to Tab to the disabled link, but using the Arrow keys JAWS announces, "Unavailable disabled link".')))))))),(0,n.kt)("h3",null,"Android screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(k,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Android version 9 with Talkback",(0,n.kt)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"Talkback test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link by swiping left or right, or press the Alt-Leftor Alt-Right keys and Talkback announces, "Link example link".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to the disabled link. Talkback announces, "Disabled link link disabled".')))))))),(0,n.kt)("h3",null,"iOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(k,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.1.3",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to an active link by swiping left or right, or press the Left-Arrow or Right-Arrow keys and VO announces, "Link example link".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Navigate to the disabled link. VO announces, "Disabled link dimmed link".')))))))))}h.isMDXComponent=!0}}]);