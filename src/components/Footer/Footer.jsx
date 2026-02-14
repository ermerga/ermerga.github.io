import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p>
          &copy; {new Date().getFullYear()} Garrett Ermer
        </p>
        <a
          href="https://github.com/ermerga"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
