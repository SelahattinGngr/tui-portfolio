export interface StackCategory {
  label: string;
  note: string;
  items: readonly string[];
}

export const STACK_CONSTANTS: readonly StackCategory[] = [
  {
    label: "GÜNLÜK BACKEND SÜRÜCÜSÜ",
    note: "çekirdek mühendislik altyapısı",
    items: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Linux",
      "Git",
    ],
  },
  {
    label: "AI-AGENT & HIZLANDIRICILAR",
    note: "mobil ve oyun geliştirme kaldıracı",
    items: [
      "Google Antigravity",
      "Claude Code",
      "Kotlin / Compose",
      "Steamworks",
      "Firebase",
    ],
  },
  {
    label: "SİSTEM PROGRAMLAMA & 42",
    note: "düşük seviye mimari temelleri",
    items: ["C", "C++", "WebSocket", "Nginx", "Python", "SQL"],
  },
] as const;
