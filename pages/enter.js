import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";

const EnterPage = (props) => {
  const { user, username } = useContext(UserContext);
  //console.log(username)

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

export default EnterPage;

// Sign in with Google button
const SignInButton = () => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} width="30px" /> Sign in with Google
    </button>
  );
};

// Sign out button
const SignOutButton = () => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
};

// user name form
const UsernameForm = () => {
  return <h1>Hello</h1>;
};
