import { cn } from "@/lib/utils";
import { QuoteIcon, Star } from "lucide-react";
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
      name: "Prajwal Ulli",
      title: "Chief Spreadsheet Wizard, Sheets Solutions",
      rating: 5,
    },
    {
      quote:
        "Through SoftSell, we found enterprise licenses at 60% off retail price. The savings were substantial for our growing team.",
      name: "Rahul Kakkar",
      title: "Mission Intellect, Takeover Inc.",
      rating: 5,
    },
    {
      quote:
        "The support team was responsive and guided us through every step. Highly recommended for any business with surplus licenses.",
      name: "Priya Patel",
      title: "Caffeine Enthusiast, Bargain Inc.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className={cn("relative py-20 overflow-hidden", className)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-12 w-80 h-80 rounded-full bg-primary/5 dark:bg-8C52FF/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent/5 dark:bg-A7FFEB/5 blur-2xl"></div>
      </div>

      <div className="mx-auto max-w-container px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="text-primary dark:text-8C52FF">Customers Say</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Hear from businesses that have successfully bought or sold software
            licenses through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <blockquote
              key={i}
              className="relative flex flex-col p-7 md:p-8 backdrop-blur-sm bg-background/60 dark:bg-background/30 rounded-2xl border border-border/30 dark:border-primary/10 h-full shadow-md hover:shadow-xl transition-shadow"
            >
              <QuoteIcon className="h-10 w-10 text-primary/20 dark:text-8C52FF/20 absolute top-6 right-6" />
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 relative rounded-full overflow-hidden border border-border dark:border-primary/20">
                  <Image
                    src={`/avatars/avatar-${(i % 4) + 1}.jpg`}
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
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-0.5"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-base italic relative mb-2 flex-1">
                “{testimonial.quote}”
              </p>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
