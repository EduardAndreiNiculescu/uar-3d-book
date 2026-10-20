import type { Exhibition } from './types';

export const exhibitions: Exhibition[] = [
  {
    id: 'sos-culele',
    title: 'S.O.S. Culele din România',
    summary: 'Manifest cultural pentru salvarea culelor oltenești, aflate în pragul dispariției.',
    period: { start: '2013' },
    venue: 'Filiala euroregională Sud-Vest Oltenia',
    status: 'published',
    callToAction: { label: 'Semnează petiția', href: 'mailto:contact@example.org?subject=S.O.S.%20Culele%20din%20Rom%C3%A2nia' },
  },
  {
    id: 'frank-lloyd-wright',
    title: 'Expoziția Frank Lloyd Wright',
    summary: 'Expoziția dedicată arhitectului american, prezentată inițial la ROCAD 2013.',
    period: { start: '2013-06-21', end: '2013-07-03' },
    venue: 'ROCAD 2013, găzduită ulterior la sediul filialei',
    status: 'published',
  },
];
