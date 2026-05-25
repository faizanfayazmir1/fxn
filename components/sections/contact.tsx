"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // ===== Option A: EmailJS =====
    // Uncomment + `npm i @emailjs/browser` and fill in env vars.
    //
    // try {
    //   const emailjs = (await import("@emailjs/browser")).default;
    //   await emailjs.send(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    //     { from_name: form.name, from_email: form.email, message: form.message },
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    //   );
    //   setStatus("sent");
    //   setForm({ name: "", email: "", message: "" });
    // } catch {
    //   setStatus("error");
    // }

    // ===== Option B: Formspree =====
    // const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    // const res = await fetch(`https://formspree.io/f/${id}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify(form),
    // });
    // setStatus(res.ok ? "sent" : "error");

    // Mock send for the starter:
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative px-6 md:px-10 py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="06" title="Contact" />
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.98] tracking-[-0.01em]">
              Let&apos;s build
              <br />
              <span className="italic text-accent">something</span> good.
            </h2>
            <p className="mt-8 text-muted leading-relaxed max-w-md text-[15px]">
              Open to interesting backend, cloud, or AI-systems work. Reach out — I usually reply within a day.
            </p>
            <div className="mt-10 space-y-5">
              <button onClick={copyEmail} className="flex items-center gap-3 group">
                <Mail size={16} className="text-accent" />
                <span className="font-mono text-sm magnetic-link">{PROFILE.email}</span>
                {copied ? (
                  <Check size={14} className="text-accent" />
                ) : (
                  <Copy size={13} className="opacity-50 group-hover:opacity-100 transition" />
                )}
              </button>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span className="font-mono text-sm">{PROFILE.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span className="font-mono text-sm">{PROFILE.location}</span>
              </div>
            </div>
            <div className="mt-10 flex gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full flex items-center justify-center border border-border-strong hover:bg-accent hover:border-accent hover:text-[#0a0908] transition"
              >
                <Github size={16} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full flex items-center justify-center border border-border-strong hover:bg-accent hover:border-accent hover:text-[#0a0908] transition"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="w-11 h-11 rounded-full flex items-center justify-center border border-border-strong hover:bg-accent hover:border-accent hover:text-[#0a0908] transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="md:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-sm border border-border bg-bg-elev space-y-5"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                Send a message
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border-strong py-2 text-sm focus:outline-none focus:border-accent transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border-strong py-2 text-sm focus:outline-none focus:border-accent transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border-strong py-2 text-sm focus:outline-none focus:border-accent transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-accent text-[#0a0908] transition disabled:opacity-70"
              >
                {status === "idle" && (
                  <>
                    Send <Send size={14} />
                  </>
                )}
                {status === "sending" && <>Sending…</>}
                {status === "sent" && (
                  <>
                    Sent <Check size={14} />
                  </>
                )}
                {status === "error" && <>Try again</>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
