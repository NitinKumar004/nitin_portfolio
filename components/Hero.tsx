"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal as TermIcon,
  Code2,
  FileText,
} from "lucide-react";
import { profile, resume } from "@/lib/data";

const roles = [
  "full-stack engineer",
  "go + cloud developer",
  "open-source maintainer",
  "ai-tooling builder",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 30 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((idx + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="caret font-mono text-lime">{text || " "}</span>
  );
}

type TranscriptLine =
  | { type: "in"; text: string }
  | { type: "out"; text: string }
  | { type: "out-multi"; lines: string[] };

const transcript: TranscriptLine[] = [
  { type: "in", text: "whoami" },
  { type: "out", text: "nitin kumar · full stack developer" },
  { type: "in", text: "cat /etc/skills | head -3" },
  { type: "out-multi", lines: ["go", "react", "cloud-native"] },
  { type: "in", text: "uptime" },
  { type: "out", text: "1+ year · zop.dev · shipping" },
  { type: "in", text: "./hire-me --serious" },
];

function TerminalCard() {
  const [step, setStep] = useState(0);
  const [sub, setSub] = useState("");
  const subRef = useRef("");

  useEffect(() => {
    if (step >= transcript.length) return;
    const line = transcript[step];
    if (line.type === "in") {
      const target = line.text;
      let i = 0;
      subRef.current = "";
      const id = setInterval(() => {
        i += 1;
        subRef.current = target.slice(0, i);
        setSub(subRef.current);
        if (i >= target.length) {
          clearInterval(id);
          setTimeout(() => setStep((s) => s + 1), 420);
        }
      }, 55);
      return () => clearInterval(id);
    } else {
      const t = setTimeout(() => setStep((s) => s + 1), 360);
      return () => clearTimeout(t);
    }
  }, [step]);

  const visible = transcript.slice(0, step);

  return (
    <div className="window glow-lime">
      <div className="window-titlebar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="mx-auto inline-flex items-center gap-1.5">
          <TermIcon size={11} className="text-lime" />
          <span className="text-fg-muted">zsh — nitin@portfolio</span>
        </span>
        <span className="text-fg-faint">79×24</span>
      </div>
      <div className="p-4 font-mono text-[12px] leading-relaxed text-fg/90 min-h-[320px]">
        {visible.map((l, i) => {
          if (l.type === "in") {
            return (
              <div key={i} className="flex items-start gap-2">
                <span className="text-lime select-none">➜</span>
                <span className="text-fg-muted">~/portfolio</span>
                <span className="text-fg">{l.text}</span>
              </div>
            );
          }
          if (l.type === "out") {
            return (
              <div key={i} className="pl-5 text-fg-muted">
                {l.text}
              </div>
            );
          }
          return (
            <div key={i} className="pl-5 text-fg-muted">
              {l.lines?.map((line, j) => (
                <div key={j}>· {line}</div>
              ))}
            </div>
          );
        })}
        {step < transcript.length && transcript[step].type === "in" && (
          <div className="flex items-start gap-2">
            <span className="text-lime select-none">➜</span>
            <span className="text-fg-muted">~/portfolio</span>
            <span className="caret-thin text-fg">{sub}</span>
          </div>
        )}
        {step >= transcript.length && (
          <div className="flex items-start gap-2">
            <span className="text-lime select-none">➜</span>
            <span className="text-fg-muted">~/portfolio</span>
            <span className="caret-thin" />
          </div>
        )}
      </div>
    </div>
  );
}

function FloatingDots() {
  const items = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const size = ((i * 7) % 3) + 2;
        const delay = (i % 8) * 0.4;
        const dur = 7 + (i % 5);
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0], y: [0, -20, 0] }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            className="absolute rounded-full bg-lime/70"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 dots-bg" />
      <FloatingDots />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-line2 bg-white/[0.02] font-mono text-[10.5px] tracking-wide text-fg-muted"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-lime opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-lime" />
              </span>
              <span className="text-lime">●</span>
              <span>open to opportunities · bengaluru</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 font-mono text-[11.5px] text-fg-dim"
            >
              <span className="text-lime">const</span>{" "}
              <span className="text-fg">developer</span>{" "}
              <span className="text-fg-faint">=</span>{" "}
              <span className="text-fg-faint">{"{"}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 font-display tracking-tighter leading-[1.02] text-4xl sm:text-5xl lg:text-[3.6rem]"
            >
              <span className="text-fg">Nitin Kumar.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-2 font-mono text-[12.5px] sm:text-[13px] text-fg-muted"
            >
              <span className="text-fg-faint">role:</span>{" "}
              <Typewriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-5 max-w-xl text-[14px] text-fg-muted leading-relaxed"
            >
              I build cloud-native APIs in <span className="text-fg">Go</span>,
              ship clean React UIs, and contribute to{" "}
              <span className="text-fg">open source</span>. Currently shipping
              IaC + AI-tagging tools at{" "}
              <a href="#experience" className="text-lime hover:underline underline-offset-4 decoration-lime/40">
                zop.dev
              </a>{" "}
              and maintaining{" "}
              <a href="#projects" className="text-lime hover:underline underline-offset-4 decoration-lime/40">
                CloudEmu
              </a>{" "}
              <span className="text-fg-faint">(1000+ devs)</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-5 font-mono text-[11.5px] text-fg-faint"
            >
              {"}"};
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.36 }}
              className="mt-6 flex flex-wrap items-center gap-2.5"
            >
              <a href="#projects" className="btn-primary group">
                <span>view projects</span>
                <ArrowRight size={14} strokeWidth={2.5} className="btn-arrow" />
              </a>
              <a href={resume.path} target="_blank" rel="noreferrer" className="btn-ghost">
                <FileText size={13} />
                resume.pdf
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={13} />
                get in touch
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 grid place-items-center rounded-md border border-line2 text-fg-muted hover:text-fg hover:border-lime/40 hover:bg-lime/[0.04] transition"
              >
                <Github size={14} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 grid place-items-center rounded-md border border-line2 text-fg-muted hover:text-fg hover:border-lime/40 hover:bg-lime/[0.04] transition"
              >
                <Linkedin size={14} />
              </a>
              <a
                href={profile.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="w-9 h-9 grid place-items-center rounded-md border border-line2 text-fg-muted hover:text-fg hover:border-lime/40 hover:bg-lime/[0.04] transition"
              >
                <Code2 size={14} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <TerminalCard />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 panel-flat divide-y sm:divide-y-0 sm:divide-x divide-line"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="px-4 py-4 group">
              <div className="font-mono text-[10.5px] text-fg-faint uppercase tracking-widest">
                {s.label}
              </div>
              <div className="mt-1.5 text-2xl sm:text-[28px] font-display tracking-tighter text-fg">
                <span className="text-lime">{s.value}</span>
                <span className="text-fg-muted text-base">{s.suffix}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
