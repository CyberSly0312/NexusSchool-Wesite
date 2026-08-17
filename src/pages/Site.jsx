import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import Problem from '../sections/Problem'
import Solution from '../sections/Solution'
import WhoItsFor from '../sections/WhoItsFor'
import AfricaFocus from '../sections/AfricaFocus'
import ProductExperience from '../sections/ProductExperience'
import Benefits from '../sections/Benefits'
import Security from '../sections/Security'
import CloudFuture from '../sections/CloudFuture'
import DemoCTA from '../sections/DemoCTA'
import Contact from '../sections/Contact'

export default function Site() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhoItsFor />
        <AfricaFocus />
        <ProductExperience />
        <Benefits />
        <Security />
        <CloudFuture />
        <DemoCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
