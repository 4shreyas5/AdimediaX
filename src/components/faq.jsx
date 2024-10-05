import './faq.css'; // Import the CSS file
import { Element } from "react-scroll";
import { faq } from "../constants/index.js";
import FaqItem from "./FaqItem.jsx";
import Heading from "./Heading";
import { l2 } from '../assets/index.js';

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section className="faq-section relative">
      <Element name="faq" className="relative">
        <div className="container relative z-10 pb-10">
          <div className="hidden relative justify-center mb-10 lg:flex"></div>

          <Heading tag="" title="Your questions, Answered" />

          {/* Vertical Line in the Middle */}
        </div>

        <div className="relative z-10 border-2 border-gray-800 rounded-2xl bg-transparent p-8">
          <div className="container flex gap-10 lg:flex-row flex-col">
            {/* Centered Circle with Logo */}
            <div className="logo-circle">
              <img
                src={l2}
                alt="logo"
                className="w-16 h-16"
              />
            </div>

            {/* Left Column */}
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* Right Column */}
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  index={halfLength + index}
                />
              ))}
            </div>
          </div>

          {/* Vertical Line Below */}
          <div className="divider hidden lg:block"></div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
