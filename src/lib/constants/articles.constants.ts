export interface ArticleItem {
  title: string;
  publication: string;
  date: string;
}

export const ARTICLES_CONSTANTS: readonly ArticleItem[] = [
  {
    title: "Denetimli Serbestlik Süreçlerinde Mobil Takip Çözümleri",
    publication: "selahattin.dev",
    date: "2026",
  },
  {
    title: "Spring Boot ve Docker ile Üretime Hazır Mikroservisler",
    publication: "Medium",
    date: "2025",
  },
  {
    title: "École 42 Metodolojisi ve Peer-to-Peer Yazılım Geliştirme",
    publication: "selahattin.dev",
    date: "2024",
  },
] as const;
