import "./css/signupBoxStyles.css";
import { useState } from "react";
import SignupFirstPage from "../signupFirstPage/SignupFirstPage";
import SignupSecondPage from "../signupSecondPage/SignupSecondPage";

export default function SignupBox({ toLoginSetter }) {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 2;

  return (
    <div className="signup-box-container --has-padding">
      <div
        className="progress-bar"
        style={{ width: `${(pageNumber / totalPages) * 100}%` }}
      ></div>
      <div className="--verticle-flex --has-gap">
        {pageNumber === 1 ? (
          <SignupFirstPage
            signupPageNumberSetter={setPageNumber}
            toLoginSetter={toLoginSetter}
          />
        ) : (
          <SignupSecondPage />
        )}
      </div>
    </div>
  );
}
