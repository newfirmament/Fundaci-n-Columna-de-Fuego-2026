import{l,u as g,r as m,a as p,b as v,i as u,g as _,k as f,m as y,p as b,j as h}from"./animations-D25EQhSp.js";const r={programs:[],categories:[],selectedCategory:"todas"};document.addEventListener("DOMContentLoaded",async()=>{try{const[e,t]=await Promise.all([l(),g()]),a=document.getElementById("header-root"),o=document.getElementById("footer-root");a&&m(a,e),o&&p(o,e),v(e),r.programs=(t.programas||[]).filter(s=>s.estado==="activo"),r.categories=t.categorias||[],i(),d(),u()}catch(e){console.error("Error al cargar programas:",e)}});function i(){const e=document.getElementById("programs-toolbar");if(!e)return;const t=c();e.innerHTML=`
    <div class="programs-filter-list">
      <button class="filter-pill ${r.selectedCategory==="todas"?"active":""}" data-cat="todas">
        Todos los programas
      </button>
      ${r.categories.map(a=>`
        <button class="filter-pill ${r.selectedCategory===a?"active":""}" data-cat="${a}">
          ${a}
        </button>
      `).join("")}
    </div>
    <div class="programs-count">
      Mostrando <strong>${t.length}</strong> iniciativas
    </div>
  `,e.querySelectorAll("[data-cat]").forEach(a=>{a.addEventListener("click",()=>{r.selectedCategory=a.dataset.cat,i(),d()})})}function c(){return r.selectedCategory==="todas"?r.programs:r.programs.filter(e=>e.categoria===r.selectedCategory)}function d(){const e=document.getElementById("programs-grid");if(!e)return;const t=c();if(t.length===0){e.innerHTML=`
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state__icon">${_("info",48)}</div>
        <h3 class="empty-state__title">No hay programas en esta categoría</h3>
        <p class="empty-state__text">Selecciona otra categoría para visualizar nuestras iniciativas.</p>
      </div>
    `;return}e.innerHTML=t.map((a,o)=>{const s=a.imagen||"",n=s?f(s):y(700,400,a.nombre);return`
      <article class="program-card fade-in" data-delay="${o%2*150}">
        <div class="program-card__image-wrap">
          <img src="${n}" alt="${a.nombre}" class="program-card__img" loading="lazy">
          <div class="program-card__badge-wrap">
            <span class="card__category" style="background: white; padding: 4px 10px; border-radius: var(--radius-full); font-size: 11px;">
              ${a.categoria}
            </span>
            ${a.es_demo?'<span class="demo-badge">Demostración</span>':""}
          </div>
        </div>
        <div class="program-card__body">
          <h2 class="program-card__title">${a.nombre}</h2>
          <p class="program-card__desc">${a.descripcion}</p>
          <div class="program-card__objective">
            <div class="program-card__objective-label">Objetivo del programa</div>
            <p class="program-card__objective-text">${a.objetivo}</p>
          </div>
        </div>
      </article>
    `}).join(""),e.querySelectorAll(".program-card__img").forEach(a=>{a.addEventListener("error",b)}),h()}
