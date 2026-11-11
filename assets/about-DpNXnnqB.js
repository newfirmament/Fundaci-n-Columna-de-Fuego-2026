import{l as o,r as d,a as c,b as r,i as l,g as n}from"./animations-D25EQhSp.js";document.addEventListener("DOMContentLoaded",async()=>{try{const i=await o(),a=document.getElementById("header-root"),e=document.getElementById("footer-root");a&&d(a,i),e&&c(e,i),r(i),v(i),u(i),_(i),b(i),l()}catch(i){console.error("Error al inicializar la página Quiénes Somos:",i)}});function v(i){const a=document.getElementById("about-intro");a&&(a.innerHTML=`
    <div class="container">
      <div class="about-intro__grid">
        <div class="about-intro__text fade-in-left">
          <span class="section__subtitle">Fundamento y Compromiso</span>
          <h2 class="section__title" id="about-intro-title">Nuestra Identidad Institucional</h2>
          <div class="section__divider" style="margin-left: 0;"></div>
          <div class="about-intro__highlight">
            «Organización cristiana sin fines de lucro cuyo fundamento principal es Jesucristo.»
          </div>
          <p>${i.quienes_somos}</p>
        </div>
        <div class="about-intro__visual fade-in-right">
          <div class="about-intro__card">
            <div class="about-intro__card-icon" aria-hidden="true">
              ${n("cross",56)}
            </div>
            <h3 class="about-intro__card-slogan">«${i.eslogan}»</h3>
            <p class="about-intro__card-sub">${i.frase_complementaria}</p>
          </div>
        </div>
      </div>
    </div>
  `)}function u(i){const a=document.getElementById("about-mv");a&&(a.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Razón de Ser</span>
        <h2 class="section__title" id="about-mv-title">Misión y Visión</h2>
        <div class="section__divider"></div>
        <p class="section__description">Guiados por la palabra de Dios, orientamos cada esfuerzo a transformar vidas y brindar dignidad humana.</p>
      </div>
      <div class="about-mv__grid">
        <div class="about-mv-card fade-in-left">
          <div class="about-mv-card__icon" aria-hidden="true">
            ${n("target",32)}
          </div>
          <h3 class="about-mv-card__title">Nuestra Misión</h3>
          <p class="about-mv-card__text">${i.mision}</p>
        </div>
        <div class="about-mv-card about-mv-card--vision fade-in-right">
          <div class="about-mv-card__icon" aria-hidden="true">
            ${n("eye",32)}
          </div>
          <h3 class="about-mv-card__title">Nuestra Visión</h3>
          <p class="about-mv-card__text">${i.vision}</p>
        </div>
      </div>
    </div>
  `)}function _(i){const a=document.getElementById("about-objectives");if(!a)return;const e=i.objetivos||[];a.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Acción Concreta</span>
        <h2 class="section__title" id="about-obj-title">Objetivos Institucionales</h2>
        <div class="section__divider"></div>
        <p class="section__description">Metas claras orientadas al desarrollo integral y espiritual de las personas en situación de vulnerabilidad.</p>
      </div>
      <div class="objectives-grid">
        ${e.map((s,t)=>`
          <div class="objective-item fade-in" data-delay="${t*100}">
            <div class="objective-number">${t+1}</div>
            <p class="objective-text">${s}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}function b(i){const a=document.getElementById("about-values");if(!a)return;const e=i.valores||[];a.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Principios Orientativos</span>
        <h2 class="section__title" id="about-val-title">Valores Cristianos</h2>
        <div class="section__divider"></div>
        <p class="section__description">Estos principios orientan el trabajo, la convivencia y la vocación de servicio de la fundación en cada acción.</p>
      </div>
      <div class="values-grid">
        ${e.map((s,t)=>`
          <div class="value-card fade-in" data-delay="${t%3*150}">
            <div class="value-card__icon-wrap" aria-hidden="true">
              ${n(s.icono,28)}
            </div>
            <h3 class="value-card__title">${s.nombre}</h3>
            <p class="value-card__desc">${s.descripcion}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}
