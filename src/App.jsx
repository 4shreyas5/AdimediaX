// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Podcast from "./Podcast";
// import Startup from "./Startup";
// import Coaches from "./Coaches";
// import { useState } from "react";

// const App = () => {
//   // const [showPodcast, setShowPodcast] = useState(false);

//   // const handlePodcastClick = () => {
//   //   setShowPodcast(true);
//   // };

//   return (

//      <>
//      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//       <Header/>
//       <Startup/>
//       <Podcast/>
//       <Coaches/>
//       <Footer/>
//      </div>
//      <ButtonGradient />
//      </>

//     // <>
//     //   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//     //     <Header onPodcastClick={handlePodcastClick} />
//     //      {!showPodcast && <Startup />}
//     //     {showPodcast && <Podcast />}
//     //     <Footer />
//     //   </div>
//     //   <ButtonGradient />
//     // </>
//   );
// };

// export default App;
import React, { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Podcast from "./Podcast";
import Startup from "./Startup";
import Coaches from "./Coaches";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleNavItemClicked = (item) => {
    // Logic to set active component based on clicked item
    // For simplicity, just use item.id for now
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
