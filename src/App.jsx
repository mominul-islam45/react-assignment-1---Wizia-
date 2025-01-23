import './App.css'
import Features from './Components/Features'
import Hero from './Components/Hero'
import Improvement_Percentage from './Components/Improvement_Percentage'
import NavArea from './Components/NavArea'
import Partners from './Components/Partners'
import ReviewCarousel from './Components/ReviewCarousel'
import Training from './Components/Training'

function App() {

  return (
    <>
      <NavArea/>
      <Hero/>
      <Partners/>
      <Features/>
      <Training/>
      <ReviewCarousel/>
      <Improvement_Percentage/>
    </>
  )
}

export default App
