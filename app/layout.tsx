import "./globals.css";
import type { Metadata } from "next";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "WWSablon | Jasa Sablon Baju Profesional",
  description:
    "Jasa sablon kaos custom berkualitas tinggi. Pesan sekarang via WhatsApp.",
  metadataBase: new URL("https://wwsablon.example"),
  openGraph: {
    title: "WWSablon | Jasa Sablon Baju Profesional",
    description:
      "Jasa sablon kaos custom berkualitas tinggi. Pesan sekarang via WhatsApp.",
    url: "https://wwsablon.example",
    siteName: "WWSablon",
    images: [
      {
        url: "https://wwsablon.example/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WWSablon - Jasa Sablon",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
