import { useEffect, useRef, useState } from 'react'

function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section className="philosophy-section" ref={sectionRef}>
      <div className="container">
        {/* Philosophy Block */}
        <div className={`philosophy-header ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="philosophy-title-col">
            <h2 className="section-title">
              My Video
              <br />
              Editing
              <br />
              <span className="serif italic">Philosophy</span>
            </h2>
          </div>
          <div className="philosophy-text-col">
            <p className="philosophy-text">
              I believe that every video tells a <span className="serif italic">story</span>, and my role as a video editor is to bring that story to life in the most engaging and impactful way. With 5 years of professional experience, I focus on creating content that not only looks <span className="serif italic">cinematic</span> but also connects <span className="serif italic">emotionally</span> with the audience.
            </p>
          </div>
        </div>

        {/* Services Block */}
        <div className="services-container">
          <h3 className={`services-title ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>What I Do</h3>
          
          <div className="services-grid">
            <div className={`service-card ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <h4 className="service-name">YouTube Video Editing</h4>
              <p className="service-desc">
                engaging cuts, smooth transitions, thumbnails, and pacing that keeps viewers hooked.
              </p>
            </div>

            <div className={`service-card ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
              <h4 className="service-name">Cinematic & Short Films</h4>
              <p className="service-desc">
                storytelling edits with professional color grading and sound design.
              </p>
            </div>

            <div className={`service-card ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
              <h4 className="service-name">Social Media Content</h4>
              <p className="service-desc">
                reels, shorts, ads, and promotional videos edits for online platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
