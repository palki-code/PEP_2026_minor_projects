import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    // Redirect to Dashboard after successful login
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <Link to="/" className="login-logo">PEP</Link>
          <h2>Welcome Back</h2>
          <p>Login to access your dashboard</p>
        </div>

        {error && (
          <div className="form-error-banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="error-icon">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <button type="submit" className="login-submit-btn">Login</button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="auth-link">Sign Up</Link>
          </p>
          <p className="home-link-p">
            <Link to="/" className="back-home-link">
              &larr; Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;