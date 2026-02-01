import type { Metadata } from "next";
import Topbar from "@/components/shared/topbar"
import Footer from "@/components/shared/footer"
import "../globals.css";
import { switzer } from '@/fonts/switzer';


export const metadata: Metadata = {
  title: "TD Solar & Electric",
  description: "TD Solar & Electric",
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
