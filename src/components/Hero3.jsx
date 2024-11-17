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
  <div 
    className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
    style={{
      paddingBottom: "50%", // 16:9 aspect ratio for mobile
      height: 0, 
      overflow: "hidden"
    }}
  >
    <iframe
      width="100%"
      height="100%"
      src="https://player.vimeo.com/video/1015480615"
      title="Video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  </div>
</div>
          
          <Button href="https://pst5lh0z7n3.typeform.com/to/TnxoSGYk" className="mt-6">
          Get Your Free Personalized Community Blueprint
          </Button>
          
          <div className="my-24 text-xl">
          AdimediaX is your dedicated growth engine, tailored for coaches and creators seeking amplified brand presence, data-driven community growth, and student acquisition. We use proprietary content and community growth systems to drive exponential results, building and scaling your community while advancing your coaching or creator business at every level.
            <br/> 

            <br/>
            <div className="text-3xl -mb-20 text-[#A055FF]">
            Let's Collaborate and Build You a Strong Community and Drive Impactful Results.
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
