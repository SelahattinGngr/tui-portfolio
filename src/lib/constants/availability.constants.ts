export const AVAILABILITY_CONSTANTS = {
  OPEN: {
    TAG: "IS_FIRSATLARINA_ACIK",
    HEADLINE: "DURUM — AÇIK",
    LINE: "Yeni Backend ve Ürün Geliştirme fırsatlarına açığım.",
    DETAIL:
      "Spring Boot mikroservis mimarileri, veri/önbellek sistemleri veya uçtan uca mobil/web ürün geliştirme projelerinde tam zamanlı (remote) veya kontratlı işler için görüşebiliriz.",
  },
  CLOSED: {
    TAG: "MEVCUT_DEGIL",
    HEADLINE: "DURUM — KAPALI",
    LINE: "Şu an yeni proje kabul edilmiyor.",
    DETAIL:
      "Mevcut projeler üzerinde aktif çalışıyorum. Fikir alışverişi veya networking için her zaman iletişim kurabilirsiniz.",
  },
} as const;
