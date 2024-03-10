import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transition",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={"scroll-smooth"}>
      <link
          sizes="any"
          rel={"icon"}
          href={"https://em-content.zobj.net/source/apple/391/flashlight_1f526.png"}
      />
      <body className={inter.className}>
      <Header />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
