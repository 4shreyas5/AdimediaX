import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos3 from "./CompanyLogos3";

const Hero3 = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          Maximize Your Brand’s Growth{` `}
            <span className="inline-block relative">
              AdimediaX{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <div className="my-24 text-xl">
          AdimediaX is your personalized growth engine, designed for coaches seeking amplified brand presence and data-driven student acquisition.
          <br/> <div> We have Proprietary content and sales automation systems that can maximize your growth in every possible way, propelling your coaching business forward.
</div>
          <br/><div className="text-3xl text-[#A055FF]">Let's collaborate to elevate your brand and drive impactful results. </div>
          </div>



          <Button href="https://calendly.com/adimediax/adimediax-discovery-call">
          Let's get started!
          </Button>
        </div>
        
          <ScrollParallax>
          <BackgroundCircles />
          </ScrollParallax>
     

        <CompanyLogos3 className="relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero3;
