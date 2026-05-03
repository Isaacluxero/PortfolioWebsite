import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Isaac Lucero. Private client work is shown with sanitized details.</p>
    </footer>
  )
}

export default Footer
