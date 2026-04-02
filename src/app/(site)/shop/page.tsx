import type { Metadata } from "next";
import { Shop } from "@/views/Shop";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse pro badminton rackets, shoes, shuttles, and bags. Filter by category, compare ratings, and find your next racket.",
  alternates: { canonical: `${siteConfig.url}/shop` },
};

export default function Page() {
  return <Shop />;
}
