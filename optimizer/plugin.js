(()=>{var n=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var E=(t,e)=>{for(var o in e)n(t,o,{get:e[o],enumerable:!0})},C=(t,e,o,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of y(e))!h.call(t,p)&&p!==o&&n(t,p,{get:()=>e[p],enumerable:!(d=a(e,p))||d.enumerable});return t};var c=t=>C(n({},"__esModule",{value:!0}),t);var u={};E(u,{onLoad:()=>f,onUnload:()=>s});var l=t=>function(...e){return typeof e[0].className=="string"&&e[0].className.indexOf("activity")!==-1?setTimeout(()=>t.apply(this,e),100):t.apply(this,e)},i,m,r;function f(){i=Element.prototype.removeChild,m=Element.prototype.append,r=Element.prototype.appendChild,Element.prototype.removeChild=l(Element.prototype.removeChild),Element.prototype.append=l(Element.prototype.append),Element.prototype.appendChild=l(Element.prototype.appendChild)}function s(){Element.prototype.removeChild=i,Element.prototype.append=m,Element.prototype.appendChild=r}return c(u);})();