import{l,r as p,a as _,b as m,i as b,d,g as e}from"./animations-D25EQhSp.js";document.addEventListener("DOMContentLoaded",async()=>{try{const t=await l(),n=document.getElementById("header-root"),a=document.getElementById("footer-root");n&&p(n,t),a&&_(a,t),m(t),v(t),u(t),b()}catch(t){console.error("Error al inicializar la página Contacto:",t)}});function v(t){var c,s,r;const n=document.getElementById("contact-cards");if(!n)return;const a=t.contacto||{},i=`${(c=a.whatsapp)==null?void 0:c.enlace}?text=${encodeURIComponent(((s=a.whatsapp)==null?void 0:s.mensaje_predeterminado)||"Hola")}`,o=d(`${a.direccion}, ${a.ciudad}, ${a.pais}`);n.innerHTML=`
    <div class="container">
      <div class="section__header fade-in">
        <span class="section__subtitle">Atención Directa</span>
        <h2 class="section__title" id="contact-cards-title">Medios de Comunicación</h2>
        <div class="section__divider"></div>
        <p class="section__description">Elige el canal que prefieras para ponerte en contacto directo con nosotros.</p>
      </div>
      <div class="contact-cards__grid">
        <!-- WhatsApp -->
        <div class="contact-box contact-box--whatsapp fade-in" data-delay="0">
          <div class="contact-box__icon-wrap" aria-hidden="true">
            ${e("whatsapp",32)}
          </div>
          <h3 class="contact-box__title">WhatsApp Oficial</h3>
          <p class="contact-box__info">${((r=a.whatsapp)==null?void 0:r.numero_internacional)||"+591 68482698"}</p>
          <p class="contact-box__sub">Respuesta rápida para consultas generales, eventos y coordinación de apoyo.</p>
          <a href="${i}" target="_blank" rel="noopener noreferrer" class="btn btn--primary contact-box__btn">
            ${e("whatsapp",18)}
            Enviar mensaje
          </a>
        </div>

        <!-- Correo Electrónico -->
        <div class="contact-box contact-box--mail fade-in" data-delay="150">
          <div class="contact-box__icon-wrap" aria-hidden="true">
            ${e("mail",32)}
          </div>
          <h3 class="contact-box__title">Correo Electrónico</h3>
          <p class="contact-box__info" style="font-size: var(--text-sm);">${a.correo}</p>
          <p class="contact-box__sub">Canal para correspondencia institucional, propuestas y consultas detalladas.</p>
          <a href="mailto:${a.correo}" class="btn btn--gold contact-box__btn">
            ${e("mail",18)}
            Escribir correo
          </a>
        </div>

        <!-- Dirección Física -->
        <div class="contact-box fade-in" data-delay="300">
          <div class="contact-box__icon-wrap" aria-hidden="true">
            ${e("mapPin",32)}
          </div>
          <h3 class="contact-box__title">Ubicación</h3>
          <p class="contact-box__info">${a.direccion}</p>
          <p class="contact-box__sub">${a.ciudad}, ${a.pais}</p>
          <a href="${o}" target="_blank" rel="noopener noreferrer" class="btn btn--outline contact-box__btn">
            ${e("mapPin",18)}
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  `}function u(t){const n=document.getElementById("contact-map");if(!n)return;const a=t.contacto||{},o=`https://maps.google.com/maps?q=${encodeURIComponent(`${a.direccion}, ${a.ciudad}, ${a.pais}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`,c=d(`${a.direccion}, ${a.ciudad}, ${a.pais}`);n.innerHTML=`
    <div class="container">
      <div class="contact-map__wrapper fade-in">
        <div class="contact-map__info">
          <span class="section__subtitle" style="text-align: left;">Sede Institucional</span>
          <h2 class="contact-map__title" id="contact-map-title">${a.fundacion}</h2>
          <div class="section__divider" style="margin-left: 0;"></div>
          
          <div class="contact-map__detail">
            ${e("mapPin",24)}
            <div>
              <strong>Dirección:</strong><br>
              ${a.direccion}<br>
              ${a.ciudad}, ${a.pais}
            </div>
          </div>

          <div class="contact-map__detail">
            ${e("info",24)}
            <div>
              <strong>Referencia:</strong><br>
              Cochabamba, Bolivia. Atendemos consultas de la comunidad mediante nuestros canales digitales y telefónicos.
            </div>
          </div>

          <div style="margin-top: var(--space-md);">
            <a href="${c}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
              ${e("mapPin",18)}
              Abrir búsqueda en Google Maps
              ${e("externalLink",14)}
            </a>
          </div>
        </div>

        <div class="contact-map__frame-box">
          <iframe 
            class="contact-map__iframe" 
            src="${o}" 
            loading="lazy" 
            title="Mapa de ubicación de la Fundación Columna de Fuego"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  `}
