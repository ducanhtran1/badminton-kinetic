import type { Metadata } from "next";
import { Wishlist } from "@/views/Wishlist";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your saved Kinetic gear — review items and move them to checkout when you are ready.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${siteConfig.url}/wishlist` },
};

export default function Page() {
  return <Wishlist />;
}
