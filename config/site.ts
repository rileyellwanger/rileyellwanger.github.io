export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Riley Ellwanger",
  description: "Digital Ag",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Work",
      href: "/work",
    },
  ],
  navMenuItems: [
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    linkedin: "https://www.linkedin.com/company/heroui",
  },
};
