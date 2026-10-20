import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { NewsScroller } from '../components/ui/NewsScroller';
import { SectionHeading } from '../components/ui/SectionHeading';
import { newsItems } from '../content/news';
import styles from './pages.module.css';

// Three.js + React Three Fiber sunt grele (~1MB) — le încărcăm doar când cineva
// chiar ajunge pe Acasă, nu ca parte din bundle-ul comun al tuturor paginilor.
const BookViewer = lazy(() =>
  import('../components/book/BookViewer').then((module) => ({ default: module.BookViewer })),
);

export function Acasa() {
  return (
    <>
      <section className={styles.heroStage}>
        <div className={`${styles.hero} container`}>
          <p className={styles.heroEyebrow}>Filiala Euroregională Sud-Vest Oltenia</p>
          <h1 className={styles.heroTitle}>Uniunea Arhitecților din România</h1>
          <p className={styles.heroLede}>
            O instituție de cultură și for moral profesional, dedicată patrimoniului construit al Olteniei, de la
            culele fortificate până la arhitectura de azi.
          </p>
        </div>

        <div className="container">
          <Suspense fallback={<div className={styles.bookFallback} aria-hidden="true" />}>
            <BookViewer />
          </Suspense>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <SectionHeading
          eyebrow="Cine suntem"
          title="O filială cu rădăcini și un mandat clar"
          lede="Statutul Uniunii Arhitecților din România fixează două direcții pentru fiecare filială: proiecte
            culturale (monumente și patrimoniu) și proiecte sociale. La Sud-Vest Oltenia, aceste direcții s-au
            tradus, din 2007, în conferințe euroregionale, o casă a arhitectului la Craiova și campanii de salvare a
            patrimoniului, precum S.O.S. Culele din România."
        />

        <div className={styles.statRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>2007</span>
            <span className={styles.statLabel}>Anul constituirii, de Ziua Europei</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>5</span>
            <span className={styles.statLabel}>Filiale județene fondatoare: Dolj, Olt, Mehedinți, Gorj, Vâlcea</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>2</span>
            <span className={styles.statLabel}>Obiective statutare: cultural și social</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>3</span>
            <span className={styles.statLabel}>Conferințe euroregionale ținute din 2007</span>
          </div>
        </div>

        <div className={styles.pullQuote}>
          <blockquote>
            Culele sunt, alături de biserici, dintre cele mai vechi construcții pe pământul românesc. Au fost destul
            de multe; au rămas foarte puține.
          </blockquote>
          <cite>
            Din manifestul{' '}
            <Link to="/expozitii/sos-culele" style={{ color: 'inherit', textDecoration: 'underline' }}>
              S.O.S. Culele din România
            </Link>
          </cite>
        </div>
      </section>

      <section className={`${styles.sectionTight} container`}>
        <div className={styles.sectionHead}>
          <SectionHeading eyebrow="Noutăți" title="Ce mai e nou" />
          <Link className={styles.sectionHeadLink} to="/noutati">
            Toate noutățile →
          </Link>
        </div>
        <NewsScroller items={newsItems} />
      </section>

      <section className={`${styles.section} container`}>
        <SectionHeading eyebrow="Explorează" title="Filiala, pe scurt" />
        <div className={styles.cardGrid}>
          <Link className={styles.card} to="/despre">
            <p className={styles.cardEyebrow}>Din 2007</p>
            <h3 className={styles.cardTitle}>Despre filială</h3>
            <p className={styles.cardSummary}>Istoricul înființării și conferințele euroregionale.</p>
          </Link>
          <Link className={styles.card} to="/expozitii">
            <p className={styles.cardEyebrow}>Patrimoniu</p>
            <h3 className={styles.cardTitle}>Expoziții</h3>
            <p className={styles.cardSummary}>S.O.S. Culele din România și expoziția Frank Lloyd Wright.</p>
          </Link>
          <Link className={styles.card} to="/contact">
            <p className={styles.cardEyebrow}>Craiova</p>
            <h3 className={styles.cardTitle}>Contact</h3>
            <p className={styles.cardSummary}>Adresă, telefoane și email pentru filiala Sud-Vest Oltenia.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
