// Hand-drawn SVG approximations of macOS app icons.

export function FinderIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="finderL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9debff" />
          <stop offset="1" stopColor="#4dc4f5" />
        </linearGradient>
        <linearGradient id="finderR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3fa9ee" />
          <stop offset="1" stopColor="#1470d6" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#finderL)" />
      <path
        d="M54 0 H78 Q100 0 100 22 V78 Q100 100 78 100 H54 C60 84 62 66 62 50 C62 34 60 16 54 0 Z"
        fill="url(#finderR)"
      />
      <path d="M30 30 v14" stroke="#10508f" strokeWidth="6" strokeLinecap="round" />
      <path d="M74 30 v14" stroke="#eaf7ff" strokeWidth="6" strokeLinecap="round" />
      <path
        d="M26 62 Q50 78 78 62"
        stroke="#10508f"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function NotesIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect width="100" height="100" rx="22" fill="#ffffff" />
      <path d="M0 22 Q0 0 22 0 H78 Q100 0 100 22 V30 H0 Z" fill="#fdc636" />
      <rect x="18" y="44" width="64" height="5" rx="2.5" fill="#d9d9de" />
      <rect x="18" y="58" width="64" height="5" rx="2.5" fill="#d9d9de" />
      <rect x="18" y="72" width="44" height="5" rx="2.5" fill="#d9d9de" />
    </svg>
  );
}

export function MessagesIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="msgG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6df97e" />
          <stop offset="1" stopColor="#10ce3c" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#msgG)" />
      <path
        d="M50 22 C31 22 17 33 17 47 C17 55 22 62 30 66 L26 79 L41 71 C44 71.6 47 72 50 72 C69 72 83 61 83 47 C83 33 69 22 50 22 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect width="100" height="100" rx="22" fill="#0a66c2" />
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="52"
        fill="#ffffff"
      >
        in
      </text>
    </svg>
  );
}

export function ChatGPTIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect width="100" height="100" rx="22" fill="#0d0d0d" />
      <g stroke="#ffffff" strokeWidth="8" strokeLinecap="round">
        <path d="M50 24 V76" />
        <path d="M27.5 37 L72.5 63" />
        <path d="M27.5 63 L72.5 37" />
      </g>
    </svg>
  );
}

export function TerminalIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect width="100" height="100" rx="22" fill="#1c1c1e" />
      <rect x="0" y="0" width="100" height="26" rx="22" fill="#3a3a3c" />
      <rect x="0" y="14" width="100" height="12" fill="#3a3a3c" />
      <text
        x="16"
        y="66"
        fontFamily="ui-monospace, Menlo, monospace"
        fontWeight="700"
        fontSize="34"
        fill="#4ade80"
      >
        &gt;_
      </text>
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="mailG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6fb8fd" />
          <stop offset="1" stopColor="#1a70f0" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#mailG)" />
      <rect x="22" y="32" width="56" height="38" rx="6" fill="#ffffff" />
      <path
        d="M24 36 L50 56 L76 36"
        stroke="#1a70f0"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SettingsIcon() {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <radialGradient id="setG" cx="0.5" cy="0.35" r="0.9">
          <stop offset="0" stopColor="#8e8e93" />
          <stop offset="1" stopColor="#3a3a3c" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#setG)" />
      <g fill="#e5e5ea">
        {teeth.map((deg) => (
          <rect
            key={deg}
            x="45.5"
            y="12"
            width="9"
            height="15"
            rx="3"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="26" fill="#e5e5ea" />
      <circle cx="50" cy="50" r="12" fill="#48484a" />
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <g
        fill="none"
        stroke="#d1d1d6"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 34 L34 84 Q34.5 90 41 90 H59 Q65.5 90 66 84 L70 34" fill="#9e9ea6" fillOpacity="0.35" />
        <path d="M24 26 H76" />
        <path d="M40 26 V20 Q40 15 45 15 H55 Q60 15 60 20 V26" />
        <path d="M42 44 L44 76 M50 44 V76 M58 44 L56 76" strokeWidth="4" />
      </g>
    </svg>
  );
}
