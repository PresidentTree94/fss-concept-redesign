import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "remixicon/fonts/remixicon.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"]
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Food SMART Strategies Concept Redesign",
  description: "A concept redesign for the Food SMART Strategies (FSS) website, not affiliated or commissioned by FSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
