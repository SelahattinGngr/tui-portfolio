export interface GithubStat {
  value: string;
  label: string;
}

export interface GithubRepo {
  name: string;
  body: string;
  lang: string;
  stars: string;
  url: string;
}

const GITHUB_PROFILE_URL = "https://github.com/SelahattinGngr";

export const GITHUB_CONSTANTS = {
  STATS: [
    { value: "42", label: "CURSUS LEVEL 11" },
    { value: "5.5k+", label: "APP DOWNLOADS" },
    { value: "4.7 ★", label: "STORE RATING" },
  ] as const satisfies readonly GithubStat[],
  REPOS: [
    {
      name: "SelahattinGngr/denetim-takip",
      body: "Denetimli serbestlik takip mobil uygulaması (Kotlin, Jetpack Compose, Firebase, AdMob).",
      lang: "Kotlin",
      stars: "Live",
      url: "https://denetimtakip.com.tr",
    },
    {
      name: "SelahattinGngr/ecommerce-backend",
      body: "Çok kiracılı e-ticaret backend servisi: JWT, RBAC, Redis, Iyzico/Stripe (Demo aktif).",
      lang: "Java",
      stars: "Demo",
      url: "https://ecom-demo.selahattin.dev",
    },
    {
      name: "SelahattinGngr/ft_transcendence",
      body: "École 42 bitirme projesi: WebSocket tabanlı gerçek zamanlı Pong ve canlı sohbet.",
      lang: "C++",
      stars: "42 Final",
      url: GITHUB_PROFILE_URL,
    },
    {
      name: "SelahattinGngr/video-processing-backend",
      body: "Spring Boot ile URL üzerinden asenkron video işleme ve streaming servisi.",
      lang: "Java",
      stars: "OSS",
      url: GITHUB_PROFILE_URL,
    },
  ] as const satisfies readonly GithubRepo[],
  WEEKS_LABEL: "SON 26 HAFTA",
  CONTRIB_CELLS: 182,
} as const;
