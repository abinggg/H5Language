/**
 * Created by 王员外 on 9/10/2015.
 */
!function(a,b){"use strict";function d(a){a=(a||"").replace(/^\s+|\s+$/g,"");try{return new Function("return "+a)()}catch(b){return{}}}var c={readyFn:[],isLoaded:!1,version:"0.0.5",opt:{},pack:{},options:{packType:"file",baseUrl:"./i18n/",defaultLang:"zh-Hans"},noop:function(){return function(){}},extend:function(){var d,e,f,a=arguments[0]||{},b=1,c=arguments.length;for("object"!=typeof a&&"function"!=typeof a&&(a={});c>b;b++)if(null!=(d=arguments[b]))for(e in d)f=d[e],a!==f&&void 0!==f&&(a[e]=f);return a},getType:function(){var a=window.navigator.userAgent.match(/Language\/([\w\-]+)/i)||[];return window.H5LangType||a[1]||this.opt.defaultLang||"zh-Hans"},type:"zh-Hans"};c.init=function(){var c=this,e=document.body.getAttribute("data-lang-config")||{};c.type=c.getType(),c.opt=c.extend({},c.options,d(e)),b._H5Lang_||(b._H5Lang_={}),a.body.className+=" body-lang-"+c.type+" body-lang-load","inline"===c.opt.packType?c.loadSuccess():c.loadJs(c.getUrl(),{onLoad:function(){c.loadSuccess()},onError:function(){console.error("[load fail:"+c.getUrl()+"]")}})},c.loadSuccess=function(){var c,a=this;if(a.pack=b._H5Lang_[a.type]||"",""===a.pack)return console.error("[no lang:"+a.type+"]"),void 0;a.translate(),a.isLoaded=!0;for(c in a.readyFn)"function"==typeof a.readyFn[c]&&a.readyFn[c]()},c.loadJs=function(a,b){var d=this,e=document.getElementsByTagName("head")[0]||document.documentElement,f=document.createElement("script"),g={onLoad:d.noop,onError:d.noop,charset:"utf-8",timeout:1e4},h=null;a&&(g=c.extend(g,b),f.type="text/javascript",f.src=a,f.charset=g.charset,f.onload=function(){g.onLoad(),clearTimeout(h)},f.onerror=g.onError,f.onreadystatechange=function(){var a=this.readyState;("loaded"===a||"complete"===a)&&(f.onreadystatechange=null,clearTimeout(h),g.onLoad())},e.insertBefore(f,e.firstChild),h=setTimeout(function(){e.removeChild(f),g.onError()},g.timeout))},c.getUrl=function(){return this.opt.baseUrl+("/"!==this.opt.baseUrl.slice(-1)?"/":"")+this.type+".js"},c.translate=function(){var h,a=this,b=document.querySelectorAll("*"),c=null,d="",e="",g="";for(h in b)c=b[h],c&&1===c.nodeType&&null===c.getAttribute("data-lang-load")&&(d=c&&c.getAttribute("data-lang")||"",e=d&&this.get(d)||"",g=(c.tagName||"").toLowerCase(),d&&e&&("input"===g||"textarea"===g?c.value=e:"img"===g?c.getAttribute("data-src")?(c.setAttribute("data-src",e),c.hasAttribute("src")&&c.setAttribute("src",e)):c.setAttribute("src",e):"script"===g||"iframe"===g?c.src=e:"base"===g||"link"===g?c.href=e:c.innerHTML=e),"script"===g&&"text/html"===c.type&&(c.text=(c.text||"").replace(/@lang\s*\(([^\)]+)\)/g,function(b,c){return c=(c||"").replace(/^\s+|\s+$/g,""),a.get(c)})),("input"===g||"textarea"===g)&&(c.setAttribute("placeholder",a.get(c.getAttribute("data-lang-placeholder"))),c.removeAttribute("data-lang-placeholder")),c.getAttribute("data-lang-title")&&(c.setAttribute("title",a.get(c.getAttribute("data-lang-title"))),c.removeAttribute("data-lang-title")),"a"===g&&c.getAttribute("data-lang-href")&&(c.setAttribute("href",a.get(c.getAttribute("data-lang-href"))),c.removeAttribute("data-lang-href")),"img"===g&&c.getAttribute("data-lang-alt")&&(c.setAttribute("alt",a.get(c.getAttribute("data-lang-alt"))),c.removeAttribute("data-lang-alt")),d&&"title"!=g&&c.removeAttribute("data-lang"));return b},c.get=function(){var f,a=this,b=arguments,c="",d=b[0],e=b.length;return 0===e?a.pack:(c=d&&a.pack[d]||"",1===e?c:2===e&&"object"==typeof b[1]?c.replace(/\{%([^\}]+)\}/gi,function(a,c){return b[1][c]||""}):(f=0,c.replace(/\{%s\}/gi,function(){return f++,b[f]||""})))},c.set=function(a,b){var c=this;return c.pack[a]?c.pack[a]=b:null},c.init(),b.H5LangReady=function(a){c.isLoaded?a():c.readyFn.push(a)},b.H5Lang=c}(document,window);