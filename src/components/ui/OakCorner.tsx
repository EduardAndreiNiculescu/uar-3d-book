interface OakCornerProps {
  className?: string;
}

/** Decor de colț cu frunze și ghinde de stejar, motiv oltenesc — înlocuiește ferigile din referință. */
export function OakCorner({ className }: OakCornerProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      width="220"
      height="220"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.4" opacity="0.55">
        <path
          d="M10 20 C 50 10, 90 30, 100 70 C 108 100, 90 120, 60 118"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path d="M20 24 C 46 20, 70 34, 80 58" strokeWidth="1" />
        <path d="M30 10 C 55 30, 40 60, 15 68 C 40 55, 35 30, 30 10 Z" fillOpacity="0.12" fill="currentColor" />
        <path d="M55 22 C 80 40, 68 70, 40 78 C 66 63, 62 38, 55 22 Z" fillOpacity="0.12" fill="currentColor" />
        <path d="M78 40 C 100 55, 92 84, 64 92 C 88 78, 86 55, 78 40 Z" fillOpacity="0.12" fill="currentColor" />
        <circle cx="100" cy="95" r="7" fill="currentColor" fillOpacity="0.2" />
        <path d="M96 88 Q100 82 104 88" />
        <circle cx="118" cy="108" r="6" fill="currentColor" fillOpacity="0.2" />
        <path d="M114 102 Q118 97 122 102" />
      </g>
    </svg>
  );
}
