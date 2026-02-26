import { useRef, useEffect, useState } from 'react'
import EmailMarquee from './EmailMarquee'
import { createPortal } from 'react-dom'
import Matter from 'matter-js'

interface PillPosition {
  label: string
  videoId: string
  x: number
  y: number
  angle: number
  width: number
  height: number
}

// Custom interface for Matter bodies with attached data
interface CustomBody extends Matter.Body {
  videoId?: string
  pillWidth?: number
  pillHeight?: number
}

// Categories with placeholder Video IDs 
const categories = [
  { label: "Documentary", videoId: "YE7VzlLtp-4" },
  { label: "Song", videoId: "YE7VzlLtp-4" },
  { label: "Commercial Ads", videoId: "YE7VzlLtp-4" },
  { label: "Lyrical Song", videoId: "YE7VzlLtp-4" },
  { label: "Political Campaign", videoId: "YE7VzlLtp-4" },
  { label: "Political and Educational", videoId: "YE7VzlLtp-4" },
  { label: "Cinematic", videoId: "YE7VzlLtp-4" },
  { label: "Colour Grading", videoId: "YE7VzlLtp-4" }
]

function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pillPositions, setPillPositions] = useState<PillPosition[]>([])
  const [hasAnimated, setHasAnimated] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  useEffect(() => {
    if (hasAnimated || !containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated || !containerRef.current) return

    const { Engine, World, Bodies, Runner, Composite, Events } = Matter
    const container = containerRef.current
    const width = container.offsetWidth
    const height = 350

    // Create engine
    const engine = Engine.create()
    engine.world.gravity.y = 1.2

    // Create boundaries (invisible)
    const ground = Bodies.rectangle(width / 2, height + 30, width + 200, 60, {
      isStatic: true,
      label: 'ground'
    })
    
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 3, {
      isStatic: true,
      label: 'wall'
    })
    
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 3, {
      isStatic: true,
      label: 'wall'
    })

    World.add(engine.world, [ground, leftWall, rightWall])

    // Pill dimensions - vary by text length
    const pillBodies = categories.map((cat, index) => {
      const textWidth = cat.label.length * 10 + 40 
      const pillWidth = Math.min(Math.max(textWidth, 100), 220)
      const pillHeight = 44
      const pillRadius = pillHeight / 2

      const x = Math.random() * (width - pillWidth - 100) + pillWidth / 2 + 50
      const y = -80 - (index * 70)
      
      const pill = Bodies.rectangle(x, y, pillWidth, pillHeight, {
        chamfer: { radius: pillRadius },
        restitution: 0.3,
        friction: 0.4,
        frictionAir: 0.02,
        density: 0.003,
        label: cat.label,
        render: { visible: false } 
      }) as CustomBody

      // Attach custom data to body
      pill.pillWidth = pillWidth
      pill.pillHeight = pillHeight
      pill.videoId = cat.videoId
      
      return pill
    })

    World.add(engine.world, pillBodies)

    // Run physics
    const runner = Runner.create()
    Runner.run(runner, engine)

    // Update DOM positions on each physics tick
    Events.on(engine, 'afterUpdate', () => {
      const bodies = Composite.allBodies(engine.world) as CustomBody[]
      const positions = bodies
        .filter(body => categories.find(c => c.label === body.label))
        .map(body => ({
          label: body.label,
          videoId: body.videoId || '',
          x: body.position.x,
          y: body.position.y,
          angle: body.angle,
          width: body.pillWidth || 0,
          height: body.pillHeight || 0
        }))
      
      setPillPositions(positions)
    })

    return () => {
      Runner.stop(runner)
      World.clear(engine.world, false)
      Engine.clear(engine)
    }
  }, [hasAnimated])



  const handlePillClick = (videoId: string) => {
    setActiveVideo(videoId)
  }

  const closeVideo = () => {
    setActiveVideo(null)
  }

  return (
    <footer className="footer-wrapper">
      {/* Marquee Section */}
      {/* Marquee Section */}
      <EmailMarquee />


      {/* Physics Pills Section */}
      <div className="gravity-pills-section">
        <h3 className="pills-title">
          DISCOVER BY CATEGORY
        </h3>
        <div 
          ref={containerRef} 
          className="physics-container"
        >
          {pillPositions.map((pill) => (
            <button
              key={pill.label}
              className="physics-pill"
              onClick={() => handlePillClick(pill.videoId)}
              style={{
                transform: `translate(${pill.x - pill.width / 2}px, ${pill.y - pill.height / 2}px) rotate(${pill.angle}rad)`,
                width: `${pill.width}px`,
                height: `${pill.height}px`
              }}
            >
              <span className="play-icon">▶</span> {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal - Rendered via Portal */}
      {activeVideo && createPortal(
        <div className="video-modal-overlay" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeVideo}>×</button>
            <div className="modal-video-wrapper">
              <iframe
                title="Category Video"
                src={`https://www.youtube.com/embed/${activeVideo}?rel=0`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>,
        document.body
      )}
    </footer>
  )
}

export default Footer
