import Hero from '../components/Hero'
import VideoShowcase from '../components/VideoShowcase'
import Philosophy from '../components/Philosophy'
import Portfolio from '../components/Portfolio'
import ScrollManager from '../components/ScrollManager'
import Footer from '../components/Footer'

interface HomePageProps {
  isVisible: boolean
}

function HomePage({ isVisible }: HomePageProps) {
  return (
    <>
      <Hero isVisible={isVisible} />
      <VideoShowcase />
      <Philosophy />
      <Portfolio />
      <ScrollManager />
      <Footer />
    </>
  )
}

export default HomePage
