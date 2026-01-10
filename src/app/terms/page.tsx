"use client"

import { useState } from 'react'

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'General Overview' },
    { id: 'digital-products', label: 'Digital Products & License' },
    { id: 'accuracy', label: 'Accuracy of Information' },
    { id: 'payments', label: 'Payments and Pricing' },
    { id: 'refund', label: 'No Refund Policy' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'contact', label: 'Contact Information' },
  ]

  const scrollToSection = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Section */}
      <div className="bg-background mt-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-muted-foreground">Effective Date: January 11, 2025</p>
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
              
              {/* Introduction */}
              <div className="mb-12 p-6 bg-muted/50 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to <strong className="text-foreground">CSELibrary</strong>. By accessing our website and purchasing our digital products, you agree to comply with and be bound by the following terms and conditions.
                </p>
              </div>

              {/* General Overview */}
              <section id="overview" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">General Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The terms "we," "us," and "our" refer to CSELibrary. By using this website, you engage in our "Service" and agree to be bound by the terms stated herein.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These terms apply to all users of the site, including browsers, customers, and contributors of content.
                </p>
              </section>

              {/* Digital Products & License */}
              <section id="digital-products" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Digital Products & License</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All PDFs and study materials purchased from this website are the intellectual property of CSELibrary.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Personal Use Only</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You are granted a non-exclusive, non-transferable license for personal, educational use only.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Restrictions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You may not copy, redistribute, resell, or share these files on public forums, WhatsApp groups, social media platforms, or any other medium without explicit written permission.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">No Modifications</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You may not modify, edit, or remove any watermarks or copyright notices from the PDFs.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    <strong>Warning:</strong> Violation of these license terms may result in legal action and permanent ban from accessing our services.
                  </p>
                </div>
              </section>

              {/* Accuracy of Information */}
              <section id="accuracy" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Accuracy of Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While we strive to provide accurate information regarding computer science topics, the content is provided for general educational purposes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We do not warrant that the information is error-free, complete, or current. Use of the materials is at your own risk, and we recommend verifying critical information from multiple sources.
                </p>
              </section>

              {/* Payments and Pricing */}
              <section id="payments" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Payments and Pricing</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Pricing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to change the price of any PDF or digital product at any time without prior notice. Prices are subject to change based on market conditions and content updates.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Payment Processing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All payments are processed securely through <strong className='text-black'>Razorpay</strong>. By making a purchase, you agree to provide current, complete, and accurate purchase and account information. You are responsible for maintaining the confidentiality of your payment information.
                    </p>
                  </div>
                </div>
              </section>

              {/* No Refund Policy */}
              <section id="refund" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">No Refund Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As stated in our Refund Policy, all sales of digital products are final.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Once the download link is provided or the email is sent with the purchased materials, no refunds or cancellations will be entertained. Please review the product description and preview materials carefully before making a purchase.
                </p>
                
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-red-900 dark:text-red-200">
                    <strong>Important:</strong> Due to the nature of digital products, all sales are final. We recommend reviewing all product information before purchase.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In no event shall CSELibrary, its owner, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the service or any products purchased through the site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This includes, but is not limited to, loss of profits, data, or other intangible losses resulting from:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Your use or inability to use the service</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any interruption or cessation of transmission to or from our service</li>
                  <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the service</li>
                </ul>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in India. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
                </p>
              </section>

              {/* Contact Information */}
              <section id="contact" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Questions about the Terms and Conditions should be sent to us at:
                </p>
                <div className="bg-muted/50 border border-border rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground font-medium">Email:</span>
                      <a 
                        href="mailto:kishoraman.works@gmail.com " 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        kishoraman.works@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground font-medium">Location:</span>
                      <span className="text-foreground">India</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Update Notice */}
              <div className="mt-12 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  <strong>Changes to Terms:</strong> We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service following the posting of changes constitutes your acceptance of such changes.
                </p>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}