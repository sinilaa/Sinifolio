import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { RiMenuLine, RiCloseLine } from '@remixicon/react';

// Functional component representing the header of the application
export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  // Fetch user profile information on component mount
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  // Function to handle user logout
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    }).then(() => {
    setUserInfo(null);
    navigate('/');
    });
  }

  // Get the username from user info if available
  const username = userInfo?.username;

  // Render the header with navigation links
  return (
    <header>
      <nav className="nav container">
      <Link to="/" className="nav_logo">Logo</Link>
      <div className={`nav_menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
      <ul className="nav_list">
        {username ? (
          <>
            <li className="nav_item">
              <Link to= "/about"className="nav_link" onClick={closeMenuOnMobile}>About</Link>
            </li>
            <li className="nav_item">
              <Link to="/contact" className="nav_link" onClick={closeMenuOnMobile}>Contact</Link>
            </li>
            <li className="nav_item">
              <Link to="/projects" className="nav_link" onClick={closeMenuOnMobile}>Projects</Link>
            </li>
            <li className="nav_item">
              <Link to="/create" className="nav_link" onClick={closeMenuOnMobile}>Create project</Link>
            </li>
            <li className="nav_item">
              <a onClick={() => {logout(); closeMenuOnMobile();}} className="nav_link">Logout ({username})</a>
            </li>
          </>
        ) : (
          <>    
            <li className="nav_item">
              <Link to= "/about"className="nav_link" onClick={closeMenuOnMobile}>About</Link>
            </li>
            <li className="nav_item">
              <Link to="/contact" className="nav_link" onClick={closeMenuOnMobile}>Contact</Link>
            </li>
            <li className="nav_item">
              <Link to="/projects" className="nav_link" onClick={closeMenuOnMobile}>Projects</Link>
            </li>
            <li className="nav_item">
            <Link to="/login" className="nav_link" onClick={closeMenuOnMobile}>Login</Link>
            </li>
          </>
        )}
        </ul>
          <div className="nav_close" id="nav-close" onClick={toggleMenu}>
            <RiCloseLine />
          </div>
        </div>
          <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
            <RiMenuLine />
          </div>
      </nav>
    </header>
  );
}
