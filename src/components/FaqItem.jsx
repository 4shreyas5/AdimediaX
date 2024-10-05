import './faq.css';
import clsx from "clsx";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
    <div className="faq-section-item relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => setActiveId(activeId === item.id ? null : item.id)}
      >
        {/* Left Section with Number */}
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-faq-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          {/* Question */}
          <div
            className={clsx(
              "faq-h6 text-faq-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-faq-p1"
            )}
          >
            {item.question}
          </div>
        </div>

        {/* Icon */}
        <div
  className={clsx(
    "faq-icon relative flex faq-size-12 items-center justify-center rounded-full border-2 border-faq-s2 faq-shadow-400 transition-all duration-500 group-hover:border-faq-s4",
    active && "before:bg-faq-p1 after:rotate-0 after:bg-faq-p1",
    "hidden lg:flex" // Hide on mobile, show on large screens
  )}
>
  <div className="faq-g4 faq-size-11/12 rounded-full faq-shadow-300" />
</div>
      </div>

      {/* Answer Section */}
      <CSSTransition in={active} timeout={300} classNames="slide" unmountOnExit>
        <div className="faq-body-3 px-7 py-3.5">{item.answer}</div>
      </CSSTransition>

      {/* Background Transition */}
      <div
        className={clsx(
          "faq-g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
          active && "opacity-100"
        )}
      >
        <div className="faq-g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-faq-p1" />
      </div>
    </div>
  );
};

export default FaqItem;
