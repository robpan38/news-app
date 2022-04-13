import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material";

const Login = ({ handleSignUp }) => {
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
            sx={{ marginBottom: 2 }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
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
          <Button variant="contained">Login</Button>
          <Button variant="contained" onClick={handleSignUp}>Need sign-up?</Button>
        </CardActions>
      </Card>
    </>
  );
};

export { Login };
