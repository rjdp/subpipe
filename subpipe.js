if (window.jQuery) {}else{
	/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
	}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
	void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
}

/*adapter.js 6.4.4*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).adapter=e()}}(function(){return function(){return function e(t,r,n){function i(o,s){if(!r[o]){if(!t[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[o]={exports:{}};t[o][0].call(p.exports,function(e){return i(t[o][1][e]||e)},p,p.exports,e,t,r,n)}return r[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}}()({1:[function(e,t,r){"use strict";var n=e("sdp");function i(e,t,r,i,a){var o=n.writeRtpDescription(e.kind,t);if(o+=n.writeIceParameters(e.iceGatherer.getLocalParameters()),o+=n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===r?"actpass":a||"active"),o+="a=mid:"+e.mid+"\r\n",e.rtpSender&&e.rtpReceiver?o+="a=sendrecv\r\n":e.rtpSender?o+="a=sendonly\r\n":e.rtpReceiver?o+="a=recvonly\r\n":o+="a=inactive\r\n",e.rtpSender){var s=e.rtpSender._initialTrackId||e.rtpSender.track.id;e.rtpSender._initialTrackId=s;var c="msid:"+(i?i.id:"-")+" "+s+"\r\n";o+="a="+c,o+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+c,e.sendEncodingParameters[0].rtx&&(o+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+c,o+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return o+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+n.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(o+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+n.localCName+"\r\n"),o}function a(e,t){var r={codecs:[],headerExtensions:[],fecMechanisms:[]},n=function(e,t){e=parseInt(e,10);for(var r=0;r<t.length;r++)if(t[r].payloadType===e||t[r].preferredPayloadType===e)return t[r]};return e.codecs.forEach(function(i){for(var a=0;a<t.codecs.length;a++){var o=t.codecs[a];if(i.name.toLowerCase()===o.name.toLowerCase()&&i.clockRate===o.clockRate){if("rtx"===i.name.toLowerCase()&&i.parameters&&o.parameters.apt&&(s=i,c=o,d=e.codecs,p=t.codecs,u=void 0,f=void 0,u=n(s.parameters.apt,d),f=n(c.parameters.apt,p),!u||!f||u.name.toLowerCase()!==f.name.toLowerCase()))continue;(o=JSON.parse(JSON.stringify(o))).numChannels=Math.min(i.numChannels,o.numChannels),r.codecs.push(o),o.rtcpFeedback=o.rtcpFeedback.filter(function(e){for(var t=0;t<i.rtcpFeedback.length;t++)if(i.rtcpFeedback[t].type===e.type&&i.rtcpFeedback[t].parameter===e.parameter)return!0;return!1});break}}var s,c,d,p,u,f}),e.headerExtensions.forEach(function(e){for(var n=0;n<t.headerExtensions.length;n++){var i=t.headerExtensions[n];if(e.uri===i.uri){r.headerExtensions.push(i);break}}}),r}function o(e,t,r){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(r)}function s(e,t){var r=e.getRemoteCandidates().find(function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type});return r||e.addRemoteCandidate(t),!r}function c(e,t){var r=new Error(t);return r.name=e,r.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],r}t.exports=function(e,t){function r(t,r){r.addTrack(t),r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack",{track:t}))}function d(t,r,n,i){var a=new Event("track");a.track=r,a.receiver=n,a.transceiver={receiver:n},a.streams=i,e.setTimeout(function(){t._dispatchEvent("track",a)})}var p=function(r){var i,a,o,s=this,d=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){s[e]=d[e].bind(d)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",r=JSON.parse(JSON.stringify(r||{})),this.usingBundle="max-bundle"===r.bundlePolicy,"negotiate"===r.rtcpMuxPolicy)throw c("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(r.rtcpMuxPolicy||(r.rtcpMuxPolicy="require"),r.iceTransportPolicy){case"all":case"relay":break;default:r.iceTransportPolicy="all"}switch(r.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:r.bundlePolicy="balanced"}if(r.iceServers=(i=r.iceServers||[],a=t,o=!1,(i=JSON.parse(JSON.stringify(i))).filter(function(e){if(e&&(e.urls||e.url)){var t=e.urls||e.url;e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var r="string"==typeof t;return r&&(t=[t]),t=t.filter(function(e){return 0!==e.indexOf("turn:")||-1===e.indexOf("transport=udp")||-1!==e.indexOf("turn:[")||o?0===e.indexOf("stun:")&&a>=14393&&-1===e.indexOf("?transport=udp"):(o=!0,!0)}),delete e.url,e.urls=r?t[0]:t,!!t.length}})),this._iceGatherers=[],r.iceCandidatePoolSize)for(var p=r.iceCandidatePoolSize;p>0;p--)this._iceGatherers.push(new e.RTCIceGatherer({iceServers:r.iceServers,gatherPolicy:r.iceTransportPolicy}));else r.iceCandidatePoolSize=0;this._config=r,this.transceivers=[],this._sdpSessionId=n.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(p.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(p.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),p.prototype.onicecandidate=null,p.prototype.onaddstream=null,p.prototype.ontrack=null,p.prototype.onremovestream=null,p.prototype.onsignalingstatechange=null,p.prototype.oniceconnectionstatechange=null,p.prototype.onconnectionstatechange=null,p.prototype.onicegatheringstatechange=null,p.prototype.onnegotiationneeded=null,p.prototype.ondatachannel=null,p.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},p.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",e)},p.prototype.getConfiguration=function(){return this._config},p.prototype.getLocalStreams=function(){return this.localStreams},p.prototype.getRemoteStreams=function(){return this.remoteStreams},p.prototype._createTransceiver=function(e,t){var r=this.transceivers.length>0,n={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&r)n.iceTransport=this.transceivers[0].iceTransport,n.dtlsTransport=this.transceivers[0].dtlsTransport;else{var i=this._createIceAndDtlsTransports();n.iceTransport=i.iceTransport,n.dtlsTransport=i.dtlsTransport}return t||this.transceivers.push(n),n},p.prototype.addTrack=function(t,r){if(this._isClosed)throw c("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var n;if(this.transceivers.find(function(e){return e.track===t}))throw c("InvalidAccessError","Track already exists.");for(var i=0;i<this.transceivers.length;i++)this.transceivers[i].track||this.transceivers[i].kind!==t.kind||(n=this.transceivers[i]);return n||(n=this._createTransceiver(t.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(r)&&this.localStreams.push(r),n.track=t,n.stream=r,n.rtpSender=new e.RTCRtpSender(t,n.dtlsTransport),n.rtpSender},p.prototype.addStream=function(e){var r=this;if(t>=15025)e.getTracks().forEach(function(t){r.addTrack(t,e)});else{var n=e.clone();e.getTracks().forEach(function(e,t){var r=n.getTracks()[t];e.addEventListener("enabled",function(e){r.enabled=e.enabled})}),n.getTracks().forEach(function(e){r.addTrack(e,n)})}},p.prototype.removeTrack=function(t){if(this._isClosed)throw c("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(t instanceof e.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var r=this.transceivers.find(function(e){return e.rtpSender===t});if(!r)throw c("InvalidAccessError","Sender was not created by this connection.");var n=r.stream;r.rtpSender.stop(),r.rtpSender=null,r.track=null,r.stream=null,-1===this.transceivers.map(function(e){return e.stream}).indexOf(n)&&this.localStreams.indexOf(n)>-1&&this.localStreams.splice(this.localStreams.indexOf(n),1),this._maybeFireNegotiationNeeded()},p.prototype.removeStream=function(e){var t=this;e.getTracks().forEach(function(e){var r=t.getSenders().find(function(t){return t.track===e});r&&t.removeTrack(r)})},p.prototype.getSenders=function(){return this.transceivers.filter(function(e){return!!e.rtpSender}).map(function(e){return e.rtpSender})},p.prototype.getReceivers=function(){return this.transceivers.filter(function(e){return!!e.rtpReceiver}).map(function(e){return e.rtpReceiver})},p.prototype._createIceGatherer=function(t,r){var n=this;if(r&&t>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var i=new e.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(i,"state",{value:"new",writable:!0}),this.transceivers[t].bufferedCandidateEvents=[],this.transceivers[t].bufferCandidates=function(e){var r=!e.candidate||0===Object.keys(e.candidate).length;i.state=r?"completed":"gathering",null!==n.transceivers[t].bufferedCandidateEvents&&n.transceivers[t].bufferedCandidateEvents.push(e)},i.addEventListener("localcandidate",this.transceivers[t].bufferCandidates),i},p.prototype._gather=function(t,r){var i=this,a=this.transceivers[r].iceGatherer;if(!a.onlocalcandidate){var o=this.transceivers[r].bufferedCandidateEvents;this.transceivers[r].bufferedCandidateEvents=null,a.removeEventListener("localcandidate",this.transceivers[r].bufferCandidates),a.onlocalcandidate=function(e){if(!(i.usingBundle&&r>0)){var o=new Event("icecandidate");o.candidate={sdpMid:t,sdpMLineIndex:r};var s=e.candidate,c=!s||0===Object.keys(s).length;if(c)"new"!==a.state&&"gathering"!==a.state||(a.state="completed");else{"new"===a.state&&(a.state="gathering"),s.component=1,s.ufrag=a.getLocalParameters().usernameFragment;var d=n.writeCandidate(s);o.candidate=Object.assign(o.candidate,n.parseCandidate(d)),o.candidate.candidate=d,o.candidate.toJSON=function(){return{candidate:o.candidate.candidate,sdpMid:o.candidate.sdpMid,sdpMLineIndex:o.candidate.sdpMLineIndex,usernameFragment:o.candidate.usernameFragment}}}var p=n.getMediaSections(i._localDescription.sdp);p[o.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+o.candidate.candidate+"\r\n",i._localDescription.sdp=n.getDescription(i._localDescription.sdp)+p.join("");var u=i.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});"gathering"!==i.iceGatheringState&&(i.iceGatheringState="gathering",i._emitGatheringStateChange()),c||i._dispatchEvent("icecandidate",o),u&&(i._dispatchEvent("icecandidate",new Event("icecandidate")),i.iceGatheringState="complete",i._emitGatheringStateChange())}},e.setTimeout(function(){o.forEach(function(e){a.onlocalcandidate(e)})},0)}},p.prototype._createIceAndDtlsTransports=function(){var t=this,r=new e.RTCIceTransport(null);r.onicestatechange=function(){t._updateIceConnectionState(),t._updateConnectionState()};var n=new e.RTCDtlsTransport(r);return n.ondtlsstatechange=function(){t._updateConnectionState()},n.onerror=function(){Object.defineProperty(n,"state",{value:"failed",writable:!0}),t._updateConnectionState()},{iceTransport:r,dtlsTransport:n}},p.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer;t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer);var r=this.transceivers[e].iceTransport;r&&(delete r.onicestatechange,delete this.transceivers[e].iceTransport);var n=this.transceivers[e].dtlsTransport;n&&(delete n.ondtlsstatechange,delete n.onerror,delete this.transceivers[e].dtlsTransport)},p.prototype._transceive=function(e,r,i){var o=a(e.localCapabilities,e.remoteCapabilities);r&&e.rtpSender&&(o.encodings=e.sendEncodingParameters,o.rtcp={cname:n.localCName,compound:e.rtcpParameters.compound},e.recvEncodingParameters.length&&(o.rtcp.ssrc=e.recvEncodingParameters[0].ssrc),e.rtpSender.send(o)),i&&e.rtpReceiver&&o.codecs.length>0&&("video"===e.kind&&e.recvEncodingParameters&&t<15019&&e.recvEncodingParameters.forEach(function(e){delete e.rtx}),e.recvEncodingParameters.length?o.encodings=e.recvEncodingParameters:o.encodings=[{}],o.rtcp={compound:e.rtcpParameters.compound},e.rtcpParameters.cname&&(o.rtcp.cname=e.rtcpParameters.cname),e.sendEncodingParameters.length&&(o.rtcp.ssrc=e.sendEncodingParameters[0].ssrc),e.rtpReceiver.receive(o))},p.prototype.setLocalDescription=function(e){var t,r,i=this;if(-1===["offer","answer"].indexOf(e.type))return Promise.reject(c("TypeError",'Unsupported type "'+e.type+'"'));if(!o("setLocalDescription",e.type,i.signalingState)||i._isClosed)return Promise.reject(c("InvalidStateError","Can not set local "+e.type+" in state "+i.signalingState));if("offer"===e.type)t=n.splitSections(e.sdp),r=t.shift(),t.forEach(function(e,t){var r=n.parseRtpParameters(e);i.transceivers[t].localCapabilities=r}),i.transceivers.forEach(function(e,t){i._gather(e.mid,t)});else if("answer"===e.type){t=n.splitSections(i._remoteDescription.sdp),r=t.shift();var s=n.matchPrefix(r,"a=ice-lite").length>0;t.forEach(function(e,t){var o=i.transceivers[t],c=o.iceGatherer,d=o.iceTransport,p=o.dtlsTransport,u=o.localCapabilities,f=o.remoteCapabilities;if(!(n.isRejected(e)&&0===n.matchPrefix(e,"a=bundle-only").length)&&!o.rejected){var l=n.getIceParameters(e,r),m=n.getDtlsParameters(e,r);s&&(m.role="server"),i.usingBundle&&0!==t||(i._gather(o.mid,t),"new"===d.state&&d.start(c,l,s?"controlling":"controlled"),"new"===p.state&&p.start(m));var v=a(u,f);i._transceive(o,v.codecs.length>0,!1)}})}return i._localDescription={type:e.type,sdp:e.sdp},"offer"===e.type?i._updateSignalingState("have-local-offer"):i._updateSignalingState("stable"),Promise.resolve()},p.prototype.setRemoteDescription=function(i){var p=this;if(-1===["offer","answer"].indexOf(i.type))return Promise.reject(c("TypeError",'Unsupported type "'+i.type+'"'));if(!o("setRemoteDescription",i.type,p.signalingState)||p._isClosed)return Promise.reject(c("InvalidStateError","Can not set remote "+i.type+" in state "+p.signalingState));var u={};p.remoteStreams.forEach(function(e){u[e.id]=e});var f=[],l=n.splitSections(i.sdp),m=l.shift(),v=n.matchPrefix(m,"a=ice-lite").length>0,h=n.matchPrefix(m,"a=group:BUNDLE ").length>0;p.usingBundle=h;var g=n.matchPrefix(m,"a=ice-options:")[0];return p.canTrickleIceCandidates=!!g&&g.substr(14).split(" ").indexOf("trickle")>=0,l.forEach(function(o,c){var d=n.splitLines(o),l=n.getKind(o),g=n.isRejected(o)&&0===n.matchPrefix(o,"a=bundle-only").length,y=d[0].substr(2).split(" ")[2],C=n.getDirection(o,m),T=n.parseMsid(o),S=n.getMid(o)||n.generateIdentifier();if(g||"application"===l&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))p.transceivers[c]={mid:S,kind:l,protocol:y,rejected:!0};else{var R,P,E,b,k,w,_,x,D;!g&&p.transceivers[c]&&p.transceivers[c].rejected&&(p.transceivers[c]=p._createTransceiver(l,!0));var O,M,I=n.parseRtpParameters(o);g||(O=n.getIceParameters(o,m),(M=n.getDtlsParameters(o,m)).role="client"),_=n.parseRtpEncodingParameters(o);var L=n.parseRtcpParameters(o),j=n.matchPrefix(o,"a=end-of-candidates",m).length>0,N=n.matchPrefix(o,"a=candidate:").map(function(e){return n.parseCandidate(e)}).filter(function(e){return 1===e.component});if(("offer"===i.type||"answer"===i.type)&&!g&&h&&c>0&&p.transceivers[c]&&(p._disposeIceAndDtlsTransports(c),p.transceivers[c].iceGatherer=p.transceivers[0].iceGatherer,p.transceivers[c].iceTransport=p.transceivers[0].iceTransport,p.transceivers[c].dtlsTransport=p.transceivers[0].dtlsTransport,p.transceivers[c].rtpSender&&p.transceivers[c].rtpSender.setTransport(p.transceivers[0].dtlsTransport),p.transceivers[c].rtpReceiver&&p.transceivers[c].rtpReceiver.setTransport(p.transceivers[0].dtlsTransport)),"offer"!==i.type||g){if("answer"===i.type&&!g){P=(R=p.transceivers[c]).iceGatherer,E=R.iceTransport,b=R.dtlsTransport,k=R.rtpReceiver,w=R.sendEncodingParameters,x=R.localCapabilities,p.transceivers[c].recvEncodingParameters=_,p.transceivers[c].remoteCapabilities=I,p.transceivers[c].rtcpParameters=L,N.length&&"new"===E.state&&(!v&&!j||h&&0!==c?N.forEach(function(e){s(R.iceTransport,e)}):E.setRemoteCandidates(N)),h&&0!==c||("new"===E.state&&E.start(P,O,"controlling"),"new"===b.state&&b.start(M)),!a(R.localCapabilities,R.remoteCapabilities).codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&R.sendEncodingParameters[0].rtx&&delete R.sendEncodingParameters[0].rtx,p._transceive(R,"sendrecv"===C||"recvonly"===C,"sendrecv"===C||"sendonly"===C),!k||"sendrecv"!==C&&"sendonly"!==C?delete R.rtpReceiver:(D=k.track,T?(u[T.stream]||(u[T.stream]=new e.MediaStream),r(D,u[T.stream]),f.push([D,k,u[T.stream]])):(u.default||(u.default=new e.MediaStream),r(D,u.default),f.push([D,k,u.default])))}}else{(R=p.transceivers[c]||p._createTransceiver(l)).mid=S,R.iceGatherer||(R.iceGatherer=p._createIceGatherer(c,h)),N.length&&"new"===R.iceTransport.state&&(!j||h&&0!==c?N.forEach(function(e){s(R.iceTransport,e)}):R.iceTransport.setRemoteCandidates(N)),x=e.RTCRtpReceiver.getCapabilities(l),t<15019&&(x.codecs=x.codecs.filter(function(e){return"rtx"!==e.name})),w=R.sendEncodingParameters||[{ssrc:1001*(2*c+2)}];var A,U=!1;if("sendrecv"===C||"sendonly"===C){if(U=!R.rtpReceiver,k=R.rtpReceiver||new e.RTCRtpReceiver(R.dtlsTransport,l),U)D=k.track,T&&"-"===T.stream||(T?(u[T.stream]||(u[T.stream]=new e.MediaStream,Object.defineProperty(u[T.stream],"id",{get:function(){return T.stream}})),Object.defineProperty(D,"id",{get:function(){return T.track}}),A=u[T.stream]):(u.default||(u.default=new e.MediaStream),A=u.default)),A&&(r(D,A),R.associatedRemoteMediaStreams.push(A)),f.push([D,k,A])}else R.rtpReceiver&&R.rtpReceiver.track&&(R.associatedRemoteMediaStreams.forEach(function(t){var r,n,i=t.getTracks().find(function(e){return e.id===R.rtpReceiver.track.id});i&&(r=i,(n=t).removeTrack(r),n.dispatchEvent(new e.MediaStreamTrackEvent("removetrack",{track:r})))}),R.associatedRemoteMediaStreams=[]);R.localCapabilities=x,R.remoteCapabilities=I,R.rtpReceiver=k,R.rtcpParameters=L,R.sendEncodingParameters=w,R.recvEncodingParameters=_,p._transceive(p.transceivers[c],!1,U)}}}),void 0===p._dtlsRole&&(p._dtlsRole="offer"===i.type?"active":"passive"),p._remoteDescription={type:i.type,sdp:i.sdp},"offer"===i.type?p._updateSignalingState("have-remote-offer"):p._updateSignalingState("stable"),Object.keys(u).forEach(function(t){var r=u[t];if(r.getTracks().length){if(-1===p.remoteStreams.indexOf(r)){p.remoteStreams.push(r);var n=new Event("addstream");n.stream=r,e.setTimeout(function(){p._dispatchEvent("addstream",n)})}f.forEach(function(e){var t=e[0],n=e[1];r.id===e[2].id&&d(p,t,n,[r])})}}),f.forEach(function(e){e[2]||d(p,e[0],e[1],[])}),e.setTimeout(function(){p&&p.transceivers&&p.transceivers.forEach(function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},p.prototype.close=function(){this.transceivers.forEach(function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},p.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",t)},p.prototype._maybeFireNegotiationNeeded=function(){var t=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,e.setTimeout(function(){if(t.needNegotiation){t.needNegotiation=!1;var e=new Event("negotiationneeded");t._dispatchEvent("negotiationneeded",e)}},0))},p.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){t[e.iceTransport.state]++}),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",r)}},p.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){t[e.iceTransport.state]++,t[e.dtlsTransport.state]++}),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e;var r=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",r)}},p.prototype.createOffer=function(){var r=this;if(r._isClosed)return Promise.reject(c("InvalidStateError","Can not call createOffer after close"));var a=r.transceivers.filter(function(e){return"audio"===e.kind}).length,o=r.transceivers.filter(function(e){return"video"===e.kind}).length,s=arguments[0];if(s){if(s.mandatory||s.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==s.offerToReceiveAudio&&(a=!0===s.offerToReceiveAudio?1:!1===s.offerToReceiveAudio?0:s.offerToReceiveAudio),void 0!==s.offerToReceiveVideo&&(o=!0===s.offerToReceiveVideo?1:!1===s.offerToReceiveVideo?0:s.offerToReceiveVideo)}for(r.transceivers.forEach(function(e){"audio"===e.kind?--a<0&&(e.wantReceive=!1):"video"===e.kind&&--o<0&&(e.wantReceive=!1)});a>0||o>0;)a>0&&(r._createTransceiver("audio"),a--),o>0&&(r._createTransceiver("video"),o--);var d=n.writeSessionBoilerplate(r._sdpSessionId,r._sdpSessionVersion++);r.transceivers.forEach(function(i,a){var o=i.track,s=i.kind,c=i.mid||n.generateIdentifier();i.mid=c,i.iceGatherer||(i.iceGatherer=r._createIceGatherer(a,r.usingBundle));var d=e.RTCRtpSender.getCapabilities(s);t<15019&&(d.codecs=d.codecs.filter(function(e){return"rtx"!==e.name})),d.codecs.forEach(function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),i.remoteCapabilities&&i.remoteCapabilities.codecs&&i.remoteCapabilities.codecs.forEach(function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)})}),d.headerExtensions.forEach(function(e){(i.remoteCapabilities&&i.remoteCapabilities.headerExtensions||[]).forEach(function(t){e.uri===t.uri&&(e.id=t.id)})});var p=i.sendEncodingParameters||[{ssrc:1001*(2*a+1)}];o&&t>=15019&&"video"===s&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),i.wantReceive&&(i.rtpReceiver=new e.RTCRtpReceiver(i.dtlsTransport,s)),i.localCapabilities=d,i.sendEncodingParameters=p}),"max-compat"!==r._config.bundlePolicy&&(d+="a=group:BUNDLE "+r.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),d+="a=ice-options:trickle\r\n",r.transceivers.forEach(function(e,t){d+=i(e,e.localCapabilities,"offer",e.stream,r._dtlsRole),d+="a=rtcp-rsize\r\n",!e.iceGatherer||"new"===r.iceGatheringState||0!==t&&r.usingBundle||(e.iceGatherer.getLocalCandidates().forEach(function(e){e.component=1,d+="a="+n.writeCandidate(e)+"\r\n"}),"completed"===e.iceGatherer.state&&(d+="a=end-of-candidates\r\n"))});var p=new e.RTCSessionDescription({type:"offer",sdp:d});return Promise.resolve(p)},p.prototype.createAnswer=function(){var r=this;if(r._isClosed)return Promise.reject(c("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==r.signalingState&&"have-local-pranswer"!==r.signalingState)return Promise.reject(c("InvalidStateError","Can not call createAnswer in signalingState "+r.signalingState));var o=n.writeSessionBoilerplate(r._sdpSessionId,r._sdpSessionVersion++);r.usingBundle&&(o+="a=group:BUNDLE "+r.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),o+="a=ice-options:trickle\r\n";var s=n.getMediaSections(r._remoteDescription.sdp).length;r.transceivers.forEach(function(e,n){if(!(n+1>s)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?o+="m=application 0 DTLS/SCTP 5000\r\n":o+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?o+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(o+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(o+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n");var c;if(e.stream)"audio"===e.kind?c=e.stream.getAudioTracks()[0]:"video"===e.kind&&(c=e.stream.getVideoTracks()[0]),c&&t>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1});var d=a(e.localCapabilities,e.remoteCapabilities);!d.codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,o+=i(e,d,"answer",e.stream,r._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(o+="a=rtcp-rsize\r\n")}});var d=new e.RTCSessionDescription({type:"answer",sdp:o});return Promise.resolve(d)},p.prototype.addIceCandidate=function(e){var t,r=this;return e&&void 0===e.sdpMLineIndex&&!e.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(i,a){if(!r._remoteDescription)return a(c("InvalidStateError","Can not add ICE candidate without a remote description"));if(e&&""!==e.candidate){var o=e.sdpMLineIndex;if(e.sdpMid)for(var d=0;d<r.transceivers.length;d++)if(r.transceivers[d].mid===e.sdpMid){o=d;break}var p=r.transceivers[o];if(!p)return a(c("OperationError","Can not add ICE candidate"));if(p.rejected)return i();var u=Object.keys(e.candidate).length>0?n.parseCandidate(e.candidate):{};if("tcp"===u.protocol&&(0===u.port||9===u.port))return i();if(u.component&&1!==u.component)return i();if((0===o||o>0&&p.iceTransport!==r.transceivers[0].iceTransport)&&!s(p.iceTransport,u))return a(c("OperationError","Can not add ICE candidate"));var f=e.candidate.trim();0===f.indexOf("a=")&&(f=f.substr(2)),(t=n.getMediaSections(r._remoteDescription.sdp))[o]+="a="+(u.type?f:"end-of-candidates")+"\r\n",r._remoteDescription.sdp=n.getDescription(r._remoteDescription.sdp)+t.join("")}else for(var l=0;l<r.transceivers.length&&(r.transceivers[l].rejected||(r.transceivers[l].iceTransport.addRemoteCandidate({}),(t=n.getMediaSections(r._remoteDescription.sdp))[l]+="a=end-of-candidates\r\n",r._remoteDescription.sdp=n.getDescription(r._remoteDescription.sdp)+t.join(""),!r.usingBundle));l++);i()})},p.prototype.getStats=function(t){if(t&&t instanceof e.MediaStreamTrack){var r=null;if(this.transceivers.forEach(function(e){e.rtpSender&&e.rtpSender.track===t?r=e.rtpSender:e.rtpReceiver&&e.rtpReceiver.track===t&&(r=e.rtpReceiver)}),!r)throw c("InvalidAccessError","Invalid selector.");return r.getStats()}var n=[];return this.transceivers.forEach(function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(t){e[t]&&n.push(e[t].getStats())})}),Promise.all(n).then(function(e){var t=new Map;return e.forEach(function(e){e.forEach(function(e){t.set(e.id,e)})}),t})};["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach(function(t){var r=e[t];if(r&&r.prototype&&r.prototype.getStats){var n=r.prototype.getStats;r.prototype.getStats=function(){return n.apply(this).then(function(e){var t=new Map;return Object.keys(e).forEach(function(r){var n;e[r].type={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[(n=e[r]).type]||n.type,t.set(r,e[r])}),t})}}});var u=["createOffer","createAnswer"];return u.forEach(function(e){var t=p.prototype[e];p.prototype[e]=function(){var e=arguments;return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then(function(t){"function"==typeof e[0]&&e[0].apply(null,[t])},function(t){"function"==typeof e[1]&&e[1].apply(null,[t])}):t.apply(this,arguments)}}),(u=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach(function(e){var t=p.prototype[e];p.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)},function(t){"function"==typeof e[2]&&e[2].apply(null,[t])}):t.apply(this,arguments)}}),["getStats"].forEach(function(e){var t=p.prototype[e];p.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)}):t.apply(this,arguments)}}),p}},{sdp:2}],2:[function(e,t,r){"use strict";var n={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};n.localCName=n.generateIdentifier(),n.splitLines=function(e){return e.trim().split("\n").map(function(e){return e.trim()})},n.splitSections=function(e){return e.split("\nm=").map(function(e,t){return(t>0?"m="+e:e).trim()+"\r\n"})},n.getDescription=function(e){var t=n.splitSections(e);return t&&t[0]},n.getMediaSections=function(e){var t=n.splitSections(e);return t.shift(),t},n.matchPrefix=function(e,t){return n.splitLines(e).filter(function(e){return 0===e.indexOf(t)})},n.parseCandidate=function(e){for(var t,r={foundation:(t=0===e.indexOf("a=candidate:")?e.substring(12).split(" "):e.substring(10).split(" "))[0],component:parseInt(t[1],10),protocol:t[2].toLowerCase(),priority:parseInt(t[3],10),ip:t[4],address:t[4],port:parseInt(t[5],10),type:t[7]},n=8;n<t.length;n+=2)switch(t[n]){case"raddr":r.relatedAddress=t[n+1];break;case"rport":r.relatedPort=parseInt(t[n+1],10);break;case"tcptype":r.tcpType=t[n+1];break;case"ufrag":r.ufrag=t[n+1],r.usernameFragment=t[n+1];break;default:r[t[n]]=t[n+1]}return r},n.writeCandidate=function(e){var t=[];t.push(e.foundation),t.push(e.component),t.push(e.protocol.toUpperCase()),t.push(e.priority),t.push(e.address||e.ip),t.push(e.port);var r=e.type;return t.push("typ"),t.push(r),"host"!==r&&e.relatedAddress&&e.relatedPort&&(t.push("raddr"),t.push(e.relatedAddress),t.push("rport"),t.push(e.relatedPort)),e.tcpType&&"tcp"===e.protocol.toLowerCase()&&(t.push("tcptype"),t.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(t.push("ufrag"),t.push(e.usernameFragment||e.ufrag)),"candidate:"+t.join(" ")},n.parseIceOptions=function(e){return e.substr(14).split(" ")},n.parseRtpMap=function(e){var t=e.substr(9).split(" "),r={payloadType:parseInt(t.shift(),10)};return t=t[0].split("/"),r.name=t[0],r.clockRate=parseInt(t[1],10),r.channels=3===t.length?parseInt(t[2],10):1,r.numChannels=r.channels,r},n.writeRtpMap=function(e){var t=e.payloadType;void 0!==e.preferredPayloadType&&(t=e.preferredPayloadType);var r=e.channels||e.numChannels||1;return"a=rtpmap:"+t+" "+e.name+"/"+e.clockRate+(1!==r?"/"+r:"")+"\r\n"},n.parseExtmap=function(e){var t=e.substr(9).split(" ");return{id:parseInt(t[0],10),direction:t[0].indexOf("/")>0?t[0].split("/")[1]:"sendrecv",uri:t[1]}},n.writeExtmap=function(e){return"a=extmap:"+(e.id||e.preferredId)+(e.direction&&"sendrecv"!==e.direction?"/"+e.direction:"")+" "+e.uri+"\r\n"},n.parseFmtp=function(e){for(var t,r={},n=e.substr(e.indexOf(" ")+1).split(";"),i=0;i<n.length;i++)r[(t=n[i].trim().split("="))[0].trim()]=t[1];return r},n.writeFmtp=function(e){var t="",r=e.payloadType;if(void 0!==e.preferredPayloadType&&(r=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){var n=[];Object.keys(e.parameters).forEach(function(t){e.parameters[t]?n.push(t+"="+e.parameters[t]):n.push(t)}),t+="a=fmtp:"+r+" "+n.join(";")+"\r\n"}return t},n.parseRtcpFb=function(e){var t=e.substr(e.indexOf(" ")+1).split(" ");return{type:t.shift(),parameter:t.join(" ")}},n.writeRtcpFb=function(e){var t="",r=e.payloadType;return void 0!==e.preferredPayloadType&&(r=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach(function(e){t+="a=rtcp-fb:"+r+" "+e.type+(e.parameter&&e.parameter.length?" "+e.parameter:"")+"\r\n"}),t},n.parseSsrcMedia=function(e){var t=e.indexOf(" "),r={ssrc:parseInt(e.substr(7,t-7),10)},n=e.indexOf(":",t);return n>-1?(r.attribute=e.substr(t+1,n-t-1),r.value=e.substr(n+1)):r.attribute=e.substr(t+1),r},n.parseSsrcGroup=function(e){var t=e.substr(13).split(" ");return{semantics:t.shift(),ssrcs:t.map(function(e){return parseInt(e,10)})}},n.getMid=function(e){var t=n.matchPrefix(e,"a=mid:")[0];if(t)return t.substr(6)},n.parseFingerprint=function(e){var t=e.substr(14).split(" ");return{algorithm:t[0].toLowerCase(),value:t[1]}},n.getDtlsParameters=function(e,t){return{role:"auto",fingerprints:n.matchPrefix(e+t,"a=fingerprint:").map(n.parseFingerprint)}},n.writeDtlsParameters=function(e,t){var r="a=setup:"+t+"\r\n";return e.fingerprints.forEach(function(e){r+="a=fingerprint:"+e.algorithm+" "+e.value+"\r\n"}),r},n.getIceParameters=function(e,t){var r=n.splitLines(e);return{usernameFragment:(r=r.concat(n.splitLines(t))).filter(function(e){return 0===e.indexOf("a=ice-ufrag:")})[0].substr(12),password:r.filter(function(e){return 0===e.indexOf("a=ice-pwd:")})[0].substr(10)}},n.writeIceParameters=function(e){return"a=ice-ufrag:"+e.usernameFragment+"\r\na=ice-pwd:"+e.password+"\r\n"},n.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=n.splitLines(e)[0].split(" "),i=3;i<r.length;i++){var a=r[i],o=n.matchPrefix(e,"a=rtpmap:"+a+" ")[0];if(o){var s=n.parseRtpMap(o),c=n.matchPrefix(e,"a=fmtp:"+a+" ");switch(s.parameters=c.length?n.parseFmtp(c[0]):{},s.rtcpFeedback=n.matchPrefix(e,"a=rtcp-fb:"+a+" ").map(n.parseRtcpFb),t.codecs.push(s),s.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(s.name.toUpperCase())}}}return n.matchPrefix(e,"a=extmap:").forEach(function(e){t.headerExtensions.push(n.parseExtmap(e))}),t},n.writeRtpDescription=function(e,t){var r="";r+="m="+e+" ",r+=t.codecs.length>0?"9":"0",r+=" UDP/TLS/RTP/SAVPF ",r+=t.codecs.map(function(e){return void 0!==e.preferredPayloadType?e.preferredPayloadType:e.payloadType}).join(" ")+"\r\n",r+="c=IN IP4 0.0.0.0\r\n",r+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach(function(e){r+=n.writeRtpMap(e),r+=n.writeFmtp(e),r+=n.writeRtcpFb(e)});var i=0;return t.codecs.forEach(function(e){e.maxptime>i&&(i=e.maxptime)}),i>0&&(r+="a=maxptime:"+i+"\r\n"),r+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach(function(e){r+=n.writeExtmap(e)}),r},n.parseRtpEncodingParameters=function(e){var t,r=[],i=n.parseRtpParameters(e),a=-1!==i.fecMechanisms.indexOf("RED"),o=-1!==i.fecMechanisms.indexOf("ULPFEC"),s=n.matchPrefix(e,"a=ssrc:").map(function(e){return n.parseSsrcMedia(e)}).filter(function(e){return"cname"===e.attribute}),c=s.length>0&&s[0].ssrc,d=n.matchPrefix(e,"a=ssrc-group:FID").map(function(e){return e.substr(17).split(" ").map(function(e){return parseInt(e,10)})});d.length>0&&d[0].length>1&&d[0][0]===c&&(t=d[0][1]),i.codecs.forEach(function(e){if("RTX"===e.name.toUpperCase()&&e.parameters.apt){var n={ssrc:c,codecPayloadType:parseInt(e.parameters.apt,10)};c&&t&&(n.rtx={ssrc:t}),r.push(n),a&&((n=JSON.parse(JSON.stringify(n))).fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},r.push(n))}}),0===r.length&&c&&r.push({ssrc:c});var p=n.matchPrefix(e,"b=");return p.length&&(p=0===p[0].indexOf("b=TIAS:")?parseInt(p[0].substr(7),10):0===p[0].indexOf("b=AS:")?1e3*parseInt(p[0].substr(5),10)*.95-16e3:void 0,r.forEach(function(e){e.maxBitrate=p})),r},n.parseRtcpParameters=function(e){var t={},r=n.matchPrefix(e,"a=ssrc:").map(function(e){return n.parseSsrcMedia(e)}).filter(function(e){return"cname"===e.attribute})[0];r&&(t.cname=r.value,t.ssrc=r.ssrc);var i=n.matchPrefix(e,"a=rtcp-rsize");t.reducedSize=i.length>0,t.compound=0===i.length;var a=n.matchPrefix(e,"a=rtcp-mux");return t.mux=a.length>0,t},n.parseMsid=function(e){var t,r=n.matchPrefix(e,"a=msid:");if(1===r.length)return{stream:(t=r[0].substr(7).split(" "))[0],track:t[1]};var i=n.matchPrefix(e,"a=ssrc:").map(function(e){return n.parseSsrcMedia(e)}).filter(function(e){return"msid"===e.attribute});return i.length>0?{stream:(t=i[0].value.split(" "))[0],track:t[1]}:void 0},n.generateSessionId=function(){return Math.random().toString().substr(2,21)},n.writeSessionBoilerplate=function(e,t,r){var i,a=void 0!==t?t:2;return i=e||n.generateSessionId(),"v=0\r\no="+(r||"thisisadapterortc")+" "+i+" "+a+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},n.writeMediaSection=function(e,t,r,i){var a=n.writeRtpDescription(e.kind,t);if(a+=n.writeIceParameters(e.iceGatherer.getLocalParameters()),a+=n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===r?"actpass":"active"),a+="a=mid:"+e.mid+"\r\n",e.direction?a+="a="+e.direction+"\r\n":e.rtpSender&&e.rtpReceiver?a+="a=sendrecv\r\n":e.rtpSender?a+="a=sendonly\r\n":e.rtpReceiver?a+="a=recvonly\r\n":a+="a=inactive\r\n",e.rtpSender){var o="msid:"+i.id+" "+e.rtpSender.track.id+"\r\n";a+="a="+o,a+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+o,e.sendEncodingParameters[0].rtx&&(a+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+o,a+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return a+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+n.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(a+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+n.localCName+"\r\n"),a},n.getDirection=function(e,t){for(var r=n.splitLines(e),i=0;i<r.length;i++)switch(r[i]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[i].substr(2)}return t?n.getDirection(t):"sendrecv"},n.getKind=function(e){return n.splitLines(e)[0].split(" ")[0].substr(2)},n.isRejected=function(e){return"0"===e.split(" ",2)[1]},n.parseMLine=function(e){var t=n.splitLines(e)[0].substr(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},n.parseOLine=function(e){var t=n.matchPrefix(e,"o=")[0].substr(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},n.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1;for(var t=n.splitLines(e),r=0;r<t.length;r++)if(t[r].length<2||"="!==t[r].charAt(1))return!1;return!0},"object"==typeof t&&(t.exports=n)},{}],3:[function(e,t,r){(function(r){"use strict";var n=e("./adapter_factory.js");t.exports=n({window:r.window})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./adapter_factory.js":4}],4:[function(e,t,r){"use strict";var n=e("./utils");t.exports=function(t,r){var i=t&&t.window,a={shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0};for(var o in r)hasOwnProperty.call(r,o)&&(a[o]=r[o]);var s=n.log,c=n.detectBrowser(i),d=e("./chrome/chrome_shim")||null,p=e("./edge/edge_shim")||null,u=e("./firefox/firefox_shim")||null,f=e("./safari/safari_shim")||null,l=e("./common_shim")||null,m={browserDetails:c,commonShim:l,extractVersion:n.extractVersion,disableLog:n.disableLog,disableWarnings:n.disableWarnings};switch(c.browser){case"chrome":if(!d||!d.shimPeerConnection||!a.shimChrome)return s("Chrome shim is not included in this adapter release."),m;s("adapter.js shimming chrome."),m.browserShim=d,l.shimCreateObjectURL(i),d.shimGetUserMedia(i),d.shimMediaStream(i),d.shimSourceObject(i),d.shimPeerConnection(i),d.shimOnTrack(i),d.shimAddTrackRemoveTrack(i),d.shimGetSendersWithDtmf(i),d.shimSenderReceiverGetStats(i),d.fixNegotiationNeeded(i),l.shimRTCIceCandidate(i),l.shimMaxMessageSize(i),l.shimSendThrowTypeError(i);break;case"firefox":if(!u||!u.shimPeerConnection||!a.shimFirefox)return s("Firefox shim is not included in this adapter release."),m;s("adapter.js shimming firefox."),m.browserShim=u,l.shimCreateObjectURL(i),u.shimGetUserMedia(i),u.shimSourceObject(i),u.shimPeerConnection(i),u.shimOnTrack(i),u.shimRemoveStream(i),u.shimSenderGetStats(i),u.shimReceiverGetStats(i),u.shimRTCDataChannel(i),l.shimRTCIceCandidate(i),l.shimMaxMessageSize(i),l.shimSendThrowTypeError(i);break;case"edge":if(!p||!p.shimPeerConnection||!a.shimEdge)return s("MS edge shim is not included in this adapter release."),m;s("adapter.js shimming edge."),m.browserShim=p,l.shimCreateObjectURL(i),p.shimGetUserMedia(i),p.shimPeerConnection(i),p.shimReplaceTrack(i),l.shimMaxMessageSize(i),l.shimSendThrowTypeError(i);break;case"safari":if(!f||!a.shimSafari)return s("Safari shim is not included in this adapter release."),m;s("adapter.js shimming safari."),m.browserShim=f,l.shimCreateObjectURL(i),f.shimRTCIceServerUrls(i),f.shimCreateOfferLegacy(i),f.shimCallbacksAPI(i),f.shimLocalStreamsAPI(i),f.shimRemoteStreamsAPI(i),f.shimTrackEventTransceiver(i),f.shimGetUserMedia(i),l.shimRTCIceCandidate(i),l.shimMaxMessageSize(i),l.shimSendThrowTypeError(i);break;default:s("Unsupported browser!")}return m}},{"./chrome/chrome_shim":5,"./common_shim":7,"./edge/edge_shim":8,"./firefox/firefox_shim":11,"./safari/safari_shim":13,"./utils":14}],5:[function(e,t,r){"use strict";var n=e("../utils.js"),i=n.log;function a(e,t,r){var n=r?"outbound-rtp":"inbound-rtp",i=new Map;if(null===t)return i;var a=[];return e.forEach(function(e){"track"===e.type&&e.trackIdentifier===t.id&&a.push(e)}),a.forEach(function(t){e.forEach(function(r){r.type===n&&r.trackId===t.id&&function e(t,r,n){r&&!n.has(r.id)&&(n.set(r.id,r),Object.keys(r).forEach(function(i){i.endsWith("Id")?e(t,t.get(r[i]),n):i.endsWith("Ids")&&r[i].forEach(function(r){e(t,t.get(r),n)})}))}(e,r,i)})}),i}t.exports={shimGetUserMedia:e("./getusermedia"),shimMediaStream:function(e){e.MediaStream=e.MediaStream||e.webkitMediaStream},shimOnTrack:function(e){if("object"!=typeof e||!e.RTCPeerConnection||"ontrack"in e.RTCPeerConnection.prototype)n.wrapPeerConnectionEvent(e,"track",function(e){return e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e});else{Object.defineProperty(e.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var r=this;return r._ontrackpoly||(r._ontrackpoly=function(t){t.stream.addEventListener("addtrack",function(n){var i;i=e.RTCPeerConnection.prototype.getReceivers?r.getReceivers().find(function(e){return e.track&&e.track.id===n.track.id}):{track:n.track};var a=new Event("track");a.track=n.track,a.receiver=i,a.transceiver={receiver:i},a.streams=[t.stream],r.dispatchEvent(a)}),t.stream.getTracks().forEach(function(n){var i;i=e.RTCPeerConnection.prototype.getReceivers?r.getReceivers().find(function(e){return e.track&&e.track.id===n.id}):{track:n};var a=new Event("track");a.track=n,a.receiver=i,a.transceiver={receiver:i},a.streams=[t.stream],r.dispatchEvent(a)})},r.addEventListener("addstream",r._ontrackpoly)),t.apply(r,arguments)}}},shimGetSendersWithDtmf:function(e){if("object"==typeof e&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){var t=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var r=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){var i=r.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};var n=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){n.apply(this,arguments);var t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}var i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;r._senders=r._senders||[],i.apply(r,[e]),e.getTracks().forEach(function(e){r._senders.push(t(r,e))})};var a=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;t._senders=t._senders||[],a.apply(t,[e]),e.getTracks().forEach(function(e){var r=t._senders.find(function(t){return t.track===e});r&&t._senders.splice(t._senders.indexOf(r),1)})}}else if("object"==typeof e&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){var o=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=o.apply(e,[]);return t.forEach(function(t){t._pc=e}),t},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}},shimSenderReceiverGetStats:function(e){if("object"==typeof e&&e.RTCPeerConnection&&e.RTCRtpSender&&e.RTCRtpReceiver){if(!("getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,r=t.apply(e,[]);return r.forEach(function(t){t._pc=e}),r});var r=e.RTCPeerConnection.prototype.addTrack;r&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=r.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){var e=this;return this._pc.getStats().then(function(t){return a(t,e.track,!0)})}}if(!("getStats"in e.RTCRtpReceiver.prototype)){var i=e.RTCPeerConnection.prototype.getReceivers;i&&(e.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=i.apply(e,[]);return t.forEach(function(t){t._pc=e}),t}),n.wrapPeerConnectionEvent(e,"track",function(e){return e.receiver._pc=e.srcElement,e}),e.RTCRtpReceiver.prototype.getStats=function(){var e=this;return this._pc.getStats().then(function(t){return a(t,e.track,!1)})}}if("getStats"in e.RTCRtpSender.prototype&&"getStats"in e.RTCRtpReceiver.prototype){var o=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof e.MediaStreamTrack){var t,r,n,i=arguments[0];return this.getSenders().forEach(function(e){e.track===i&&(t?n=!0:t=e)}),this.getReceivers().forEach(function(e){return e.track===i&&(r?n=!0:r=e),e.track===i}),n||t&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):t?t.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return o.apply(this,arguments)}}}},shimSourceObject:function(e){var t=e&&e.URL;"object"==typeof e&&(!e.HTMLMediaElement||"srcObject"in e.HTMLMediaElement.prototype||Object.defineProperty(e.HTMLMediaElement.prototype,"srcObject",{get:function(){return this._srcObject},set:function(e){var r=this;this._srcObject=e,this.src&&t.revokeObjectURL(this.src),e?(this.src=t.createObjectURL(e),e.addEventListener("addtrack",function(){r.src&&t.revokeObjectURL(r.src),r.src=t.createObjectURL(e)}),e.addEventListener("removetrack",function(){r.src&&t.revokeObjectURL(r.src),r.src=t.createObjectURL(e)})):this.src=""}}))},shimAddTrackRemoveTrackWithNative:function(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(function(t){return e._shimmedLocalStreams[t][0]})};var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){if(!r)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};var n=t.apply(this,arguments);return this._shimmedLocalStreams[r.id]?-1===this._shimmedLocalStreams[r.id].indexOf(n)&&this._shimmedLocalStreams[r.id].push(n):this._shimmedLocalStreams[r.id]=[r,n],n};var r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var t=this;this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(function(e){if(t.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")});var n=t.getSenders();r.apply(this,arguments);var i=t.getSenders().filter(function(e){return-1===n.indexOf(e)});this._shimmedLocalStreams[e.id]=[e].concat(i)};var n=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],n.apply(this,arguments)};var i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(function(r){var n=t._shimmedLocalStreams[r].indexOf(e);-1!==n&&t._shimmedLocalStreams[r].splice(n,1),1===t._shimmedLocalStreams[r].length&&delete t._shimmedLocalStreams[r]}),i.apply(this,arguments)}},shimAddTrackRemoveTrack:function(e){var t=n.detectBrowser(e);if(e.RTCPeerConnection.prototype.addTrack&&t.version>=65)return this.shimAddTrackRemoveTrackWithNative(e);var r=e.RTCPeerConnection.prototype.getLocalStreams;e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this,t=r.apply(this);return e._reverseStreams=e._reverseStreams||{},t.map(function(t){return e._reverseStreams[t.id]})};var i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(t){var r=this;if(r._streams=r._streams||{},r._reverseStreams=r._reverseStreams||{},t.getTracks().forEach(function(e){if(r.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")}),!r._reverseStreams[t.id]){var n=new e.MediaStream(t.getTracks());r._streams[t.id]=n,r._reverseStreams[n.id]=t,t=n}i.apply(r,[t])};var a=e.RTCPeerConnection.prototype.removeStream;function o(e,t){var r=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(i.id,"g"),n.id)}),new RTCSessionDescription({type:t.type,sdp:r})}e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;t._streams=t._streams||{},t._reverseStreams=t._reverseStreams||{},a.apply(t,[t._streams[e.id]||e]),delete t._reverseStreams[t._streams[e.id]?t._streams[e.id].id:e.id],delete t._streams[e.id]},e.RTCPeerConnection.prototype.addTrack=function(t,r){var n=this;if("closed"===n.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var i=[].slice.call(arguments,1);if(1!==i.length||!i[0].getTracks().find(function(e){return e===t}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(n.getSenders().find(function(e){return e.track===t}))throw new DOMException("Track already exists.","InvalidAccessError");n._streams=n._streams||{},n._reverseStreams=n._reverseStreams||{};var a=n._streams[r.id];if(a)a.addTrack(t),Promise.resolve().then(function(){n.dispatchEvent(new Event("negotiationneeded"))});else{var o=new e.MediaStream([t]);n._streams[r.id]=o,n._reverseStreams[o.id]=r,n.addStream(o)}return n.getSenders().find(function(e){return e.track===t})},["createOffer","createAnswer"].forEach(function(t){var r=e.RTCPeerConnection.prototype[t];e.RTCPeerConnection.prototype[t]=function(){var e=this,t=arguments;return arguments.length&&"function"==typeof arguments[0]?r.apply(e,[function(r){var n=o(e,r);t[0].apply(null,[n])},function(e){t[1]&&t[1].apply(null,e)},arguments[2]]):r.apply(e,arguments).then(function(t){return o(e,t)})}});var s=e.RTCPeerConnection.prototype.setLocalDescription;e.RTCPeerConnection.prototype.setLocalDescription=function(){var e,t,r;return arguments.length&&arguments[0].type?(arguments[0]=(e=this,t=arguments[0],r=t.sdp,Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(n.id,"g"),i.id)}),new RTCSessionDescription({type:t.type,sdp:r})),s.apply(this,arguments)):s.apply(this,arguments)};var c=Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(e.RTCPeerConnection.prototype,"localDescription",{get:function(){var e=c.get.apply(this);return""===e.type?e:o(this,e)}}),e.RTCPeerConnection.prototype.removeTrack=function(e){var t,r=this;if("closed"===r.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(e._pc===r))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");r._streams=r._streams||{},Object.keys(r._streams).forEach(function(n){r._streams[n].getTracks().find(function(t){return e.track===t})&&(t=r._streams[n])}),t&&(1===t.getTracks().length?r.removeStream(r._reverseStreams[t.id]):t.removeTrack(e.track),r.dispatchEvent(new Event("negotiationneeded")))}},shimPeerConnection:function(e){var t=n.detectBrowser(e);!e.RTCPeerConnection&&e.webkitRTCPeerConnection&&(e.RTCPeerConnection=function(t,r){return i("PeerConnection"),t&&t.iceTransportPolicy&&(t.iceTransports=t.iceTransportPolicy),new e.webkitRTCPeerConnection(t,r)},e.RTCPeerConnection.prototype=e.webkitRTCPeerConnection.prototype,e.webkitRTCPeerConnection.generateCertificate&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get:function(){return e.webkitRTCPeerConnection.generateCertificate}}));var r=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(e,t,n){var i=this,a=arguments;if(arguments.length>0&&"function"==typeof e)return r.apply(this,arguments);if(0===r.length&&(0===arguments.length||"function"!=typeof arguments[0]))return r.apply(this,[]);var o=function(e){var t={};return e.result().forEach(function(e){var r={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type};e.names().forEach(function(t){r[t]=e.stat(t)}),t[r.id]=r}),t},s=function(e){return new Map(Object.keys(e).map(function(t){return[t,e[t]]}))};if(arguments.length>=2){return r.apply(this,[function(e){a[1](s(o(e)))},arguments[0]])}return new Promise(function(e,t){r.apply(i,[function(t){e(s(o(t)))},t])}).then(t,n)},t.version<51&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){var r=e.RTCPeerConnection.prototype[t];e.RTCPeerConnection.prototype[t]=function(){var e=arguments,t=this,n=new Promise(function(n,i){r.apply(t,[e[0],n,i])});return e.length<2?n:n.then(function(){e[1].apply(null,[])},function(t){e.length>=3&&e[2].apply(null,[t])})}}),t.version<52&&["createOffer","createAnswer"].forEach(function(t){var r=e.RTCPeerConnection.prototype[t];e.RTCPeerConnection.prototype[t]=function(){var e=this;if(arguments.length<1||1===arguments.length&&"object"==typeof arguments[0]){var t=1===arguments.length?arguments[0]:void 0;return new Promise(function(n,i){r.apply(e,[n,i,t])})}return r.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){var r=e.RTCPeerConnection.prototype[t];e.RTCPeerConnection.prototype[t]=function(){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)}});var a=e.RTCPeerConnection.prototype.addIceCandidate;e.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?a.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}},fixNegotiationNeeded:function(e){n.wrapPeerConnectionEvent(e,"negotiationneeded",function(e){if("stable"===e.target.signalingState)return e})},shimGetDisplayMedia:function(e,t){"getDisplayMedia"in e.navigator||("function"==typeof t?navigator.getDisplayMedia=function(e){return t(e).then(function(t){var r=e.video&&e.video.width,n=e.video&&e.video.height,i=e.video&&e.video.frameRate;return e.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:t,maxFrameRate:i||3}},r&&(e.video.mandatory.maxWidth=r),n&&(e.video.mandatory.maxHeight=n),navigator.mediaDevices.getUserMedia(e)})}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))}}},{"../utils.js":14,"./getusermedia":6}],6:[function(e,t,r){"use strict";var n=e("../utils.js"),i=n.log;t.exports=function(e){var t=n.detectBrowser(e),r=e&&e.navigator,a=function(e){if("object"!=typeof e||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach(function(r){if("require"!==r&&"advanced"!==r&&"mediaSource"!==r){var n="object"==typeof e[r]?e[r]:{ideal:e[r]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var i=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==n.ideal){t.optional=t.optional||[];var a={};"number"==typeof n.ideal?(a[i("min",r)]=n.ideal,t.optional.push(a),(a={})[i("max",r)]=n.ideal,t.optional.push(a)):(a[i("",r)]=n.ideal,t.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(t.mandatory=t.mandatory||{},t.mandatory[i("",r)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(t.mandatory=t.mandatory||{},t.mandatory[i(e,r)]=n[e])})}}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t},o=function(e,n){if(t.version>=61)return n(e);if((e=JSON.parse(JSON.stringify(e)))&&"object"==typeof e.audio){var o=function(e,t,r){t in e&&!(r in e)&&(e[r]=e[t],delete e[t])};o((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),o(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=a(e.audio)}if(e&&"object"==typeof e.video){var s=e.video.facingMode;s=s&&("object"==typeof s?s:{ideal:s});var c,d=t.version<66;if(s&&("user"===s.exact||"environment"===s.exact||"user"===s.ideal||"environment"===s.ideal)&&(!r.mediaDevices.getSupportedConstraints||!r.mediaDevices.getSupportedConstraints().facingMode||d))if(delete e.video.facingMode,"environment"===s.exact||"environment"===s.ideal?c=["back","rear"]:"user"!==s.exact&&"user"!==s.ideal||(c=["front"]),c)return r.mediaDevices.enumerateDevices().then(function(t){var r=(t=t.filter(function(e){return"videoinput"===e.kind})).find(function(e){return c.some(function(t){return-1!==e.label.toLowerCase().indexOf(t)})});return!r&&t.length&&-1!==c.indexOf("back")&&(r=t[t.length-1]),r&&(e.video.deviceId=s.exact?{exact:r.deviceId}:{ideal:r.deviceId}),e.video=a(e.video),i("chrome: "+JSON.stringify(e)),n(e)});e.video=a(e.video)}return i("chrome: "+JSON.stringify(e)),n(e)},s=function(e){return t.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}};r.getUserMedia=function(e,t,n){o(e,function(e){r.webkitGetUserMedia(e,t,function(e){n&&n(s(e))})})};var c=function(e){return new Promise(function(t,n){r.getUserMedia(e,t,n)})};if(r.mediaDevices||(r.mediaDevices={getUserMedia:c,enumerateDevices:function(){return new Promise(function(t){var r={audio:"audioinput",video:"videoinput"};return e.MediaStreamTrack.getSources(function(e){t(e.map(function(e){return{label:e.label,kind:r[e.kind],deviceId:e.id,groupId:""}}))})})},getSupportedConstraints:function(){return{deviceId:!0,echoCancellation:!0,facingMode:!0,frameRate:!0,height:!0,width:!0}}}),r.mediaDevices.getUserMedia){var d=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(e){return o(e,function(e){return d(e).then(function(t){if(e.audio&&!t.getAudioTracks().length||e.video&&!t.getVideoTracks().length)throw t.getTracks().forEach(function(e){e.stop()}),new DOMException("","NotFoundError");return t},function(e){return Promise.reject(s(e))})})}}else r.mediaDevices.getUserMedia=function(e){return c(e)};void 0===r.mediaDevices.addEventListener&&(r.mediaDevices.addEventListener=function(){i("Dummy mediaDevices.addEventListener called.")}),void 0===r.mediaDevices.removeEventListener&&(r.mediaDevices.removeEventListener=function(){i("Dummy mediaDevices.removeEventListener called.")})}},{"../utils.js":14}],7:[function(e,t,r){"use strict";var n=e("sdp"),i=e("./utils");t.exports={shimRTCIceCandidate:function(e){if(e.RTCIceCandidate&&!(e.RTCIceCandidate&&"foundation"in e.RTCIceCandidate.prototype)){var t=e.RTCIceCandidate;e.RTCIceCandidate=function(e){if("object"==typeof e&&e.candidate&&0===e.candidate.indexOf("a=")&&((e=JSON.parse(JSON.stringify(e))).candidate=e.candidate.substr(2)),e.candidate&&e.candidate.length){var r=new t(e),i=n.parseCandidate(e.candidate),a=Object.assign(r,i);return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new t(e)},e.RTCIceCandidate.prototype=t.prototype,i.wrapPeerConnectionEvent(e,"icecandidate",function(t){return t.candidate&&Object.defineProperty(t,"candidate",{value:new e.RTCIceCandidate(t.candidate),writable:"false"}),t})}},shimCreateObjectURL:function(e){var t=e&&e.URL;if("object"==typeof e&&e.HTMLMediaElement&&"srcObject"in e.HTMLMediaElement.prototype&&t.createObjectURL&&t.revokeObjectURL){var r=t.createObjectURL.bind(t),n=t.revokeObjectURL.bind(t),a=new Map,o=0;t.createObjectURL=function(e){if("getTracks"in e){var t="polyblob:"+ ++o;return a.set(t,e),i.deprecated("URL.createObjectURL(stream)","elem.srcObject = stream"),t}return r(e)},t.revokeObjectURL=function(e){n(e),a.delete(e)};var s=Object.getOwnPropertyDescriptor(e.HTMLMediaElement.prototype,"src");Object.defineProperty(e.HTMLMediaElement.prototype,"src",{get:function(){return s.get.apply(this)},set:function(e){return this.srcObject=a.get(e)||null,s.set.apply(this,[e])}});var c=e.HTMLMediaElement.prototype.setAttribute;e.HTMLMediaElement.prototype.setAttribute=function(){return 2===arguments.length&&"src"===(""+arguments[0]).toLowerCase()&&(this.srcObject=a.get(arguments[1])||null),c.apply(this,arguments)}}},shimMaxMessageSize:function(e){if(!e.RTCSctpTransport&&e.RTCPeerConnection){var t=i.detectBrowser(e);"sctp"in e.RTCPeerConnection.prototype||Object.defineProperty(e.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}});var r=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e,i,a,o;if(this._sctp=null,a=arguments[0],(o=n.splitSections(a.sdp)).shift(),o.some(function(e){var t=n.parseMLine(e);return t&&"application"===t.kind&&-1!==t.protocol.indexOf("SCTP")})){var s,c=function(e){var t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===t||t.length<2)return-1;var r=parseInt(t[1],10);return r!=r?-1:r}(arguments[0]),d=(e=c,i=65536,"firefox"===t.browser&&(i=t.version<57?-1===e?16384:2147483637:t.version<60?57===t.version?65535:65536:2147483637),i),p=function(e,r){var i=65536;"firefox"===t.browser&&57===t.version&&(i=65535);var a=n.matchPrefix(e.sdp,"a=max-message-size:");return a.length>0?i=parseInt(a[0].substr(19),10):"firefox"===t.browser&&-1!==r&&(i=2147483637),i}(arguments[0],c);s=0===d&&0===p?Number.POSITIVE_INFINITY:0===d||0===p?Math.max(d,p):Math.min(d,p);var u={};Object.defineProperty(u,"maxMessageSize",{get:function(){return s}}),this._sctp=u}return r.apply(this,arguments)}}},shimSendThrowTypeError:function(e){if(e.RTCPeerConnection&&"createDataChannel"in e.RTCPeerConnection.prototype){var t=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){var e=t.apply(this,arguments);return r(e,this),e},i.wrapPeerConnectionEvent(e,"datachannel",function(e){return r(e.channel,e.target),e})}function r(e,t){var r=e.send;e.send=function(){var n=arguments[0],i=n.length||n.size||n.byteLength;if("open"===e.readyState&&t.sctp&&i>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)");return r.apply(e,arguments)}}}}},{"./utils":14,sdp:2}],8:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./filtericeservers"),a=e("rtcpeerconnection-shim");t.exports={shimGetUserMedia:e("./getusermedia"),shimPeerConnection:function(e){var t=n.detectBrowser(e);if(e.RTCIceGatherer&&(e.RTCIceCandidate||(e.RTCIceCandidate=function(e){return e}),e.RTCSessionDescription||(e.RTCSessionDescription=function(e){return e}),t.version<15025)){var r=Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype,"enabled");Object.defineProperty(e.MediaStreamTrack.prototype,"enabled",{set:function(e){r.set.call(this,e);var t=new Event("enabled");t.enabled=e,this.dispatchEvent(t)}})}!e.RTCRtpSender||"dtmf"in e.RTCRtpSender.prototype||Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new e.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),e.RTCDtmfSender&&!e.RTCDTMFSender&&(e.RTCDTMFSender=e.RTCDtmfSender);var o=a(e,t.version);e.RTCPeerConnection=function(e){return e&&e.iceServers&&(e.iceServers=i(e.iceServers)),new o(e)},e.RTCPeerConnection.prototype=o.prototype},shimReplaceTrack:function(e){!e.RTCRtpSender||"replaceTrack"in e.RTCRtpSender.prototype||(e.RTCRtpSender.prototype.replaceTrack=e.RTCRtpSender.prototype.setTrack)}}},{"../utils":14,"./filtericeservers":9,"./getusermedia":10,"rtcpeerconnection-shim":1}],9:[function(e,t,r){"use strict";var n=e("../utils");t.exports=function(e,t){var r=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var i=e.urls||e.url;e.url&&!e.urls&&n.deprecated("RTCIceServer.url","RTCIceServer.urls");var a="string"==typeof i;return a&&(i=[i]),i=i.filter(function(e){return 0===e.indexOf("turn:")&&-1!==e.indexOf("transport=udp")&&-1===e.indexOf("turn:[")&&!r?(r=!0,!0):0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp")}),delete e.url,e.urls=a?i[0]:i,!!i.length}})}},{"../utils":14}],10:[function(e,t,r){"use strict";t.exports=function(e){var t=e&&e.navigator,r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(e){return r(e).catch(function(e){return Promise.reject({name:{PermissionDeniedError:"NotAllowedError"}[(t=e).name]||t.name,message:t.message,constraint:t.constraint,toString:function(){return this.name}});var t})}}},{}],11:[function(e,t,r){"use strict";var n=e("../utils");t.exports={shimGetUserMedia:e("./getusermedia"),shimOnTrack:function(e){"object"!=typeof e||!e.RTCPeerConnection||"ontrack"in e.RTCPeerConnection.prototype||Object.defineProperty(e.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&(this.removeEventListener("track",this._ontrack),this.removeEventListener("addstream",this._ontrackpoly)),this.addEventListener("track",this._ontrack=e),this.addEventListener("addstream",this._ontrackpoly=function(e){e.stream.getTracks().forEach(function(t){var r=new Event("track");r.track=t,r.receiver={track:t},r.transceiver={receiver:r.receiver},r.streams=[e.stream],this.dispatchEvent(r)}.bind(this))}.bind(this))},enumerable:!0,configurable:!0}),"object"==typeof e&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})},shimSourceObject:function(e){"object"==typeof e&&(!e.HTMLMediaElement||"srcObject"in e.HTMLMediaElement.prototype||Object.defineProperty(e.HTMLMediaElement.prototype,"srcObject",{get:function(){return this.mozSrcObject},set:function(e){this.mozSrcObject=e}}))},shimPeerConnection:function(e){var t=n.detectBrowser(e);if("object"==typeof e&&(e.RTCPeerConnection||e.mozRTCPeerConnection)){e.RTCPeerConnection||(e.RTCPeerConnection=function(r,n){if(t.version<38&&r&&r.iceServers){for(var i=[],a=0;a<r.iceServers.length;a++){var o=r.iceServers[a];if(o.hasOwnProperty("urls"))for(var s=0;s<o.urls.length;s++){var c={url:o.urls[s]};0===o.urls[s].indexOf("turn")&&(c.username=o.username,c.credential=o.credential),i.push(c)}else i.push(r.iceServers[a])}r.iceServers=i}return new e.mozRTCPeerConnection(r,n)},e.RTCPeerConnection.prototype=e.mozRTCPeerConnection.prototype,e.mozRTCPeerConnection.generateCertificate&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get:function(){return e.mozRTCPeerConnection.generateCertificate}}),e.RTCSessionDescription=e.mozRTCSessionDescription,e.RTCIceCandidate=e.mozRTCIceCandidate),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){var r=e.RTCPeerConnection.prototype[t];e.RTCPeerConnection.prototype[t]=function(){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)}});var r=e.RTCPeerConnection.prototype.addIceCandidate;e.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?r.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())};var i={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},a=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(e,r,n){return a.apply(this,[e||null]).then(function(e){var n,a;if(t.version<48&&(n=e,a=new Map,Object.keys(n).forEach(function(e){a.set(e,n[e]),a[e]=n[e]}),e=a),t.version<53&&!r)try{e.forEach(function(e){e.type=i[e.type]||e.type})}catch(t){if("TypeError"!==t.name)throw t;e.forEach(function(t,r){e.set(r,Object.assign({},t,{type:i[t.type]||t.type}))})}return e}).then(r,n)}}},shimSenderGetStats:function(e){if("object"==typeof e&&e.RTCPeerConnection&&e.RTCRtpSender&&!(e.RTCRtpSender&&"getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,r=t.apply(e,[]);return r.forEach(function(t){t._pc=e}),r});var r=e.RTCPeerConnection.prototype.addTrack;r&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=r.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}},shimReceiverGetStats:function(e){if("object"==typeof e&&e.RTCPeerConnection&&e.RTCRtpSender&&!(e.RTCRtpSender&&"getStats"in e.RTCRtpReceiver.prototype)){var t=e.RTCPeerConnection.prototype.getReceivers;t&&(e.RTCPeerConnection.prototype.getReceivers=function(){var e=this,r=t.apply(e,[]);return r.forEach(function(t){t._pc=e}),r}),n.wrapPeerConnectionEvent(e,"track",function(e){return e.receiver._pc=e.srcElement,e}),e.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}},shimRemoveStream:function(e){!e.RTCPeerConnection||"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;n.deprecated("removeStream","removeTrack"),this.getSenders().forEach(function(r){r.track&&-1!==e.getTracks().indexOf(r.track)&&t.removeTrack(r)})})},shimRTCDataChannel:function(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)},shimGetDisplayMedia:function(e,t){"getDisplayMedia"in e.navigator||(navigator.getDisplayMedia=function(e){if(!e||!e.video){var r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return!0===e.video?e.video={mediaSource:t}:e.video.mediaSource=t,navigator.mediaDevices.getUserMedia(e)})}}},{"../utils":14,"./getusermedia":12}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=n.log;t.exports=function(e){var t=n.detectBrowser(e),r=e&&e.navigator,a=e&&e.MediaStreamTrack,o=function(e){return{name:{InternalError:"NotReadableError",NotSupportedError:"TypeError",PermissionDeniedError:"NotAllowedError",SecurityError:"NotAllowedError"}[e.name]||e.name,message:{"The operation is insecure.":"The request is not allowed by the user agent or the platform in the current context."}[e.message]||e.message,constraint:e.constraint,toString:function(){return this.name+(this.message&&": ")+this.message}}},s=function(e,n,a){var s=function(e){if("object"!=typeof e||e.require)return e;var t=[];return Object.keys(e).forEach(function(r){if("require"!==r&&"advanced"!==r&&"mediaSource"!==r){var n=e[r]="object"==typeof e[r]?e[r]:{ideal:e[r]};if(void 0===n.min&&void 0===n.max&&void 0===n.exact||t.push(r),void 0!==n.exact&&("number"==typeof n.exact?n.min=n.max=n.exact:e[r]=n.exact,delete n.exact),void 0!==n.ideal){e.advanced=e.advanced||[];var i={};"number"==typeof n.ideal?i[r]={min:n.ideal,max:n.ideal}:i[r]=n.ideal,e.advanced.push(i),delete n.ideal,Object.keys(n).length||delete e[r]}}}),t.length&&(e.require=t),e};return e=JSON.parse(JSON.stringify(e)),t.version<38&&(i("spec: "+JSON.stringify(e)),e.audio&&(e.audio=s(e.audio)),e.video&&(e.video=s(e.video)),i("ff37: "+JSON.stringify(e))),r.mozGetUserMedia(e,n,function(e){a(o(e))})};if(r.mediaDevices||(r.mediaDevices={getUserMedia:function(e){return new Promise(function(t,r){s(e,t,r)})},addEventListener:function(){},removeEventListener:function(){}}),r.mediaDevices.enumerateDevices=r.mediaDevices.enumerateDevices||function(){return new Promise(function(e){e([{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}])})},t.version<41){var c=r.mediaDevices.enumerateDevices.bind(r.mediaDevices);r.mediaDevices.enumerateDevices=function(){return c().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}if(t.version<49){var d=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(e){return d(e).then(function(t){if(e.audio&&!t.getAudioTracks().length||e.video&&!t.getVideoTracks().length)throw t.getTracks().forEach(function(e){e.stop()}),new DOMException("The object can not be found here.","NotFoundError");return t},function(e){return Promise.reject(o(e))})}}if(!(t.version>55&&"autoGainControl"in r.mediaDevices.getSupportedConstraints())){var p=function(e,t,r){t in e&&!(r in e)&&(e[r]=e[t],delete e[t])},u=r.mediaDevices.getUserMedia.bind(r.mediaDevices);if(r.mediaDevices.getUserMedia=function(e){return"object"==typeof e&&"object"==typeof e.audio&&(e=JSON.parse(JSON.stringify(e)),p(e.audio,"autoGainControl","mozAutoGainControl"),p(e.audio,"noiseSuppression","mozNoiseSuppression")),u(e)},a&&a.prototype.getSettings){var f=a.prototype.getSettings;a.prototype.getSettings=function(){var e=f.apply(this,arguments);return p(e,"mozAutoGainControl","autoGainControl"),p(e,"mozNoiseSuppression","noiseSuppression"),e}}if(a&&a.prototype.applyConstraints){var l=a.prototype.applyConstraints;a.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"==typeof e&&(e=JSON.parse(JSON.stringify(e)),p(e,"autoGainControl","mozAutoGainControl"),p(e,"noiseSuppression","mozNoiseSuppression")),l.apply(this,[e])}}}r.getUserMedia=function(e,i,a){if(t.version<44)return s(e,i,a);n.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),r.mediaDevices.getUserMedia(e).then(i,a)}}},{"../utils":14}],13:[function(e,t,r){"use strict";var n=e("../utils");t.exports={shimLocalStreamsAPI:function(e){if("object"==typeof e&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),"getStreamById"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getStreamById=function(e){var t=null;return this._localStreams&&this._localStreams.forEach(function(r){r.id===e&&(t=r)}),this._remoteStreams&&this._remoteStreams.forEach(function(r){r.id===e&&(t=r)}),t}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){this._localStreams||(this._localStreams=[]),-1===this._localStreams.indexOf(e)&&this._localStreams.push(e);var r=this;e.getTracks().forEach(function(n){t.call(r,n,e)})},e.RTCPeerConnection.prototype.addTrack=function(e,r){return r&&(this._localStreams?-1===this._localStreams.indexOf(r)&&this._localStreams.push(r):this._localStreams=[r]),t.call(this,e,r)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){this._localStreams||(this._localStreams=[]);var t=this._localStreams.indexOf(e);if(-1!==t){this._localStreams.splice(t,1);var r=this,n=e.getTracks();this.getSenders().forEach(function(e){-1!==n.indexOf(e.track)&&r.removeTrack(e)})}})}},shimRemoteStreamsAPI:function(e){if("object"==typeof e&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){this._onaddstream&&this.removeEventListener("addstream",this._onaddstream),this.addEventListener("addstream",this._onaddstream=e)}});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach(function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t);var r=new Event("addstream");r.stream=t,e.dispatchEvent(r)}})}),t.apply(e,arguments)}}},shimCallbacksAPI:function(e){if("object"==typeof e&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,r=t.createOffer,n=t.createAnswer,i=t.setLocalDescription,a=t.setRemoteDescription,o=t.addIceCandidate;t.createOffer=function(e,t){var n=arguments.length>=2?arguments[2]:arguments[0],i=r.apply(this,[n]);return t?(i.then(e,t),Promise.resolve()):i},t.createAnswer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],i=n.apply(this,[r]);return t?(i.then(e,t),Promise.resolve()):i};var s=function(e,t,r){var n=i.apply(this,[e]);return r?(n.then(t,r),Promise.resolve()):n};t.setLocalDescription=s,s=function(e,t,r){var n=a.apply(this,[e]);return r?(n.then(t,r),Promise.resolve()):n},t.setRemoteDescription=s,s=function(e,t,r){var n=o.apply(this,[e]);return r?(n.then(t,r),Promise.resolve()):n},t.addIceCandidate=s}},shimGetUserMedia:function(e){var t=e&&e.navigator;t.getUserMedia||(t.webkitGetUserMedia?t.getUserMedia=t.webkitGetUserMedia.bind(t):t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,r,n){t.mediaDevices.getUserMedia(e).then(r,n)}.bind(t)))},shimRTCIceServerUrls:function(e){var t=e.RTCPeerConnection;e.RTCPeerConnection=function(e,r){if(e&&e.iceServers){for(var i=[],a=0;a<e.iceServers.length;a++){var o=e.iceServers[a];!o.hasOwnProperty("urls")&&o.hasOwnProperty("url")?(n.deprecated("RTCIceServer.url","RTCIceServer.urls"),(o=JSON.parse(JSON.stringify(o))).urls=o.url,delete o.url,i.push(o)):i.push(e.iceServers[a])}e.iceServers=i}return new t(e,r)},e.RTCPeerConnection.prototype=t.prototype,"generateCertificate"in e.RTCPeerConnection&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get:function(){return t.generateCertificate}})},shimTrackEventTransceiver:function(e){"object"==typeof e&&e.RTCPeerConnection&&"receiver"in e.RTCTrackEvent.prototype&&!e.RTCTransceiver&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})},shimCreateOfferLegacy:function(e){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){var r=this;if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);var n=r.getTransceivers().find(function(e){return e.sender.track&&"audio"===e.sender.track.kind});!1===e.offerToReceiveAudio&&n?"sendrecv"===n.direction?n.setDirection?n.setDirection("sendonly"):n.direction="sendonly":"recvonly"===n.direction&&(n.setDirection?n.setDirection("inactive"):n.direction="inactive"):!0!==e.offerToReceiveAudio||n||r.addTransceiver("audio"),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);var i=r.getTransceivers().find(function(e){return e.sender.track&&"video"===e.sender.track.kind});!1===e.offerToReceiveVideo&&i?"sendrecv"===i.direction?i.setDirection("sendonly"):"recvonly"===i.direction&&i.setDirection("inactive"):!0!==e.offerToReceiveVideo||i||r.addTransceiver("video")}return t.apply(r,arguments)}}}},{"../utils":14}],14:[function(e,t,r){"use strict";var n=!0,i=!0;function a(e,t,r){var n=e.match(t);return n&&n.length>=r&&parseInt(n[r],10)}t.exports={extractVersion:a,wrapPeerConnectionEvent:function(e,t,r){if(e.RTCPeerConnection){var n=e.RTCPeerConnection.prototype,i=n.addEventListener;n.addEventListener=function(e,n){if(e!==t)return i.apply(this,arguments);var a=function(e){var t=r(e);t&&n(t)};return this._eventMap=this._eventMap||{},this._eventMap[n]=a,i.apply(this,[e,a])};var a=n.removeEventListener;n.removeEventListener=function(e,r){if(e!==t||!this._eventMap||!this._eventMap[r])return a.apply(this,arguments);var n=this._eventMap[r];return delete this._eventMap[r],a.apply(this,[e,n])},Object.defineProperty(n,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}},disableLog:function(e){return"boolean"!=typeof e?new Error("Argument type: "+typeof e+". Please use a boolean."):(n=e,e?"adapter.js logging disabled":"adapter.js logging enabled")},disableWarnings:function(e){return"boolean"!=typeof e?new Error("Argument type: "+typeof e+". Please use a boolean."):(i=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))},log:function(){if("object"==typeof window){if(n)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}},deprecated:function(e,t){i&&console.warn(e+" is deprecated, please use "+t+" instead.")},detectBrowser:function(e){var t=e&&e.navigator,r={};if(r.browser=null,r.version=null,void 0===e||!e.navigator)return r.browser="Not a browser.",r;if(t.mozGetUserMedia)r.browser="firefox",r.version=a(t.userAgent,/Firefox\/(\d+)\./,1);else if(t.webkitGetUserMedia)r.browser="chrome",r.version=a(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.mediaDevices&&t.userAgent.match(/Edge\/(\d+).(\d+)$/))r.browser="edge",r.version=a(t.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!e.RTCPeerConnection||!t.userAgent.match(/AppleWebKit\/(\d+)\./))return r.browser="Not a supported browser.",r;r.browser="safari",r.version=a(t.userAgent,/AppleWebKit\/(\d+)\./,1)}return r}}},{}]},{},[3])(3)});

//Detecting if Flash Player is of the PPAPI variety used by Chrome and Opera
function getFlashPlayerType(){

	var isPPAPI = false;
	var type = 'application/x-shockwave-flash';
	var mimeTypes = navigator.mimeTypes;

	if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin  && (mimeTypes[type].enabledPlugin.filename.match(/pepflashplayer|Pepper/gi))){
		isPPAPI = true;
	}

	return isPPAPI;
}

//this function is called by the Flash version of Pipe and it used to determine if Chrome is version 60+, because in this version Chrome started to allow access to the camera and microphone only on secure origins (HTTPS)
function getVersionOfChrome () {
	    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	    return raw ? parseInt(raw[2], 10) : false;
}
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = pipeDesktopUploader = {

	options: {},

	addPipeDesktopUploader: function addPipeDesktopUploader(pipeElement, pipeVars, extraParams) {

		pipeDesktopUploader.options = {
			beforeSend: beforeSubmit,
			success: afterSuccess,
			xhr: OnProgress
		};

		function beforeSubmit() {
			//console.log("beforeSubmit()");
			if (window.File && window.FileReader && window.FileList && window.Blob) {
				jQuery('#output-' + pipeElement).css('color', normalCol);
				jQuery("#output-" + pipeElement).html("");
				if (!jQuery('#pipeStartUploading-' + pipeElement).val()) {
					return false;
				}

				//========== Desktop Upload API ================
				var filename = jQuery('#pipeStartUploading-' + pipeElement).val().split(".")[0];
				var filetype = jQuery('#pipeStartUploading-' + pipeElement).val().split(".")[1];

				if (pipeVars["ao"] == 1) {
					//event API call
					PipeSDK.recorders[pipeElement].onDesktopVideoUploadStarted(pipeElement, filename, filetype, true);
				} else {
					//event API call
					PipeSDK.recorders[pipeElement].onDesktopVideoUploadStarted(pipeElement, filename, filetype, false);
				}

				//=======================================

				jQuery('#output-' + pipeElement).html(extraParams.uploadingTxt + '...0%');

				var ftype = jQuery('#pipeStartUploading-' + pipeElement)[0].files[0].type;

				if (pipeVars["ao"] == 0) {
					if (ftype.indexOf("audio/") != -1) {
						jQuery("#output-" + pipeElement).html("<b>" + ftype + "</b> " + extraParams.unsupportedTxt);
						return false;
					}
				}

				switch (ftype) {
					case 'video/mp4':
					case 'video/quicktime':
					case 'video/webm':
					case 'video/3gpp':
					case 'video/3gpp2':
					case 'video/x-flv':
					case 'video/x-msvideo':
					case 'video/x-ms-wmv':
					case 'video/x-matroska':
					case 'video/mpeg':
					case 'audio/aac':
					case 'audio/webm':
					case 'audio/3gpp':
					case 'audio/3gpp2':
					case 'audio/mp4':
					case 'audio/mpeg':
					case 'audio/m4a':
					case 'audio/x-m4a':
					case 'audio/mp3':
					case 'audio/x-wav':
					case 'audio/wav':
					case 'audio/ogg':
					case 'audio/x-ms-wma':
					case 'audio/flac':
						break;
					default:
						jQuery("#output-" + pipeElement).html("<b>" + ftype + "</b> " + extraParams.unsupportedTxt);
						return false;
				}
			} else {
				jQuery("#output-" + pipeElement).html(extraParams.upgradeTxt);
				return false;
			}
		}

		function OnProgress() {
			//console.log(extraParams.uploadingTxt);

			jQuery('#pipeStartRecording-' + pipeElement).hide();
			jQuery('#pipe-upload-wrap-' + pipeElement).hide();
			jQuery('#pipeRecordScreen-' + pipeElement).hide();

			var jqXHR = null;
			if (window.ActiveXObject) {
				jqXHR = new window.ActiveXObject("Microsoft.XMLHTTP");
			} else {
				jqXHR = new window.XMLHttpRequest();
			}
			//Upload progress
			jqXHR.upload.addEventListener("progress", function (evt) {
				if (evt.lengthComputable) {
					var percentComplete = Math.round(evt.loaded * 100 / evt.total);

					//console.log( 'Uploaded percent', percentComplete );
					jQuery('#output-' + pipeElement).html(extraParams.uploadingTxt + '...' + percentComplete + '%');
				}
			}, false);

			return jqXHR;
		}

		function afterSuccess(data) {
			//var res = data.split("#");
			//var fileName = res[0];
			var res = JSON.parse(data);
			if (res.s == 1) {
				jQuery("#output-" + pipeElement).html('<img src="' + ("https:" == document.location.protocol ? "https://" : "http://") + 's1.addpipe.com/2.0/img/svg/done.svg" style="vertical-align: middle;"/>&nbsp; ' + extraParams.doneTxt);
				jQuery('#output-' + pipeElement).css('color', extraParams.normalCol);
				jQuery("#uploadAnother-" + pipeElement).show();

				var fileName = res.f;
				console.log("filename=" + fileName);

				//============= Desktop Upload API ====================
				var name = fileName.split(".")[0];
				var type = fileName.split(".")[1];

				if (pipeVars["ao"] == 1) {
					//event API call
					PipeSDK.recorders[pipeElement].onDesktopVideoUploadSuccess(pipeElement, name, type, res.id, true, storageS3Location);
				} else {
					//event API call
					PipeSDK.recorders[pipeElement].onDesktopVideoUploadSuccess(pipeElement, name, type, res.id, false, storageS3Location);
				}

				jQuery("#uploadAnother-" + pipeElement).click(showInitScreen);
				jQuery('#uploadAnother-' + pipeElement).keydown(function (event) {
					if (event.which == 13) {
						event.preventDefault();
						showInitScreen();
					}
				});
			} else if (res.s == 0) {

				if (pipeVars["accountHash"] == "NON-EXISTENT-HASH-SO-THAT-THE-VIDEOS-ARE-NOT-PROCESSED-AT-ALL") {

					jQuery("#output-" + pipeElement).html('<img src="' + ("https:" == document.location.protocol ? "https://" : "http://") + 's1.addpipe.com/2.0/img/svg/done.svg" style="vertical-align: middle;"/>&nbsp; ' + extraParams.doneTxt);
					jQuery('#output-' + pipeElement).css('color', extraParams.normalCol);
					jQuery("#uploadAnother-" + pipeElement).show();

					jQuery("#uploadAnother-" + pipeElement).click(showInitScreen);
					jQuery('#uploadAnother-' + pipeElement).keydown(function (event) {
						if (event.which == 13) {
							event.preventDefault();
							showInitScreen();
						}
					});
				} else {

					jQuery("#output-" + pipeElement).html(extraParams.uploadFailedTxt);
					jQuery('#output-' + pipeElement).css('color', '#f00');

					//=========== Desktop Upload API =================

					//event API call
					PipeSDK.recorders[pipeElement].onDesktopVideoUploadFailed(pipeElement, res.e);
				}
			}
		}

		function showInitScreen() {
			jQuery('#pipeStartRecording-' + pipeElement).show();
			jQuery('#pipe-upload-wrap-' + pipeElement).show();
			if (pipeVars["srec"] && pipeVars["srec"] != "" && (extraParams.accType == 50 || extraParams.accType == 1) && isChromeBrowser() == true && extraParams.webRtcClient == true && navigator.userAgent.toLowerCase().indexOf("android") == -1) {
				jQuery('#pipeRecordScreen-' + pipeElement).show();
			}
			jQuery("#uploadAnother-" + pipeElement).hide();
			jQuery("#output-" + pipeElement).html("");
		}

		function isChromeBrowser() {
			var isChromium = window.chrome,
			    winNav = window.navigator,
			    vendorName = winNav.vendor,
			    isOpera = winNav.userAgent.indexOf("OPR") > -1,
			    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
			    isIOSChrome = winNav.userAgent.match("CriOS");

			if (isIOSChrome) {
				// is Google Chrome on IOS
				return false;
			} else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
				// is Google Chrome
				return true;
			} else {
				// not Google Chrome
				return false;
			}
		}
	},

	//construct and send data
	sendData: function sendData(pipeElement, pipeVars, options) {
		var formData = new FormData();
		formData.append('deskUp', "deskUp");
		formData.append('FileInput', jQuery('#pipeStartUploading-' + pipeElement)[0].files[0]);
		formData.append('accountHash', pipeVars["accountHash"]);
		formData.append('payload', pipeVars["payload"] ? encodeURIComponent(pipeVars["payload"]) : '');
		formData.append('httpReferer', encodeURIComponent(window.location.href));
		formData.append('mrt', pipeVars["mrt"]);
		formData.append('environmentId', pipeVars["eid"] ? pipeVars["eid"] : '1');
		formData.append('audioOnly', pipeVars["ao"] ? pipeVars["ao"] : '0');

		jQuery.ajax({
			url: ('https:' == document.location.protocol ? 'https://' : 'http://') + html5Server + "/upload",
			type: "POST",
			processData: false,
			contentType: false,
			data: formData,
			beforeSend: options.beforeSend,
			success: options.success,
			xhr: options.xhr
		});
	}
};

},{}],2:[function(require,module,exports){
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = pipeFlashRecorder = {

	addPipeFlashRecorder: function addPipeFlashRecorder(pipeElement, pipeVars) {

		var params = {
			base: ('https:' == document.location.protocol ? 'https://' : 'http://') + "s1.addpipe.com/2.0/",
			allowscriptaccess: "always",
			wmode: "transparent"
		};
		var attributes = {
			name: "VideoRecorder",
			id: pipeElement + "-flash",
			align: "middle"
		};

		var hasFlash = function (a, b) {
			try {
				a = new ActiveXObject(a + b + '.' + a + b);
			} catch (e) {
				a = navigator.plugins[a + ' ' + b];
			}return !!a;
		}('Shockwave', 'Flash');
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
		var isFirefox = typeof InstallTrigger !== 'undefined';

		if (isIE && hasFlash == false || isFirefox && hasFlash == false) {

			document.getElementById(pipeElement).innerHTML = '<div id="getFlash-' + pipeElement + '" class="getFlash"><p><a style = "color:#ffffff !important;" href="' + ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.adobe.com/go/getflashplayer" target="_blank">Flash Player is needed to display this content</a></p></div>';

			//custom style for elements
			document.getElementById("getFlash-" + pipeElement).style.width = pipeVars["size"]["width"] + "px";
			document.getElementById("getFlash-" + pipeElement).style.height = pipeVars["size"]["height"] + "px";
		} else {

			document.getElementById(pipeElement).style.width = pipeVars["size"]["width"] + "px";
			document.getElementById(pipeElement).style.height = pipeVars["size"]["height"] + "px";

			if (pipeVars && (typeof pipeVars === 'undefined' ? 'undefined' : _typeof(pipeVars)) === "object") {
				for (var k in pipeVars) {
					if (typeof flashVarsString != "undefined") {
						if (k == "payload") {
							flashVarsString += "&" + k + "=" + encodeURIComponent(pipeVars[k]);
						} else {

							if (k == "showMenu") {
								if (pipeVars[k] == 1) {
									pipeVars[k] = "true";
								} else if (pipeVars[k] == 0) {
									pipeVars[k] = "false";
								}
							}

							flashVarsString += "&" + k + "=" + pipeVars[k];
						}
					} else {
						if (k == "payload") {
							flashVarsString = k + "=" + encodeURIComponent(pipeVars[k]);
						} else {

							if (k == "showMenu") {
								if (pipeVars[k] == 1) {
									pipeVars[k] = "true";
								} else if (pipeVars[k] == 0) {
									pipeVars[k] = "false";
								}
							}

							flashVarsString = k + "=" + pipeVars[k];
						}
					}
				}

				flashVarsString += "&recorderId=" + pipeElement;

				//region conf
				flashVarsString += "&cs=" + encodeURIComponent("rtmps://" + flashServer + "/hdfvr/_definst_");
				flashVarsString += "&s3Loc=" + encodeURIComponent(storageS3Location);
			}

			//Detecting IE less than version 9
			var div = document.createElement("div");
			div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
			var isIeLessThan9 = div.getElementsByTagName("i").length == 1;

			if (isIE && isIeLessThan9) {
				document.getElementById(pipeElement).innerHTML = '<object type="application/x-shockwave-flash" name="' + attributes["name"] + '" id="' + attributes["id"] + '" align="' + attributes["align"] + '" width="' + pipeVars["size"]["width"] + '" height="' + pipeVars["size"]["height"] + '"> <param name="base" value="' + params["base"] + '"> <param name="allowscriptaccess" value="' + params["allowscriptaccess"] + '"><param name="wmode" value="' + params["wmode"] + '"><param name="flashvars" value="' + flashVarsString + '"><param name="movie" value="' + ('https:' == document.location.protocol ? 'https://' : 'http://') + 's1.addpipe.com/2.0/VideoRecorder.swf"></object> ';
			} else {
				document.getElementById(pipeElement).innerHTML = '<object type="application/x-shockwave-flash" name="' + attributes["name"] + '" id="' + attributes["id"] + '" align="' + attributes["align"] + '" data="' + ('https:' == document.location.protocol ? 'https://' : 'http://') + 's1.addpipe.com/2.0/VideoRecorder.swf" width="' + pipeVars["size"]["width"] + '" height="' + pipeVars["size"]["height"] + '"> <param name="base" value="' + params["base"] + '"> <param name="allowscriptaccess" value="' + params["allowscriptaccess"] + '"><param name="wmode" value="' + params["wmode"] + '"><param name="flashvars" value="' + flashVarsString + '"></object> ';
			}
		}
	}
};

},{}],3:[function(require,module,exports){
module.exports = pipeMobileRecorder = {

  addPipeMobileRecorder: function addPipeMobileRecorder(pipeElement, pipeVars) {

    var maintenance = 0; //this is used for maintenance mode

    //language detection. Default is English
    var langCode = "en";
    if (prefLang == "fr" || prefLang == "de" || prefLang == "es") {
      langCode = prefLang;
    }

    languageFileURL = ("https:" == document.location.protocol ? "https://" : "http://") + "s1.addpipe.com/2.0/" + (pipeVars["lang"] ? pipeVars["lang"] : 'translations/' + langCode + '.xml');
    if (pipeVars["lang"]) {
      if (pipeVars["lang"].indexOf("http") != -1) {
        languageFileURL = pipeVars["lang"];
      }
    }

    //load the language XML file
    jQuery.ajax({
      url: languageFileURL,
      dataType: 'xml',
      success: function success(data) {

        var xml_node = jQuery('xliff', data);

        if (pipeVars["dpv"] == 0 || pipeVars["dpv"] == undefined) {
          btnRecTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_BTN_RECORD"] > source').text();
        } else {
          btnRecTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_BT_RECORD"] > source').text();
        }

        //loading error text for iOS
        if (pipeVars["ao"] == 1) {
          iOSErrorTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_BTN_RECORD_AUDIO_IOS_ERROR"] > source').text();

          if (iOSErrorTxt == "") {
            iOSErrorTxt = "Audio only recording is not possible on iOS";
          }
        }

        //check if the client has an old version of XML file without the mobile translations

        if (btnRecTxt != "") {

          if (pipeVars["ao"] == 1) {
            if (pipeVars["dpv"] == 0 || pipeVars["dpv"] == undefined) {
              btnRecTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_BTN_RECORD_AUDIO"] > source').text();
              if (btnRecTxt == "") {
                btnRecTxt = "Record or select an audio file";
              }
            } else {
              btnRecTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_BT_RECORD"] > source').text();
              if (btnRecTxt == "") {
                btnRecTxt = "Record";
              }
            }
          }

          btnUploadTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_BTN_UPLOAD"] > source').text();
          maintenanceTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_OFFLINE"] > source').text();
          selectVidTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_SELECT_VID"] > source').text();
          uploadingTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UPLOADING"] > source').text();
          unsupportedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UNSUPPORTED"] > source').text();
          upgradeTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UPGRADE"] > source').text();
          doneTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_DONE"] > source').text();
          uploadAnotherTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_UPLOAD_AGAIN_DESKTOP"] > source').text();
          accountClosedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_ACC_DISABLED"] > source').text();
          uploadFailedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UPLOAD_FAILED"] > source').text();
        } else {

          //Default is English

          if (pipeVars["ao"] == 1) {
            if (pipeVars["dpv"] == 0 || pipeVars["dpv"] == undefined) {
              btnRecTxt = "Record or select an audio file";
            } else {
              btnRecTxt = "Record";
            }
          } else {
            if (pipeVars["dpv"] == 0 || pipeVars["dpv"] == undefined) {
              btnRecTxt = "Record or select a video file";
            } else {
              btnRecTxt = "Record";
            }
          }

          btnUploadTxt = "Upload";
          maintenanceTxt = "Video recording is in maintenance. Try again in a few minutes.";
          selectVidTxt = "Please select or record a video before uploading.";
          uploadingTxt = "Uploading";
          unsupportedTxt = "Unsupported file type!";
          upgradeTxt = "Please upgrade your browser! Your current one lacks the features needed to record & submit videos.";
          doneTxt = "Done!";
          uploadAnotherTxt = "Record or upload another one";
          accountClosedTxt = "Pipe account has been disabled";
          uploadFailedTxt = "Upload failed!";

          if (langCode == "de") {

            btnRecTxt = "Video aufnehmen";
            btnUploadTxt = "Hochladen";
            maintenanceTxt = "Video-Aufzeichnung ist in Wartung. Versuchen Sie es erneut in ein paar Minuten.";
            selectVidTxt = "Bitte wÃ¤hlen Sie oder ein Video aufnehmen , bevor das Hochladen.";
            uploadingTxt = "Hochladen";
            unsupportedTxt = "Nicht unterstÃ¼tztes Dateiformat!";
            upgradeTxt = "Bitte aktualisieren Sie Ihren Browser! Ihre aktuellen fehlen die notwendigen Funktionen zur Aufzeichnung und Videos einreichen.";
            doneTxt = "Gemacht!";
            uploadAnotherTxt = "Nehmen Sie oder eine andere laden";
            accountClosedTxt = "Pipe Konto wurde deaktiviert";
            uploadFailedTxt = "Upload fehlgeschlagen!";
          } else if (langCode == "fr") {

            btnRecTxt = "Enregistrer ou sÃ©lectionnez un fichier vidÃ©o";
            btnUploadTxt = "TÃ©lÃ©charger";
            maintenanceTxt = "L'enregistrement vidÃ©o est en maintenance . Essayez Ã  nouveau dans quelques minutes.";
            selectVidTxt = "S'il vous plaÃ®t sÃ©lectionner ou enregistrer une vidÃ©o avant de tÃ©lÃ©charger.";
            uploadingTxt = "Uploading";
            unsupportedTxt = "Type de fichier non pris en charge!";
            upgradeTxt = "S'il vous plaÃ®t mettre Ã  jour votre navigateur ! Votre actuel n'a pas les caractÃ©ristiques nÃ©cessaires pour enregistrer et soumettre des vidÃ©os.";
            doneTxt = "TerminÃ©";
            uploadAnotherTxt = "Enregistrer ou tÃ©lÃ©charger un autre";
            accountClosedTxt = "Compte Pipe a Ã©tÃ© dÃ©sactivÃ©";
            uploadFailedTxt = "Ã‰chec de l'envoi!";
          } else if (langCode == "es") {

            btnRecTxt = "Grabar o seleccionar un archivo de vÃ­deo";
            btnUploadTxt = "Subir";
            maintenanceTxt = "La grabaciÃ³n de vÃ­deo se encuentra en mantenimiento. Vuelva a intentarlo en unos minutos.";
            selectVidTxt = "Por favor seleccione o grabar un vÃ­deo antes de subir.";
            uploadingTxt = "Subiendo";
            unsupportedTxt = "Tipo de archivo no soportado!";
            upgradeTxt = "Por favor , actualice su navegador! Su actual carece de las caracterÃ­sticas necesarias para grabar y enviar videos";
            doneTxt = "EstÃ¡ hecho";
            uploadAnotherTxt = "Grabar o subir otro";
            accountClosedTxt = "Cuenta de Pipe se ha desactivado";
            uploadFailedTxt = "Subida fallida!";
          }
        }

        btnRecTxt = btnRecTxt.replace("1. ", "");

        //==========================================

        if (maintenance == 0) {
          /*if(pipeVars["payload"]){
            pipeVars["payload"] = pipeVars["payload"].replace(/\"/g,'\&quot;');
          }*/

          capture = "";
          if (pipeVars["dpv"] == 1) {
            capture = "capture";
          }

          accept = 'accept="video/*"';
          if (pipeVars["ao"] == 1) {
            accept = 'accept="audio/*"';

            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (iOS == true) {
              jQuery("#" + pipeElement).append('<div>' + iOSErrorTxt + '</div>');
              return;
            }
          }

          jQuery("#" + pipeElement).append('<div id="pipe-recording-form-' + pipeElement + '"><label id="label-pipe-file-input-' + pipeElement + '" class="pipeFileInput" for="pipe-file-input-' + pipeElement + '"> &nbsp;' + btnRecTxt + '</label><input name="FileInput" class="pipeStartUploading" id="pipe-file-input-' + pipeElement + '" type="file" ' + accept + ' value="Start Recording" ' + capture + '/></div><div id="output-' + pipeElement + '"></div>');

          document.getElementById(pipeElement).classList.add("pipeMobileRecorder");
        } else {
          jQuery("#" + pipeElement).append('<div>' + maintenanceTxt + '</div>');
        }

        function beforeSubmit() {
          console.log("beforeSubmit()");
          if (window.File && window.FileReader && window.FileList && window.Blob) {
            jQuery('#output-' + pipeElement).css('color', '#000');
            jQuery("#output-" + pipeElement).html("");
            if (!jQuery('#pipe-file-input-' + pipeElement).val()) {
              jQuery("#output-" + pipeElement).html(selectVidTxt);
              return false;
            }

            jQuery('#label-pipe-file-input-' + pipeElement).html(uploadingTxt + '...0%');

            //disable button click
            document.getElementById('label-pipe-file-input-' + pipeElement).style.opacity = 0.7;
            jQuery('#pipe-file-input-' + pipeElement).prop('disabled', true);

            var ftype = jQuery('#pipe-file-input-' + pipeElement)[0].files[0].type;

            switch (ftype) {

              case 'video/mp4':
              case 'video/quicktime':
              case 'video/3gpp':
              case 'video/3gpp2':
              case 'audio/aac':
              case 'audio/3gpp':
              case 'audio/3gpp2':
              case 'audio/mp4':
              case 'audio/mpeg':
              case 'audio/m4a':
              case 'audio/mp3':
                break;
              default:
                jQuery("#output-" + pipeElement).html("<b>" + ftype + "</b> " + unsupportedTxt);
                return false;
            }

            //jQuery('#submit-btn').hide();
            //jQuery('#pipe-loading-img-'+pipeElement).show();
            //jQuery("#output-"+pipeElement).html("");
          } else {
            jQuery("#output-" + pipeElement).html(upgradeTxt);
            return false;
          }
        }

        function OnProgress() {

          var jqXHR = null;
          if (window.ActiveXObject) {
            jqXHR = new window.ActiveXObject("Microsoft.XMLHTTP");
          } else {
            jqXHR = new window.XMLHttpRequest();
          }
          //Upload progress
          jqXHR.upload.addEventListener("progress", function (evt) {
            if (evt.lengthComputable) {
              var percentComplete = Math.round(evt.loaded * 100 / evt.total);

              //console.log( 'Uploaded percent', percentComplete );
              jQuery('#label-pipe-file-input-' + pipeElement).html(uploadingTxt + '...' + percentComplete + '%');

              //event API call
              PipeSDK.recorders[pipeElement].onVideoUploadProgress(pipeElement, percentComplete);
            }
          }, false);

          return jqXHR;
        }

        function onError(xhr, textStatus, errorThrown) {
          //console.log(xhr.status);
          //console.log(textStatus);
          //console.log(errorThrown);

          sendData();
          return;
        }

        function afterSuccess(data) {

          //jQuery('#pipe-loading-img-'+pipeElement).hide();
          //jQuery('#pipe-file-input-'+pipeElement).show();

          //enable button click
          document.getElementById('label-pipe-file-input-' + pipeElement).style.opacity = 1;
          jQuery('#pipe-file-input-' + pipeElement).prop('disabled', false);

          //var res = data.split("#");
          //var fileName = res[0];
          var res = JSON.parse(data);
          if (res.s == 1) {
            //jQuery("#output-"+pipeElement).html(doneTxt);
            //jQuery('#output-'+pipeElement).css('color','#090');
            jQuery('#label-pipe-file-input-' + pipeElement).html(doneTxt + " " + uploadAnotherTxt);
            var fileName = res.f;
            console.log("filename=" + fileName);

            //upload success mobile API
            var name = fileName.split(".")[0];
            var type = fileName.split(".")[1];

            var location = "addpipevideos.s3.amazonaws.com";
            if (name.length == 32) {
              location = storageS3Location;
            }

            if (pipeVars["ao"] == 1) {
              //event API call
              PipeSDK.recorders[pipeElement].onVideoUploadSuccess(pipeElement, name, type, res.id, true, location);
            } else {
              //event API call
              PipeSDK.recorders[pipeElement].onVideoUploadSuccess(pipeElement, name, type, res.id, false, location);
            }
          } else if (res.s == 0) {

            if (res.e == "expired" || res.e == "closed") {
              alert(accountClosedTxt);

              //event API call
              PipeSDK.recorders[pipeElement].onVideoUploadFailed(pipeElement, res.e);
            } else {

              if (pipeVars["accountHash"] == "NON-EXISTENT-HASH-SO-THAT-THE-VIDEOS-ARE-NOT-PROCESSED-AT-ALL") {

                //jQuery("#output-"+pipeElement).html(doneTxt);
                //jQuery('#output-'+pipeElement).css('color','#090');
                jQuery('#label-pipe-file-input-' + pipeElement).html(doneTxt + " " + uploadAnotherTxt);
              } else {

                //jQuery("#output-"+pipeElement).html(uploadFailedTxt);
                //jQuery('#output-'+pipeElement).css('color','#f00');
                jQuery('#label-pipe-file-input-' + pipeElement).html(uploadFailedTxt + " " + uploadAnotherTxt);

                //event API call
                PipeSDK.recorders[pipeElement].onVideoUploadFailed(pipeElement, res.e);
              }
            }
          }
        }

        //====== Mobile API ======
        jQuery('#pipe-file-input-' + pipeElement).change(function (e) {
          $in = jQuery(this);
          //$in.next().html($in.val());

          var filename = $in.val().split(".")[0];
          var filetype = $in.val().split(".")[1];

          //console.log("Video selected " + filename + " " + filetype);
          //jQuery('#pipe-file-input-'+pipeElement).hide();

          sendData();

          if (pipeVars["ao"] == 1) {
            //event API call
            PipeSDK.recorders[pipeElement].onVideoUploadStarted(pipeElement, filename, filetype, true);
          } else {
            //event API call
            PipeSDK.recorders[pipeElement].onVideoUploadStarted(pipeElement, filename, filetype, false);
          }
        });

        //construct and send data
        function sendData() {
          var formData = new FormData();
          formData.append('mobUp', "mobUp");
          formData.append('FileInput', jQuery('#pipe-file-input-' + pipeElement)[0].files[0]);
          formData.append('accountHash', pipeVars["accountHash"]);
          formData.append('payload', pipeVars["payload"] ? encodeURIComponent(pipeVars["payload"]) : '');
          formData.append('httpReferer', encodeURIComponent(window.location.href));
          formData.append('mrt', pipeVars["mrt"]);
          formData.append('environmentId', pipeVars["eid"] ? pipeVars["eid"] : '1');
          formData.append('audioOnly', pipeVars["ao"] ? pipeVars["ao"] : '0');

          jQuery.ajax({
            url: ('https:' == document.location.protocol ? 'https://' : 'http://') + html5Server + "/upload",
            type: "POST",
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: beforeSubmit,
            success: afterSuccess,
            xhr: OnProgress,
            error: onError
          });
        }
      }
    });
  }

};

},{}],4:[function(require,module,exports){
/*!
 * Socket.IO v2.1.1
 * (c) 2014-2018 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var r,n=i(t),s=n.source,h=n.id,p=n.path,u=c[h]&&p in c[h].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||u;return f?r=a(s,e):(c[h]||(c[h]=a(s,e)),r=c[h]),n.query&&!e.query&&(e.query=n.query),r.socket(n.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1),s=r(4),a=r(9);r(3)("socket.io-client");t.exports=e=n;var c=e.managers={};e.protocol=s.protocol,e.connect=n,e.Manager=r(9),e.Socket=r(34)},function(t,e,r){(function(e){"use strict";function n(t,r){var n=t;r=r||e.location,null==t&&(t=r.protocol+"//"+r.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!=typeof r?r.protocol+"//"+t:"https://"+t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var i=n.host.indexOf(":")!==-1,s=i?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}var o=r(2);r(3)("socket.io-client:url");t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){"use strict";t.exports=function(){return function(){}}},function(t,e,r){function n(){}function o(t){var r=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(r+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(r+=t.nsp+","),null!=t.id&&(r+=t.id),null!=t.data){var n=i(t.data);if(n===!1)return m;r+=n}return r}function i(t){try{return JSON.stringify(t)}catch(t){return!1}}function s(t,e){function r(t){var r=l.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}l.removeBlobs(t,r)}function a(){this.reconstructor=null}function c(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u("unknown packet type "+n.type);if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o="";"-"!==t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!==t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}if(t.charAt(++r)){var a=h(t.substr(r)),c=a!==!1&&(n.type===e.ERROR||d(a));if(!c)return u("invalid payload");n.data=a}return n}function h(t){try{return JSON.parse(t)}catch(t){return!1}}function p(t){this.reconPack=t,this.buffers=[]}function u(t){return{type:e.ERROR,data:"parser error: "+t}}var f=(r(3)("socket.io-parser"),r(5)),l=r(6),d=r(7),y=r(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=a;var m=e.ERROR+'"encode error"';n.prototype.encode=function(t,r){if(e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,r);else{var n=o(t);r([n])}},f(a.prototype),a.prototype.add=function(t){var r;if("string"==typeof t)r=c(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new p(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(t){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=n(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var r=0;r<t.length;r++)t[r]=o(t[r],e);else if("object"==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(7),s=r(8),a=Object.prototype.toString,c="function"==typeof t.Blob||"[object BlobConstructor]"===a.call(t.Blob),h="function"==typeof t.File||"[object FileConstructor]"===a.call(t.File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,p){if(!t)return t;if(c&&t instanceof Blob||h&&t instanceof File){n++;var u=new FileReader;u.onload=function(){p?p[a]=this.result:o=this.result,--n||e(o)},u.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)r(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}}).call(e,function(){return this}())},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){(function(e){function r(t){return n&&e.Buffer.isBuffer(t)||o&&(t instanceof e.ArrayBuffer||i(t))}t.exports=r;var n="function"==typeof e.Buffer&&"function"==typeof e.Buffer.isBuffer,o="function"==typeof e.ArrayBuffer,i=function(){return o&&"function"==typeof e.ArrayBuffer.isView?e.ArrayBuffer.isView:function(t){return t.buffer instanceof e.ArrayBuffer}}()}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(10),s=r(34),a=r(5),c=r(4),h=r(36),p=r(37),u=(r(3)("socket.io-client:manager"),r(33)),f=r(38),l=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(~this.readyState.indexOf("open"))return this;this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=h(r,"open",function(){n.onopen(),t&&t()}),s=h(r,"error",function(e){if(n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout,c=setTimeout(function(){o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(h(t,"data",p(this,"ondata"))),this.subs.push(h(t,"ping",p(this,"onping"))),this.subs.push(h(t,"pong",p(this,"onpong"))),this.subs.push(h(t,"error",p(this,"onerror"))),this.subs.push(h(t,"close",p(this,"onclose"))),this.subs.push(h(this.decoder,"decoded",p(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~u(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=u(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):t.onreconnect()}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(11),t.exports.parser=r(18)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&&"object"==typeof t&&(r=t,t=null),t?(t=h(t),r.hostname=t.host,r.secure="https"===t.protocol||"wss"===t.protocol,r.port=t.port,t.query&&(r.query=t.query)):r.host&&(r.hostname=h(r.host).host),this.secure=null!=r.secure?r.secure:e.location&&"https:"===location.protocol,r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:"localhost"),this.port=r.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=r.query||{},"string"==typeof this.query&&(this.query=p.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||"t",this.timestampRequests=r.timestampRequests,this.transports=r.transports||["polling","websocket"],this.transportOptions=r.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&&(r.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized||r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o="object"==typeof e&&e;o.global===o&&(r.extraHeaders&&Object.keys(r.extraHeaders).length>0&&(this.extraHeaders=r.extraHeaders),r.localAddress&&(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(12),s=r(5),a=(r(3)("engine.io-client:socket"),r(33)),c=r(18),h=r(2),p=r(27);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=c.protocol,n.Socket=n,n.Transport=r(17),n.transports=r(12),n.parser=r(18),n.prototype.createTransport=function(t){var e=o(this.query);e.EIO=c.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(u.onlyBinaryUpgrades){var t=!this.supportsBinary&&u.transport.supportsBinary;p=p||t}p||(h.send([{type:"ping",data:"probe"}]),h.once("packet",function(t){if(!p)if("pong"===t.type&&"probe"===t.data){if(u.upgrading=!0,u.emit("upgrading",h),!h)return;n.priorWebsocketSuccess="websocket"===h.name,u.transport.pause(function(){p||"closed"!==u.readyState&&(c(),u.setTransport(h),h.send([{type:"upgrade"}]),u.emit("upgrade",h),h=null,u.upgrading=!1,u.flush())})}else{var e=new Error("probe error");e.transport=h.name,u.emit("upgradeError",e)}}))}function r(){p||(p=!0,c(),h.close(),h=null)}function o(t){var e=new Error("probe error: "+t);e.transport=h.name,r(),u.emit("upgradeError",e)}function i(){o("transport closed")}function s(){o("socket closed")}function a(t){h&&t.name!==h.name&&r()}function c(){h.removeListener("open",e),h.removeListener("error",o),h.removeListener("close",i),u.removeListener("close",s),u.removeListener("upgrading",a)}var h=this.createTransport(t,{probe:1}),p=!1,u=this;n.priorWebsocketSuccess=!1,h.once("open",e),h.once("error",o),h.once("close",i),this.once("close",s),this.once("upgrading",a),h.open()},n.prototype.onOpen=function(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~a(this.transports,t[r])&&e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var h="https:"===location.protocol,p=location.port;p||(p=h?443:80),n=e.hostname!==location.hostname||p!==e.port,a=e.secure!==h}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=r(13),i=r(15),s=r(30),a=r(31);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(14);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!r||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(t){}if(!r)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var r="https:"===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(13),c=r(16),h=r(5),p=r(28);r(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,p(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},h(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.extraHeaders[o])}}catch(t){}if("POST"===this.method)try{this.isBinary?r.setRequestHeader("Content-type","application/octet-stream"):r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in r&&(r.withCredentials=!0),this.requestTimeout&&(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){if(2===r.readyState)try{var t=r.getResponseHeader("Content-Type");n.supportsBinary&&"application/octet-stream"===t&&(r.responseType="arraybuffer")}catch(t){}4===r.readyState&&(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},r.send(this.data)}catch(t){return void setTimeout(function(){n.onError(t)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(17),i=r(27),s=r(18),a=r(28),c=r(29);r(3)("engine.io-client:polling");t.exports=n;var h=function(){var t=r(13),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()},n.prototype.poll=function(){this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this,r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())},n.prototype.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(18),i=r(5);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){(function(t){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);
var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var h,p=r(19),u=r(20),f=r(21),l=r(22),d=r(23);t&&t.ArrayBuffer&&(h=r(25));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=p(v),k={type:"error",data:"parser error"},w=r(26);e.encodePacket=function(e,r,i,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(w&&c instanceof t.Blob)return s(e,r,a);if(c&&c.base64)return n(e,a);var h=v[e.type];return void 0!==e.data&&(h+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(""+h)},e.encodeBase64Packet=function(r,n){var o="b"+e.packets[r.type];if(w&&r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(t){for(var a=new Uint8Array(r.data),c=new Array(a.length),h=0;h<a.length;h++)c[h]=a[h];s=String.fromCharCode.apply(null,c)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return k;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return k;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:k}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===r&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!h)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=h.decode(t.substr(1));return"blob"===e&&w&&(n=new w([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!1,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=u(t);return r&&s?w&&!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""===t)return n(k,0,1);for(var i,s,a="",c=0,h=t.length;c<h;c++){var p=t.charAt(c);if(":"===p){if(""===a||a!=(i=Number(a)))return n(k,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(k,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),k.type===o.type&&k.data===o.data)return n(k,0,1);var u=n(o,c+i,h);if(!1===u)return}c+=i,a=""}else a+=p}return""!==a?n(k,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new w(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",h=1;255!==s[h];h++){if(c.length>310)return n(k,0,1);c+=s[h]}o=f(o,2+c.length),c=parseInt(c);var p=f(o,0,c);if(a)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(t){var u=new Uint8Array(p);p="";for(var h=0;h<u.length;h++)p+=String.fromCharCode(u[h])}i.push(p),o=f(o,c)}var l=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,l)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){(function(e){function n(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var r=0,i=t.length;r<i;r++)if(n(t[r]))return!0;return!1}if("function"==typeof e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||"function"==typeof e.ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return n(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&n(t[c]))return!0;return!1}var o=r(7),i=Object.prototype.toString,s="function"==typeof e.Blob||"[object BlobConstructor]"===i.call(e.Blob),a="function"==typeof e.File||"[object FileConstructor]"===i.call(e.File);t.exports=n}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=k(e>>>10&1023|55296),e=56320|1023&e),o+=k(e);return o}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function h(t,e){return k(t>>e&63|128)}function p(t,e){if(0==(4294967168&t))return k(t);var r="";return 0==(4294965248&t)?r=k(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),r=k(t>>12&15|224),r+=h(t,6)):0==(4292870144&t)&&(r=k(t>>18&7|240),r+=h(t,12),r+=h(t,6)),r+=k(63&t|128)}function u(t,e){e=e||{};for(var r,n=!1!==e.strict,o=s(t),i=o.length,a=-1,c="";++a<i;)r=o[a],c+=p(r,n);return c}function f(){if(b>=v)throw Error("Invalid byte index");var t=255&g[b];if(b++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(t){var e,r,n,o,i;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&g[b],b++,0==(128&e))return e;if(192==(224&e)){if(r=f(),i=(31&e)<<6|r,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&e)){if(r=f(),n=f(),i=(15&e)<<12|r<<6|n,i>=2048)return c(i,t)?i:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=f(),n=f(),o=f(),i=(7&e)<<18|r<<12|n<<6|o,i>=65536&&i<=1114111))return i;throw Error("Invalid UTF-8 detected")}function d(t,e){e=e||{};var r=!1!==e.strict;g=s(t),v=g.length,b=0;for(var n,o=[];(n=l(r))!==!1;)o.push(n);return a(o)}var y="object"==typeof e&&e,m=("object"==typeof t&&t&&t.exports==y&&t,"object"==typeof o&&o);m.global!==m&&m.window!==m||(i=m);var g,v,b,k=String.fromCharCode,w={version:"2.1.2",encode:u,decode:d};n=function(){return w}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}).call(e,r(24)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,h=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var p=new ArrayBuffer(a),u=new Uint8Array(p);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],u[h++]=n<<2|o>>4,u[h++]=(15&o)<<4|i>>2,u[h++]=(3&i)<<6|63&s;return p}}()},function(t,e){(function(e){function r(t){for(var e=0;e<t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o<t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e}function o(){var t=r(+new Date);return t!==i?(h=0,i=t):t+"."+r(h++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},h=0,p=0;p<a;p++)c[s[p]]=p;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var i=r(16),s=r(28);t.exports=o;var a,c=/\n/g,h=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),p=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=p,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(h,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=p&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=o),i.call(this,t)}var o,i=r(17),s=r(18),a=r(27),c=r(28),h=r(29),p=(r(3)("engine.io-client:websocket"),e.WebSocket||e.MozWebSocket);if("undefined"==typeof window)try{o=r(32)}catch(t){}var u=p;u||"undefined"!=typeof window||(u=o),t.exports=n,c(n,i),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new u(t,e):new u(t):new u(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function r(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),n.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<n.perMessageDeflate.threshold&&(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(t){}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(4),s=r(5),a=r(35),c=r(36),h=r(37),p=(r(3)("socket.io-client:socket"),r(27)),u=r(20);t.exports=e=n;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",h(this,"onopen")),c(t,"packet",h(this,"onpacket")),c(t,"close",h(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),r={type:(void 0!==this.flags.binary?this.flags.binary:u(e))?i.BINARY_EVENT:i.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this.flags={},this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){if("/"!==this.nsp)if(this.query){var t="object"===o(this.query)?p.encode(this.query):this.query;this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},n.prototype.onclose=function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){var e=t.nsp===this.nsp,r=t.type===i.ERROR&&"/"===t.nsp;if(e||r)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=a(arguments);e.packet({type:u(n)?i.BINARY_ACK:i.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&this.packet({type:i.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags.compress=t,this},n.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});

},{}],5:[function(require,module,exports){
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

io = require('socket.io-client/dist/socket.io.slim');
var pipeMobileRecorder = require('./mobile.js');
var pipeDesktopUploader = require('./d_upload.js');
var pipeFlashRecorder = require('./flash.js');
var pipeRTCRecorder = require('./rtc.js');

PipeSDK = {

  recorders: {},

  insert: function insert(pipeElement, pipeVars, callback) {

    //cache setup
    jQuery.ajaxSetup({
      cache: true
    });

    function get_browser() {
      var ua = navigator.userAgent,
          tem,
          M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: tem[1] || '' };
      }
      if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
          return { name: 'Opera', version: tem[1] };
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
      }
      return {
        name: M[0],
        version: M[1]
      };
    }

    function iOSversion() {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      } else {
        return 0;
      }
    }
    var iOS = iOSversion();

    //maintenance mode flag
    var maintenance = 0;

    //client vars
    webRtcClient = false;

    //region conf
    flashServer = "";
    html5Server = "";
    rtcServer = "";
    storageS3Location = "";

    //lang vars
    langCode = "en";

    jQuery.ajax({
      url: ("https:" == document.location.protocol ? "https://" : "http://") + "s1.addpipe.com/2.0/precheck.php",
      data: { accountHash: pipeVars["accountHash"], environmentId: pipeVars["eid"] ? pipeVars["eid"] : '1' },
      success: function success(data, status) {

        var res = JSON.parse(data);

        closedAccount = res.closedAccount;
        showPoweredBy = res.showPoweredBy;
        prefLang = res.lang;
        accType = res.accType;

        //region conf
        flashServer = res.flashServer;
        html5Server = res.html5Server;
        rtcServer = res.rtcServer;
        storageS3Location = res.s3Location;

        var mobile = false;
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("ipad") != -1 || ua.indexOf("iphone") != -1 || ua.indexOf("android") != -1 || ua.indexOf("ipod") != -1 || ua.indexOf("windows ce") != -1 || ua.indexOf("windows phone") != -1) {
          mobile = true;
        }

        if (res.webrtc_mobile == 1) {
          if (document.location.protocol.indexOf("https") != -1) {
            if (get_browser().name == "Safari" && get_browser().version >= 11 && iOS != 0) {
              webRtcClient = true;
              mobile = false;
            }
          }
        }

        if (res.mediarec_mobile == 1) {
          if (document.location.protocol.indexOf("https") != -1) {
            if (get_browser().name == "Chrome" && get_browser().version >= 63 && ua.indexOf("android") != -1) {
              webRtcClient = true;
              mobile = false;
            }
          }
        }

        if (mobile == true) {

          PipeSDK.recorders[pipeElement] = new Object();
          PipeSDK.recorders[pipeElement].remove = function () {
            document.getElementById(pipeElement).innerHTML = "";
            document.getElementById(pipeElement).style.height = "0px";
          };

          pipeHandlers(pipeElement);
          callback(PipeSDK.recorders[pipeElement]);

          pipeMobileRecorder.addPipeMobileRecorder(pipeElement, pipeVars);
        } else if (mobile == false) {

          //Getting Chrome version
          var getChromeVersion = function getChromeVersion() {
            var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

            return raw ? parseInt(raw[2], 10) : false;
          };

          var isChrome = function isChrome() {
            var isChromium = window.chrome,
                winNav = window.navigator,
                vendorName = winNav.vendor,
                isOpera = winNav.userAgent.indexOf("OPR") > -1,
                isIEedge = winNav.userAgent.indexOf("Edge") > -1,
                isIOSChrome = winNav.userAgent.match("CriOS");

            if (isIOSChrome) {
              // is Google Chrome on IOS
              return false;
            } else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
              // is Google Chrome
              return true;
            } else {
              // not Google Chrome
              return false;
            }
          };

          var isFirefox = function isFirefox() {
            return typeof InstallTrigger !== 'undefined';
          };
          //Getting Firefox version


          var getFirefoxVersion = function getFirefoxVersion() {
            return get_browser().version;
          };

          //======================== Init screen vars=======================


          var pipeInitRecorder = function pipeInitRecorder() {

            if (webRtcClient == false) {

              pipeFlashRecorder.addPipeFlashRecorder(pipeElement, pipeVars);
              //console.log("ELEMENT: "+document[pipeElement+"-flash"]);
              //API object
              PipeSDK.recorders[pipeElement] = document[pipeElement + "-flash"];
              PipeSDK.recorders[pipeElement].remove = function () {
                document.getElementById(pipeElement).innerHTML = "";
                document.getElementById(pipeElement).style.height = "0px";
              };

              pipeHandlers(pipeElement);

              callback(PipeSDK.recorders[pipeElement]);
              // making sure that the refference is to the object and not to the div
              if (pipeVars["sis"] == 0) {
                PipeSDK.onRecordersInserted();
              }
              //console.log("init" + PipeSDK.recorders[pipeElement]);
            } else if (webRtcClient == true) {

              EXTENSION_ID = "";

              pipeRTCRecorder.addPipeRTCRecorder(pipeElement, pipeVars);

              //console.log("init" + PipeSDK.recorders[pipeElement]);
            }
          };

          var pipeInitScreenRecorder = function pipeInitScreenRecorder() {

            if (webRtcClient == true && pipeVars["srec"] && pipeVars["srec"] != "") {

              EXTENSION_ID = pipeVars["srec"];

              pipeRTCRecorder.addPipeRTCRecorder(pipeElement, pipeVars);
              //console.log("init" + PipeSDK.recorders[pipeElement]);
            }
          };

          var poweredByPipe = function poweredByPipe() {
            window.location.href = "https://addpipe.com?ref=embed";
          };

          var pipeAd = function pipeAd() {
            window.location.href = "https://addpipe.com?ref=expired";
          };

          recordTxt = "Record Video";
          uploadRecTxt = "Upload Video";
          uploadingTxt = "Uploading";
          unsupportedTxt = "Unsupported file type!";
          upgradeTxt = "Please upgrade your browser! Your current one lacks the features needed to record & submit videos.";
          uploadFailedTxt = "Upload failed!";
          doneTxt = "Done!";
          uploadOrRecordAnotherTxt = "Record or upload another one";
          recordScreenTxt = "Record Screen";
          selectScreenTxt = "Select screen for capture";
          installExtensionTxt = "To record the screen you need to install the";
          screenPermissionTxt = "Permission was denied. Could not get screen stream";
          recBtnTxt = "record";
          stopBtnTxt = "stop";
          playBtnTxt = "play";
          pauseBtnTxt = "pause";
          saveBtnTxt = "save";
          connectingTxt = "Connecting...";
          bufferingTxt = "Buffering...";
          uploadingTxt = "Uploading...";
          savingTxt = "Saving...";
          savedTxt = "Saved";
          blockedTxt = "Access to the webcam has been denied";
          noCameraTxt = "You need a webcam to record video";
          noMicTxt = "You do not have a microphone installed";
          allowAccessTxt = "Allow access to your webcam";
          micIconTxt = "Microphone used: ";
          camUsedTxt = "The webcam is already used by another app";
          conInterruptedTxt = "Your connection to the server has been interrupted";

          //design options
          cornerRadius = "8";
          if (pipeVars["cornerradius"]) {
            cornerRadius = pipeVars["cornerradius"];
          }

          bgCol = "#f6f6f6";
          if (pipeVars["bgCol"]) {
            bgCol = pipeVars["bgCol"].replace("0x", "#");
          }

          menuCol = "#e9e9e9";
          if (pipeVars["menuCol"]) {
            menuCol = pipeVars["menuCol"].replace("0x", "#");
          }

          normalCol = "#334455";
          if (pipeVars["normalCol"]) {
            normalCol = pipeVars["normalCol"].replace("0x", "#");
          }

          overCol = "#556677";
          if (pipeVars["overCol"]) {
            overCol = pipeVars["overCol"].replace("0x", "#");
          }

          //client checks
          if (res.client == "html5") {
            if (document.location.protocol.indexOf("https") != -1) {
              if (isChrome() == true && getChromeVersion() >= 63 || isFirefox() == true && getFirefoxVersion() >= 50) {
                webRtcClient = true;
              }
            }
          }

          if (res.webrtc_desk == 1) {
            if (document.location.protocol.indexOf("https") != -1) {
              if (get_browser().name == "Safari" && get_browser().version >= 11 && iOS == 0) {
                webRtcClient = true;
              }
            }
          }

          //console.log("####################"  + getChromeVersion() + " " + webRtcClient + " " + res.client);

          //======================== Init screen =======================

          //set fixed height to avoid clipping when loading different screens
          jQuery("#" + pipeElement).height(pipeVars["size"]["height"]);

          //Checking if the size is given in percentage and transforming it in pixels
          if (String(pipeVars["size"]["width"]).indexOf("%") != -1) {
            //console.log("Recorder width " + jQuery("#"+pipeElement).width());
            pipeVars["size"]["width"] = jQuery("#" + pipeElement).width();
          }
          /*
            if(pipeVars["size"]["height"].indexOf("%") != -1){
              console.log("Recorder height " + jQuery("#"+pipeElement).height());
              pipeVars["size"]["height"] = jQuery("#"+pipeElement).height();
            }
          */

          if (closedAccount == 0) {

            if (maintenance == 1) {

              document.getElementById(pipeElement).innerHTML = '<div id="pipeRecordRTC-' + pipeElement + '" class="pipeRecordRTC"><span>Video recording is in maintenance</span></div>';

              //custom style for elements
              document.getElementById("pipeRecordRTC-" + pipeElement).style.width = pipeVars["size"]["width"] + "px";
              document.getElementById("pipeRecordRTC-" + pipeElement).style.height = pipeVars["size"]["height"] + "px";
              document.getElementById("pipeRecordRTC-" + pipeElement).style.backgroundColor = bgCol;
              document.getElementById("pipeRecordRTC-" + pipeElement).style.borderRadius = cornerRadius + "px";
              document.getElementById("pipeRecordRTC-" + pipeElement).getElementsByTagName("span")[0].style.color = normalCol;
            } else {

              //detect the language
              var detectedLang = prefLang;
              if (detectedLang == "fr" || detectedLang == "de" || detectedLang == "es") {
                langCode = detectedLang;
              }

              languageFileURL = ("https:" == document.location.protocol ? "https://" : "http://") + "s1.addpipe.com/2.0/" + (pipeVars["lang"] ? pipeVars["lang"] : 'translations/' + langCode + '.xml');
              if (pipeVars["lang"]) {
                if (pipeVars["lang"].indexOf("http") != -1) {
                  languageFileURL = pipeVars["lang"];
                }
              }

              //load the language XML file
              jQuery.ajax({
                url: languageFileURL,
                dataType: 'xml',
                success: function success(data) {

                  var xml_node = jQuery('xliff', data);

                  if (pipeVars["ao"] == 1) {
                    recordTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_RECORD_INIT_AUDIO"] > source').text();
                    if (recordTxt == "") {
                      recordTxt = "Record Audio";
                    }
                  } else {
                    recordTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_RECORD_INIT"] > source').text();
                  }

                  if (pipeVars["ao"] == 1) {
                    uploadRecTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_UPLOAD_AUDIO_DESKTOP"] > source').text();
                    if (uploadRecTxt == "") {
                      uploadRecTxt = "Upload Audio";
                    }
                  } else {
                    uploadRecTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_UPLOAD_VIDEO_DESKTOP"] > source').text();
                    if (uploadRecTxt == "") {
                      uploadRecTxt = "Upload Video";
                    }
                  }

                  uploadingTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UPLOADING"] > source').text();
                  if (uploadingTxt == "") {
                    uploadingTxt = "Uploading";
                  }
                  unsupportedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UNSUPPORTED"] > source').text();
                  if (unsupportedTxt == "") {
                    unsupportedTxt = "Unsupported file type!";
                  }
                  upgradeTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UPGRADE"] > source').text();
                  if (upgradeTxt == "") {
                    upgradeTxt = "Please upgrade your browser! Your current one lacks the features needed to record & submit videos.";
                  }
                  uploadFailedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_UPLOAD_FAILED"] > source').text();
                  if (uploadFailedTxt == "") {
                    uploadFailedTxt = "Upload failed!";
                  }
                  doneTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MOBILE_DONE"] > source').text();
                  if (doneTxt == "") {
                    doneTxt = "Done!";
                  }
                  uploadOrRecordAnotherTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_UPLOAD_AGAIN_DESKTOP"] > source').text();
                  if (uploadOrRecordAnotherTxt == "") {
                    uploadOrRecordAnotherTxt = "Record or upload another one";
                  }
                  recordScreenTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_RECORD_SCREEN"] > source').text();
                  if (recordScreenTxt == "") {
                    recordScreenTxt = "Record Screen";
                  }
                  selectScreenTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_SELECT_SCREEN"] > source').text();
                  if (selectScreenTxt == "") {
                    selectScreenTxt = "Select screen for capture";
                  }
                  installExtensionTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_RECORD_SCREEN_INSTALL_EXTENSION"] > source').text();
                  if (installExtensionTxt == "") {
                    installExtensionTxt = "To record the screen you need to install the";
                  }
                  screenPermissionTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_RECORD_SCREEN_PERMISSION_ERROR"] > source').text();
                  if (screenPermissionTxt == "") {
                    screenPermissionTxt = "Permission was denied. Could not get screen stream";
                  }
                  recBtnTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_RECORD"] > source').text();
                  if (recBtnTxt == "") {
                    recBtnTxt = "record";
                  }
                  stopBtnTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_STOP"] > source').text();
                  if (stopBtnTxt == "") {
                    stopBtnTxt = "stop";
                  }
                  playBtnTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_PLAY"] > source').text();
                  if (playBtnTxt == "") {
                    playBtnTxt = "play";
                  }
                  pauseBtnTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_PAUSE"] > source').text();
                  if (pauseBtnTxt == "") {
                    pauseBtnTxt = "pause";
                  }
                  saveBtnTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_SAVE"] > source').text();
                  if (saveBtnTxt == "") {
                    saveBtnTxt = "save";
                  }
                  connectingTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_CONNECT"] > source').text();
                  if (connectingTxt == "") {
                    connectingTxt = "Connecting...";
                  }
                  bufferingTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_BUFFERING"] > source').text();
                  if (bufferingTxt == "") {
                    bufferingTxt = "Buffering...";
                  }
                  savingTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_SAVING"] > source').text();
                  if (savingTxt == "") {
                    savingTxt = "Saving...";
                  }
                  savedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_SAVEOK"] > source').text();
                  if (savedTxt == "") {
                    savedTxt = "Saved";
                  }
                  blockedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_ICAMERA2"] > source').text();
                  if (blockedTxt == "") {
                    blockedTxt = "Access to the webcam has been denied";
                  }
                  noCameraTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_ICAMERA"] > source').text();
                  if (noCameraTxt == "") {
                    noCameraTxt = "You need a webcam to record video";
                  }
                  noMicTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_NO_MIC"] > source').text();
                  if (noMicTxt == "") {
                    noMicTxt = "You do not have a microphone installed";
                  }
                  allowAccessTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_ALLOW_ACCESS"] > source').text();
                  if (allowAccessTxt == "") {
                    allowAccessTxt = "Allow access to your webcam";
                  }
                  micIconTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_MIC_DEVICE"] > source').text();
                  if (micIconTxt == "") {
                    micIconTxt = "Microphone used: ";
                  }
                  uploadingTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_UPLOAD"] > source').text();
                  if (uploadingTxt == "") {
                    uploadingTxt = "Uploading...";
                  }
                  camUsedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_CAM_USED"] > source').text();
                  if (camUsedTxt == "") {
                    camUsedTxt = "The webcam is already used by another app";
                  }
                  conInterruptedTxt = xml_node.find('xliff > file > body > trans-unit[resname="IDS_TXT_CON_INTERRUPTED"] > source').text();
                  if (conInterruptedTxt == "") {
                    conInterruptedTxt = "Your connection to the server has been interrupted";
                  }

                  /*allText.each(function(){
                    console.log(jQuery(this).text());
                    //lang.push(jQuery(this).text());
                  });*/

                  if (pipeVars["sis"] == 0) {

                    //accept = 'accept="video/*"';
                    accept = 'accept=""';
                    recordIcon = '<svg height="30px" style="enable-background:new 0 0 512 512; vertical-align: middle;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M303.7,128h-221C63.9,128,47,142.1,47,160.7v187.9c0,18.6,16.9,35.4,35.7,35.4h221c18.8,0,33.3-16.8,33.3-35.4V160.7   C337,142.1,322.5,128,303.7,128z"/><path d="M367,213v85.6l98,53.4V160L367,213z"/><rect rx="10" x="80" y="160" width="80" height="60" style="fill:red;" /></g></svg>';
                    if (pipeVars["ao"] == 1) {
                      accept = 'accept="audio/*"';
                      recordIcon = '<svg height="30px" style="enable-background:new 0 0 512 512; vertical-align: middle;" version="1.1" viewBox="120 0 273 512" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M256,353.5c43.7,0,79-37.5,79-83.5V115.5c0-46-35.3-83.5-79-83.5c-43.7,0-79,37.5-79,83.5V270   C177,316,212.3,353.5,256,353.5z"/><path d="M367,192v79.7c0,60.2-49.8,109.2-110,109.2c-60.2,0-110-49-110-109.2V192h-19v79.7c0,67.2,53,122.6,120,127.5V462h-73v18   h161v-18h-69v-62.8c66-4.9,117-60.3,117-127.5V192H367z"/></g></svg>';
                    }

                    uploadIcon = '<svg id="pipeUploadIcon-' + pipeElement + '" height="30px" style="enable-background:new 0 0 512 512; vertical-align: middle;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M398.1,233.2c0-1.2,0.2-2.4,0.2-3.6c0-65-51.8-117.6-115.7-117.6c-46.1,0-85.7,27.4-104.3,67c-8.1-4.1-17.2-6.5-26.8-6.5  c-29.5,0-54.1,21.9-58.8,50.5C57.3,235.2,32,269.1,32,309c0,50.2,40.1,91,89.5,91H224v-80l-48.2,0l80.2-83.7l80.2,83.6l-48.2,0v80  h110.3c45.2,0,81.7-37.5,81.7-83.4C480,270.6,443.3,233.3,398.1,233.2z"/></svg>';
                    recordScreenIcon = '<svg height="30px" style="enable-background:new 0 0 512 512; vertical-align: middle;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M468.7,64H43.3c-6,0-11.3,5-11.3,11.1v265.7c0,6.2,5.2,11.1,11.3,11.1h425.4c6,0,11.3-5,11.3-11.1V75.1   C480,69,474.8,64,468.7,64z M448,320H64V96h384V320z"/><path d="M302.5,448c28-0.5,41.5-3.9,29-12.5c-12.5-8.7-28.5-15.3-29-22.5c-0.3-3.7-1.7-45-1.7-45H256h-44.8c0,0-1.5,41.3-1.7,45   c-0.5,7.1-16.5,13.8-29,22.5c-12.5,8.7,1,12,29,12.5H302.5z"/></g></svg>';

                    document.getElementById(pipeElement).innerHTML = '<div id="pipeRecordRTC-' + pipeElement + '" class="pipeRecordRTC"><span><div id="pipeStartRecording-' + pipeElement + '" tabindex="0">' + recordIcon + ' ' + recordTxt + ' </div><div id="pipe-upload-form-' + pipeElement + '"><div id="pipe-upload-wrap-' + pipeElement + '" tabindex="0">' + uploadIcon + '<label id="pipeCustomUpload-' + pipeElement + '" class="pipe-upload-label pipeCustomUpload" for="pipeStartUploading-' + pipeElement + '"> &nbsp;&nbsp;' + uploadRecTxt + '</label><input name="FileInput" id="pipeStartUploading-' + pipeElement + '" class="pipeStartUploading" type="file" ' + accept + ' value="Start Uploading" tabindex="-1"/></div></div><div id="output-' + pipeElement + '" style="cursor:default;"></div><div id="pipeRecordScreen-' + pipeElement + '" tabindex="0">' + recordScreenIcon + '&nbsp;' + recordScreenTxt + '</div></span><div id="uploadAnother-' + pipeElement + '" class="pipeUploadAnother" tabindex="0">' + uploadOrRecordAnotherTxt + '</div></div>';
                    

                    //custom style for elements
                    document.getElementById("pipeRecordRTC-" + pipeElement).style.width = pipeVars["size"]["width"] + "px";
                    document.getElementById("pipeRecordRTC-" + pipeElement).style.height = pipeVars["size"]["height"] + "px";
                    document.getElementById("pipeRecordRTC-" + pipeElement).style.backgroundColor = bgCol;
                    document.getElementById("pipeRecordRTC-" + pipeElement).style.borderRadius = cornerRadius + "px";
                    document.getElementById("pipeRecordRTC-" + pipeElement).getElementsByTagName("span")[0].style.color = normalCol;
                    document.getElementById("pipeStartRecording-" + pipeElement).onmouseover = function () {
                      this.style.color = overCol;
                    };
                    document.getElementById("pipeStartRecording-" + pipeElement).onmouseout = function () {
                      this.style.color = normalCol;
                    };
                    document.getElementById("pipeRecordScreen-" + pipeElement).onmouseover = function () {
                      this.style.color = overCol;
                    };
                    document.getElementById("pipeRecordScreen-" + pipeElement).onmouseout = function () {
                      this.style.color = normalCol;
                    };
                    document.getElementById("pipeCustomUpload-" + pipeElement).style.color = normalCol;
                    document.getElementById("pipeCustomUpload-" + pipeElement).onmouseover = function () {
                      this.style.color = overCol;
                    };
                    document.getElementById("pipeCustomUpload-" + pipeElement).onmouseout = function () {
                      this.style.color = normalCol;
                    };
                    document.getElementById("uploadAnother-" + pipeElement).style.color = normalCol;

                    jQuery("#uploadAnother-" + pipeElement).hide();
                    jQuery("#pipe-upload-wrap-" + pipeElement).hide();
                    if (pipeVars["dup"] == 1 && (accType == 50 || accType == 1)) {
                      jQuery("#pipe-upload-wrap-" + pipeElement).show();
                    }

                    document.getElementById("pipeUploadIcon-" + pipeElement).onclick = function () {
                      document.getElementById("pipeStartUploading-" + pipeElement).click();
                    };
                    jQuery('#pipe-upload-wrap-' + pipeElement).keydown(function (event) {
                      if (event.which == 13) {
                        event.preventDefault();
                        document.getElementById("pipeStartUploading-" + pipeElement).click();
                      }
                    });

                    document.getElementById("pipeStartUploading-" + pipeElement).onchange = function () {
                      var _extraParams;

                      extraParams = (_extraParams = {
                        uploadingTxt: uploadingTxt,
                        unsupportedTxt: unsupportedTxt,
                        upgradeTxt: upgradeTxt
                      }, _defineProperty(_extraParams, 'uploadingTxt', uploadingTxt), _defineProperty(_extraParams, 'doneTxt', doneTxt), _defineProperty(_extraParams, 'normalCol', normalCol), _defineProperty(_extraParams, 'accType', accType), _defineProperty(_extraParams, 'webRtcClient', webRtcClient), _extraParams);

                      pipeDesktopUploader.addPipeDesktopUploader(pipeElement, pipeVars, extraParams);
                      pipeDesktopUploader.sendData(pipeElement, pipeVars, pipeDesktopUploader.options);
                    };

                    //webcam recording
                    jQuery('#pipeStartRecording-' + pipeElement).click(pipeInitRecorder);
                    jQuery('#pipeStartRecording-' + pipeElement).keydown(function (event) {
                      if (event.which == 13) {
                        event.preventDefault();
                        pipeInitRecorder();
                      }
                    });

                    //screen recording
                    jQuery('#pipeRecordScreen-' + pipeElement).hide();
                    if (pipeVars["srec"] && pipeVars["srec"] != "" && (accType == 50 || accType == 1) && isChrome() == true && webRtcClient == true && navigator.userAgent.toLowerCase().indexOf("android") == -1) {
                      jQuery('#pipeRecordScreen-' + pipeElement).show();
                      jQuery('#pipeRecordScreen-' + pipeElement).click(pipeInitScreenRecorder);
                      jQuery('#pipeRecordScreen-' + pipeElement).keydown(function (event) {
                        if (event.which == 13) {
                          event.preventDefault();
                          pipeInitScreenRecorder();
                        }
                      });
                    }

                    //API object
                    if (webRtcClient == true) {
                      PipeSDK.recorders[pipeElement] = new Object();
                      //Init screen remove function HTML5
                      PipeSDK.recorders[pipeElement].remove = function () {
                        document.getElementById(pipeElement).innerHTML = "";
                        document.getElementById(pipeElement).style.height = "0px";
                      };

                      pipeHandlers(pipeElement);
                      PipeSDK.recorders[pipeElement].name = pipeElement;
                      callback(PipeSDK.recorders[pipeElement]);
                      //console.log("inserting " + pipeElement);
                    } else {

                      /*
                      let obj = document.createElement('object');
                      obj.id = pipeElement;
                      obj.name = "VideoRecorder";
                      obj.type = "application/x-shockwave-flash";
                      obj.align = "middle";
                      obj.width = pipeVars["size"]["width"];
                      obj.height = pipeVars["size"]["height"];
                      obj.style.display === "none";
                      document.getElementById(pipeElement).appendChild(obj);
                      */

                      PipeSDK.recorders[pipeElement] = document.getElementById(pipeElement);
                      //Init screen remove function Flash
                      PipeSDK.recorders[pipeElement].remove = function () {
                        document.getElementById(pipeElement).innerHTML = "";
                        document.getElementById(pipeElement).style.height = "0px";
                      };

                      pipeHandlers(pipeElement);

                      callback(PipeSDK.recorders[pipeElement]);
                      //console.log("insert" + PipeSDK.recorders[pipeElement]);
                    }
                  } else {

                    //API object
                    if (webRtcClient == true) {
                      PipeSDK.recorders[pipeElement] = new Object();
                      //Init screen remove function HTML5
                      PipeSDK.recorders[pipeElement].remove = function () {
                        document.getElementById(pipeElement).innerHTML = "";
                        document.getElementById(pipeElement).style.height = "0px";
                      };

                      pipeHandlers(pipeElement);

                      callback(PipeSDK.recorders[pipeElement]);
                      //console.log("insert" + PipeSDK.recorders[pipeElement]);
                    } else {
                      PipeSDK.recorders[pipeElement] = document.getElementById(pipeElement);
                      //Init screen remove function Flash
                      PipeSDK.recorders[pipeElement].remove = function () {
                        document.getElementById(pipeElement).innerHTML = "";
                        document.getElementById(pipeElement).style.height = "0px";
                      };

                      pipeHandlers(pipeElement);

                      callback(PipeSDK.recorders[pipeElement]);
                      //console.log("insert" + PipeSDK.recorders[pipeElement]);
                    }

                    pipeInitRecorder();
                  }
                }
              });
            }
          } else {

            document.getElementById(pipeElement).innerHTML = '<div id="pipeRecordRTC-' + pipeElement + '" class="pipeRecordRTC"><span id="pipeRedirect-' + pipeElement + '">Add video recording to your website using Pipe</p></div>';

            //custom style for elements
            document.getElementById("pipeRecordRTC-" + pipeElement).style.width = pipeVars["size"]["width"] + "px";
            document.getElementById("pipeRecordRTC-" + pipeElement).style.height = pipeVars["size"]["height"] + "px";
            document.getElementById("pipeRecordRTC-" + pipeElement).style.backgroundColor = bgCol;
            document.getElementById("pipeRecordRTC-" + pipeElement).style.borderRadius = cornerRadius + "px";
            document.getElementById("pipeRedirect-" + pipeElement).style.textDecoration = "underline";

            jQuery('#pipeRedirect-' + pipeElement).click(pipeAd);
          }
        }
      } //success
    }); //ajax precheck

    function pipeHandlers(rec) {
      // JS Events API callback handlers
      //Desktop
      PipeSDK.recorders[rec].onReadyToRecord = function (recorderId, recorderType) {};
      PipeSDK.recorders[rec].userHasCamMic = function (recorderId, cam_number, mic_number) {};
      PipeSDK.recorders[rec].btRecordPressed = function (recorderId) {};
      PipeSDK.recorders[rec].btStopRecordingPressed = function (recorderId) {};
      PipeSDK.recorders[rec].btPlayPressed = function (recorderId) {};
      PipeSDK.recorders[rec].btPausePressed = function (recorderId) {};
      PipeSDK.recorders[rec].onUploadDone = function (recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location) {};
      PipeSDK.recorders[rec].onCamAccess = function (recorderId, allowed) {};
      PipeSDK.recorders[rec].onPlaybackComplete = function (recorderId) {};
      PipeSDK.recorders[rec].onRecordingStarted = function (recorderId) {};
      PipeSDK.recorders[rec].onConnectionClosed = function (recorderId) {};
      PipeSDK.recorders[rec].onConnectionStatus = function (recorderId, status) {};
      PipeSDK.recorders[rec].onFPSChange = function (recorderId, fps) {};
      PipeSDK.recorders[rec].onMicActivityLevel = function (recorderId, currentActivityLevel) {};
      PipeSDK.recorders[rec].onSaveOk = function (recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, filetype, videoId, audioOnly, location) {};
      PipeSDK.recorders[rec].onFlashReady = function (recorderId) {};
      //Desktop Upload
      PipeSDK.recorders[rec].onDesktopVideoUploadStarted = function (recorderId, filename, filetype, audioOnly) {};
      PipeSDK.recorders[rec].onDesktopVideoUploadSuccess = function (recorderId, filename, filetype, videoId, audioOnly, location) {};
      PipeSDK.recorders[rec].onDesktopVideoUploadFailed = function (recorderId, error) {};
      //Mobile
      PipeSDK.recorders[rec].onVideoUploadStarted = function (recorderId, filename, filetype, audioOnly) {};
      PipeSDK.recorders[rec].onVideoUploadSuccess = function (recorderId, filename, filetype, videoId, audioOnly, location) {};
      PipeSDK.recorders[rec].onVideoUploadProgress = function (recorderId, percent) {};
      PipeSDK.recorders[rec].onVideoUploadFailed = function (recorderId, error) {};
    }
  },

  getRecorderById: function getRecorderById(id) {
    /*return new Promise(resolve => {
    	setTimeout(() => {
    	  resolve(PipeSDK.recorders[id]);
    	}, 1000);
    });*/
    /*
    setTimeout(function(){
    	//console.log(PipeSDK.recorders[id]);
    	callback(PipeSDK.recorders[id]);
    }, 1000);
    */
    /*
    return new Promise(resolve => {
    	if(typeof PipeSDK.recorders[id] !== 'undefined'){
    		resolve(PipeSDK.recorders[id]);
    	}
    	});*/
    /*if((PipeSDK.recorders[id] !== null && typeof PipeSDK.recorders[id] === 'object') || PipeSDK.recorders[id].nodeName == "OBJECT"){
    	callback(PipeSDK.recorders[id]);
    }*/

    return PipeSDK.recorders[id];
  },

  //Pipe custom tag
  replacePipeTag: function replacePipeTag() {
    //document.createElement("piperecorder");

    var tagInstances = document.getElementsByTagName("piperecorder");
    var recordersAdded = 0;

    for (var i = 0; i < tagInstances.length; i++) {
      //console.log(tagInstances[i].attributes);

      var pipeParams = {};

      if (tagInstances[i].attributes["pipe-width"] && tagInstances[i].attributes["pipe-height"]) {
        pipeParams["size"] = { width: tagInstances[i].attributes["pipe-width"].value, height: tagInstances[i].attributes["pipe-height"].value };
      } else {
        pipeParams["size"] = { width: 320, height: 270 };
      }

      for (var key in tagInstances[i].attributes) {
        //console.log(tagInstances[i].attributes[key].name);

        if (tagInstances[i].attributes[key].name != "pipe-width" && tagInstances[i].attributes[key].name != "pipe-height") {
          if (tagInstances[i].attributes[key].name == "pipe-accounthash") {

            pipeParams["accountHash"] = tagInstances[i].attributes[key].value;
          } else if (tagInstances[i].attributes[key].name == "pipe-showmenu") {

            pipeParams["showMenu"] = tagInstances[i].attributes[key].value;
          } else if (tagInstances[i].attributes[key].name == "pipe-bgcol") {

            pipeParams["bgCol"] = tagInstances[i].attributes[key].value;
          } else if (tagInstances[i].attributes[key].name == "pipe-menucol") {

            pipeParams["menuCol"] = tagInstances[i].attributes[key].value;
          } else if (tagInstances[i].attributes[key].name == "pipe-normalcol") {

            pipeParams["normalCol"] = tagInstances[i].attributes[key].value;
          } else if (tagInstances[i].attributes[key].name == "pipe-overcol") {

            pipeParams["overCol"] = tagInstances[i].attributes[key].value;
          } else {

            if (tagInstances[i].attributes[key].name != undefined && tagInstances[i].attributes[key].name != "removeNamedItem" && tagInstances[i].attributes[key].name != "removeNamedItemNS" && tagInstances[i].attributes[key].name != "setNamedItem" && tagInstances[i].attributes[key].name != "setNamedItemNS" && tagInstances[i].attributes[key].name != "item" && tagInstances[i].attributes[key].name != "getNamedItem" && tagInstances[i].attributes[key].name != "getNamedItemNS") {
              var att = tagInstances[i].attributes[key].name.replace("pipe-", "");
              pipeParams[att] = tagInstances[i].attributes[key].value;
            }
          }
        }
      }

      var pipeTag = tagInstances[i];
      var div = document.createElement('div');
      div.id = tagInstances[i].attributes["id"].value;
      pipeTag.parentNode.insertBefore(div, pipeTag);
      //WP fix: commented the following line because on WP it did not load 2 or more recorders if we remove the original piperecorder tag
      //pipeTag.parentNode.removeChild(pipeTag);

      PipeSDK.insert(div.id, pipeParams, function (tagRecorder) {
        //let theRecorder = tagRecorder;
        //PipeSDK.recorders[div.id] = theRecorder;
        recordersAdded++;
        //console.log(tagRecorder);
        //console.log("Instances " + tagInstances.length + " i="+i + " recorders added="+recordersAdded);
        if (recordersAdded == tagInstances.length) {
          //console.log("call onRecordersInserted");
          PipeSDK.onRecordersInserted();
        }
      });

      //console.log(pipeParams);
    }
  },

  onRecordersInserted: function onRecordersInserted() {}

};

