import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Global Grand Challenges',
    image: require('@site/static/img/grand_challenges.png').default,
    description: (
      <>
        Tackle the world's most wicked problems, addressing
        them through an iterative driven pedagogical model
        validated over 10 years.
      </>
    ),
  },
  {
    title: 'Build a Community of Innovators',
    image: require('@site/static/img/community.png').default,
    description: (
      <>
        Gather young talented youth to work together on local 
        challenges, developing skills and creating smart
        solutions inside their own communities.
      </>
    ),
  },
  {
    title: 'A Gamified and Story-driven Platform',
    image: require('@site/static/img/gamification.png').default,
    description: (
      <>
        The youth will learn with the unique combination of
        graphic novels, game mechanics, branching scenarios,
        threat levels and AI tutoring.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img role="img" src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
