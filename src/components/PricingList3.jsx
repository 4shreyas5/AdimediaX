import { check } from "../assets";
import { pricing3 } from "../constants";
import Button from "./Button";
import Heading from "./Heading"; // Import the Heading component

const PricingList3 = () => {
  // Split the items into rows of 3
  const rows = [];
  for (let i = 0; i < pricing3.length; i += 3) {
    rows.push(pricing3.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-[1rem]">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col gap-[1rem]">
          {/* Render a row of pricing items */}
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            {row.map((item) => (
              <div
                key={item.id}
                className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
              >
                <h4 className="h4 mb-4">{item.title}</h4>

                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                  {item.description}
                </p>

                <Button
                  className="w-full my-6"
                  href="https://cal.com/adi-kzl7nk/30min?date=2024-10-05&month=2024-10"
                  white={!!item.price}
                >
                  Book A Call
                </Button>

                <ul>
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start py-5 border-t border-n-6"
                    >
                      <img src={check} width={24} height={24} alt="Check" />
                      <p className="body-2 ml-4">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add the heading after the first row */}
          {rowIndex === 0 && (
            <Heading
              tag=""
              title="For Expanding and Monetizing Your Existing Community:"
              className="mt-8"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PricingList3;
