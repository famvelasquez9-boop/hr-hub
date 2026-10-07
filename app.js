(function () {
  'use strict';

  var MYTHS = [
    {
      "title": "Terapia solo para “graves”",
      "claim": "Ir al psicólogo es de locos / La terapia es solo para personas graves",
      "reality": "La atención psicológica puede ayudar a cualquier persona que quiera mejorar su bienestar emocional, manejar el estrés, procesar experiencias o desarrollar nuevas habilidades. No está reservada para casos graves. Según la OMS, 1 de cada 4 personas necesitará apoyo en salud mental en algún momento de su vida.",
      "why": [
        "Se asocia la psicología con la “locura”",
        "Hay poca educación en salud mental",
        "Es común resolver todo dentro de la familia"
      ],
      "sources": "Mascayano et al. (2016); Ministerio de Salud de Argentina (2018); Hospital Escuela de Salud Mental (2025)"
    },
    {
      "title": "Voluntad y salud mental",
      "claim": "Los problemas de salud mental son debilidad de carácter o falta de fuerza de voluntad",
      "reality": "La depresión, la ansiedad y otras condiciones tienen causas biológicas, psicológicas y sociales. No son fallas morales ni defectos de personalidad. Decir “échale ganas” no basta: el apoyo profesional y el acompañamiento pueden marcar la diferencia, y creer este mito genera culpa y vergüenza que retrasan pedir ayuda.",
      "why": [
        "Se valora “aguantar” como virtud",
        "Frases como “tú puedes con esto” minimizan el malestar",
        "Se desconoce que son condiciones de salud"
      ],
      "sources": "Universidad Veracruzana (2018); UNICEF (2023); El Salvador.com (2026)"
    },
    {
      "title": "Peligrosidad",
      "claim": "Las personas con trastornos mentales son peligrosas o violentas",
      "reality": "Tener una condición de salud mental no convierte a nadie en una persona peligrosa. La mayoría de las personas con estas condiciones no son violentas y, de hecho, es más probable que sean víctimas de violencia. Este estereotipo genera miedo, discriminación y aislamiento.",
      "why": [
        "Los medios suelen presentar casos aislados de forma sensacionalista",
        "Se asocia históricamente “locura” con peligro",
        "Hay poco contacto con personas en tratamiento"
      ],
      "sources": "Mascayano Tapia (2015); Revista Colombiana de Psiquiatría (2018); Ministerio de Salud de Argentina (2018)"
    },
    {
      "title": "Fe y depresión",
      "claim": "La depresión es falta de fe, castigo divino o un problema espiritual",
      "reality": "La depresión es una condición de salud con componentes biológicos, psicológicos y sociales; no es falta de fe ni un castigo. La fe y la espiritualidad pueden ser una fuente valiosa de apoyo, pero conviven con la atención profesional, no la reemplazan. Pensar que es un castigo puede sumar culpa y retrasar el tratamiento.",
      "why": [
        "Hay interpretaciones que ligan el sufrimiento con la falta de fe",
        "Se suele acudir primero a líderes religiosos",
        "Hay poca conexión entre servicios de salud y comunidades de fe"
      ],
      "sources": "Medical News Today (2021); Step Up for Mental Health (2023); GMHAN"
    },
    {
      "title": "Hombres y emociones",
      "claim": "Los hombres no deben mostrar emociones; pedir ayuda es de débiles",
      "reality": "Todas las personas tienen emociones, sin importar su género. Expresar lo que se siente y pedir ayuda es una muestra de autocuidado, no de debilidad. Callar siempre lo que se siente puede dificultar la comunicación y retrasar el apoyo que alguien necesita.",
      "why": [
        "Normas de género que asocian vulnerabilidad con debilidad",
        "Se enseña a “aguantar” desde la familia",
        "Se estigmatiza a los hombres que buscan terapia"
      ],
      "sources": "Workplace Options (2024); JMU Latinos Health (2023); SanaMetx (2025)"
    },
    {
      "title": "Medicación",
      "claim": "Los medicamentos psiquiátricos son adictivos y te cambian la personalidad",
      "reality": "No todos los medicamentos son iguales: la mayoría de los psicofármacos no generan adicción, y solo algunos (como ciertos ansiolíticos) pueden causar dependencia si se usan de forma inadecuada. Su propósito es aliviar síntomas, no cambiar quién eres. Un profesional debe evaluar, indicar y supervisar siempre su uso: nunca se debe iniciar, suspender o modificar un medicamento sin orientación profesional.",
      "why": [
        "Se confunden distintas clases de medicamentos",
        "Hay experiencias de uso inadecuado o mal acompañado",
        "Circula desinformación en redes sociales"
      ],
      "sources": "CADE (2025); Centro Alianza Chile (2021); Salud Mental Perinatal Panamá"
    },
    {
      "title": "Duración y costo",
      "claim": "La terapia dura años y cuesta una fortuna",
      "reality": "Muchas terapias actuales tienen una duración definida, que suele ir de unas pocas semanas a algunos meses según cada caso. Además, existen opciones públicas, comunitarias, universitarias y en línea de bajo costo o gratuitas. Consulta qué servicios hay en tu localidad.",
      "why": [
        "Se piensa en terapias de muy larga duración",
        "Se desconocen las opciones accesibles",
        "Se percibe la psicología como un servicio para pocos"
      ],
      "sources": "Origen.pe (2026); Mipsi México (2024); Psicología y Mente (2017)"
    },
    {
      "title": "Solo en familia",
      "claim": "Los problemas de salud mental son privados y solo se hablan en familia",
      "reality": "La familia puede ser un gran apoyo, pero acompañar no es lo mismo que tratar. Las condiciones de salud mental pueden requerir atención profesional. Hablar con la familia y buscar ayuda especializada se complementan.",
      "why": [
        "Gran valor de la lealtad y la privacidad familiar",
        "Desconfianza hacia instituciones de salud",
        "Se piensa que “los problemas se quedan en casa”"
      ],
      "sources": "JMU Latinos Health (2023); ReachLink (2026); Center for Health Journalism"
    },
    {
      "title": "Psicosis y posesión",
      "claim": "La esquizofrenia es posesión demoníaca o una enfermedad espiritual",
      "reality": "La esquizofrenia es una condición de salud mental que requiere atención médica. Algunas experiencias pueden tener contenido religioso, pero eso no las convierte en un asunto solo espiritual. La atención profesional ayuda, y las prácticas de exorcismo pueden causar daño y retrasar el tratamiento.",
      "why": [
        "Hay una larga tradición de interpretar la psicosis como posesión",
        "Hay poco acceso a servicios en zonas rurales",
        "Algunos síntomas pueden incluir contenido religioso"
      ],
      "sources": "ReachLink (2026); Noctumbria Blog"
    },
    {
      "title": "TDAH",
      "claim": "El TDAH no existe, es una excusa o mala crianza",
      "reality": "El TDAH es una condición del neurodesarrollo con bases genéticas y neurobiológicas. No es causada por mala crianza ni por falta de disciplina. No se trata de distraerse de vez en cuando: es un patrón persistente que afecta la atención, la organización, el control de impulsos y la gestión del tiempo, y varía entre personas y etapas de la vida.",
      "why": [
        "Se piensa que “todos nos distraemos a veces”",
        "Se habla de “moda diagnóstica”",
        "Se culpa a niñas, niños y madres o padres"
      ],
      "sources": "TDAH Latinoamérica (2026)"
    },
    {
      "title": "Trabajo",
      "claim": "Las personas con trastornos mentales no pueden trabajar",
      "reality": "Con los apoyos adecuados, muchas personas con condiciones de salud mental trabajan y llevan vidas plenas. Un diagnóstico no define la capacidad de una persona. La discriminación y la falta de ajustes razonables son una barrera mayor que la condición misma.",
      "why": [
        "Estereotipos de incapacidad",
        "Faltan políticas de inclusión laboral",
        "Se generaliza a partir de personas sin tratamiento"
      ],
      "sources": "SOM360; Ministerio de Salud de Argentina (2018); Mascayano Tapia (2015)"
    },
    {
      "title": "Vejez y depresión",
      "claim": "La depresión en adultos mayores es normal, es parte de envejecer",
      "reality": "La depresión no es una consecuencia normal del envejecimiento. Es una condición tratable que merece atención a cualquier edad. Asumir que “es normal” hace que muchas personas mayores no reciban el apoyo que necesitan.",
      "why": [
        "Prejuicios por edad",
        "Se confunde la tristeza por una pérdida con depresión",
        "Falta formación en salud mental en la vejez"
      ],
      "sources": "OMS (2026); OPS (2023); UNAM (2022)"
    },
    {
      "title": "Depresión posparto",
      "claim": "La depresión posparto es exageración; las madres deben ser fuertes",
      "reality": "Convertirse en madre no significa sentirse bien todo el tiempo. La depresión posparto puede incluir tristeza persistente, agotamiento, ansiedad, desconexión emocional o dificultad para realizar actividades cotidianas. No es debilidad ni una falla materna: merece comprensión, apoyo y atención profesional.",
      "why": [
        "Se espera que la maternidad sea siempre plenitud",
        "Se minimizan los síntomas",
        "Da vergüenza admitir dificultades"
      ],
      "sources": "Postpartum Support International (2025); Wired (2026); Carmona.mx (2026)"
    },
    {
      "title": "Adicciones",
      "claim": "Las adicciones son vicio, falta de voluntad o pecado",
      "reality": "Las adicciones son problemas complejos que involucran factores biológicos, psicológicos, sociales y ambientales. No son una falla moral. El estigma y las etiquetas dificultan pedir ayuda. La recuperación puede requerir apoyo profesional y una red de acompañamiento.",
      "why": [
        "Se interpretan como un tema moral o religioso",
        "Hay estigma hacia el consumo de sustancias",
        "Se asocian con criminalidad"
      ],
      "sources": "Mascayano Tapia (2015); Instituto NOA (2024); Centro Terapéutico Sur de Chile"
    },
    {
      "title": "Juventud “exitosa”",
      "claim": "Los adolescentes con buenas notas y amigos no pueden tener depresión",
      "reality": "La depresión y la ansiedad pueden afectar a cualquier adolescente, sin importar sus notas o su vida social. Que por fuera todo parezca estar bien no significa que por dentro lo esté. Escuchar y creer su malestar permite apoyarles a tiempo.",
      "why": [
        "Se piensa que el malestar siempre se nota",
        "Se minimiza el malestar de quienes “lo tienen todo”",
        "Se cree que “no tienen por qué estar tristes”"
      ],
      "sources": "UNICEF (2023); UNICEF El Salvador (2023)"
    },
    {
      "title": "Redes sociales",
      "claim": "Las redes sociales causan la depresión de los jóvenes",
      "reality": "La relación es compleja. El uso excesivo se asocia con mayor riesgo en algunas personas, pero el tipo de uso importa y las redes no explican por sí solas el malestar. Culpar solo a las redes puede ocultar otras causas, como la violencia, la presión o la falta de apoyo.",
      "why": [
        "Se buscan explicaciones simples a problemas complejos",
        "Titulares alarmistas",
        "Se confunde asociación con causa"
      ],
      "sources": "SciELO Venezuela (2025); Psique Académica (2025); Milenio (2026)"
    },
    {
      "title": "Autismo",
      "claim": "El autismo es causado por vacunas o por mala crianza",
      "reality": "El autismo es una condición del neurodesarrollo con bases genéticas. No lo causan las vacunas ni la forma de criar. Este mito culpa injustamente a las familias y puede alejar de la vacunación y del apoyo adecuado.",
      "why": [
        "Circula desinformación en redes",
        "Hay poca educación sobre neurodiversidad",
        "Se buscan causas simples"
      ],
      "sources": "Mito de circulación global; el documento fuente señala que hay poca investigación específica en América Latina"
    },
    {
      "title": "Terapia en línea",
      "claim": "La terapia en línea no funciona o no es terapia de verdad",
      "reality": "La terapia también puede hacerse a través de una pantalla. Para muchas personas y situaciones puede ser una alternativa útil, siempre que la brinde un profesional calificado, en un entorno adecuado y con una modalidad apropiada a sus necesidades.",
      "why": [
        "Se prefiere el contacto cara a cara",
        "Hay poca familiaridad con la tecnología",
        "Existen barreras reales como la conexión o la privacidad"
      ],
      "sources": "Mipsi México (2024)"
    },
    {
      "title": "Pedir ayuda es egoísta",
      "claim": "Pedir ayuda psicológica es egoísta o fallarle a la familia",
      "reality": "Cuidar tu salud mental no es egoísmo: también te permite estar mejor con las personas que quieres. Pedir apoyo es una forma de responsabilidad contigo y con tu entorno, especialmente si cuidas de otras personas.",
      "why": [
        "Ideal de sacrificio constante, sobre todo en mujeres y cuidadores",
        "Prioridad absoluta a la familia sobre lo individual",
        "Temor a ser una carga"
      ],
      "sources": "ReachLink (2026); JMU Latinos Health (2024); Postpartum Support International (2025)"
    },
    {
      "title": "Recuperación",
      "claim": "Los trastornos mentales son incurables; la persona nunca mejorará",
      "reality": "La recuperación es posible. Con tratamiento, apoyo y acompañamiento adecuados, muchas personas mejoran, logran estabilidad y viven bien. Un diagnóstico no es una sentencia ni define el futuro de nadie.",
      "why": [
        "Se ven casos de personas sin atención adecuada",
        "Hay poca información sobre cómo evolucionan estas condiciones",
        "Se ve el diagnóstico como una sentencia"
      ],
      "sources": "SOM360; Ministerio de Salud de Argentina (2018)"
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
    var why = $('why-list');
    why.textContent = '';
    m.why.forEach(function (w) { var li = document.createElement('li'); li.textContent = w; why.appendChild(li); });
    $('sources-text').textContent = m.sources;
    $('more').open = false;
    $('progress-text').textContent = 'Mito ' + n + ' de ' + total;
    $('bar-fill').style.width = (n / total * 100) + '%';
    var bar = $('bar');
    bar.setAttribute('aria-valuemax', total);
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
