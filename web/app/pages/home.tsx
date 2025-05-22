import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero";
import { Meteors } from "@/components/magicui/meteors";
import Testimonial from "@/components/Testimonial";

export function Home() {
  return (
    <main className="p-12 max-w-screen">
      <Header />
      <Meteors />
      <Hero />
      <Feature />
      <Testimonial />
      <Footer />
    </main>
  );
}

