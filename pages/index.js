
import { Header } from "@/components/Header";
import { FirsSection } from "@/components/LandingPage/FirstSection";
import { SecondSection } from "@/components/LandingPage/SecondSection";
import { ThirdSection } from "@/components/LandingPage/ThirdSection";
import { Faq } from "@/components/LandingPage/Faq";
import { FourSection } from "@/components/LandingPage/FourSection";
const index = () => {
  return (
    <>
       <Header />
       <FirsSection />
       <SecondSection />
       <ThirdSection />
       <Faq />
       <FourSection />
    </>
  );
};

export default index;
