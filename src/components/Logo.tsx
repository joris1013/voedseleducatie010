export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 310 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="VoedselEducatie010"
    >
      <text
        x="0"
        y="34"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#1a5632"
        letterSpacing="-0.02em"
      >
        VoedselEducatie
      </text>
      <text
        x="215"
        y="34"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#e8800a"
        letterSpacing="-0.02em"
      >
        010
      </text>

      {/* Carrot body — long tapered shape angled to the lower-right */}
      <path
        d="M272 4 C274 3, 276 4, 276 6 L268 42 C267 45, 264 46, 262 44 L258 38 C257 36, 258 34, 260 33 Z"
        fill="#e8800a"
      />
      {/* Carrot highlight streak */}
      <path
        d="M273 8 L269 30 C268.5 32, 267 31, 267.5 29 L271 9 C271.3 7.5, 272.5 7, 273 8 Z"
        fill="#f5a623"
        opacity="0.5"
      />
      {/* Green leaf / stem */}
      <path
        d="M271 5 C272 3, 274 1, 275 0 C275.5 -0.3, 276 0.5, 275 2 L273 5 C272.5 5.5, 271.5 5.5, 271 5 Z"
        fill="#1a5632"
      />
      <path
        d="M270 4 C268 2, 267 0.5, 268 0 C269 -0.3, 270 1, 271 3 L271 5 C270.5 5, 270 4.5, 270 4 Z"
        fill="#2d7a4a"
      />
    </svg>
  );
}
