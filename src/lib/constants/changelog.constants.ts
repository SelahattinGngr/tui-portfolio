export interface ChangelogItem {
  date: string;
  entry: string;
}

export const CHANGELOG_CONSTANTS: readonly ChangelogItem[] = [
  {
    date: "2026-09-17",
    entry:
      "Selahattin Güngör portföy verileri aktarıldı, Türkçe dil desteği ve komut takma adları yapılandırıldı.",
  },
  {
    date: "2026-08-20",
    entry:
      "Terminal komut satırı filtresi ve klavye gezintisi optimize edildi.",
  },
  {
    date: "2026-06-15",
    entry: "Astro tabanlı TUI mimarisine geçiş yapıldı.",
  },
] as const;
