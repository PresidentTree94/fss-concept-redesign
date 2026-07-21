import Image from "next/image";
import Link from "next/link";
import Images from "@/components/Images";

const about = ["State & FSMA aligned", "Digital records, always ready", "Built by real auditors", "Save 10+ hrs/week"];

const services = [
  { heading: "Audit Prep", icon: "ri-clipboard-line", text: "Pre-audit gap reviews, mock inspections, and corrective action plans so inspection day is just another Tuesday." },
  { heading: "Training & Learning", icon: "ri-user-star-line", text: "Role-based paths, certifications, and automatic reminders that keep your team audit-ready year-round." },
  { heading: "Document Control", icon: "ri-file-copy-2-line", text: "Paper-to-digital conversion with version control and cloud backups — your records, always inspection-ready." }
];

const smart = [
  { heading: "Sustainable", text: "Culture that outlasts any single audit cycle." },
  { heading: "Measurable", text: "Live dashboards, not gut feelings." },
  { heading: "Affordable", text: "Grant-funded apprentice auditors — no budget strain." },
  { heading: "Reliable", text: "Versioned, searchable, inspection-ready docs." },
  { heading: "Timely", text: "24-hour audit-prep response when it's urgent." }
];

const modules = [
  { heading: "cGMP", icon: "ri-shield-check-line", text: "FDA-regulated practices required for FSMA compliance — from personnel to defect action levels." },
  { heading: "SSOP", icon: "ri-drop-line", text: "Step-by-step cleaning and sanitizing procedures for sanitary food processing environments." },
  { heading: "HACCP", icon: "ri-alert-line", text: "Systematic hazard analysis and critical control point management from raw material to finished product." },
  { heading: "Culture of Food Safety", icon: "ri-heart-pulse-line", text: "Building a workplace where safe food practices are second nature, not a checkbox exercise." }
];

