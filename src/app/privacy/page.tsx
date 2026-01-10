"use client"

import { useState } from "react"

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "information-collect", label: "Information We Collect" },
    { id: "how-use", label: "How We Use Your Information" },
    { id: "payment-processing", label: "Payment Processing" },
    { id: "data-retention", label: "Data Retention" },
    { id: "third-party", label: "Third-Party Sharing" },
    { id: "cookies", label: "Cookies & Tracking" },
    { id: "your-rights", label: "Your Rights" },
    { id: "contact", label: "Contact Us" },
  ]

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen  bg-muted/30">
      {/* Hero Section */}
      <div className="bg-background border-b border-border mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            How CSELibrary handles your data
          </p>
          <p className="text-sm text-muted-foreground">
            Updated January 11, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-8 bg-card rounded-lg border border-border p-4">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 bg-card rounded-lg border border-border p-8 lg:p-12">
            <div className="prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-ul:marker:text-muted-foreground prose-strong:text-foreground">

              {/* Introduction */}
              <section id="introduction" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">Introduction</h2>
                <p>
                  Welcome to <strong className="text-foreground">CSELibrary</strong>.
                  We respect your privacy and are committed to protecting the
                  personal data we collect from you.
                </p>
                <p>
                  In our mission to empower students and professionals, we
                  collect and use information about:
                </p>
                <ul>
                  <li>Customers who purchase digital materials</li>
                  <li>Visitors interacting with our website or support</li>
                </ul>
              </section>

              {/* Information We Collect */}
              <section id="information-collect" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">Information We Collect</h2>
                <p>We only collect what is necessary:</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Personal Information
                    </h3>
                    <p>Name and email address for delivering purchased files.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Transaction Information
                    </h3>
                    <p>PDFs purchased and payment amounts.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Technical Data
                    </h3>
                    <p>IP address and browser type for security and analytics.</p>
                  </div>
                </div>
              </section>

              {/* How We Use Your Info */}
              <section id="how-use" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">How We Use Your Information</h2>
                <ul>
                  <li>Process and deliver digital orders</li>
                  <li>Send receipts</li>
                  <li>Respond to support queries</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              {/* Payment Processing */}
              <section id="payment-processing" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">
                  Payment Processing (Razorpay)
                </h2>
                <p>
                 We do not store your credit card, debit card, or UPI credentials on our servers. All payments are processed through Razorpay, our third-party payment gateway.
                </p>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">Data Retention</h2>
                <p>
                  We store your name and email as long as needed to provide access to
                  purchased files and comply with legal requirements.
                </p>
              </section>

              {/* Third-Party Sharing */}
              <section id="third-party" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">Third-Party Sharing</h2>
                <p>
                  We do not sell or rent your data. We only share with essential
                  service providers like Razorpay.
                </p>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">Cookies & Tracking</h2>
                <p>
                  Basic cookies are used for session management and improved UI
                  experience.
                </p>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="mb-16 scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">Your Rights</h2>
                <ul>
                  <li>Request access</li>
                  <li>Request correction</li>
                  <li>Request deletion</li>
                  <li>Opt-out of marketing</li>
                </ul>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-16">
                <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
                <div className="bg-muted rounded-lg border border-border p-6">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:kishoraman.works@gmail.com"
                      className="text-primary underline"
                    >
                      kishoraman.works@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> India
                  </p>
                </div>
              </section>

              {/* Update Notice */}
              <div className="mt-12 bg-muted border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We may update this Privacy Policy
                  periodically. Please review this page regularly.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
