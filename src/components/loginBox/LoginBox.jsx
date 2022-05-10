import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import "./css/loginBoxStyles.css";
import { useRef, useState } from "react";
import { login } from "../../services/authServices";
import ButtonSpinner from "../buttonSpinner/ButtonSpinner";
import { useNavigate } from "react-router-dom";

export default function LoginBox({ toSignupSetter }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  return (
    <div className="login-box-container --has-padding">
      <div className="--verticle-flex --has-gap">
        <input
          ref={emailInputRef}
          type="email"
          className="input"
          placeholder="Email"
        />
        <div className="input-password-container">
          <input
            ref={passwordInputRef}
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
        <button
          className="btn --primary-btn"
          onClick={() =>
            login(
              emailInputRef.current.value,
              passwordInputRef.current.value,
              setIsLoading,
              navigate("/explore")
            )
          }
          disabled={isLoading}
        >
          {isLoading ? <ButtonSpinner color="#fff" /> : "Login"}
        </button>
        <button
          className="btn --secondary-btn"
          onClick={() => toSignupSetter("signup")}
          disabled={isLoading}
        >
          Create an account
        </button>
      </div>
    </div>
  );
}
