import Hero from "@/components/sections/hero/default";
import MainNavbar from "@/components/sections/navbar/default";
import HowItWorks from "@/components/sections/how-it-works";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CustomerTestimonials from "@/components/sections/customer-testimonials";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <MainNavbar
        name="SoftSell"
        homeUrl="/"
        showNavigation={true}
        menuItems={[
          {
            title: "How It Works",
            href: "#how-it-works",
          },
          {
            title: "Why Choose Us",
            href: "#why-choose-us",
          },
          {
            title: "Testimonials",
            href: "#testimonials",
          },
        ]}
        actions={[
          {
            text: "Sell My Licenses",
            href: "#contact",
            isButton: true,
            variant: "default",
          },
        ]}
      />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerTestimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
