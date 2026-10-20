const MONTHS_RO = [
  'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
  'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie',
];

/** Acceptă un ISO complet (YYYY-MM-DD), un an (YYYY) sau un text liber și-l redă în română. */
export function formatDateRo(value?: string): string {
  if (!value) return '';
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${Number.parseInt(day, 10)} ${MONTHS_RO[Number.parseInt(month, 10) - 1]} ${year}`;
  }
  return value;
}
