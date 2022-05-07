import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import "./css/loginBoxStyles.css";
import { useState } from "react";

export default function LoginBox({ toSignupSetter }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-box-container --has-padding">
      <div className="--verticle-flex --has-gap">
        <input className="input" placeholder="Email" />
        <div className="input-password-container">
          <input
            className="input"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
          />
          <button
            className="btn --icon-only-btn"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        <button className="btn --primary-btn">Login</button>
        <button
          className="btn --secondary-btn"
          onClick={() => toSignupSetter("signup")}
        >
          Create an account
        </button>
      </div>
    </div>
  );
}
