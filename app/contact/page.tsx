"use client";
import { use, useState } from "react";
import Accordian from "@/components/Accordian";

const faq = [
  { question: "How quickly can Food SMART Strategies help us get audit-ready?", answer: "Most clients complete our Gap Assessment inside 10 business days. After that, the app rollout and training typically bring your team to inspection-ready status within 4 to 8 weeks depending on facility size." },
  { question: "Do you work with restaurants, or only large manufacturers?", answer: "Both. We serve everyone from single-location restaurants and small dietary supplement makers to nationwide food manufacturers and seafood processors — the app scales to your size." },
  { question: "How does the apprentice auditor program work?", answer: "Apprentices are fully paid by our grant-funded program, including health benefits, workers' comp and 401K. After the first year, you can hire the apprentice with zero conversion fee." },
  { question: "Is your platform aligned with FSMA and California state law?", answer: "Yes — every checklist, SOP and training path in our app is aligned with FSMA rules and updated against California's food safety guidelines by our own audit team." },
  { question: "Can you digitize the paper records we already use?", answer: "Absolutely. Our documentation service scans and converts your existing paper forms into an electronic records management system, with e-signature and retention policies built in." }
];

export default function Contact() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <main className="pt-16">
      <section className="bg-background-dark">
        <div>
          <span className="tiny">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground-dark">Answers before you ask.</h2>
          <div className="space-y-3 mt-12 text-left">
            {faq.map((f, index) => (
              <Accordian
                key={index}
                faq={f}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background-light">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 !text-left">
          <div className="lg:col-span-3 flex flex-col">
            <span className="tiny">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground-dark">Please get in touch with us today.</h2>
            <p className="mt-4 mb-8 text-foreground-light">Learn how Food SMART Strategies can help your future success. Send us a note or download the FSMA overview PDF to get started.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.9930834325487!2d-118.25731262415448!3d34.146519073121695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0ff8e292537%3A0xa0b9f06d8217eb27!2s100%20N%20Brand%20Blvd%2C%20Glendale%2C%20CA%2091203!5e0!3m2!1sen!2sus!4v1784594362841!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className="flex-1 w-full rounded-lg aspect-video md:aspect-auto min-h-55"></iframe>
          </div>
          <form className="lg:col-span-4 bg-background-dark p-6 md:p-10 border border-border rounded-lg">
            <h3 className="text-2xl text-foreground-dark">Send us a message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="space-y-1.5">
                <label className="lbl">Full name</label>
                <input type="text" className="inpt" />
              </div>
              <div className="space-y-1.5">
                <label className="lbl">Email</label>
                <input type="email" className="inpt" />
              </div>
              <div className="space-y-1.5">
                <label className="lbl">Company</label>
                <input type="text" className="inpt" />
              </div>
              <div className="space-y-1.5">
                <label className="lbl">Phone</label>
                <input type="tel" className="inpt" />
              </div>
              <div className="space-y-1.5 col-span-full">
                <label className="lbl">Industry</label>
                <select className="inpt">
                  <option value="" disabled selected>Select an industry</option>
                </select>
              </div>
              <div className="col-span-full">
                <label className="lbl">How can we help?</label>
                <textarea className="inpt resize-none mt-1.5" rows={5} maxLength={500}></textarea>
                <p className="text-xs text-foreground-light">Up to 500 characters.</p>
              </div>
              <div className="col-span-full flex flex-col sm:flex-row items-start gap-3">
                <p className="text-xs text-foreground-light flex-1">By submitting, you agree to be contacted about your food safety compliance needs.</p>
                <button className="btn-big cursor-pointer">Submit Message<i className="ri-arrow-right-line"></i></button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}