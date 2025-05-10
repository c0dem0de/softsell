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
            We've created the most reliable platform for software license
            transfers on the market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="group p-6 bg-gradient-to-br from-background to-background/80 dark:from-background/60 dark:to-background/40 rounded-xl border border-border/30 dark:border-primary/10 hover:border-primary/30 dark:hover:border-8C52FF/20 transition-all duration-300 shadow-sm hover:shadow flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF group-hover:scale-110 transition-transform">
                <Lock className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Our escrow system ensures both buyers and sellers are protected
                throughout the entire transaction process.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group p-6 bg-gradient-to-br from-background to-background/80 dark:from-background/60 dark:to-background/40 rounded-xl border border-border/30 dark:border-primary/10 hover:border-primary/30 dark:hover:border-8C52FF/20 transition-all duration-300 shadow-sm hover:shadow flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF group-hover:scale-110 transition-transform">
                <BadgeCheck className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Verified Licenses</h3>
              <p className="text-muted-foreground">
                Every license is thoroughly verified for authenticity and
                transferability before being listed.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group p-6 bg-gradient-to-br from-background to-background/80 dark:from-background/60 dark:to-background/40 rounded-xl border border-border/30 dark:border-primary/10 hover:border-primary/30 dark:hover:border-8C52FF/20 transition-all duration-300 shadow-sm hover:shadow flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF group-hover:scale-110 transition-transform">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Market-Driven Pricing</h3>
              <p className="text-muted-foreground">
                Our algorithm provides transparent pricing based on real-time
                market data and license demand.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group p-6 bg-gradient-to-br from-background to-background/80 dark:from-background/60 dark:to-background/40 rounded-xl border border-border/30 dark:border-primary/10 hover:border-primary/30 dark:hover:border-8C52FF/20 transition-all duration-300 shadow-sm hover:shadow flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF group-hover:scale-110 transition-transform">
                <Trophy className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Premium Support</h3>
              <p className="text-muted-foreground">
                Dedicated account managers help with compliance and make sure
                every transfer happens smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-accent/5 dark:bg-E0BBE4/5 blur-3xl -z-10"></div>
    </section>
  );
}
