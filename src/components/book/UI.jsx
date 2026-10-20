import { useAtom } from "jotai";
import { delayedPageAtom, pageAtom, pageLabels, pages } from "./content";
import styles from "./book.module.css";

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [delayedPage] = useAtom(delayedPageAtom);
  // cât timp cartea încă se întoarce spre pagina cerută, blocăm noi clickuri —
  // altfel clickurile rapide suprapun tranziții și paginile par stricate/în buclă
  const isTurning = page !== delayedPage;

  return (
    <div className={styles.nav} role="group" aria-label="Navigare condică">
      {[...pages, {}].map((_, index) => (
        <button
          key={index}
          type="button"
          disabled={isTurning}
          className={index === page ? `${styles.navButton} ${styles.navButtonActive}` : styles.navButton}
          onClick={() => setPage(index)}
        >
          {pageLabels[index] ?? `Pagina ${index}`}
        </button>
      ))}
    </div>
  );
};
