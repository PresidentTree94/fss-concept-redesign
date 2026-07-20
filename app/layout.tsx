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

const socials = [
  { icon: "ri-linkedin-fill", link: "" },
  { icon: "ri-instagram-line", link: "" },
  { icon: "ri-facebook-fill", link: "" }
];

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
        <footer className="bg-primary-dark p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-background-light flex items-center justify-center rounded-md">
                  <i className="ri-leaf-line text-xl text-primary-dark"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-background-light">Food SMART Strategies</h3>
                  <p className="text-xs text-background-dark/80">The Food Safety Experts</p>
                </div>
              </div>
              <p className="text-sm text-background-dark/80 mt-4">30 years of experience helping food, dietary supplement, agriculture and seafood companies stay compliant, audit-ready, and always in operation.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-background-light">Stay Connected</h3>
              <p className="text-background-dark/80 text-sm">Learn from our experts. Follow the culture of food safety.</p>
              <div className="flex gap-3">
                {socials.map((s, index) => (
                  <a key={index} href={s.link} className="w-10 h-10 bg-primary-light/40 rounded-md flex items-center justify-center hover:bg-primary-light/20 transition-colors">
                    <i className={`${s.icon} text-lg text-background-light`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-background-light">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-background-dark/80">
                <li className="flex gap-2">
                  <i className="ri-map-pin-line"></i>
                  <address className="not-italic">100 N. Brand Blvd., Ste. 306<br/>Glendale, CA 91203</address>
                </li>
                <li className="flex gap-2">
                  <i className="ri-phone-line"></i>
                  <a href="tel:8182471368" className="hover:text-background-light transition-colors">(818) 247-1368</a>
                </li>
                <li className="flex gap-2">
                  <i className="ri-mail-line"></i>
                  <a href="mailto:info@foodsmartstrategies.com" className="hover:text-background-light transition-colors">info@foodsmartstrategies.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-10 pt-6 text-xs text-background-dark/80 border-t border-primary-light/40">
            <p>&copy; 2026 Food SMART Strategies Concept Design</p>
            <p>Made by <a href="https://karlydev.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-background-light transition-colors">karly.dev</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
