type IconProps = { className?: string };

// Decorative icons: aria-hidden because the adjacent text names the control.

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
    >
      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ open, className }: IconProps & { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
    >
      {open ? (
        <path d="M5 5 15 15M15 5 5 15" />
      ) : (
        <path d="M3 6h14M3 10h14M3 14h14" />
      )}
    </svg>
  );
}
