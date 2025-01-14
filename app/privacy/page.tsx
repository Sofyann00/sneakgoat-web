import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PT BIG SOLUSI TEKNOLOGI',
  description: 'Privacy Policy for valuescities services and customer data protection',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                PT BIG SOLUSI TEKNOLOGI (&quot;valuescities&quot;) collects personal information when you browse our accessories collection, make a purchase, or create an account. This includes: name, email address, phone number, shipping address, payment information, and shopping preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use your information to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Process your orders and provide personalized shopping experiences</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Recommend accessories based on your preferences</li>
                <li>Notify you about new collections and exclusive offers (with your consent)</li>
                <li>Improve our product selection and customer service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal data, including secure payment processing and encrypted data storage. We regularly update our security protocols to ensure the safety of your information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground">
                Under Indonesian data protection laws, you have the right to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your shopping experience, remember your preferences, analyze site traffic, and personalize product recommendations. You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about this Privacy Policy or our data practices, please contact us at:</p>
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