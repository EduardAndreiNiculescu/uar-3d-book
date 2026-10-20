import styles from './ui.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
}

export function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2>{title}</h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </div>
  );
}
