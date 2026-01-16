"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/ui/button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { ModeToggle } from "@/components/ModeToggle";


interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { label: "Resources", href: "/browsepdfs" },
  { label: "About", href: "/aboutus" },
  { label: "Contact", href: "/contactus" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBrowse = (): void => {
    router.push("/browsepdfs");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background border-b border-border shadow-sm"
          : "bg-background/95"
      }`}
      style={{ fontFamily: 'var(--font-space-grotesk)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center"
              alt="CSE Heavens Logo"
              width={36}
              height={36}
              className="rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                DevVault
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.subLinks ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-foreground rounded-md font-medium transition-colors group outline-none">
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {link.subLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.label} asChild>
                        <Link href={subLink.href} className="cursor-pointer w-full">
                          {subLink.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground font-medium transition-colors rounded-md hover:bg-secondary"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <Button
              onClick={handleBrowse}
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold"
            >
              Browse PDFs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                      <Image
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center"
                        alt="CSE Heavens Logo"
                        width={32}
                        height={32}
                        className="rounded-lg object-cover"
                      />
                      <span className="text-lg font-bold text-foreground">
                        DevVault
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.subLinks ? (
                        <div className="space-y-1">
                          <p className="font-medium text-foreground px-3 py-2">
                            {link.label}
                          </p>
                          <div className="pl-4 space-y-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.label}
                                href={subLink.href}
                                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="block px-3 py-3 font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  <div className="pt-6 mt-4 border-t border-border">
                    <Button
                      onClick={() => {
                        handleBrowse();
                        setMobileOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold"
                    >
                      Browse PDFs
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}