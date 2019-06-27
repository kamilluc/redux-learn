import React from "react";
import styles from "./Posts.module.css";
import Post from "../components/Post";

function Posts() {
  const postsId = [1, 2, 3, 4, 5];
  const posts = postsId.map(post => {
    return <Post key={post} content={post} />;
  });

  return (
    <div className={styles.Posts}>
      <h1>Hello World</h1>
      {posts}
    </div>
  );
}

export default Posts;
