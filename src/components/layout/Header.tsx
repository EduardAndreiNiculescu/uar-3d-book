import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import styles from './layout.module.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <Link to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <span className={styles.brandMark} aria-hidden="true">
            UAR
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandLine1}>Uniunea Arhitecților din România</span>
            <span className={styles.brandLine2}>Filiala Sud-Vest Oltenia</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">Comută meniul</span>
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>

        <div id="site-nav" className={menuOpen ? `${styles.navWrap} ${styles.navWrapOpen}` : styles.navWrap}>
          <Nav onNavigate={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
}
