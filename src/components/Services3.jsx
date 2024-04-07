import Section from "./Section";
import Heading from "./Heading";
import {
  Gradient,
} from "./design/Services";

import Generating from "./Generating";

const Services3 = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Your Brand’s Voice"
          text="AdimediaX unlocks the potential of Your Brand"
        />

        <div className="relative">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <iframe
              title="Horizontal Video"
              src="https://adityaraj82873.wistia.com/medias/hz3i65qmxf"
              allowFullScreen
              className="w-full h-[600px]"
            ></iframe>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <iframe
              title="Horizontal Video"
              src="https://www.instagram.com/reel/C4OcPb-NcST/embed"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <iframe
              title="Horizontal Video"
              src="https://adityaraj82873.wistia.com/medias/rchsaqs094"
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

export default Services3;
