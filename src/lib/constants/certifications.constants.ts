export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export const CERTIFICATIONS_CONSTANTS: readonly CertificationItem[] = [
  {
    name: "42 Cursus Level 11 — Junior Developer",
    issuer: "École 42 Kocaeli",
    date: "2025",
  },
  {
    name: "Web Tasarımı ve Kodlama Derecesi",
    issuer: "Anadolu Üniversitesi",
    date: "2025",
  },
] as const;
