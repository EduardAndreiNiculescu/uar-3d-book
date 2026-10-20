import type { NewsItem } from './types';

// Site-ul vechi nu avea nicio știre publicată. Rămâne gol intenționat —
// pagina Noutăți randează o stare "în curând" cât timp acest array e gol.
export const newsItems: NewsItem[] = [];
