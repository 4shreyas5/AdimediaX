import React, { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Podcast from "./Podcast";
import Startup from "./Startup";
import Coaches from "./Coaches";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("0");

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
