import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  ClipboardCheck,
  Upload,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";

interface HowItWorksProps {
  className?: string;
}

const steps = [
  {
    icon: <Upload className="h-7 w-7" />,
    title: "Upload License",
    desc: "Submit your unused software license details through our secure platform.",
    color: "bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF",
  },
  {
    icon: <ClipboardCheck className="h-7 w-7" />,
    title: "Get Valuation",
    desc: "Receive a competitive market valuation from our experts.",
    color:
      "bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Secure Transfer",
    desc: "We handle the transfer process with bank-level security.",
    color:
      "bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400",
  },
  {
    icon: <CircleDollarSign className="h-7 w-7" />,
    title: "Get Paid",
    desc: "Receive payment quickly and securely through our system.",
    color:
      "bg-yellow-400/10 dark:bg-yellow-400/20 text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <RefreshCcw className="h-7 w-7" />,
    title: "Ongoing Support",
    desc: "Our support team is available 24/7 for a seamless experience.",
    color: "bg-accent/10 dark:bg-A7FFEB/20 text-accent dark:text-A7FFEB",
  },
];

export default function HowItWorks({ className }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className={cn("relative py-20 overflow-hidden", className)}
    >
      <div className="mx-auto max-w-container px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How <span className="text-primary dark:text-8C52FF">It Works</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our streamlined process makes buying and selling software licenses
            simple, secure, and profitable.
          </p>
        </div>

        {/* Steps row - always horizontal, scrollable on mobile */}
        <div className="relative">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 md:overflow-visible md:pb-0">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative group min-w-[220px] flex-1 flex flex-col items-center p-6 rounded-2xl bg-background/80 dark:bg-background/40 border border-border/30 dark:border-primary/10 hover:border-primary/50 dark:hover:border-8C52FF/30 transition-colors shadow-sm hover:shadow-lg"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-primary dark:bg-8C52FF text-white flex items-center justify-center text-base font-bold shadow-md">
                  {idx + 1}
                </div>
                <div
                  className={`flex justify-center items-center w-14 h-14 rounded-full mb-3 group-hover:scale-110 transition-transform ${step.color}`}
                >
                  {step.icon}
                </div>
                <h3 className="text-base font-semibold mb-1 text-center">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  {step.desc}
                </p>
                {/* Connector arrow for all but last step */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                    <div className="w-7 h-7 rounded-full bg-background dark:bg-background flex items-center justify-center border border-border dark:border-primary/20 shadow-sm">
                      <svg
                        width="14"
                        height="14"
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-primary/5 dark:bg-8C52FF/5 blur-3xl -z-10"></div>
      <div className="absolute -left-32 top-1/3 w-72 h-72 rounded-full bg-accent/5 dark:bg-A7FFEB/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
