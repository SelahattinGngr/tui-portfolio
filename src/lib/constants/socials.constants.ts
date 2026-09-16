export interface SocialItem {
  icon: string;
  label: string;
  handle: string;
  href: string;
}

export const SOCIALS_CONSTANTS: readonly SocialItem[] = [
  {
    icon: "gh",
    label: "GitHub",
    handle: "@SelahattinGngr",
    href: "https://github.com/SelahattinGngr",
  },
  {
    icon: "in",
    label: "LinkedIn",
    handle: "/in/selahattingungor",
    href: "https://linkedin.com/in/selahattingungor",
  },
  {
    icon: "web",
    label: "Web",
    handle: "selahattin.dev",
    href: "https://selahattin.dev",
  },
  {
    icon: "@",
    label: "E-posta",
    handle: "selahattin_gungor53@hotmail.com",
    href: "mailto:selahattin_gungor53@hotmail.com",
  },
] as const;
