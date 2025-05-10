import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

interface CustomerTestimonialsProps {
  className?: string;
}

export default function CustomerTestimonials({
  className,
}: CustomerTestimonialsProps) {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover nearly $45,000 from unused enterprise licenses. The process was straightforward and secure.",
      name: "Sarah Thompson",
      title: "CTO, TechNova Solutions",
    },
    {
      quote:
        "Through SoftSell, we found enterprise licenses at 60% off retail price. The savings were substantial for our growing team.",
      name: "Michael Rodriguez",
      title: "Operations Director, DataFlex Inc.",
    },
  ];

  return (
    <section
      id="testimonials"
      className={cn("relative py-16 overflow-hidden", className)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-12 w-80 h-80 rounded-full bg-primary/5 dark:bg-8C52FF/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent/5 dark:bg-A7FFEB/5 blur-2xl"></div>
      </div>

      <div className="mx-auto max-w-container px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="text-primary dark:text-8C52FF">Customers Say</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Hear from businesses that have successfully bought or sold software
            licenses through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <blockquote
              key={i}
              className="relative p-6 md:p-8 backdrop-blur-sm bg-background/50 dark:bg-background/20 rounded-xl border border-border/30 dark:border-primary/10 h-full shadow-sm"
            >
              <QuoteIcon className="h-10 w-10 text-primary/20 dark:text-8C52FF/20 absolute top-6 right-6" />
              <p className="text-lg italic relative mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-auto">
                <div className="h-12 w-12 relative rounded-full overflow-hidden border border-border dark:border-primary/20">
                  <Image
                    src={`/avatars/avatar-${i + 1}.jpg`}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
