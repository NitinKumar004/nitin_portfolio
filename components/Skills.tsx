"use client";

import { motion } from "framer-motion";
import { Globe, Server, Database, Code, Cloud, Package } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

const meta: Record<string, { icon: React.ElementType; cmd: string }> = {
  Frontend:        { icon: Globe,    cmd: "npm i frontend" },
  Backend:         { icon: Server,   cmd: "go get backend" },
  Databases:       { icon: Database, cmd: "docker run db" },
  Languages:       { icon: Code,     cmd: "asdf install" },
  "Cloud & Tools": { icon: Cloud,    cmd: "kubectl apply" },
};

const marqueeStack = [
  "Go", "GoFr", "React.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Python", "Java", "C++",
  "Express.js", "REST APIs", "Microservices", "MediaPipe", "OpenCV",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 02"
          file="skills.yml"
          title="Tools I reach for."
          description="Languages, frameworks, and platforms I use daily — grouped by where they live in the stack."
        />

        <div className="grid lg:grid-cols-2 gap-3">
          {Object.entries(skills).map(([cat, list], idx) => {
            const m = meta[cat];
            const Icon = m.icon;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="panel card-hover overflow-hidden"
              >
                <div className="flex items-center gap-2 px-3 py-2 border-b border-line text-[11px] font-mono">
                  <Icon size={11} className="text-lime" />
                  <span className="text-fg">{cat.toLowerCase()}</span>
                  <span className="text-fg-faint">·</span>
                  <span className="text-fg-dim">{list.length} pkgs</span>
                  <span className="ml-auto text-fg-faint">{m.cmd}</span>
                </div>
                <div className="p-3.5 flex flex-wrap gap-1.5">
                  {list.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.02 }}
                      whileHover={{ y: -2 }}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-line2 bg-white/[0.02] text-[12px] font-mono text-fg-muted hover:text-fg hover:border-lime/40 hover:bg-lime/[0.04] transition"
                    >
                      <Package size={9} className="text-fg-faint" />
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee strip */}
        <div className="mt-6 relative overflow-hidden panel-flat py-3">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
          <div className="marquee-track gap-6">
            {[...marqueeStack, ...marqueeStack].map((s, i) => (
              <span
                key={i}
                className="font-mono text-[12px] text-fg-muted whitespace-nowrap inline-flex items-center gap-2"
              >
                <span className="text-lime">▸</span>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
