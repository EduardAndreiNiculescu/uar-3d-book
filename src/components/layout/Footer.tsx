import { siteInfo } from '../../content/site';
import styles from './layout.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} container`}>
        <div>
          <p className={styles.footerOrg}>{siteInfo.orgFullName}</p>
          <p className={styles.footerBranch}>{siteInfo.branchName}</p>
        </div>
        <div className={styles.footerContact}>
          <p>{siteInfo.address}</p>
          <p>
            <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a>
            {' · '}
            <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
          </p>
        </div>
        <p className={styles.footerNote}>
          Filială constituită la {siteInfo.founded}, {siteInfo.foundingVenue}.
        </p>
      </div>
    </footer>
  );
}
