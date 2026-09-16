export interface SkillCategory {
  label: string;
  items: readonly string[];
}

export const SKILLS_CONSTANTS: readonly SkillCategory[] = [
  {
    label: "PROGRAMLAMA DİLLERİ",
    items: ["Java", "C", "C++", "Kotlin", "Python", "SQL"],
  },
  {
    label: "BACKEND & ALTYAPI",
    items: [
      "Spring Boot",
      "RESTful API",
      "Mikroservis",
      "WebSocket",
      "JWT & RBAC",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Nginx",
      "Linux",
    ],
  },
  {
    label: "AI-AGENT, MOBİL & OYUN",
    items: [
      "Google Antigravity",
      "Claude Code",
      "Agentic Workflow",
      "Jetpack Compose",
      "Firebase",
      "Steamworks / Game Dev",
      "AdMob",
      "Iyzico / Stripe",
    ],
  },
] as const;
