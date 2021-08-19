import React from "react";
import { Container, Avatar } from "@material-ui/core";
import "./Stories.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    story_avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      color: "white",
      backgroundColor: "#673ab7",
    },
    story_img: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);
const Story = ({ id, userName, img }: any) => {
  const classes = useStyles();

  return (
    <div className="story">
      <div className="story_logo">
        {/* <canvas
          className="CfWVH"
          height="133"
          width="133"
          style={{
            position: "absolute",
            top: "-5px",
            left: "-5px",
            width: "66px",
            height: "66px",
          }}
        ></canvas> */}

        {img === "" ? (
          <Avatar className={classes.story_avatar}>
            {/* <AccountCircleIcon style={{ fontSize: 60 }} /> */}
          </Avatar>
        ) : (
          <Avatar
            src={`${process.env.PUBLIC_URL}${img}`}
            className={classes.story_img}
          />
        )}
      </div>
      <div className="story-content">
        <div className="story_title">{userName}</div>
      </div>
    </div>
  );
};
const Stories = () => {
  const stories = [
    {
      id: 1,
      userName: "Story_1",
      img: "/story/1.jpg",
    },
    {
      id: 2,
      userName: "Story_2",
      img: "/story/2.jpg",
    },
    {
      id: 3,
      userName: "Story_3",
      img: "/story/3.jpg",
    },
  ];
  return (
    <div className="stories_div">
      <div className="stories">
        {stories.map((story) => (
          <Story key={story.id} userName={story.userName} img={story.img} />
        ))}
        {stories.map((story) => (
          <Story key={story.id} userName={story.userName} img={story.img} />
        ))}
        {stories.map((story) => (
          <Story key={story.id} userName={story.userName} img={story.img} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
