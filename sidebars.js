const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Introduccion/inspector-introduccion',
      label: '🔍 Introducción',      
    },
    {
      type: 'category',
      label: '📱 Modo de Dispositivo',
      items: [
        'ModoDispositivo/simulacion-dispositivos'
      ],
    },
    {
      type: 'category',
      label: '🧱 Sección Elementos',
      items: [
        'Seccionelementos/elements-introduccion',
        'Seccionelementos/elements-edicion-estilos'
      ],
    },
    {
      type: 'category',
      label: '💻 Sección Consola',
      items: [
        'SeccionConsola/introduccion-console',
        'SeccionConsola/usos-avanzados-console'
      ],
    },
    {
      type: 'category',
      label: '📂 Sección Source',
      items: [
        'Seccionsource/introduccion-sources',
        'Seccionsource/estructura-fuentes',
        'Seccionsource/breakpoints-depuracion',
        'Seccionsource/watch-callstack-scope'
      ],
    },
    {
      type: 'category',
      label: '🌐 Sección Network',
      items: [
        'SeccionNetwork/introduccion-network',
        'SeccionNetwork/solicitudes-detalle',
        'SeccionNetwork/control-carga'
      ],
    },
    {
      type: 'category',
      label: '⚙️ Sección Performance',
      items: [
        'SeccionPerformance/introduccion-performance',
        'SeccionPerformance/analisis-rendimiento',
        'SeccionPerformance/uso-grabaciones'
      ],
    },
    {
      type: 'category',
      label: '🧠 Sección Memory',
      items: [
        'SeccionMemory/introduccion-memory',
        'SeccionMemory/tipos-perfilado',
        'SeccionMemory/deteccion-fugas'
      ],
    },
    {
      type: 'category',
      label: '📦 Sección Application',
      items: [
        'SeccionAplication/introduccion-application',
        'SeccionAplication/almacenamiento-application'
      ],
    },
    {
      type: 'category',
      label: '🔐 Privacidad y Seguridad',
      items: [
        'PrivacySecurity/introduccion-privacidad',
        'PrivacySecurity/politicas-cookies-seguridad'
      ],
    },
    {
      type: 'category',
      label: '🌟 Sección Lighthouse',
      items: [
        'Lighthouse/lighthouse-introduccion',
        'Lighthouse/lighthouse-categorias'
      ],
    },
    {
      type: 'category',
      label: '🎬 Sección Recorder',
      items: [
        'Recorder/recorder-introduccion',
        'Recorder/recorder-uso'
      ],
    },
  ],
};

export default sidebars;