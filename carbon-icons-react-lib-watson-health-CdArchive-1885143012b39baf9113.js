"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[90116,55323,84131,8544,38486,78271,55310,2733,32834,71491,12313,55779,16211,73946,41498,82862,65326],{88192:function(e,t,r){var n=r(95752),a=r(45697),i=r(67294);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=l(a),u=l(i);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=["className","children","tabIndex"],b=["tabindex"],g=u.default.forwardRef((function(e,t){var r=e.className,a=e.children,i=e.tabIndex,l=d(e,p),o=n.getAttributes(f(f({},l),{},{tabindex:i})),c=o.tabindex,s=d(o,b);return r&&(s.className=r),null!=c&&(s.tabIndex=c),t&&(s.ref=t),u.default.createElement("svg",s,a)}));g.displayName="Icon",g.propTypes={"aria-hidden":o.default.string,"aria-label":o.default.string,"aria-labelledby":o.default.string,children:o.default.node,className:o.default.string,height:o.default.oneOfType([o.default.number,o.default.string]),preserveAspectRatio:o.default.string,tabIndex:o.default.string,viewBox:o.default.string,width:o.default.oneOfType([o.default.number,o.default.string]),xmlns:o.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var y={size:o.default.oneOfType([o.default.number,o.default.string])};t.Icon=g,t._objectSpread2=f,t._objectWithoutProperties=d,t.iconPropTypes=y},47688:function(e,t,r){var n=r(88192),a=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(95752),r(45697);var l,o,u,c=i(a),f=["children","size"],s=c.default.forwardRef((function(e,t){var r=e.children,a=e.size,i=void 0===a?16:a,s=n._objectWithoutProperties(e,f);return c.default.createElement(n.Icon,n._objectSpread2({width:i,height:i,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},s),l||(l=c.default.createElement("path",{d:"M16,28A12,12,0,1,1,28,16,12,12,0,0,1,16,28ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z"})),o||(o=c.default.createElement("path",{d:"M16,22a6,6,0,1,1,6-6A6,6,0,0,1,16,22Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,16,12Z"})),u||(u=c.default.createElement("circle",{cx:"16",cy:"16",r:"2"})),r)}));s.propTypes=n.iconPropTypes,e.exports=s}}]);