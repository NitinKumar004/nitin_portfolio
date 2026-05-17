import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitin Kumar — Full Stack Developer",
  description:
    "Full Stack Developer building cloud-native tools, AI systems, and open source. React, Node, Go, GoFr, AWS, Azure, GCP.",
  keywords: [
    "Nitin Kumar",
    "Full Stack Developer",
    "Go",
    "GoFr",
    "React",
    "Node.js",
    "Cloud",
    "Portfolio",
  ],
  openGraph: {
    title: "Nitin Kumar — Full Stack Developer",
    description:
      "Full Stack Developer building cloud-native tools, AI systems, and open source.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
