"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Mail, MapPin, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/ui/button";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionGroup {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSectionGroup[] = [
  {
    title: "Resources",
    links: [
      { label: "Browse PDFs", href: "/pdflibrarysection" },
      { label: "DSA Guide", href: "/pdflibrarysection" },
      { label: "Interview Prep", href: "/pdflibrarysection" },
      { label: "System Design", href: "/pdflibrarysection" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/aboutus" },
      { label: "Contact", href: "/contactus" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-violet-600/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to ace your placements?
                </h3>
                <p className="text-white/80 text-lg">
                  Access 500+ premium PDFs and start your journey today.
                </p>
              </div>
              <Link href="/pdflibrarysection">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90 shadow-lg shadow-blue-900/20 px-8"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-foreground text-xl">
                CSE Heavens
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Empowering college students with premium computer science
              resources to ace their campus placements and build successful
              tech careers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:kishoraman.works@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  kishoraman.works@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section: FooterSectionGroup) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 CSE Heavens. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for students</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* Twitter/X */}
              <a
                href="https://x.com/kishoraman21"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-blue-500 text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/kishoraman21"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-slate-800 dark:hover:bg-slate-600 text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aman-kishor-profile/"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-blue-600 text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}