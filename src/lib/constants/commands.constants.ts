export type CommandName =
  | "help"
  | "profile"
  | "experience"
  | "education"
  | "certifications"
  | "skills"
  | "tech-stack"
  | "projects"
  | "github"
  | "blog"
  | "articles"
  | "resume"
  | "career-timeline"
  | "contact"
  | "socials"
  | "availability"
  | "now"
  | "changelog"
  | "clear";

export interface Command {
  name: CommandName;
  desc: string;
}

export const COMMANDS: readonly Command[] = [
  { name: "help", desc: "tüm kullanılabilir komutları listele" },
  { name: "profile", desc: "ben kimim, ne yapıyorum ve uzmanlık alanlarım" },
  { name: "experience", desc: "iş ve staj geçmişi" },
  { name: "education", desc: "akademik geçmiş ve mezuniyetler" },
  { name: "certifications", desc: "sertifikalar ve 42 Cursus derecesi" },
  { name: "skills", desc: "programlama dilleri, backend ve araçlar" },
  { name: "tech-stack", desc: "günlük hayatta aktif kullandığım teknolojiler" },
  { name: "projects", desc: "seçilmiş projeler ve yayınlanan ürünler" },
  { name: "github", desc: "repo'lar ve açık kaynak aktiviteleri" },
  { name: "blog", desc: "teknik yazılar ve makaleler" },
  { name: "articles", desc: "yayınlar ve harici yazılar" },
  { name: "resume", desc: "CV özeti ve yazdırma" },
  { name: "career-timeline", desc: "yıllara göre kariyer kilometre taşları" },
  { name: "contact", desc: "doğrudan mesaj gönder ve iletişim kur" },
  { name: "socials", desc: "GitHub, LinkedIn, Web ve e-posta bağlantıları" },
  { name: "availability", desc: "iş ve proje fırsatlarına uygunluk durumu" },
  { name: "now", desc: "şu anda üzerinde çalıştıklarım" },
  { name: "changelog", desc: "bu siteye yapılan güncellemeler" },
  { name: "clear", desc: "terminal ekranını temizle" },
] as const;

export const COMMAND_ALIASES: Readonly<Record<string, CommandName>> = {
  about: "profile",
  whoami: "profile",
  work: "experience",
  deneyim: "experience",
  cv: "resume",
  ozgecmis: "resume",
  egitim: "education",
  projeler: "projects",
  yetenekler: "skills",
  iletisim: "contact",
  yardim: "help",
  ls: "help",
  "?": "help",
  man: "help",
  social: "socials",
  stack: "tech-stack",
  exit: "clear",
  home: "clear",
  temizle: "clear",
};

export const ROUTABLE_COMMANDS = COMMANDS.filter((c) => c.name !== "clear");
