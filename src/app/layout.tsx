import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://timotei1070.github.io/revit-house-plans";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Timotei Blindu — Dessinateur en construction & aide chantier · Bruxelles",
  description:
    "Étudiant dessinateur en construction (Lycée la Retraite, Bruxelles). Plans 2D, métrés, aide chantier et rénovation à Anderlecht et Bruxelles. Devis gratuit.",
  keywords: [
    "dessinateur construction Bruxelles",
    "aide chantier Anderlecht",
    "plans construction étudiant",
    "Timotei Blindu",
    "rénovation Bruxelles",
  ],
  openGraph: {
    title: "Timotei Blindu — Dessinateur & aide construction Bruxelles",
    description:
      "Plans 2D, métrés, aide chantier. Étudiant sérieux, ponctuel, disponible weekend et vacances scolaires.",
    locale: "fr_BE",
    type: "website",
    url: SITE_URL,
    siteName: "Timotei Blindu",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Timotei Blindu — Dessinateur en construction & aide chantier Bruxelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timotei Blindu — Dessinateur & aide construction Bruxelles",
    description: "Plans 2D, métrés, aide chantier. Bruxelles & périphérie.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
