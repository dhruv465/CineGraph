import CircularBadge from './CircularBadge'

interface HeroProps {
  isVisible: boolean
}

function Hero({ isVisible }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <h1 className={`hero-title ${isVisible ? 'fade-in-up' : ''}`}>
          Driven by <span className="serif italic">creativity,</span> I craft videos
          <br />
          that <span className="serif italic">connect</span> and <span className="serif italic">inspire.</span>
        </h1>
        
        <CircularBadge isVisible={isVisible} />

        <h2 className={`secondary-title ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
          I HELP COMPANIES TELL THEIR <span className="serif italic">story</span> WITH
          <br />
          <span className="serif italic">clear</span> AND <span className="serif italic">engaging</span> VISUAL DESIGN.
        </h2>
      </div>
    </section>
  )
}

export default Hero
