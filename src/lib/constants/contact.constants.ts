export const CONTACT_CONSTANTS = {
  WEB3FORMS_ACCESS_KEY: "1f33a290-0ac4-4d54-9073-ddfd5bc1e2cf",
  SENT_MESSAGE:
    "✓ mesajınız başarıyla iletildi — en kısa sürede e-posta ile dönüş yapacağım",
  SENDING_LABEL: "gönderiliyor...",
  ERROR_MESSAGE:
    "Mesaj iletilemedi. Lütfen doğrudan selahattin_gungor53@hotmail.com adresine yazın.",
  KEY_MISSING_MESSAGE:
    "Web3Forms Access Key tanımlanmadı. Lütfen web3forms.com üzerinden aldığınız anahtarı contact.constants.ts içine ekleyin.",
  DIRECT_LABEL: "DOĞRUDAN İLETİŞİM",
  FIELDS: {
    MAIL: { label: "eposta", value: "selahattin_gungor53@hotmail.com" },
    TZ: { label: "konum", value: "Rize · Türkiye (UTC+3) · Remote" },
    NOTE: {
      label: "not",
      value:
        "İş teklifleri ve backend/ürün projeleri için doğrudan e-posta atabilirsiniz.",
    },
  },
  LABELS: {
    NAME: "Adınız",
    EMAIL: "E-posta adresiniz",
    MESSAGE: "Mesajınız",
  },
  PLACEHOLDERS: {
    NAME: "adınız",
    EMAIL: "eposta",
    MESSAGE: "mesajınız",
  },
  SUBMIT_LABEL: "gönder ↵",
} as const;
