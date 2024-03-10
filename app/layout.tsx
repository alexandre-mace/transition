import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Spotlight } from "@/components/ui/spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transitions",
  description: "Explorer les idées reçues de la transition énergétique",
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
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <body className={inter.className}>
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="yellow"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
