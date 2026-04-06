import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formation ADS — Rivia",
  description: "Formation ADS Rivia — Scripts, hooks, révélations, process complet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
