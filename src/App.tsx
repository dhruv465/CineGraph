import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay to ensure animations play after mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage isVisible={isVisible} />} />
          <Route path="/about" element={<AboutPage isVisible={isVisible} />} />
        </Routes>
        <div className="film-grain"></div>
      </div>
    </Router>
  )
}

export default App

