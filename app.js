(function () {
  'use strict';

  var MYTHS = [
    {
      "title": "Terapia solo para “graves”",
      "claim": "Ir al psicólogo es de locos / La terapia es solo para personas graves",
      "reality": "La atención psicológica puede ayudar a cualquier persona que quiera mejorar su bienestar emocional, manejar el estrés, procesar experiencias o desarrollar nuevas habilidades. No está reservada para casos graves. Según la OMS, 1 de cada 4 personas necesitará apoyo en salud mental en algún momento de su vida.",
      "sources": "Mascayano et al. (2016); Ministerio de Salud de Argentina (2018); Hospital Escuela de Salud Mental (2025)"
    },
    {
      "title": "Voluntad y salud mental",
      "claim": "Los problemas de salud mental son debilidad de carácter o falta de fuerza de voluntad",
      "reality": "La depresión, la ansiedad y otras condiciones tienen causas biológicas, psicológicas y sociales. No son fallas morales ni defectos de personalidad. Decir “échale ganas” no basta: el apoyo profesional y el acompañamiento pueden marcar la diferencia, y creer este mito genera culpa y vergüenza que retrasan pedir ayuda.",
      "sources": "Universidad Veracruzana (2018); UNICEF (2023); El Salvador.com (2026)"
    },
    {
      "title": "Hombres y emociones",
      "claim": "Los hombres no deben mostrar emociones; pedir ayuda es de débiles",
      "reality": "Todas las personas tienen emociones, sin importar su género. Expresar lo que se siente y pedir ayuda es una muestra de autocuidado, no de debilidad. Callar siempre lo que se siente puede dificultar la comunicación y retrasar el apoyo que alguien necesita.",
      "sources": "Workplace Options (2024); JMU Latinos Health (2023); SanaMetx (2025)"
    },
    {
      "title": "Pedir ayuda es egoísta",
      "claim": "Pedir ayuda psicológica es egoísta o fallarle a la familia",
      "reality": "Cuidar tu salud mental no es egoísmo: también te permite estar mejor con las personas que quieres. Pedir apoyo es una forma de responsabilidad contigo y con tu entorno, especialmente si cuidas de otras personas.",
      "sources": "ReachLink (2026); JMU Latinos Health (2024); Postpartum Support International (2025)"
    },
    {
      "title": "Solo en familia",
      "claim": "Los problemas de salud mental son privados y solo se hablan en familia",
      "reality": "La familia puede ser un gran apoyo, pero acompañar no es lo mismo que tratar. Las condiciones de salud mental pueden requerir atención profesional. Hablar con la familia y buscar ayuda especializada se complementan.",
      "sources": "JMU Latinos Health (2023); ReachLink (2026); Center for Health Journalism"
    },
    {
      "title": "Trabajo",
      "claim": "Las personas con trastornos mentales no pueden trabajar",
      "reality": "Con los apoyos adecuados, muchas personas con condiciones de salud mental trabajan y llevan vidas plenas. Un diagnóstico no define la capacidad de una persona. La discriminación y la falta de ajustes razonables son una barrera mayor que la condición misma.",
      "sources": "SOM360; Ministerio de Salud de Argentina (2018); Mascayano Tapia (2015)"
    },
    {
      "title": "Fe y depresión",
      "claim": "La depresión es falta de fe, castigo divino o un problema espiritual",
      "reality": "La depresión es una condición de salud con componentes biológicos, psicológicos y sociales; no es falta de fe ni un castigo. La fe y la espiritualidad pueden ser una fuente valiosa de apoyo, pero conviven con la atención profesional, no la reemplazan. Pensar que es un castigo puede sumar culpa y retrasar el tratamiento.",
      "sources": "Medical News Today (2021); Step Up for Mental Health (2023); GMHAN"
    },
    {
      "title": "Duración y costo",
      "claim": "La terapia dura años y cuesta una fortuna",
      "reality": "Muchas terapias actuales tienen una duración definida, que suele ir de unas pocas semanas a algunos meses según cada caso. Además, existen opciones públicas, comunitarias, universitarias y en línea de bajo costo o gratuitas. Consulta qué servicios hay en tu localidad.",
      "sources": "Origen.pe (2026); Mipsi México (2024); Psicología y Mente (2017)"
    },
    {
      "title": "Terapia en línea",
      "claim": "La terapia en línea no funciona o no es terapia de verdad",
      "reality": "La terapia también puede hacerse a través de una pantalla. Para muchas personas y situaciones puede ser una alternativa útil, siempre que la brinde un profesional calificado, en un entorno adecuado y con una modalidad apropiada a sus necesidades.",
      "sources": "Mipsi México (2024)"
    },
    {
      "title": "Recuperación",
      "claim": "Los trastornos mentales son incurables; la persona nunca mejorará",
      "reality": "La recuperación es posible. Con tratamiento, apoyo y acompañamiento adecuados, muchas personas mejoran, logran estabilidad y viven bien. Un diagnóstico no es una sentencia ni define el futuro de nadie.",
      "sources": "SOM360; Ministerio de Salud de Argentina (2018)"
    }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var grid = $('grid');
  var dialog = $('dialog');
  var explored = {};   // solo en memoria: se reinicia al recargar
  var cards = [];
  var current = -1;

  function updateCount() {
    var n = Object.keys(explored).length;
    $('explored').textContent = 'Has explorado ' + n + ' de ' + MYTHS.length;
  }

  MYTHS.forEach(function (m, i) {
    var li = document.createElement('li');
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'mcard';
    b.innerHTML =
      '<span class="mcard-top"><span class="myth-num"></span><span class="check" aria-hidden="true">✓</span></span>' +
      '<span class="mcard-title"></span>' +
      '<span class="mcard-claim"></span>' +
      '<span class="visually-hidden read-label"></span>';
    b.querySelector('.myth-num').textContent = 'Mito ' + (i + 1);
    b.querySelector('.mcard-title').textContent = m.title;
    b.querySelector('.mcard-claim').textContent = '“' + m.claim + '”';
    b.addEventListener('click', function () { openCard(i, b); });
    li.appendChild(b);
    grid.appendChild(li);
    cards.push(b);
  });

  function openCard(i, trigger) {
    var m = MYTHS[i];
    current = i;
    $('d-num').textContent = 'Mito ' + (i + 1);
    $('d-title').textContent = m.title;
    $('d-claim').textContent = '“' + m.claim + '”';
    $('d-reality').textContent = m.reality;
    $('d-sources').textContent = m.sources;
    dialog.scrollTop = 0;
    dialog.showModal();
    markRead(i);
  }

  function markRead(i) {
    explored[i] = true;
    cards[i].classList.add('read');
    cards[i].querySelector('.read-label').textContent = ' (leído)';
    updateCount();
  }

  function closeDialog() { if (dialog.open) dialog.close(); }

  dialog.addEventListener('close', function () {
    if (current >= 0) cards[current].focus();
  });
  $('d-close').addEventListener('click', closeDialog);
  // Clic fuera de la tarjeta cierra el diálogo
  dialog.addEventListener('click', function (e) { if (e.target === dialog) closeDialog(); });

  updateCount();
})();
