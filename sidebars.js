// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
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
    {
      type: 'doc',
      id: 'tutorial-basics/create-a-document',  // Cambié 'hello' por un documento válido
      label: '👋 Crear un documento',
    },
  ],
};

export default sidebars;
