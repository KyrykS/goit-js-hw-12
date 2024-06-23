import{a as d,S as u,i}from"./assets/vendor-ee72e1a4.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const f="44464859-33f7988efa5c5083e6b56b801",m="https://pixabay.com/api/";async function p(t,n=1,s=15){return(await d.get(m,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:s}})).data}let c;function y(t){const n=document.querySelector(".gallery"),s=t.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Comments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </a>
  `).join("");n.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new u(".gallery-item",{captionDelay:250})}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}document.getElementById("search-form").addEventListener("submit",async t=>{t.preventDefault();const n=document.getElementById("search-input").value.trim();if(!n){i.error({title:"Error",message:"Please enter a search term!"});return}g(),h();try{const s=await p(n);if(s.hits.length===0){i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}y(s.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{l()}});function h(){const t=document.createElement("div");t.className="loader",document.body.appendChild(t)}function l(){const t=document.querySelector(".loader");t&&t.remove()}
//# sourceMappingURL=commonHelpers.js.map
