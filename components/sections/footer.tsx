import { SocialIcon } from "@/components/ui/social-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mt-16 border-t border-border/20 py-12 bg-muted/30",
        "dark:bg-gradient-to-t dark:from-17202A dark:to-1C2733 dark:border-8C52FF/10",
        className
      )}
    >
      <div className="mx-auto max-w-container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold dark:text-8C52FF"
            >
              <Image
                src="/logo.png"
                alt="SoftSell Logo"
                width={36}
                height={36}
                className="object-contain h-9 w-9"
              />
              SoftSell
            </Link>
            <p className="text-sm text-muted-foreground dark:text-B2BFE2/80">
              Helping businesses recover value from unused software licenses
              since 2023. Our platform connects sellers with verified buyers for
              a seamless experience.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} href="#" />
              <SocialIcon icon={<Github className="h-5 w-5" />} href="#" />
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-8C52FF">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#how-it-works"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#why-choose-us"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-8C52FF">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  License Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-B2BFE2 dark:hover:text-A7FFEB"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Theme Toggle */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-8C52FF">Contact</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground dark:text-B2BFE2">
              <p>SoftSell Inc.</p>
              <p>123 Soft Colony</p>
              <p>Softwork Street, SW 94103</p>
              <p>Email: info@softsell.example</p>
              <p>Phone: (555) 334-887-1234</p>
            </address>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-sm text-muted-foreground dark:text-E0BBE4">
                Toggle theme:
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/20 pt-6 dark:border-8C52FF/30 md:flex-row">
          <p className="text-sm text-muted-foreground dark:text-B2BFE2/70">
            &copy; {currentYear} SoftSell Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
