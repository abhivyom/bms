import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BMSS International Academy | Shaping Leaders, Inspiring Excellence",
  description:
    "BMSS International Academy is a premier co-educational institution committed to academic brilliance, ethical leadership, and holistic development from Kindergarten through Grade 12.",
  keywords: [
    "BMSS Academy",
    "International School",
    "CBSE & Cambridge",
    "STEM Education",
    "Holistic Development",
    "Top Ranked School",
  ],
  authors: [{ name: "BMSS International Academy" }],
  openGraph: {
    title: "BMSS International Academy | Academic Brilliance & Ethical Leadership",
    description:
      "World-class 45-acre campus, Olympic-grade sports complex, cutting-edge AI & robotics labs, and 100% Ivy League & top university placements.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
