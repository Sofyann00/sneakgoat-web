import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - PT BIG SOLUSI TEKNOLOGI',
  description: 'Learn more about valuescities, your premier destination for luxury accessories',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            About valuescities
          </h1>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded with a vision to bring premium fashion accessories to discerning customers, valuescities has established itself as a trusted name in the luxury retail sector. As part of PT BIG SOLUSI TEKNOLOGI, we combine traditional retail excellence with modern digital innovation to provide an exceptional shopping experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Mission
              </h2>
              <p className="text-muted-foreground">
                We are committed to offering authentic, high-quality accessories that enhance our customers' personal style. Through careful curation and exceptional service, we aim to be your trusted partner in fashion and luxury accessories.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Quality Assurance
              </h2>
              <p className="text-muted-foreground">
                Every item in our collection undergoes rigorous authentication and quality control. We partner exclusively with authorized distributors and renowned brands to ensure that each product meets our exacting standards for craftsmanship and authenticity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Collection
              </h2>
              <p className="text-muted-foreground">
                From elegant timepieces to premium leather goods, our carefully curated selection features timeless pieces for both men and women. We pride ourselves on offering accessories that combine classic design with contemporary sophistication.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Customer Service
              </h2>
              <p className="text-muted-foreground">
                Our dedicated team of fashion and luxury experts is committed to providing personalized assistance and professional advice. We believe in building lasting relationships with our customers through exceptional service and expertise.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Visit Us
              </h2>
              <div className="text-muted-foreground">
                <p>Experience our collection in person at our flagship store:</p>
                <div className="mt-2">
                  <p>PT BIG SOLUSI TEKNOLOGI</p>
                  <p>Komplek Perkantoran Duta Merlin Blok F13</p>
                  <p>Jalan Gajah Mada, Petojo Utara</p>
                  <p>Gambir, Jakarta Pusat</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: sales@valuescities.com</p>
                  <p>Phone: (021) 867433112</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 