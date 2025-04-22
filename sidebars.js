const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '⚙️ Tutorial Básico',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
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
      id: 'intro',  // Este documento sí existe
      label: '📘 Introducción',
    },

  ],
};

export default sidebars;
