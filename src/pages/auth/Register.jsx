import { useState } from "react";

import { sendSignInLinkToEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register(props) {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const config = {
      url: "http://localhost:5173/register/complete",
      handleCodeInApp: true,
    };

    await sendSignInLinkToEmail(email, config);
    toast.success(
      `A verification Email has been sent to the provided email address, please click the link in the email to copmlete the registeration`
    );

    // save user's email in local storage
    window.localStorage.setItem("emailForRegisteration", email);

    setEmail("");
  }

  return (
    <div className="container p-5">
      <div className="row">
        {/* 12 rows by default by botstrap */}
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />

            <button type="submit" className="btn btn-dark">
              Register
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
