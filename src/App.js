import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./containers/Posts";
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <button onClick={()=>props.onAdd()}>plus</button> */}
      {/* <p>Score: {props.score}</p> */}
      <button onClick={()=>props.onFetchData()}>FETCH</button>

      <Posts />
    </div>
  );
}


const mapStateToProps = state => {
  return {
      posts: state.posts,
      isLoading: state.isLoading,
      isError: state.isError
     
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchData: () => dispatch(actionCreators.getData()),
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
