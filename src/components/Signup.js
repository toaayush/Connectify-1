import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const { handleSignUp } = props;
  const navigate = useNavigate();
  const gotohome = () => {
    handleSignUp();
    navigate("/", { replace: true });
  };
  return (
    <div>
      <form>
        <div className="form-item">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-item">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-item">
          <label htmlFor="username" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
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
        <div className="form-item">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            autoComplete="on"
          />
        </div>
        <button type="submit" className="login" onClick={gotohome}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
