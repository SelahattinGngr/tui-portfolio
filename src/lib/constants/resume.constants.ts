export interface ResumeSection {
  label: string;
  lines: readonly string[];
}

export const RESUME_CONSTANTS = {
  FILE_NAME: "selahattinGungorCv.pdf",
  FILE_META: "güncellendi 2026 · 2 sayfa · École 42 Level 11",
  DOWNLOAD_LABEL: "↓ CV Yazdır / Kaydet",
  SECTIONS: [
    {
      label: "ÖZET",
      lines: [
        "Asıl uzmanlığı Spring Boot, mikroservisler, PostgreSQL, Redis ve Docker ile ölçeklenebilir altyapılar geliştirmek olan Backend Developer.",
        "Google Antigravity ve Claude Code gibi AI agent araçlarını kaldıraç olarak kullanarak solo B2B otomasyon (Kaşif KML), mobil (Denetim Takip) ve oyun (Çay Ocağı Simülasyonu) ürünlerini hayata geçirdi.",
        "Kaşif KML B2B kadastro otomasyonunu geliştirip ilk kurumsal lisans satışını yaptı; Denetim Takip ile 5.500+ indirmeye ulaştı; Çay Ocağı Simülasyonu oyununu Steam'de yayınladı.",
        "École 42 Kocaeli (Level 11) mezunu. C/C++ sistem programlama temeliyle yüksek performanslı ve dayanıklı mimariler kuruyor.",
      ],
    },
    {
      label: "ÖNE ÇIKAN ETKİLER",
      lines: [
        "Kaşif KML: B2B kadastro otomasyonu, Google Gemini OCR, Playwright harita geometrisi motoru ve ilk kurumsal lisans satışı.",
        "Denetim Takip: 5.500+ indirme (4.800+ Android solo build), 4.7/5 puan ve ASO ilk 3 sıralaması.",
        "Çay Ocağı Simülasyonu: Steam üzerinde bağımsız solo oyun yayını ve dağıtımı.",
        "Çok kiracılı e-ticaret altyapısında JWT, RBAC, Redis önbellekleme ve Iyzico/Stripe ödeme entegrasyonu.",
        "Hepsijet: Java & Spring Boot mikroservis mimarisinde API entegrasyonları ve veritabanı optimizasyonları.",
      ],
    },
    {
      label: "EĞİTİM & DERECELER",
      lines: [
        "École 42 Kocaeli — 42 Cursus (Level 11) Junior Developer (2022 — 2025)",
        "Anadolu Üniversitesi — Bilgisayar Programcılığı, Önlisans (2025 — Halen)",
        "Anadolu Üniversitesi — Web Tasarımı ve Kodlama, Önlisans (2022 — 2025)",
      ],
    },
  ] as const satisfies readonly ResumeSection[],
} as const;
