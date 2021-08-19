import React, { useState } from "react";
import "./index.scss";
import Login from "./Login";
import { auth, provider } from "../../FirebaseConfig";
import { Button, Typography, Link } from "@material-ui/core";
import Register from "./Register";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import AlertMsg, { Severities } from "./AlertMsg";

const AuthScreen = () => {
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
  const [IsLoginPage, setIsLoginPage] = useState(true);
  const dispatch = useDispatch();
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(
          login({
            uid: data.user?.uid,
            photo: data.user?.photoURL,
            email: data.user?.email,
            displayName: data.user?.displayName,
          })
        );
      })
      .catch((err) => openAlert(Severities.error, err.errorMessage));
  };

  const toggleIsLoginPage = () => {
    setIsLoginPage(!IsLoginPage);
  };
  return (
    <div className="auth_main">
      <AlertMsg
        open={open}
        closeAlert={closeAlert}
        severity={severity}
        Alertmsg={Alertmsg}
      />
      <div className="auth_container">
        <div className="auth_header">
          <img src={`${process.env.PUBLIC_URL}header_logo.png`} alt="" />
        </div>
        <div className="auth_body">
          {IsLoginPage ? <Login /> : <Register />}
        </div>
        <div className="auth_footer">
          <div className="divider_main">
            <div className="divider_bar"></div>
            <div className="divider_text">or</div>
            <div className="divider_bar"></div>
          </div>
          <div className="login_with_google_div">
            <Button color="primary" onClick={signin}>
              <img
                style={{ marginRight: "10px" }}
                height={30}
                width={30}
                src={`${process.env.PUBLIC_URL}google.png`}
                alt=""
              />
              Sign in With Google
            </Button>
          </div>
        </div>
      </div>
      <div className="auth_footer_container">
        <div className="auth_footer_container_texc">
          {IsLoginPage ? (
            <Typography>
              Don't have an account?
              <Link onClick={toggleIsLoginPage} href="#">
                Sign Up
              </Link>
            </Typography>
          ) : (
            <Typography>
              Have an account?
              <Link onClick={toggleIsLoginPage} href="#">
                Sign In
              </Link>
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
