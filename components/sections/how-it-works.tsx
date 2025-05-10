import { cn } from "@/lib/utils";
import { CircleDollarSign, ClipboardCheck, Upload } from "lucide-react";

interface HowItWorksProps {
  className?: string;
}

export default function HowItWorks({ className }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className={cn("relative py-16 overflow-hidden", className)}
    >
      <div className="mx-auto max-w-container px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How <span className="text-primary dark:text-8C52FF">It Works</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our streamlined process makes buying and selling software licenses
            simple, secure, and profitable.
          </p>
        </div>

        {/* Steps with improved visual connection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="relative group">
            <div className="flex flex-col items-center p-6 rounded-xl bg-background dark:bg-background/30 border border-border/30 dark:border-primary/10 hover:border-primary/50 dark:hover:border-8C52FF/30 transition-colors shadow-sm hover:shadow-md h-full">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary dark:bg-8C52FF text-white flex items-center justify-center text-sm font-bold">
                1
              </div>

              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF mb-4 group-hover:scale-110 transition-transform">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload License</h3>
              <p className="text-muted-foreground text-center">
                Submit your unused software license details through our secure
                platform.
              </p>
            </div>

            {/* Hidden on mobile, shown on md+ - Visual connector (right arrow) */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="w-6 h-6 rounded-full bg-background dark:bg-background flex items-center justify-center border border-border dark:border-primary/20 shadow-sm">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-8C52FF"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="flex flex-col items-center p-6 rounded-xl bg-background dark:bg-background/30 border border-border/30 dark:border-primary/10 hover:border-primary/50 dark:hover:border-8C52FF/30 transition-colors shadow-sm hover:shadow-md h-full">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary dark:bg-8C52FF text-white flex items-center justify-center text-sm font-bold">
                2
              </div>

              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF mb-4 group-hover:scale-110 transition-transform">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Valuation</h3>
              <p className="text-muted-foreground text-center">
                Receive a competitive market valuation based on current demand
                and license attributes.
              </p>
            </div>

            {/* Hidden on mobile, shown on md+ - Visual connector (right arrow) */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="w-6 h-6 rounded-full bg-background dark:bg-background flex items-center justify-center border border-border dark:border-primary/20 shadow-sm">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-8C52FF"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="flex flex-col items-center p-6 rounded-xl bg-background dark:bg-background/30 border border-border/30 dark:border-primary/10 hover:border-primary/50 dark:hover:border-8C52FF/30 transition-colors shadow-sm hover:shadow-md h-full">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary dark:bg-8C52FF text-white flex items-center justify-center text-sm font-bold">
                3
              </div>

              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF mb-4 group-hover:scale-110 transition-transform">
                <CircleDollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
              <p className="text-muted-foreground text-center">
                Once your license is purchased, receive payment quickly and
                securely through our system.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile step indicators - only visible on small screens */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {[0, 1, 2].map((step) => (
            <div
              key={step}
              className="w-2 h-2 rounded-full bg-primary/30 dark:bg-8C52FF/30"
            />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-primary/5 dark:bg-8C52FF/5 blur-3xl -z-10"></div>
      <div className="absolute -left-32 top-1/3 w-72 h-72 rounded-full bg-accent/5 dark:bg-A7FFEB/5 blur-3xl -z-10"></div>

      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
