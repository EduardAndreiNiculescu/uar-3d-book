import { atom } from "jotai";

// Condica de Schițe — cinci repere de arhitectură din Craiova, cu fotografii
// reale și planșe redactate (releveu simbolic), plus o pagină de argument editorial.
export const pageAtom = atom(0);
// Pagina "reală" curentă în timpul cascadei de întoarceri (Book o pasează cu un pas
// la fiecare ~50-150ms) — UI o citește ca să dezactiveze butoanele cât cartea se mișcă,
// altfel clickurile rapide suprapun mai multe tranziții și cartea pare stricată.
export const delayedPageAtom = atom(0);

export const pages = [
  { front: "cover-front", back: "intro-condica" },
  { front: "palatul-administrativ", back: "primaria-craiova" },
  { front: "biblioteca-omnia", back: "casa-dianu" },
  { front: "muzeul-olteniei", back: "cover-back" },
];

// index = câte file s-au întors deja (0 = închisă pe față, pages.length = închisă pe verso)
export const pageLabels = [
  "Copertă",
  "Argument Editorial & Palatul Administrativ",
  "Primăria Craiova & Biblioteca Omnia",
  "Casa Dianu & Muzeul Olteniei",
  "Coperta spate",
];
