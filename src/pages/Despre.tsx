import { historyEras } from '../content/istoric';
import { SectionHeading } from '../components/ui/SectionHeading';
import { OakCorner } from '../components/ui/OakCorner';
import { VineCorner } from '../components/ui/VineCorner';
import { formatDateRo } from '../lib/formatDate';
import styles from './pages.module.css';

export function Despre() {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.ornamentedHero}>
        <OakCorner className={`${styles.corner} ${styles.cornerTL}`} />
        <VineCorner className={`${styles.corner} ${styles.cornerTR}`} />
        <SectionHeading
          eyebrow="Istoric"
          title="Despre filială"
          lede="Trei decenii de reprezentare profesională a arhitecților din Sud-Vestul Olteniei, povestite prin conferințele care i-au marcat conducerea."
        />
      </div>

      <div className={styles.timeline}>
        {historyEras.map((era) => (
          <article className={styles.era} key={era.id}>
            <p className={styles.eraConferenceLabel}>{era.conferenceLabel}</p>
            <p className={styles.eraYear}>{era.year}</p>
            <p className={styles.eraLocation}>
              {formatDateRo(era.date)} · {era.locationDetail}
            </p>
            <p className={styles.eraDescription}>{era.description}</p>
            {era.leadership.length > 0 && (
              <>
                <p className={styles.leadershipHeading}>Structura de conducere</p>
                <ul className={styles.leadership}>
                  {era.leadership.map((entry) => (
                    <li key={`${era.id}-${entry.role}-${entry.name}`}>
                      <span className={styles.leadershipRole}>{entry.role}</span>
                      <span>{entry.name}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {era.isPlaceholder && (
              <p className={styles.notice}>
                Conținut în curs de completare: verificăm materialul original pentru această conferință.
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
