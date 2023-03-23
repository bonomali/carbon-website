"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[57246],{28399:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),m=a(76902),p=a(75900),o=a.n(p);var s=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var g=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:m}=a||l,p=`${r}/edit/${m}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},k=a(56328),c=a(51721);let u=function(t){function e(){return t.apply(this,arguments)||this}return(0,c.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,m=new RegExp(`${l}/?(#.*)?$`),p=a.replace(m,e);return n.createElement("li",{key:t,className:o()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var N=u,b=a(17680),y=a(75387),h=a(50041);var A=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(h.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=t=>{let{pageContext:e,children:a,location:l,Title:p}=t;const{frontmatter:o={},relativePagePath:c,titleType:u}=e,{tabs:h,title:f,theme:v,description:w,keywords:C,date:x}=o,{interiorTheme:E}=(0,y.Z)(),{site:{pathPrefix:T}}=(0,i.useStaticQuery)("2456312558"),S=T?l.pathname.replace(T,""):l.pathname,B=h?S.split("/").filter(Boolean).slice(-1)[0]||r()(h[0],{lower:!0}):"",R=v||E;return n.createElement(m.Z,{tabs:h,homepage:!1,theme:R,pageTitle:f,pageDescription:w,pageKeywords:C,titleType:u},n.createElement(s,{title:p?n.createElement(p,null):f,label:"label",tabs:h,theme:R}),h&&n.createElement(N,{title:f,slug:S,tabs:h,currentTab:B}),n.createElement(b.Z,{padded:!0},a,n.createElement(g,{relativePagePath:c}),n.createElement(A,{date:x})),n.createElement(k.Z,{pageContext:e,location:l,slug:S,tabs:h,currentTab:B}),n.createElement(d.Z,null))}},21703:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return c}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},p=m("Caption"),o=m("Row"),s=m("Column"),g={_frontmatter:d},k=r.Z;function c(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(k,Object.assign({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-subtle")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track: filled"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rangel label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))))),(0,l.kt)(p,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(o,{mdxType:"Row"},(0,l.kt)(s,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABH0lEQVQoz82SwUrEMBCGJ90XWEFYxZuHVZ/aN/BJfIDCHryYpmk3YZM2BeNkRlKI7NZFPXhw4OOfSYYfJhmAv45hGMB7D+M4gnNOIKJgZkFEs/4SKIAxBvb7PVhroes6iDHOF0T02XScn6tPDLNZ3/fZUGitL2OMV8y8IaJN1mW+qK+ZeX1iOI6jyCMPw7D23j+nlAwzSyJSBWY+p6+IOCHiIyICIq6yQtM0oq5rqOv6wnv/cjgc2Fr77pxLUsq02+1SjhjjDCIma20KIby1bcvGmKemaUBrvXLOwfF7VER0y8z3zLxl5rsCEX3JQwhbKeWDUupGKQWZbDwbfkf5hOVZCAGklFDMCsvmvC7VT+RppmmqtNZV3/cib0fh/8cHWdvu+naQof8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Slider enabled state",title:"Slider enabled state",src:"/static/8430ec53d31a420ee7eeb58b1c61ea2e/3cbba/slider-style-color.png",srcSet:["/static/8430ec53d31a420ee7eeb58b1c61ea2e/7fc1e/slider-style-color.png 288w","/static/8430ec53d31a420ee7eeb58b1c61ea2e/a5df1/slider-style-color.png 576w","/static/8430ec53d31a420ee7eeb58b1c61ea2e/3cbba/slider-style-color.png 1152w","/static/8430ec53d31a420ee7eeb58b1c61ea2e/92c65/slider-style-color.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("p",null,"Slider uses a text input to type in values. See\n",(0,l.kt)("a",{parentName:"p",href:"https://carbondesignsystem.com/components/text-input/usage/#states"},"text input"),"\nfor more information on its interactive states."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Thumb"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"Thumb"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Range label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Thumb"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Range label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-subtle")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Track:filled"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-inverse"))))),(0,l.kt)(p,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(o,{mdxType:"Row"},(0,l.kt)(s,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"140.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB+klEQVRIx6VVbW/cIAzm//+k/YP7WE3ah0mTblPv1vakhCUkIbz4mUxrSjhy125IDsQYg5/HBkVEkMZjkRjjla6eK+dlrHgQQtgYlcYtXemgtk0Oh2HA5XKB1hrjOOJ4POJwOCQD51za0Fqb7LjJ5uu64nw+Z30+IRuw8EJWTtOE0+m0ORHPsYPSofcexhgsy7J1uNfuhdyyVXIyOaX8+0pX2pW9iNioFsvAq9Tsig0vrE8pNilkxoBBf5tCiMBk90MVDMc54qV30FPcYjjPC3oT0RnALITvv4EvDxEgD+d8Cok35SwoHT51Dj9+PuPxYq9J4c1L2UvqkoDVE4aZsLj38JWASQmXWtpVkguhwFt8KAFYjNOCtChesVyzHRt2ObEpBny0tfIwh8wfYybo0SZmGY+XP4RvjxzSe45xCXIF1ZXSdV2uoEwKMzmvgLEE6wjPmvD1132H7IjvgA+X3j+F3AT9E6TUsmG5To/6v3bYms8sM8B79dnS79W1ErYYYAZexkwAj2upSeFylHtgl5T63di7HCSy8v1RLfzKkG7h27y+9ti6JdvSC9el1wrxv0pvnucM7q20YH2JoTzB9btMy7LQMAyktU7S9z1ZaymEQN771LMN69k+xkiv6ymt43n5V7eOfy8D6gtXTqiJ6FMSY+S3QMvasv8LnVelr60be+UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Slider interactive states",title:"Slider interactive states",src:"/static/86c4256695a1b063dab60be1f4f640e1/3cbba/slider-style-states.png",srcSet:["/static/86c4256695a1b063dab60be1f4f640e1/7fc1e/slider-style-states.png 288w","/static/86c4256695a1b063dab60be1f4f640e1/a5df1/slider-style-states.png 576w","/static/86c4256695a1b063dab60be1f4f640e1/3cbba/slider-style-states.png 1152w","/static/86c4256695a1b063dab60be1f4f640e1/92c65/slider-style-states.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Slider labels should be set in sentence case, with only the first word in a\nphrase and any proper nouns capitalized, and no more than three words."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range label"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$code-02"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"The width of a slider varies based on page content and layout."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb:active"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"20 / 1.25"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb:active"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"20 / 1.25"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"margin-left, margin-right"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABvElEQVQoz7WRT2sTQRjGn82iJAEP9qZQ8FASrAe/iop+j12hH8BboUhO3nqsBxFFi3tQPLRNJAexVBIbEolpJX+7ZpP0z2x2Z+Z9ZZal0urVBx5mnpd3fi8zA/wPjQ8Jg0BgGAgc9M4ySmmbmROrk9CmNBORLZSy/SiyRRTZ0anIMDOM94ruH+BRmzCazDEKQuugG0KnTcZqJkBKJ3sigtAK4zhGGMeQZ6GpWwmw4CRONO0T+oMg0+35OOyMV2Ipt5j5LTO/0/PYI00eM3tE5Ekib671ptJ6R0v1OB1sXwCeTmN86w3t9mSG/VGw0e385H6rw0zEkQiVjKWWUmqllO4fH+ua78fDIODp4GjDAAeV+pULQFMs7WxjrVrG6ufyYqdSvy22GktyJhaZ+Ubqm2Z9/qO59ORTebnaaNzyG+3r5uzo8pVNsQJgG8CXNBttYiH/GtncG1zLvwSyr3A1V8ZCnoHk3VYAax3AC+BvYJMZ35lRYzLN1vDZe7t5/2m29SD1o1K29bCUrd9by+2uf7B/MVuT+UkCVpd/2ah6x0V12cXHuy72is75xH/5a8HBbtFBreCiZnLROQf9BjOgaAr4JrnWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for slider",title:"Structure and spacing measurements for slider",src:"/static/4af9793397f8676524fa171b6a4c37a0/3cbba/slider-style-spec.png",srcSet:["/static/4af9793397f8676524fa171b6a4c37a0/7fc1e/slider-style-spec.png 288w","/static/4af9793397f8676524fa171b6a4c37a0/a5df1/slider-style-spec.png 576w","/static/4af9793397f8676524fa171b6a4c37a0/3cbba/slider-style-spec.png 1152w","/static/4af9793397f8676524fa171b6a4c37a0/392b1/slider-style-spec.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)("h3",null,"Recommended"),(0,l.kt)("p",null,"The following specs are not built into the slider component but are recommended\nby design as the proper sizing for the slider tracking line."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slider"),(0,l.kt)("td",{parentName:"tr",align:null},"min-width"),(0,l.kt)("td",{parentName:"tr",align:null},"200 / 12.5"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"max-width"),(0,l.kt)("td",{parentName:"tr",align:null},"640 / 40"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))))}c.isMDXComponent=!0}}]);