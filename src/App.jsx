import AboutUs from "./components/AboutUs/AboutUs"
import Footer from "./components/Footer/Footer"
import Hammer from "./components/Hammer/Hammer"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import HowToBuy from "./components/HowToBuy/HowToBuy"
import Marquee from "./components/Marquee/Marquee"
import RoadMap from "./components/RoadMap/RoadMap"
import Tokenomics from "./components/Tokenomics/Tokenomics"


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <AboutUs />
      <Marquee type={'ticker'} />
      <Hammer />
      <Tokenomics />
      <RoadMap />
      <Marquee type={'HTB'} decor />
      <HowToBuy />
      <Footer />
    </div>
  )
}

export default App
