import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits2 from "./components/Benefits2";
import Collaboration2 from "./components/Collaboration2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero2 from "./components/Hero2";
import Pricing2 from "./components/Prices2"
import Roadmap2 from "./components/Roadmap2";
import Services2 from "./components/Services2";

const Podcast = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero2/>
        <Benefits2 />
        <Collaboration2 />
        <Services2 />
        <Pricing2 />
        <Roadmap2 />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Podcast;
