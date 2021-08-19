import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Stories from "./Story/Stories";
import { Container, useMediaQuery } from "@material-ui/core";
import "./main.scss";
import Post from "./Post/Post";
const Main = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const post = [
    { id: 1, title: "post_1", img: "/post/1.jpg" },
    { id: 2, title: "post_2", img: "/post/2.jpg" },
    { id: 3, title: "post_3", img: "/post/3.jpg" },
    { id: 4, title: "post_4", img: "/post/4.jpg" },
  ];
  return (
    <div>
      <Header />
      <div className="Body">
        <Container maxWidth="sm">
          <Stories />
          <div className="posts">
            {post.map((item, index) => (
              <Post key={item.id} title={item.title} img={item.img} />
            ))}
          </div>
        </Container>
      </div>
      <div className="Fotter">{matches && <Footer />}</div>
    </div>
  );
};

export default Main;
