import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import {TextRevealCard} from "./Tag";

const Hero = () => {
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
            Ignite Your Startup's Growth {` `}
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
          <div className="hidden lg:block my-10 mx-44 max-w-xl lg:max-w-4xl xl:max-w-6xl">
    <TextRevealCard text={"You Know the Business"} revealText={"I Know The Chemistry"} />
</div>


          <Button href="https://calendly.com/adimediax/adimediax-discovery-call" white>
            Book a Call
          </Button>
        </div>
        
          <ScrollParallax>
          <BackgroundCircles />
          </ScrollParallax>
     

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;