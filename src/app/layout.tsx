import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Toaster } from "sonner";

// Serif font for headlines and accents
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Sans-serif font for UI and body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Monospace font for code blocks
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Space Grotesk for navbar
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CSE Heavens - Master Code, Build Your Future",
  description: "Your path to becoming a proficient developer starts here. Access free PDFs, courses, and resources for CSE students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
           <Toaster 
          position="bottom-right"
          richColors
          closeButton
        />
          <FooterSection/>
        </ThemeProvider>
      </body>
    </html>
  )
}
