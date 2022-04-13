import { useState } from "react";
import "./App.css";
import { Login } from "./components/LoginPage/Login";
import { SignUp } from "./components/SignUpPage/SignUp";
import { NewsPage } from "./components/NewsPage/News";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userId, setUserId] = useState(2);

  return (
    <>
      {!showSignUp ? (
        !userId ? (
          <Login handleSignUp={() => setShowSignUp(!showSignUp)}></Login>
        ) : (
          <NewsPage></NewsPage>
        )
      ) : (
        <SignUp handleSignUp={() => setShowSignUp(!showSignUp)}></SignUp>
      )}
    </>
  );
}

export default App;
