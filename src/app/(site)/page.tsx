import type { Metadata } from "next";
import { Home } from "@/views/Home";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Defy gravity with Kinetic badminton gear — rackets, shoes, bags, and AI racket finder. Engineered for elite court performance.",
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function Page() {
  return <Home />;
}
