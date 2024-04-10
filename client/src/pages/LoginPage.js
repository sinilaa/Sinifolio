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

      <div className="error_message">{error}</div>

      {error && <div className="error_message">Failed to log in. Please check your credentials and try again.</div>} {/* Display error message if login fails */}
      
      <button className="login_btn">Login</button>
    </form>
  </div>
);
