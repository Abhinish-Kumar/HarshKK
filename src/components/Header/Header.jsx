import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from "../Images/logo-magna.png";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div id='header'>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>HOME</Link></li>
          <li><a href="#form-container">CONTACT US</a></li>
          <li><Link to="/about" onClick={toggleSidebar}>ABOUT</Link></li>
          <li><Link to="/services" onClick={toggleSidebar}>SERVICES</Link></li>
          <li><Link to="/djPackages" onClick={toggleSidebar}>DJ PACKAGES</Link></li>
          <li><Link to="/reviews" onClick={toggleSidebar}>REVIEWS</Link></li>
        </ul>
      </div>

      {/* Content Overlay */}
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      {/* Main Navbar */}
      <nav>
        <div className="logo"><img src={Logo} alt="" /></div>

        {/* Sidebar Toggle Button (Hamburger icon) */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>

        {/* Navbar links for larger screens */}
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><a href="#form-container">CONTACT US</a></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/djPackages">DJ PACKAGES</Link></li>
          <li><Link to="/reviews">REVIEWS</Link></li>
        </ul>
        <ul>
          <li>Icon</li>
          <li>Icon</li>
          <li>Icon</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
