import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { handleLogIn } = props;
  const navigate = useNavigate();
  const gotohome = () => {
    handleLogIn();
    navigate("/", { replace: true });
  };
  return (
    <div>
      <form>
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
          <input type="password" className="form-control" id="password" autoComplete="on"/>
        </div>
        <button type="submit" className="login" onClick={gotohome}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
