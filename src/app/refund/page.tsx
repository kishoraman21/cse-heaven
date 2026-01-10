"use client"

import { useState } from 'react'

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'cancellation', label: 'Cancellation Policy' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'exceptions', label: 'Refund Exceptions' },
    { id: 'process', label: 'Refund Process' },
    { id: 'contact', label: 'Contact Us' },
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
          <h1 className="text-5xl font-bold text-foreground mb-4">Refund & Cancellation Policy</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Understanding our policies for digital products
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
              
              {/* Introduction */}
              <section id="overview" className="mb-16 scroll-mt-8">
                <div className="mb-8 p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-red-800 dark:text-red-300 leading-relaxed">
                    At <strong>CSELibrary</strong>, we provide digital educational materials in PDF format. Because our products are digital goods delivered via instant download, we generally operate a <strong>no-refund policy</strong>.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  This policy is designed to protect the integrity of our digital content while ensuring fair treatment of all customers. Please read this policy carefully before making a purchase.
                </p>
              </section>

              {/* Cancellation Policy */}
              <section id="cancellation" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Cancellation Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Orders once placed <strong className="text-foreground">cannot be cancelled</strong> as the delivery of digital products is initiated immediately upon successful payment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Please review your selection carefully before completing the transaction. We recommend reading the product description, checking previews, and ensuring the material meets your requirements before purchase.
                </p>
                
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    <strong>Tip:</strong> Double-check your cart and product details before clicking "Pay Now" to avoid any unwanted purchases.
                  </p>
                </div>
              </section>

              {/* Refund Policy */}
              <section id="refund" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Refund Policy for Digital Products</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since your purchase is a digital product, it is deemed "used" after download or opening. Therefore, we do not offer refunds once the purchase is complete.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">No Refunds For:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>"Change of mind" or if the user no longer requires the topic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>If the user's device does not support PDF files (standard PDF readers are required)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Buyer's remorse or change in study plans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Content expectations not being met (all products have descriptions and previews)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Exceptions */}
              <section id="exceptions" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Exceptions (Where Refund is Possible)</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We will only process a refund in the following scenarios:
                </p>

                <div className="space-y-6">
                  <div className="p-5 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 text-2xl">✓</span>
                      <div>
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                          Duplicate Payment
                        </h3>
                        <p className="text-green-800 dark:text-green-200 leading-relaxed">
                          If you were charged twice for the same product due to a technical glitch or payment gateway error.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 text-2xl">✓</span>
                      <div>
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                          Failed Delivery
                        </h3>
                        <p className="text-green-800 dark:text-green-200 leading-relaxed">
                          If you have paid successfully but did not receive the download link or email within 24 hours, and we are unable to resolve the issue manually by resending the materials.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-sm text-blue-900 dark:text-blue-200">
                    <strong>Note:</strong> Before requesting a refund for failed delivery, please check your spam/junk folder and ensure the email address provided during purchase was correct.
                  </p>
                </div>
              </section>

              {/* Refund Process */}
              <section id="process" className="mb-16 scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Refund Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In case of an eligible refund (duplicate payment or failed delivery):
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 border-l-4 border-foreground">
                    <h3 className="font-semibold text-foreground mb-2">Refund Method</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The refund will be processed back to the original payment method used (e.g., your Bank Account, UPI, or Card).
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 border-l-4 border-foreground">
                    <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As per Razorpay's standard timelines, it may take <strong className="text-foreground">5-7 business days</strong> for the refund to reflect in your account.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 border-l-4 border-foreground">
                    <h3 className="font-semibold text-foreground mb-2">Non-Refundable Charges</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The transaction fees and GST charged by the payment gateway at the time of purchase are non-refundable.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any issues with your download or believe you are eligible for a refund due to a technical error, please contact us:
                </p>
                
                <div className="bg-muted/50 border border-border rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground font-medium min-w-[100px]">Email:</span>
                      <a 
                        href="mailto:kishoraman2121@gmail.com" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        kishoraman2121@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground font-medium min-w-[100px]">Subject Line:</span>
                      <span className="text-foreground font-mono text-sm bg-muted px-2 py-1 rounded">
                        Refund Request - [Payment ID]
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground font-medium min-w-[100px]">Timeline:</span>
                      <span className="text-foreground">
                        Please report any issues within <strong>48 hours</strong> of your purchase
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">
                    Information to Include in Your Request:
                  </h4>
                  <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-300">
                    <li>• Your full name and email address used during purchase</li>
                    <li>• Payment ID / Transaction ID from Razorpay</li>
                    <li>• Product name you purchased</li>
                    <li>• Detailed description of the issue</li>
                    <li>• Screenshots of payment confirmation (if applicable)</li>
                  </ul>
                </div>
              </section>

              {/* Final Notice */}
              <div className="mt-12 p-6 bg-muted border border-border rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Disclaimer:</strong> We reserve the right to investigate all refund requests and may request additional information to verify the claim. Fraudulent refund requests will be declined and may result in account suspension. This policy is in accordance with Indian consumer protection laws for digital goods.
                </p>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}