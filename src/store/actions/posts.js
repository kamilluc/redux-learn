import * as actionTypes from './actionTypes';



export function getDataRequested() {
    return {
      type: actionTypes.GET_DATA_REQUESTED
    };
  }
  
  export function getDataDone(data) {
    return {
      type: actionTypes.GET_DATA_DONE,
      payload: data
    };
  }
  
  export function getDataFailed(error) {
    return {
      type: actionTypes.GET_DATA_FAILED,
      payload: error
    };
  }
  
  export function getData() {
    return dispatch => {
      // set state to "loading"
      dispatch(getDataRequested());
  
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          // set state for success
          dispatch(getDataDone(data));
        })
        .catch(error => {
          // set state for error
          dispatch(getDataFailed(error));
        })
    }
  }