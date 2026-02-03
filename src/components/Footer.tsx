import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Isaac Lucero. Crafted with care.</p>
    </footer>
  )
}

export default Footer
