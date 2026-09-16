export interface SeoPerson {
  name: string;
  jobTitle: string;
  sameAs: readonly string[];
}

export const SEO_CONSTANTS = {
  SITE_NAME: "Selahattin Güngör — Terminal Portföy",
  DESCRIPTION:
    "Selahattin Güngör — Backend Developer ve Ürün Geliştirici. Spring Boot mikroservisleri, Docker, PostgreSQL ve AI Agent iş akışları.",
  DESCRIPTION_SUFFIX:
    "Terminal tabanlı portföy: komutları yazarak deneyim, projeler ve yetenekleri keşfedin.",
  OG_IMAGE: "",
  OG_IMAGE_ALT: "Selahattin Güngör Terminal Portföyü",
  LOCALE: "tr_TR",
  LABEL_OVERRIDES: {
    github: "GitHub",
  } as Readonly<Record<string, string | undefined>>,
  PERSON: {
    name: "Selahattin Güngör",
    jobTitle: "Back-End Developer · Ürün Geliştirici",
    sameAs: [
      "https://github.com/SelahattinGngr",
      "https://linkedin.com/in/selahattingungor",
      "https://selahattin.dev",
    ],
  } as const satisfies SeoPerson,
} as const;
