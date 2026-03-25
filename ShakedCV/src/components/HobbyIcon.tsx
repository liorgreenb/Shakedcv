const HOBBY_ICONS: Record<string, React.ReactNode> = {
  horse: (
    <span style={{ fontSize: '13pt', lineHeight: 1, color: 'inherit' }}>♞</span>
  ),
  surf: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M11 2L4 19h8V2z"/>
      <path d="M13 5l7 12h-7V5z"/>
      <path d="M2 20h20l-2 2H4z"/>
    </svg>
  ),
  baking: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M4 14c0-4.42 3.58-8 8-8s8 3.58 8 8H4zm-2 2h20v5H2v-5z"/>
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M3 20h18L14 5l-4 8-3-4L3 20z"/>
    </svg>
  ),
}

export function HobbyIcon({ type }: { type: string }) {
  return (
    <span className="hobby-icon">{HOBBY_ICONS[type]}</span>
  )
}
