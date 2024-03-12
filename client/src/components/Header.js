import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

// Functional component representing the header of the application
export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

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
    });
    setUserInfo(null);
  }

  // Get the username from user info if available
  const username = userInfo?.username;

  // Render the header with navigation links
  return (
    <header>
      <Link to="/" className="logo">Logo</Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create new project</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
