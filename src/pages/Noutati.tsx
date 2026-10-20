import { newsItems } from '../content/news';
import { SectionHeading } from '../components/ui/SectionHeading';
import { EmptyState } from '../components/ui/EmptyState';
import { OakCorner } from '../components/ui/OakCorner';
import { VineCorner } from '../components/ui/VineCorner';
import styles from './pages.module.css';

export function Noutati() {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.ornamentedHero}>
        <OakCorner className={`${styles.corner} ${styles.cornerTL}`} />
        <VineCorner className={`${styles.corner} ${styles.cornerTR}`} />
        <SectionHeading eyebrow="Noutăți" title="Ultimele noutăți" />
      </div>

      {newsItems.length === 0 ? (
        <EmptyState
          title="În curând"
          message="Filiala pregătește primele noutăți publice. Reveniți în curând sau urmăriți-ne prin email."
        />
      ) : (
        <div className={styles.cardGrid}>
          {newsItems.map((item) => (
            <article className={styles.card} key={item.id}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              {item.summary && <p className={styles.cardSummary}>{item.summary}</p>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
