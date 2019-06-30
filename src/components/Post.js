import React from "react";
import style from "./Post.module.css"
import { connect } from 'react-redux';

const Post=(props)=> {
  return (
    <div>
      <h4>{props.children}</h4>
      <span className={style.Score}>0</span>
      <button className={style.Plus}>+</button>
      <button className={style.Minus}>-</button>
      <hr />
    </div>
  );
}



const mapStateToProps=(state)=>{
  return{
    posts: state.posts.posts
  }
  }

  // const mapDispatchToProps = dispatch => {
  //   return {
  //       onFetchData: () => dispatch(actionCreators.getData()),
      
  //   }
  // };
  
  
  // const mapDispatchToProps
  export default connect(mapStateToProps)(Post);
  