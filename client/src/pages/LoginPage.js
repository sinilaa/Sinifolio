import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { UserContext } from "../contexts/UserContext";

// Component for user login
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { setUserInfo } = useContext(UserContext);
  const [error, setError] = useState('');

  // Function to handle user login
  async function login(ev) {
    ev.preventDefault();

    // Clear previous error messages
    setUsernameError('');
    setPasswordError('');
    setError(''); // Clear previous error message

    // Check if any field is empty
    if (!username || !password) {
      setUsernameError(username ? '' : '* Username is required');
      setPasswordError(password ? '' : '* Password is required');
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo); // Update user information in context
        setRedirect(true); // Redirect to home page after successful login
      });
    } else {
      response.json().then(data => {
        setError(data.error); // Set error message from server response
      });
    }
  }

  // Redirect to home page if redirect state is true
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  // Render login form
  return (
    <div className="main container">
      <Helmet>
        <title>Login page</title>
        <meta name="description" content="This is login page" />
      </Helmet>

    <form className="login" onSubmit={login}>
      <h1 className="login_title">Login</h1>
      <div className="login_element">
        <label>Username</label>
        <input
          className="login_input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={ev => setUsername(ev.target.value)}
        />
        <div className="error_message">{usernameError}</div>
      </div>

      <div className="login_element">
        <label>Password</label>
        <input
          className="login_input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <div className="error_message">{passwordError}</div>
      </div>

      <div className="error_message">{error}</div> {/* Display server error message */}
      
      <button className="login_btn">Login</button>
    </form>
  </div>
  );
}
