// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
var JSON;JSON||(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(){var e="StripeCheckout.require".split("."),t=e[e.length-1],n=this,r;for(r=0;r<e.length-1;r++)n=n[e[r]]=n[e[r]]||{};n[t]===undefined&&(n[t]=function(){var e={},t={},n=function(n,o){var u=r(o,n),a=r(u,"./index"),f,l;f=t[u]||t[a];if(f)return f;if(l=e[u]||e[u=a])return f={id:u,exports:{}},t[u]=f.exports,l(f.exports,function(e){return s(e,i(u))},f),t[u]=f.exports;throw"module "+n+" not found"},r=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i==".."?n.pop():i!="."&&i!=""&&n.push(i);return n.join("/")},i=function(e){return e.split("/").slice(0,-1).join("/")},s=function(e){return n(e,"")};return s.define=function(t){for(var n in t)e[n]=t[n]},s.modules=e,s.cache=t,s}.call())}(),StripeCheckout.require.define({"vendor/cookie":function(e,t,n){function s(e,t){e=e||{};for(var n in t)typeof source[n]=="object"?e[n]=s(e[n],source[n]):e[n]=source[n];return e}function o(e){return e}function u(e){return decodeURIComponent(e.replace(i," "))}function a(e){e.indexOf('"')===0&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return f.json?JSON.parse(e):e}catch(t){}}var r={},i=/\+/g,f=r.set=r.get=function(e,t,n){if(t!==undefined){n=s(n,f.defaults);if(typeof n.expires=="number"){var r=n.expires,i=n.expires=new Date;i.setDate(i.getDate()+r)}return t=f.json?JSON.stringify(t):String(t),document.cookie=[f.raw?e:encodeURIComponent(e),"=",f.raw?t:encodeURIComponent(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}var l=f.raw?o:u,c=document.cookie.split("; "),h=e?undefined:{};for(var p=0,d=c.length;p<d;p++){var v=c[p].split("="),m=l(v.shift()),g=l(v.join("="));if(e&&e===m){h=a(g);break}e||(h[m]=a(g))}return h};f.defaults={},r.remove=function(e,t){return r.get(e)!==undefined?(r.set(e,"",s(t,{expires:-1})),!0):!1},n.exports=r}}),StripeCheckout.require.define({"vendor/pixel":function(e,t,n){(function(){var e,t,r,i,s,o,u;e=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t,n;return t=Math.random()*16|0,n=e==="x"?t:t&3|8,n.toString(16)})},o=function(e,t,n){var r,i,s;return n==null&&(n={}),n.expires===!0&&(n.expires=-1),typeof n.expires=="number"&&(i=new Date,i.setTime(i.getTime()+n.expires*24*60*60*1e3),n.expires=i),(s=n.path)==null&&(n.path="/"),t=(t+"").replace(/[^!#-+\--:<-\[\]-~]/g,encodeURIComponent),r=encodeURIComponent(e)+"="+t,n.expires&&(r+=";expires="+n.expires.toGMTString()),n.path&&(r+=";path="+n.path),n.domain&&(r+=";domain="+n.domain),document.cookie=r},t=function(e){var t,n,r,i,s,o,u;n=document.cookie.split("; ");for(o=0,u=n.length;o<u;o++){t=n[o],r=t.indexOf("="),i=decodeURIComponent(t.substr(0,r)),s=decodeURIComponent(t.substr(r+1));if(i===e)return s}return null},s=function(e,t,n){var r,i,s;return t==null&&(t={}),t.i=(new Date).getTime(),t=function(){var e;e=[];for(i in t)s=t[i],e.push(""+i+"="+encodeURIComponent(s));return e}().join("&"),r=new Image,n&&(r.onload=n),r.src=""+e+"?"+t,!0},i=function(){var t,n;if(window.navigator.doNotTrack)return"DNT";try{return n=localStorage.getItem("lsid"),n||(n=e(),localStorage.setItem("lsid",n)),n}catch(r){return t=r,"NA"}},r=function(){var n;return window.navigator.doNotTrack?"DNT":(n=t("cid")||e(),o("cid",n,{expires:7200,domain:".stripe.com"}),n)},u=function(e,t,n){var o,u,a,f,l;t==null&&(t={}),u=document.referrer,f=window.location.search,a={event:e,lsid:i(),cid:r(),rf:u,sc:f};for(o in t)l=t[o],a[o]=l;return s("https://q.stripe.com",a,n)},n.exports.track=u,n.exports.getLocalStorageID=i,n.exports.getCookieID=r}).call(this)}}),StripeCheckout.require.define({"vendor/ab":function(e,t,n){(function(){var e,r,i,s,o,u,a,f=this,l=function(e,t){return function(){return e.apply(t,arguments)}};a=t("vendor/pixel"),u=1023,o=function(e){var t,n,r,i;t=0;for(n=r=0,i=e.length;r<i;n=r+=1)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t},r=function(e,t){var n;return t==="DNT"||t==="NA"?u:(n=o(e+":"+t),n&u)},i=function(e,t,n){var i,s,o,u,a;i=r(e,n),s=0;for(u=0,a=t.length;u<a;u++){o=t[u],s+=o.buckets;if(s>i)return o.variant}return"control"},s=function(e,t){var n,r,i;if(!e)return!1;if(t==="control")return!0;for(r=0,i=e.length;r<i;r++){n=e[r];if(n.variant===t)return!0}return!1},e=function(){function e(e,t,n){this.getVariants=l(this.getVariants,this),this.experiments=e,this.getID=t,this.getOverride=n}return e.prototype.getVariants=function(e){var t,n,r,o,u,a;e==null&&(e={}),u={},r=this.getID(),a=this.experiments;for(t in a)n=a[t],o=e[t],this.getOverride&&!o&&(o=this.getOverride(t)||this.getOverride("all")),o?u[t]=s(this.experiments[t],o)?o:"control":u[t]=i(t,n,r);return u},e}(),n.exports=e}).call(this)}}),StripeCheckout.require.define({"vendor/merchant_ab":function(e,t,n){(function(){var e,r,i,s,o,u,a,f;e=t("vendor/ab"),o={pk_test_DwRUK69WgWr9payIYC3K1cKZ:{merchant_i3:"control"},pk_Fhlzwtm9SCx6Uxww5fNXX8CUbwwAc:{merchant_i3:"test"},pk_live_atMEGqPDeLwMkj1NC8K1tZ32:{merchant_i3:"control"},pk_test_yoj2w7adyCRkmi35iS2f3TMK:{merchant_i3:"control"},pk_test_9MN9fNv6iWNRmIY3HWXLTmcp:{merchant_i3:"control"},pk_live_12Ozt45YE2nJeL3B49hjbwOC:{merchant_i3:"control"},pk_live_GA3WKwmhHYggiRr3sNqRYo7e:{merchant_i3:"test"},pk_live_Z77z5cJvv0rUOE1ayBDe1xHq:{merchant_i3:"expose"},pk_test_DwRUK69WgWr9payIYC3K1cKZ:{merchant_i3:"expose"},pk_live_BSvb1veHjISCV83LPzoTCb8X:{merchant_i3:"test"},pk_live_16zqFXnn5mw6C1qDkzcKC577:{merchant_i3:"test"},pk_4KYAQM3RhEFdrXazDQPVQJ4WUzmVZ:{merchant_i3:"control"},pk_live_Nh48fuBy5QmMymwcDkTwDQD9:{merchant_i3:"control"},pk_live_kmUiaw6OYgn1sAL4JYauclo4:{merchant_i3:"control"},pk_live_DkhmpAqBZ8B7RplUSbiaHrg0:{merchant_i3:"control"},pk_test_1wbGzB0N29lT1zy5umgCUXex:{merchant_i3:"control"},pk_live_WzX8uuirarO2Bo7jixCzOgBZ:{merchant_i3:"control"},pk_test_IdIWTSuvEHH2vAxT6qT5HswW:{merchant_i3:"control"},pk_Np1Nz5bG0uEp7iYeiDIElOXBBTmtD:{merchant_i3:"control"},pk_ZPBtv9wYtkUh6YwhwKRqL0ygAb0Q9:{merchant_i3:"control"},pk_test_ZSF0Ne5D9dvr0Q1a6I5SxZIe:{merchant_i3:"control"},pk_live_D3neDcsanj3w1TfNmdWKH3Rq:{merchant_i3:"control"},pk_test_dTSWEIqWDeAnRps0hBS9GBS2:{merchant_i3:"control"},pk_live_2uFS4mfiOkLzAwBEp2Q9CF31:{merchant_i3:"control"},jsunitoverridden:{jsunit:"bar"}},r={merchant_i3:[{variant:"expose",buckets:0},{variant:"test",buckets:1024}],merchant_i3_address:[{variant:"allow",buckets:1024}],jsunit:[{variant:"foo",buckets:100},{variant:"bar",buckets:512}]},s={id:null},u=function(e){return s.id=e},i=function(){return s.id},f=function(e){var t,n;return(t=s.id)?(n=o[t])!=null?n[e]:void 0:null},a=new e(r,i,f),n.exports.setMerchantID=u,n.exports.getVariants=a.getVariants}).call(this)}}),StripeCheckout.require.define({"lib/helpers":function(e,t,n){(function(){var e;e={escape:function(e){return e&&(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")},safe:function(e){return e=new String(e),e.ecoSafe=!0,e},sanitizeURL:function(e){if(!e)return;return e=e.replace(/javascript/g,""),encodeURI(e)},isiOSChrome:function(){var e;return e=window.navigator.userAgent,/CriOS/.test(e)},isiOSWebView:function(){var e;return e=window.navigator.userAgent,/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e)},isMobileSafari:function(){var e;return e=window.navigator.userAgent,/(iPhone|iPad|iPod)/i.test(e)},iOS:function(){var e;return e=window.navigator.userAgent,/(iPhone|iPad|iPod)/i.test(e)},isWindowsPhone:function(){var e;return e=window.navigator.userAgent,/(Windows\sPhone|IEMobile)/i.test(e)},iOSVersion:function(){var e,t;return t=window.navigator.userAgent,e=t.match(/iPhone OS (\d+)_(\d+)/),e?parseInt(e[1])+parseInt(e[2])/10:null},isInsideFrame:function(){return window.top!==window.self},isFallback:function(){return!("postMessage"in window)||window.postMessageDisabled||document.documentMode&&document.documentMode<8},pad:function(e,t,n){var r;return t==null&&(t=2),n==null&&(n="0"),e+="",e.length>t?e:(r=(new Array(t-e.length+1)).join(n),r+e)},currencySymbols:{usd:"$",gbp:"&pound;",eur:"&euro;",cad:"$",aud:"$"},formatCents:function(t,n){var r,i;return n==null&&(n="usd"),n=n.toLowerCase(),r=parseInt(t,10)/100,i=e.currencySymbols[n],i||(i="$"),n==="eur"?r.toFixed(2)+" "+i:i+r.toFixed(2)},formatLabel:function(t,n,r){var i;r==null&&(r="usd");if(!n)return t;r=r.toLowerCase(),t.indexOf("{{amount}}")===-1&&(t+=" {{amount}}"),i=e.formatCents(n,r);if(r==="cad"||r==="aud")i+=' <span class="currency">('+r.toUpperCase()+")</span>";return t.replace("{{amount}}",i)},formatLabelSafe:function(t,n,r){return e.safe(e.formatLabel(e.escape(t),n,r))},requestAnimationFrame:function(e){return(typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(e):void 0)||(typeof window.webkitRequestAnimationFrame=="function"?window.webkitRequestAnimationFrame(e):void 0)||window.setTimeout(e,100)},requestAnimationInterval:function(t,n){var r,i;return i=new Date,r=function(){var s,o,u;return s=e.requestAnimationFrame(r),o=new Date,u=n-(o-i),u<=0&&(i=o,t()),s},r()},getQueryParameterByName:function(e){var t;return t=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search),t&&decodeURIComponent(t[1].replace(/\+/g," "))},addQueryParameter:function(e,t,n){var r,i;return i=encodeURIComponent(t)+"="+encodeURIComponent(n),r=(new String(e)).split("#"),r[0]+=r[0].indexOf("?")!==-1?"&":"?",r[0]+=i,r.join("#")}},n.exports=e}).call(this)}}),StripeCheckout.require.define({"outer/lib/fallbackRpc":function(e,t,n){(function(){var e,t,r,i,s,o=function(e,t){return function(){return e.apply(t,arguments)}};t=1,r=null,i=null,s=/^#?\d+&/,e=function(){function e(e,t){this.receiveMessage=o(this.receiveMessage,this),this.invokeTarget=o(this.invokeTarget,this),this.target=e,this.host=t}return e.prototype.invokeTarget=function(e){var n;return e=+(new Date)+t++ +"&"+encodeURIComponent(e),n=this.host+"",this.target.location=n.replace(/#.*$/,"")+"#"+e},e.prototype.receiveMessage=function(e,t){return t==null&&(t=100),r&&clearInterval(r),r=setInterval(function(){var t;t=decodeURIComponent(window.location.hash);if(t!==i&&s.test(t))return window.location.hash="",i=t,e({data:t.replace(s,"")})},t)},e}(),n.exports=e}).call(this)}}),StripeCheckout.require.define({"outer/lib/rpc":function(e,t,n){(function(){var e,r,i,s,o,u=function(e,t){return function(){return e.apply(t,arguments)}},a=[].slice;o=t("outer/lib/utils"),i=o.bind,s=o.host,r=function(){function e(e,t,n){this.frameCallback=u(this.frameCallback,this),this.invoke=u(this.invoke,this),this.target=e,this.host=t,this.sessionID=n}return e.prototype.rpcID=0,e.prototype.invoke=function(){var e,t,n,r,i;return t=arguments[0],i=arguments[1],e=3<=arguments.length?a.call(arguments,2):[],n=++this.rpcID,typeof e[e.length-1]=="function"&&(this.callbacks||(this.callbacks={}),this.callbacks[n]=e.pop()),r=JSON.stringify({method:i,args:e,id:n,sessionID:this.sessionID}),t.postMessage(r,this.host)},e.prototype.invokeTarget=function(){var e;return e=1<=arguments.length?a.call(arguments,0):[],this.invoke.apply(this,[this.target].concat(a.call(e)))},e.prototype.frameCallback=function(e,t){var n;if(!this.callbacks)return;return typeof (n=this.callbacks)[e]=="function"&&n[e](t),delete this.callbacks[e],!0},e}(),e=function(){function e(e,t){var n=this;this.target=e,this.host=t,this.currentSession=null,i(window,"message",function(){var e;return e=1<=arguments.length?a.call(arguments,0):[],n.message.apply(n,e)})}return e.prototype.sessionID=0,e.prototype.allowMethod=function(){},e.prototype.message=function(e){var t,n,i;if(s(e.origin)!==s(this.host))return;if(!e.source||e.source!==this.target)return;t=JSON.parse(e.data),t.method==="frameReady"&&(this.currentSession=new r(this.target,this.host,t.sessionID)),n=typeof this[i=t.method]=="function"?this[i].apply(this,a.call(t.args).concat([e])):void 0;if(t.method!=="frameCallback"&&this.currentSession)return this.currentSession.invoke(e.source,"frameCallback",t.id,n)},e.prototype.ready=function(e){var t,n,r,i,s;this.readyQueue||(this.readyQueue=[]),this.readyStatus||(this.readyStatus=!1);if(typeof e=="function")return this.readyStatus?e(this.currentSession):this.readyQueue.push(e);this.readyStatus=!0,t=this.readyQueue.slice(0),s=[];for(r=0,i=t.length;r<i;r++)n=t[r],s.push(n(this.currentSession));return s},e.prototype.frameCallback=function(e,t){return this.currentSession.frameCallback(e,t)},e.prototype.frameReady=function(){return this.ready(),!1},e.prototype.isAlive=function(){return!0},e}(),n.exports=e}).call(this)}}),StripeCheckout.require.define({"outer/lib/utils":function(e,t,n){(function(){var e,t,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},S=[].slice;e=function(e){return document.querySelectorAll(e)},t=function(e){var t,n,r,i,s,o;if(typeof document.getElementsByClassName=="function")return document.getElementsByClassName(e);if(typeof document.querySelectorAll=="function")return document.querySelectorAll("."+e);n=new RegExp("(^|\\s)"+e+"(\\s|$)"),s=document.getElementsByTagName("*"),o=[];for(r=0,i=s.length;r<i;r++)t=s[r],n.test(t.className)&&o.push(t);return o},s=function(e,t,n){return n!=null?e.setAttribute(t,n):e.getAttribute(t)},l=function(e,t){var n;return typeof e.hasAttribute=="function"?e.hasAttribute(t):(n=e.getAttributeNode(t),!(!n||!n.specified&&!n.nodeValue))},o=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},w=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},b=function(e,t,n,r){n==null&&(n={}),r==null&&(r=!0);if(window.jQuery)return jQuery(e).trigger(t,n)},r=function(e,t){return e.className+=" "+t},c=function(e,t){return E.call(e.className.split(" "),t)>=0},u=function(e,t){return e.style.cssText+=";"+t},d=function(e,t){return e.parentNode.insertBefore(t,e)},p=function(e,t){return e.parentNode.insertBefore(t,e.nextSibling)},i=function(e,t){return e.appendChild(t)},m=function(e){var t;return(t=e.parentNode)!=null?t.removeChild(e):void 0},v=function(e){var t;t=[];while((e=e.parentNode)&&e!==document&&E.call(t,e)<0)t.push(e);return t},h=function(e){var t,n;return t=document.createElement("div"),t.innerHTML='<a href="'+a(e)+'">x</a>',n=t.firstChild,""+n.protocol+"//"+n.host},g=function(e){var t;return t=document.createElement("a"),t.href=e,""+t.href},a=function(e){return e&&(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},y=function(e,t){return"innerText"in e?e.innerText=t:e.textContent=t,t},f=function(){var e,t,n,r,i;n=arguments[0],t=2<=arguments.length?S.call(arguments,1):[],r={};for(e in n)i=n[e],E.call(t,e)<0&&(r[e]=i);return r},n.exports={$:e,$$:t,attr:s,hasAttr:l,bind:o,unbind:w,trigger:b,addClass:r,hasClass:c,css:u,insertBefore:d,insertAfter:p,append:i,remove:m,parents:v,host:h,resolve:g,escape:a,text:y,except:f}}).call(this)}}),StripeCheckout.require.define({"outer/controllers/app":function(e,t,n){(function(){var e,r,i,s,o,u,a,f,l,c,h,p,d=function(e,t){return function(){return e.apply(t,arguments)}};h=t("outer/lib/utils"),o=h.append,c=h.resolve,p=t("lib/helpers"),u=p.getQueryParameterByName,a=p.isFallback,r=t("outer/controllers/checkout"),i=t("outer/lib/rpc"),l=t("vendor/pixel"),f=t("vendor/merchant_ab"),s=/^https?:\/\/(localhost|127\.0\.0\.\d{1,3}|[-a-z]+\.stripe\.[a-z]+)(:\d+)?(\/|$)/i,e=function(){function e(){this.shouldUseV3=d(this.shouldUseV3,this),this.getMerchantVariants=d(this.getMerchantVariants,this),this.forceV3=d(this.forceV3,this),this.trackLoad=d(this.trackLoad,this),this.setHost=d(this.setHost,this),this.setHost=d(this.setHost,this),this.createCheckout=d(this.createCheckout,this),this.configure=d(this.configure,this),this.open=d(this.open,this),this.configurations={},this.checkouts={},this.host="https://checkout.stripe.com",this.isForcingV3=!1,this.checkoutCreated=!1,this.totalButtons=0}return e.prototype.open=function(e,t){var n,r,i,s,o;t==null&&(t=null),i={};if(t&&this.configurations[t]){o=this.configurations[t];for(r in o)s=o[r],i[r]=s}for(r in e)s=e[r],i[r]=s;return t&&(n=this.checkouts[t]),n||(n=this.createCheckout(t,i)),delete i.token,this.trackLoad(n,i),n.open(i)},e.prototype.configure=function(e,t,n){var r,i=this;return t==null&&(t={}),n==null&&(n={}),e instanceof Object&&(n=t,t=e,e="button"+this.totalButtons++),this.configurations[e]=t,r=[e,t,n.form],this.createCheckout.apply(this,r),{open:function(t){return i.open(t,e)}}},e.prototype.createCheckout=function(e,t,n){var i,s;return this.shouldUseV3(t)?s="v3":s="v2",i=new r(e,t.token,t.host||this.host,n,s),t.image&&s==="v3"&&i.preload(c(t.image)),e&&(this.checkouts[e]=i),this.checkoutCreated=!0,i},e.prototype.setHost=function(e){if(e!=null?e.match(s):void 0)return this.host=e},e.prototype.setHost=function(e){if(e)return this.host=e},e.prototype.trackLoad=function(e,t){var n;return l.track("outerLoad",{key:t.key,merchantVariantID:this.merchantVariantID,forceV3:this.isForcingV3||t.forceV3,merchant_i3:(n=this.merchantVariants)!=null?n.merchant_i3:void 0,version:e.version})},e.prototype.forceV3=function(){return this.isForcingV3=!0},e.prototype.getMerchantVariants=function(e,t){return this.merchantVariantID||(this.merchantVariantID=e||location.hostname,f.setMerchantID(this.merchantVariantID)),f.getVariants(t)},e.prototype.shouldUseV3=function(e){return this.merchantVariants||(this.merchantVariants=this.getMerchantVariants(e.key,e.variantOverrides)),this.merchantVariants.merchant_i3==="control"?!1:!0},e}(),n.exports=e}).call(this)}}),StripeCheckout.require.define({"outer/controllers/button":function(e,t,n){(function(){var e,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b=function(e,t){return function(){return e.apply(t,arguments)}};y=t("outer/lib/utils"),e=y.$$,f=y.hasClass,i=y.addClass,u=y.bind,g=y.unbind,m=y.trigger,s=y.append,v=y.text,p=y.parents,l=y.host,d=y.remove,c=y.insertAfter,o=y.attr,a=y.hasAttr,h=t("lib/helpers").isFallback,r=function(){function t(e,t){this.fetchOptions=b(this.fetchOptions,this),this.parentHead=b(this.parentHead,this),this.parentForm=b(this.parentForm,this),this.onToken=b(this.onToken,this),this.open=b(this.open,this),this.submit=b(this.submit,this),this.append=b(this.append,this),this.render=b(this.render,this);var n,r;this.scriptEl=e,this.app=t,this.document=this.scriptEl.ownerDocument,this.nostyle=h(),this.fetchOptions(),(n=this.options).label||(n.label="Pay with Card"),(r=this.options).tokenName||(r.tokenName="stripeToken"),this.options.token=this.onToken,this.options.closed=this.closed,this.$el=document.createElement("button"),this.$el.setAttribute("type","submit"),this.$el.className="stripe-button-el",u(this.$el,"click",this.submit),u(this.$el,"touchstart",function(){}),this.render()}return t.totalButtonId=0,t.load=function(n){var r,s,o;o=e("stripe-button"),o=function(){var e,t,n;n=[];for(e=0,t=o.length;e<t;e++)s=o[e],f(s,"active")||n.push(s);return n}(),o=o[o.length-1];if(!o)return;return i(o,"active"),r=new t(o,n),r.append()},t.prototype.render=function(){return this.$el.innerHTML="",this.$span=document.createElement("span"),v(this.$span,this.options.label),this.nostyle||(this.$el.style.visibility="hidden",this.$span.style.display="block",this.$span.style.minHeight="30px"),this.$style=document.createElement("link"),this.$style.setAttribute("type","text/css"),this.$style.setAttribute("rel","stylesheet"),this.$style.setAttribute("href",this.app.host+"/v3/checkout/button.css"),s(this.$el,this.$span)},t.prototype.append=function(){var e,t=this;this.scriptEl&&c(this.scriptEl,this.$el),this.nostyle||(e=this.parentHead(),e&&s(e,this.$style));if(this.$form=this.parentForm())g(this.$form,"submit",this.submit),u(this.$form,"submit",this.submit);return this.nostyle||setTimeout(function(){return t.$el.style.visibility="visible"},1e3),this.app.setHost(l(this.scriptEl.src)),this.appHandler=this.app.configure(this.options,{form:this.$form})},t.prototype.disable=function(){return o(this.$el,"disabled",!0)},t.prototype.enable=function(){return this.$el.removeAttribute("disabled")},t.prototype.isDisabled=function(){return a(this.$el,"disabled")},t.prototype.submit=function(e){return typeof e.preventDefault=="function"&&e.preventDefault(),this.isDisabled()||this.open(),!1},t.prototype.open=function(){return this.appHandler.open(this.options)},t.prototype.onToken=function(e,t){var n,r,i,o;if(this.tokenCallback){this.tokenCallback(e,t);return}m(this.scriptEl,"token",e);if(this.$form){r=this.renderInput(this.options.tokenName,e.id),s(this.$form,r),e.email&&s(this.$form,this.renderInput("stripeEmail",e.email));if(t)for(i in t)o=t[i],n=this.renderInput(this.formatKey(i),o),s(this.$form,n);this.$form.submit()}return this.disable()},t.prototype.formatKey=function(e){var t,n,r,i;n=e.split("_"),e="";for(r=0,i=n.length;r<i;r++)t=n[r],t.length>0&&(e=e+t.substr(0,1).toUpperCase()+t.substr(1).toLowerCase());return"stripe"+e},t.prototype.renderInput=function(e,t){var n;return n=document.createElement("input"),n.type="hidden",n.name=e,n.value=t,n},t.prototype.parentForm=function(){var e,t,n,r,i;t=p(this.$el);for(n=0,r=t.length;n<r;n++){e=t[n];if(((i=e.tagName)!=null?i.toLowerCase():void 0)==="form")return e}return null},t.prototype.parentHead=function(){var e,t;return((e=this.document)!=null?e.head:void 0)||((t=this.document)!=null?t.getElementsByTagName("head")[0]:void 0)||this.document.body},t.prototype.fetchOptions=function(){return this.options={key:o(this.scriptEl,"data-key"),amount:o(this.scriptEl,"data-amount"),name:o(this.scriptEl,"data-name"),description:o(this.scriptEl,"data-description"),image:o(this.scriptEl,"data-image"),label:o(this.scriptEl,"data-label"),panelLabel:o(this.scriptEl,"data-panelLabel")||o(this.scriptEl,"data-panel-label"),currency:o(this.scriptEl,"data-currency"),email:o(this.scriptEl,"data-email"),address:a(this.scriptEl,"data-address"),billingAddress:a(this.scriptEl,"data-billingAddress")||a(this.scriptEl,"data-billing-address"),shippingAddress:a(this.scriptEl,"data-shippingAddress")||a(this.scriptEl,"data-shipping-address"),notrack:a(this.scriptEl,"data-notrack"),nostyle:a(this.scriptEl,"data-nostyle")}},t}(),n.exports=r}).call(this)}}),StripeCheckout.require.define({"outer/controllers/checkout":function(e,t,n){(function(){var e,r,i,s,o,u,a,f,l,c=function(e,t){return function(){return e.apply(t,arguments)}};l=t("outer/lib/utils"),f=l.resolve,u=l.host,a=t("lib/helpers").isFallback,i=t("outer/controllers/views/iframeView"),s=t("outer/controllers/views/tabView"),r=t("outer/controllers/views/fallbackView"),o=t("vendor/cookie"),e=function(){function e(e,t,n,o,u){this.restoreForm=c(this.restoreForm,this),this.saveForm=c(this.saveForm,this),this.preload=c(this.preload,this),this.open=c(this.open,this);var f,l,h,p,d,v,m,g,y;this.buttonId=e,this.onToken=t,this.host=n,this.form=o,this.saveFields=null,this.restoreFields=null,this.onToken=function(e){return e.token!=null?t(e.token,e.args):t(e)},this.version=u||"v2",a()?(this.version==="v2"?f="/"+this.version+"/fallback.html":f="/"+this.version+"/fallback",this.view=new r(this.onToken,this.host,f,"fallback")):(this.version==="v2"?f="/":f="/"+this.version,y=window.navigator.userAgent,v=/(ipad|nexus\s7|nexus\s10|kindle|nook|playbook|xoom|android\s3\.0|silk|windows\snt.+touch)/i.test(y),p=/(android|iphone|crios|mobile|phone|blackberry|mini|windows\sce|palm|ipod)/i.test(y),m=/(Windows\sPhone|IEMobile|windows\snt.+touch)/i.test(y),h=/CriOS/.test(y),g=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(y),d=m||h||g,v&&!d?(l=this.version==="v2"?"mobile":"tablet",this.view=new s(this.onToken,this.host,f,l)):d?(l=this.version==="v2"?"mobile":"tablet",this.view=new i(this.onToken,this.host,f,l)):p?(this.version==="v3"&&(f+="/mobile"),l="mobile",this.view=new s(this.onToken,this.host,f,l)):(l=this.version==="v2"?"overlay":"desktop",this.view=new i(this.onToken,this.host,f,l)))}return e.prototype.defaults={address:!1,billingAddress:!1,shippingAddress:!1,amount:null,name:null,description:null,image:null,label:null,panelLabel:null,currency:"usd",email:null,notrack:!1,moreInfoLink:!0},e.prototype.open=function(e){var t,n,r,i,s;this.buttonId&&(this.form||this.saveFields&&this.restoreFields)&&(this.view.saveForm=this.saveForm,this.view.buttonId=this.buttonId),this.options||(this.options={}),i=this.defaults;for(t in i)n=i[t],(s=(r=this.options)[t])==null&&(r[t]=n);for(t in e)n=e[t],this.options[t]=n;return this.options.usingV3=this.version==="v3",this.options.image&&(this.options.image=f(this.options.image)),this.options.referrer=document.referrer,this.options.url=document.URL,this.view.open(this.options)},e.prototype.preload=function(e){return this.view.preload(e)},e.prototype.saveForm=function(){var e,t,n,r,i,s;if(this.form){e=this.form.querySelectorAll("input"),r={};for(i=0,s=e.length;i<s;i++)n=e[i],r[n.getAttribute("name")]=n.value;o.set("stripe-saved-form",JSON.stringify(r))}if(this.buttonId&&this.saveFields)return t=this.saveFields(),o.set("stripe-saved-fields",JSON.stringify(t))},e.prototype.restoreForm=function(){var e,t,n,r,i,s,u;if(this.form){i=o.get("stripe-saved-form");if(i){i=JSON.parse(i),e=this.form.querySelectorAll("input");for(s=0,u=e.length;s<u;s++)n=e[s],r=n.getAttribute("name"),i[r]&&(n.value=i[r])}}if(this.buttonId&&this.restoreFields){t=o.get("stripe-saved-fields");if(t)try{return t=JSON.parse(t),this.restoreFields(t)}catch(a){}}},e}(),n.exports=e}).call(this)}}),StripeCheckout.require.define({"outer/controllers/views/fallbackView":function(e,t,n){(function(){var e,r,i,s,o=function(e,t){return function(){return e.apply(t,arguments)}},u={}.hasOwnProperty,a=function(e,t){function r(){this.constructor=e}for(var n in t)u.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};s=t("outer/lib/utils").bind,e=t("outer/lib/fallbackRpc"),i=t("outer/controllers/views/view"),r=function(t){function n(){this.close=o(this.close,this),this.open=o(this.open,this),n.__super__.constructor.apply(this,arguments)}return a(n,t),n.prototype.open=function(){var t,r,i=this;return n.__super__.open.apply(this,arguments),r=this.host+this.path,this.frame=window.open(r,"stripe_checkout_app","width=400,height=400,location=yes,resizable=yes,scrollbars=yes"),this.rpc=new e(this.frame,r),this.rpc.receiveMessage(function(e){var t;return i.close(),t=JSON.parse(e.data),i.onToken(t)}),t=JSON.stringify(this.options),this.rpc.invokeTarget(t)},n.prototype.close=function(){return this.frame.close()},n}(i),n.exports=r}).call(this)}}),StripeCheckout.require.define({"outer/controllers/views/iframeView":function(e,t,n){(function(){var e,r,i,s,o,u,a,f,l=function(e,t){return function(){return e.apply(t,arguments)}},c={}.hasOwnProperty,h=function(e,t){function r(){this.constructor=e}for(var n in t)c.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};f=t("outer/lib/utils"),o=f.bind,u=f.css,s=f.append,a=f.remove,r=t("outer/lib/rpc"),i=t("outer/controllers/views/view"),e=function(e){function t(){this.configure=l(this.configure,this),this.setOverlayVisible=l(this.setOverlayVisible,this),this.createOverlay=l(this.createOverlay,this),this.createIframe=l(this.createIframe,this),this.closed=l(this.closed,this),this.preload=l(this.preload,this),this.open=l(this.open,this),t.__super__.constructor.apply(this,arguments),this.preloadedImage=null,this.configure()}return h(t,e),t.prototype.open=function(){var e,n=this;return t.__super__.open.apply(this,arguments),this.frame.style.display="block",this.setOverlayVisible(!0),this.type==="tablet"&&(this.frame.style.top=(window.scrollY||window.pageYOffset)+"px",e=(window.scrollX||window.pageXOffset)+(window.innerWidth-560)/2,e=Math.min(window.innerWidth-560,Math.max(0,e)),e=Math.max(0,e),this.frame.style.left=e+"px"),this.rpc.ready(function(e){return n.options.key&&!n.options.usingV3&&!n.initializedKey&&(n.initializedKey=!0,e.invokeTarget("initialize",n.options.key)),n.options.usingV3?e.invokeTarget("render",n.type,"iframe",n.options):e.invokeTarget("render",n.type,n.options),e.invokeTarget("open",function(e){var t;if(e)return typeof (t=n.options).opened=="function"?t.opened():void 0}),!0})},t.prototype.preload=function(e){var t=this;return this.preloadedImage=e,this.rpc.ready(function(t){return t.invokeTarget("preload",{image:e})})},t.prototype.closed=function(){var e;return this.setOverlayVisible(!1),this.frame.style.display="none",this.type==="tablet"&&a(this.frame),typeof (e=this.options).closed=="function"&&e.closed(),this.type==="tablet"&&(this.configure(),this.preloadedImage&&this.preload(this.preloadedImage)),!0},t.prototype.createIframe=function(){var e,t,n=this;return t=document.createElement("iframe"),t.setAttribute("frameBorder","0"),t.setAttribute("allowtransparency","true"),e="z-index: 9999;\ndisplay: none;\nbackground: transparent;\nborder: 0px none transparent;\noverflow-x: hidden;\noverflow-y: auto;\nvisibility: hidden;\nmargin: 0;\npadding: 0;\n-webkit-tap-highlight-color: transparent;\n-webkit-touch-callout: none;",this.type==="tablet"?e+="position: absolute;\nwidth: 560px;\nheight: 1000px;":e+="position: fixed;\nleft: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;",t.style.cssText=e,o(t,"load",function(){return t.style.visibility="visible"}),t.src=this.host+this.path,t},t.prototype.createOverlay=function(){var e,t;return t=document.createElement("div"),e="z-index: 9998;\nbackground: #000;\nopacity: 0;\nborder: 0px none transparent;\noverflow: none;\nmargin: 0;\npadding: 0;\n-webkit-tap-highlight-color: transparent;\n-webkit-touch-callout: none;\nposition: fixed;\nleft: 0;\ntop: 0;\nwidth: 200%;\nheight: 200%;\ntransition: opacity 320ms ease;\n-webkit-transition: opacity 320ms ease;\n-moz-transition: opacity 320ms ease;\n-ms-transition: opacity 320ms ease;"
,t.style.cssText=e,t},t.prototype.setOverlayVisible=function(e){var t,n,r=this;if(this.type!=="tablet")return;return this.overlay||(this.overlay=this.createOverlay()),e?(s(document.body,this.overlay),n=this.overlay.offsetHeight,this.overlay.style.opacity="0.5"):(t=this.overlay,t.style.opacity="0",setTimeout(function(){return a(t)},400),this.overlay=null)},t.prototype.configure=function(){var e=this;return this.frame=this.createIframe(),this.frame.className=this.frame.name="stripe_checkout_app",u(this.frame,this.css),s(document.body,this.frame),this.rpc=new r(this.frame.contentWindow,this.host),this.rpc.overlayClosed=this.closed,this.rpc.setToken=function(t){e.onToken(t);if(!e.options.usingV3)return e.rpc.ready(function(e){return e.invokeTarget("close")})}},t}(i),n.exports=e}).call(this)}}),StripeCheckout.require.define({"outer/controllers/views/tabView":function(e,t,n){(function(){var e,r,i,s,o,u=function(e,t){return function(){return e.apply(t,arguments)}},a={}.hasOwnProperty,f=function(e,t){function r(){this.constructor=e}for(var n in t)a.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};s=t("outer/lib/utils").bind,e=t("outer/lib/rpc"),o=t("../../../lib/helpers"),i=t("outer/controllers/views/view"),r=function(t){function n(){this.checkForClosedTab=u(this.checkForClosedTab,this),this.fullPath=u(this.fullPath,this),this.close=u(this.close,this),this.open=u(this.open,this);var t=this;n.__super__.constructor.apply(this,arguments),this.closedTabInterval=null,this.color=null,this.colorSet=!1,this.rpc=new e(null,this.host),this.rpc.frameShouldClose=function(){return t.close()},this.rpc.setToken=function(e){return t.onToken(e)}}return f(n,t),n.prototype.open=function(){var e,t=this;n.__super__.open.apply(this,arguments),this.readyStatus=!1,this.openedOnce||this.rpc.ready(function(e){return t.options.usingV3?(e.invokeTarget("render",t.type,"tab",t.options),e.invokeTarget("open")):e.invokeTarget("render",t.type,t.options),t.checkForClosedTab()}),this.openedOnce=!0,!o.isiOSChrome()&&!o.isiOSWebView()&&(this.frame=window.open(this.fullPath()));if(!o.isiOSChrome()&&!o.isiOSWebView()&&!this.frame)o.iOS()?document.activeElement.blur():alert("Please disable your popup blocker.");else{if(!this.frame||this.frame===window||!this.frame.opener)return this.frame!==window&&this.frame&&this.frame.close(),alert("Sorry but your browser is not supported.");typeof (e=this.options).opened=="function"&&e.opened()}return this.rpc.target=this.frame},n.prototype.close=function(){return this.frame.close()},n.prototype.fullPath=function(){return this.host+this.path},n.prototype.checkForClosedTab=function(){var e=this;this.closedTabInterval&&clearInterval(this.closedTabInterval),this.closedTabInterval=null;if(!this.options.closed)return;return this.closedTabInterval=setInterval(function(){var t;if(!e.frame||!e.frame.postMessage)return clearInterval(e.closedTabInterval),e.closedTabInterval=null,typeof (t=e.options).closed=="function"?t.closed():void 0},100)},n}(i),n.exports=r}).call(this)}}),StripeCheckout.require.define({"outer/controllers/views/view":function(e,t,n){(function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e,n,r,i){i==null&&(i=""),this.preload=t(this.preload,this),this.close=t(this.close,this),this.open=t(this.open,this),this.onToken=e,this.host=n,this.path=r,this.type=i}return e.prototype.open=function(e){return this.options=e},e.prototype.close=function(){},e.prototype.preload=function(e){},e}(),n.exports=e}).call(this)}}),function(){var e,t,n,r,i,s,o,u;i=i||this.StripeCheckout.require,r=i("outer/lib/utils").host,t=i("outer/controllers/button"),e=i("outer/controllers/app"),((s=this.StripeCheckout)!=null?s.__app:void 0)==null&&(this.StripeCheckout||(this.StripeCheckout={}),this.StripeCheckout.__app=n=new e,this.StripeCheckout.open=n.open,this.StripeCheckout.configure=n.configure,this.StripeButton=this.StripeCheckout,((o=this.StripeCheckout)!=null?o.__forceV3:void 0)!==!1&&n.forceV3(),((u=this.StripeCheckout)!=null?u.__host:void 0)&&this.StripeCheckout.__host!==""&&n.setHost(this.StripeCheckout.__host)),t.load(this.StripeCheckout.__app)}.call(this);