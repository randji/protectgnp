import "./globals.css";
import type { Metadata } from "next";
import { inter, dmSerif } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "GNP-PROTECT",
  description: "Votre partenaire de confiance en vidéosurveillance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${dmSerif.className}`}>
        {children}
      </body>
    </html>
  );
}
