import{a as f,S as m,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="45295548-800e218e35273c9a8c48208a3",h={key:y,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};function b(o){return f.get(g,{params:{...h,q:o}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${n}</p>
            <p><b>Comments</b> ${p}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function E(){l.innerHTML=""}function q(){c.classList.remove("is-hidden")}function P(){c.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",w);function w(o){o.preventDefault();const r=v.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}E(),q(),b(r).then(i=>{if(!i.hits.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(i.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P()})}
//# sourceMappingURL=index.js.map
