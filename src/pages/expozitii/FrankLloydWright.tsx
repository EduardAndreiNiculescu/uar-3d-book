import { SectionHeading } from '../../components/ui/SectionHeading';
import { OakCorner } from '../../components/ui/OakCorner';
import { VineCorner } from '../../components/ui/VineCorner';
import styles from '../pages.module.css';

export function FrankLloydWright() {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.ornamentedHero}>
        <OakCorner className={`${styles.corner} ${styles.cornerTL}`} />
        <VineCorner className={`${styles.corner} ${styles.cornerTR}`} />
        <SectionHeading eyebrow="21 iunie – 3 iulie 2013" title="Expoziția Frank Lloyd Wright" />
      </div>

      <div className={styles.prose}>
        <p>
          În 2013, la ROCAD, a fost prezentată expoziția arhitectului american Frank Lloyd Wright, vizibilă atunci
          doar celor aproximativ 250 de participanți la eveniment.
        </p>
        <p>
          Ca participantă la ROCAD 2013 cu propria expoziție „S.O.S. Culele României", și datorită înțelegerii
          deosebite a președintelui UAUIM București, filiala noastră euroregională Sud-Vest Oltenia a găzduit ulterior
          această expoziție la propriul sediu.
        </p>
        <p className={styles.notice}>
          Materialele originale ale expoziției (prezentarea arhitectului și fotografiile de la vernisaj) urmează să
          fie reîncărcate aici.
        </p>
      </div>
    </section>
  );
}
