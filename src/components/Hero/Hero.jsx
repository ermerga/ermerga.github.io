import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Garrett Ermer</h1>
        <div className="hero-links">
          <a
            href="https://github.com/ermerga"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            GitHub
          </a>
          <a href="#projects" className="hero-btn hero-btn--outline">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
