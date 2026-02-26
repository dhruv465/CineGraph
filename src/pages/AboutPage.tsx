import About from '../components/About'
import ClientsServices from '../components/ClientsServices'
import EmailMarquee from '../components/EmailMarquee'
import ContactForm from '../components/ContactForm'

interface AboutPageProps {
  isVisible: boolean
}

function AboutPage({ isVisible }: AboutPageProps) {
  return (
    <div className="about-page">
      <About isVisible={isVisible} />
      <ClientsServices />
      <ContactForm />
      <EmailMarquee />
    </div>
  )
}

export default AboutPage
