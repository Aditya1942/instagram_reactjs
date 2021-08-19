import React from "react";
import "./postheader.scss";
import { Avatar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    story_avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  })
);
const PostHeader = ({ title }: any) => {
  const classes = useStyles();

  return (
    <div className="post_header">
      <div className="post_logo">
        <Avatar className={classes.story_avatar}>
          {/* <AccountCircleIcon style={{ fontSize: 60 }} /> */}
        </Avatar>
      </div>
      <div className="post_title">{title}</div>
    </div>
  );
};

export default PostHeader;
