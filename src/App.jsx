import AboutUs from "./components/AboutUs/AboutUs"
import Hammer from "./components/Hammer/Hammer"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import HowToBuy from "./components/HowToBuy/HowToBuy"
import Marquee from "./components/Marquee/Marquee"
import Tokenomics from "./components/Tokenomics/Tokenomics"

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <AboutUs />
      <Marquee text={'$jaws'}/>
      <Hammer />
      <Tokenomics />
      <Marquee text={'Buy'} decor/> 
      {/* почему когда я ввожу How to buy, то бегущая строка растгивается по высоте, а не в ширину */}
      <HowToBuy />
    </div>
  )
}

export default App
