export type SiteConfig = typeof siteConfig;

/** Canonical site URL (no trailing slash) — used for Open Graph images. */
export const siteUrl = "https://rileyellwanger.github.io";

export const siteConfig = {
  name: "Riley Ellwanger",
  description:
    "Software engineer blending agriculture, geospatial data, and full-stack web development — AgTech, conservation, and practical tools for people on the ground.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
  ],
  links: {
    github: "https://github.com/rileyellwanger",
    linkedin: "https://www.linkedin.com/in/riley-ellwanger/",
    /** Public GitHub Pages source for this site */
    siteRepo: "https://github.com/rileyellwanger/rileyellwanger.github.io",
    email: "mailto:rileyellwanger@outlook.com",
    emailDisplay: "rileyellwanger@outlook.com",
    /** Place a PDF at public/resume.pdf to enable the resume link */
    resume: "/resume.pdf",
  },
};
