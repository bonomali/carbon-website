"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[45382],{28399:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),a=r(88650),s=r.n(a),i=r(1597),l=r(64905),o=r(68636),u=r(75900),d=r.n(u);var m=e=>{let{title:t,theme:r,tabs:a=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var c=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:a}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:l,branch:o}=r||a,u=`${s}/edit/${o}${l}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=r(56328),h=r(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,a=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),l=t===a,o=new RegExp(`${a}/?(#.*)?$`),u=r.replace(o,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var w=k,y=r(17680),b=r(75387),L=r(50041);var S=e=>{let{date:t}=e;const r=new Date(t);return t?n.createElement(L.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(L.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var g=e=>{let{pageContext:t,children:r,location:a,Title:u}=e;const{frontmatter:d={},relativePagePath:h,titleType:k}=t,{tabs:L,title:g,theme:T,description:C,keywords:f,date:x}=d,{interiorTheme:A}=(0,b.Z)(),{site:{pathPrefix:v}}=(0,i.useStaticQuery)("2456312558"),N=v?a.pathname.replace(v,""):a.pathname,E=L?N.split("/").filter(Boolean).slice(-1)[0]||s()(L[0],{lower:!0}):"",R=T||A;return n.createElement(o.Z,{tabs:L,homepage:!1,theme:R,pageTitle:g,pageDescription:C,pageKeywords:f,titleType:k},n.createElement(m,{title:u?n.createElement(u,null):g,label:"label",tabs:L,theme:R}),L&&n.createElement(w,{title:g,slug:N,tabs:L,currentTab:E}),n.createElement(y.Z,{padded:!0},r,n.createElement(c,{relativePagePath:h}),n.createElement(S,{date:x})),n.createElement(p.Z,{pageContext:t,location:a,slug:N,tabs:L,currentTab:E}),n.createElement(l.Z,null))}},67229:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return o},default:function(){return w}});var n=r(45987),a=(r(67294),r(64983)),s=r(28399),i=r(79359);const l=["components"],o={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=u("AnchorLinks"),m=u("AnchorLink"),c=u("Row"),p=u("Column"),h={_frontmatter:o},k=s.Z;function w(e){let{components:t}=e,r=(0,n.Z)(e,l);return(0,a.kt)(k,Object.assign({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{mdxType:"AnchorLinks"},(0,a.kt)(m,{mdxType:"AnchorLink"},"How it works"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Resources"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Accessibility testing")),(0,a.kt)("h2",null,"How it works"),(0,a.kt)("p",null,"The Carbon overflow menu component is used when there is limited space to\nprovide a pop-up list of actions that are available to the user. The overflow\nmenu button uses ",(0,a.kt)("inlineCode",{parentName:"p"},'tabindex="0"')," to ensure it is in the tab order for keyboard\nonly users."),(0,a.kt)("p",null,"When the button has focus, Space key as well as the Enter key activates the\npop-up menu. WAI-ARIA roles and states are used to ensure the component is\naccessible to people using assistive technologies. The pop-up menu has the ARIA\nrole of ",(0,a.kt)("inlineCode",{parentName:"p"},'role="menu"'),", a label of ",(0,a.kt)("inlineCode",{parentName:"p"},'aria-label="Menu"')," and includes\n",(0,a.kt)("inlineCode",{parentName:"p"},'aria-haspopup="true"')," to let the user know it is a pop-up menu."),(0,a.kt)("p",null,"When the menu button is collapsed the pop-up menu is hidden so the ARIA state is\nset to ",(0,a.kt)("inlineCode",{parentName:"p"},'aria-expanded="false"')," to advise users of assistive technologies that\nthe pop-up menu is not visible. When the pop-up menu is expanded the ARIA state\nchanges to ",(0,a.kt)("inlineCode",{parentName:"p"},'aria-expanded="true"')," and the menu is displayed."),(0,a.kt)("p",null,"Each menu option contains an ARIA role of ",(0,a.kt)("inlineCode",{parentName:"p"},'role="menuitem"')," and unique ARIA\nlabels for each option. When focus is on each option there is a prominent style\nchange to the border to ensure the focus is clearly displayed."),(0,a.kt)("h2",null,"Accessibility considerations"),(0,a.kt)("p",null,"This component has been validated to meet the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1 AA")," and\n",(0,a.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Labels should be clear and concise."),(0,a.kt)("li",{parentName:"ol"},"If a colored button is used in the menu, be sure color is not the only way\nthe information is conveyed."),(0,a.kt)("li",{parentName:"ol"},"If a menu item is disabled it should not be in the tab order.")),(0,a.kt)("h2",null,"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton"},"W3C WAI-ARIA Authoring Practices Dialog Menu Button Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_2"},"1.3.2 Meaningful Sequence"),"\n(WCAG Success Criteria\n",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence"},"1.3.2"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_1_1"},"2.1.1 Keyboard"),"\n(WCAG Success Criteria\n",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"2.1.1"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_3"},"2.4.3 Focus Order"),"\n(WCAG Success Criteria\n",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},"2.4.3"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_6"},"2.4.6 Headings and Labels"),"\n(WCAG Success Criteria\n",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"},"2.4.6"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_7"},"2.4.7 Focus Visible"),"\n(WCAG Success Criteria\n",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"2.4.7"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"},"4.1.2"),")")))),(0,a.kt)("h2",null,"Accessibility testing"),(0,a.kt)("p",null,"Accessibility issues are tracked in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+overflow-menu%22+"},"Carbon Component GitHub repository"),"."),(0,a.kt)("h3",null,"Automated test"),(0,a.kt)(c,{mdxType:"Row"},(0,a.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,a.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,a.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,a.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,a.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,a.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,a.kt)("br",null),"- Chrome version 77.0.3865.90",(0,a.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,a.kt)("br",null),"- Carbon React version 7.7.1"),(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,a.kt)("strong",null,"DAP test:"),(0,a.kt)("br",null),"- No violations")))))),(0,a.kt)("h3",null,"macOS screen reader tests"),(0,a.kt)(c,{mdxType:"Row"},(0,a.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,a.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,a.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,a.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,a.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,a.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,a.kt)("br",null),"- Chrome version 77.0.3865.90",(0,a.kt)("br",null),"- Carbon React version 7.7.1"),(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,a.kt)("strong",null,"VoiceOver(VO) test:"),(0,a.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"Tab to the Overflow Menu. VO announces the menu label and pop-up button."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"The Enter or Space key opens the menu. VO announces the menu item label the number and the total number of options."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"The Up and Down Arrow keys navigate through the list of options and VO announces each menu item label."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"The Escape key closes the menu. (Note: Space and Enter key also close the menu.)")))))))),(0,a.kt)("h3",null,"Windows screen reader tests"),(0,a.kt)(c,{mdxType:"Row"},(0,a.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,a.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,a.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,a.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,a.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,a.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,a.kt)("br",null),"- Firefox version 68",(0,a.kt)("br",null),"- JAWS 18",(0,a.kt)("br",null),"- Carbon React version 7.7.1"),(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,a.kt)("strong",null,"JAWS test:"),(0,a.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"Tab to the Overflow Menu. JAWS announces the menu label and pop-up button, as well as press Space to expand."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"The Space key opens the menu briefly and then it disappears. The Enter key opens the menu and JAWS announces the menu item label"),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"The Up and Down Arrow keys navigate through the list of options and JAWS announces each menu item label."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"The Escape key closes the menu. (Note: Space and Enter key also close the menu.)")))))))),(0,a.kt)("h3",null,"iOS screen reader tests"),(0,a.kt)(c,{mdxType:"Row"},(0,a.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,a.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,a.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,a.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,a.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,a.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,a.kt)("br",null),"- Safari version 13.1.3",(0,a.kt)("br",null),"- Carbon React version 7.7.1"),(0,a.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,a.kt)("strong",null,"VoiceOver test:"),(0,a.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"Swipe right to the Overflow Menu. VO announces the main landmark, menu label, and that the pop-up button is collapsed."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"Double tap to open the menu. VO announces the menu item label."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"Swipe right or left to navigate through the list of options and VO announces each menu item label."),(0,a.kt)(i.ListItem,{mdxType:"ListItem"},"Double tap closes the menu. (Note: Space and Enter key also close the menu.)")))))))))}w.isMDXComponent=!0}}]);