import { cn } from "@/lib/utils";
import {
  Lock,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Users,
  DollarSign,
  RefreshCcw,
} from "lucide-react";

interface WhyChooseUsProps {
  className?: string;
}

const features = [
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Bank-Level Security",
    desc: "Industry-leading encryption and secure escrow system protects both buyers and sellers throughout the transaction process.",
    color: "bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Verified Transfers",
    desc: "Every license transfer is manually verified by our team to ensure authenticity and compliance.",
    color: "bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast Payouts",
    desc: "Receive your funds quickly after a successful transaction—no long waiting periods.",
    color: "bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF",
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Trusted by Thousands",
    desc: "Join a growing community of satisfied users who trust SoftSell for their software license needs.",
    color: "bg-primary/10 dark:bg-8C52FF/20 text-primary dark:text-8C52FF",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Dedicated Support",
    desc: "Our expert support team is available 24/7 to assist you at every step of your license transfer journey.",
    color:
      "bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Best Value",
    desc: "Get the most competitive rates for your unused licenses, maximizing your returns.",
    color:
      "bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400",
  },
];

export default function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <section
      id="why-choose-us"
      className={cn("relative py-20 overflow-hidden", className)}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent -z-10"></div>

      <div className="mx-auto max-w-container px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose{" "}
            <span className="text-primary dark:text-8C52FF">SoftSell</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Discover what sets us apart as the most reliable platform for
            software license transfers.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 rounded-xl border bg-card shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
