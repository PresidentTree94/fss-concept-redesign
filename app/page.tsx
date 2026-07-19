import Image from "next/image";
import Link from "next/link";

const about = ["State & FSMA aligned", "Digital records, always ready", "Built by real auditors", "Save 10+ hrs/week"];

const services = [
  { heading: "Audit Prep", icon: "ri-clipboard-line", description: "Pre-audit gap reviews, mock inspections, and corrective action plans so inspection day is just another Tuesday." },
  { heading: "Training & Learning", icon: "ri-user-star-line", description: "Role-based paths, certifications, and automatic reminders that keep your team audit-ready year-round." },
  { heading: "Document Control", icon: "ri-file-copy-2-line", description: "Paper-to-digital conversion with version control and cloud backups — your records, always inspection-ready." }
];

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Image src="/hero.jpg" alt="Chef" fill sizes="100%" className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-dark/45 via-foreground-dark/30 to-foreground-dark/60"></div>
        <div className="relative p-10 md:p-16 pt-26 md:pt-32 text-center flex flex-col items-center">
          <div className="bg-background-light/95 px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-dark"></span>
            <span className="text-xs font-semibold uppercase tracking-widest">Trusted since 1994</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background-light my-6">Food Safety and Compliance<span className="text-primary-light inline-block">at Your Fingertips</span></h1>
          <p className="md:text-lg max-w-2xl mx-auto text-background-dark">Simpler audit prep, self-directed employee training, and automated document control — purpose-built for the food, dietary supplement, agriculture and seafood industries.</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 font-semibold">
            <button className="bg-primary-dark px-7 py-3.5 rounded-md text-background-light flex items-center gap-2"><i className="ri-shield-check-line"></i>Start Your Audit Prep</button>
            <button className="bg-background-light/95 px-7 py-3.5 rounded-md text-foreground-dark flex items-center gap-2">Explore Our Services<i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </section>
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 text-center lg:text-left">
          <div className="flex-1">
            <span className="tiny font-semibold text-primary-dark">Who We Are</span>
            <h2 className="text-4xl text-foreground-dark max-w-lg mx-auto lg:mx-0">Compliance doesn't have to be chaos.</h2>
            <p className="text-foreground-light mt-4 mb-6 max-w-xl">Food SMART Strategies was built by real auditors who got tired of watching kitchens scramble before inspections. Our team brings decades of boots-on-the-ground regulatory experience, turning compliance from a panic event into a quiet daily habit.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-fit mx-auto sm:max-w-xl sm:mx-0">
              {about.map((a, index) => (
                <span key={index} className="flex items-center gap-1.5 text-sm text-foreground-light"><i className="ri-checkbox-circle-line text-primary-dark"></i>{a}</span>
              ))}
            </div>
            <Link href="/about" className="bg-primary-dark text-background-light px-5 py-2.5 rounded-md text-sm font-semibold inline-flex items-center gap-2 mt-7">Learn more about us<i className="ri-arrow-right-line"></i></Link>
          </div>
          <div className="relative grid grid-cols-[minmax(0,10rem)_minmax(0,10rem)] gap-4">
            <div className="space-y-4">
              <Image src="/about-1.jpg" alt="Chef" width={512} height={640} className="rounded-md" />
              <div className="bg-primary-dark p-4 rounded-md text-background-light flex flex-col text-left">
                <span className="font-display text-2xl font-bold">30+</span>
                <span className="text-xs">years experience</span>
              </div>
            </div>
            <Image src="/about-2.jpg" alt="Chefs" width={512} height={896} className="rounded-md mt-8" />
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <span className="tiny font-semibold text-primary-dark">What We Do</span>
          <h2 className="text-4xl text-foreground-dark max-w-2xl mx-auto">One platform for every compliance moment.</h2>
          <div className="grid grid-cols-3 gap-5 mt-10 mb-8 text-left">
            {services.map((s, index) => (
              <div key={index} className="bg-background-light border border-border p-6 rounded-lg">
                <div className="w-10 h-10 bg-[oklch(0.95_0.045_135)] rounded-md flex items-center justify-center">
                  <i className={`${s.icon} text-[oklch(0.5_0.14_135)] text-xl`}></i>
                </div>
                <h3 className="text-lg text-foreground-dark mt-4 mb-2">{s.heading}</h3>
                <p className="text-sm text-foreground-light">{s.description}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="bg-primary-dark text-background-light px-5 py-2.5 rounded-md text-sm font-semibold inline-flex items-center gap-2">Explore all services<i className="ri-arrow-right-line"></i></Link>
        </div>
      </section>
      <section className="bg-background-light">SMART</section>
      <section className="bg-background-dark">E-Learning</section>
      <section>Careers</section>
      <section>Contact</section>
    </main>
  );
}
