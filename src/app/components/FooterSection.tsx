"use client"

import { BookOpen, Mail, MapPin, Phone, Shield } from 'lucide-react'

const footerSections = [

  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Shipping Policy', href: '/shipping-policy' },
      // { label: 'Security', href: '/security' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/aboutus' },
      // { label: 'Blog', href: '/blog' },
      // { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contactus' },
      // { label: 'Partners', href: '/partners' },
    ]
  },

]

export default function FooterSection() {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-foreground text-xl">CSELibrary</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Empowering students and working professionals with premium computer science resources. Master the fundamentals and advance your career.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:kishoraman.works@gmail.com" className="hover:text-foreground transition-colors">
                  kishoraman.works@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Compliance Notice - Required for Indian businesses */}
        <div className="py-6 border-t border-border bg-muted/30">
          <div className="text-xs text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">Legal Entity:</strong> CSELibrary is a  business entity in India. 
              All transactions are processed securely through Razorpay Payment Gateway.
            </p>
            <p>
              By using our services, you agree to our Terms & Conditions and acknowledge that you have read our Privacy Policy. 
              All purchases are subject to our Refund Policy. We are committed to protecting your data in compliance with applicable data protection laws.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 CSELibrary, Inc. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
                <span>•</span>
                <a href="/refund" className="hover:text-foreground transition-colors">Refunds</a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/kishoraman21" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/kishoraman21" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/aman-kishor-profile/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}