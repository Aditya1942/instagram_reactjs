import React, { useEffect, useState } from "react";
import "./App.scss";

import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./FirebaseConfig";
import Main from "./components/Main";
import AuthScreen from "./components/Auth/Index";

function App() {
  const user = useSelector(selectUser);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      let userData = localStorage.getItem("user");
      if (userData) {
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.log(error);
      setisLoggedIn(false);
      localStorage.removeItem("user");
    }
    const unsubscribe = auth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        //login
        dispatch(
          login({
            uid: authUser?.uid,
            photo: authUser?.photoURL,
            email: authUser?.email,
            displayName: authUser?.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe();
  }, [dispatch]);

  return (
    <div className="App">{isLoggedIn || user ? <Main /> : <AuthScreen />}</div>
  );
}

export default App;
