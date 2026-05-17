"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Brain, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, education } from "@/lib/data";

const pillars = [
  {
    icon: Server,
    title: "backend-first",
    text: "Go, GoFr, Node. APIs designed for scale and simplicity.",
  },
  {
    icon: Cloud,
    title: "cloud-native",
    text: "Multi-cloud (AWS · Azure · GCP), Docker, Kubernetes, IaC.",
  },
  {
    icon: Brain,
    title: "ai-augmented",
    text: "Auto-tagging engines, MediaPipe, OpenCV pipelines.",
  },
  {
    icon: Sparkles,
    title: "problem solver",
    text: "1000+ LeetCode · 1500 rating · solid system design.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 01"
          file="about.json"
          title="A short profile."
          description="Building end-to-end systems, from API to UI, with a backend-first mindset."
        />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5">
          {/* JSON viewer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="window"
          >
            <div className="window-titlebar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="ml-1.5 text-fg-muted">profile.json</span>
              <span className="ml-auto text-fg-faint">read-only</span>
            </div>
            <div className="px-4 py-4 font-mono text-[12.5px] leading-relaxed">
              <Line n={1}><span className="tok-pn">{"{"}</span></Line>
              <Line n={2}>
                {"  "}<Prop k="name" />: <Str>{profile.name}</Str>,
              </Line>
              <Line n={3}>
                {"  "}<Prop k="title" />: <Str>{profile.title}</Str>,
              </Line>
              <Line n={4}>
                {"  "}<Prop k="based_in" />: <Str>{profile.location}</Str>,
              </Line>
              <Line n={5}>
                {"  "}<Prop k="stack" />: <span className="tok-pn">[</span>
              </Line>
              <Line n={6}>
                {"    "}<Str>Go</Str>, <Str>GoFr</Str>, <Str>React</Str>, <Str>Node</Str>,
              </Line>
              <Line n={7}>
                {"    "}<Str>Docker</Str>, <Str>Kubernetes</Str>, <Str>MongoDB</Str>
              </Line>
              <Line n={8}>{"  "}<span className="tok-pn">],</span></Line>
              <Line n={9}>
                {"  "}<Prop k="focus" />: <span className="tok-pn">[</span>
              </Line>
              <Line n={10}>{"    "}<Str>cloud infrastructure</Str>,</Line>
              <Line n={11}>{"    "}<Str>ai-powered tooling</Str>,</Line>
              <Line n={12}>{"    "}<Str>open source</Str></Line>
              <Line n={13}>{"  "}<span className="tok-pn">],</span></Line>
              <Line n={14}>
                {"  "}<Prop k="education" />: <Str>{education.degree}</Str>,
              </Line>
              <Line n={15}>
                {"  "}<Prop k="cgpa" />: <Num>{education.cgpa.split(" / ")[0]}</Num>,
              </Line>
              <Line n={16}>
                {"  "}<Prop k="available" />: <Key>true</Key>
              </Line>
              <Line n={17}><span className="tok-pn">{"}"}</span></Line>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="panel card-hover p-4"
              >
                <div className="flex items-center gap-2 text-[10.5px] font-mono text-fg-faint uppercase tracking-widest">
                  <span className="text-lime">#</span>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-lime/10 border border-lime/25 grid place-items-center">
                    <p.icon className="w-3.5 h-3.5 text-lime" strokeWidth={2.25} />
                  </div>
                  <h3 className="font-mono text-[13px] text-fg">{p.title}</h3>
                </div>
                <p className="mt-3 text-[12.5px] text-fg-muted leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[28px_1fr] gap-2">
      <span className="text-right text-fg-faint select-none">{n}</span>
      <span className="text-fg whitespace-pre-wrap">{children}</span>
    </div>
  );
}

function Prop({ k }: { k: string }) {
  return <span className="tok-prop">&quot;{k}&quot;</span>;
}
function Str({ children }: { children: React.ReactNode }) {
  return <span className="tok-str">&quot;{children}&quot;</span>;
}
function Num({ children }: { children: React.ReactNode }) {
  return <span className="tok-num">{children}</span>;
}
function Key({ children }: { children: React.ReactNode }) {
  return <span className="tok-key">{children}</span>;
}
