(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let c=!1;function s(t){let n=t.offsetTop,r=t.offsetLeft,i=t.offsetWidth,e=t.offsetHeight;for(;t.offsetParent;)t=t.offsetParent,n+=t.offsetTop,r+=t.offsetLeft;return n<window.scrollY+window.innerHeight&&r<window.scrollX+window.innerWidth&&n+e>window.scrollY&&r+i>window.scrollX}function d(){if(s(document.getElementById("map"))&&!c){c=!0;let t=document.createElement("script");t.src="https://api-maps.yandex.ru/2.1/?load=package.standard&apikey=f44f9a2d-2cef-4d09-a399-6ea9b5cedf55&lang=ru-RU",document.getElementsByTagName("body")[0].appendChild(t);let n=document.getElementById("map").getAttribute("data-pin");t.onload=function(){ymaps.ready(function(){let r=new ymaps.Map("map",{center:[55.721194,37.755401],zoom:14,controls:["zoomControl"]},{});r.behaviors.disable("scrollZoom");let i=new ymaps.Placemark([55.721194,37.755401],{balloonContentHeader:"Риал Лидер",balloonContentBody:"Москва, ул.Стахановская, 19"},{iconLayout:"default#image",iconImageHref:n,iconImageSize:[41,54],iconImageOffset:[-20,-54]});r.geoObjects.add(i)})}}}document.getElementById("map")&&(document.querySelector("[data-lazy]")&&setTimeout(d,1600),window.addEventListener("scroll",()=>{d()}));document.addEventListener("DOMContentLoaded",function(){document.querySelector(".burger").addEventListener("click",()=>{alert(0)})});
