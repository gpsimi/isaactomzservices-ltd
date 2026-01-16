import Link from "next/link";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logos/icon.png";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Process", href: "/process" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Architectural Design",
  "Building Construction",
  "Project Management",
  "3D Visualization",
  "Interior Design",
  "Cost Estimation",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-pure-white">
      <div className="container-luxury py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <div className="inline-block">
                <span className="font-heading text-2xl font-bold tracking-tight">
                  ISAAC TOMZ
                </span>
                <span className="block text-xs tracking-[0.3em] uppercase text-warm-concrete mt-1">
                  Services Ltd
                </span>
              </div>
            </Link>
            <p className="text-warm-concrete text-sm leading-relaxed mb-6 font-light italic">
              At we believe in building more than just structures, we build relationships,
              trust, and lasting value. With a focus on quality, innovation, and integrity,
              we strive to deliver projects that exceed expectations and leave a lasting legacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-concrete text-sm hover:text-pure-white transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-warm-concrete text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+2348080321720"
                  className="flex items-center gap-3 text-warm-concrete text-sm hover:text-pure-white transition-colors duration-300"
                >
                  <Phone size={16} className="text-construction-red" />
                  +234 808 032 1720
                </a>
              </li>
              <li>
                <a
                  href="mailto:isaactomzservicesltd@gmail.com"
                  className="flex items-center gap-3 text-warm-concrete text-sm hover:text-pure-white transition-colors duration-300 break-all"
                >
                  <Mail size={16} className="text-construction-red shrink-0" />
                  isaactomzservicesltd@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/isaactomzservicesltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warm-concrete text-sm hover:text-pure-white transition-colors duration-300"
                >
                  <Instagram size={16} className="text-construction-red" />
                  @isaactomzservicesltd
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-concrete text-sm">
                <MapPin
                  size={16}
                  className="text-construction-red shrink-0 mt-1"
                />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-graphite">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-concrete text-xs">
              © {new Date().getFullYear()} Isaac Tomz Services Ltd. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-warm-concrete text-xs hover:text-pure-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-warm-concrete text-xs hover:text-pure-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
