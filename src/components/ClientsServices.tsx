function ClientsServices() {
  const clients = [
    { name: "Client A", url: "#" },
    { name: "Client B", url: "#" },
    { name: "Client C", url: "#" },
    { name: "Client D", url: "#" },
    { name: "Client E", url: "#" }
  ]

  const services = [
    "Documentary",
    "Song",
    "Commercial Ads",
    "Lyrical Song",
    "Political Campaign",
    "Political and Educational",
    "Cinematic",
    "Colour Grading"
  ]

  return (
    <section className="clients-services-section">
      <div className="container">
        <div className="clients-services-grid">
          {/* Clients Column */}
          <div className="column clients-column">
            <h3 className="column-title">CLIENTS</h3>
            <ul className="list">
              {clients.map((client, index) => (
                <li key={index} className="list-item">
                  <a 
                    href={client.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="client-link"
                  >
                    {client.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Image Column */}
          <div className="column image-column">
            <div className="center-image-wrapper">
              <img 
                src="/placeholder-portrait.png"
                alt="John Doe"
                className="center-image-placeholder"
              />
            </div>
          </div>

          {/* Services Column */}
          <div className="column services-column">
            <h3 className="column-title">SERVICES</h3>
            <ul className="list">
              {services.map((service, index) => (
                <li key={index} className="list-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsServices
