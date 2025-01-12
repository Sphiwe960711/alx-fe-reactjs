import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
  };

  const linkStyle = {
    margin: '0 15px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;

