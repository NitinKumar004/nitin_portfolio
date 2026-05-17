"use client";

import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-6 mt-4 mb-8 sm:mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11.5px] text-fg-dim">
        <div className="inline-flex items-center gap-2">
          <span className="text-fg-faint">{"//"}</span>
          <span>built with</span>
          <span className="text-lime">go</span>
          <span className="text-fg-faint">·</span>
          <span className="text-lime">react</span>
          <span className="text-fg-faint">·</span>
          <span className="text-lime">coffee</span>
          <span className="text-fg-faint">—</span>
          <span>© {new Date().getFullYear()} {profile.name.toLowerCase()}</span>
        </div>

        <div className="flex items-center gap-3">
          <a href={profile.socials.github}   target="_blank" rel="noreferrer" aria-label="GitHub"   className="hover:text-lime transition"><Github size={14} /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-lime transition"><Linkedin size={14} /></a>
          <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-lime transition"><Code2 size={14} /></a>
          <a href={"mailto:" + profile.email}                                  aria-label="Email"    className="hover:text-lime transition"><Mail size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
