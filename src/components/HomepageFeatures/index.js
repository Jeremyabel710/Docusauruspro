import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explora el DOM',
    imgSrc: '/img/devtools-dom-tree.png', // imagen sugerida: vista del árbol DOM abierto en DevTools
    description: (
      <>
        Navega y modifica la estructura HTML directamente desde la pestaña <strong>Elements</strong>.
        Ideal para depurar contenido o probar cambios en tiempo real.
      </>
    ),
  },
  {
    title: 'Edita Estilos al Instante',
    imgSrc: '/img/devtools-style-panel.png', // imagen sugerida: edición de CSS en vivo desde el panel derecho
    description: (
      <>
        Ajusta colores, márgenes, fuentes y más desde el panel de estilos. 
        Visualiza de inmediato cómo afectan tus cambios al diseño de la página.
      </>
    ),
  },
  {
    title: 'Inspección Visual Intuitiva',
    imgSrc: '/img/devtools-element-highlight.png', // imagen sugerida: resaltado visual del elemento en la página al inspeccionar
    description: (
      <>
        Al pasar el cursor por un nodo del DOM, verás su posición, tamaño y estilos aplicados. 
        Una herramienta clave para comprender la maquetación de cualquier sitio.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <section className={clsx('col col--12', styles.feature)}>
      <div className={clsx(styles['feature-content'])}>
        <div className={clsx(styles['feature-text'])}>
          <Heading as="h2">{title}</Heading>
          <p>{description}</p>
        </div>
        <div className={clsx(styles['feature-img'])}>
          <img src={imgSrc} alt={title} />
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles['features']}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
