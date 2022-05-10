import "./css/signupBoxStyles.css";
import { useState } from "react";
import SignupFirstPage from "../signupFirstPage/SignupFirstPage";
import SignupSecondPage from "../signupSecondPage/SignupSecondPage";

export default function SignupBox({ toLoginSetter }) {
  const [userData, setUserData] = useState({
    fullName: null,
    email: null,
    password: null,
    preferences: null,
  });
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
            userDataSetter={setUserData}
            toLoginSetter={toLoginSetter}
          />
        ) : (
          <SignupSecondPage userData={userData} userDataSetter={setUserData} />
        )}
      </div>
    </div>
  );
}
