import type { Metadata } from "next";
import Topbar from "@/components/shared/topbar"
import Footer from "@/components/shared/footer"
import "../globals.css";
import { switzer } from '@/fonts/switzer';

export const metadata: Metadata = {
  title: {
    default: "TD Solar & Electric | Residential Solar & Electrical Services in Nuevo, CA",
    template: "%s | TD Solar & Electric",
  },
  description:
    "TD Solar & Electric provides residential solar installation, electrical panel upgrades, EV charger installation, battery backup, generators, and electrical services in Nuevo, CA and surrounding Inland Empire communities including Perris, Menifee, Moreno Valley, and Hemet.",
  applicationName: "TD Solar & Electric",
  keywords: [
    "TD Solar & Electric",
    "solar installation Nuevo CA",
    "residential solar Inland Empire",
    "electrician Nuevo CA",
    "electrical panel upgrades",
    "EV charger installation",
    "battery backup installation",
    "generator installation",
    "solar maintenance and repair",
    "Perris solar electrician",
    "Menifee electrical services",
    "Moreno Valley solar installer",
  ],
  authors: [{ name: "TD Solar & Electric" }],
  creator: "TD Solar & Electric",
  publisher: "TD Solar & Electric",
  metadataBase: new URL("https://www.tdsolarelectric.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TD Solar & Electric | Residential Solar & Electrical Services",
    description:
      "Residential solar and electrical services in Nuevo, CA. Solar installation, EV chargers, panel upgrades, battery backup, generators, and more.",
    url: "https://www.tdsolarelectric.com",
    siteName: "TD Solar & Electric",
    images: [
      {
        url: "/og/td-solar-og.jpg",
        width: 1200,
        height: 630,
        alt: "TD Solar & Electric – Residential Solar & Electrical Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TD Solar & Electric | Residential Solar & Electrical Services",
    description:
      "Professional residential solar and electrical services in Nuevo, CA and the Inland Empire.",
    images: ["/og/td-solar-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={switzer.variable}>
      <body className="font-switzer min-h-screen flex flex-col">
        <Topbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
