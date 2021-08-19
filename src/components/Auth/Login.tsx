import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Link } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./login.scss";
import { auth } from "../../FirebaseConfig";
import { login, logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import AlertMsg, { Severities } from "./AlertMsg";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [Alertmsg, setAlertmsg] = React.useState("");
  const [severity, setSeverity] = React.useState(Severities.error);

  const openAlert = (type: Severities, msg: string) => {
    setSeverity(type);
    setAlertmsg(msg);
    setOpen(true);
  };
  const closeAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const signin = (e: any) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        // send verification mail.
        console.log(userCredential);
        if (userCredential.user.emailVerified) {
          openAlert(Severities.success, "Login Successfull");
          localStorage.setItem("user", JSON.stringify(userCredential));
          dispatch(
            login({
              uid: userCredential.user?.uid,
              photo: userCredential.user?.photoURL,
              email: userCredential.user?.email,
              displayName: userCredential.user?.displayName,
            })
          );
        } else {
          alert("Please verify your email");
          openAlert(Severities.error, "Please verify your email");
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/email-already-in-use") {
          openAlert(Severities.error, "email already in use.");
        } else {
          openAlert(Severities.error, errorMessage);
        }
        console.log(error);
      });
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <div className="auth_login_main">
      <AlertMsg
        open={open}
        closeAlert={closeAlert}
        severity={severity}
        Alertmsg={Alertmsg}
      />
      <form>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={(e) => signin(e)}
          onSubmit={(e) => signin(e)}
        >
          Sign in
        </Button>
      </form>
      <Typography>
        <Link href="#">Forgot password ?</Link>
      </Typography>
    </div>
  );
};

export default Login;
