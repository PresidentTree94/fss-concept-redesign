"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navs = [
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "E-Learning", link: "/e-learning" },
  { text: "Careers", link: "/careers" }
];

export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (pathname !== "/" || open) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
    const handleScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = scrolled || open;

  return (
    <header className={`fixed top-0 inset-x-0 z-1 ${isActive ? "bg-background-light/95 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary-dark rounded-md flex items-center justify-center">
              <i className="ri-leaf-line text-background-light text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-lg font-bold ${isActive ? "text-foreground-dark" : "text-background-light"}`}>Food <span className={isActive ? "text-primary-dark" : "text-primary-light"}>SMART</span> Strategies</span>
              <span className={`text-xs ${isActive ? "text-foreground-light" : "text-background-dark/80"}`}>The Food Safety Experts</span>
            </div>
          </Link>
          <i className={`ri-menu-line text-2xl lg:hidden ${isActive ? "text-foreground-dark" : "text-background-light"}`}></i>
        </div>
        <nav className="hidden lg:flex gap-1 text-sm font-medium">
          {navs.map((n, index) => (
            <Link key={index} href={n.link} className={`${isActive ? "text-foreground-light" : "text-background-light/90"} px-3 py-2`}>{n.text}</Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden lg:block text-sm font-semibold bg-primary-dark px-5 py-2.5 rounded-md text-background-light">Book a Demo</Link>
      </div>
    </header>
  );
}