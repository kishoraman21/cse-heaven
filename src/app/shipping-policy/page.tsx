"use client"

import { useState } from 'react'

export default function ShippingPolicy() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'delivery-method', label: 'Delivery Method' },
    { id: 'timeline', label: 'Delivery Timeline' },
    { id: 'charges', label: 'Shipping Charges' },
    { id: 'restrictions', label: 'Shipping Restrictions' },
    { id: 'failed-delivery', label: 'Failed Deliveries' },
  ]

  const scrollToSection = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen mt-10 bg-muted/30">
      {/* Hero Section */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Shipping & Delivery Policy</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Digital delivery for instant access to your materials
          </p>
          <p className="text-sm text-muted-foreground">Last Updated: January 11, 2025</p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-8 bg-card rounded-lg border border-border p-4">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-foreground text-background font-medium'
                        : 'text-foreground hover:bg-muted'
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
            <div className="prose prose-gray max-w-none">
              
              {/* Overview */}
              <section id="overview" className="mb-16 scroll-mt-8">
                <div className="mb-8 p-6 bg-muted/50 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Digital Delivery
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At <strong className="text-foreground">CSELibrary</strong>, our products are delivered digitally to ensure the fastest possible access for our students and professional users. No physical shipping is involved.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  This policy explains how you receive your purchased educational materials and what to expect during the delivery process.
                </p>
              </section>

              {/* Delivery Method */}
              <section id="delivery-method" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Delivery Method</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since our products consist of educational PDFs and digital resources, <strong className="text-foreground">no physical shipping is required</strong>. You receive your materials through two convenient methods:
                </p>

                <div className="space-y-6">
                  <div className="p-5 bg-muted/50 border-l-4 border-foreground">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Instant Access
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Upon successful completion of your payment through Razorpay, you will be automatically redirected to a download page where you can access your files immediately.
                    </p>
                  </div>

                  <div className="p-5 bg-muted/50 border-l-4 border-foreground">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Email Confirmation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      An automated email containing the download link and a transaction receipt will be sent to the email address you provided during checkout.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    <strong>Pro Tip:</strong> Save the download link from your email for future access. You can download your purchased materials multiple times from the same link.
                  </p>
                </div>
              </section>

              {/* Delivery Timeline */}
              <section id="timeline" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Delivery Timeline</h2>

                <div className="space-y-6">
                  <div className="p-5 bg-muted/50 border-l-4 border-green-500 dark:border-green-600">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Standard Delivery
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Delivery is <strong className="text-foreground">near-instant</strong>, typically within minutes of a successful transaction. Most users receive their materials within 1-2 minutes after payment confirmation.
                    </p>
                  </div>

                  <div className="p-5 bg-muted/50 border-l-4 border-amber-500 dark:border-amber-600">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Potential Delays
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      In rare cases of technical issues or high server load, delivery may take up to <strong className="text-foreground">24 hours</strong>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have not received your download link within this period, please contact us at{' '}
                      <a href="mailto:kishoraman2121@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        kishoraman.works@gmail.com
                      </a>{' '}
                      with your payment ID.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                    Didn't receive your files?
                  </h4>
                  <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
                    <li>✓ Check your spam/junk folder</li>
                    <li>✓ Verify the email address you entered during checkout</li>
                    <li>✓ Check if your payment was successful (you should have received a Razorpay confirmation)</li>
                    <li>✓ Wait for up to 24 hours before contacting support</li>
                  </ul>
                </div>
              </section>

              {/* Shipping Charges */}
              <section id="charges" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Shipping Charges</h2>
                
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                        Free Digital Delivery
                      </h3>
                      <p className="text-green-800 dark:text-green-200 leading-relaxed">
                        Because all our products are delivered digitally via the internet, there are <strong>no shipping, handling, or delivery charges</strong> applied to any order. You only pay for the product itself.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Shipping Restrictions */}
              <section id="restrictions" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Shipping Restrictions</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a digital platform, we provide access to our resources <strong className="text-foreground">globally</strong>. There are no geographical restrictions on the "shipping" of our digital PDFs.
                </p>
                
                <div className="p-5 bg-muted/50 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Requirements for Access:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>A stable internet connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>A valid email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>A device capable of viewing PDF files (computer, tablet, or smartphone)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>PDF reader software (available for free on all platforms)</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Failed Deliveries */}
              <section id="failed-delivery" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Handling of Failed Deliveries</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If a payment is successful but the download fails or the link is not received, we are committed to resolving the issue promptly.
                </p>

                <div className="p-6 bg-muted/50 border border-border rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Resolution Process:</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold">1</span>
                      <div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Contact Support:</strong> Reach out to our support team at{' '}
                          <a href="mailto:kishoraman.works@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                            kishoraman.works@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold">2</span>
                      <div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Provide Details:</strong> Include your payment ID, transaction receipt, and the email address used during checkout
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold">3</span>
                      <div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Verification:</strong> We will verify your payment through Razorpay's system
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold">4</span>
                      <div>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Manual Delivery:</strong> Once verified, we will manually send the file to your registered email address within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-900 dark:text-green-200">
                    <strong>Our Commitment:</strong> We ensure that every paid customer receives their purchased materials. If there's a genuine delivery issue, we will resolve it at no additional cost to you.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have questions about delivery or haven't received your materials, contact us:
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:kishoraman.works@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    kishoraman.works@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}