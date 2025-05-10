"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface MainNavbarProps {
  logo?: React.ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: { text: string; href: string }[];
  actions?: {
    text: string;
    href: string;
    isButton: boolean;
    variant: string;
  }[];
  showNavigation?: boolean;
  menuItems?: { title: string; href: string }[];
  className?: string;
}

export default function MainNavbar({
  logo = (
    <Image
      src="/logo.png"
      alt="SoftSell Logo"
      width={28}
      height={28}
      className="object-contain h-7 w-7"
    />
  ),
  name = "SoftSell",
  homeUrl = "/",
  mobileLinks = [
    {
      text: "How It Works",
      href: "#how-it-works",
    },
    {
      text: "Why Choose Us",
      href: "#why-choose-us",
    },
    {
      text: "Testimonials",
      href: "#testimonials",
    },
  ],
  actions = [
    {
      text: "Sell My Licenses",
      href: "#contact",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  menuItems = [
    {
      title: "How It Works",
      href: "#how-it-works",
    },
    {
      title: "Why Choose Us",
      href: "#why-choose-us",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
  ],
  className,
}: MainNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/10",
        className
      )}
    >
      <div className="mx-auto max-w-container px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href={homeUrl} className="flex items-center gap-2">
            {logo}
            <span className="font-medium">{name}</span>
          </a>

          {/* Desktop Navigation */}
          {showNavigation && (
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </a>
              ))}

              {/* CTA Button */}
              {actions.map((action, index) => (
                <Button key={index} asChild size="sm" variant="default">
                  <a href={action.href}>{action.text}</a>
                </Button>
              ))}
            </nav>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/10">
            {mobileLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}

            {/* Mobile CTA */}
            <div className="pt-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant="default"
                  asChild
                  size="sm"
                  className="w-full"
                >
                  <a href={action.href} onClick={() => setIsMenuOpen(false)}>
                    {action.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
