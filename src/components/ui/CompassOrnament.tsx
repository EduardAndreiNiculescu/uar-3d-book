interface CompassOrnamentProps {
  className?: string;
}

/**
 * Ornament hibrid busolă-de-desen / rozul-vânturilor, cu marcaj "S-V" — dublu sens:
 * unealta arhitectului și orientarea filialei Sud-Vest. Înlocuiește inelul auriu simplu din referință.
 */
export function CompassOrnament({ className }: CompassOrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      width="200"
      height="200"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="2.5" opacity="0.65" />
      <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const long = i % 6 === 0;
        const r1 = 72;
        const r2 = long ? 62 : 67;
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={100 + r1 * Math.sin(rad)}
            y1={100 - r1 * Math.cos(rad)}
            x2={100 + r2 * Math.sin(rad)}
            y2={100 - r2 * Math.cos(rad)}
            stroke="currentColor"
            strokeWidth={long ? 1.6 : 0.8}
            opacity="0.6"
          />
        );
      })}
      {/* picioarele busolei de desen, pivot sus */}
      <g stroke="currentColor" strokeWidth="2.5" opacity="0.85" strokeLinecap="round">
        <circle cx="100" cy="46" r="5" fill="currentColor" fillOpacity="0.3" />
        <line x1="100" y1="46" x2="70" y2="150" />
        <line x1="100" y1="46" x2="130" y2="150" />
        <line x1="82" y1="98" x2="118" y2="98" strokeWidth="1.4" opacity="0.5" />
      </g>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontSize="22"
        fontFamily="var(--font-display, serif)"
        fill="currentColor"
        opacity="0.75"
        letterSpacing="2"
      >
        S–V
      </text>
    </svg>
  );
}
