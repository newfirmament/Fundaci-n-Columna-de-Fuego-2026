import{l as u,e as h,r as f,a as b,b as g,i as $,c as n,g as i,f as y,h as l,k as E,m as I,t as x,n as w,o as v,p as B,q as L}from"./animations-D25EQhSp.js";document.addEventListener("DOMContentLoaded",async()=>{try{const e=await u(),a=await h(),t=document.getElementById("header-root"),r=document.getElementById("footer-root");t&&f(t,e),r&&b(r,e),g(e),M(e),q(e),H(e),P(a),C(e),S(),$()}catch(e){console.error("Error inicializando página principal:",e)}});function M(e){const a=document.getElementById("hero");a&&(a.innerHTML=`
    <div class="hero__content fade-in">
      <span class="hero__welcome">Bienvenidos a</span>
      <h1 class="hero__title">${e.nombre}</h1>
      <div class="hero__divider"></div>
      <p class="hero__slogan">«${e.eslogan}»</p>
      <p class="hero__description">${e.frase_complementaria}. Comprometidos con el servicio a Jesucristo y la transformación de vidas.</p>
      <div class="hero__actions">
        <a href="${n("quienes-somos.html")}" class="btn btn--secondary btn--lg">Conoce nuestra misión</a>
        <a href="${n("eventos.html")}" class="btn btn--gold btn--lg">Próximos eventos</a>
      </div>
    </div>
    <a href="#identity" class="hero__scroll-indicator" aria-label="Desplazarse hacia abajo">
      <span>Conocer más</span>
      ${i("chevronDown",20)}
    </a>
  `)}function q(e){const a=document.getElementById("identity");a&&(a.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Identidad Institucional</span>
        <h2 class="section__title" id="identity-title">Quiénes Somos</h2>
        <div class="section__divider"></div>
      </div>
      <div class="identity__grid">
        <div class="identity__text fade-in-left">
          <p>${e.quienes_somos}</p>
          <a href="${n("quienes-somos.html")}" class="btn btn--outline">
            Leer más sobre nosotros
            ${i("arrowRight",16)}
          </a>
        </div>
        <div class="identity__visual fade-in-right">
          <div class="identity__card">
            <p class="identity__card-quote">«${e.eslogan}»</p>
            <p class="identity__card-sub">${e.frase_complementaria}</p>
          </div>
        </div>
      </div>
    </div>
  `)}function H(e){const a=document.getElementById("mission-vision");a&&(a.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Nuestro Propósito</span>
        <h2 class="section__title" id="mv-title">Misión y Visión</h2>
        <div class="section__divider"></div>
        <p class="section__description">Guiados por el amor a Dios y al prójimo, trabajamos día a día para impactar a nuestra comunidad.</p>
      </div>
      <div class="mv-grid">
        <div class="mv-card fade-in-left">
          <div class="mv-card__icon-wrapper" aria-hidden="true">
            ${i("target",32)}
          </div>
          <h3 class="mv-card__title">Nuestra Misión</h3>
          <p class="mv-card__text">${e.mision}</p>
        </div>
        <div class="mv-card mv-card--vision fade-in-right">
          <div class="mv-card__icon-wrapper" aria-hidden="true">
            ${i("eye",32)}
          </div>
          <h3 class="mv-card__title">Nuestra Visión</h3>
          <p class="mv-card__text">${e.vision}</p>
        </div>
      </div>
    </div>
  `)}function P(e){const a=document.getElementById("featured-events");if(!a)return;const r=y(e.eventos||[]).filter(s=>l(s)!=="finalizado").slice(0,3);let c="";r.length===0?c=`
      <div class="empty-state">
        <div class="empty-state__icon">${i("calendar",48)}</div>
        <h3 class="empty-state__title">No hay eventos próximos en este momento</h3>
        <p class="empty-state__text">Próximamente estaremos publicando nuevas actividades y convocatorias.</p>
      </div>
    `:c=`
      <div class="featured-events__grid">
        ${r.map((s,_)=>{const m=l(s),o=L(m),d=s.imagen||"",p=d?E(d):I(600,400,s.titulo);return`
            <article class="event-card fade-in" data-delay="${_*150}">
              <div class="event-card__image-container">
                <img src="${p}" alt="${s.titulo}" class="event-card__img" loading="lazy">
                <div class="event-card__badge-wrapper">
                  <span class="event-card__status ${o.className}">${o.label}</span>
                  ${s.es_demo?'<span class="demo-badge">Demo</span>':""}
                </div>
              </div>
              <div class="event-card__body">
                <span class="event-card__category">${s.categoria}</span>
                <h3 class="event-card__title">${s.titulo}</h3>
                <p class="event-card__desc">${x(s.descripcion,110)}</p>
                <div class="event-card__meta">
                  <div class="event-card__meta-item">
                    ${i("calendar",14)}
                    <span>${w(s.fecha_inicio)}</span>
                  </div>
                  <div class="event-card__meta-item">
                    ${i("clock",14)}
                    <span>${v(s.hora_inicio)} - ${v(s.hora_fin)}</span>
                  </div>
                  <div class="event-card__meta-item">
                    ${i("mapPin",14)}
                    <span>${s.lugar}</span>
                  </div>
                </div>
              </div>
            </article>
          `}).join("")}
      </div>
    `,a.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Actividades</span>
        <h2 class="section__title" id="events-title">Próximos Eventos</h2>
        <div class="section__divider"></div>
        <p class="section__description">Sé parte de nuestras jornadas de servicio, adoración y entrega comunitaria.</p>
      </div>
      ${c}
      <div class="featured-events__cta fade-in">
        <a href="${n("eventos.html")}" class="btn btn--primary">
          Ver todos los eventos
          ${i("arrowRight",16)}
        </a>
      </div>
    </div>
  `,a.querySelectorAll(".event-card__img").forEach(s=>{s.addEventListener("error",B)})}function C(e){const a=document.getElementById("bible-verse");if(!a)return;const t=e.versiculo||{};a.innerHTML=`
    <div class="bible-verse__container scale-in">
      <div class="bible-verse__icon" aria-hidden="true">
        ${i("cross",48)}
      </div>
      <blockquote class="bible-verse__text">
        «${t.texto}»
      </blockquote>
      <cite class="bible-verse__ref">— ${t.referencia} (${t.version})</cite>
    </div>
  `}function S(){const e=document.getElementById("cta-section");e&&(e.innerHTML=`
    <div class="container">
      <div class="cta-section__box fade-in">
        <h2 class="cta-section__title" id="cta-title">Conoce nuestro trabajo e iniciativas</h2>
        <p class="cta-section__text">Descubre los programas que desarrollamos para apoyar a familias y personas en situación de vulnerabilidad en Cochabamba.</p>
        <div class="cta-section__actions">
          <a href="${n("programas.html")}" class="btn btn--primary">
            Nuestros Programas
            ${i("arrowRight",16)}
          </a>
          <a href="${n("contacto.html")}" class="btn btn--outline">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  `)}
