export interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
}

export const BLOG_CONSTANTS: readonly BlogPost[] = [
  {
    date: "2026-08-25",
    title:
      "Backend Mühendisliğinden Steam'e: AI Agent'lar ile Oyun Geliştirmek",
    excerpt:
      "Google Antigravity ve Claude Code kullanarak Çay Ocağı Simülasyonu oyununu solo geliştirme ve Steam mağaza yayını deneyimleri.",
  },
  {
    date: "2026-08-10",
    title: "Bir Ürünü Fikirden 5.500+ Kullanıcıya Ulaştırmak",
    excerpt:
      "Denetim Takip uygulamasının mimari kararları, 4.800+ Android indirmesi, ASO stratejisi ve iOS yayını koordinasyon süreci.",
  },
  {
    date: "2026-05-18",
    title: "Spring Boot ile Çok Kiracılı (Multi-Tenant) E-Ticaret Mimarisi",
    excerpt:
      "JWT kimlik doğrulama, RBAC yetkilendirme ve Redis önbellekleme ile güvenli, ölçeklenebilir backend altyapısı.",
  },
] as const;
