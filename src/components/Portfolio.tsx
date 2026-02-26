import { useRef } from 'react'

function Portfolio() {
  const portfolioRef = useRef<HTMLElement>(null)

  // Example placeholders for "mixed" aspect ratios
  // In a real app, these would be your actual video files or URLs
  // We'll simulate aspect ratios with CSS classes
  const works = [
    { id: 1, type: 'reel', title: 'Fashion Reel', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm' }, // Vertical placeholder
    { id: 2, type: 'youtube', title: 'Cinematic Travel', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm' },
    { id: 3, type: 'reel', title: 'Product Launch', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm' },
    { id: 4, type: 'youtube', title: 'Tech Review', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm' },
    { id: 5, type: 'reel', title: 'Lifestyle Promo', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm' },
    { id: 6, type: 'youtube', title: 'Documentary Short', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm' },
    { id: 7, type: 'reel', title: 'Event Highlights', src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm' },
  ]

  return (
    <section className="portfolio-section" ref={portfolioRef}>
      <div className="container">
        <h2 className="section-title portfolio-title">
          Selected <span className="serif italic">Work</span>
        </h2>
        
        <div className="portfolio-masonry">
          {works.map((work) => (
            <div key={work.id} className={`portfolio-item ${work.type}`}>
               <video
                src={work.src}
                muted
                loop
                playsInline
                onMouseOver={(event: React.MouseEvent<HTMLVideoElement>) => { void event.currentTarget.play() }}
                onMouseOut={(event: React.MouseEvent<HTMLVideoElement>) => { void event.currentTarget.pause() }}
                className="portfolio-video"
              />
              <div className="portfolio-overlay">
                <span className="work-title">{work.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
