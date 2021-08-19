import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./register.scss";
import { auth } from "../../FirebaseConfig";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import AlertMsg, { Severities } from "./AlertMsg";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = () => {
  const btnstyle = { margin: "8px 0" };
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
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signup = (e: any) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((userCredential: any) => {
        // send verification mail.
        userCredential.user.sendEmailVerification();
        userCredential.user.updateProfile({
          displayName: Username,
        });
        openAlert(Severities.success, "Email sent");
        auth.signOut();
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/email-already-in-use") {
          openAlert(Severities.error, "email-already-in-use.");
        } else {
          openAlert(Severities.error, errorMessage);
        }
        console.log(error);
      });
  };
  return (
    <div className="auth_register_main">
      <form>
        <AlertMsg
          open={open}
          closeAlert={closeAlert}
          severity={severity}
          Alertmsg={Alertmsg}
        />
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          value={Username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={(e) => signup(e)}
          onSubmit={(e) => signup(e)}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
