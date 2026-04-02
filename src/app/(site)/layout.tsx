import { ShellLayout } from "@/components/Layout";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShellLayout>{children}</ShellLayout>;
}
