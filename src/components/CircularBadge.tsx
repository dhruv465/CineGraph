interface CircularBadgeProps {
  isVisible: boolean;
}

function CircularBadge({ isVisible }: CircularBadgeProps) {
  return (
    <div className={`badge-container ${isVisible ? 'scale-in' : ''}`}>
      <div className="circular-badge">
        <svg className="badge-circle" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className="badge-text">
            <textPath href="#circlePath" startOffset="0%">
              Professional Video Editing Expert 
            </textPath>
          </text>
        </svg>
        <div className="badge-center-icon">
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10C8 10 10 4 16 4C22 4 24 16 30 16C36 16 38 10 44 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CircularBadge
