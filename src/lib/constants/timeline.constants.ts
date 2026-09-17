export interface TimelineItem {
  current?: boolean;
  year: string;
  event: string;
}

export const TIMELINE_CONSTANTS: readonly TimelineItem[] = [
  {
    current: true,
    year: "2026",
    event:
      "Kaşif KML B2B kadastro otomasyonunu geliştirip ilk kurumsal satışını yaptım; Çay Ocağı Simülasyonu oyununu Steam'de yayınladım; Denetim Takip ile 5.500+ toplam indirmeye ulaştım.",
  },
  {
    year: "2025",
    event:
      "Spring Boot, Docker ve Redis ile çok kiracılı e-ticaret backend altyapısını ve Iyzico/Stripe ödeme entegrasyonlarını geliştirdim.",
  },
  {
    year: "2024 — 2025",
    event:
      "Hepsijet bünyesinde Java Backend Developer (Stajyer) olarak mikroservis geliştirmelerinde rol aldım.",
  },
  {
    year: "2024",
    event:
      "İliner Teknoloji'de freelance backend geliştirici olarak anti-cheat ve Spring Boot güvenli API katmanını geliştirdim.",
  },
  {
    year: "2022 — 2025",
    event:
      "École 42 Kocaeli Cursus yoğun yazılım eğitimini Level 11 seviyesinde tamamladım.",
  },
] as const;
