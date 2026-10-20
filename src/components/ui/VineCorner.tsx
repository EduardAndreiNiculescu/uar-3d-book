interface VineCornerProps {
  className?: string;
}

/** Decor de colț cu viță-de-vie și struguri, nod la viticultura olteană — motiv secundar, alternant cu OakCorner. */
export function VineCorner({ className }: VineCornerProps) {
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
        <path d="M12 16 C 60 24, 90 54, 96 100 C 100 128, 84 150, 56 152" strokeWidth="1" />
        <path
          d="M18 22 C 40 14, 62 26, 60 48 C 58 66, 38 70, 26 56 C 16 44, 14 32, 18 22 Z"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <path
          d="M55 46 C 78 40, 98 54, 94 76 C 90 94, 68 96, 58 80 C 50 68, 48 56, 55 46 Z"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <g fill="currentColor" fillOpacity="0.22">
          <circle cx="70" cy="96" r="6" />
          <circle cx="80" cy="106" r="6" />
          <circle cx="66" cy="110" r="6" />
          <circle cx="78" cy="118" r="6" />
          <circle cx="88" cy="118" r="6" />
          <circle cx="72" cy="126" r="6" />
        </g>
      </g>
    </svg>
  );
}
