import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import "./Form.css";

const Login = (props) => {
  const { handleLogIn } = props;
  const navigate = useNavigate();
  const gotohome = () => {
    handleLogIn();
    navigate("/", { replace: true });
  };
  return (
    <div className="login-body">
      <form className="login-form">
        <div className="form-item">
          <label htmlFor="username" className="form-label">
            Email address or username
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            autoComplete="on"
          />
        </div>
        <button type="submit" className="submit-btn" onClick={gotohome}>
          Log In
        </button>
        <div className="signup">
          Don't have account? <Link to="/signuppage">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
