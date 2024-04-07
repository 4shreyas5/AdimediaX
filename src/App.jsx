import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Podcast from "./Podcast";
import Startup from "./Startup";
import Coaches from "./Coaches";
import { useState } from "react";

const App = () => {
  const [showPodcast, setShowPodcast] = useState(false);

  const handlePodcastClick = () => {
    setShowPodcast(true);
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header onPodcastClick={handlePodcastClick} />
        {!showPodcast && <Startup />}
        {showPodcast && <Podcast />}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
