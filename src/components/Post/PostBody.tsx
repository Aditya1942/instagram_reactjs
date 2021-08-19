import React from "react";
import "./postbody.scss";

const PostBody = ({ img }: any) => {
  return (
    <div className="posts_body">
      <img
        className="posts_body_img"
        src={`${process.env.PUBLIC_URL}${img}`}
        alt=""
      />
    </div>
  );
};

export default PostBody;
