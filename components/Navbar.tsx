"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navs = [
  { text: "About", link: "" },
  { text: "Services", link: "" },
  { text: "E-Learning", link: "" },
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
    <header className={`fixed top-0 inset-x-0 z-1 ${isActive ? "bg-background-light/95 backdrop-blur border-b border-border" : "bg-transparent"} transition-colors duration-300`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:px-6">
        <div className="min-h-16 flex items-center justify-between px-6 lg:px-0">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="w-11 h-11 bg-primary-dark rounded-md flex items-center justify-center">
              <i className="ri-leaf-line text-background-light text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-lg font-bold ${isActive ? "text-foreground-dark" : "text-background-light"} transition-colors duration-300`}>Food <span className={`${isActive ? "text-primary-dark" : "text-primary-light"} transition-colors duration-300`}>SMART</span> Strategies</span>
              <span className={`text-xs ${isActive ? "text-foreground-light" : "text-background-dark/80"} transition-colors duration-300`}>The Food Safety Experts</span>
            </div>
          </Link>
          <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-2xl lg:hidden ${isActive ? "text-foreground-dark" : "text-background-light"} transition-colors duration-300`} onClick={() => setOpen(!open)}></i>
        </div>
        <nav className={`${open ? "flex" : "hidden lg:flex"} flex-col lg:flex-row gap-1 text-sm font-medium pt-4 pb-3 lg:py-0 border-t lg:border-t-0 border-border px-6 lg:px-0`}>
          {navs.map((n, index) => (
            <Link key={index} href={n.link ? n.link : "#"} className={`${isActive ? "text-foreground-light" : "text-background-light/90"} ${!n.link && "line-through"} px-3 py-2 rounded-md hover:text-background-light hover:bg-background-light/10 transition-colors duration-300`} onClick={() => setOpen(false)}>{n.text}</Link>
          ))}
        </nav>
        <Link href="/contact" className={`${open ? "block" : "hidden lg:block"} text-sm font-semibold bg-primary-dark hover:bg-primary-hover px-5 py-2.5 rounded-md text-background-light mb-4 lg:mb-0 mx-6 lg:mx-0 transition-colors duration-300`}>Book a Demo</Link>
      </div>
    </header>
  );
}