"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck, TrendingUp, ShieldCheck } from "lucide-react";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-container px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transform Unused Software Licenses{" "}
              <span className="text-primary">Into Value</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              SoftSell connects sellers of unused enterprise software licenses
              with verified buyers through our secure marketplace platform.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">
                Sell My Licenses <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Enhanced Dashboard Illustration */}
          <div className="order-first md:order-last">
            <div className="aspect-video w-full max-w-md mx-auto rounded-2xl border border-border/60 p-6 bg-white/90 dark:bg-[#10151c]/80 shadow-xl backdrop-blur-lg">
              <div className="space-y-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium text-xs">
                        SL
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      License Dashboard
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-2 w-2 rounded-full bg-muted-foreground/30"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center bg-primary/10 dark:bg-primary/20 rounded-lg p-3">
                    <TrendingUp className="h-5 w-5 text-primary mb-1" />
                    <span className="text-lg font-bold text-foreground">
                      2,500+
                    </span>
                    <span className="text-xs text-muted-foreground">Sold</span>
                  </div>
                  <div className="flex flex-col items-center bg-green-500/10 dark:bg-green-500/20 rounded-lg p-3">
                    <BadgeCheck className="h-5 w-5 text-green-500 mb-1" />
                    <span className="text-lg font-bold text-foreground">
                      98%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Success
                    </span>
                  </div>
                  <div className="flex flex-col items-center bg-blue-500/10 dark:bg-blue-500/20 rounded-lg p-3">
                    <ShieldCheck className="h-5 w-5 text-blue-500 mb-1" />
                    <span className="text-lg font-bold text-foreground">
                      Secure
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Escrow
                    </span>
                  </div>
                </div>

                {/* License Types */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-muted/30 rounded-lg h-12 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      Enterprise Licenses
                    </span>
                  </div>
                  <div className="flex-1 bg-primary/5 rounded-lg h-12 flex items-center justify-center">
                    <span className="text-xs text-primary/70">
                      Development Tools
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between h-8 rounded bg-muted/20 px-3">
                  <span className="text-xs text-muted-foreground">
                    Last payout:{" "}
                    <span className="font-medium text-foreground">$2,100</span>
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Avg. time:{" "}
                    <span className="font-medium text-foreground">24h</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* End Enhanced Dashboard */}
        </div>
      </div>
    </section>
  );
}
