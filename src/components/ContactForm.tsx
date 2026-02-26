import React, { useState } from 'react'
import { Globe } from 'lucide-react'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      // alert('Message sent!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">CONTACT ME</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                placeholder="First name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          
          {/* Email & Phone Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <div className="phone-input-wrapper">
                <Globe size={16} className="globe-icon" />
                <span className="phone-prefix"></span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input with-icon"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
          
          {/* Message Row */}
          <div className="form-group full-width">
            <label htmlFor="message" className="form-label">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input form-textarea"
              placeholder="Message"
              required
              rows={4}
            />
          </div>
          
          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
