

function EmailMarquee() {
  const email = "dummy@example.com"
  const marqueeContent = Array(10).fill(email).join("  •  ")

  return (
    <div className="footer-marquee">
      <div className="marquee-track">
        <span className="marquee-content">{marqueeContent}</span>
        <span className="marquee-content">{marqueeContent}</span>
      </div>
    </div>
  )
}

export default EmailMarquee
