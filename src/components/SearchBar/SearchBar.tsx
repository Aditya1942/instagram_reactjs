// *https://www.registers.service.gov.uk/registers/country/use-the-api*

import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
// import axios from "../../Axios";
import {
  alpha,
  createStyles,
  InputAdornment,
  makeStyles,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "100%",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

export default function SearchBar() {
  const loading = false;
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <Autocomplete
        freeSolo
        onChange={() => {
          console.log("CHANGE");
        }}
        disableClearable
        options={Data}
        getOptionLabel={(option: any) => option.title}
        renderOption={(option: any) => (
          <React.Fragment>{option.title}</React.Fragment>
        )}
        renderInput={(params: any) => (
          <TextField
            {...params}
            placeholder="Search…"
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            fullWidth
            variant="standard"
            InputProps={{
              ...params.InputProps,
              type: "search",
              classes: classes.inputRoot,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
const Data = [
  { title: "@Aditya", year: 2001 },
  { title: "@Vishal", year: 2003 },
  { title: "@Mitul", year: 2001 },
];
