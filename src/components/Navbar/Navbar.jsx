import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo">
          Garrett Ermer
        </a>
        <ul className="navbar-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a
              href="https://github.com/ermerga"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
