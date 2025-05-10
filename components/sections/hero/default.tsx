"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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

          {/* Simple Illustration */}
          <div className="order-first md:order-last">
            <div className="aspect-video w-full max-w-md mx-auto rounded-md border border-border/20 p-6 bg-muted/10">
              <div className="space-y-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium text-xs">
                        SL
                      </span>
                    </div>
                    <div className="text-sm font-medium">License Dashboard</div>
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

                {/* Content */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded h-full flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      Enterprise Licenses
                    </span>
                  </div>
                  <div className="bg-primary/5 rounded h-full flex items-center justify-center">
                    <span className="text-xs text-primary/70">
                      Development Tools
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="h-8 rounded bg-muted/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
