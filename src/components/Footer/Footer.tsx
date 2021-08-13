import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
  root: {
    width: "100vw",
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        showLabel={false}
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        showLabel={false}
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        showLabel={false}
        value="add"
        icon={<AddCircleOutlineIcon />}
      />
      <BottomNavigationAction
        showLabel={false}
        value="like"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        showLabel={false}
        value="profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