const stats = [
  { number: "6", text: "month program" },
  { number: "$0", text: "cost to employer" },
  { number: "100%", text: "on-the-job training" },
  { number: "99%", text: "employer approval" }
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
            <Link href="/contact" className="btn-big"><i className="ri-shield-check-line"></i>Start Your Audit Prep</Link>
            <Link href="/services" className="bg-background-light/95 hover:bg-background-light px-7 py-3.5 rounded-md text-foreground-dark flex items-center gap-2">Explore Our Services<i className="ri-arrow-right-line"></i></Link>
          </div>
        </div>
      </section>
      <section className="bg-background-light">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 lg:!text-left">
          <div className="flex-1">
            <span className="tiny">Who We Are</span>
            <h2 className="text-3xl md:text-4xl text-foreground-dark max-w-lg mx-auto lg:mx-0">Compliance doesn't have to be chaos.</h2>
            <p className="text-foreground-light mt-4 mb-6 max-w-xl">Food SMART Strategies was built by real auditors who got tired of watching kitchens scramble before inspections. Our team brings decades of boots-on-the-ground regulatory experience, turning compliance from a panic event into a quiet daily habit.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-fit mx-auto sm:max-w-xl sm:mx-0">
              {about.map((a, index) => (
                <span key={index} className="flex items-center gap-1.5 text-sm text-foreground-light"><i className="ri-checkbox-circle-line text-primary-dark"></i>{a}</span>
              ))}
            </div>
            <Link href="/about" className="btn mt-7">Learn more about us<i className="ri-arrow-right-line"></i></Link>
          </div>
          <Images
            root="about"
            number="30+"
            text="years experience"
          />
        </div>
      </section>
      <section className="bg-secondary">
        <div>
          <span className="tiny">What We Do</span>
          <h2 className="text-3xl md:text-4xl text-foreground-dark max-w-2xl mx-auto">One platform for every compliance moment.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-8 text-left">
            {services.map((s, index) => (
              <div key={index} className="bg-background-light border border-border hover:border-primary-light p-6 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-[oklch(0.95_0.045_135)] rounded-md flex items-center justify-center">
                  <i className={`${s.icon} text-[oklch(0.5_0.14_135)] text-xl`}></i>
                </div>
                <h3 className="text-lg text-foreground-dark mt-4 mb-2">{s.heading}</h3>
                <p className="text-sm text-foreground-light">{s.text}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn">Explore all services<i className="ri-arrow-right-line"></i></Link>
        </div>
      </section>
      <section className="bg-background-light">
        <div>
          <span className="tiny">Why We're Different</span>
          <h2 className="text-3xl md:text-4xl text-foreground-dark max-w-2xl mx-auto">SMART isn't just our name — it's how we work.</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-fit mx-auto md:max-w-auto md:mx-0 my-10">
            {smart.map((s, index) => (
              <div key={index} className="bg-background-dark p-5 border border-border hover:border-primary-light rounded-md transition-colors">
                <span className="w-12 h-12 bg-primary-dark rounded-md inline-flex items-center justify-center font-display text-2xl font-bold text-background-light">{s.heading[0]}</span>
                <h3 className="text-sm text-foreground-dark mt-3 mb-1.5">{s.heading}</h3>
                <p className="text-xs text-foreground-light">{s.text}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="border-2 border-primary-dark hover:bg-primary-dark hover:text-background-light text-primary-dark px-5 py-2.5 rounded-md text-sm font-semibold inline-flex items-center gap-2 transition-colors">See the full SMART methodology<i className="ri-arrow-right-line"></i></Link>
        </div>
      </section>
      <section className="bg-background-dark">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 lg:!text-left">
          <div className="flex-1">
            <span className="tiny">E-Learning</span>
            <h2 className="text-3xl md:text-4xl text-foreground-dark max-w-lg mx-auto lg:mx-0">FSMA-compliant training, on your schedule.</h2>
            <p className="mt-4 mb-7 max-w-xl text-foreground-light mx-auto lg:mx-0">Four comprehensive modules built by real auditors. Earn certified badges with one-year expiration — proof your team is audit-ready, from any device.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modules.map((m, index) => (
                <div key={index} className="bg-background-light p-4 rounded-md border border-border hover:border-primary-light text-left transition-colors">
                  <div className="w-8 h-8 bg-[oklch(0.95_0.045_135)] rounded-md flex items-center justify-center">
                    <i className={`${m.icon} text-[oklch(0.5_0.14_135)] text-sm`}></i>
                  </div>
                  <h3 className="mt-2 mb-1 text-sm text-foreground-dark">{m.heading}</h3>
                  <p className="text-xs text-foreground-light">{m.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link href="/e-learning" className="btn">Explore E-Learning<i className="ri-arrow-right-line"></i></Link>
              <span className="text-sm text-foreground-light">Starting at $25 per module</span>
            </div>
          </div>
          <Images
            root="elearning"
            number="4"
            text="certified modules"
          />
        </div>
      </section>
      <section className="bg-background-light">
        <div>
          <span className="tiny">Careers</span>
          <h2 className="text-3xl md:text-4xl text-foreground-dark max-w-2xl mx-auto">Build your team at zero cost.</h2>
          <p className="mt-3 mb-10 text-foreground-light max-w-xl mx-auto">Our Incumbent Worker Apprenticeship turns your existing employees into certified food safety specialists — fully funded, zero downtime, nationally recognized credentials.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, index) => (
              <div key={index} className="bg-[oklch(0.98_0.02_135)] border border-primary-light/40 p-5 rounded-lg">
                <h3 className="text-3xl md:text-4xl text-primary-dark">{s.number}</h3>
                <p className="text-xs text-foreground-light mt-1.5">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <Link href="/careers" className="btn">View Careers<i className="ri-arrow-right-line"></i></Link>
            <p className="text-sm text-foreground-light">Apprenticeships, on-site training & open roles</p>
          </div>
        </div>
      </section>
      <section className="relative">
        <Image src="/contact.jpg" alt="Fruit" fill sizes="100%" className="object-cover object-top" />
        <div className="absolute inset-0 bg-[oklch(0.32_0.09_135)]/85"></div>
        <div className="relative p-16 max-w-6xl mx-auto px-10 text-center">
          <h2 className="text-3xl md:text-4xl text-background-light">Ready to make your next inspection a non-event?</h2>
          <p className="text-background-dark/80 mt-2 mb-6">Book a 20-minute call with our audit team. No fluff — just a real plan for your facility.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 font-semibold">
            <Link href="/contact" className="btn-big"><i className="ri-calendar-check-line"></i>Book a Demo</Link>
            <a href="" className="bg-background-light text-foreground-dark px-7 py-3.5 rounded-md flex items-center gap-2
            "><i className="ri-download-line"></i>Download FSMA PDF</a>
          </div>
        </div>
      </section>
    </main>
  );
}
