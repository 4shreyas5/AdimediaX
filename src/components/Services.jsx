import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Your Brand’s Voice"
          text="AdimediaX unlocks the potential of Your StartUp"
        />

        <div className="relative">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <iframe
              title="Horizontal Video"
              src="https://www.instagram.com/reel/Cp4jRsFIGYn/embed"
              allowFullScreen
              className="w-full h-[600px]"
            ></iframe>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <iframe
              title="Horizontal Video"
              src="https://www.instagram.com/reel/C30zN9mxnjZ/embed"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <iframe
              title="Horizontal Video"
              src="https://www.instagram.com/reel/Cn-VooPvwCO/embed"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
