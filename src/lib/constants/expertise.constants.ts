export interface ExpertiseItem {
  title: string;
  body: string;
}

export const EXPERTISE_CONSTANTS: readonly ExpertiseItem[] = [
  {
    title: "Backend & Mikroservis Mimarisi",
    body: "Spring Boot, RESTful API, WebSocket, JWT & RBAC yetkilendirme ve güvenli mikroservis haberleşmesi.",
  },
  {
    title: "Veri, Dağıtık Önbellek & DevOps",
    body: "PostgreSQL, MySQL, Redis, Docker Compose ve Linux sunucu altyapısıyla yüksek eşzamanlı ve dayanıklı sistemler.",
  },
  {
    title: "AI-Agent ile Ürün Geliştirme",
    body: "Google Antigravity ve Claude Code ile spec'ten production'a otonom iş akışları, prompt mimarisi ve solo ürün teslimi.",
  },
  {
    title: "Mobil & Oyun Dağıtımı",
    body: "Jetpack Compose ile Android geliştirme (Denetim Takip) ve Steam mağaza yayını (Çay Ocağı Simülasyonu).",
  },
] as const;
