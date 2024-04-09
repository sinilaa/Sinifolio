import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

// Functional component representing the header of the application
export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  
  // Function to toggle the menu for mobile/ipad view
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close menu on mobile/ipad view
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

  // Render the header with navigation menu
  return (
    <header>
      <nav className="nav container">
        <Link to="/" className="nav_logo">Logo</Link>
      
        <div className={`nav_menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav_list">
            {/* Render different navigation links based on user authentication */}
            {username ? (
              <> 
                {/* Authenticated links */}
                <li className="nav_item">
                  <Link to= "/about" 
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  About</Link>
                </li>

                <li className="nav_item">
                  <Link to="/projects"
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  Projects</Link>
                </li>

                <li className="nav_item">
                  <Link to="/create" 
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  Create project</Link>
                </li>

                <li className="nav_item">
                  <Link to="/contact" 
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  Contact</Link>
                </li>

                <li className="nav_item">
                  <a onClick={() => {logout(); closeMenuOnMobile();}} 
                  className="nav_link">
                  Logout ({username})</a>
                </li>
              </>
            ) : (
              <>
                {/* Unauthenticated links */}
                <li className="nav_item">
                  <Link to= "/about" 
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  About</Link>
                </li>

                <li className="nav_item">
                  <Link to="/projects" 
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  Projects</Link>
                </li>

                <li className="nav_item">
                  <Link to="/contact" 
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  Contact</Link>
                </li>

                <li className="nav_item">
                  <Link to="/login" 
                  className="nav_link" 
                  onClick={closeMenuOnMobile}>
                  Login</Link>
                </li>
              </>
            )}
          </ul>
          
          {/* Close menu icon for mobile/ipad view */}
          <div className="nav_close" 
            id="nav-close" 
            onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
          </div>
        </div>

        {/* Toggle menu icon for mobile/ipad view */}
        <div className="nav_toggle" 
          id="nav-toggle" 
          onClick={toggleMenu}>
          <svg className="toggle_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>
      </nav>
    </header>
  );
}
