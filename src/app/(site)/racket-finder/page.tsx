import type { Metadata } from "next";
import { RacketFinder } from "@/views/RacketFinder";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Racket Finder",
  description:
    "Answer a few questions and get an AI-style recommendation for the best badminton racket for your playstyle.",
  alternates: { canonical: `${siteConfig.url}/racket-finder` },
};

export default function Page() {
  return <RacketFinder />;
}
