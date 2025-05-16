import AboutUs from "./components/AboutUs/AboutUs"
import Hammer from "./components/Hammer/Hammer"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import Marquee from "./components/Marquee/Marquee"
import Tokenomics from "./components/Tokenomics/Tokenomics"

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <AboutUs />
      <Marquee />
      <Hammer />
      <Tokenomics />
    </div>
  )
}

export default App
