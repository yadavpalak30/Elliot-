import HeroSection from "@/components/HeroSection";
import ValueProp from "@/components/ValueProp";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials"
import Contactus from "@/components/Contactus"
import Footer from "@/components/Footer"



export default function Home() {
  return (
    <main>
    <HeroSection/>
    <ValueProp/>
    <SocialProof/>
    <Testimonials/>
    <Contactus/>
    <Footer/>
    </main>
  );
}
