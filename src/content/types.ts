export interface ContentEntry {
  id: string;
  title: string;
  date?: string;
  summary?: string;
  image?: { src: string; alt: string };
  status?: 'published' | 'draft' | 'coming-soon';
  isPlaceholder?: boolean;
}

export type NewsItem = ContentEntry;

export interface Exhibition extends ContentEntry {
  period: { start: string; end?: string };
  venue: string;
  downloads?: { label: string; href: string }[];
  callToAction?: { label: string; href: string };
  gallery?: { src: string; alt: string }[];
}

export interface HistoryEra extends ContentEntry {
  year: string;
  conferenceLabel: string;
  locationDetail: string;
  description: string;
  leadership: { role: string; name: string }[];
}
