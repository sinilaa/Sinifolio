import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// Component for user login
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  // Function to handle user login
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
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
      alert('Wrong credentials'); // Alert user for incorrect credentials
    }
  }

  // Redirect to home page if redirect state is true
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  // Render login form
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="main container">
          <form className="login" onSubmit={login}>
            <h1 className="login-title">Login</h1>
            <div className="login_element">
            <label>Username</label>
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={ev => setUsername(ev.target.value)}
            />
            </div>
            <div className="login_element">
            <label>Password</label>
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
            />
            </div>
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
}
