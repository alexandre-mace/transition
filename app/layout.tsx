import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Spotlight } from "@/components/ui/spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transitions",
  description:
    "Explorer les idées reçues de la transition vers la neutralité carbone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={"scroll-smooth antialiased"}>
      <link
        sizes="any"
        rel={"icon"}
        href={
          "https://em-content.zobj.net/source/apple/391/flashlight_1f526.png"
        }
      />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
