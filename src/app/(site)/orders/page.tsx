import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Orders",
  description: "Your Kinetic order history.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${siteConfig.url}/orders` },
};

export default function OrdersPage() {
  return (
    <div className="p-8 text-center font-headline font-bold text-2xl">Your Orders History</div>
  );
}
