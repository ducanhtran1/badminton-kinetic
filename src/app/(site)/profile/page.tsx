import type { Metadata } from "next";
import { Profile } from "@/views/Profile";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your Kinetic account — performance stats, order history, and saved gear.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${siteConfig.url}/profile` },
};

export default function Page() {
  return <Profile />;
}
