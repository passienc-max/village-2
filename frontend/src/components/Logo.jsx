export const LogoMark = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#B85338" />
    <path
      d="M12 44 L23 30 L34 44"
      fill="none"
      stroke="#FBF9F5"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 44 L41 30 L52 44"
      fill="none"
      stroke="#FBF9F5"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="45" cy="19" r="5" fill="#F3C46B" />
  </svg>
);

export default function Logo({ dark = false }) {
  return (
    <span className="flex items-center gap-2.5" data-testid="logo-mark">
      <LogoMark />
      <span
        className={`font-display text-lg tracking-wide ${dark ? "text-paper" : "text-ink"}`}
      >
        The Village
      </span>
    </span>
  );
}
