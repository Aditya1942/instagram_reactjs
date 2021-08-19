import React from "react";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

const Post = ({ title, img }: any) => {
  return (
    <div className="posts_div">
      <div className="postsheader">
        <PostHeader title={title} />
      </div>
      <div className="posts_content">
        <PostBody img={img} />
      </div>
    </div>
  );
};

export default Post;
