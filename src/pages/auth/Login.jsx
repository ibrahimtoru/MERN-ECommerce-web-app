import { signInWithGooglePopup, createUserDocFromAuth } from "../../firebase";

export default function Login(props) {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser} className="btn btn-primary">
        Sign in with Google
      </button>
    </div>
  );
}
