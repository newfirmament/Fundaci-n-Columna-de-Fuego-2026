import{l as F,e as P,r as q,a as N,b as z,f as R,h as y,i as Y,g as r,j as O,k,m as B,t as U,n as A,o as p,p as T,M as x,D as W,d as G,q as H}from"./animations-D25EQhSp.js";const t={events:[],categories:[],currentView:"cards",filterCategory:"todas",filterStatus:"todos",calendarDate:new Date,selectedCalendarDay:null};document.addEventListener("DOMContentLoaded",async()=>{try{const[e,n]=await Promise.all([F(),P()]),a=document.getElementById("header-root"),d=document.getElementById("footer-root");a&&q(a,e),d&&N(d,e),z(e),t.events=R(n.eventos||[]),t.categories=n.categorias||[];const i=t.events.find(c=>y(c)!=="finalizado");if(i&&i.fecha_inicio){const[c,l]=i.fecha_inicio.split("-").map(Number);t.calendarDate=new Date(c,l-1,1)}b(),$(),K(),Y()}catch(e){console.error("Error cargando eventos:",e)}});function b(){const e=document.getElementById("events-toolbar");if(!e)return;const n=w();e.innerHTML=`
    <div class="events-toolbar__row">
      <div class="events-toolbar__views">
        <button class="events-toolbar__view-btn ${t.currentView==="cards"?"active":""}" data-view="cards" aria-label="Vista de tarjetas">
          ${r("grid",16)}
          <span>Tarjetas</span>
        </button>
        <button class="events-toolbar__view-btn ${t.currentView==="calendar"?"active":""}" data-view="calendar" aria-label="Vista de calendario">
          ${r("calendar",16)}
          <span>Calendario</span>
        </button>
      </div>
      <div class="events-toolbar__count">
        Mostrando <strong>${n.length}</strong> de ${t.events.length} actividades
      </div>
    </div>
    <div class="events-filters">
      <div class="events-filter-group">
        <span class="events-filter-label">Estado:</span>
        <button class="filter-pill ${t.filterStatus==="todos"?"active":""}" data-filter-status="todos">Todos</button>
        <button class="filter-pill ${t.filterStatus==="proximo"?"active":""}" data-filter-status="proximo">Próximos</button>
        <button class="filter-pill ${t.filterStatus==="en_desarrollo"?"active":""}" data-filter-status="en_desarrollo">En desarrollo</button>
        <button class="filter-pill ${t.filterStatus==="finalizado"?"active":""}" data-filter-status="finalizado">Finalizados</button>
      </div>
      <div class="events-filter-group">
        <span class="events-filter-label">Categoría:</span>
        <select class="filter-select" id="category-select" aria-label="Filtrar por categoría">
          <option value="todas">Todas las categorías</option>
          ${t.categories.map(d=>`
            <option value="${d}" ${t.filterCategory===d?"selected":""}>${d}</option>
          `).join("")}
        </select>
      </div>
    </div>
  `,e.querySelectorAll(".events-toolbar__view-btn").forEach(d=>{d.addEventListener("click",()=>{const i=d.dataset.view;i!==t.currentView&&(t.currentView=i,b(),$())})}),e.querySelectorAll("[data-filter-status]").forEach(d=>{d.addEventListener("click",()=>{t.filterStatus=d.dataset.filterStatus,b(),$()})});const a=document.getElementById("category-select");a&&a.addEventListener("change",d=>{t.filterCategory=d.target.value,b(),$()})}function w(){return t.events.filter(e=>!(t.filterCategory!=="todas"&&e.categoria!==t.filterCategory||t.filterStatus!=="todos"&&y(e)!==t.filterStatus)).sort((e,n)=>new Date(e.fecha_inicio)-new Date(n.fecha_inicio))}function $(){const e=document.getElementById("events-view-container");e&&(t.currentView==="cards"?J(e):f(e),O())}function J(e){const n=w();if(n.length===0){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-state__icon">${r("calendar",48)}</div>
        <h3 class="empty-state__title">No se encontraron eventos</h3>
        <p class="empty-state__text">Prueba ajustando los filtros de categoría o estado para ver otras actividades.</p>
      </div>
    `;return}e.innerHTML=`
    <div class="events-cards-grid">
      ${n.map((a,d)=>{const i=y(a),c=H(i),l=a.imagen||"",u=l?k(l):B(600,400,a.titulo);return`
          <article class="event-card fade-in" data-event-id="${a.id}" data-delay="${d%6*100}">
            <div class="event-card__image-container">
              <img src="${u}" alt="${a.titulo}" class="event-card__img" loading="lazy">
              <div class="event-card__badge-wrapper">
                <span class="event-card__status ${c.className}">${c.label}</span>
                ${a.es_demo?'<span class="demo-badge">Demo</span>':""}
              </div>
            </div>
            <div class="event-card__body">
              <span class="event-card__category">${a.categoria}</span>
              <h2 class="event-card__title">${a.titulo}</h2>
              <p class="event-card__desc">${U(a.descripcion,130)}</p>
              <div class="event-card__meta">
                <div class="event-card__meta-item">
                  ${r("calendar",14)}
                  <span>${A(a.fecha_inicio)}</span>
                </div>
                <div class="event-card__meta-item">
                  ${r("clock",14)}
                  <span>${p(a.hora_inicio)} - ${p(a.hora_fin)}</span>
                </div>
                <div class="event-card__meta-item">
                  ${r("mapPin",14)}
                  <span>${a.lugar}</span>
                </div>
              </div>
              <button class="btn btn--primary btn--sm event-card__btn" data-event-id="${a.id}">
                Ver detalles
                ${r("arrowRight",14)}
              </button>
            </div>
          </article>
        `}).join("")}
    </div>
  `,e.querySelectorAll(".event-card__img").forEach(a=>{a.addEventListener("error",T)}),e.querySelectorAll("[data-event-id]").forEach(a=>{a.addEventListener("click",d=>{const i=parseInt(a.dataset.eventId),c=t.events.find(l=>l.id===i);c&&V(c)})})}function f(e){var L,S,M;const n=t.calendarDate.getFullYear(),a=t.calendarDate.getMonth(),d=new Date(n,a,1).getDay(),i=new Date(n,a+1,0).getDate(),c=new Date(n,a,0).getDate(),l=new Date,u=l.getFullYear()===n&&l.getMonth()===a,g=w(),v={};if(g.forEach(s=>{if(!s.fecha_inicio)return;const[o,_,m]=s.fecha_inicio.split("-").map(Number);o===n&&_-1===a&&(v[m]||(v[m]=[]),v[m].push(s))}),!t.selectedCalendarDay||t.selectedCalendarDay.month!==a||t.selectedCalendarDay.year!==n){const s=Object.keys(v)[0],o=s?parseInt(s):u?l.getDate():1;t.selectedCalendarDay={year:n,month:a,day:o}}let h="";for(let s=d-1;s>=0;s--){const o=c-s;h+=`<div class="calendar-day calendar-day--outside"><span class="calendar-day__num">${o}</span></div>`}for(let s=1;s<=i;s++){const o=!!v[s],_=u&&s===l.getDate(),m=t.selectedCalendarDay&&t.selectedCalendarDay.day===s;let C="";o&&(C=`
        <div class="calendar-day__dots">
          ${v[s].slice(0,3).map(()=>'<span class="calendar-day__dot"></span>').join("")}
        </div>
      `),h+=`
      <div class="calendar-day ${_?"calendar-day--today":""} ${m?"calendar-day--selected":""}" data-calendar-day="${s}">
        <span class="calendar-day__num">${s}</span>
        ${C}
      </div>
    `}const I=v[t.selectedCalendarDay.day]||[],j=`${t.selectedCalendarDay.day} de ${x[a]} de ${n}`;let E="";I.length===0?E=`
      <div class="empty-state" style="padding: var(--space-xl) 0;">
        <p class="empty-state__text">No hay actividades programadas para este día.</p>
      </div>
    `:E=`
      <div class="calendar-events-list">
        ${I.map(s=>(y(s),`
            <div class="calendar-event-item" data-event-id="${s.id}">
              <span class="calendar-event-item__category">${s.categoria}</span>
              <h4 class="calendar-event-item__title">${s.titulo}</h4>
              <div class="calendar-event-item__meta">
                <span>${p(s.hora_inicio)} - ${p(s.hora_fin)}</span>
                <span>•</span>
                <span>${s.lugar}</span>
              </div>
            </div>
          `)).join("")}
      </div>
    `,e.innerHTML=`
    <div class="calendar-view fade-in">
      <div class="calendar-wrapper">
        <div class="calendar-header">
          <h2 class="calendar-header__title">${x[a]} ${n}</h2>
          <div class="calendar-header__nav">
            <button class="calendar-today-btn" id="cal-today">Hoy</button>
            <button class="calendar-nav-btn" id="cal-prev" aria-label="Mes anterior">
              ${r("chevronLeft",18)}
            </button>
            <button class="calendar-nav-btn" id="cal-next" aria-label="Mes siguiente">
              ${r("chevronRight",18)}
            </button>
          </div>
        </div>

        <div class="calendar-grid">
          ${W.map(s=>`<div class="calendar-day-header">${s}</div>`).join("")}
          ${h}
        </div>
      </div>

      <div class="calendar-events-panel">
        <div class="calendar-events-panel__header">
          <span class="calendar-events-panel__subtitle">Actividades del día</span>
          <h3 class="calendar-events-panel__title">${j}</h3>
        </div>
        ${E}
      </div>
    </div>
  `,(L=document.getElementById("cal-prev"))==null||L.addEventListener("click",()=>{t.calendarDate=new Date(n,a-1,1),f(e)}),(S=document.getElementById("cal-next"))==null||S.addEventListener("click",()=>{t.calendarDate=new Date(n,a+1,1),f(e)}),(M=document.getElementById("cal-today"))==null||M.addEventListener("click",()=>{t.calendarDate=new Date,t.selectedCalendarDay={year:l.getFullYear(),month:l.getMonth(),day:l.getDate()},f(e)}),e.querySelectorAll("[data-calendar-day]").forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.dataset.calendarDay);t.selectedCalendarDay={year:n,month:a,day:o},f(e)})}),e.querySelectorAll(".calendar-event-item").forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.dataset.eventId),_=t.events.find(m=>m.id===o);_&&V(_)})})}function V(e){var v;const n=document.getElementById("event-modal"),a=document.getElementById("event-modal-panel");if(!n||!a)return;const d=y(e),i=H(d),c=e.imagen||"",l=c?k(c):B(800,400,e.titulo),u=G(e.direccion||e.lugar);a.innerHTML=`
    <button class="event-modal__close" id="modal-close" aria-label="Cerrar detalle">
      ${r("close",20)}
    </button>
    <div class="event-modal__image-wrapper">
      <img src="${l}" alt="${e.titulo}" class="event-modal__img">
    </div>
    <div class="event-modal__content">
      <div class="event-modal__header">
        <div class="event-modal__badges">
          <span class="event-card__status ${i.className}">${i.label}</span>
          ${e.es_demo?'<span class="demo-badge">Demostración</span>':""}
          <span class="event-modal__category">${e.categoria}</span>
        </div>
        <h2 class="event-modal__title">${e.titulo}</h2>
      </div>

      <div class="event-modal__meta-grid">
        <div class="event-modal__meta-box">
          ${r("calendar",20)}
          <div>
            <div class="event-modal__meta-box-label">Fecha</div>
            <div class="event-modal__meta-box-val">${A(e.fecha_inicio)}</div>
          </div>
        </div>
        <div class="event-modal__meta-box">
          ${r("clock",20)}
          <div>
            <div class="event-modal__meta-box-label">Horario</div>
            <div class="event-modal__meta-box-val">${p(e.hora_inicio)} a ${p(e.hora_fin)}</div>
          </div>
        </div>
        <div class="event-modal__meta-box" style="grid-column: 1 / -1;">
          ${r("mapPin",20)}
          <div>
            <div class="event-modal__meta-box-label">Ubicación</div>
            <div class="event-modal__meta-box-val">${e.lugar} — ${e.direccion}</div>
          </div>
        </div>
      </div>

      <p class="event-modal__desc">${e.descripcion}</p>

      ${e.informacion_adicional?`
        <div class="event-modal__extra">
          <strong>Información adicional:</strong> ${e.informacion_adicional}
        </div>
      `:""}

      <div class="event-modal__actions">
        <a href="${u}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
          ${r("mapPin",18)}
          Ver ubicación en Google Maps
          ${r("externalLink",14)}
        </a>
      </div>
    </div>
  `;const g=a.querySelector(".event-modal__img");g&&g.addEventListener("error",T),(v=document.getElementById("modal-close"))==null||v.addEventListener("click",D),n.classList.add("active"),n.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function D(){const e=document.getElementById("event-modal");e&&(e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")}function K(){const e=document.getElementById("event-modal-overlay");e&&e.addEventListener("click",D),document.addEventListener("keydown",n=>{if(n.key==="Escape"){const a=document.getElementById("event-modal");a&&a.classList.contains("active")&&D()}})}
