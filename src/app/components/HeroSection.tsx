"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const floatingIcons = [
  {
    src: "/icons/python.png",
    alt: "Python",
    position: "top-[5%] left-[15%]", // Mirrors DSA position on the right
    delay: 0,
    scale: 1.7,
  },
  {
    src: "/icons/dsa.png",
    alt: "DSA",
    position: "top-[5%] right-[15%]",
    delay: 0.2,
    scale: 1.7,
  },
  {
    src: "/icons/vscode.png",
    alt: "VS Code",
    position: "top-[25%] right-[3%]",
    delay: 0.4,
    scale: 1,
  },
  {
    src: "/icons/html.png",
    alt: "HTML & CSS",
    position: "top-[25%] left-[3%]", // Mirrors VS Code position on the right
    delay: 0.6,
    scale: 1.7,
  },
  {
    src: "/icons/js.png",
    alt: "JavaScript",
    position: "bottom-[35%] left-[5%]", // Mirrors SQL position on the right
    delay: 0.8,
    scale: 1.7,
  },
  {
    src: "/icons/sql.png",
    alt: "SQL",
    position: "bottom-[35%] right-[5%]",
    delay: 1,
    scale: 1.8,
  },
];

export default function HeroSection() {
  return (
    <section className="relative mt-10  min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/50 dark:to-purple-950/30">
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.3) 1px, transparent 0)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-slate-400" />
          </pattern>
        </defs>
        <path
          d="M 100 200 Q 300 100 500 250"
          fill="none"
          stroke="url(#dotPattern)"
          strokeWidth="3"
          strokeDasharray="8 8"
          className="text-slate-400"
        />
        <path
          d="M 800 150 Q 600 300 400 200"
          fill="none"
          stroke="url(#dotPattern)"
          strokeWidth="3"
          strokeDasharray="8 8"
          className="text-slate-400"
        />
        <path
          d="M 200 400 Q 400 350 600 450"
          fill="none"
          stroke="url(#dotPattern)"
          strokeWidth="3"
          strokeDasharray="8 8"
          className="text-slate-400"
        />
      </svg>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {floatingIcons.map((icon, index) => (
        <motion.div
          key={icon.alt}
          className={`absolute ${icon.position} z-10`}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: icon.scale, 
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: icon.delay },
            scale: { duration: 0.6, delay: icon.delay, type: "spring", stiffness: 100 },
            y: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: icon.delay },
          }}
          whileHover={{ scale: icon.scale * 1.1 }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={128}
            height={128}
            style={{ width: '128px', height: '128px' }}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      ))}

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
       

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            The Ultimate Arsenal for your
            <span className="block mt-2 text-primary italic">
              CS Engineering.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 text-center max-w-2xl"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Stop searching for scattered notes. Get instant access to premium resources for DSA, Java, SQL, and everything in between.
        </motion.p>

        


      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
      `}</style>
    </section>
  );
}
