import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Industries } from "./components/Industries";
import { Services } from "./components/Services";
import { StickyScroll } from "./components/StickyScroll";
import { TextReveal } from "./components/TextReveal";
import { HorizontalScroll } from "./components/HorizontalScroll";
import { ZoomSection } from "./components/ZoomSection";
import { AIAdvantage } from "./components/AIAdvantage";
import { ParallaxSection } from "./components/ParallaxSection";
import { Testimonials } from "./components/Testimonials";
import { Work } from "./components/Work";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <TextReveal />
      <Industries />
      <Services />
      <StickyScroll />
      <HorizontalScroll />
      <ZoomSection />
      <AIAdvantage />
      <ParallaxSection />
      <Testimonials />
      <Work />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}