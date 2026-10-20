import { Link } from 'react-router-dom';
import styles from './pages.module.css';

export function NotFound() {
  return (
    <section className={`${styles.section} container`} style={{ textAlign: 'center' }}>
      <p className={styles.heroEyebrow}>404</p>
      <h1>Pagina nu a fost găsită</h1>
      <p className={styles.heroLede}>
        <Link to="/">Înapoi la pagina principală</Link>
      </p>
    </section>
  );
}
