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
          
          <div className="mb-10 mt-10 flex justify-center">
            <div className="relative w-full max-w-md" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://adimediax.wistia.com/embed/medias/yv8l6790p9"
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <Button href="https://calendly.com/adimediax/adimediax-discovery-call" className="mt-6">
            Let's get started!
          </Button>
          
          <div className="my-24 text-xl">
            AdimediaX is your personalized growth engine, designed for coaches seeking amplified brand presence and data-driven student acquisition.
            <br/> 
            <div> 
            We have proprietary content and sales automation systems for exponential growth in every possible way, propelling your coaching business forward.
            </div>
            <br/>
            <div className="text-3xl -mb-20 text-[#A055FF]">
            Let's Collaborate and Build You a Strong Student Community and Drive Impactful Results.
            </div>
          </div>
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
