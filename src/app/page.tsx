import Navbar from "@/components/navbar/page";
import HeroSection from "./landingPage/hero-section";
import SecondSection from "./landingPage/Second-section";
import ThirdSection from "./landingPage/third-section";
import FourthSection from "./landingPage/fourth-section";
import FifthSection from "./landingPage/fifth-section";
import SixthSection from "./landingPage/sixth-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection /> 
      <SixthSection />
      <Footer />
      </div>
  );
}