document.addEventListener("DOMContentLoaded", function (event) {
  PipeSDK.replacePipeTag();
});

},{"./d_upload.js":1,"./flash.js":2,"./mobile.js":3,"./rtc.js":6,"socket.io-client/dist/socket.io.slim":4}],6:[function(require,module,exports){
module.exports = pipeRTCRecorder = {

  addPipeRTCRecorder: function addPipeRTCRecorder(pipeElement, pipeVars) {

    var socket = null;

    var videoInput = null;
    var videoPlayback = null;
    var smallVideoInput;
    var pipeMediaRecorder;

    function get_browser() {
      var ua = navigator.userAgent,
          tem,
          M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: tem[1] || '' };
      }
      if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
          return { name: 'Opera', version: tem[1] };
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
      }
      return {
        name: M[0],
        version: M[1]
      };
    }

    function iOSversion() {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      } else {
        return 0;
      }
    }
    var iOS = iOSversion();

    if (get_browser().name != "Safari") {
      if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
        var recordingOptions = { mimeType: 'video/webm;codecs=h264' };
      } else {
        var recordingOptions = { mimeType: 'video/webm;codecs=vp8' };
      }
    }

    var localStream = null;
    var wsURL = "https://" + html5Server;

    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

    var deviceList = "";
    var recordingNumber = 0;

    var lastStreamTime = 0;
    var actualStreamTime = 0;
    var autoStopped = false;

    var IDLE = 0;
    var DISABLED = 1;
    var RECORDING = 2;
    var PLAYING = 3;
    var STOPPED = 4;
    var PAUSED = 5;

    var state = "init";

    var cam = "";
    var mic = "";
    var micMuted = "";
    var camMuted = "";
    var camReadyState = "";
    var micReadyState = "";
    var camNumber = 0;
    var micNumber = 0;
    var sumMicLevel = 0;
    var nrOfMicLevelCalls = 0;

    var playStreamElapsedTime = 0;
    var actualPlaybackTime = 0;

    var streamElapsedTime = 0;
    var newFileName = "";

    var btSaveCanBeUsed = true;

    var totalStreamSize = 0;
    var buffer = [];
    var recordingStopped = false;

    var recorderDisconnected = false;
    var rightAfterReconnect = false;

    //======WebRTC specific variables======
    var peerConnection = null;
    var peerConnectionConfig = { 'iceServers': [{ "urls": "stun:stun.l.google.com:19302" }, { "urls": "stun:stun1.l.google.com:19302" }, { "urls": "stun:stun2.l.google.com:19302" }, { "urls": "stun:stun3.l.google.com:19302" }, { "urls": "stun:stun4.l.google.com:19302" }, { "urls": "stun:stun.ekiga.net" }, { "urls": "stun:stun.ideasip.com" }, { "urls": "stun:stun.schlund.de" }, { "urls": "stun:stun.stunprotocol.org:3478" }, { "urls": "stun:stun.voiparound.com" }, { "urls": "stun:stun.voipbuster.com" }, { "urls": "stun:stun.voipstunt.com" }, { "urls": "stun:stun.voxgratia.org" }, { "urls": "stun:stun.services.mozilla.com" }] };
    var wsUrlRTC = "wss://" + rtcServer + "/webrtc-session.json";
    var wsConnection = null;
    var streamInfo = { applicationName: "webrtc", streamName: "myStream", sessionId: "[empty]" };
    var videoBitrate = 1024;
    var audioBitrate = 64;
    var videoRotation = -1; //default no rotation
    var videoFrameRate = "29.97";
    var videoChoice = "42e01f";
    var audioChoice = "opus";
    var videoIndex = -1;
    var audioIndex = -1;
    var SDPOutput = new Object();
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    window.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate;
    window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    //=====================================

    //svg Icons
    var recordIcon = '<svg style="enable-background:new 0 0 16 16;" version="1.1" width="30" height="30" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="50" cy="50" r="30" fill="red" /><circle cx="50" cy="50" r="40" stroke="black" stroke-width="8" fill="none" /></svg>';
    var stopRecIcon = '<svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><circle id="svg_2" fill="none" stroke-width="8" stroke="black" r="40" cy="50" cx="50"/><rect rx="8" id="svg_3" height="46" width="46" y="27" x="27" fill-opacity="null" stroke-opacity="null" stroke-width="null" stroke="null" fill="red"/></g></svg>';
    var playIcon = '<svg enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m405.2 232.9-278.4-165.7c-3.4-2-6.9-3.2-10.9-3.2-10.9 0-19.8 9-19.8 20h-.1v344h.1c0 11 8.9 20 19.8 20 4.1 0 7.5-1.4 11.2-3.4l278.1-165.5c6.6-5.5 10.8-13.8 10.8-23.1s-4.2-17.5-10.8-23.1z"/></svg>';
    var pauseIcon = '<svg height="30px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"/><path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"/></g></svg>';
    var saveIcon = '<svg height="30" version="1.1" width="30" viewBox="-2 -2 28 28" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m3 1037.4v2 2 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-2-2h-18z" fill="#2980b9"/><path d="m5 3c-1.1046 0-2 0.8954-2 2v2 2 1 2 6c0 1.105 0.8954 2 2 2h14c1.105 0 2-0.895 2-2v-6-2-1-2-1l-3-3h-1-2-10z" fill="#3498db" transform="translate(0 1028.4)"/><path d="m6 3v1 1 2c0 1.1046 0.8954 2 2 2h1 4 2 1c1.105 0 2-0.8954 2-2v-1.8438-0.1562-1-1h-12z" fill="#2980b9" transform="translate(0 1028.4)"/><path d="m8 1041.4c-1.1046 0-2 0.9-2 2v1.8 3.2h12v-3.2-1.8c0-1.1-0.895-2-2-2h-3-5z" fill="#ecf0f1"/><rect fill="#bdc3c7" height="1" width="12" x="6" y="1048.4"/><path d="m7 1031.4v1 2c0 1.1 0.8954 2 2 2h1 4 1c1.105 0 2-0.9 2-2v-1.9-0.1-1h-10z" fill="#ecf0f1"/><path d="m8 4v2c0 0.5523 0.4477 1 1 1h1 1c0.552 0 1-0.4477 1-1v-2h-2-2z" fill="#95a5a6" transform="translate(0 1028.4)"/><g fill="#bdc3c7"><rect height="1" transform="translate(0 1028.4)" width="8" x="8" y="15"/><rect height="1" width="8" x="8" y="1045.4"/><rect height="1" width="4" x="8" y="1031.4"/></g></g></svg>';
    var microphoneIcon = '<svg height="30px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="120 0 273 512" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M256,353.5c43.7,0,79-37.5,79-83.5V115.5c0-46-35.3-83.5-79-83.5c-43.7,0-79,37.5-79,83.5V270   C177,316,212.3,353.5,256,353.5z"/><path d="M367,192v79.7c0,60.2-49.8,109.2-110,109.2c-60.2,0-110-49-110-109.2V192h-19v79.7c0,67.2,53,122.6,120,127.5V462h-73v18   h161v-18h-69v-62.8c66-4.9,117-60.3,117-127.5V192H367z"/></g></svg>';
    var microphoneDisabledIcon = '<svg height="30px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="120 0 273 512" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path style="fill:red" d="M256,353.5c43.7,0,79-37.5,79-83.5V115.5c0-46-35.3-83.5-79-83.5c-43.7,0-79,37.5-79,83.5V270   C177,316,212.3,353.5,256,353.5z"/><path d="M367,192v79.7c0,60.2-49.8,109.2-110,109.2c-60.2,0-110-49-110-109.2V192h-19v79.7c0,67.2,53,122.6,120,127.5V462h-73v18   h161v-18h-69v-62.8c66-4.9,117-60.3,117-127.5V192H367z"/></g></svg>';

    //counters
    var recordCounter = null;
    var playStreamCounter = null;
    var streamCounter = null;

    //vars for cleanup
    var pipeRecorderRemoved = false;
    var intervals = [];

    //var lang = new Array();

    //init WSS
    var wssOptions = {
      reconnectionAttempts: 30,
      rememberUpgrade: true
      //transports: ['polling', 'websocket']

    };if (get_browser().name != "Safari") {
      socket = io(wsURL, wssOptions);
    }

    //========== Screen capture ===============
    var request = { sources: ['window', 'screen', 'tab'] };
    //====================================

    //create video interface
    var menuH = 30;
    var extraGap = 0;
    var cornerRadiusNoMenu = 0;

    //backward compatibility for showMenu
    if (pipeVars["showMenu"] == "true") {
      pipeVars["showMenu"] = 1;
    } else if (pipeVars["showMenu"] == "false") {
      pipeVars["showMenu"] = 0;
    }
    //============

    if (pipeVars["showMenu"] == 0) {
      menuH = 0;
      extraGap = 30;
      cornerRadiusNoMenu = cornerRadius;
    }

    //Audio meter
    var micMeter = "";
    if (pipeVars["showMenu"] == 1) {
      micMeter = '<div id = "pipeMicContainer-' + pipeElement + '" class = "pipeMicContainer" title="' + micIconTxt + '"><div style="vertical-align:initial;display:inline-block;" id="pipeMicIcon-' + pipeElement + '">' + microphoneIcon + '</div><div class="pipeMeter-container"><div class="pipeMeter" id="audioMeter-' + pipeElement + '"></div></div></div>';
    }

    document.getElementById(pipeElement).innerHTML = '<div id="pipeVrec-' + pipeElement + '" style="position:relative;margin:0;width:' + pipeVars["size"]["width"] + 'px;height:' + pipeVars["size"]["height"] + 'px;font-size:0;"><video id="pipeSmallVideo-' + pipeElement + '" autoplay playsinline width="' + pipeVars["size"]["width"] + 'px" height="' + (pipeVars["size"]["height"] - menuH) + 'px"></video><video id="pipeVideoInput-' + pipeElement + '" autoplay playsinline width="' + pipeVars["size"]["width"] + 'px" height="' + (pipeVars["size"]["height"] - menuH) + 'px"></video><video id="pipeVideoPlayback-' + pipeElement + '" autoplay playsinline width="' + pipeVars["size"]["width"] + 'px" height="' + (pipeVars["size"]["height"] - menuH) + 'px"></video><br/><div id="pipeMenu-' + pipeElement + '" style="width:' + pipeVars["size"]["width"] + 'px;height:30px;background-color:' + menuCol + ';border-bottom-left-radius:' + cornerRadius + 'px;border-bottom-right-radius:' + cornerRadius + 'px; text-align:initial;"><div id="pipeCounter-' + pipeElement + '" class="pipeTimer">' + digits(pipeVars["mrt"]) + '</div><div id="pipeRec-' + pipeElement + '" class="pipeBtn" title="' + recBtnTxt + '" tabindex="0">' + recordIcon + '</div><div id="pipePlay-' + pipeElement + '" class="pipeBtn" title="' + playBtnTxt + '" tabindex="0">' + playIcon + '</div>' + micMeter + '</div></div>';

      //custom style for elements
    document.getElementById("pipeCounter-" + pipeElement).style.left = (pipeVars["size"]["width"] - 57) / 2 + "px";
    document.getElementById("pipeCounter-" + pipeElement).style.color = normalCol;
    

    //check mirroring
    //pipeVars["mv"] = 0;
    if (pipeVars["mv"] == 1) {
      jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeMirrored");
      jQuery('#pipeSmallVideo-' + pipeElement).attr("class", "pipeSmallMirrored");
    } else {
      jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeNormal");
      jQuery('#pipeSmallVideo-' + pipeElement).attr("class", "pipeSmallNormal");
    }
    //custom style for elements
    document.getElementById("pipeVideoInput-" + pipeElement).removeAttribute("style");
    document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
    document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
    document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
    document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";

    jQuery('#pipeVideoPlayback-' + pipeElement).attr("class", "pipeNormal");
    document.getElementById("pipeVideoPlayback-" + pipeElement).removeAttribute("style");
    document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
    document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
    document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
    document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";
    document.getElementById("pipeVideoPlayback-" + pipeElement).style.position = "absolute";
    document.getElementById("pipeVideoPlayback-" + pipeElement).style.left = "0px";
    document.getElementById("pipeVideoPlayback-" + pipeElement).style.top = "0px";

    jQuery("#pipeVideoInput-" + pipeElement).prop('muted', true);

    jQuery("#pipeVideoPlayback-" + pipeElement).hide();

    jQuery("#pipeSmallVideo-" + pipeElement).prop('muted', true);
    jQuery("#pipeSmallVideo-" + pipeElement).hide();

    //create message overlay
    var msgDiv = document.createElement("div");
    msgDiv.id = 'pipeMsgOverlay-' + pipeElement;
    msgDiv.className = 'pipeMsgOverlay';
    document.getElementById('pipeVrec-' + pipeElement).insertBefore(msgDiv, document.getElementById('pipeVrec-' + pipeElement).firstChild);
    jQuery("#pipeMsgOverlay-" + pipeElement).hide();

    //custom style for overlay message
    document.getElementById("pipeMsgOverlay-" + pipeElement).style.left = (pipeVars["size"]["width"] - 30 / 100 * pipeVars["size"]["width"]) / 2 + "px";
    document.getElementById("pipeMsgOverlay-" + pipeElement).style.top = (pipeVars["size"]["height"] - 50) / 2 + "px";

    if (pipeVars["asv"] == 0) {
      jQuery("#pipeMenu-" + pipeElement).append('<div id="pipeSaveVideo-' + pipeElement + '" class="pipeBtnOff" title="' + saveBtnTxt + '" tabindex="0">' + saveIcon + '</div>');
    }

    videoInput = document.getElementById('pipeVideoInput-' + pipeElement);
    videoPlayback = document.getElementById('pipeVideoPlayback-' + pipeElement);

    //==================  Video events for playback ===============

    videoPlayback.onpause = function () {

      if (state == "playing") {

        //jQuery("#pipeVideoInput-"+pipeElement).prop('muted', true);

        state = "paused";

        pipeSetStatus(PAUSED);
        if (pipeVars["asv"] == 0 && btSaveCanBeUsed == true) {
          //jQuery('#pipeSaveVideo').attr('disabled',  false);
          jQuery('#pipeSaveVideo-' + pipeElement).off("click");
          jQuery('#pipeSaveVideo-' + pipeElement).click(pipeSaveVideo);
          jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
          jQuery('#pipeSaveVideo-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipeSaveVideo();
            }
          });
          jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtn");
        }

        //clearInterval(recordCounter);
        clearInterval(playStreamCounter);
        actualPlaybackTime = playStreamElapsedTime;

        document.getElementById('pipePlay-' + pipeElement).innerHTML = playIcon;
        jQuery('#pipePlay-' + pipeElement).attr("title", playBtnTxt);

        //event API call
        PipeSDK.recorders[pipeElement].btPausePressed(pipeElement);
      }
    };

    videoPlayback.onended = function () {
      pipeStopPlayer();
    };

    videoPlayback.ontimeupdate = function () {
      if (state == "playing") {
        //console.log(videoPlayback.currentTime);
        if (videoPlayback.currentTime != "Infinity") {
          if (document.getElementById("pipeCounter-" + pipeElement) != null) {
            document.getElementById("pipeCounter-" + pipeElement).innerHTML = digits(videoPlayback.currentTime) + '/' + digits(actualStreamTime);
          }
        }
      }
    };

    videoPlayback.onwaiting = function () {
      if (state == "playing") {
        pipeShowMessage(bufferingTxt);
      }
    };

    videoPlayback.onplaying = function () {
      if (state == "playing") {
        pipeHideMessage();
      }
    };

    videoPlayback.onplay = function () {
      if (state == "playing") {
        pipeHideMessage();
      }
    };

    //=========================================================

    smallVideoInput = document.getElementById('pipeSmallVideo-' + pipeElement);
    pipeSetStatus(IDLE);

    if (pipeVars["showMenu"] == 0) {
      //add the mic volume meter
      var micDiv = document.createElement("div");
      micDiv.id = 'pipeMicContainer-' + pipeElement;
      micDiv.className = 'pipeMicIconNoMenu';
      document.getElementById('pipeVrec-' + pipeElement).appendChild(micDiv);
    }

    if (pipeVars["ssb"] != "undefined") {
      if (pipeVars["ssb"] == 0) {
        jQuery("#pipeMicContainer-" + pipeElement).hide();
      }
    }

    //we hide the interface at first and only show it once webcam access has been permitted
    jQuery("#pipeVrec-" + pipeElement).hide();

    //load video quality xml profile
    qualityProfileURL = ("https:" == document.location.protocol ? "https://" : "http://") + "s1.addpipe.com/2.0/" + pipeVars["qualityurl"];
    if (pipeVars["qualityurl"].indexOf("http") != -1) {
      qualityProfileURL = pipeVars["qualityurl"];
    }

    jQuery.ajax({
      url: qualityProfileURL,
      dataType: 'xml',
      success: function success(data) {
        var xml_node = jQuery('bandwidth', data);
        //console.log(xml_node.find('bandwidth > item > w').text());

        loadedWidth = xml_node.find('bandwidth > item > w').text();
        loadedHeight = xml_node.find('bandwidth > item > h').text();

        console.log(loadedWidth);

        //get devices
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          devices.forEach(function (device) {
            //console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
            if (device.kind == "audioinput") {
              micNumber++;
              deviceList += "Mic:" + device.label + " \n -----------\n";
            }
            if (device.kind == "videoinput") {
              camNumber++;
              deviceList += "Cam:" + device.label + " \n -----------\n";
            }
          });

          //event API call
          PipeSDK.recorders[pipeElement].userHasCamMic(pipeElement, camNumber, micNumber);

          if (EXTENSION_ID != "") {

            //we show the select message in case the permissions are in pending
            pipeShowError(selectScreenTxt, 1);

            chrome.runtime.sendMessage(EXTENSION_ID, request, function (response) {
              if (response && response.type === 'success') {

                constraints = {
                  video: {
                    mandatory: {
                      chromeMediaSource: 'desktop',
                      chromeMediaSourceId: response.streamId
                    }
                  }
                };

                if (navigator.mediaDevices.getUserMedia) {
                  navigator.mediaDevices.getUserMedia(constraints).then(function (screenStream) {
                    navigator.mediaDevices.getUserMedia({
                      audio: true
                    }).then(function (micStream) {

                      var composedStream = new MediaStream();

                      micStream.getAudioTracks().forEach(function (audioTrack) {
                        composedStream.addTrack(audioTrack);
                      });

                      screenStream.getVideoTracks().forEach(function (videoTrack) {
                        composedStream.addTrack(videoTrack);
                      });

                      pipeGetUserMediaSuccess(composedStream);
                    }).catch(pipeOnError);
                  });
                } else {
                  console.log('Your browser does not support getUserMedia API');
                }
              } else if (response == undefined) {
                pipeShowError(installExtensionTxt + ' <a style = "color:#6fbdff !important;" href="https://chrome.google.com/webstore/detail/' + pipeVars["srec"] + '" target="_blank">Screen Capture extension</a>');
              } else {
                pipeShowError(screenPermissionTxt);
                console.error('Could not get stream');
              }
            });
          } else {

            //check if we are in audio-only mode or we fallback to audio
            if (camNumber == 0 || pipeVars["ao"] == 1) {

              constraints = {
                audio: {
                  echoCancellation: false,
                  noiseSuppression: true
                }
              };

              //add audio-only thumbnail
              jQuery('<img id="pipeAudioOnly-' + pipeElement + '" style="position:absolute; left:' + (pipeVars["size"]["width"] - 100) / 2 + 'px;top:' + (pipeVars["size"]["height"] - 100) / 2 + 'px; z-index: 1;" src="' + ("https:" == document.location.protocol ? "https://" : "http://") + 's1.addpipe.com/2.0/img/svg/audio-only.svg">').insertBefore("#pipeVideoInput-" + pipeElement);
            } else {

              var vidWidth = parseInt(loadedWidth);
              var vidHeight = parseInt(loadedHeight);

              //Safari is stupid and supports only certain resolutions and apple is bad for charging you $749 for the IphoneXR with a 720p display
              if (get_browser().name == "Safari" && iOS != 0 && iOS[0] >= 11) {
                if (vidWidth <= 352) {
                  vidWidth = 352;
                  vidHeight = 288;
                } else if (vidWidth > 352 && vidWidth <= 640) {
                  vidWidth = 640;
                  vidHeight = 480;
                } else if (vidWidth > 640) {
                  vidWidth = 1280;
                  vidHeight = 720;
                }
              } else if (get_browser().name == "Safari" && iOS == 0) {
                if (vidWidth <= 320) {
                  vidWidth = 320;
                  vidHeight = 240;
                } else if (vidWidth > 320 && vidWidth <= 352) {
                  vidWidth = 352;
                  vidHeight = 264;
                } else if (vidWidth > 352 && vidWidth <= 640) {
                  vidWidth = 640;
                  vidHeight = 480;
                } else if (vidWidth > 640) {
                  vidWidth = 1280;
                  vidHeight = 720;
                }
              }

              if (get_browser().name == "Chrome" && get_browser().version >= 63 && navigator.userAgent.toLowerCase().indexOf("android") != -1) {
                constraints = {
                  audio: {
                    echoCancellation: false,
                    noiseSuppression: true
                  },
                  video: {
                    width: vidWidth,
                    height: vidHeight,
                    facingMode: { exact: "user" },
                    framerate: 30
                  }
                };
              } else {
                constraints = {
                  audio: {
                    echoCancellation: false,
                    noiseSuppression: true
                  },
                  video: {
                    width: vidWidth,
                    height: vidHeight,
                    framerate: 30
                  }
                };
              }

              //facingMode: { exact: "user" } for front facing camera on mobil devices
              //for Firefox screen capture : mediaSource: 'screen'
            }

            console.log(constraints);
            //we show the access message in case the permissions are in pending
            pipeShowError(allowAccessTxt, 1);

            if (navigator.mediaDevices.getUserMedia) {
              navigator.mediaDevices.getUserMedia(constraints).then(pipeGetUserMediaSuccess).catch(pipeOnError);
            } else if (navigator.getUserMedia) {
              navigator.getUserMedia(constraints, pipeGetUserMediaSuccess, pipeOnError);
            } else {
              console.log('Your browser does not support getUserMedia API');
            }
          }
        }).catch(function (err) {
          console.log(err.name + ": " + err.message);
        });

        function pipeGetUserMediaSuccess(stream) {
          console.log("pipeGetUserMediaSuccess");
          localStream = stream;

          if (get_browser().name != "Safari") {
            pipeMediaRecorder = new MediaRecorder(localStream, recordingOptions);
          }

          try {
            videoInput.srcObject = localStream;
          } catch (e) {
            videoInput.src = URL.createObjectURL(localStream);
          }

          jQuery("#pipeError-" + pipeElement).remove();
          jQuery("#pipeVrec-" + pipeElement).show();

          //show the audio meter even if the menu is hidden
          if (pipeVars["showMenu"] == 0) {
            document.getElementById('pipeMicContainer-' + pipeElement).innerHTML = '<div style="vertical-align:initial;display:inline-block;" id="pipeMicIcon-' + pipeElement + '">' + microphoneIcon + '</div><div class="pipeMeter-container"><div class="pipeMeter" id="audioMeter-' + pipeElement + '"></div></div>';
            jQuery("#pipeMicContainer").prop("title", micIconTxt);
          }

          state = "idle";

          //event API call
          PipeSDK.recorders[pipeElement].onCamAccess(pipeElement, true);
          PipeSDK.recorders[pipeElement].onReadyToRecord(pipeElement, "webrtc");
          PipeSDK.recorders[pipeElement].onFlashReady(pipeElement);

          //default we consider no mic input
          document.getElementById("pipeMicIcon-" + pipeElement).innerHTML = microphoneDisabledIcon;
          jQuery("#pipeMicContainer-" + pipeElement).prop("title", "No audio input");

          localStream.getTracks().forEach(function (track) {
            //console.log(track);
            if (track.kind == "audio") {

              if (track.readyState == "live") {
                document.getElementById("pipeMicIcon-" + pipeElement).innerHTML = microphoneIcon;
                jQuery("#pipeMicContainer-" + pipeElement).prop("title", micIconTxt + track.label);
              } else {
                document.getElementById("pipeMicIcon-" + pipeElement).innerHTML = microphoneDisabledIcon;
                jQuery("#pipeMicContainer-" + pipeElement).prop("title", "No audio input");
              }

              try {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                window.audioContext = new AudioContext();
              } catch (e) {
                console.log('Web Audio API not supported.');
              }

              var soundMeter = window.soundMeter = new SoundMeter(window.audioContext);
              soundMeter.connectToSource(localStream, function (e) {
                if (e) {
                  console.log(e);
                  return;
                } else {
                  micInterval = setInterval(function () {

                    //event API call
                    if (document.getElementById(pipeElement) != null) {
                      PipeSDK.recorders[pipeElement].onMicActivityLevel(pipeElement, Math.round(soundMeter.instant.toFixed(2) * 100));
                    }

                    if (document.getElementById("audioMeter-" + pipeElement) != null) {
                      document.getElementById("audioMeter-" + pipeElement).style.height = 24 - Math.round(soundMeter.instant.toFixed(2) * 100) + "px";
                    }

                    nrOfMicLevelCalls++;
                    sumMicLevel += Math.round(soundMeter.instant.toFixed(2) * 100);
                  }, 100);

                  intervals.push(micInterval);
                }

                /*//measuring sound level for 5 seconds... if total level==0 after 5 sec then show mic disabled icon
                setTimeout(function(){
                	if(sumMicLevel == 0){
                		jQuery("#pipeMicIcon").prop("src", ("https:" == document.location.protocol ? "https://" : "http://")+"s1.addpipe.com/2.0/img/no_mic_small.png");
                		jQuery("#pipeMicContainer").prop("title", "No audio input");
                	}else{
                		jQuery("#pipeMicIcon").prop("src", ("https:" == document.location.protocol ? "https://" : "http://")+"s1.addpipe.com/2.0/img/mic_small.png");
                		jQuery("#pipeMicContainer").prop("title", micIconTxt + track.label);
                	}
                },5000);
                */
              });
            }
          });

          //=================== Media Recorder events ==========================
          if (get_browser().name != "Safari") {
            pipeMediaRecorder.onstart = function () {
              console.log('Started & state = ' + pipeMediaRecorder.state);

              actualStreamTime = 0;

              try {

                newFileName = generateName();

                //get active stream and check readyState. Also getting currently active cam and mic names
                localStream.getTracks().forEach(function (track) {
                  //console.log(track);
                  if (track.kind == "audio") {
                    mic = track.label;
                    micReadyState = track.readyState;
                    micMuted = track.muted;
                    console.log("Audio track.readyState=" + track.readyState + ", track.muted=" + track.muted);
                  }
                  if (track.kind == "video") {
                    cam = track.label;
                    camReadyState = track.readyState;
                    camMuted = track.muted;
                    console.log("Video track.readyState=" + track.readyState + ", track.muted=" + track.muted);
                  }
                });

                //check and make sure all devices are "live"
                if (EXTENSION_ID == "") {
                  if (pipeVars["ao"] != 1) {
                    if (camNumber > 0 && camReadyState != "live" || micReadyState != "live") {
                      return pipeShowError(noCameraTxt);
                    }
                  } else {
                    if (micReadyState != "live") {
                      return pipeShowError(noMicTxt);
                    }
                  }
                } else {
                  if (micReadyState != "live") {
                    return pipeShowError(noMicTxt);
                  }
                }

                document.getElementById('pipeRec-' + pipeElement).innerHTML = stopRecIcon;
                jQuery('#pipeRec-' + pipeElement).attr("title", stopBtnTxt);

                lastStreamTime = 0;
                recordCounter = setInterval(pipeCounter, 1000);
                intervals.push(recordCounter);

                streamStartTime = Date.now();
                streamCounter = setInterval(pipeStreamCounter, 100);
                intervals.push(streamCounter);

                setTimeout(function () {
                  pipeHideMessage();
                }, 1000);

                autoSaveVid = 0;
                if (pipeVars["asv"] == 1 || pipeVars["asv"] == undefined) {
                  autoSaveVid = 1;
                }

                audioOnly = 0;
                if (pipeVars["ao"] == 1) {
                  audioOnly = 1;
                }

                socket.emit('streamStart', { 'streamName': newFileName, 'started': true, 'micMuted': micMuted, 'micReadyState': micReadyState, 'camMuted': camMuted, 'camReadyState': camReadyState, 'autoSave': autoSaveVid, 'accountHash': pipeVars["accountHash"], 'payload': pipeVars["payload"] ? pipeVars["payload"] : '', 'httpReferer': window.location.href, 'environmentId': pipeVars["eid"] ? pipeVars["eid"] : '1', 'cameraName': cam, 'microphoneName': mic, 'devices': deviceList, 'audioOnly': audioOnly });
                recordingStopped = false;

                emitFromBuffer();

                //event API call
                PipeSDK.recorders[pipeElement].onRecordingStarted(pipeElement);
              } catch (e) {
                pipeOnError(e);
              }
            };

            pipeMediaRecorder.onstop = function () {
              console.log('Stopped  & state = ' + pipeMediaRecorder.state);

              rightAfterReconnect = false;
              recordingStopped = true;

              if (pipeRecorderRemoved == false && recorderDisconnected == false) {
                pipeShowMessage(uploadingTxt);
              }
              //console.log(buffer);
              if (buffer.length == 0) {
                if (recorderDisconnected == false) {
                  socket.emit('streamStop', { 'lastPacket': true });
                }
              }
            };

            pipeMediaRecorder.ondataavailable = function (e) {
              buffer.push(e);
              totalStreamSize += e.data.size;
              //console.log("Total Stream size " + totalStreamSize);
            };

            pipeMediaRecorder.onwarning = function (e) {
              console.log('Warning: ' + e);
            };

            pipeMediaRecorder.onerror = function (e) {
              pipeOnError(e);
            };
          }
        }

        if (get_browser().name != "Safari") {
          socket.on('finishedUploading', function (msg) {
            console.log(msg);

            pipeHideMessage();
            totalStreamSize = 0;

            // ===== auto save the video if set to 1 or default to autosaving if not set at all =====
            if (pipeVars["asv"] == 1 || pipeVars["asv"] == undefined) {
              pipeSaveVideo();
            } else {
              if (btSaveCanBeUsed == true) {
                //jQuery('#pipeSaveVideo').attr('disabled',  false);
                jQuery('#pipeSaveVideo-' + pipeElement).off("click");
                jQuery('#pipeSaveVideo-' + pipeElement).click(pipeSaveVideo);
                jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
                jQuery('#pipeSaveVideo-' + pipeElement).keydown(function (event) {
                  if (event.which == 13) {
                    event.preventDefault();
                    pipeSaveVideo();
                  }
                });
                jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtn");
              }
            }

            pipeSetStatus(STOPPED);

            //event API call
            if (pipeVars["ao"] == 1) {
              PipeSDK.recorders[pipeElement].onUploadDone(pipeElement, newFileName, streamElapsedTime, "Opus", "VP8", "webm", true, storageS3Location);
            } else {
              PipeSDK.recorders[pipeElement].onUploadDone(pipeElement, newFileName, streamElapsedTime, "Opus", "VP8", "webm", false, storageS3Location);
            }
          });
        }
      }, error: function error(data) {
        console.log('Error loading audio-video profile XML data');
      }
    });

    if (pipeVars["showMenu"] == 0) {
      jQuery("#pipeMenu-" + pipeElement).hide();
    }

    function emitFromBuffer() {
      if (recorderDisconnected == false) {
        if (buffer.length > 0) {
          //console.log(buffer);
          //we always get the first element, because after emit acknowledgment it changes
          var packet = buffer[0];
          socket.emit('stream', { 'data': packet.data, 'size': packet.data.size }, function (totalReceivedSize) {
            //console.log("Received size "+totalReceivedSize);
            buffer.shift();

            if (pipeMediaRecorder.state == "inactive") {
              percentageUploaded = Math.round(totalReceivedSize / totalStreamSize * 100);
              if (pipeVars["size"]["width"] <= 400) {
                pipeShowMessage(uploadingTxt + percentageUploaded + "%", 45);
              } else {
                pipeShowMessage(uploadingTxt + percentageUploaded + "%");
              }
            }
            emitFromBuffer();
          });
        } else {
          if (recordingStopped == false) {
            setTimeout(emitFromBuffer, 250);
          } else {
            socket.emit('streamStop', { 'lastPacket': true });
          }
        }
      }
    }

    //======================== Socket connection events ===========================
    if (get_browser().name != "Safari") {
      socket.on('connect', function () {
        recorderDisconnected = false;
        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "connected");
      });

      socket.on('connect_error', function (error) {
        console.log("connect_error " + error);
        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "connect_error:" + error);
      });

      socket.on('connect_timeout', function (timeout) {
        console.log("connect_timeout " + timeout);
        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "connection_timeout");

        pipeShowError("Connection timeout");
      });

      socket.on('error', function (error) {
        console.log("error " + error);
        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "error:" + error);
      });

      socket.on('disconnect', function (reason) {
        console.log("Disconnect reason " + reason);
        //console.log("TRANSPORT: " + socket.io.engine.transport.name);
        pipeShowMessage("Not Connected. Reconnecting in 1s...", 30, "top");

        recorderDisconnected = true;

        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "disconnected: " + reason);
      });

      socket.on('reconnect', function (attemptNumber) {
        console.log("reconnect at attemptNumber: " + attemptNumber);

        if (state == "recording") {
          autoSaveVid = 0;
          if (pipeVars["asv"] == 1 || pipeVars["asv"] == undefined) {
            autoSaveVid = 1;
          }
          audioOnly = 0;
          if (pipeVars["ao"] == 1) {
            audioOnly = 1;
          }
          socket.emit('streamResume', { 'streamName': newFileName, 'started': true, 'micMuted': micMuted, 'micReadyState': micReadyState, 'camMuted': camMuted, 'camReadyState': camReadyState, 'autoSave': autoSaveVid, 'accountHash': pipeVars["accountHash"], 'payload': pipeVars["payload"] ? pipeVars["payload"] : '', 'httpReferer': window.location.href, 'environmentId': pipeVars["eid"] ? pipeVars["eid"] : '1', 'cameraName': cam, 'microphoneName': mic, 'devices': deviceList, 'audioOnly': audioOnly });

          recorderDisconnected = false;
          rightAfterReconnect = true;

          emitFromBuffer();
        } else {
          recorderDisconnected = false;
          rightAfterReconnect = true;
        }

        pipeShowMessage("Reconnected", 15, "top");
        setTimeout(pipeHideMessage, 2000);

        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "reconnected");
      });

      socket.on('reconnecting', function (attemptNumber) {
        console.log("reconnecting attemptNumber: " + attemptNumber);

        pipeShowMessage("Not Connected. Reconnecting...", 28, "top");
        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "reconnecting");
      });

      socket.on('reconnect_error', function (error) {
        console.log("reconnect_error " + error);

        if (String(error).indexOf("xhr") != -1) {
          pipeShowMessage("Not Connected (xhr). Reconnecting in 1s...", 32, "top");
        } else if (String(error).indexOf("websocket") != -1) {
          pipeShowMessage("Not Connected (wss). Reconnecting in 1s...", 32, "top");
        }
        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "reconnect_error");
      });

      socket.on('reconnect_failed', function () {
        console.log("reconnect_failed");

        pipeShowError(conInterruptedTxt);
        //event API call
        PipeSDK.recorders[pipeElement].onConnectionStatus(pipeElement, "reconnect_failed");
        PipeSDK.recorders[pipeElement].onConnectionClosed(pipeElement);
      });

      socket.on('ping', function () {
        //console.log("ping");
      });

      socket.on('pong', function (latency) {
        //console.log("pong: " + latency + " ms");
      });
    }

    function pipeSetStatus(nextState) {
      switch (nextState) {
        case IDLE:

          jQuery('#pipeRec-' + pipeElement).off("click");
          jQuery('#pipeRec-' + pipeElement).click(pipeStart);
          jQuery('#pipeRec-' + pipeElement).off("keydown");
          jQuery('#pipeRec-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipeStart();
            }
          });
          jQuery('#pipeRec-' + pipeElement).attr("class", "pipeBtn");

          jQuery('#pipePlay-' + pipeElement).off("click");
          jQuery('#pipePlay-' + pipeElement).off("keydown");
          jQuery('#pipePlay-' + pipeElement).attr("class", "pipeBtnOff");
          jQuery('#pipeSaveVideo-' + pipeElement).off("click");
          jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
          jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtnOff");
          break;

        case RECORDING:

          jQuery('#pipeRec-' + pipeElement).off("click");
          jQuery('#pipeRec-' + pipeElement).click(pipeStop);
          jQuery('#pipeRec-' + pipeElement).off("keydown");
          jQuery('#pipeRec-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipeStop();
            }
          });
          jQuery('#pipeRec-' + pipeElement).attr("class", "pipeBtn");

          jQuery('#pipePlay-' + pipeElement).off("click");
          jQuery('#pipePlay-' + pipeElement).off("keydown");
          jQuery('#pipePlay-' + pipeElement).attr("class", "pipeBtnOff");
          break;

        case PLAYING:

          jQuery('#pipeRec-' + pipeElement).off("click");
          jQuery('#pipeRec-' + pipeElement).off("keydown");
          jQuery('#pipeRec-' + pipeElement).attr("class", "pipeBtnOff");

          jQuery('#pipePlay-' + pipeElement).off("click");
          jQuery('#pipePlay-' + pipeElement).click(pipePausePlayback);
          jQuery('#pipePlay-' + pipeElement).off("keydown");
          jQuery('#pipePlay-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipePausePlayback();
            }
          });
          jQuery('#pipePlay-' + pipeElement).attr("class", "pipeBtn");
          break;

        case STOPPED:

          jQuery('#pipeRec-' + pipeElement).off("click");
          jQuery('#pipeRec-' + pipeElement).click(pipeStart);
          jQuery('#pipeRec-' + pipeElement).off("keydown");
          jQuery('#pipeRec-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipeStart();
            }
          });
          jQuery('#pipeRec-' + pipeElement).attr("class", "pipeBtn");

          jQuery('#pipePlay-' + pipeElement).off("click");
          jQuery('#pipePlay-' + pipeElement).click(pipePlay);
          jQuery('#pipePlay-' + pipeElement).off("keydown");
          jQuery('#pipePlay-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipePlay();
            }
          });
          jQuery('#pipePlay-' + pipeElement).attr("class", "pipeBtn");
          break;

        case PAUSED:

          //jQuery('#pipeRec').off("click");
          //jQuery('#pipeRec').attr("class","pipeBtnOff");

          jQuery('#pipeRec-' + pipeElement).off("click");
          jQuery('#pipeRec-' + pipeElement).click(pipeStart);
          jQuery('#pipeRec-' + pipeElement).off("keydown");
          jQuery('#pipeRec-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipeStart();
            }
          });
          jQuery('#pipeRec-' + pipeElement).attr("class", "pipeBtn");

          jQuery('#pipePlay-' + pipeElement).off("click");
          jQuery('#pipePlay-' + pipeElement).click(pipePlay);
          jQuery('#pipePlay-' + pipeElement).off("keydown");
          jQuery('#pipePlay-' + pipeElement).keydown(function (event) {
            if (event.which == 13) {
              event.preventDefault();
              pipePlay();
            }
          });
          jQuery('#pipePlay-' + pipeElement).attr("class", "pipeBtn");
          break;

        case DISABLED:

          jQuery('#pipeRec-' + pipeElement).off("click");
          jQuery('#pipeRec-' + pipeElement).off("keydown");
          jQuery('#pipeRec-' + pipeElement).attr("class", "pipeBtnOff");

          jQuery('#pipePlay-' + pipeElement).off("click");
          jQuery('#pipePlay-' + pipeElement).off("keydown");
          jQuery('#pipePlay-' + pipeElement).attr("class", "pipeBtnOff");
          break;
      }
    }

    //==========================================WebRTC specific functions======================================

    function pipeWsConnect(url) {
      wsConnection = new WebSocket(url);
      wsConnection.binaryType = 'arraybuffer';

      wsConnection.onopen = function () {
        console.log("wsConnection.onopen");

        peerConnection = new RTCPeerConnection(peerConnectionConfig);
        peerConnection.onicecandidate = gotIceCandidate;

        var localTracks = localStream.getTracks();
        for (localTrack in localTracks) {
          peerConnection.addTrack(localTracks[localTrack], localStream);
        }

        peerConnection.createOffer().then(gotDescription).catch(pipeOnError);
      };

      wsConnection.onmessage = function (evt) {
        console.log("wsConnection.onmessage: " + evt.data);

        var msgJSON = JSON.parse(evt.data);

        var msgStatus = Number(msgJSON['status']);
        //var msgCommand = msgJSON['command'];

        if (msgStatus != 200) {
          pipeStopPublisher();
        } else {

          var sdpData = msgJSON['sdp'];
          if (sdpData !== undefined) {
            console.log('sdp: ' + msgJSON['sdp']);
            peerConnection.setRemoteDescription(sdpData).then(function () {
              //peerConnection.createAnswer(gotDescription, pipeOnError);
            }).catch(pipeOnError);
          }

          var iceCandidates = msgJSON['iceCandidates'];
          if (iceCandidates !== undefined) {
            for (var index in iceCandidates) {
              console.log('iceCandidates: ' + iceCandidates[index]);
              peerConnection.addIceCandidate(new RTCIceCandidate(iceCandidates[index]));
            }
          }
        }

        if (wsConnection != null) {
          wsConnection.close();
        }
        wsConnection = null;

        if (msgJSON['direction'] == "publish") {
          document.getElementById('pipeRec-' + pipeElement).innerHTML = stopRecIcon;
          jQuery('#pipeRec-' + pipeElement).attr("title", stopBtnTxt);

          lastStreamTime = 0;
          recordCounter = setInterval(pipeCounter, 1000);
          intervals.push(recordCounter);

          streamStartTime = Date.now();
          streamCounter = setInterval(pipeStreamCounter, 100);
          intervals.push(streamCounter);

          setTimeout(function () {
            pipeHideMessage();
          }, 1000);

          //event API call
          PipeSDK.recorders[pipeElement].onRecordingStarted(pipeElement);
        }
      };

      wsConnection.onclose = function () {
        console.log("wsConnection.onclose");
      };

      wsConnection.onerror = function (evt) {
        console.log("wsConnection.onerror: " + JSON.stringify(evt));
        pipeStopPublisher();
      };
    }

    function pipeStartPublisher() {

      newFileName = generateName();
      streamInfo.streamName = newFileName;

      console.log("pipeStartPublisher: wsUrlRTC:" + wsUrlRTC + " streamInfo:" + JSON.stringify(streamInfo));

      pipeWsConnect(wsUrlRTC);

      actualStreamTime = 0;

      if (get_browser().name == "Safari") {
        if (window.orientation != undefined) {
          videoRotation = window.orientation;
        }
      }

      try {

        //get active stream and check readyState. Also getting currently active cam and mic names
        localStream.getTracks().forEach(function (track) {
          //console.log(track);
          if (track.kind == "audio") {
            mic = track.label;
            micReadyState = track.readyState;
            micMuted = track.muted;
            console.log("Audio track.readyState=" + track.readyState + ", track.muted=" + track.muted);
          }
          if (track.kind == "video") {
            cam = track.label;
            camReadyState = track.readyState;
            camMuted = track.muted;
            console.log("Video track.readyState=" + track.readyState + ", track.muted=" + track.muted);
          }
        });

        //check and make sure all devices are "live"
        if (EXTENSION_ID == "") {
          if (pipeVars["ao"] != 1) {
            if (camNumber > 0 && camReadyState != "live" || micReadyState != "live") {
              return pipeShowError(noCameraTxt);
            }
          } else {
            if (micReadyState != "live") {
              return pipeShowError(noMicTxt);
            }
          }
        } else {
          if (micReadyState != "live") {
            return pipeShowError(noMicTxt);
          }
        }
      } catch (e) {
        pipeOnError(e);
      }

      //$("#buttonGo").attr('value', GO_BUTTON_STOP);
    }

    function pipeStopPublisher() {
      if (peerConnection != null) {
        peerConnection.close();
      }
      peerConnection = null;

      if (wsConnection != null) {
        peerConnection.close();
      }
      wsConnection = null;

      //$("#buttonGo").attr('value', GO_BUTTON_START);

      console.log("pipeStopPublisher");

      // ===== auto save the video if set to 1 or default to autosaving if not set at all =====
      setTimeout(function () {
        if (pipeVars["asv"] == 1 || pipeVars["asv"] == undefined) {
          pipeSaveVideo();
        } else {
          if (btSaveCanBeUsed == true) {
            //jQuery('#pipeSaveVideo').attr('disabled',  false);
            jQuery('#pipeSaveVideo-' + pipeElement).off("click");
            jQuery('#pipeSaveVideo-' + pipeElement).click(pipeSaveVideo);
            jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
            jQuery('#pipeSaveVideo-' + pipeElement).keydown(function (event) {
              if (event.which == 13) {
                event.preventDefault();
                pipeSaveVideo();
              }
            });
            jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtn");
          }
        }

        pipeSetStatus(STOPPED);

        //event API call
        if (pipeVars["ao"] == 1) {
          PipeSDK.recorders[pipeElement].onUploadDone(pipeElement, newFileName, streamElapsedTime, "Opus", "H264", "mp4", true, storageS3Location);
        } else {
          PipeSDK.recorders[pipeElement].onUploadDone(pipeElement, newFileName, streamElapsedTime, "Opus", "H264", "mp4", false, storageS3Location);
        }
      }, 1000);
    }

    function gotIceCandidate(event) {
      if (event.candidate != null) {
        console.log('gotIceCandidate: ' + JSON.stringify({ 'ice': event.candidate }));
      }
    }

    function gotDescription(description) {
      var enhanceData = new Object();

      if (audioBitrate !== undefined) {
        enhanceData.audioBitrate = Number(audioBitrate);
      }
      if (videoBitrate !== undefined) {
        enhanceData.videoBitrate = Number(videoBitrate);
      }
      if (videoFrameRate !== undefined) {
        enhanceData.videoFrameRate = Number(videoFrameRate);
      }

      description.sdp = enhanceSDP(description.sdp, enhanceData);
      console.log('gotDescription: ' + JSON.stringify({ 'sdp': description }));

      peerConnection.setLocalDescription(description).then(function () {
        wsConnection.send('{"direction":"publish", "command":"sendOffer", "streamInfo":' + JSON.stringify(streamInfo) + ', "sdp":' + JSON.stringify(description) + '}');
      }).catch(pipeOnError);
    }

    function addAudio(sdpStr, audioLine) {
      var sdpLines = sdpStr.split(/\r\n/);
      var sdpSection = 'header';
      var hitMID = false;
      var sdpStrRet = '';
      var done = false;

      for (var sdpIndex in sdpLines) {
        var sdpLine = sdpLines[sdpIndex];
        if (sdpLine.length <= 0) continue;

        sdpStrRet += sdpLine;
        sdpStrRet += '\r\n';

        if ('a=rtcp-mux'.localeCompare(sdpLine) == 0 && done == false) {
          sdpStrRet += audioLine;
          done = true;
        }
      }
      return sdpStrRet;
    }

    function addVideo(sdpStr, videoLine) {
      var sdpLines = sdpStr.split(/\r\n/);
      var sdpSection = 'header';
      var hitMID = false;
      var sdpStrRet = '';
      var done = false;

      var rtcpSize = false;
      var rtcpMux = false;

      for (var sdpIndex in sdpLines) {
        var sdpLine = sdpLines[sdpIndex];
        if (sdpLine.length <= 0) continue;

        if (sdpLine.includes("a=rtcp-rsize")) {
          rtcpSize = true;
        }
        if (sdpLine.includes("a=rtcp-mux")) {
          rtcpMux = true;
        }
      }

      for (var sdpIndex in sdpLines) {
        var sdpLine = sdpLines[sdpIndex];

        sdpStrRet += sdpLine;
        sdpStrRet += '\r\n';

        if ('a=rtcp-rsize'.localeCompare(sdpLine) == 0 && done == false && rtcpSize == true) {
          sdpStrRet += videoLine;
          done = true;
        }

        if ('a=rtcp-mux'.localeCompare(sdpLine) == 0 && done == true && rtcpSize == false) {
          sdpStrRet += videoLine;
          done = true;
        }

        if ('a=rtcp-mux'.localeCompare(sdpLine) == 0 && done == false && rtcpSize == false) {
          done = true;
        }
      }
      return sdpStrRet;
    }

    function enhanceSDP(sdpStr, enhanceData) {
      var sdpLines = sdpStr.split(/\r\n/);
      var sdpSection = 'header';
      var hitMID = false;
      var sdpStrRet = '';

      //console.log("Original SDP: "+sdpStr);

      // Firefox provides a reasonable SDP, Chrome is just odd
      // so we have to doing a little mundging to make it all work
      if (!sdpStr.includes("THIS_IS_SDPARTA") || videoChoice.includes("VP9")) {
        for (var sdpIndex in sdpLines) {
          var sdpLine = sdpLines[sdpIndex];

          if (sdpLine.length <= 0) continue;

          var doneCheck = checkLine(sdpLine);
          if (!doneCheck) continue;

          sdpStrRet += sdpLine;
          sdpStrRet += '\r\n';
        }
        sdpStrRet = addAudio(sdpStrRet, deliverCheckLine(audioChoice, "audio"));
        sdpStrRet = addVideo(sdpStrRet, deliverCheckLine(videoChoice, "video"));
        sdpStr = sdpStrRet;
        sdpLines = sdpStr.split(/\r\n/);
        sdpStrRet = '';
      }

      for (var sdpIndex in sdpLines) {
        var sdpLine = sdpLines[sdpIndex];

        if (sdpLine.length <= 0) continue;

        if (sdpLine.indexOf("m=audio") == 0 && audioIndex != -1) {
          audioMLines = sdpLine.split(" ");
          sdpStrRet += audioMLines[0] + " " + audioMLines[1] + " " + audioMLines[2] + " " + audioIndex + "\r\n";
          continue;
        }

        if (sdpLine.indexOf("m=video") == 0 && videoIndex != -1) {
          audioMLines = sdpLine.split(" ");
          sdpStrRet += audioMLines[0] + " " + audioMLines[1] + " " + audioMLines[2] + " " + videoIndex + "\r\n";
          continue;
        }

        sdpStrRet += sdpLine;

        if (sdpLine.indexOf("m=audio") === 0) {
          sdpSection = 'audio';
          hitMID = false;
        } else if (sdpLine.indexOf("m=video") === 0) {
          sdpSection = 'video';
          hitMID = false;
        } else if (sdpLine.indexOf("a=rtpmap") == 0) {
          sdpSection = 'bandwidth';
          hitMID = false;
        }

        if (sdpLine.indexOf("a=mid:") === 0 || sdpLine.indexOf("a=rtpmap") == 0) {
          if (!hitMID) {
            if ('audio'.localeCompare(sdpSection) == 0) {
              if (enhanceData.audioBitrate !== undefined) {
                sdpStrRet += '\r\nb=CT:' + enhanceData.audioBitrate;
                sdpStrRet += '\r\nb=AS:' + enhanceData.audioBitrate;
              }
              hitMID = true;
            } else if ('video'.localeCompare(sdpSection) == 0) {
              if (enhanceData.videoBitrate !== undefined) {
                sdpStrRet += '\r\nb=CT:' + enhanceData.videoBitrate;
                sdpStrRet += '\r\nb=AS:' + enhanceData.videoBitrate;
                if (enhanceData.videoFrameRate !== undefined) {
                  sdpStrRet += '\r\na=framerate:' + enhanceData.videoFrameRate;
                }
              }
              hitMID = true;
            } else if ('bandwidth'.localeCompare(sdpSection) == 0) {
              var rtpmapID;
              rtpmapID = getrtpMapID(sdpLine);
              if (rtpmapID !== null) {
                var match = rtpmapID[2].toLowerCase();
                if ('vp9'.localeCompare(match) == 0 || 'vp8'.localeCompare(match) == 0 || 'h264'.localeCompare(match) == 0 || 'red'.localeCompare(match) == 0 || 'ulpfec'.localeCompare(match) == 0 || 'rtx'.localeCompare(match) == 0) {
                  if (enhanceData.videoBitrate !== undefined) {
                    sdpStrRet += '\r\na=fmtp:' + rtpmapID[1] + ' x-google-min-bitrate=' + enhanceData.videoBitrate + ';x-google-max-bitrate=' + enhanceData.videoBitrate;
                  }
                }

                if ('opus'.localeCompare(match) == 0 || 'isac'.localeCompare(match) == 0 || 'g722'.localeCompare(match) == 0 || 'pcmu'.localeCompare(match) == 0 || 'pcma'.localeCompare(match) == 0 || 'cn'.localeCompare(match) == 0) {
                  if (enhanceData.audioBitrate !== undefined) {
                    sdpStrRet += '\r\na=fmtp:' + rtpmapID[1] + ' x-google-min-bitrate=' + enhanceData.audioBitrate + ';x-google-max-bitrate=' + enhanceData.audioBitrate;
                  }
                }
              }
            }
          }
        }
        sdpStrRet += '\r\n';
      }
      console.log("Resulting SDP: " + sdpStrRet);
      return sdpStrRet;
    }

    function deliverCheckLine(profile, type) {
      var outputString = "";
      for (var line in SDPOutput) {
        var lineInUse = SDPOutput[line];
        outputString += line;
        if (lineInUse.includes(profile)) {
          if (profile.includes("VP9") || profile.includes("VP8")) {
            var output = "";
            var outputs = lineInUse.split(/\r\n/);
            for (var position in outputs) {
              var transport = outputs[position];
              if (transport.indexOf("transport-cc") !== -1 || transport.indexOf("goog-remb") !== -1 || transport.indexOf("nack") !== -1) {
                continue;
              }
              output += transport;
              output += "\r\n";
            }

            if (type.includes("audio")) {
              audioIndex = line;
            }

            if (type.includes("video")) {
              videoIndex = line;
            }
            return output;
          }

          if (type.includes("audio")) {
            audioIndex = line;
          }

          if (type.includes("video")) {
            videoIndex = line;
          }
          return lineInUse;
        }
      }
      return outputString;
    }

    function checkLine(line) {
      if (line.startsWith("a=rtpmap") || line.startsWith("a=rtcp-fb") || line.startsWith("a=fmtp")) {
        var res = line.split(":");
        if (res.length > 1) {
          var number = res[1].split(" ");
          if (!isNaN(number[0])) {
            if (!number[1].startsWith("http") && !number[1].startsWith("ur")) {
              var currentString = SDPOutput[number[0]];
              if (!currentString) {
                currentString = "";
              }
              currentString += line + "\r\n";
              SDPOutput[number[0]] = currentString;
              return false;
            }
          }
        }
      }

      return true;
    }

    function getrtpMapID(line) {
      var findid = new RegExp('a=rtpmap:(\\d+) (\\w+)/(\\d+)');
      var found = line.match(findid);
      return found && found.length >= 3 ? found : null;
    }

    //=======================================================================================================

    function pipeStart() {
      //console.log("pipeStart " + state);

      if (state == "idle" || state == "recorded" || state == "played" || state == "paused") {

        jQuery("#pipeVideoInput-" + pipeElement).prop('muted', true);
        if (jQuery("#pipeVideoPlayback-" + pipeElement).css('display') != 'none') {
          jQuery("#pipeVideoPlayback-" + pipeElement).hide();
        }

        btSaveCanBeUsed = true;

        if (state == "paused") {

          //re-mirror the video if needed
          if (pipeVars["mv"] == 1) {
            jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeMirrored");
          } else {
            jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeNormal");
          }
          //custom style for elements
          document.getElementById("pipeVideoInput-" + pipeElement).removeAttribute("style");
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";

          jQuery("#pipeVideoInput-" + pipeElement).prop('muted', true);

          state = "played";

          document.getElementById('pipePlay-' + pipeElement).innerHTML = playIcon;
          jQuery('#pipePlay-' + pipeElement).attr("title", playBtnTxt);

          clearInterval(recordCounter);
          clearInterval(playStreamCounter);
          actualPlaybackTime = 0;

          //pipeSetStatus(STOPPED);

          //remove picture in picture and re-init recorder
          jQuery("#pipeSmallVideo-" + pipeElement).animate({
            left: '0px',
            top: '0px',
            height: pipeVars["size"]["height"] - menuH + 'px',
            width: pipeVars["size"]["width"] + 'px'
          }, 250);

          setTimeout(function () {
            jQuery("#pipeSmallVideo-" + pipeElement).hide();
          }, 250);

          if (pipeRecorderRemoved == false) {
            //re-init recorder
            try {
              videoInput.srcObject = localStream;
            } catch (e) {
              videoInput.src = URL.createObjectURL(localStream);
            }
          }
        }

        //event API call
        PipeSDK.recorders[pipeElement].btRecordPressed(pipeElement);

        if (pipeVars["asv"] == 0) {
          //jQuery('#pipeSaveVideo').attr('disabled',  true);
          jQuery('#pipeSaveVideo-' + pipeElement).off("click");
          jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
          jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtnOff");
        }

        autoStopped = false;

        //get devices again in case something changed
        micNumber = 0;
        camNumber = 0;
        recordingNumber++;
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          deviceList = deviceList.split("On Recording:")[0];
          deviceList += "On Recording: # " + recordingNumber + " \n";
          devices.forEach(function (device) {
            //console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
            if (device.kind == "audioinput") {
              micNumber++;
              deviceList += "Mic:" + device.label + " \n -----------\n";
            }
            if (device.kind == "videoinput") {
              camNumber++;
              deviceList += "Cam:" + device.label + " \n -----------\n";
            }
          });

          if (micNumber != 0 || camNumber != 0 && pipeVars["ao"] == 0 && EXTENSION_ID == "") {

            //re-init the buffer
            buffer = [];

            if (get_browser().name != "Safari") {
              pipeMediaRecorder.start(200);
            } else {
              pipeShowMessage(connectingTxt);
              pipeStartPublisher();
            }

            state = "recording";
            pipeSetStatus(DISABLED);
          } else {
            if (EXTENSION_ID == "") {
              if (pipeVars["ao"] == 1) {
                pipeShowError(noMicTxt);
              } else {
                pipeShowError(noCameraTxt);
              }
            } else {
              pipeShowError(noMicTxt);
            }
          }
        }).catch(function (err) {
          console.log(err.name + ": " + err.message);
        });
      }
    }

    function pipeStop() {
      //console.log("pipeStop " + state);
      if (state == "recording") {

        pipeSetStatus(DISABLED);

        state = "recorded";

        //event API call
        PipeSDK.recorders[pipeElement].btStopRecordingPressed(pipeElement);

        document.getElementById('pipeRec-' + pipeElement).innerHTML = recordIcon;
        jQuery('#pipeRec-' + pipeElement).attr("title", recBtnTxt);

        clearInterval(recordCounter);
        clearInterval(streamCounter);

        try {

          if (get_browser().name != "Safari") {
            pipeMediaRecorder.stop();
          } else {
            pipeStopPublisher();
          }

          if (lastStreamTime > pipeVars["mrt"]) {
            lastStreamTime = pipeVars["mrt"] + 1;
          }

          actualStreamTime = lastStreamTime;
        } catch (e) {
          pipeOnError(e);
        }
      }
    }

    function pipePlay() {
      //console.log("pipePlay " + state);

      if (state == "recorded" || state == "played") {

        try {
          videoInput.srcObject = null;
        } catch (e) {}

        if (get_browser().name != "Safari") {
          videoPlayback.src = "https://" + html5Server + "/v_rtc/" + newFileName + ".webm";
        } else {
          videoPlayback.src = "https://" + rtcServer + ":8443/v_rtc/" + newFileName + "_source.mp4";
        }

        if (get_browser().name == "Safari" && iOS != 0 && iOS[0] >= 11) {
          if (videoRotation == 0) {
            /*jQuery('#pipeVideoPlayback-'+pipeElement).attr("class","pipeRotate90");
            document.getElementById("pipeVideoPlayback-"+pipeElement).removeAttribute("style");
            document.getElementById("pipeVideoPlayback-"+pipeElement).style.borderTopLeftRadius = cornerRadius+"px";
            document.getElementById("pipeVideoPlayback-"+pipeElement).style.borderTopRightRadius = cornerRadius+"px";
            document.getElementById("pipeVideoPlayback-"+pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu+"px";
            document.getElementById("pipeVideoPlayback-"+pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu+"px";
            document.getElementById("pipeVideoPlayback-"+pipeElement).style.position = "absolute";
            document.getElementById("pipeVideoPlayback-"+pipeElement).style.left = "0px";
            document.getElementById("pipeVideoPlayback-"+pipeElement).style.top = "0px";
            // document.getElementById("pipeVideoPlayback-"+pipeElement).height = pipeVars["size"]["width"]+"px";
            // document.getElementById("pipeVideoPlayback-"+pipeElement).width=(pipeVars["size"]["height"]-menuH)+"px";
            */
          } else if (videoRotation == 90) {
            jQuery('#pipeVideoPlayback-' + pipeElement).attr("class", "pipeFlipVertically");
            document.getElementById("pipeVideoPlayback-" + pipeElement).removeAttribute("style");
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.position = "absolute";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.left = "0px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.top = "0px";
          } else {
            jQuery('#pipeVideoPlayback-' + pipeElement).attr("class", "pipeNormal");
            document.getElementById("pipeVideoPlayback-" + pipeElement).removeAttribute("style");
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.position = "absolute";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.left = "0px";
            document.getElementById("pipeVideoPlayback-" + pipeElement).style.top = "0px";
          }
        }

        videoPlayback.load();
        if (jQuery("#pipeVideoPlayback-" + pipeElement).css('display') == 'none') {
          jQuery("#pipeVideoPlayback-" + pipeElement).show();
        }
        videoPlayback.play();

        pipeShowMessage(bufferingTxt);

        jQuery("#pipeSmallVideo-" + pipeElement).show();

        jQuery("#pipeSmallVideo-" + pipeElement).animate({
          left: pipeVars["size"]["width"] - pipeVars["size"]["width"] / 6 - 10 + 'px',
          top: pipeVars["size"]["height"] - pipeVars["size"]["height"] / 6 - 40 + 'px',
          height: pipeVars["size"]["height"] / 6 + 'px',
          width: pipeVars["size"]["width"] / 6 + 'px'
        }, 250);

        //unmirror video if needed
        if (pipeVars["mv"] == 1) {
          jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeNormal");
          jQuery('#pipeSmallVideo-' + pipeElement).attr("class", "pipeSmallMirrored");

          document.getElementById("pipeVideoInput-" + pipeElement).removeAttribute("style");
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";
        }

        state = "playing";

        document.getElementById('pipePlay-' + pipeElement).innerHTML = pauseIcon;
        jQuery('#pipePlay-' + pipeElement).attr("title", pauseBtnTxt);

        pipeSetStatus(DISABLED);

        if (pipeVars["asv"] == 0) {
          //jQuery('#pipeSaveVideo').attr('disabled',  true);
          jQuery('#pipeSaveVideo-' + pipeElement).off("click");
          jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
          jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtnOff");
        }

        //jQuery("#pipeVideoInput-"+pipeElement).prop('muted', false);

        pipeSetStatus(PLAYING);

        lastStreamTime = 0;
        //document.getElementById("pipeCounter").innerHTML = digits(lastStreamTime)+'/'+digits(actualStreamTime);
        //recordCounter = setInterval(pipeCounterForPlayer ,1000);
        //intervals.push(recordCounter);

        playStreamStartTime = Date.now();
        playStreamCounter = setInterval(pipePlayStreamCounter, 100);
        intervals.push(playStreamCounter);

        //pipeHideMessage();

        //and show the local video in the small video input

        try {
          smallVideoInput.srcObject = localStream;
        } catch (e) {
          smallVideoInput.src = URL.createObjectURL(localStream);
        }
      } else if (state == "paused") {

        videoPlayback.play();

        //unmirror video if needed
        if (pipeVars["mv"] == 1) {
          jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeNormal");

          document.getElementById("pipeVideoInput-" + pipeElement).removeAttribute("style");
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
          document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";
        }

        //jQuery("#pipeVideoInput-"+pipeElement).prop('muted', false);
        if (jQuery("#pipeVideoPlayback-" + pipeElement).css('display') == 'none') {
          jQuery("#pipeVideoPlayback-" + pipeElement).show();
        }
        state = "playing";

        pipeSetStatus(PLAYING);

        if (pipeVars["asv"] == 0) {
          //jQuery('#pipeSaveVideo').attr('disabled',  true);
          jQuery('#pipeSaveVideo-' + pipeElement).off("click");
          jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
          jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtnOff");
        }

        //recordCounter = setInterval(pipeCounterForPlayer ,1000);
        //intervals.push(recordCounter);

        playStreamStartTime = Date.now();
        playStreamCounter = setInterval(pipePlayStreamCounter, 100);
        intervals.push(playStreamCounter);

        document.getElementById('pipePlay-' + pipeElement).innerHTML = pauseIcon;
        jQuery('#pipePlay-' + pipeElement).attr("title", pauseBtnTxt);
      }

      //event API call
      PipeSDK.recorders[pipeElement].btPlayPressed(pipeElement);
    }

    function pipeStopPlayer() {

      if (state == "playing" || state == "paused") {

        //re-mirror the video if needed
        if (pipeVars["mv"] == 1) {
          jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeMirrored");
        } else {
          jQuery('#pipeVideoInput-' + pipeElement).attr("class", "pipeNormal");
        }
        //custom style for elements
        document.getElementById("pipeVideoInput-" + pipeElement).removeAttribute("style");
        document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopLeftRadius = cornerRadius + "px";
        document.getElementById("pipeVideoInput-" + pipeElement).style.borderTopRightRadius = cornerRadius + "px";
        document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomLeftRadius = cornerRadiusNoMenu + "px";
        document.getElementById("pipeVideoInput-" + pipeElement).style.borderBottomRightRadius = cornerRadiusNoMenu + "px";

        jQuery("#pipeVideoInput-" + pipeElement).prop('muted', true);
        if (jQuery("#pipeVideoPlayback-" + pipeElement).css('display') != 'none') {
          jQuery("#pipeVideoPlayback-" + pipeElement).hide();
        }
        state = "played";

        document.getElementById('pipePlay-' + pipeElement).innerHTML = playIcon;
        jQuery('#pipePlay-' + pipeElement).attr("title", playBtnTxt);

        //clearInterval(recordCounter);
        clearInterval(playStreamCounter);
        actualPlaybackTime = 0;

        //pipeHideMessage();

        pipeSetStatus(STOPPED);

        //event API call
        PipeSDK.recorders[pipeElement].onPlaybackComplete(pipeElement);

        //remove picture in picture and re-init recorder
        jQuery("#pipeSmallVideo-" + pipeElement).animate({
          left: '0px',
          top: '0px',
          height: pipeVars["size"]["height"] - menuH + 'px',
          width: pipeVars["size"]["width"] + 'px'
        }, 250);

        setTimeout(function () {
          jQuery("#pipeSmallVideo-" + pipeElement).hide();

          if (pipeRecorderRemoved == false) {

            //re-init recorder
            try {
              videoInput.srcObject = localStream;
            } catch (e) {
              videoInput.src = URL.createObjectURL(localStream);
            }
          }

          if (pipeVars["asv"] == 0 && btSaveCanBeUsed == true) {
            //jQuery('#pipeSaveVideo').attr('disabled',  false);
            jQuery('#pipeSaveVideo-' + pipeElement).off("click");
            jQuery('#pipeSaveVideo-' + pipeElement).click(pipeSaveVideo);
            jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
            jQuery('#pipeSaveVideo-' + pipeElement).keydown(function (event) {
              if (event.which == 13) {
                event.preventDefault();
                pipeSaveVideo();
              }
            });
            jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtn");
          }
        }, 250);
      }
    }

    function pipePausePlayback() {
      videoPlayback.pause();
    }

    navigator.mediaDevices.ondevicechange = function (event) {
      console.log("ondevicechange");

      if (localStream != null) {
        localStream.getTracks().forEach(function (track) {
          //console.log(track);
          if (track.kind == "audio") {
            track.onended = function (event) {
              //console.log("track.onended");
              //pipeShowMessage(track.label + " has been removed. Please refresh",100);
              document.getElementById("pipeMicIcon-" + pipeElement).innerHTML = microphoneDisabledIcon;
              jQuery("#pipeMicContainer-" + pipeElement).prop("title", "No audio input");
            };
          }
        });
      }
    };

    function pipeOnError(error) {

      //console.log(error);

      if (error) {
        console.error(error);
        if (error.name == "PermissionDeniedError" || error.name == "NotAllowedError") {
          //pipeSetStatus(DISABLED);
          pipeShowError(blockedTxt);

          //event API call
          PipeSDK.recorders[pipeElement].onCamAccess(pipeElement, false);
        } else if (error.name == "TrackStartError" || error.name == "NotReadableError") {

          pipeShowError(camUsedTxt);

          //event API call
          PipeSDK.recorders[pipeElement].onCamAccess(pipeElement, false);
        } else if (error.name = "NotFoundError") {
          //pipeSetStatus(DISABLED);

          if (EXTENSION_ID == "") {
            if (pipeVars["ao"] == 1) {
              pipeShowError(noMicTxt);
            } else {
              pipeShowError(noCameraTxt);
            }
          } else {
            pipeShowError(noMicTxt);
          }
        } else {
          pipeShowError("Unexpected error occurred");
        }

        if (get_browser().name != "Safari") {
          socket.emit('pipeOnError', { 'name': error.name, 'message': error.message });
        }
      }
    }

    if (get_browser().name != "Safari") {

      socket.on('videoSaved', function (msg) {
        pipeShowMessage(savedTxt);
        setTimeout(pipeHideMessage, 1000);

        //event API call
        if (pipeVars["ao"] == 1) {
          PipeSDK.recorders[pipeElement].onSaveOk(pipeElement, newFileName, streamElapsedTime, cam, mic, "Opus", "VP8", "webm", msg.videoId, true, storageS3Location);
        } else {
          PipeSDK.recorders[pipeElement].onSaveOk(pipeElement, newFileName, streamElapsedTime, cam, mic, "Opus", "VP8", "webm", msg.videoId, false, storageS3Location);
        }
      });
    }

    function pipeSaveVideo() {

      pipeShowMessage(savingTxt);

      btSaveCanBeUsed = false;

      if (sumMicLevel != 0) {
        avgMicLevel = Math.round(sumMicLevel / nrOfMicLevelCalls * 100) / 100;
      } else {
        avgMicLevel = 0;
      }

      if (get_browser().name != "Safari") {
        socket.emit('saveVideo', { 'streamDuration': streamElapsedTime, 'micLevel': avgMicLevel });
      } else {

        audioOnly = 0;
        if (pipeVars["ao"] == 1) {
          audioOnly = 1;
        }

        jQuery.ajax({
          url: "https://" + rtcServer + ":8443/save.php",
          type: "POST",
          data: { streamName: newFileName, streamDuration: streamElapsedTime, micLevel: avgMicLevel, accountHash: pipeVars["accountHash"], payload: pipeVars["payload"] ? pipeVars["payload"] : '', httpReferer: window.location.href, environmentId: pipeVars["eid"] ? pipeVars["eid"] : '1', cameraName: cam, microphoneName: mic, devices: deviceList, audioOnly: audioOnly, rotation: videoRotation },
          success: function success(data, status) {
            //console.log(data + " " + status);
            var res = JSON.parse(data);

            if (res.s == 1) {
              pipeShowMessage(savedTxt);
              setTimeout(pipeHideMessage, 1000);

              //event API call
              if (pipeVars["ao"] == 1) {
                PipeSDK.recorders[pipeElement].onSaveOk(pipeElement, newFileName, streamElapsedTime, cam, mic, "Opus", "H264", "mp4", res.videoId, true, storageS3Location);
              } else {
                PipeSDK.recorders[pipeElement].onSaveOk(pipeElement, newFileName, streamElapsedTime, cam, mic, "Opus", "H264", "mp4", res.videoId, false, storageS3Location);
              }
            }
          }
        });
      }

      if (pipeVars["asv"] == 0) {
        //jQuery('#pipeSaveVideo').attr('disabled',  true);
        jQuery('#pipeSaveVideo-' + pipeElement).off("click");
        jQuery('#pipeSaveVideo-' + pipeElement).off("keydown");
        jQuery('#pipeSaveVideo-' + pipeElement).attr("class", "pipeBtnOff");
      }
    }

    function pipeShowMessage(msg) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "center";


      if (document.getElementById('pipeMsgOverlay-' + pipeElement) != null) {

        if (pos == "center") {
          jQuery("#pipeMsgOverlay-" + pipeElement).removeClass("pipeTopMessage").addClass("pipeMsgOverlay");
          document.getElementById("pipeMsgOverlay-" + pipeElement).style.top = (pipeVars["size"]["height"] - 50) / 2 + "px";
        } else if (pos == "top") {
          jQuery("#pipeMsgOverlay-" + pipeElement).removeClass("pipeMsgOverlay").addClass("pipeTopMessage");
          document.getElementById("pipeMsgOverlay-" + pipeElement).style.top = "0px";
        }

        document.getElementById("pipeMsgOverlay-" + pipeElement).style.width = width + "%";
        document.getElementById("pipeMsgOverlay-" + pipeElement).style.left = (pipeVars["size"]["width"] - width / 100 * pipeVars["size"]["width"]) / 2 + "px";

        document.getElementById('pipeMsgOverlay-' + pipeElement).innerHTML = '<div>' + msg + '</div>';
        jQuery("#pipeMsgOverlay-" + pipeElement).show();
      }

      if (jQuery("#pipeAudioOnly-" + pipeElement).length) {
        jQuery("#pipeAudioOnly-" + pipeElement).hide();
      }
    }

    function pipeHideMessage() {

      jQuery("#pipeMsgOverlay-" + pipeElement).hide();
      if (jQuery("#pipeAudioOnly-" + pipeElement).length) {
        jQuery("#pipeAudioOnly-" + pipeElement).show();
      }
    }

    function pipeShowError(msg) {
      var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


      if (document.getElementById(pipeElement) != null) {
        if (add == 0) {
          document.getElementById(pipeElement).innerHTML = '<div id="pipeError-' + pipeElement + '" class="pipeError"><p>' + msg + '</p></div>';
          jQuery("#pipeError-" + pipeElement).show();
        } else {
          jQuery('#' + pipeElement).append('<div id="pipeError-' + pipeElement + '" class="pipeError"><p>' + msg + '</p></div>');
          jQuery("#pipeError-" + pipeElement).fadeIn(450);
        }

        document.getElementById("pipeError-" + pipeElement).style.width = pipeVars["size"]["width"] + "px";
        document.getElementById("pipeError-" + pipeElement).style.height = pipeVars["size"]["height"] + "px";
        document.getElementById("pipeError-" + pipeElement).style.borderRadius = cornerRadius;
      }

      if (localStream) {
        localStream.getTracks().forEach(function (track) {
          track.stop();
        });
        localStream = null;
      }
    }

    function pipeCounter() {

      if (lastStreamTime == pipeVars["mrt"]) {
        autoStopped = true;
        pipeStop();
      }

      //enable the stop button after 2 seconds
      if (lastStreamTime >= 2) {
        pipeSetStatus(RECORDING);
      }

      if (document.getElementById("pipeCounter-" + pipeElement) != null) {
        document.getElementById("pipeCounter-" + pipeElement).innerHTML = digits(pipeVars["mrt"] - lastStreamTime);
        lastStreamTime++;
      }
    }

    /*function pipeCounterForPlayer() {
    	lastStreamTime ++;
    	document.getElementById("pipeCounter").innerHTML = digits(lastStreamTime)+'/'+digits(actualStreamTime);
    }*/

    function pipeStreamCounter() {
      streamElapsedTime = ((Date.now() - streamStartTime) / 1000).toFixed(2) - 1 + actualStreamTime;
    }

    function pipePlayStreamCounter() {
      playStreamElapsedTime = actualPlaybackTime + (Date.now() - playStreamStartTime);
    }

    function visitPipe() {
      window.location.href = "https://addpipe.com?ref=expired";
    }

    function refPipe() {
      window.location.href = "https://addpipe.com?ref=embed";
    }

    // ====== JS Control API ======

    PipeSDK.recorders[pipeElement].record = function () {
      if (jQuery('#pipeError-' + pipeElement).length == 0 && jQuery("#pipeRec-" + pipeElement).hasClass("pipeBtn") && state != "recording") {
        pipeStart();
      }
    };

    PipeSDK.recorders[pipeElement].stopVideo = function () {
      if (jQuery('#pipeError-' + pipeElement).length == 0 && jQuery("#pipeRec-" + pipeElement).hasClass("pipeBtn") && state == "recording") {
        pipeStop();
      }
    };

    PipeSDK.recorders[pipeElement].playVideo = function () {
      if (jQuery('#pipeError-' + pipeElement).length == 0 && jQuery("#pipePlay-" + pipeElement).hasClass("pipeBtn") && state != "playing") {
        pipePlay();
      }
    };

    PipeSDK.recorders[pipeElement].pause = function () {
      if (jQuery('#pipeError-' + pipeElement).length == 0 && jQuery("#pipePlay-" + pipeElement).hasClass("pipeBtn") && state == "playing") {
        pipePausePlayback();
      }
    };

    PipeSDK.recorders[pipeElement].save = function () {
      if (jQuery("#pipeSaveVideo-" + pipeElement).hasClass("pipeBtn")) {
        pipeSaveVideo();
      }
    };

    PipeSDK.recorders[pipeElement].getStreamTime = function () {
      if (jQuery('#pipeError-' + pipeElement).length == 0) {
        return streamElapsedTime;
      }
    };

    PipeSDK.recorders[pipeElement].getPlaybackTime = function () {
      if (jQuery('#pipeError-' + pipeElement).length == 0) {
        return (playStreamElapsedTime / 1000).toFixed(2);;
      }
    };

    PipeSDK.recorders[pipeElement].getStreamName = function () {
      if (newFileName && jQuery('#pipeError-' + pipeElement).length == 0) {
        return newFileName;
      }
    };

    PipeSDK.recorders[pipeElement].remove = function () {
      if (localStream) {
        localStream.getTracks().forEach(function (track) {
          track.stop();
        });
        localStream = null;
      }

      if (socket) {
        socket.close();
      }

      //navigator.mediaDevices.getUserMedia = null;

      for (var i = 0; i < intervals.length; i++) {
        clearInterval(intervals[i]);
      }

      if (document.getElementById(pipeElement) != null) {
        document.getElementById(pipeElement).innerHTML = "";
        document.getElementById(pipeElement).style.height = "0px";
      }

      pipeRecorderRemoved = true;
    };

    /** Utils **/

    function generateName() {
      var validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var array = new Uint8Array(32);
      window.crypto.getRandomValues(array);
      array = array.map(function (x) {
        return validChars.charCodeAt(x % validChars.length);
      });
      var randomState = String.fromCharCode.apply(null, array);
      //console.log(randomState);
      return randomState;
    }

    function digits(nbr) {
      var min = Math.floor(nbr / 60);
      var sec = Math.floor(nbr % 60);
      var str = zero(min) + ':' + zero(sec);
      return str;
    }

    function zero(nbr) {
      if (nbr < 10) {
        return '0' + nbr;
      } else {
        return '' + nbr;
      }
    }

    // Meter class that generates a number correlated to audio volume.
    // The meter class itself displays nothing, but it makes the
    // instantaneous and time-decaying volumes available for inspection.
    // It also reports on the fraction of samples that were at or near
    // the top of the measurement range.
    function SoundMeter(context) {
      this.context = context;
      this.instant = 0.0;
      this.slow = 0.0;
      this.clip = 0.0;
      this.script = context.createScriptProcessor(2048, 1, 1);
      var that = this;
      this.script.onaudioprocess = function (event) {
        var input = event.inputBuffer.getChannelData(0);
        var i;
        var sum = 0.0;
        var clipcount = 0;
        for (i = 0; i < input.length; ++i) {
          sum += input[i] * input[i];
          if (Math.abs(input[i]) > 0.99) {
            clipcount += 1;
          }
        }
        that.instant = Math.sqrt(sum / input.length);
        that.slow = 0.95 * that.slow + 0.05 * that.instant;
        that.clip = clipcount / input.length;
      };
    }

    SoundMeter.prototype.connectToSource = function (stream, callback) {
      console.log('SoundMeter connecting');
      try {
        this.mic = this.context.createMediaStreamSource(stream);
        this.mic.connect(this.script);
        // necessary to make sample run, but should not be.
        this.script.connect(this.context.destination);
        if (typeof callback !== 'undefined') {
          callback(null);
        }
      } catch (e) {
        console.error(e);
        if (typeof callback !== 'undefined') {
          callback(e);
        }
      }
    };
    SoundMeter.prototype.stop = function () {
      this.mic.disconnect();
      this.script.disconnect();
    };
  }
};

},{}]},{},[5]);

