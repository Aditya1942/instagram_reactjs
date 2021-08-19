import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export enum Severities {
  error = "error",
  success = "success",
  warning = "warning",
  info = "info",
}
const AlertMsg = ({ open, closeAlert, severity, Alertmsg }: any) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity={severity}>
          {Alertmsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertMsg;
