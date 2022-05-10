import { useRef } from "react";

export default function SignupFirstPage({
  signupPageNumberSetter,
  userDataSetter,
  toLoginSetter,
}) {
  const fullNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <>
      <div className="input-container">
        <label htmlFor="full-name">Full name</label>
        <input ref={fullNameInputRef} className="input" id="full-name" />
      </div>
      <div className="--horizontal-flex --has-gap">
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            ref={emailInputRef}
            type="email"
            className="input"
            id="email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="discord-id">Discord ID</label>
          <input className="input" id="discord-id" />
        </div>
      </div>
      <div className="--horizontal-flex --has-gap">
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            className="input"
            id="password"
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" className="input" id="confirm-password" />
        </div>
      </div>
      <button
        className="btn --primary-btn"
        onClick={() => {
          userDataSetter((prev) => {
            return {
              ...prev,
              fullName: fullNameInputRef.current.value,
              email: emailInputRef.current.value,
              password: passwordInputRef.current.value,
            };
          });
          signupPageNumberSetter((prev) => prev + 1);
        }}
      >
        Continue
      </button>
      <button
        className="btn --secondary-btn"
        onClick={() => toLoginSetter("login")}
      >
        Already have an account?
      </button>
    </>
  );
}
