!function e(n,t,a){function o(r,d){if(!t[r]){if(!n[r]){var s="function"==typeof require&&require;if(!d&&s)return s(r,!0);if(i)return i(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[r]={exports:{}};n[r][0].call(c.exports,function(e){var t=n[r][1][e];return o(t||e)},c,c.exports,e,n,t,a)}return t[r].exports}for(var i="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}({1:[function(e,n,t){!function(){var e=!1;!function(n,t){function a(){e&&(window.ga=console.info.bind(console))}!function(e,n,t,o){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date;var i=n.createElement("script");i.async=!0,i.src="https://www.google-analytics.com/analytics.js",i.addEventListener("load",a);var r=n.getElementsByTagName("script")[0];r.parentNode.insertBefore(i,r)}(window,document,0,"ga"),a(),ga("create",n,t),ga("set","forceSSL",!0),ga("send","pageview")}("UA-86987247-1",{alwaysSendReferrer:!0}),function(){window.addEventListener("load",function(){setTimeout(function(){var n=performance.timing;e("loadTime",n.loadEventEnd-n.fetchStart),e("domReadyTime",n.domComplete-n.domInteractive),e("readyStart",n.fetchStart-n.navigationStart),e("redirectTime",n.redirectEnd-n.redirectStart),e("appcacheTime",n.domainLookupStart-n.fetchStart),e("unloadEventTime",n.unloadEventEnd-n.unloadEventStart),e("lookupDomainTime",n.domainLookupEnd-n.domainLookupStart),e("connectTime",n.connectEnd-n.connectStart),e("requestTime",n.responseEnd-n.requestStart),e("initDomTreeTime",n.domInteractive-n.responseEnd),e("loadEventTime",n.loadEventEnd-n.loadEventStart)})});var e=function(e,n){return function(t,a){void 0===a&&(a=performance.now()),ga("send",{hitType:"timing",timingCategory:e,timingVar:t,timingValue:a,timingLabel:n})}}("page");ga("send","event","pageload.title",document.title),ga("send","event","pageload.location",window.location.href),ga("send","event","pageload.pathname",window.location.pathname),ga("send","event","pageload.querystring",window.location.search),ga("send","event","pageload.hash",window.location.hash),ga("send","event","supports.getVRDisplays","getVRDisplays"in navigator),ga("send","event","supports.getVRDevices","getVRDevices"in navigator),ga("send","event","libs.aframe","AFRAME"in window?window.AFRAME.version||"<unknown>":"null"),ga("send","event","libs.three","THREE"in window?window.THREE.REVISION||"<unknown>":"null"),ga("send","event","libs.webvrpolyfill","WebVRConfig"in window||"WebVRPolyfill"in window?window.WebVRPolyfill&&window.WebVRPolyfill.version||"<unknown>":"null"),ga("send","event","libs.webvrplus","WEBVRPLUS"in window?window.WEBVRPLUS.version||"<unknown>":"null");var n,t,a=function(e){var n=(e||[]).map(function(e){return e?e.displayName||e.deviceName||"<unknown>":"<unknown>"});return JSON.stringify(n)},i=function(e){var n=(e||[]).map(function(e){return e.isPresenting});return JSON.stringify(n)};document.body.requestFullscreen?(n="fullscreenElement",t="fullscreenchange"):document.body.mozRequestFullScreen?(n="mozFullScreenElement",t="mozfullscreenchange"):document.body.webkitRequestFullscreen?(n="webkitFullscreenElement",t="webkitfullscreenchange"):document.body.msRequestFullscreen&&(n="msFullscreenElement",t="MSFullscreenChange"),document.addEventListener(t,function(){var e=document[n]instanceof HTMLElement;if(ga("send","event","modechange.fullscreen",e),navigator.getVRDevices){var t=[{isPresenting:e}];ga("send","event","modechange.vr",i(t))}}),navigator.getVRDisplays?navigator.getVRDisplays().then(function(e){ga("send","event","pageload.getVRDisplays",a(e)),window.addEventListener("vrdisplaypresentchange",function(){ga("send","event","modechange.vr",i(e))})}):navigator.getVRDevices&&navigator.getVRDevices().then(function(e){ga("send","event","pageload.getVRDevices",a(e))}),document.documentElement.addEventListener("click",function(e){var n=e.target.closest&&e.target.closest("a, button")||e.target;n&&(n.href?ga("send","event","click.link",n.href):ga("send","event","click.button",n.id?"#"+n.id:n.textContent))}),window.addEventListener("appinstalled",function(){var e=o.get("visits");ga("send","event","app.installed.href",window.location.href),ga("send","event","app.installed.visits",void 0===e?"<unknown>":e),ga("send","event","app.installed.installs",o.increment("installs"))})}();var n=document.documentElement,t=window.location.hash.substr(1),a=!1,o={_cache:{},has:function(e){try{return e in localStorage}catch(e){}},get:function(e,n){try{return e in localStorage?JSON.parse(localStorage[e]):n}catch(e){}},remove:function(e){try{delete localStorage[e]}catch(e){}},set:function(e,n){try{localStorage[e]=JSON.stringify(n)}catch(e){}},increment:function(e,n){if(n&&n.once&&e in o._cache)return o._cache[e];var t=0;return o.has(e)&&(t=parseInt(o.get(e),10)||0),o.set(e,++t),o._cache[e]=t,t}},i=function(){(t=window.location.hash.substr(1))&&n.setAttribute("data-hash",t)},r=function(){i();o.increment("visits");n.dataset.newbie=o.get("videos:what_is_webvr:plays",0)<=2,o.has("debug_ui")?(a=!0,n.dataset.debug=""):(a=!1,delete n.dataset.debug);var e="ontouchstart"in window;n.dataset.supportsTouch=e;var t={};n.matches&&n.matches('[data-layout~="home"]')&&Array.prototype.forEach.call(document.querySelectorAll('#notifications .message[data-pinned="true"]'),function(e){e.parentNode.removeChild(e)}),n.addEventListener("click",function(n){var a=n.target,i=a.closest("[data-download-id]")||a.querySelector("[data-download-id]");i&&(i.closest(":not(#download)").downloadIsNew="false",i.closest("#download").dataset.downloadIsNew="false",o.increment("downloads:"+i.dataset.downloadName+":"+i.dataset.downloadId));var r=a.closest&&a.closest(".dropdown-with-children");if(r&&e)return!0===t[r]?t[r]=!1:t[r]=!0,void r.setAttribute("aria-expanded",t[r]);Object.keys(t).forEach(function(e){e.setAttribute("aria-expanded","false")}),t={};var d=a.closest&&a.closest(".message-dismissable");d&&("true"===d.getAttribute("aria-expanded")?(d.setAttribute("aria-expanded","false"),o.set("notifications:"+d.id,"hidden")):(d.setAttribute("aria-expanded","true"),o.set("notifications:"+d.id,"visible")))});var r=document.querySelector("#download > .button[data-download-name]");if(r){var s="downloads:"+r.dataset.downloadName+":"+r.dataset.downloadId;if(!o.has(s)){r.dataset.downloadIsNew="true";var l=r.closest("#download");l&&(l.dataset.downloadIsNew="true")}}d("Le8pTXQqM3s")},d=function(e){var n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t);var i;window.onYouTubeIframeAPIReady=function(){i=new YT.Player("yt_"+e,{height:"390",width:"640",videoId:e,events:{onReady:r,onStateChange:s}})};var r=function(n){a&&console.log('YouTube Video "%s" ready',e)},d=0,s=function(e){if(a&&console.log('YouTube Video "%s" changed state',e.data),e.data===YT.PlayerState.ENDED)return a&&console.log('YouTube Video "%s" was played and ended'),void o.increment("videos:what_is_webvr:plays",{once:!0});e.data!==YT.PlayerState.PLAYING&&e.data!==YT.PlayerState.PAUSED||d++,d>=4&&(a&&console.log('YouTube Video "%s" was paused/played a few times'),o.increment("videos:what_is_webvr:plays",{once:!0}))}};window.addEventListener("hashchange",i),window.addEventListener("load",r)}()},{}]},{},[1]);