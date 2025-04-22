import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Implementación Sencilla',
    imgSrc: '/img/seguri.png',
    description: (
      <>
        El gestor de contraseñas se puede integrar fácilmente en sistemas existentes, 
        facilitando una implementación rápida y sin complicaciones.
      </>
    ),
  },
  {
    title: 'Enfoque en la Seguridad',
    imgSrc: '/img/security.png',
    description: (
      <>
        Protege tus credenciales con cifrado avanzado y buenas prácticas.
        El manual te guía paso a paso para una configuración segura.
      </>
    ),
  },
  {
    title: 'Uso Práctico y Eficiente',
    imgSrc: '/img/SeguriP.jpg',
    description: (
      <>
        Aprende cómo almacenar, recuperar y gestionar contraseñas de forma segura
        desde cualquier dispositivo, optimizando tu flujo de trabajo diario.
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
