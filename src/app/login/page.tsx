import type { Metadata } from "next";
import { Login } from "@/views/Login";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Kinetic account — access your locker and orders.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${siteConfig.url}/login` },
};

export default function LoginPage() {
  return <Login />;
}
