import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="logo">CINEGRAPH</div>
          <div className="nav-links">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
