"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[48326],{28399:function(t,e,a){a.d(e,{Z:function(){return x}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(80304),p=a(94656),m=a(75900),s=a.n(m);var g=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var o=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:p}=a||l,m=`${r}/edit/${p}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),c=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,c.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,p=new RegExp(`${l}/?(#.*)?$`),m=a.replace(p,e);return n.createElement("li",{key:t,className:s()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var N=k,b=a(17680),A=a(75387),f=a(50041);var y=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=t=>{let{pageContext:e,children:a,location:l,Title:m}=t;const{frontmatter:s={},relativePagePath:c,titleType:k}=e,{tabs:f,title:x,theme:h,description:w,keywords:E,date:v}=s,{interiorTheme:S}=(0,A.Z)(),{site:{pathPrefix:T}}=(0,i.useStaticQuery)("2456312558"),C=T?l.pathname.replace(T,""):l.pathname,z=f?C.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",P=h||S;return n.createElement(p.Z,{tabs:f,homepage:!1,theme:P,pageTitle:x,pageDescription:w,pageKeywords:E,titleType:k},n.createElement(g,{title:m?n.createElement(m,null):x,label:"label",tabs:f,theme:P}),f&&n.createElement(N,{title:x,slug:C,tabs:f,currentTab:z}),n.createElement(b.Z,{padded:!0},a,n.createElement(o,{relativePagePath:c}),n.createElement(y,{date:v})),n.createElement(u.Z,{pageContext:e,location:l,slug:C,tabs:f,currentTab:z}),n.createElement(d.Z,null))}},59591:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return N}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},p=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},m=p("Caption"),s=p("Row"),g=p("Column"),o=p("Tabs"),u=p("Tab"),c={_frontmatter:d},k=r.Z;function N(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(k,Object.assign({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-placeholder"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-helper"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-strong")," ","*")))),(0,l.kt)(m,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(s,{mdxType:"Row"},(0,l.kt)(g,{colLg:8,mdxType:"Column"},(0,l.kt)(o,{mdxType:"Tabs"},(0,l.kt)(u,{label:"Default",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkUlEQVQoz6WSywrEIAxF/f/PFEGYjSYmPiZaByoDbadgGc8ui8MlN1H9jm2nz1CXWUSeaPcyIoYQmDnG+D5Ta53I3ntjjNbaWhsOIGJKaSKPzBgjM4tIO/C7juoLqO3MSHjIWvJlzjm31v6UiQgARr0AgIijQmYupcxP9frinAMAImJmIprLIlJrlZ3pqy0V9gH9uQIg09VHuwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of an enabled text input in the default style",title:"Example of an enabled text input in the default style",src:"/static/e01c93bfb58799a81ae2cd3eedd37ee4/3cbba/text-input-style-color-fixed.png",srcSet:["/static/e01c93bfb58799a81ae2cd3eedd37ee4/7fc1e/text-input-style-color-fixed.png 288w","/static/e01c93bfb58799a81ae2cd3eedd37ee4/a5df1/text-input-style-color-fixed.png 576w","/static/e01c93bfb58799a81ae2cd3eedd37ee4/3cbba/text-input-style-color-fixed.png 1152w","/static/e01c93bfb58799a81ae2cd3eedd37ee4/92c65/text-input-style-color-fixed.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(u,{label:"Fluid",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfklEQVQoz63RsQoDIQyA4Xv/ZxRcHAThEpvEao22cOXAoUWO8xuy/UOS7X3DtjIWEUR8HtJAREopkziEYIyx1jrnHoMYY0ppEqtqrfX1i6ou3bnfsPTaemgnHbTWJjEieu+JKJ6IiJmJKOc8iZl533cA+E4AuBC3/3rvK1/1AcW5AWN2Bah/AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of an enabled text input in the fluid style",title:"Example of an enabled text input in the fluid style",src:"/static/f84ba81fa50d04011ceb1dc8003d2ed9/3cbba/text-input-style-color-fluid.png",srcSet:["/static/f84ba81fa50d04011ceb1dc8003d2ed9/7fc1e/text-input-style-color-fluid.png 288w","/static/f84ba81fa50d04011ceb1dc8003d2ed9/a5df1/text-input-style-color-fluid.png 576w","/static/f84ba81fa50d04011ceb1dc8003d2ed9/3cbba/text-input-style-color-fluid.png 1152w","/static/f84ba81fa50d04011ceb1dc8003d2ed9/92c65/text-input-style-color-fluid.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invalid"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error icon"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning"),(0,l.kt)("td",{parentName:"tr",align:null},"Warning message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Warning icon"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-warning"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))))),(0,l.kt)(s,{mdxType:"Row"},(0,l.kt)(g,{colLg:12,mdxType:"Column"},(0,l.kt)(o,{mdxType:"Tabs"},(0,l.kt)(u,{label:"Default",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5UlEQVQoz1WR32tTdxjGn+M5SVe9mheDuEqJsG5sN/4P+weE7WKIY1cKggheKQhDGYNFOsZqxQy2kqgdKm3alMYajdW2Wdo0Jl3qyU6MPT9yTpqTnz0553xzxCzZV06HF158eHnh4Xnh8+LbcwF8czaAmaVNUEoh7VGkChYyJQfrgoO1fAuiXGZkWeZKpRJyuRx6vR76/T4sywIh5D3w1anzOHHyPDP5R+QgpZSrDSj3KGt4VvnX3PK247kaodC1V0y5rHLuwWg0OjQYDDxu1jRNDyGEI4S4k9kvnIzZuDZHDueE2uNsobJZkNpJqeqsibskWdK6yYc554topo9Eqsh2u91DnU4nbhjGummaa4SQNdu2XZK2bR/fL5x7UsQPoX8ORJdW/HdnFj9ZSW2N1vZ6PrVm+xS964tvvfFQ+jUkucwVi0WIonhEEIQRTdM+dhzHZ9u2jxDi63a7XsMwgJKoMvRNGnOPMwjdi2E5LaBKKMrtAaQ2xcE7FKKssoqieDOZDEzThCRJaDQa+x5dny6uDk3TGEiiyFVbba7QG7Czz3Pcut5gX/77HytQyvKGxe5oFU6RZa8sy8OVSoWllB6YnZ1lE4kEm8tm2Wxui/37+TIr7pQ4RVE4zN+9hy/HPmOehG65T/HQguBtLa942zPzXjO/PUSjMWTyedR03S3DwsLCYUrpMKX0g3f0/9+ZRosA+m9TqF4PfqjzhQfqCz7V2hFXLFVdtXT9WYcvPG3ej3y+98skXsQfsY7jHNI0LaEoSrperycNw/ir0zGTlqGvWp36ccuoAs3T59D87gwr/njtGH/5yqfln34eq/96Y6wZiY7Ww9Mjuxcuep9RCl1VuUAgwExMTIyOj4/7g8GgPxwO+xdjS0ellxsfvRLSHrGYApqXvkfzwkWIU2Hw129Cu/0nWjPz2FtPo7W4hN3g7yjntxlZUTie5zE9PY1QKIRIJIJ4/CE2Njaxq2xBk/OoyFm8BQikCNStyDG9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of text input states in the default style",title:"Examples of text input states in the default style",src:"/static/030eff8346b8778e3eca454f7e8644f7/3cbba/text-input-style-states-fixed.png",srcSet:["/static/030eff8346b8778e3eca454f7e8644f7/7fc1e/text-input-style-states-fixed.png 288w","/static/030eff8346b8778e3eca454f7e8644f7/a5df1/text-input-style-states-fixed.png 576w","/static/030eff8346b8778e3eca454f7e8644f7/3cbba/text-input-style-states-fixed.png 1152w","/static/030eff8346b8778e3eca454f7e8644f7/0b124/text-input-style-states-fixed.png 1728w","/static/030eff8346b8778e3eca454f7e8644f7/0c3f5/text-input-style-states-fixed.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(u,{label:"Fluid",mdxType:"Tab"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpElEQVQoz03STWsTYRAH8H+bVlTw5SQUvHgQL0o8iheVVvATeNGvoKeKJw/qRVBBEKPiSapBrFLxoNiLba2ktlpfYjaJtU32JdvdZHef3X2eJ9luNhnZ+oKHHzMDwzAMg5svI1yZ3MBSlePHeh+KFuPLT4GvaxLLPyVeLXEoK8aAqtaHbNsG5xxCCEgp/+X/w7WpCJeebAy9L4mD39Te4eXVOLtQkdnFqswWyjKbn4u2Y4RQrq4NxXE8yDk/JKU8LKXMcs6zQoi/tm8OnJjr4t50sqem2Y5mrJPdYgkLROL5oud4olcot48UqjEmX38a7HQ6u33fD33fJ855IoRIOOe9NOecH003xqMZgcvPesMfK+zYQnH95HLVG1XU9mipLseKNTn24kO089Y0oaisZuI4zgRBcIIxNhYEwWgYhqmxP3GX7/tAac0coOg23lQSTM5rmC5xLFuEjw1CwSAcmCVUa0ZGrde25PN5RFG0ebtUu93+h4ig6/oA1JWV4RJRJix9Q0ddQ8/UQevGb6aO80TQVle31FV1m6IoGcdx4Louut0u+v0+kiRB0uvj7JnT0DR9GI3nL2Bdv7WtWa6cc2v1i76qjYeaNh6o2oWUN/NuJJydR3lxKUNEw61W67zruheFEONSynHB+QUhZGpvEHCATU7Bffh4xDYMsk2TmOMQD8P06BQ6LnkLi8fDwge8nXg8SES7Lcsi0zTJ87zNHs4FcR4Q5+EpwQOgOZGHfffBjuDHyg2/XLnvK5U7gabnwmYzx74Wc838033u1WtQ3s1noijaatv2zUajcU/X9Tu2beV8P8wxR7vLXGM/c1Qg/PQZ/ttZtIkgiCCJEBEhTut4A62ZOWjF7wOqqg6lz8wYg2VZMAwDjHnoE6HbVpF0TCSyhl/ds0AxydKIcAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of text input states in the fluid style",title:"Examples of text input states in the fluid style",src:"/static/edc5b59d9f01ebc506154536a50a4f6c/3cbba/text-input-style-states-fluid.png",srcSet:["/static/edc5b59d9f01ebc506154536a50a4f6c/7fc1e/text-input-style-states-fluid.png 288w","/static/edc5b59d9f01ebc506154536a50a4f6c/a5df1/text-input-style-states-fluid.png 576w","/static/edc5b59d9f01ebc506154536a50a4f6c/3cbba/text-input-style-states-fluid.png 1152w","/static/edc5b59d9f01ebc506154536a50a4f6c/0b124/text-input-style-states-fluid.png 1728w","/static/edc5b59d9f01ebc506154536a50a4f6c/0c3f5/text-input-style-states-fluid.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Text input labels and field text should be set in sentence case, with only the\nfirst word in a phrase and any proper nouns capitalized. Text input labels\nshould be three words or less."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$helper-text-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("h3",null,"Text input – Default"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input text"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("br",null),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.83333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8klEQVQ4y4XSS2gTQRgH8H93baUoPipYb4KiBZF6UVRQFC/q0ZuIigoefFAtCloEUaEe6kFafAtaxIPvalsbUFrqq9Um2m3TzTbZTfaRZGM2r53srqY27UiioNgGP/iYgWF+fP9hgL+KUvp3MzFdZzVNYwkhrG3brGVZrO3YbNBIsG0HWiDPOYDBzecwVFNf7Cn1Dwg9HIaiKCCEwHEc2LZdXNVkGl17miEuOAhuw9nSYK+molVVcUdVK4dludGIxa7G4/HmbDbbYtt2i23ZzY7jXJMTyTNPj9ycHcWu8sHtF9mS4BNRRJMoFXrW20Dgql8UHyqKcieZTLaaptmayWTumqZ53x1Smm8dvFyVmbFvpnvL+Rn/jzz5J/ZgYBT2+HeM0UnkaB4OHf91Bi/aa+ugrTxdOvJW9KGhlkfDKp4tXPrsckPt9SA94AfxSDA9IohHRMDjw5uj1zCKnfBiYxHzrjgxFYwEUmWaPA5Nzs+LCsrrryPSF4MPfSRS9JMV1AesoP7RCupD2bDxQL7cPvcDNpWPFVLU1INbfnwqyPeH4PMQ+Nykku/jDnHd7xu4nr5TkS/CsRQvH06MhA4n+FBdYlTZxe+4VOWp3FtxEihi04JZmSKjUJgqxY+oA1NQYAUisEUdViBa3FuSDkuLI3DoNtwVu4vvWRLsuOXH46YQnjTJFa+e9y+zssnqMSdX/cP5Xj3+LbcoP5FfmPkkLtZvvFoq7r/CFLBEu7s0qMukLC5NwpDo/Eg4NqCqSkzTNDWdTmumaWomIQpJJeMpyfdaueCq2vb7Z0yLFere9Re43tiBG40vy58+erG682XnurZnbetdLtfazo6O9d3dPWtiYXWlERSWEErL0mMURljH0PL66UH3+xG87RrBuy4ew0M8eB8Pr9cLv98PQRAgShKMWATxkIAJSpHOURhaASwxYX8Pj942P3qf+zH42csMe4cZjuMYQRAYn8/HiKLEJL7qjBEUylI5ijylIHQCXM0f8CeM1SASGBzdowAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for default text input",title:"Structure and spacing measurements for default text input",src:"/static/acefea77cf3254aa52f71f12f09bc268/3cbba/text-input-style-structure-fixed.png",srcSet:["/static/acefea77cf3254aa52f71f12f09bc268/7fc1e/text-input-style-structure-fixed.png 288w","/static/acefea77cf3254aa52f71f12f09bc268/a5df1/text-input-style-structure-fixed.png 576w","/static/acefea77cf3254aa52f71f12f09bc268/3cbba/text-input-style-structure-fixed.png 1152w","/static/acefea77cf3254aa52f71f12f09bc268/392b1/text-input-style-structure-fixed.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for default text input | px / rem"),(0,l.kt)("h3",null,"Text input – Fluid"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"64 / 4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-10"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-top, padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"13 / 0.8125"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("br",null),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.83333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAUlEQVQ4y3WSTWhUVxTH/xM/ohSCC124EsY2bSl05V6pKCgTtauYahGjdKNIImk1agSJrajUrqRFsFBSxSqS0uCi1i9kNAkmOvOajDNv5s3n+37zvu59b6KiPSUzURQzfzicuzj3d8659w/M6czalxgeU/HJTy4IFiblMoyqhfDZDFzuw2EeHObDYz5E20LXjRHgyxh+ERLA8X5goB/vaBY4klCw8GwaBIKgqxts190ZztQ6fc62e8zf7nHWyTjryjnVbbHrV5dh767WwYfxBmw+INEoxjATOdhNbZOSXKiUVZJlnapVjxyXk+Mw8lxGkuXQt/EHUbS1LLouSpGmE57P3wdS+7Gq//aCP5NCVzIj7hezud2yqnVrhtmt6ka3aVh77onZPesvDS3H152LD936Z/4JB78gEDWidGfu/JJg5hV4sgmmVuvhyuabOmzbXM9LjvQ33vFtSat3wJvMIbwYx6vfJ1q8svYVK+t9NdXu4bLVy2Wzt54rZl/Ncr+pES2dhQW2h76OPuDnY+8Ckx/31rudBiJGz+Vl+r85WRmdIn1smrwnEnGhSCxZIJ4oEMsqpN18/NENoNXXqpFkew8S7T3vAytxAfLJYeQPDrXIYmFtSZS25lOZmF6odFglpcMsyjGzKG8xKurG7PfX2k7M3U00Az4tyhjOVPH3ExNSqQK9rMDWDDDLqa/GbRdB1YVpu5iYlvCICHmi5sDblgEQAybTkSlV3Wfb9o9BEPzAGT/FeSNCzs8UHefoJVP/4EqxjFFVaw68m5aw5mocIIKgKNOaqpJuGMQYozAMiQcB1YKASp4fXknnVg6FNh48DyLvwV4DT8/aATtb/tg00DYxpYxrmk6apj3Tdf2FZVkvPN9/zlyXcvl0+ea5kXYCcH5u5XmBswWEXTgXO9w6eO3Wp5mM+GEqlYomk8moKIpRzTCizDSiF/769bPdZ39b0loYxzp1vDnwFNZh6PMDoBXf1S0kilmkUikIgoBsNgvTtKAoFdB/Uw1jR5a/+eXX+h8V7jOQKW3GjgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for fluid text input",title:"Structure and spacing measurements for fluid text input",src:"/static/55c68f8f1345189431e4c8abcc758664/3cbba/text-input-style-structure-fluid.png",srcSet:["/static/55c68f8f1345189431e4c8abcc758664/7fc1e/text-input-style-structure-fluid.png 288w","/static/55c68f8f1345189431e4c8abcc758664/a5df1/text-input-style-structure-fluid.png 576w","/static/55c68f8f1345189431e4c8abcc758664/3cbba/text-input-style-structure-fluid.png 1152w","/static/55c68f8f1345189431e4c8abcc758664/392b1/text-input-style-structure-fluid.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for fluid text input | px / rem"),(0,l.kt)("h3",null,"Text area – Default"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"varies"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-top, padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"11 / 0.6875"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field: focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMUlEQVQoz32SX0hTYRjGn3PEjAiKQirooiu76Caim4pddNdFoNH/SMgbCSSii3KLWVTMTTPMoLmUZDpzZChr04xS0P6BCbNdVNv8zjm2s/9nw+MmNUf1xk4SZFsPvHwv3/fx43m+9wMKajIAxivovjUMmPejWv8ALbetkMMScrllZDIZqKoKIsKAsx83b7ShvWEcloYRmPW9+Fca0ADCGOA+B11Nu7b9avAFN/HEzU0NP+Mmh0a5584hnoi4wlnXgWl06N6gfltnKaAeHlQD3vPQHTKVASibGX2NqadjeDsyrtXLIbfmEkD5w93DXKEb3HEZvp2XtFoFbMTkbIrD0T1rTvdPbH/vm+uSmTAQYlKfLEgOmUkOWZjvDTHh8axPsFnt4fWuC26YiIoAjY2aw4l4hPMQwUU/N8wGWST42U8CE0gSRWJzjAJ+v9Z/Er9InuuPKiWcXOc9bC4v4VAP74LKFSLZl7KbPgRYTGSM5iWJREEkOSSTklRocUElIRwP2VoHNxLAzRj6+ZKRXWwOqD1Tsc/p2PLOH7wTD0V6lHDMmpSjneloonMxmbaqiVT39MeApdbWt7b1Ygea/xd5lTS3SjiBpWgK+XQGtEz4kfn2ezBn6zg0HwEqqooB9X+AK1PU1sIXUWNpPpdU+Xw6y1N2mf+ufuW1O8dPASeOobhW3rDqbhtQX4fNFhP23r+HGnsP8oqCoCBAkiQIogglGsFBmxVbrzah0ngNuywtf7F+Ae86UTnH8GcgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for default text area",title:"Structure and spacing measurements for default text area",src:"/static/d1ca9e64756bfa7e3843d98d2874df85/3cbba/text-area-style-structure-fixed.png",srcSet:["/static/d1ca9e64756bfa7e3843d98d2874df85/7fc1e/text-area-style-structure-fixed.png 288w","/static/d1ca9e64756bfa7e3843d98d2874df85/a5df1/text-area-style-structure-fixed.png 576w","/static/d1ca9e64756bfa7e3843d98d2874df85/3cbba/text-area-style-structure-fixed.png 1152w","/static/d1ca9e64756bfa7e3843d98d2874df85/392b1/text-area-style-structure-fixed.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for default text area | px / rem"),(0,l.kt)("h3",null,"Text area – Fluid"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"varies"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-top, padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"11 / 0.6875"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field: focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPElEQVQoz33RS2gTURQG4D8Zi1ZB0YLFlTtFEFz4AHHlqogIQmpFsNAudCGtKAhGTdyUtik+qH0kwUosBFwoPooortwIWkgtNDFtajqZNMkkzqTzSibJzKTtkYQiVIM//Fy4HD7u4QK1uO8A/lNYJAW41oMTE5NYEERG0zRG1QqMommMrGqMpKqMKMtMJMXbR71TGH32AZ+/RfBvauDwOcyvK0BvL476A4hJEiqmhUp1FSWrirJVRcm0IBV1hNM8xp68wYhv6j9g/xVEDRW43rPtiP/p7kVJPlMxzY6yaTl0w3TopukoGoZD0fWOSCbXNjbwoqkzG8eXiU+YO3iz3k2g/ySBaAFA35ahV8L+0PxSNhnnKLPME7/MUzqZphSXoqVYnOZiXDIQ5Xd87HuNd0SNQWebiK+lnG3I4PCdaOd0OBqbnZmhSDhc+RGJmButJFiWFhKp8HtncC+Hi9tnzw42NQTlFkJoRbEREcYVYU80sSzkeJ5y2RzxGZ5EQaRioUAlXacEL2TGH7/cRYAt5AzaG4K4fwtv2TjQ1bn1ePB5a4jlHsnCSkDLy95CXvZpouSTc6JX+ZWfmI4uerp8weYHN0Yw0HBl123A5fz7q+qvXStXQWsEMtdBRQOWUkLtHpe7bXC1A82HGoHOP2B9eOMkIltF1u1UNO1UMOpdVcv2+kz7JaD9AhqntrLLiQPDD4Gr3Wjx9OPY+AjOTwZg5fP4ybLgOA5sIoGVLI/Tfi/23XWj9Z4bhwc9m6zf8mN4eC6mpigAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for fluid text area",title:"Structure and spacing measurements for fluid text area",src:"/static/1aee7f775768f15788f41bd7718841fe/3cbba/text-area-style-structure-fluid.png",srcSet:["/static/1aee7f775768f15788f41bd7718841fe/7fc1e/text-area-style-structure-fluid.png 288w","/static/1aee7f775768f15788f41bd7718841fe/a5df1/text-area-style-structure-fluid.png 576w","/static/1aee7f775768f15788f41bd7718841fe/3cbba/text-area-style-structure-fluid.png 1152w","/static/1aee7f775768f15788f41bd7718841fe/392b1/text-area-style-structure-fluid.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for fluid text area | px / rem"),(0,l.kt)("h2",null,"Sizes"),(0,l.kt)("p",null,"These sizes apply only to the default style of text input."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Height (px / rem)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input"),(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVQoz62TUQuDMAyE/f//s/hSA2saa216HVgUxwRrt+8xEO5ySYbyA8NlFRuPmwGoaqcygNcGM8cY14MlIqaCO9vMbK0lIu/9vBNkziGWz1mGfwYGoBoGkM+olq8IL5SJyBgzjqNzzu+IY+WApDfNm8wFBQ22U0r9R0JENW0RCQcyqyz3addVTdPEzOeZc1ibzrPfNnY6H6NR+Q2CzHm+eVx2DQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for text input",title:"Sizes for text input",src:"/static/8d08946dde4456664e0abccc5f8484b8/3cbba/text-input-style-size.png",srcSet:["/static/8d08946dde4456664e0abccc5f8484b8/7fc1e/text-input-style-size.png 288w","/static/8d08946dde4456664e0abccc5f8484b8/a5df1/text-input-style-size.png 576w","/static/8d08946dde4456664e0abccc5f8484b8/3cbba/text-input-style-size.png 1152w","/static/8d08946dde4456664e0abccc5f8484b8/392b1/text-input-style-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Text input sizes | px / rem"))}N.isMDXComponent=!0}}]);