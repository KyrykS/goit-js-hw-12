import{a as g,S as b,i as a}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const L="44464859-33f7988efa5c5083e6b56b801",w="https://pixabay.com/api/";async function m(e,t=1,s=15){return(await g.get(w,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}})).data}let u;function h(e){const t=document.querySelector(".gallery"),s=e.map(o=>`
    <a href="${o.largeImageURL}" class="gallery-item">
      <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${o.likes}</p>
        <p><b>Views:</b> ${o.views}</p>
        <p><b>Comments:</b> ${o.comments}</p>
        <p><b>Downloads:</b> ${o.downloads}</p>
      </div>
    </a>
  `).join("");t.insertAdjacentHTML("beforeend",s),u?u.refresh():u=new b(".gallery-item",{captionDelay:250})}function S(){const e=document.querySelector(".gallery");e.innerHTML=""}function c(e){const t=document.querySelector(".load-more");e?t.classList.remove("hidden"):t.classList.add("hidden")}let i=1,l="",f=0;const v=document.querySelector("#search-form"),E=document.querySelector(".load-more");v.addEventListener("submit",q);E.addEventListener("click",I);async function q(e){if(e.preventDefault(),l=document.getElementById("search-input").value.trim(),!l){a.error({title:"Error",message:"Please enter a search word!"});return}i=1,S(),c(!1),y();try{const t=await m(l,i);if(t.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query!"});return}f=t.totalHits,h(t.hits),t.hits.length<f&&c(!0)}catch{a.error({title:"Error",message:"Something went wrong!"})}finally{p()}}async function I(){i+=1,c(!1),y();try{const e=await m(l,i);h(e.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),i*15>=f?a.info({title:"Info",message:"No more results."}):c(!0)}catch{a.error({title:"Error",message:"Something went wrong!"})}finally{p()}}function y(){const e=document.createElement("div");e.className="loader",document.body.appendChild(e)}function p(){const e=document.querySelector(".loader");e&&e.remove()}
//# sourceMappingURL=commonHelpers.js.map
