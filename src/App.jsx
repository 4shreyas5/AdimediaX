import React, { useState, useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Podcast from "./Podcast";
import Startup from "./Startup";
import Coaches from "./Coaches";
import PrivacyPolicy from "./components/PrivacyPolicies";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("0");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash === "podcast") {
      setActiveComponent("1");
    } else if (hash === "coaches") {
      setActiveComponent("2");
    } else if (hash === "privacy-policy") {
      setActiveComponent("3");
    }
  }, []);

  const handleNavItemClicked = (item) => {
    setActiveComponent(item.id);
  };

  const handlePrivacyPolicyClick = () => {
    setActiveComponent("3");
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header onNavItemClicked={handleNavItemClicked} />
        {activeComponent === "0" && <Startup />}
        {activeComponent === "1" && <Podcast />}
        {activeComponent === "2" && <Coaches />}
        {activeComponent === "3" && <PrivacyPolicy />} 
        <Footer onPrivacyPolicyClick={handlePrivacyPolicyClick} />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
