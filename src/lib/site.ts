export const siteConfig = {
  name: "Kinetic",
  titleTemplate: "%s | Kinetic Badminton",
  defaultTitle: "Kinetic · Badminton Gear & Performance",
  description:
    "Shop pro badminton rackets, shoes, and gear. Aerodynamic design, curated collection, racket finder, and side-by-side comparison.",
  locale: "en_US",
  get url() {
    if (typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
    }
    return "http://localhost:3000";
  },
};
