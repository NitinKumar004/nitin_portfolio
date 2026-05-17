"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, Code2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const channels = [
  { icon: Mail,     label: "email",    value: profile.email,                       href: "mailto:" + profile.email },
  { icon: Phone,    label: "phone",    value: profile.phone,                       href: "tel:" + profile.phone.replace(/\s+/g, "") },
  { icon: Linkedin, label: "linkedin", value: "/in/nitin-kumar-patel-49360a257",   href: profile.socials.linkedin },
  { icon: Github,   label: "github",   value: "@NitinKumar004",                    href: profile.socials.github },
  { icon: Code2,    label: "leetcode", value: "u/nitin_patel04",                   href: profile.socials.leetcode },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 08"
          file="contact.sh"
          title="Let's build something."
          description="Open to full-time, freelance, and open-source collaboration. I usually reply within a day."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-4">
          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="group panel card-hover flex items-center gap-3 px-3.5 py-3"
              >
                <div className="w-8 h-8 rounded-md bg-lime/10 border border-lime/25 grid place-items-center group-hover:bg-lime/15 transition">
                  <c.icon className="w-3.5 h-3.5 text-lime" strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] text-fg-faint uppercase tracking-widest">
                    {c.label}
                  </div>
                  <div className="font-mono text-[12.5px] text-fg truncate">
                    {c.value}
                  </div>
                </div>
                <Send size={13} className="text-fg-faint group-hover:text-lime group-hover:translate-x-0.5 transition" />
              </motion.a>
            ))}

            <div className="panel flex items-center gap-3 px-3.5 py-3">
              <div className="w-8 h-8 rounded-md bg-lime/10 border border-lime/25 grid place-items-center">
                <MapPin className="w-3.5 h-3.5 text-lime" strokeWidth={2.25} />
              </div>
              <div>
                <div className="font-mono text-[10px] text-fg-faint uppercase tracking-widest">
                  based in
                </div>
                <div className="font-mono text-[12.5px] text-fg">
                  {profile.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent("Portfolio enquiry from " + (data.get("name") || "Visitor"));
              const body = encodeURIComponent(
                "Hi Nitin,\n\n" +
                  (data.get("message") || "") +
                  "\n\n— " +
                  (data.get("name") || "") +
                  "\n" +
                  (data.get("email") || "")
              );
              window.location.href = "mailto:" + profile.email + "?subject=" + subject + "&body=" + body;
            }}
            className="window"
          >
            <div className="window-titlebar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="ml-1.5 text-fg-muted">send_message.sh</span>
              <span className="ml-auto text-lime">$ ready</span>
            </div>
            <div className="p-5 sm:p-6 space-y-3.5">
              <div className="grid sm:grid-cols-2 gap-3">
                <Field name="name"  label="--name"  placeholder="your name" required />
                <Field name="email" label="--email" placeholder="you@example.com" type="email" required />
              </div>
              <Field name="subject" label="--subject" placeholder="what's this about?" />
              <div>
                <label className="block font-mono text-[10.5px] text-fg-faint mb-1.5">
                  --message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="tell me about your project, idea, or question..."
                  className="w-full bg-ink-50/60 border border-line2 focus:border-lime/50 focus:bg-ink-50 rounded-md px-3 py-2.5 text-[13px] font-mono text-fg placeholder:text-fg-faint outline-none transition resize-none"
                />
              </div>
              <div className="panel-flat p-3 mt-1">
                <div className="flex items-center justify-between font-mono text-[10.5px] mb-2">
                  <span className="text-fg-faint">{"// ready to execute"}</span>
                  <span className="inline-flex items-center gap-1 text-lime">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-tick" />
                    no errors
                  </span>
                </div>
                <button type="submit" className="btn-primary w-full group">
                  <span className="text-lime">$</span>
                  <span>./send-message</span>
                  <span className="text-fg-faint">--to=nitin</span>
                  <Send size={12} className="btn-arrow" strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text", required,
}: { name: string; label: string; placeholder: string; type?: string; required?: boolean; }) {
  return (
    <div>
      <label className="block font-mono text-[10.5px] text-fg-faint mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-ink-50/60 border border-line2 focus:border-lime/50 focus:bg-ink-50 rounded-md px-3 py-2.5 text-[13px] font-mono text-fg placeholder:text-fg-faint outline-none transition"
      />
    </div>
  );
}
