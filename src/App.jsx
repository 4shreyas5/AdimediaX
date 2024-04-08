import React, { useState, useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Podcast from "./Podcast";
import Startup from "./Startup";
import Coaches from "./Coaches";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("0");

  useEffect(() => {
    // Check if there is a hash fragment in the URL
    const hash = window.location.hash.substring(1);
    if (hash === "podcast") {
      setActiveComponent("1"); // Set active component to Podcast if hash is 'podcast'
    } else if (hash === "coaches") {
      setActiveComponent("2"); // Set active component to Coaches if hash is 'coaches'
    }
  }, []); // This effect runs only once when the component mounts

  const handleNavItemClicked = (item) => {
    setActiveComponent(item.id);
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header onNavItemClicked={handleNavItemClicked} />
        {activeComponent === "0" && <Startup />}
        {activeComponent === "1" && <Podcast />}
        {activeComponent === "2" && <Coaches />}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
