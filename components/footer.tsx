import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-x-2">
              <img 
                src="/app_icon.png" 
                alt="valuescities Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">valuescities</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your premier destination for luxury accessories. From elegant watches 
              to premium leather goods, we offer a curated collection of timeless pieces 
              for both men and women.
            </p>
          </div>

          {/* Shop Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/mens-accessories"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/womens-accessories"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Women's Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Customer Service</p>
                <div className="space-y-2">
                  <p>
                    <a
                      href="mailto:sales@valuescities.com"
                      className="hover:text-foreground transition-colors"
                    >
                      sales@valuescities.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+6281572136072"
                      className="hover:text-foreground transition-colors"
                    >
                      (021) 867433112
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Store Location</p>
                <p className="leading-relaxed">
                  Komplek Perkantoran Duta Merlin Blok F13, Jalan Gajah Mada,<br />
                  Desa/Kelurahan Petojo Utara, Kec. Gambir, Kota Adm. Jakarta Pusat,<br />
                  Provinsi DKI Jakarta,<br />
                  Kode Pos: 10130
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} PT BIG SOLUSI TEKNOLOGI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
