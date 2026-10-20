import type { NewsItem } from '../../content/types';
import { formatDateRo } from '../../lib/formatDate';
import styles from './ui.module.css';

interface NewsScrollerProps {
  items: NewsItem[];
}

export function NewsScroller({ items }: NewsScrollerProps) {
  if (items.length === 0) {
    return (
      <ul className={styles.scroller} aria-label="Noutăți">
        <li className={`${styles.newsCard} ${styles.newsCardEmpty}`}>
          <span className={styles.newsCardMark} aria-hidden="true">
            ✳
          </span>
          <h3>Primele noutăți sosesc în curând</h3>
          <p>Filiala pregătește anunțuri publice: comunicate, invitații la evenimente, rapoarte de activitate.</p>
        </li>
      </ul>
    );
  }

  return (
    <ul className={styles.scroller} aria-label="Noutăți">
      {items.map((item) => (
        <li className={styles.newsCard} key={item.id}>
          {item.date && <p className={styles.newsCardDate}>{formatDateRo(item.date)}</p>}
          <h3>{item.title}</h3>
          {item.summary && <p>{item.summary}</p>}
        </li>
      ))}
    </ul>
  );
}
