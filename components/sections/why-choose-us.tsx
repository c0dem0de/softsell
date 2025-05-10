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

        {/* Rest of the component remains unchanged */}
      </div>
    </section>
  );
}
