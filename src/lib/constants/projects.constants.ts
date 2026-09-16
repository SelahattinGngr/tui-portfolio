export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  current?: boolean;
  title: string;
  role: string;
  duration: string;
  body: string;
  stack: readonly string[];
  tags: readonly string[];
  links: readonly ProjectLink[];
}

const GITHUB_URL = "https://github.com/SelahattinGngr";

export const PROJECTS_CONSTANTS: readonly ProjectItem[] = [
  {
    current: true,
    title: "Denetim Takip",
    role: "Kurucu & Android Geliştirici",
    duration: "2026 — Halen · 5.500+ Toplam İndirme",
    body: "Denetimli serbestlik hükümlüleri için pazardaki ilk mobil takip uygulaması. Fikir, ürün yönetimi ve Android mimarisini (Kotlin/Compose) tek başıma üstlendim; iOS sürümünü ekiple koordine ederek yayına aldım. 4.800+ Android ve 700+ iOS kullanıcısı, 4.7/5 Play Store puanı, AdMob altyapısı ve ASO ilk 3 sıralaması.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "AdMob", "Claude Code"],
    tags: ["android", "ios", "firebase", "product"],
    links: [{ label: "website", href: "https://denetimtakip.com.tr" }],
  },
  {
    current: true,
    title: "Çay Ocağı Simülasyonu",
    role: "Solo Geliştirici & Ürün Sahibi",
    duration: "2026 — Halen · Steam Yayını",
    body: "AI agent iş akışları (Google Antigravity, Claude Code) ile tek başıma geliştirdiğim bağımsız simülasyon oyunu. Steam üzerinde mağaza yayını, oyun dinamikleri, asset yönetimi ve bağımsız ürün dağıtımı.",
    stack: ["Game Dev", "Google Antigravity", "Claude Code", "Steam"],
    tags: ["gamedev", "steam", "ai-agents", "simulation"],
    links: [
      {
        label: "steam",
        href: "https://store.steampowered.com/app/5131110/Cay_Ocagi_Simulator/",
      },
    ],
  },
  {
    current: true,
    title: "E-Ticaret Backend Platformu",
    role: "Backend Developer",
    duration: "2025 — Halen",
    body: "Çok kiracılı (multi-tenant) e-ticaret altyapısı: JWT kimlik doğrulama, RBAC yetkilendirme, Redis önbellekleme, Iyzico & Stripe ödeme entegrasyonu, audit logging ve yük testi onaylı Docker dağıtımı.",
    stack: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "Nginx", "Iyzico"],
    tags: ["java", "spring-boot", "redis", "docker"],
    links: [{ label: "demo", href: "https://ecom-demo.selahattin.dev" }],
  },
  {
    title: "ft_transcendence (École 42)",
    role: "Bitirme Projesi",
    duration: "2024 · 42 Kocaeli",
    body: "WebSocket tabanlı gerçek zamanlı çok oyunculu Pong oyunu, canlı sohbet, turnuva sistemi ve iki faktörlü kimlik doğrulama. Dockerize mikroservis mimarisi.",
    stack: ["C++", "WebSocket", "Docker", "PostgreSQL", "Nginx"],
    tags: ["42cursus", "websocket", "docker", "cpp"],
    links: [{ label: "github", href: GITHUB_URL }],
  },
  {
    title: "Video Platform Backend",
    role: "Solo Geliştirici",
    duration: "2024",
    body: "Spring Boot ile URL üzerinden asenkron video işleme, stream sunumu ve meta veri yönetimini sağlayan yüksek performanslı REST API servisi.",
    stack: ["Java", "Spring Boot", "REST API", "Docker"],
    tags: ["java", "spring-boot", "video", "api"],
    links: [{ label: "github", href: GITHUB_URL }],
  },
] as const;
