"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[93938],{2034:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return u}});var n=t(45987),i=(t(67294),t(3905)),o=t(3624);t(8689);const s=["components"],l={},c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},r=c("PageDescription"),d=c("AnchorLinks"),p=c("AnchorLink"),g=c("Row"),m=c("Column"),f=c("Caption"),h={_frontmatter:l},b=o.Z;function u(e){let{components:a}=e,t=(0,n.Z)(e,s);return(0,i.kt)(b,Object.assign({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard loading component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"The loading component has no keyboard accessibility considerations since it is\nintentionally not operable or navigable. However, Carbon incorporates other\naccessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Status updates"),(0,i.kt)("p",null,"The primary accessibility consideration for the loading component is to convey\nits meaning to assistive technologies so users are aware of changes in status.\nCarbon achieves this by exposing the ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," value (normally “loading”) of the\nspinning wheel SVG image."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9klEQVQoz2NgGNKgd/olhp6pFxli0g4zlOXuZOibfpGhf8Yl8gwL053M0N58mKGr8zhDatsdhskzzjPMWHCZYdrciwyest2kGxhjOp2hpfEIQ1vbcYbE2msCHT2nuPunX2DonXKePANjzWaA6f///zPEBqzXzw9aorxl0yWGw8fvkGdgoMYExgC1fgZ/1X7ZcN1J28L1pkzXZ6hmM2OvJ89AJ5E2BlOWOgZDhmrGeJs53Cn2czjZGRIYZBnyyTPQRbyDwYa3mcGKq5Eh1mw6Q7zlTAYlhiIGfYZq8gz0VeoFa3SX7mKINJzKEGU8jUGVoYTBgICBAPjnUI3rfXm3AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:'the loading wheel with a purple annotation showing "loading"',title:'the loading wheel with a purple annotation showing "loading"',src:"/static/ae2e99b58174ae7341c96e574ce5f243/3cbba/loading-accessibility-1.png",srcSet:["/static/ae2e99b58174ae7341c96e574ce5f243/7fc1e/loading-accessibility-1.png 288w","/static/ae2e99b58174ae7341c96e574ce5f243/a5df1/loading-accessibility-1.png 576w","/static/ae2e99b58174ae7341c96e574ce5f243/3cbba/loading-accessibility-1.png 1152w","/static/ae2e99b58174ae7341c96e574ce5f243/92c65/loading-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(f,{mdxType:"Caption"},"Screen readers hear “loading” when a spinning icon appears on the screen."))),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("p",null,"Design annotations are needed for the following instance."),(0,i.kt)("h3",null,"Convey when loading has completed"),(0,i.kt)("p",null,"When the loading indicator disappears, it conveys a second meaning, which is\n‘not loading’ or ‘finished’. However, especially where loads may take more than\na few seconds, a user who cannot see the icon disappear needs to be made aware\nthe system is no longer “loading” and is thus available for usage."),(0,i.kt)("p",null,"There are several ways to do this. If new content takes focus when the loading\nis completed (for instance after a full page load), then users will understand\nthe system is now available. Annotating what component takes focus will ensure\nthis is properly implemented."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACPklEQVQoz5XPXUiTARQG4Nd9WtbFEmmbCaEkat5IuMwZBvanqK3aV0NhmU1ZOHBSQaSm4kysC8GLkRNJKKiLIKlRFym6i/4ICly6fd9cZbq2ZVuo+0lNJyfaRRma2AsvHM7FwznAiojF4khFItHveWUTExPx39FoNFCpVH/t5HI5lEolWJZd1XUjjP9zgXB7UkKcODlFKEqRaJIBFBNyyrpQqijYOFguz0TJqSoUna6OqipKkOiKt0h0RZtEtce2SiqP7xadZEvjWFYRz7IssyEw85wZVADgMiFNPZyRXMFnp6kte9PVw7LUatcOgMOtB28ERqMR3d3dMJlM64OxFQSNcQ5lnQvYVkXPd9YQCStpfvNZopgzdP1ERxhE4/jonMD4sA0BIljSLkT6Lv3iajCrbgnn7xDKewj7ri7XHtBTV24zdUgbqKuwfamUKBjnHvNKHLreaE7WxFhljQL+aBu4Q60RdFVoOYgnj+5jqN+E8Nw3U2jG4/8+6/k87/e4wj+Cvlnf9KI/GDDrAXyouAlLUg34wnbwR9rWBmf8IfQ9NOHpwCC++qbrJp3uu58mXT0TE67eYHjR4HvN9zs7Hy/YS27UW3Mb60f2XGFtec2w7W+KWvPlUCgErVaLlpYWTE1NwWazYXR0FFzAgy/3nuEF8nZZpfUOLl8/zuXr/dbshtv84WvgDrYK/gn+wgwGA7xer8DhcDB2u515z48xC0SMu+9l9NvU2tghSGMGkBHzCgpmEFkwIwcjGZciyE91vAY3biRDAgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader with annotation on file's remove button stating 'takes focus after loading completes'",title:"File uploader with annotation on file's remove button stating 'takes focus after loading completes'",src:"/static/52b13f297ffc39a226f4c0d880fb4285/3cbba/loading-accessibility-2.png",srcSet:["/static/52b13f297ffc39a226f4c0d880fb4285/7fc1e/loading-accessibility-2.png 288w","/static/52b13f297ffc39a226f4c0d880fb4285/a5df1/loading-accessibility-2.png 576w","/static/52b13f297ffc39a226f4c0d880fb4285/3cbba/loading-accessibility-2.png 1152w","/static/52b13f297ffc39a226f4c0d880fb4285/92c65/loading-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(f,{mdxType:"Caption"},"Annotate if a control takes focus after a loading completes."))),(0,i.kt)("p",null,"Where a change of focus is not appropriate when the loading icon disappears, the\ninformation can be surfaced to users through a non-displayed status message,\nsuch as “finished” or “loading complete,” that can be conveyed to users through\nassistive technology."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"103.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAADJ0lEQVQ4y42UTW/cRBjHfeFNQoW0sed9xi/bF6lpgwotB0ShLgITQePEC4hDIm0qlGTXu3lRwgGOIHEFiSsHPgLiA8DHQSwVCyfUyP6jcWxnu9kiDj8943nG//nPM4/tCCEcCyHEcV3X8Tyviowxh3Pexlmm85RSp9FpBs8SQpZc1132PO+mhTF2k3P+VJo8Y2yZUnpdCPFMJWjVKaWRlPKRMabUWj/WWp9wzk8YY3OxuTr/mHMOIcRvhBBltaYF/9JaQ2ttRe2ip8IYayitIOf8D8aYtsevauZ5XqS1/jMMQwRBUPi+XwZBUBGGYUszp5QqhRAlY6yohX/nnGtb06qojLFICDGpHRSNk/o4EEKec2lzVrB2OG4d1rfUCk7t2kKJC0o9zM5PrR23Dm0NrUPO+cQYA9/3CxuN1uCCw0iJK1deweXoOozd8NRRw3yHjeDMIjBGEZoInaW3cO3VD3A5uAbBGKSQFWKe4NQtT+ranAlyhlD7EJ1lsBsxqFC44C7gZW8RL7kXQRgt6nfOBO0XQgiJlFKTKIrQ6XSKIAhQHx/GaLx3621s313HJ3fu4+M776B7O8anr7+LW1eXCmU0tFJjQoi2Wv95y0YqPH/pAr55/yHw9a/454ufcPLlz1XEV7/gszc+LF5cXICWav6R68YumsZWUmKBLKL7Wowfukf47sEA36dDfPtggB8/+hzx0u3iEnEhhZh/ZNvYURQVdURoSxB1IH2NRcXgKQ5PCxAtcJETcCkK3/iQUp4duXFoBat2MaaoY4t9KfSDc/jmtMXUPEFbQ6WU3a2QUmIWm2uYmi/ssxBiTCnV1c+h/r9FlNIJpbTp/vJ/cv5L2djYsETb29uTfr+PXq9X9Hq9smFra6vc3NwsV1ZWWpIkaSiSJEGSJOMkSXSSJI6zv7/v7O3tRUdHR38fHx/j4ODgCQ4PDzEajdDtdluyLJvlUZZlOssyxxkOh85oNHqh3+/f3dnZifM8v5fnedwwHA7j3d3dOE3TeHV1tcKOa+6laXo/TdM30zR9Lk3TU4cWK5znuRW3jqvYjAeDgbO2tvYE6+vrbZzmX0YJ7ntmJ/HfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Annotation states 'when loading is complete, create a Complete status message for assistive technology",title:"Annotation states 'when loading is complete, create a Complete status message for assistive technology",src:"/static/ffa0d6dedaff31591b6a362978cf46bf/3cbba/loading-accessibility-3.png",srcSet:["/static/ffa0d6dedaff31591b6a362978cf46bf/7fc1e/loading-accessibility-3.png 288w","/static/ffa0d6dedaff31591b6a362978cf46bf/a5df1/loading-accessibility-3.png 576w","/static/ffa0d6dedaff31591b6a362978cf46bf/3cbba/loading-accessibility-3.png 1152w","/static/ffa0d6dedaff31591b6a362978cf46bf/92c65/loading-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(f,{mdxType:"Caption"},"Annotate the information that developers need to convey programmatically to assistive technology."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carbon uses ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-live")," set to “assertive” to immediately surface a loading\nstatus to assistive technologies."),(0,i.kt)("li",{parentName:"ul"},"Carbon provides an SVG ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," value for the loading icon, which is exposed\nthrough the ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-live")," section."),(0,i.kt)("li",{parentName:"ul"},"The completion of the loading state should be conveyed to assistive\ntechnologies. A non-visible status message such as “loading complete” could be\nput in the ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-live")," section or exposed through a ",(0,i.kt)("inlineCode",{parentName:"li"},'role="status"'),".\nAlternatively, focus could be set to an appropriate element."),(0,i.kt)("li",{parentName:"ul"},"See the Equal Access Toolkit information on\n",(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/toolkit/develop/dynamic-updates/#role-status"},"status messages"),".")))}u.isMDXComponent=!0}}]);