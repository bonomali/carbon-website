"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[59258],{28399:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(67294),s=n(88650),a=n.n(s),c=n(1597),r=n(64905),i=n(81151),l=n(75900),p=n.n(l);var m=e=>{let{title:t,theme:n,tabs:s=[]}=e;return o.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:s}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:r,branch:i}=n||s,l=`${a}/edit/${i}${r}/src/pages${t}`;return a?o.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"cds--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},u=n(56328),g=n(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,s=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=a()(e,{lower:!0,strict:!0}),r=t===s,i=new RegExp(`${s}/?(#.*)?$`),l=n.replace(i,t);return o.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},o.createElement(c.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},o.createElement("nav",{"aria-label":e},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(o.Component);var y=b,h=n(17680),k=n(75387),f=n(50041);var v=e=>{let{date:t}=e;const n=new Date(t);return t?o.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(f.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=e=>{let{pageContext:t,children:n,location:s,Title:l}=e;const{frontmatter:p={},relativePagePath:g,titleType:b}=t,{tabs:f,title:C,theme:E,description:T,keywords:x,date:w}=p,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:S}}=(0,c.useStaticQuery)("2456312558"),N=S?s.pathname.replace(S,""):s.pathname,L=f?N.split("/").filter(Boolean).slice(-1)[0]||a()(f[0],{lower:!0}):"",M=E||P;return o.createElement(i.Z,{tabs:f,homepage:!1,theme:M,pageTitle:C,pageDescription:T,pageKeywords:x,titleType:b},o.createElement(m,{title:l?o.createElement(l,null):C,label:"label",tabs:f,theme:M}),f&&o.createElement(y,{title:C,slug:N,tabs:f,currentTab:L}),o.createElement(h.Z,{padded:!0},n,o.createElement(d,{relativePagePath:g}),o.createElement(v,{date:w})),o.createElement(u.Z,{pageContext:t,location:s,slug:N,tabs:f,currentTab:L}),o.createElement(r.Z,null))}},45959:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return f}});var o=n(45987),s=(n(67294),n(64983)),a=n(28399),c=n(41652);const r=["components"],i={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},p=l("PageDescription"),m=l("Row"),d=l("Column"),u=l("ResourceCard"),g=l("MdxIcon"),b=l("ComponentDemo"),y=l("ComponentVariant"),h={_frontmatter:i},k=a.Z;function f(e){let{components:t}=e,n=(0,o.Z)(e,r);return(0,s.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(p,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Preview the code snippet component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,s.kt)("h2",null,"Documentation"),(0,s.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,s.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--inline",mdxType:"ResourceCard"},(0,s.kt)(g,{name:"react",mdxType:"MdxIcon"}))),(0,s.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",mdxType:"ResourceCard"},(0,s.kt)(g,{name:"angular",mdxType:"MdxIcon"}))),(0,s.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default",mdxType:"ResourceCard"},(0,s.kt)(g,{name:"vue",mdxType:"MdxIcon"}))),(0,s.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--single-line",mdxType:"ResourceCard"},(0,s.kt)(g,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,s.kt)("h2",null,"Live demo"),(0,s.kt)(b,{scope:{codeSnippet:c.o,codeSnippetSingle:c.L},components:[{id:"code-snippet-single",label:"Single line"},{id:"code-snippet-multi",label:"Multi line"},{id:"code-snippet-inline",label:"Inline"}],mdxType:"ComponentDemo"},(0,s.kt)(y,{id:"code-snippet-single",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--singleline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--single-line"},mdxType:"ComponentVariant"},`\n    <CodeSnippet type="single">\n    ${c.L}\n    </CodeSnippet>\n`),(0,s.kt)(y,{id:"code-snippet-multi",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--multiline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--multi-line"},mdxType:"ComponentVariant"},`\n      <CodeSnippet type="multi">\n      {\`${c.o}\`}\n      </CodeSnippet>\n  `),(0,s.kt)(y,{id:"code-snippet-inline",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--inline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--inline"},mdxType:"ComponentVariant"},`\n    <CodeSnippet type="inline">${c.L}</CodeSnippet>\n`)),(0,s.kt)("h2",null,"Sample data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const codeSnippet = `"scripts": {\n  "build": "lerna run build --stream --prefix --npm-client yarn",\n  "ci-check": "carbon-cli ci-check",\n  "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",\n  "doctoc": "doctoc --title \'## Table of Contents\'",\n  "format": "prettier --write \'**/*.{js,md,scss,ts}\' \'!**/{build,es,lib,storybook,ts,umd}/**\'",\n  "format:diff": "prettier --list-different \'**/*.{js,md,scss,ts}\' \'!**/{build,es,lib,storybook,ts,umd}/**\' \'!packages/components/**\'",\n  "lint": "eslint actions config codemods packages",\n  "lint:styles": "stylelint \'**/*.{css,scss}\' --report-needless-disables --report-invalid-scope-disables",\n  "sync": "carbon-cli sync",\n  "test": "cross-env BABEL_ENV=test jest",\n  "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns=\'examples,/packages/components/,/packages/react/\'"\n},\n"resolutions": {\n  "react": "~16.9.0",\n  "react-dom": "~16.9.0",\n  "react-is": "~16.9.0",\n  "react-test-renderer": "~16.9.0"\n}`;\n\nconst codeSnippetSingle = `node -v`;\n')))}f.isMDXComponent=!0}}]);