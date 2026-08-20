import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host?.includes("localhost") ? "http" : "https");
  const socialImage = host ? `${protocol}://${host}/og.png` : "/og.png";
  const title = "Paola Milani | Psicologia Infantojuvenil";
  const description = "Atendimento psicológico infantojuvenil com acolhimento, escuta e cuidado.";

  return {
    title,
    description,
    icons: {
      icon: "/paola/borboleta-lilas.png",
      apple: "/paola/borboleta-lilas.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Paola Milani — Psicologia Infantojuvenil" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
