export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-[#E8621A] text-white px-6 py-3 rounded-lg font-semibold min-h-[44px] min-w-[44px] flex items-center"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      Passer au contenu principal
    </a>
  );
}