// ================= API event handlers (Flash version)========================

function userHasCamMic(camNumber,micNumber, recorderId){
	PipeSDK.recorders[recorderId].userHasCamMic(recorderId, camNumber, micNumber);
}

function btRecordPressed(recorderId){
	PipeSDK.recorders[recorderId].btRecordPressed(recorderId); 
}

function btStopRecordingPressed(recorderId){
	PipeSDK.recorders[recorderId].btStopRecordingPressed(recorderId); 
}

function btPlayPressed(recorderId){
	PipeSDK.recorders[recorderId].btPlayPressed(recorderId);
}

function btPausePressed(recorderId){
	PipeSDK.recorders[recorderId].btPausePressed(recorderId);
}

function onUploadDone(streamName, streamDuration, userId, recorderId, audioCodec, videoCodec, fileType, audioOnly){
   PipeSDK.recorders[recorderId].onUploadDone(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, storageS3Location);
}

function onCamAccess(allowed, recorderId){
	PipeSDK.recorders[recorderId].onCamAccess(recorderId, allowed);
}
function onPlaybackComplete(recorderId){
	PipeSDK.recorders[recorderId].onPlaybackComplete(recorderId);
}

function onRecordingStarted(recorderId){
	PipeSDK.recorders[recorderId].onRecordingStarted(recorderId);
}

function onConnectionClosed(recorderId){
	PipeSDK.recorders[recorderId].onConnectionClosed(recorderId);
}

function onFPSChange(recorderId,currentFPS){
	PipeSDK.recorders[recorderId].onFPSChange(recorderId, currentFPS);
}

function onConnectionStatus(status, recorderId){
	PipeSDK.recorders[recorderId].onConnectionStatus(recorderId, status);
}

function onMicActivityLevel(recorderId, currentActivityLevel){
	PipeSDK.recorders[recorderId].onMicActivityLevel(recorderId, currentActivityLevel);
}

function onSaveOk(streamName, streamDuration, userId, cameraName, micName, recorderId, audioCodec, videoCodec, fileType, videoId, audioOnly){
	PipeSDK.recorders[recorderId].onSaveOk(recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, fileType, videoId, audioOnly, storageS3Location);
}

function onRecorderReady(recorderId, recorderType){
	PipeSDK.recorders[recorderId].onReadyToRecord(recorderId, recorderType);
}

function onFlashReady(recorderId){
	PipeSDK.recorders[recorderId].onFlashReady(recorderId);
}