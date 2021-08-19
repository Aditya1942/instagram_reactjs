import { Container } from "@material-ui/core";
import React from "react";
import "./postbody.scss";

const PostBody = ({ img }: any) => {
  return (
    <Container className="posts_body">
      <img
        className="posts_body_img"
        src={`${process.env.PUBLIC_URL}${img}`}
        alt=""
      />
    </Container>
  );
};

export default PostBody;
