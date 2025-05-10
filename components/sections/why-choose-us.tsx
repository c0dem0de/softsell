import { cn } from "@/lib/utils";
import { BadgeCheck, Lock, TrendingUp, Trophy } from "lucide-react";

interface WhyChooseUsProps {
  className?: string;
}

export default function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <section
      id="why-choose-us"
      className={cn("relative py-16 overflow-hidden", className)}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent -z-10"></div>

      <div className="mx-auto max-w-container px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose{" "}
            <span className="text-primary dark:text-8C52FF">SoftSell</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We&apos;ve created the most reliable platform for software license
            transfers on the market.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex gap-4 p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF flex items-center justify-center">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Bank-Level Security
              </h3>
              <p className="text-muted-foreground">
                Industry-leading encryption and secure escrow system protects
                both buyers and sellers throughout the transaction process.
              </p>
            </div>
          </div>

          {/* Remaining feature items remain unchanged */}
        </div>
      </div>
    </section>
  );
}
