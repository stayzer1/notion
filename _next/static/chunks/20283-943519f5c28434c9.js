(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20283,91777,7044,56480,52367,91149,4528,58213,48384,86241,4964,64425,67800],{22805:function(t){function e(t){if((t=t||{}).negativeType=t.negativeType||("R"===t.negative?"right":"left"),"string"!=typeof t.negativeLeftSymbol)switch(t.negativeType){case"left":t.negativeLeftSymbol="-";break;case"brackets":t.negativeLeftSymbol="(";break;default:t.negativeLeftSymbol=""}if("string"!=typeof t.negativeRightSymbol)switch(t.negativeType){case"right":t.negativeRightSymbol="-";break;case"brackets":t.negativeRightSymbol=")";break;default:t.negativeRightSymbol=""}function e(e,n){if(n=n||{},!e&&0!==e)return"";var r,i,o=[],l="-"===(e=""+e).charAt(0);return e=e.replace(/^\-/g,""),t.negativeLeftOut||n.noUnits||o.push(t.prefix),l&&o.push(t.negativeLeftSymbol),t.negativeLeftOut&&!n.noUnits&&o.push(t.prefix),e=e.split("."),null!=t.round&&function(t,e){if(t[1]&&e>=0&&t[1].length>e){var n=t[1].slice(0,e);if(+t[1].substr(e,1)>=5){for(var r="";"0"===n.charAt(0);)r+="0",n=n.substr(1);(n=r+(n=+n+1+"")).length>e&&(t[0]=+t[0]+ +n.charAt(0)+"",n=n.substring(1))}t[1]=n}}(e,t.round),null!=t.truncate&&(e[1]=(r=e[1],i=t.truncate,(r&&(r+=""),r&&r.length>i)?r.substr(0,i):r)),t.padLeft>0&&(e[0]=function(t,e){t+="";for(var n=[];n.length+t.length<e;)n.push("0");return n.join("")+t}(e[0],t.padLeft)),t.padRight>0&&(e[1]=function(t,e){t?t+="":t="";for(var n=[];n.length+t.length<e;)n.push("0");return t+n.join("")}(e[1],t.padRight)),!n.noSeparator&&e[1]&&(e[1]=function(t,e){if(t+="",!e)return t;for(var n=/(\d{3})(\d+)/;n.test(t);)t=t.replace(n,"$1"+e+"$2");return t}(e[1],t.decimalsSeparator)),!n.noSeparator&&e[0]&&(e[0]=function(t,e){if(t+="",!e)return t;for(var n=/(\d+)(\d{3})/;n.test(t);)t=t.replace(n,"$1"+e+"$2");return t}(e[0],t.integerSeparator)),o.push(e[0]),e[1]&&(o.push(t.decimal),o.push(e[1])),t.negativeRightOut&&!n.noUnits&&o.push(t.suffix),l&&o.push(t.negativeRightSymbol),t.negativeRightOut||n.noUnits||o.push(t.suffix),o.join("")}return"boolean"!=typeof t.negativeLeftOut&&(t.negativeLeftOut=!1!==t.negativeOut),"boolean"!=typeof t.negativeRightOut&&(t.negativeRightOut=!1!==t.negativeOut),t.prefix=t.prefix||"",t.suffix=t.suffix||"","string"!=typeof t.integerSeparator&&(t.integerSeparator="string"==typeof t.separator?t.separator:","),t.decimalsSeparator="string"==typeof t.decimalsSeparator?t.decimalsSeparator:"",t.decimal=t.decimal||".",t.padLeft=t.padLeft||-1,t.padRight=t.padRight||-1,e.negative=t.negative,e.negativeOut=t.negativeOut,e.negativeType=t.negativeType,e.negativeLeftOut=t.negativeLeftOut,e.negativeLeftSymbol=t.negativeLeftSymbol,e.negativeRightOut=t.negativeRightOut,e.negativeRightSymbol=t.negativeRightSymbol,e.prefix=t.prefix,e.suffix=t.suffix,e.separate=t.separate,e.integerSeparator=t.integerSeparator,e.decimalsSeparator=t.decimalsSeparator,e.decimal=t.decimal,e.padLeft=t.padLeft,e.padRight=t.padRight,e.truncate=t.truncate,e.round=t.round,e.unformat=function(e,n){n=n||[],t.allowedSeparators&&t.allowedSeparators.forEach(function(t){n.push(t)}),n.push(t.integerSeparator),n.push(t.decimalsSeparator);var r=e=(e=e.replace(t.prefix,"")).replace(t.suffix,"");do{e=r;for(var i=0;i<n.length;i++)r=r.replace(n[i],"")}while(r!=e);return e},e}t.exports=e,t.exports.default=e},97729:function(t,e,n){t.exports=n(50044)},74751:function(t){(function(){var e,n,r;r=[],e={},t.exports=n=function(t,n,i){var o,l,a,s,c,u;if(null==i&&(i=!0),"string"==typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"};u=n[0],o=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"};u=n[0],o=n[1]}else u=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||e.thousands,o=(null!=n?n.decimal:void 0)||e.decimal;return(null==(a=r[s=""+u+o+i])&&(l=i?3:1,a=r[s]=RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+u+"\\d{"+l+",3})+)|\\d*))(?:\\"+o+"(\\d*))?\\s*$")),null!=(c=t.match(a))&&3===c.length)?parseFloat(c[1].replace(RegExp("\\"+u,"g"),"")+"."+c[2]):0/0},t.exports.setOptions=function(t){var n,r;for(n in t)r=t[n],e[n]=r},t.exports.factoryReset=function(){e={thousands:",",decimal:"."}},t.exports.withOptions=function(t,e){return null==e&&(e=!0),function(r){return n(r,t,e)}},t.exports.factoryReset()}).call(this)},20189:function(t,e,n){"use strict";function r(t){return t.split("-")[1]}function i(t){return t.split("-")[0]}function o(t){return["top","bottom"].includes(i(t))?"x":"y"}function l(t,e,n){let l,{reference:a,floating:s}=t,c=a.x+a.width/2-s.width/2,u=a.y+a.height/2-s.height/2,f=o(e),d="y"===f?"height":"width",h=a[d]/2-s[d]/2,g="x"===f;switch(i(e)){case"top":l={x:c,y:a.y-s.height};break;case"bottom":l={x:c,y:a.y+a.height};break;case"right":l={x:a.x+a.width,y:u};break;case"left":l={x:a.x-s.width,y:u};break;default:l={x:a.x,y:a.y}}switch(r(e)){case"start":l[f]-=h*(n&&g?-1:1);break;case"end":l[f]+=h*(n&&g?-1:1)}return l}n.d(e,{JB:function(){return s},dp:function(){return d},oo:function(){return a}});let a=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,s=o.filter(Boolean),c=await (null==a.isRTL?void 0:a.isRTL(e)),u=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:d}=l(u,r,c),h=r,g={},p=0;for(let n=0;n<s.length;n++){let{name:o,fn:m}=s[n],{x:y,y:v,data:w,reset:x}=await m({x:f,y:d,initialPlacement:r,placement:h,strategy:i,middlewareData:g,rects:u,platform:a,elements:{reference:t,floating:e}});f=null!=y?y:f,d=null!=v?v:d,g={...g,[o]:{...g[o],...w}},x&&p<=50&&(p++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(u=!0===x.rects?await a.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:f,y:d}=l(u,h,c)),n=-1)}return{x:f,y:d,placement:h,strategy:i,middlewareData:g}};function s(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function c(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:h=!1,padding:g=0}=e,p="number"!=typeof g?{top:0,right:0,bottom:0,left:0,...g}:{top:g,right:g,bottom:g,left:g},m=a[h?"floating"===d?"reference":"floating":d],y=s(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(m)))||n?m:m.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:c})),v="floating"===d?{...l.floating,x:r,y:i}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),x=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},b=s(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:c}):v);return{top:(y.top-b.top+p.top)/x.y,bottom:(b.bottom-y.bottom+p.bottom)/x.y,left:(y.left-b.left+p.left)/x.x,right:(b.right-y.right+p.right)/x.x}}let u=Math.min,f=Math.max;["top","right","bottom","left"].reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);let d=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){let n,l;let{placement:a,rects:s,platform:d,elements:h}=e,{apply:g=()=>{},...p}=t,m=await c(e,p),y=i(a),v=r(a),w="x"===o(a),{width:x,height:b}=s.floating;"top"===y||"bottom"===y?(n=y,l=v===(await (null==d.isRTL?void 0:d.isRTL(h.floating))?"start":"end")?"left":"right"):(l=y,n="end"===v?"top":"bottom");let R=b-m[n],S=x-m[l],E=R,L=S;if(w?L=u(x-m.right-m.left,S):E=u(b-m.bottom-m.top,R),!e.middlewareData.shift&&!v){let t=f(m.left,0),e=f(m.right,0),n=f(m.top,0),r=f(m.bottom,0);w?L=x-2*(0!==t||0!==e?t+e:f(m.left,m.right)):E=b-2*(0!==n||0!==r?n+r:f(m.top,m.bottom))}await g({...e,availableWidth:L,availableHeight:E});let T=await d.getDimensions(h.floating);return x!==T.width||b!==T.height?{reset:{rects:!0}}:{}}}}},40771:function(t,e,n){"use strict";let r;n.d(e,{Me:function(){return W},oo:function(){return _}});var i=n(20189);function o(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function l(t){return o(t).getComputedStyle(t)}let a=Math.min,s=Math.max,c=Math.round;function u(t){let e=l(t),n=parseFloat(e.width),r=parseFloat(e.height),i=t.offsetWidth,o=t.offsetHeight,a=c(n)!==i||c(r)!==o;return a&&(n=i,r=o),{width:n,height:r,fallback:a}}function f(t){return p(t)?(t.nodeName||"").toLowerCase():""}function d(){if(r)return r;let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?r=t.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function h(t){return t instanceof o(t).HTMLElement}function g(t){return t instanceof o(t).Element}function p(t){return t instanceof o(t).Node}function m(t){return"undefined"!=typeof ShadowRoot&&(t instanceof o(t).ShadowRoot||t instanceof ShadowRoot)}function y(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=l(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function v(t){let e=/firefox/i.test(d()),n=l(t),r=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!r&&"none"!==r||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some(t=>n.willChange.includes(t))||["paint","layout","strict","content"].some(t=>{let e=n.contain;return null!=e&&e.includes(t)})}function w(){return/^((?!chrome|android).)*safari/i.test(d())}function x(t){return["html","body","#document"].includes(f(t))}function b(t){return g(t)?t:t.contextElement}let R={x:1,y:1};function S(t){let e=b(t);if(!h(e))return R;let n=e.getBoundingClientRect(),{width:r,height:i,fallback:o}=u(e),l=(o?c(n.width):n.width)/r,a=(o?c(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}function E(t,e,n,r){var i,l;void 0===e&&(e=!1),void 0===n&&(n=!1);let a=t.getBoundingClientRect(),s=b(t),c=R;e&&(r?g(r)&&(c=S(r)):c=S(t));let u=s?o(s):window,f=w()&&n,d=(a.left+(f&&(null==(i=u.visualViewport)?void 0:i.offsetLeft)||0))/c.x,h=(a.top+(f&&(null==(l=u.visualViewport)?void 0:l.offsetTop)||0))/c.y,p=a.width/c.x,m=a.height/c.y;if(s){let t=o(s),e=r&&g(r)?o(r):r,n=t.frameElement;for(;n&&r&&e!==t;){let t=S(n),e=n.getBoundingClientRect(),r=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(r.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(r.paddingTop))*t.y,d*=t.x,h*=t.y,p*=t.x,m*=t.y,d+=e.x,h+=e.y,n=o(n).frameElement}}return{width:p,height:m,top:h,right:d+p,bottom:h+m,left:d,x:d,y:h}}function L(t){return((p(t)?t.ownerDocument:t.document)||window.document).documentElement}function T(t){return g(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function O(t){return E(L(t)).left+T(t).scrollLeft}function A(t){if("html"===f(t))return t;let e=t.assignedSlot||t.parentNode||m(t)&&t.host||L(t);return m(e)?e.host:e}function k(t,e){var n;void 0===e&&(e=[]);let r=function t(e){let n=A(e);return x(n)?n.ownerDocument.body:h(n)&&y(n)?n:t(n)}(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),l=o(r);return i?e.concat(l,l.visualViewport||[],y(r)?r:[]):e.concat(r,k(r))}function B(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=o(t),r=L(t),i=n.visualViewport,l=r.clientWidth,a=r.clientHeight,s=0,c=0;if(i){l=i.width,a=i.height;let t=w();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:l,height:a,x:s,y:c}}(t,n);else if("document"===e)r=function(t){let e=L(t),n=T(t),r=t.ownerDocument.body,i=s(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=s(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+O(t),c=-n.scrollTop;return"rtl"===l(r).direction&&(a+=s(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:c}}(L(t));else if(g(e))r=function(t,e){let n=E(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=h(t)?S(t):{x:1,y:1};return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n={...e};if(w()){var a,c;let e=o(t);n.x-=(null==(a=e.visualViewport)?void 0:a.offsetLeft)||0,n.y-=(null==(c=e.visualViewport)?void 0:c.offsetTop)||0}r=n}return(0,i.JB)(r)}function C(t,e){return h(t)&&"fixed"!==l(t).position?e?e(t):t.offsetParent:null}function D(t,e){let n=o(t),r=C(t,e);for(;r&&["table","td","th"].includes(f(r))&&"static"===l(r).position;)r=C(r,e);return r&&("html"===f(r)||"body"===f(r)&&"static"===l(r).position&&!v(r))?n:r||function(t){let e=A(t);for(;h(e)&&!x(e);){if(v(e))return e;e=A(e)}return null}(t)||n}let P={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t,o=[..."clippingAncestors"===n?function(t,e){let n=e.get(t);if(n)return n;let r=k(t).filter(t=>g(t)&&"body"!==f(t)),i=null,o="fixed"===l(t).position,a=o?A(t):t;for(;g(a)&&!x(a);){let t=l(a),e=v(a);(o?e||i:e||"static"!==t.position||!i||!["absolute","fixed"].includes(i.position))?i=t:r=r.filter(t=>t!==a),a=A(a)}return e.set(t,r),r}(e,this._c):[].concat(n),r],c=o[0],u=o.reduce((t,n)=>{let r=B(e,n,i);return t.top=s(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=s(r.left,t.left),t},B(e,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:r}=t,i=h(n),o=L(n);if(n===o)return e;let l={scrollLeft:0,scrollTop:0},a={x:1,y:1},s={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==f(n)||y(o))&&(l=T(n)),h(n))){let t=E(n);a=S(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-l.scrollLeft*a.x+s.x,y:e.y*a.y-l.scrollTop*a.y+s.y}},isElement:g,getDimensions:function(t){return h(t)?u(t):t.getBoundingClientRect()},getOffsetParent:D,getDocumentElement:L,getScale:S,async getElementRects(t){let{reference:e,floating:n,strategy:r}=t,i=this.getOffsetParent||D,o=this.getDimensions;return{reference:function(t,e,n){let r=h(e),i=L(e),o=E(t,!0,"fixed"===n,e),l={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(r||!r&&"fixed"!==n){if(("body"!==f(e)||y(i))&&(l=T(e)),h(e)){let t=E(e,!0);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=O(i))}return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}(e,await i(n),r),floating:{x:0,y:0,...await o(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===l(t).direction};function W(t,e,n,r){void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:l=!0,animationFrame:a=!1}=r,s=i&&!a,c=s||o?[...g(t)?k(t):t.contextElement?k(t.contextElement):[],...k(e)]:[];c.forEach(t=>{s&&t.addEventListener("scroll",n,{passive:!0}),o&&t.addEventListener("resize",n)});let u,f=null;if(l){let r=!0;f=new ResizeObserver(()=>{r||n(),r=!1}),g(t)&&!a&&f.observe(t),g(t)||!t.contextElement||a||f.observe(t.contextElement),f.observe(e)}let d=a?E(t):null;return a&&function e(){let r=E(t);d&&(r.x!==d.x||r.y!==d.y||r.width!==d.width||r.height!==d.height)&&n(),d=r,u=requestAnimationFrame(e)}(),n(),()=>{var t;c.forEach(t=>{s&&t.removeEventListener("scroll",n),o&&t.removeEventListener("resize",n)}),null==(t=f)||t.disconnect(),f=null,a&&cancelAnimationFrame(u)}}let _=(t,e,n)=>{let r=new Map,o={platform:P,...n},l={...o.platform,_c:r};return(0,i.oo)(t,e,{...o,platform:l})}},50944:function(t,e,n){"use strict";n.d(e,{vB:function(){return o},qC:function(){return f}});let r="object"==typeof self?self:globalThis,i=(t,e)=>{let n=(e,n)=>(t.set(n,e),e),i=o=>{if(t.has(o))return t.get(o);let[l,a]=e[o];switch(l){case 0:case -1:return n(a,o);case 1:{let t=n([],o);for(let e of a)t.push(i(e));return t}case 2:{let t=n({},o);for(let[e,n]of a)t[i(e)]=i(n);return t}case 3:return n(new Date(a),o);case 4:{let{source:t,flags:e}=a;return n(new RegExp(t,e),o)}case 5:{let t=n(new Map,o);for(let[e,n]of a)t.set(i(e),i(n));return t}case 6:{let t=n(new Set,o);for(let e of a)t.add(i(e));return t}case 7:{let{name:t,message:e}=a;return n(new r[t](e),o)}case 8:return n(BigInt(a),o);case"BigInt":return n(Object(BigInt(a)),o)}return n(new r[l](a),o)};return i},o=t=>i(new Map,t)(0),{toString:l}={},{keys:a}=Object,s=t=>{let e=typeof t;if("object"!==e||!t)return[0,e];let n=l.call(t).slice(8,-1);switch(n){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},c=([t,e])=>0===t&&("function"===e||"symbol"===e),u=(t,e,n,r)=>{let i=(t,e)=>{let i=r.push(t)-1;return n.set(e,i),i},o=r=>{if(n.has(r))return n.get(r);let[l,u]=s(r);switch(l){case 0:{let e=r;switch(u){case"bigint":l=8,e=r.toString();break;case"function":case"symbol":if(t)throw TypeError("unable to serialize "+u);e=null;break;case"undefined":return i([-1],r)}return i([l,e],r)}case 1:{if(u)return i([u,[...r]],r);let t=[],e=i([l,t],r);for(let e of r)t.push(o(e));return e}case 2:{if(u)switch(u){case"BigInt":return i([u,r.toString()],r);case"Boolean":case"Number":case"String":return i([u,r.valueOf()],r)}if(e&&"toJSON"in r)return o(r.toJSON());let n=[],f=i([l,n],r);for(let e of a(r))(t||!c(s(r[e])))&&n.push([o(e),o(r[e])]);return f}case 3:return i([l,r.toISOString()],r);case 4:{let{source:t,flags:e}=r;return i([l,{source:t,flags:e}],r)}case 5:{let e=[],n=i([l,e],r);for(let[n,i]of r)(t||!(c(s(n))||c(s(i))))&&e.push([o(n),o(i)]);return n}case 6:{let e=[],n=i([l,e],r);for(let n of r)(t||!c(s(n)))&&e.push(o(n));return n}}let{message:f}=r;return i([l,{name:u,message:f}],r)};return o},f=(t,{json:e,lossy:n}={})=>{let r=[];return u(!(e||n),!!e,new Map,r)(t),r};"function"==typeof structuredClone||((t,e)=>o(f(t,e)))},31133:function(t,e,n){"use strict";n.d(e,{Un:function(){return w},dR:function(){return v}});var r=function(){return"undefined"==typeof window},i=function(t){t=t||navigator.userAgent;var e=/(iPad).*OS\s([\d_]+)/.test(t);return{ios:!e&&/(iPhone\sOS)\s([\d_]+)/.test(t)||e,android:/(Android);?[\s/]+([\d.]+)?/.test(t)}},o=0,l=0,a=0,s=null,c=!1,u=[],f=function(t){if(r())return!1;if(!t)throw Error("options must be provided");var e=!1,n={get passive(){e=!0;return}},i=function(){},o="__TUA_BSL_TEST_PASSIVE__";window.addEventListener(o,i,n),window.removeEventListener(o,i,n);var l=t.capture;return e?t:void 0!==l&&l}({passive:!1}),d=!r()&&"scrollBehavior"in document.documentElement.style,h=function(){var t=document.documentElement,e=Object.assign({},t.style),n=window.innerWidth-t.clientWidth,r=parseInt(window.getComputedStyle(t).paddingRight,10);return t.style.overflow="hidden",t.style.boxSizing="border-box",t.style.paddingRight="".concat(n+r,"px"),function(){["overflow","boxSizing","paddingRight"].forEach(function(n){t.style[n]=e[n]||""})}},g=function(t){var e=document.documentElement,n=document.body,r=e.scrollTop||n.scrollTop,i=Object.assign({},e.style),o=Object.assign({},n.style);return e.style.height="100%",e.style.overflow="hidden",n.style.top="-".concat(r,"px"),n.style.width="100%",n.style.height="auto",n.style.position="fixed",n.style.overflow=(null==t?void 0:t.overflowType)||"hidden",function(){e.style.height=i.height||"",e.style.overflow=i.overflow||"",["top","width","height","overflow","position"].forEach(function(t){n.style[t]=o[t]||""}),d?window.scrollTo({top:r,behavior:"instant"}):window.scrollTo(0,r)}},p=function(t){t.cancelable&&t.preventDefault()},m=function(t,e){if(e){var n=e.scrollTop,r=e.scrollLeft,i=e.scrollWidth,o=e.scrollHeight,s=e.clientWidth,c=e.clientHeight,u=t.targetTouches[0].clientX-a,f=t.targetTouches[0].clientY-l,d=Math.abs(f)>Math.abs(u);if(d&&(f>0&&0===n||f<0&&n+c+1>=o)||!d&&(u>0&&0===r||u<0&&r+s+1>=i))return p(t)}return t.stopPropagation(),!0},y=function(t){if(t)return},v=function(t,e){r()||(y(t),i().ios?(t&&(Array.isArray(t)?t:[t]).forEach(function(t){t&&-1===u.indexOf(t)&&(t.ontouchstart=function(t){l=t.targetTouches[0].clientY,a=t.targetTouches[0].clientX},t.ontouchmove=function(e){1===e.targetTouches.length&&m(e,t)},u.push(t))}),c||(document.addEventListener("touchmove",p,f),c=!0)):o<=0&&(s=i().android?g(e):h()),o+=1)},w=function(t){if(!r()&&(y(t),!((o-=1)>0))){if(!i().ios&&"function"==typeof s){s();return}t&&(Array.isArray(t)?t:[t]).forEach(function(t){var e=u.indexOf(t);-1!==e&&(t.ontouchmove=null,t.ontouchstart=null,u.splice(e,1))}),c&&(document.removeEventListener("touchmove",p,f),c=!1)}}}}]);