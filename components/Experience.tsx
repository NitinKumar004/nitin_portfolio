"use client";

import { motion } from "framer-motion";
import { GitCommit, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

function hash(i: number, base = "a7f3c9b") {
  return (base + i.toString(16)).slice(0, 7);
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 03"
          file="experience.log"
          title="$ git log --oneline"
          description="A commit-style view of the impact I've shipped, with the metrics to back it."
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-5">
          {/* Job header card */}
          {experience.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="panel p-5 self-start"
            >
              <div className="flex items-center gap-2 text-[10.5px] font-mono text-fg-faint uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-tick" />
                currently_at
              </div>
              <div className="mt-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-lime/10 border border-lime/25 grid place-items-center shrink-0">
                  <Building2 size={16} className="text-lime" />
                </div>
                <div>
                  <div className="text-[15px] text-fg font-semibold">
                    {exp.role}
                  </div>
                  <div className="font-mono text-[12px] text-fg-muted mt-0.5">
                    <span className="text-lime">@</span>{exp.company} ·{" "}
                    <span className="text-fg-faint">{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-line font-mono text-[11.5px]">
                <Row k="period"   v={exp.period} />
                <Row k="role"     v="backend-dev-intern" />
                <Row k="branch"   v="main" highlight />
                <Row k="contribs" v={`${exp.highlights.length} commits`} />
              </div>
            </motion.div>
          ))}

          {/* Git log */}
          <div className="window">
            <div className="window-titlebar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="ml-1.5 text-fg-muted">terminal — git log</span>
              <span className="ml-auto text-fg-faint">main</span>
            </div>
            <div className="px-4 py-4 font-mono text-[12px] leading-relaxed space-y-3.5">
              {experience[0].highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group"
                >
                  <div className="flex items-center gap-2">
                    <GitCommit size={11} className="text-lime shrink-0" />
                    <span className="text-warm">{hash(i)}</span>
                    <span className="text-fg-faint">·</span>
                    <span className="text-fg-dim">{i === 0 ? "HEAD" : "main"}</span>
                    <span className="text-fg-faint">·</span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-lime/10 border border-lime/25 text-lime">
                      {h.metric}
                    </span>
                  </div>
                  <div className="ml-5 mt-1 text-fg-muted text-[12.5px] leading-relaxed">
                    {h.text}
                  </div>
                  <div className="ml-5 mt-0.5 text-fg-faint text-[11px]">
                    <span className="text-fg-dim">→</span>{" "}
                    <span className="text-fg-muted">{h.label}</span>
                  </div>
                </motion.div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-lime">➜</span>
                <span className="text-fg-muted">~/zop.dev</span>
                <span className="caret-thin text-fg" />
              </div>
            </div>
          </div>
        </div>
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
