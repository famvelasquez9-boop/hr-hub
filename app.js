(function () {
  'use strict';

  var MYTHS = [
    {
      title: 'Exagerar el malestar',
      claim: 'Hablar de salud mental es exagerar',
      reality: 'Hablar de salud mental permite reconocer lo que una persona está viviendo y buscar apoyo oportunamente. Expresar malestar no significa exagerar ni llamar la atención. La salud mental forma parte del bienestar general, igual que la salud física.'
    },
    {
      title: 'Depresión y voluntad',
      claim: 'La depresión es falta de fuerza de voluntad',
      reality: 'La depresión no se resuelve simplemente esforzándose más. Puede afectar el estado de ánimo, la energía, el sueño, la concentración y la capacidad de realizar actividades cotidianas. El apoyo profesional, el acompañamiento y el tratamiento adecuado pueden ser importantes.'
    },
    {
      title: 'Peligrosidad',
      claim: 'Las personas con problemas de salud mental son peligrosas',
      reality: 'Tener una condición de salud mental no convierte automáticamente a una persona en peligrosa. Esta asociación es un estereotipo que genera miedo y discriminación. Las personas con problemas de salud mental son diversas y no deben definirse por un diagnóstico.'
    },
    {
      title: 'Fe y atención profesional',
      claim: 'La fe y la atención profesional no pueden coexistir',
      reality: 'Las creencias espirituales o religiosas pueden ser una fuente de apoyo para algunas personas. Al mismo tiempo, la atención psicológica o psiquiátrica puede ofrecer herramientas profesionales. Ambos tipos de apoyo pueden coexistir de manera respetuosa.'
    },
    {
      title: 'Emociones y género',
      claim: 'Los hombres no deben mostrar emociones',
      reality: 'Todas las personas tienen emociones, independientemente de su género. Expresar lo que se siente y pedir ayuda no es una debilidad. Ocultar constantemente las emociones puede dificultar la comunicación y retrasar la búsqueda de apoyo.'
    },
    {
      title: 'Medicación',
      claim: 'Tomar medicación significa que una persona está muy mal',
      reality: 'La medicación puede formar parte del tratamiento para algunas condiciones de salud mental, pero no es necesaria para todas las personas. Su uso debe ser evaluado, indicado y supervisado por un profesional de la salud. Nunca se debe iniciar, suspender o modificar un medicamento sin orientación profesional.'
    },
    {
      title: 'TDAH',
      claim: 'El TDAH solo significa distraerse',
      reality: 'El TDAH puede influir en la atención, la organización, el control de impulsos, la gestión del tiempo y la regulación de la energía. No es simplemente falta de interés o disciplina. Sus manifestaciones pueden variar entre personas y etapas de la vida.'
    },
    {
      title: 'Depresión posparto',
      claim: 'La depresión posparto es exageración',
      reality: 'Convertirse en madre no significa sentirse bien todo el tiempo. La depresión posparto puede incluir tristeza persistente, agotamiento, ansiedad, desconexión emocional o dificultad para realizar actividades cotidianas. Merece comprensión, apoyo y atención profesional.'
    },
    {
      title: 'Adicciones',
      claim: 'Las adicciones son únicamente falta de carácter',
      reality: 'Las adicciones son problemas complejos que pueden involucrar factores biológicos, psicológicos, sociales y ambientales. El estigma y las etiquetas pueden dificultar que una persona busque ayuda. La recuperación puede requerir apoyo profesional y una red de acompañamiento.'
    },
    {
      title: 'Terapia en línea',
      claim: 'La terapia en línea no funciona',
      reality: 'La terapia también puede realizarse a través de una pantalla. La atención en línea puede ser una alternativa útil para algunas personas, siempre que se realice con un profesional calificado, en un entorno adecuado y mediante una modalidad apropiada para sus necesidades.'
    }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var main = $('main');
  var screens = { intro: $('intro'), card: $('card-screen'), end: $('end') };
  var index = 0;
  var revealed = {};

  function show(name) {
    Object.keys(screens).forEach(function (k) { screens[k].hidden = k !== name; });
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  function render() {
    var m = MYTHS[index], total = MYTHS.length, n = index + 1;
    $('myth-num').textContent = 'Mito ' + n;
    $('myth-title').textContent = m.title;
    $('myth-claim').textContent = '“' + m.claim + '”';
    $('reality-text').textContent = m.reality;
    $('progress-text').textContent = 'Mito ' + n + ' de ' + total;
    $('bar-fill').style.width = (n / total * 100) + '%';
    var bar = $('bar');
    bar.setAttribute('aria-valuenow', n);
    bar.setAttribute('aria-valuetext', 'Mito ' + n + ' de ' + total);
    setRevealed(!!revealed[index]);
    $('prev').disabled = index === 0;
    $('next').textContent = index === total - 1 ? 'Finalizar' : 'Siguiente';
  }

  function setRevealed(on) {
    $('reality').hidden = !on;
    var b = $('reveal');
    b.hidden = on;
    b.setAttribute('aria-expanded', on ? 'true' : 'false');
  }

  function go(i) {
    index = i;
    render();
    window.scrollTo(0, 0);
  }

  $('start').addEventListener('click', function () { index = 0; render(); show('card'); });
  $('reveal').addEventListener('click', function () {
    revealed[index] = true;
    setRevealed(true);
    $('reality').setAttribute('tabindex', '-1');
    $('reality').focus({ preventScroll: true });
    $('reality').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
  $('prev').addEventListener('click', function () { if (index > 0) go(index - 1); });
  $('next').addEventListener('click', function () {
    if (index < MYTHS.length - 1) go(index + 1); else show('end');
  });
  $('back').addEventListener('click', function () { index = MYTHS.length - 1; render(); show('card'); });
  $('restart').addEventListener('click', function () { revealed = {}; index = 0; render(); show('intro'); });

  document.addEventListener('keydown', function (e) {
    if (screens.card.hidden) return;
    if (e.key === 'ArrowLeft' && index > 0) go(index - 1);
    else if (e.key === 'ArrowRight' && index < MYTHS.length - 1) go(index + 1);
  });
})();
