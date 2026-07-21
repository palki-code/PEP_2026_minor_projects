import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      username.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <Link to="/" className="signup-logo">PEP</Link>
          <h2>Create Account</h2>
          <p>Get started with your free student account</p>
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

        <form onSubmit={handleSignup} className="signup-form">
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Choose Username"
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

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <button type="submit" className="signup-submit-btn">Sign Up</button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">Login</Link>
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

export default Signup;