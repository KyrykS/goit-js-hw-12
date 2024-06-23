import{a as d,S as u,i}from"./assets/vendor-ee72e1a4.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="44464859-33f7988efa5c5083e6b56b801",m="https://pixabay.com/api/";async function p(r,n=1){const e={key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:12};return(await d.get(m,{params:e})).data}let l;function y(r){const n=document.getElementById("gallery");n.innerHTML=r.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes</b> ${e.likes}</p>
        <p><b>Views</b> ${e.views}</p>
        <p><b>Comments</b> ${e.comments}</p>
        <p><b>Downloads</b> ${e.downloads}</p>
      </div>
    </a>
  `).join(""),l?l.refresh():l=new u(".gallery-item",{captionDelay:250})}function g(){const r=document.getElementById("gallery");r.innerHTML=""}document.getElementById("search-form").addEventListener("submit",async r=>{r.preventDefault();const n=document.getElementById("search-input").value.trim();if(!n){i.error({title:"Error",message:"Please enter a search term!"});return}g(),h();try{const e=await p(n);if(e.hits.length===0){i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}y(e.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{c()}});function h(){const r=document.createElement("div");r.className="loader",document.body.appendChild(r)}function c(){const r=document.querySelector(".loader");r&&r.remove()}
//# sourceMappingURL=commonHelpers.js.map
