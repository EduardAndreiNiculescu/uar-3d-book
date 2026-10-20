import { Link } from 'react-router-dom';
import { exhibitions } from '../../content/exhibitions';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { OakCorner } from '../../components/ui/OakCorner';
import { VineCorner } from '../../components/ui/VineCorner';
import { formatDateRo } from '../../lib/formatDate';
import styles from '../pages.module.css';

export function ExpozitiiIndex() {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.ornamentedHero}>
        <OakCorner className={`${styles.corner} ${styles.cornerTL}`} />
        <VineCorner className={`${styles.corner} ${styles.cornerTR}`} />
        <SectionHeading
          eyebrow="Patrimoniu"
          title="Expoziții"
          lede="Proiectele culturale ale filialei, de la salvarea culelor oltenești până la marii arhitecți ai lumii."
        />
      </div>

      <div className={styles.featureList}>
        {exhibitions.map((exhibition, index) => (
          <Link className={styles.featureRow} to={`/expozitii/${exhibition.id}`} key={exhibition.id}>
            <span className={styles.featureIndex}>{String(index + 1).padStart(2, '0')}</span>
            <div className={styles.featureBody}>
              <p className={styles.cardEyebrow}>{formatDateRo(exhibition.period.start)}</p>
              <h3 className={styles.featureTitle}>{exhibition.title}</h3>
              {exhibition.summary && <p className={styles.cardSummary}>{exhibition.summary}</p>}
            </div>
            <span className={styles.featureArrow} aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
