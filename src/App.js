import { useState } from "react";
import "./App.css";
import { Login } from "./components/LoginPage/Login";
import { SignUp } from "./components/SignUpPage/SignUp";
import { NewsPage } from "./components/NewsPage/News";
import {
  loginUserData,
  addUser,
  addArticle,
  updateArticleTags,
} from "./components/requests";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const handleSignUp = (user) => {
    setShowSignUp(!showSignUp);
    addUser(user);
  };

  return (
    <>
      {!showSignUp ? (
        !userId ? (
          <Login
            handleLogin={loginUserData}
            handleUpdateUserId={setUserId}
            handleUpdateUserRole={setUserRole}
            handleSignUp={() => setShowSignUp(!showSignUp)}
          ></Login>
        ) : (
          <NewsPage
            handleAddArticle={addArticle}
            updateArticleTags={updateArticleTags}
            userRole={userRole}
            handleLogout={() => setUserId(null)}
          ></NewsPage>
        )
      ) : (
        <SignUp handleSignUp={handleSignUp}></SignUp>
      )}
    </>
  );
}

export default App;
