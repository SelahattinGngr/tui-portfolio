export interface ExperienceItem {
  current?: boolean;
  role: string;
  company: string;
  duration: string;
  body: string;
}

export const EXPERIENCE_CONSTANTS: readonly ExperienceItem[] = [
  {
    current: true,
    role: "Kurucu & Android Geliştirici",
    company: "Denetim Takip",
    duration: "2026 — Halen",
    body: "Kategorisinde ilk olan denetimli serbestlik takip uygulamasının fikir ve ürün sahipliğini üstlendim. Android uygulamasını (Kotlin/Compose) tek başıma geliştirip 4.800+ indirmeye, iOS sürümünü koordine ederek 700+ indirmeye ulaştırdım (Toplam 5.500+).",
  },
  {
    role: "Java Backend Developer (Stajyer)",
    company: "Hepsijet",
    duration: "Ekim 2024 — Şubat 2025 · İstanbul",
    body: "Java ve Spring Boot kullanarak mikroservis tabanlı backend geliştirmelerinde görev aldım. REST API entegrasyonları, veritabanı optimizasyonları ve lojistik servisleri üzerinde çalıştım.",
  },
  {
    role: "Freelance Backend Developer",
    company: "İliner Teknoloji",
    duration: "Şubat 2024 — Temmuz 2024 · İstanbul",
    body: "C++ ile geliştirilen anti-cheat sistemi ile oyun istemcisinin haberleştiği Spring Boot backend'ini geliştirdim. İstemci ile sunucu arasında güvenli API veri akışını sağladım.",
  },
] as const;
