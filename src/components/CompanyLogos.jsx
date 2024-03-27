import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  const handleMouseEnter = (event, valuation) => {
    const overlay = event.currentTarget.querySelector('.valuation-overlay');
    overlay.textContent = `Valuation: $${valuation}`;
    overlay.classList.add('opacity-100', 'scale-100'); // Add Tailwind classes for hover animation
  };

  const handleMouseLeave = (event) => {
    const overlay = event.currentTarget.querySelector('.valuation-overlay');
    overlay.textContent = ''; // Clear valuation text
    overlay.classList.remove('opacity-100', 'scale-100'); // Remove Tailwind classes for hover animation
  };

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping StartUps reach mountains
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] relative transition-transform transform-gpu"
            key={index}
            onMouseEnter={(e) => handleMouseEnter(e, logo.valuation)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={logo.image}
              width={134}
              height={28}
              alt={logo.alt}
              className="logo-image hover:scale-110 transition-transform transform-gpu"
            />
            <div className="valuation-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-3 rounded-md opacity-0 scale-0 transition-all duration-300">
              {/* Valuation overlay */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
