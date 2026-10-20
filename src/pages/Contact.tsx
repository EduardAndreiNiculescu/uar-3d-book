import { siteInfo } from '../content/site';
import { CompassOrnament } from '../components/ui/CompassOrnament';
import { SectionHeading } from '../components/ui/SectionHeading';
import styles from './pages.module.css';

export function Contact() {
  return (
    <section className={`${styles.section} container`}>
      <SectionHeading eyebrow="Contact" title="Scrieți-ne" />

      <div className={styles.contactLayout}>
        <div className={styles.contactCompass}>
          <CompassOrnament />
        </div>

        <div className={styles.contactPanel}>
          <div className={styles.contactRow}>
            <span className={styles.contactRowLabel}>Adresă</span>
            <p>{siteInfo.address}</p>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactRowLabel}>Telefon</span>
            <p>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a> (fix)
            </p>
            <p>
              <a href={`tel:${siteInfo.mobilePresident.replace(/\s/g, '')}`}>{siteInfo.mobilePresident}</a>{' '}
              (președinte)
            </p>
            <p>
              <a href={`tel:${siteInfo.mobileSecondary.replace(/\s/g, '')}`}>{siteInfo.mobileSecondary}</a>
            </p>
            <p>Fax: {siteInfo.fax}</p>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactRowLabel}>Email</span>
            <p>
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
