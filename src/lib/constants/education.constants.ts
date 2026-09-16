export interface EducationItem {
  degree: string;
  school: string;
  duration: string;
  body: string;
}

export const EDUCATION_CONSTANTS: readonly EducationItem[] = [
  {
    degree: "42 Cursus, Junior Developer (Level 11)",
    school: "École 42 Kocaeli",
    duration: "2022 — 2025",
    body: "Peer-to-peer, proje tabanlı yazılım eğitimi: C, C++, sistem programlama, soket haberleşmesi, Docker ve algoritma tasarımı.",
  },
  {
    degree: "Bilgisayar Programcılığı, Önlisans",
    school: "Anadolu Üniversitesi",
    duration: "2025 — Halen",
    body: "Veritabanı sistemleri, veri yapıları ve nesne yönelimli programlama.",
  },
  {
    degree: "Web Tasarımı ve Kodlama, Önlisans",
    school: "Anadolu Üniversitesi",
    duration: "2022 — 2025",
    body: "Web standartları, istemci tarafı programlama ve kullanıcı arayüzü prensipleri.",
  },
] as const;
