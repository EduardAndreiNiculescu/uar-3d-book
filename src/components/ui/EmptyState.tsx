import styles from './ui.module.css';

interface EmptyStateProps {
  title: string;
  message: string;
}

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className={styles.emptyState}>
      <span className={styles.emptyMark} aria-hidden="true">
        ✳
      </span>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
