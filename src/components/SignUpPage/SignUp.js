import {
  Card,
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const SignUp = ({ handleSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("null");

  return (
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
          label="Enter username"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <MenuItem value="Journalist">Journalist</MenuItem>
          <MenuItem value="Reader">Reader</MenuItem>
        </Select>
        <Button
          sx={{ marginLeft: 2 }}
          onClick={() =>
            handleSignUp({
              username: username,
              password: password,
              role: userRole,
            })
          }
          variant="contained"
        >
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
};

export { SignUp };
