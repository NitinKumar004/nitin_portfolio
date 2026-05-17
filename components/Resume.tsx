"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, Eye, Calendar, FileType2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { resume, profile } from "@/lib/data";

const meta = [
  { icon: FileType2, k: "format",  v: "pdf" },
  { icon: Calendar,  k: "updated", v: resume.updated },
  { icon: FileText,  k: "size",    v: resume.size },
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 07"
          file="resume.pdf"
          title="Grab my resume."
          description="The condensed version — same content, ATS-friendly format. Preview in browser or download a copy."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="window overflow-hidden"
        >
          {/* Window titlebar */}
          <div className="window-titlebar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="ml-1.5 text-fg-muted">{resume.filename}</span>
            <span className="ml-auto inline-flex items-center gap-1 text-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-tick" />
              up to date
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            {/* LEFT — info + actions */}
            <div className="p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-line">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] font-mono bg-lime/10 border border-lime/25 text-lime">
                <FileText size={11} />
                pdf · ats-friendly
              </div>

              <h3 className="mt-3 font-display tracking-tighter text-2xl sm:text-[28px] text-fg">
                {profile.name} — {profile.title}
              </h3>
              <p className="mt-2 text-[13px] text-fg-muted leading-relaxed max-w-md">
                Curated 1-page resume highlighting backend, Go, cloud, AI tooling
                experience and open-source contributions.
              </p>

              {/* meta grid */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {meta.map((m) => (
                  <div key={m.k} className="panel-flat px-2.5 py-2">
                    <div className="flex items-center gap-1 font-mono text-[9.5px] text-fg-faint uppercase tracking-wider">
                      <m.icon size={9} className="text-fg-dim" />
                      {m.k}
                    </div>
                    <div className="mt-0.5 font-mono text-[12.5px] text-fg">
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>

              {/* actions */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href={resume.path}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary group"
                >
                  <span className="text-lime">$</span>
                  <span>open --in=new-tab</span>
                  <Eye size={12} className="btn-arrow" strokeWidth={2.25} />
                </a>
                <a
                  href={resume.path}
                  download={resume.filename}
                  className="btn-primary group"
                >
                  <span className="text-lime">$</span>
                  <span>./download</span>
                  <Download size={12} className="btn-arrow" strokeWidth={2.25} />
                </a>
              </div>

              <div className="mt-4 font-mono text-[10.5px] text-fg-faint">
                {"// tip: open in tab for inline preview · download for offline copy"}
              </div>
            </div>

            {/* RIGHT — terminal-style file preview */}
            <div className="p-4 sm:p-5 bg-ink-50/40">
              <div className="window h-full">
                <div className="window-titlebar !py-1.5">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="ml-1.5 text-fg-faint">cat {resume.filename}</span>
                  <span className="ml-auto text-[9.5px] text-fg-faint">read-only</span>
                </div>
                <div className="px-3.5 py-3 font-mono text-[11.5px] leading-relaxed">
                  <Row k="name"        v={profile.name} />
                  <Row k="role"        v={profile.title} />
                  <Row k="location"    v={profile.location} />
                  <div className="my-2 h-px bg-line" />
                  <Row k="experience"  v="1+ year @ zop.dev" highlight />
                  <Row k="stack"       v="Go · React · Cloud" />
                  <Row k="open_source" v="GoFr · CloudEmu" />
                  <div className="my-2 h-px bg-line" />
                  <Row k="leetcode"    v="1000+ solved" />
                  <Row k="cgpa"        v="9.14 / 10" />
                  <div className="mt-2 flex items-center gap-2 pt-1">
                    <span className="text-lime">➜</span>
                    <span className="text-fg-muted">~/resume</span>
                    <span className="caret-thin" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className="text-fg-faint">{k}</span>
      <span className={highlight ? "text-lime" : "text-fg-muted"}>{v}</span>
    </div>
  );
}
