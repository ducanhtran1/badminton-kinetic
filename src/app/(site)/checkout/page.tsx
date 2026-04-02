import type { Metadata } from "next";
import { Checkout } from "@/views/Checkout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout for your Kinetic gear — shipping, payment, and order summary.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${siteConfig.url}/checkout` },
};

export default function Page() {
  return <Checkout />;
}
