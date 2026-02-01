import { Metadata } from "next";
import WhitePaperClient from "@/components/whitepaper/WhitePaperClient";
import dynamic from "next/dynamic";

// Dynamically import the MDX file to ensure it compiles properly
const WhitePaper = dynamic(() => import("@/data/white-paper/white-paper.mdx"));

export const metadata = {
  title: "Hoskilien ($HSKN) White Paper | MemePin & DePin Innovation",
  description:
    "Explore the official Hoskilien ($HSKN) white paper — learn how MemePin merges meme culture and decentralized physical infrastructure (DePin) on Cardano.",
  keywords: ["Hoskilien", "$HSKN", "MemePin", "DePin", "Cardano", "World Mobile", "crypto", "blockchain", "meme coin with utility", "Web3 infrastructure"],
  image: "/hsksn-memepin.jpg",
  tags: ["Crypto", "Cardano", "DePin", "Web3", "Meme Coin", "Blockchain"],
  openGraph: {
    title: "Hoskilien ($HSKN) White Paper",
    description:
      "Discover Hoskilien’s unique fusion of meme culture and DePin technology — bridging crypto innovation and real-world connectivity.",
    url: "https://yourdomain.com/white-paper",
    siteName: "Hoskilien",
    images: [
      {
        url: "/hsksn-memepin.jpg",
        width: 1200,
        height: 630,
        alt: "Hoskilien MemePin White Paper",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoskilien ($HSKN) White Paper",
    description:
      "Read the official Hoskilien white paper — pioneering MemePin through Cardano-based DePin utility.",
    images: ["https://s3.us-east-2.amazonaws.com/hom.assets/hsksn-memepin.jpg"],
  },
};

export default function WhitePaperPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 prose prose-invert lg:prose-lg bg-black">
      <WhitePaperClient />
    </main>
  );
}
