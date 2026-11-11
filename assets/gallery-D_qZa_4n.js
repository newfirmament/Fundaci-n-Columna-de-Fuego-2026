import{l as f,s as v,r as x,a as b,b as p,i as I,g as E,k as m,m as y,p as L,j as _,n as $}from"./animations-D25EQhSp.js";const o={items:[],categories:[],selectedCategory:"todas",lightboxIndex:0};document.addEventListener("DOMContentLoaded",async()=>{try{const[e,a]=await Promise.all([f(),v()]),t=document.getElementById("header-root"),i=document.getElementById("footer-root");t&&x(t,e),i&&b(i,e),p(e),o.items=a.imagenes||[],o.categories=a.categorias||[],u(),h(),k(),I()}catch(e){console.error("Error al cargar la galería:",e)}});function u(){const e=document.getElementById("gallery-toolbar");if(!e)return;const a=l();e.innerHTML=`
    <div class="gallery-filters">
      <button class="filter-pill ${o.selectedCategory==="todas"?"active":""}" data-cat="todas">
        Todas las actividades
      </button>
      ${o.categories.map(t=>`
        <button class="filter-pill ${o.selectedCategory===t?"active":""}" data-cat="${t}">
          ${t}
        </button>
      `).join("")}
    </div>
    <div class="gallery-count">
      Mostrando <strong>${a.length}</strong> fotografías
    </div>
  `,e.querySelectorAll("[data-cat]").forEach(t=>{t.addEventListener("click",()=>{o.selectedCategory=t.dataset.cat,u(),h()})})}function l(){return o.selectedCategory==="todas"?o.items:o.items.filter(e=>e.categoria===o.selectedCategory)}function h(){const e=document.getElementById("gallery-grid");if(!e)return;const a=l();if(a.length===0){e.innerHTML=`
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state__icon">${E("image",48)}</div>
        <h3 class="empty-state__title">No hay fotografías en esta categoría</h3>
        <p class="empty-state__text">Selecciona otra categoría para visualizar nuestras fotos.</p>
      </div>
    `;return}e.innerHTML=a.map((t,i)=>{const n=t.imagen||"",r=n?m(n):y(600,450,t.titulo);return`
      <div class="gallery-item fade-in" data-gallery-index="${i}" data-delay="${i%3*100}">
        ${t.es_demo?'<div class="gallery-item__badge"><span class="demo-badge">Demo</span></div>':""}
        <img src="${r}" alt="${t.titulo}" class="gallery-item__img" loading="lazy">
        <div class="gallery-item__overlay">
          <span class="gallery-item__category">${t.categoria}</span>
          <h3 class="gallery-item__title">${t.titulo}</h3>
        </div>
      </div>
    `}).join(""),e.querySelectorAll(".gallery-item__img").forEach(t=>{t.addEventListener("error",L)}),e.querySelectorAll("[data-gallery-index]").forEach(t=>{t.addEventListener("click",()=>{const i=parseInt(t.dataset.galleryIndex);B(i)})}),_()}function B(e){o.lightboxIndex=e,d();const a=document.getElementById("lightbox");a.classList.add("active"),a.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function s(){const e=document.getElementById("lightbox");e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}function d(){const e=l();if(e.length===0)return;const a=e[o.lightboxIndex],t=document.getElementById("lightbox-img"),i=document.getElementById("lightbox-caption"),n=a.imagen||"";t.src=n?m(n):y(900,600,a.titulo),t.alt=a.titulo,i.innerHTML=`
    <div class="lightbox__caption-title">${a.titulo}</div>
    <div class="lightbox__caption-meta">
      ${a.categoria} • ${$(a.fecha)} • (${o.lightboxIndex+1} de ${e.length})
    </div>
  `}function c(){const e=l();o.lightboxIndex=(o.lightboxIndex-1+e.length)%e.length,d()}function g(){const e=l();o.lightboxIndex=(o.lightboxIndex+1)%e.length,d()}function k(){var e,a,t,i;(e=document.getElementById("lightbox-close"))==null||e.addEventListener("click",s),(a=document.getElementById("lightbox-overlay"))==null||a.addEventListener("click",s),(t=document.getElementById("lightbox-prev"))==null||t.addEventListener("click",c),(i=document.getElementById("lightbox-next"))==null||i.addEventListener("click",g),document.addEventListener("keydown",n=>{const r=document.getElementById("lightbox");!r||!r.classList.contains("active")||(n.key==="Escape"&&s(),n.key==="ArrowLeft"&&c(),n.key==="ArrowRight"&&g())})}
