interface AboutProps {
  isVisible: boolean
}

function About({ isVisible }: AboutProps) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className={`about-name ${isVisible ? 'fade-in-up' : ''}`}>
          JOHN DOE
        </h2>
        
        <p className={`about-bio ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          <span className="serif italic">John Doe Studio</span> IS A DESIGN STUDIO
          <br />
          THAT <span className="serif italic">translates</span> CONCEPTS <span className="serif italic">into compelling visuals</span> THAT MAKE <span className="serif italic">a difference.</span>
        </p>
      </div>
    </section>
  )
}

export default About
