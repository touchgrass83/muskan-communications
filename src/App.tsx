import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
