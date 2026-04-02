import type { Metadata } from "next";
import { Comparison } from "@/views/Comparison";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compare Gear",
  description:
    "Compare up to three badminton products side by side — specs, performance metrics, and prices.",
  alternates: { canonical: `${siteConfig.url}/comparison` },
};

export default function Page() {
  return <Comparison />;
}
