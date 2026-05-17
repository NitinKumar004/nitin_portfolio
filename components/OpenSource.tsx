"use client";

import { motion } from "framer-motion";
import { GitBranch, GitMerge, GitPullRequest, MessageSquare, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { openSource } from "@/lib/data";

const flow = [
  { icon: GitBranch,      label: "fork & branch", note: "pick an issue" },
  { icon: GitPullRequest, label: "open pr",       note: "tests + docs" },
  { icon: MessageSquare,  label: "review",        note: "with maintainers" },
  { icon: GitMerge,       label: "merged",        note: "shipped to users" },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 05"
          file="open-source.md"
          title="Giving back to the community."
          description="Contributing to frameworks, libraries, and tools I use and believe in."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="panel overflow-hidden"
        >
          {/* PR-card header */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line font-mono text-[11.5px]">
            <Github size={12} className="text-lime" />
            <span className="text-fg">gofr-dev/gofr</span>
            <span className="text-fg-faint">·</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-lime/10 border border-lime/25 text-lime">
              <GitPullRequest size={10} />
              merged
            </span>
            <span className="ml-auto text-fg-faint">main ← contributions</span>
          </div>

          <div className="p-5 sm:p-7 grid lg:grid-cols-[1.3fr_1fr] gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] font-mono bg-lime/10 border border-lime/25 text-lime">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-tick" />
                active contributor
              </div>
              <h3 className="mt-3 font-display tracking-tighter text-2xl sm:text-[28px] text-fg">
                {openSource.title}
              </h3>
              <p className="mt-2.5 text-[13px] text-fg-muted max-w-xl leading-relaxed">
                {openSource.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {openSource.tech.map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded text-[10.5px] font-mono bg-white/[0.025] border border-line text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-mono text-[11.5px] panel-flat p-4 leading-relaxed">
              <div className="text-fg-faint">{"// contribution stats"}</div>
              <Row k="repo"       v="gofr-dev/gofr" highlight />
              <Row k="language"   v="Go" />
              <Row k="role"       v="contributor" />
              <Row k="prs"        v="merged" />
              <Row k="reviews"    v="participated" />
              <Row k="status"     v="ongoing" />
            </div>
          </div>

          {/* Flow */}
          <div className="border-t border-line p-5 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {flow.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative"
                >
                  {i < flow.length - 1 && (
                    <span className="hidden sm:block absolute top-4 left-[58%] w-[84%] h-px bg-gradient-to-r from-lime/40 to-transparent" />
                  )}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-lime/10 border border-lime/25 grid place-items-center">
                      <f.icon className="w-3.5 h-3.5 text-lime" />
                    </div>
                    <div>
                      <div className="font-mono text-[12px] text-fg">{f.label}</div>
                      <div className="text-[10.5px] text-fg-faint">{f.note}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
