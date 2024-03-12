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
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
