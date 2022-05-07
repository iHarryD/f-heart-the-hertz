import { useState } from "react";
import LoginBox from "../../components/loginBox/LoginBox";
import SignupBox from "../../components/signupBox/SignupBox";

export default function LandingPage() {
  const [activeBox, setActiveBox] = useState("login");
  return (
    <main className="landing-page-container --verticle-flex --centered-flex">
      {activeBox === "signup" ? (
        <SignupBox toLoginSetter={setActiveBox} />
      ) : (
        <LoginBox toSignupSetter={setActiveBox} />
      )}
    </main>
  );
}
