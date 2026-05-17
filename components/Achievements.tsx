"use client";

import { motion } from "framer-motion";
import { Award, Code2, Trophy, Medal, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/lib/data";

const icons = [Code2, Award, Medal, Trophy, BadgeCheck];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          num="// 06"
          file="awards.txt"
          title="Earned, not gifted."
          description="Competitive programming milestones, hackathon wins, and certifications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="panel card-hover p-4"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-fg-faint uppercase tracking-widest">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lime">▰▰▰</span>
                </div>
                <div className="mt-4 w-9 h-9 rounded-md bg-lime/10 border border-lime/25 grid place-items-center">
                  <Icon className="w-4 h-4 text-lime" strokeWidth={2.25} />
                </div>
                <h3 className="mt-3 text-[13.5px] font-semibold text-fg leading-snug">
                  {a.title}
                </h3>
                <p className="mt-1 text-[12px] text-fg-muted leading-relaxed">
                  {a.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
