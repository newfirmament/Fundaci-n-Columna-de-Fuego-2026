import{l as t,r as c,a as r,b as l,i as d,g as n,c as p}from"./animations-D25EQhSp.js";document.addEventListener("DOMContentLoaded",async()=>{try{const a=await t(),s=document.getElementById("header-root"),e=document.getElementById("footer-root");s&&c(s,a),e&&r(e,a),l(a),m(),u(),b(a),d()}catch(a){console.error("Error al inicializar la página Colabora:",a)}});function m(){const a=document.getElementById("collaborate-message");a&&(a.innerHTML=`
    <div class="container">
      <div class="collab-msg__card fade-in">
        <span class="section__subtitle">Inspiración Bíblica</span>
        <h2 class="section__title" id="collab-msg-title">El Privilegio de Servir</h2>
        <div class="section__divider"></div>
        <div class="collab-msg__verse">
          «De cierto os digo que en cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis.»
          <span class="collab-msg__verse-ref">Mateo 25:40 — Reina-Valera 1960</span>
        </div>
        <p class="collab-msg__p">
          En la Fundación Columna de Fuego creemos firmemente que cada acto de amor, por pequeño que parezca, tiene el poder de restaurar la esperanza de una persona. La labor social que realizamos es posible gracias a corazones generosos comprometidos con el servicio a Jesucristo y al prójimo.
        </p>
      </div>
    </div>
  `)}function u(){const a=document.getElementById("collaborate-ways");if(!a)return;const s=[{titulo:"Oración e Intercesión",desc:"Tu respaldo espiritual es fundamental. Acompáñanos en oración constante por las familias vulnerables y las actividades que realizamos.",icono:"heart",badge:"Siempre activo"},{titulo:"Voluntariado Social",desc:"Participación activa en jornadas de entrega de alimentos, actividades infantiles y visitas comunitarias.",icono:"hands-helping",badge:"Próximamente"},{titulo:"Donaciones Materiales",desc:"Apoyo con alimentos no perecederos, ropa en buen estado y recursos para campañas solidarias concretas.",icono:"people-carry",badge:"Próximamente"},{titulo:"Difusión y Mensaje",desc:"Comparte las actividades y el mensaje de esperanza de la fundación entre tus amistades, iglesia y comunidad.",icono:"sun",badge:"Siempre activo"}];a.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Caminos de Apoyo</span>
        <h2 class="section__title" id="collab-ways-title">Formas de Sumarte</h2>
        <div class="section__divider"></div>
        <p class="section__description">Diferentes maneras en las que puedes apoyar la labor comunitaria y espiritual de la fundación.</p>
      </div>
      <div class="collab-ways__grid">
        ${s.map((e,o)=>`
          <div class="collab-card fade-in" data-delay="${o*120}">
            <span class="collab-card__badge">${e.badge}</span>
            <div class="collab-card__icon-wrap" aria-hidden="true">
              ${n(e.icono,30)}
            </div>
            <h3 class="collab-card__title">${e.titulo}</h3>
            <p class="collab-card__desc">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}function b(a){var i;const s=document.getElementById("collaborate-cta");if(!s)return;const o=`${(((i=a.contacto)==null?void 0:i.whatsapp)||{}).enlace}?text=${encodeURIComponent("Hola, deseo obtener información sobre cómo colaborar con la FUNDACIÓN COLUMNA DE FUEGO")}`;s.innerHTML=`
    <div class="container">
      <div class="collab-cta__box fade-in">
        <h2 class="section__title" id="collab-cta-title">¿Deseas más información?</h2>
        <p class="section__description">
          Si sientes el deseo de sumarte a nuestras actividades o deseas conocer más sobre nuestra labor comunitaria en Cochabamba, ponte en contacto con nosotros.
        </p>
        <div class="collab-cta__actions">
          <a href="${o}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
            ${n("whatsapp",18)}
            Escríbenos por WhatsApp
          </a>
          <a href="${p("contacto.html")}" class="btn btn--outline">
            Ver canales de contacto
          </a>
        </div>
      </div>
    </div>
  `}
