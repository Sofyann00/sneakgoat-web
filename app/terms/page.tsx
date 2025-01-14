import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT BIG SOLUSI TEKNOLOGI',
  description: 'Terms of Service and conditions for using valuescities services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using the services provided by PT BIG SOLUSI TEKNOLOGI (hereinafter referred to as &quot;valuescities&quot;), a premium fashion accessories retailer, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Products and Services
              </h2>
              <p className="text-muted-foreground">
                valuescities offers authentic, premium accessories including jewelry, watches, bags, wallets, and other fashion accessories for both men and women. All products are sourced from authorized distributors and genuine brands. Product availability and prices are subject to change without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Warranty and Returns
              </h2>
              <p className="text-muted-foreground">
                All products are guaranteed authentic and undergo strict quality inspection. Customers must inspect products upon delivery and report any defects within 24 hours. Returns are accepted for manufacturing defects, and items must be unused, in original condition with all original packaging, tags, and certificates of authenticity intact.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Product Care and Maintenance
              </h2>
              <p className="text-muted-foreground">
                Each product comes with specific care instructions. Proper maintenance is essential for preserving the quality and appearance of your accessories. valuescities is not responsible for damage resulting from improper use, storage, or maintenance of products.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                valuescities shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from product availability, delayed shipments, or circumstances beyond our reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about these Terms of Service, please contact us at:</p>
                <div className="mt-2">
                  <p>PT BIG SOLUSI TEKNOLOGI</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: admin@valuescities.com</p>
                  <p>Phone: (021) 50111528</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 