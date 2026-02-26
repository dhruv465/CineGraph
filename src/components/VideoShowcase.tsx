import { useEffect, useRef, useState } from 'react'
import '../App.css'

function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scale, setScale] = useState(0.8)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate visibility progress: 0 when entering bottom, 1 when centered/fully visible
      // Adjust start/end points to make it feel "live" as it enters
      const start = windowHeight
      const end = windowHeight / 2 // Target center of screen

      let progress = (start - top) / (start - end)
      
      // Clamp progress between 0 and 1
      progress = Math.min(Math.max(progress, 0), 1)

      // Easing function for smoother feel
      const easeProgress = 1 - Math.pow(1 - progress, 3) 

      // Map progress to scale (0.8 to 1.05 for a slight "pop" past 1)
      const currentScale = 0.8 + (easeProgress * 0.2)
      
      // Map progress to opacity (0 to 1)
      const currentOpacity = easeProgress

      setScale(currentScale)
      setOpacity(currentOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="video-section" ref={sectionRef}>
      <div 
        className="video-container"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'transform 0.1s ease-out' // Small transition for smoothing mouse wheel steps
        }}
      >
        <video
          className="showcase-video"
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-overlay"></div>
      </div>
    </section>
  )
}

export default VideoShowcase
