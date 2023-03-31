"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[19079],{28399:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(67294),o=n(88650),s=n.n(o),r=n(1597),l=n(64905),i=n(68636),c=n(75900),d=n.n(c);var m=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:l,branch:i}=n||o,c=`${s}/edit/${i}${l}/src/pages${t}`;return s?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=n(56328),h=n(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),l=t===o,i=new RegExp(`${o}/?(#.*)?$`),c=n.replace(i,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var g=b,x=n(17680),y=n(75387),v=n(50041);var T=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(v.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:d={},relativePagePath:h,titleType:b}=t,{tabs:v,title:k,theme:f,description:w,keywords:E,date:C}=d,{interiorTheme:P}=(0,y.Z)(),{site:{pathPrefix:N}}=(0,r.useStaticQuery)("2456312558"),R=N?o.pathname.replace(N,""):o.pathname,D=v?R.split("/").filter(Boolean).slice(-1)[0]||s()(v[0],{lower:!0}):"",L=f||P;return a.createElement(i.Z,{tabs:v,homepage:!1,theme:L,pageTitle:k,pageDescription:w,pageKeywords:E,titleType:b},a.createElement(m,{title:c?a.createElement(c,null):k,label:"label",tabs:v,theme:L}),v&&a.createElement(g,{title:k,slug:R,tabs:v,currentTab:D}),a.createElement(x.Z,{padded:!0},n,a.createElement(p,{relativePagePath:h}),a.createElement(T,{date:C})),a.createElement(u.Z,{pageContext:t,location:o,slug:R,tabs:v,currentTab:D}),a.createElement(l.Z,null))}},10927:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return y}});var a=n(45987),o=(n(67294),n(64983)),s=n(28399);const r=["components"],l={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=i("PageDescription"),d=i("Row"),m=i("Column"),p=i("ResourceCard"),u=i("MdxIcon"),h=i("ComponentDemo"),b=i("ComponentVariant"),g={_frontmatter:l},x=s.Z;function y(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,o.kt)(x,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the text input component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-textinput--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-input--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextinput--default",mdxType:"ResourceCard"},(0,o.kt)(u,{name:"vue",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(h,{components:[{id:"text-input",label:"Text input"},{id:"password-input",label:"Password input"},{id:"text-area",label:"Text area"}],mdxType:"ComponentDemo"},(0,o.kt)(b,{id:"text-input",knobs:{TextInput:["disabled","invalid","light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-textinput--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-input--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextinput--default"},mdxType:"ComponentVariant"},'\n    <div>\n      <TextInput\n        helperText="Optional helper text"\n        id="test2"\n        invalidText="A valid value is required"\n        labelText="Text input label"\n        placeholder="Placeholder text"\n      />\n    </div>\n  '),(0,o.kt)(b,{id:"password-input",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-textinput--toggle-password-visibility","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-input--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextinput--default"},mdxType:"ComponentVariant"},'\n    <div>\n    <TextInput.PasswordInput\n      helperText="Optional helper text"\n      hidePasswordLabel="Hide password"\n      id="test2"\n      invalidText="A valid value is required"\n      labelText="Text input label"\n      placeholder="Placeholder text"\n      showPasswordLabel="Show password"\n    />\n    </div>\n  '),(0,o.kt)(b,{id:"text-area",knobs:{TextArea:["disabled","invalid","light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-textarea--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-textarea--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--textarea",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextarea--default"},mdxType:"ComponentVariant"},'\n    <div>\n    <TextArea\n      cols={50}\n      helperText="Optional helper text"\n      id="test2"\n      invalidText="A valid value is required"\n      labelText="Text area label"\n      placeholder="Placeholder text"\n      rows={4}\n    />\n    </div>\n')))}y.isMDXComponent=!0}}]);