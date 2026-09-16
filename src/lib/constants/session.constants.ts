export const SESSION_CONSTANTS = {
  AVAILABLE: true,
  START_ROUTE: "/" as string,
  HISTORY_LIMIT: 30,
  POP_CLOSE_MS: 110,
  QUICK_JUMP: [
    "profile",
    "projects",
    "skills",
    "experience",
    "contact",
    "help",
  ] as const,
  QUICK_JUMP_LABEL: "HIZLI ERİŞİM",
  HINT_READY:
    "Hazır. Komutları deneyin: profile, projects, skills, contact, whoami",
  HINT_ROUTE_PREFIX: "Hazır. Çıktı: ",
  PROMPT_PLACEHOLDER: "bir komut yazın veya Tab tuşuna basın...",
  PROMPT_LABEL: "Komut satırı",
  POP_LIST_LABEL: "Komut önerileri",
  POP_EMPTY: "eşleşen komut bulunamadı",
  ERROR_CODE: "exit 127",
  ERROR_SUFFIX:
    "komut bulunamadı. Kullanılabilir komutlar için help veya / yazın.",
  NOT_FOUND_TITLE: "404",
} as const;
