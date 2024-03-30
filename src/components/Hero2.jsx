import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";

const Hero2 = () => {
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
          Podcasting Solutions for 
Creators and Companies {` `}
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
          We help creators and companies to start and grow podcasts to enhance their online reach, attract high-quality leads, and boost revenue. Whether you're launching a new podcast or optimizing an existing one, we're here to help.
          <br/> <div>Let's collaborate to elevate your brand and drive impactful results. </div>
          <br/><div className="text-3xl text-[#A055FF]">Ready to stand out in the digital landscape? </div>
          </div>



          <Button href="https://calendly.com/adimediax/adimediax-discovery-call">
          Let's get started!
          </Button>
        </div>
        
          <ScrollParallax>
          <BackgroundCircles />
          </ScrollParallax>
     

        <CompanyLogos className="relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero2;
