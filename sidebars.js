const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Introduccion/inspector-introduccion',
      label: 'Introduccion',      
    },
    {
      type: 'category',
      label: 'Modo de Dispositivo',
      items: [
        'ModoDispositivo/simulacion-dispositivos'
      ],
    },
    {
      type: 'category',
      label: 'Seccion elementos',
      items: [
        'Seccionelementos/elements-introduccion',
        'Seccionelementos/elements-edicion-estilos'
      ],
    },
    {
      type: 'category',
      label: '🚀 Tutorial Avanzado',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
    {
      type: 'doc',
      id: 'intros',  // Este documento sí existe
      label: '📘 Introducción',
    },
  ],
};

export default sidebars;
