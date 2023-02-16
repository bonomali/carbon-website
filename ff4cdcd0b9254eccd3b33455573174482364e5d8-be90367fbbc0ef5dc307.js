"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[37580],{40156:function(e,t,r){var n=r(67294),a=r(63366),o=r(87462),i=r(97326),l=r(51721),c=r(8812),s=r(15706),u=r.n(s);function d(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var m=n.createContext();var g={initialChunks:{}},p="PENDING",f="REJECTED";var h=function(e){return e};function A(e){var t=e.defaultResolveComponent,r=void 0===t?h:t,s=e.render,A=e.onLoad;function v(e,t){void 0===t&&(t={});var h=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function y(e){return t.cacheKey?t.cacheKey(e):h.resolve?h.resolve(e):"static"}function E(e,n,a){var o=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,c.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return u()(a,o,{preload:!0}),o}var Y,b,w=function(e){var t=y(e),r=v[t];return r&&r.status!==f||((r=h.requireAsync(e)).status=p,v[t]=r,r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:h.resolve(e),chunkName:h.chunkName(e),error:t?t.message:t}),r.status=f}))),r},C=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:y(r)},d(!r.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(h.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(h.chunkName(r))),(0,i.Z)(n)):(!1!==t.ssr&&(h.isReady&&h.isReady(r)||h.chunkName&&g.initialChunks[h.chunkName(r)])&&n.loadSync(),n)}(0,l.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=y(e);return(0,o.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===f&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return y(this.props)},n.getCache=function(){return v[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;A&&setTimeout((function(){A(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=E(h.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:h.resolve(this.props),chunkName:h.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=E(t,e.props,k);e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,a.Z)(e,["__chunkExtractor","forwardedRef"]));return w(t)},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,i=(e.__chunkExtractor,(0,a.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,c=l.error,u=l.loading,d=l.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(c)throw c;var m=n||t.fallback||null;return u?m:s({fallback:m,result:d,options:t,props:(0,o.Z)({},i,{ref:r})})},r}(n.Component),N=(b=function(e){return n.createElement(m.Consumer,null,(function(t){return n.createElement(Y,Object.assign({__chunkExtractor:t},e))}))},(Y=C).displayName&&(b.displayName=Y.displayName+"WithChunkExtractor"),b),k=n.forwardRef((function(e,t){return n.createElement(N,Object.assign({forwardedRef:t},e))}));return k.displayName="Loadable",k.preload=function(e){k.load(e)},k.load=function(e){return w(e)},k}return{loadable:v,lazy:function(e,t){return v(e,(0,o.Z)({},t,{suspense:!0}))}}}var v=A({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),y=v.loadable,E=v.lazy,Y=A({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),b=Y.loadable,w=Y.lazy;var C=y;C.lib=b,E.lib=w;t.ZP=C},15706:function(e,t,r){var n=r(8812),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function c(e){return n.isMemo(e)?i:l[e.$$typeof]||a}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=i;var s=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var a=g(r);a&&a!==p&&e(t,a,n)}var i=u(r);d&&(i=i.concat(d(r)));for(var l=c(t),f=c(r),h=0;h<i.length;++h){var A=i[h];if(!(o[A]||n&&n[A]||f&&f[A]||l&&l[A])){var v=m(r,A);try{s(t,A,v)}catch(y){}}}}return t}},28399:function(e,t,r){r.d(t,{Z:function(){return Y}});var n=r(67294),a=r(88650),o=r.n(a),i=r(1597),l=r(80304),c=r(94656),s=r(75900),u=r.n(s);var d=e=>{let{title:t,theme:r,tabs:a=[]}=e;return n.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:a}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:c}=r||a,s=`${o}/edit/${c}${l}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},g=r(56328),p=r(51721);let f=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,a=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===a,c=new RegExp(`${a}/?(#.*)?$`),s=r.replace(c,t);return n.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${s}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var h=f,A=r(17680),v=r(75387),y=r(50041);var E=e=>{let{date:t}=e;const r=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var Y=e=>{let{pageContext:t,children:r,location:a,Title:s}=e;const{frontmatter:u={},relativePagePath:p,titleType:f}=t,{tabs:y,title:Y,theme:b,description:w,keywords:C,date:N}=u,{interiorTheme:k}=(0,v.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),R=S?a.pathname.replace(S,""):a.pathname,L=y?R.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",P=b||k;return n.createElement(c.Z,{tabs:y,homepage:!1,theme:P,pageTitle:Y,pageDescription:w,pageKeywords:C,titleType:f},n.createElement(d,{title:s?n.createElement(s,null):Y,label:"label",tabs:y,theme:P}),y&&n.createElement(h,{title:Y,slug:R,tabs:y,currentTab:L}),n.createElement(A.Z,{padded:!0},r,n.createElement(m,{relativePagePath:p}),n.createElement(E,{date:N})),n.createElement(g.Z,{pageContext:t,location:a,slug:R,tabs:y,currentTab:L}),n.createElement(l.Z,null))}},46409:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(67294),a=r(29194),o=r(75900),i=r.n(o);const l="undefined"!=typeof window?[[document,"scroll"],[window,"resize"],[window,"orientationchange"]]:[];var c=r(84019);var s=e=>{let{onSearchChange:t,onDropdownChange:r,selectedCategory:o,categoryList:s,type:u="icon"}=e;const[d,m]=(()=>{const e=(0,n.useRef)(null),{0:t,1:r}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{function n(){const n=e.current.getBoundingClientRect().top<=parseInt(getComputedStyle(e.current).top,10);n&&!t?r(!0):!n&&t&&r(!1)}return n(),l.forEach((e=>{e[0].addEventListener(e[1],n)})),()=>{l.forEach((e=>{e[0].removeEventListener(e[1],n)}))}}),[e,t]),[e,t]})(),g="icon"===u?"Search by descriptors like “add”, or “check”":"Search by descriptors like “electronics”, or “weather”";return n.createElement("div",{"data-stuck":m||void 0,ref:d,className:i()(c.cb,{[c.Hw]:"icon"!==u})},n.createElement(a.Search,{labelText:`filter ${u}s by searching for their name or category`,onChange:t,placeHolderText:g,size:"lg"}),n.createElement(a.Dropdown,{className:c.j6,id:"category-filter",size:"lg",direction:"bottom",selectedItem:o,onChange:r,label:`Filter ${u}s by category`,items:[`All ${u}s`,...s]}))}},74082:function(e,t,r){r.d(t,{H:function(){return a}});var n=r(67294);const a=n.createContext();t.Z=e=>{let{children:t,type:r,site:o="carbon"}=e;return n.createElement(a.Provider,{value:{site:o,type:r}},t)}},89152:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),a=r(99122),o=r(98432),i=r(75900),l=r.n(i),c=r(78102),s=r(87478),u=r(84019);const d=()=>n.createElement("svg",{width:"32px",height:"32px",viewBox:"0 0 64 64"},n.createElement("desc",null,"Created with Sketch."),n.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.createElement("image",{id:"illustrator",x:"0",y:"0",width:"64",height:"64",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGOfPtRkwAAAS9QTFRFMSAY+34Y/n8YdD8Y63cYg0YYp1cY/38Y+n0YpFYY3nEYPCUYOSMYcj4Y83oYSisYvWEYTCwY8HkY3XAYUi8Yu2AY8XkY6nYY73gYVjEYRCgYbTwYPyYY2G4YfkMYoVQYtV0Y2m4Y0moYaToY2W0Y4XEY4nIYhUYYrVkY8noY9nwYYzgYMyEYz2kY1WwYaDoYbz0YnlMYn1MYOyUYqFcYuF4YbjwYSSsYgEUYjUoY4XIYTi0YyWcYyGYYolUYplYYiEgYNiMY/X8YwmMYMiAYgEQYPiYY7ngYcz4YSCsY5nQYlk8Y53QYuV8YQScYqlgYNCEYXjQYcT0Y+XwYWzQYlE4YzGgYul8YiUkYwGIYh0gYVjIYvGEYhkcYjEoYslsY7XcY7HYYeUEYd0EY7ncYMwmPCAAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAB0ElEQVRYCe2V13LCMBBFl2BYEgiBQAik995777333pP//4bsyiBkzxgs85AMgx5kXWvvsbRey4AlNijRj/8EAB4bb19swaPf9AqKR0JlBVDuSZzjd4wraoH4DcOv6sI5CAiAL6w4DERDkTTkGKdSDgoA1iqOD8RPRRYB1JiAAcXx9WN8K7Iw4ND045HVYVMc5LCFhSwAkzaPRRYAnNJcopG6RYvDJpwBO/U0995A3arNY5HOgBueen2g7joiLVHEkBRi4Ay45alMhvtm6QmRkqII4I5iUwBpugSlRwMwzbGPAC90WfICmCAjvgE88XU5R9BYgajjZ4AkAzY8AHrJl2YfV8K2PqCOH3zPvg4aDG1mCe63ID7lANt2GTWuDeAKxDjbxFrWdAEjKQbkW0IXcJn3mqN5k+A6B8d2gEgHgGvAKAG6qs0mKiKmt4KwjwDy+OWjLXohCG5XcEWWqrNs4mCGFA5rAc7J0ZnzwwEDJrUAfeRYl4C9LZKtOoA4P1L5HYyRrGpigssc9LOhRa4ApkhjmwYgRvE9eT90M2BWA7BP8e0KIDJIN074Bp3UPmWChjTj9GOxBjqpCqCSRK6NSh2UVw74fXptohi8mtn394Bf0ww4OLSdUjgAAAAASUVORK5CYII="}))),m=()=>n.createElement(s.Re,{size:32,className:u.qv});var g=e=>{let{allIconResults:t,setSelectedCategory:r,selectedCategory:i,type:s="icons",pageName:g,pageUrl:p}=e;return n.createElement("div",{className:u.f_},t?n.createElement(n.Fragment,null,n.createElement("span",{className:u.UR},`0 results found in the "${i}" category.`),n.createElement("h2",{className:c.h2},t," matches found in"," ",n.createElement("button",{type:"button",onClick:()=>r(`All ${s}`),className:l()(u.we,"cds--link")},"all ",s,"."))):n.createElement(n.Fragment,null,n.createElement("h2",{className:c.h2},"No result found"),n.createElement("p",{className:c.An},"It appears we don’t have an icon that matches your search. Try different search terms or give us a hand—submit your own design to the library!"),n.createElement(o.X2,{className:"resource-card-group"},n.createElement(o.sg,{colMd:4,colLg:4,noGutterSm:!0},n.createElement(a.Z,{subTitle:`Submit ${"icon"===g?"an icon":"a pictogram"} design`,href:"https://github.ibm.com/brand/pictograms/issues/new"},n.createElement(m,null))),n.createElement(o.sg,{colMd:4,colLg:4,noGutterSm:!0},n.createElement(a.Z,{actionIcon:"download",href:p,subTitle:`Download the ${g} master`},n.createElement(d,null))))))}},48366:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(45987),a=r(67294),o=r(79900);function i(e){return e.toLowerCase()}var l=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function s(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}function u(e,t){var r=e.charAt(0),n=e.substr(1).toLowerCase();return t>0&&r>="0"&&r<="9"?"_"+r+n:""+r.toUpperCase()+n}function d(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,n=void 0===r?l:r,a=t.stripRegexp,o=void 0===a?c:a,u=t.transform,d=void 0===u?i:u,m=t.delimiter,g=void 0===m?" ":m,p=s(s(e,n,"$1\0$2"),o,"\0"),f=0,h=p.length;"\0"===p.charAt(f);)f++;for(;"\0"===p.charAt(h-1);)h--;return p.slice(f,h).split("\0").map(d).join(g)}(e,(0,o.__assign)({delimiter:"",transform:u},t))}var m=r(36873),g=r(93993),p=r(29194),f=r(21455),h=r.n(f),A=r(75900),v=r.n(A),y=r(74082),E="ActionBar-module--tooltip--KG9tZ",Y="ActionBar-module--trigger--W2p-I";var b=e=>{let{moduleName:t,name:r,source:n,setIsActionBarVisible:o,isActionBarVisible:i,isLastCard:l}=e;const{site:c}=(0,a.useContext)(y.H),{0:s,1:u}=(0,a.useState)(`Copy <${t} />`),d=(0,a.useRef)(),f="carbon"===c,A=l?"end":"center";return a.createElement("div",{ref:d,onBlur:e=>{const t=d.current.contains(e.relatedTarget);o(t)},"aria-hidden":!i,className:v()("ActionBar-module--container--9-9jo",{"ActionBar-module--hidden--8H1F+":!i})},a.createElement(p.Button,{kind:"ghost",size:"small",hasIconOnly:!0,tooltipAlignment:A,tooltipPosition:"top",iconDescription:"Download SVG",renderIcon:m.UW,onFocus:()=>o(!0),onClick:()=>{const e=document.body.appendChild(document.createElement("a")),t=new Blob([n],{type:"image/svg+xml"}),a=window.URL.createObjectURL(t);e.download=`${r}.svg`,e.href=a,e.click(),document.body.removeChild(e)},className:E,triggerClassName:Y}),f&&a.createElement(p.Button,{kind:"ghost",size:"small",hasIconOnly:!0,tooltipAlignment:A,tooltipPosition:"top",iconDescription:s,renderIcon:g.EK,onClick:()=>{u("Copied!"),setTimeout((()=>{u(`Copy ${t}`)}),2e3),h()(`<${t} />`,{format:"text/plain"})},onFocus:()=>o(!0),className:E,triggerClassName:Y}))},w=r(84019);const C=["icon","containerIsVisible","isLastCard"];var N=e=>{var t;let{icon:r,containerIsVisible:o,isLastCard:i}=e,l=(0,n.Z)(e,C);const{name:c,Component:s,friendlyName:u,assets:m,moduleInfo:g,output:p}=r,{0:f,1:h}=(0,a.useState)(!1),A=null!==(t=null==g?void 0:g.global)&&void 0!==t?t:p[0].moduleName;let{source:v}=m[0];return m.length>1&&(v=m.find((e=>{let{size:t}=e;return 32===t})).source),a.createElement("li",{onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)},className:w.$h},a.createElement("div",{className:w.Lj},a.createElement("span",{className:w.Qk},u),o&&a.createElement(a.Fragment,null,a.createElement("div",{className:w.ov},s?a.createElement(s,Object.assign({size:32},l),a.createElement("title",null,u)):a.createElement("p",null,"Error: no component found for ",d(u))),a.createElement(b,{isLastCard:i,name:c,source:v,moduleName:A,isActionBarVisible:f,setIsActionBarVisible:h}))))}},77995:function(e,t,r){var n=r(47945),a=r(22510);t.Z=e=>{let{assetType:t}=e;const r=(0,n.ZP)({minWidth:a.AVK.md.width,maxWidth:a.AVK.lg.width}),o=(0,n.ZP)({minWidth:a.AVK.lg.width});let i=2;return"pictograms"===t&&o&&(i=4),"icons"===t&&(r?i=4:o&&(i=6)),i}},97565:function(e,t,r){var n=r(67294);t.Z=()=>{const{0:e,1:t}=(0,n.useState)(null),{0:r,1:a}=(0,n.useState)(!1),o=(0,n.useRef)(),i=(0,n.useCallback)((()=>{const{current:e}=o;e&&e.disconnect()}),[]),l=(0,n.useCallback)((()=>{o.current=new IntersectionObserver((e=>{let[t]=e;return a(t.isIntersecting)}),{rootMargin:"75%"}),e&&o.current.observe(e)}),[e]);return(0,n.useLayoutEffect)((()=>(l(),()=>{i()})),[l,i]),[t,r]}},84019:function(e,t,r){r.d(t,{YK:function(){return n},cb:function(){return a},Hw:function(){return o},j6:function(){return i},p1:function(){return l},g7:function(){return c},ng:function(){return s},FX:function(){return u},$h:function(){return d},Lj:function(){return m},ov:function(){return g},Qk:function(){return p},f_:function(){return f},UR:function(){return h},we:function(){return A},qv:function(){return v}});var n="SvgLibrary-module--svg-page--wIy2p",a="SvgLibrary-module--filter-row--qEywv",o="SvgLibrary-module--pictograms--EMOMc",i="SvgLibrary-module--dropdown--cbL5E",l="SvgLibrary-module--svg-library--jFXc5",c="SvgLibrary-module--svg-category--pdfdU",s="SvgLibrary-module--category-title--jGwXf",u="SvgLibrary-module--svg-grid--CEhh0",d="SvgLibrary-module--svg-card--OKCN6",m="SvgLibrary-module--svg-card-inside--1TjHg",g="SvgLibrary-module--flex-container--K2KP6",p="SvgLibrary-module--trigger-text--Ql+hT",f="SvgLibrary-module--no-result--ingrV",h="SvgLibrary-module--search-label--LL6jU",A="SvgLibrary-module--all-svgs--P7MaV",v="SvgLibrary-module--icon--RVD3Z"}}]);