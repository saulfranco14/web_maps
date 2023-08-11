
import { Header } from "@/components/Header";
import { FirsSection } from "@/components/LandingPage/FirstSection";
import { SecondSection } from "@/components/LandingPage/SecondSection";
import { ThirdSection } from "@/components/LandingPage/ThirdSection";
import { Faq } from "@/components/LandingPage/Faq";
const index = () => {
  return (
    <>
       <Header />
       <FirsSection />
       <SecondSection />
       <ThirdSection />
       <Faq />
    </>
  );
};

export default index;
