import React from "react";
import styles from "./Posts.module.css";
import Post from "../components/Post";
import {useEffect, useState} from 'react'
import { connect } from 'react-redux';


function Posts(props) {

  // const [postsData, setPostsData] = useState([]);

  // useEffect(()=>{
  //   async function getData(){
  //       // let data= 
  //       await fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(json => setPostsData(json))
  //   }
  //   getData()
  // },[])
  
  // const posts = postsData.map(post => {
  //   return <Post key={post.id} content={post} />;
  // });

  
  const posts = props.posts.length ? props.posts.map(post => {
    return <Post key={post.id} >{post.title}</Post>;
  }) : <h1>No data</h1>
console.log(props.posts)
  return (
    <div className={styles.Posts}>
      <h1>All Posts of the Day:</h1>
      <hr />
      {posts}
    </div>
  );
}

const mapStateToProps=(state)=>{
return{
  posts: state.posts.posts
}
}

export default connect(mapStateToProps)(Posts);



// const mapStateToProps = state => {
//   return {
//       posts: state.posts,
//       isLoading: state.isLoading,
//       isError: state.isError
     
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//       onFetchData: () => dispatch(actionCreators.getData()),
    
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
