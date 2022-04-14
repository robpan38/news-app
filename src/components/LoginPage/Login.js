import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CardActions,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://6256d2426ea70370054001bc.mockapi.io/api/";

const Login = ({ handleSignUp, handleLogin, handleUpdateUserId, handleUpdateUserRole }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginInfo, setLoginInfo] = useState(null);

  const handleLoginProcess = (user) => {
    const loggedUserPromise = handleLogin(user);
    loggedUserPromise.then((loggedUser) => setLoginInfo(loggedUser));
  };

  useEffect(() => {
    if (loginInfo !== null) {
      axios
        .get(url + "users")
        .then((response) => response.data)
        .then((data) => {
          const user = data.find(user => user.username === loginInfo.username);
          if (user !== undefined) {
            handleUpdateUserId(user.id);
            handleUpdateUserRole(user.role);
          }
        });
    }
  }, [loginInfo, handleUpdateUserId, handleUpdateUserRole]);

  return (
    <>
      <Card
        sx={{
          height: "45%",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" align="center">
            News app
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id=""
            label="Password"
            variant="outlined"
          />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => handleLoginProcess({ username, password })}
          >
            Login
          </Button>
          <Button variant="contained" onClick={handleSignUp}>
            Need sign-up?
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export { Login };
