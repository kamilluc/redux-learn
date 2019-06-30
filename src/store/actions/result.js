import * as actionTypes from './actionTypes';

// export const saveResult = ( res ) => {
//         return {
//         type: actionTypes.STORE_RESULT,
//         result: res
//     };
// }

// export const getPosts = () => {
//     return (dispatch, getState) => {
//         setTimeout( () => {
//             dispatch(saveResult(res));
//         }, 2000 );
//     }
// };

// export function getDataOne() {
//     return {
//       type: actionTypes.FETCH_DATA
//     };
//   }

//   export function getData(parameter) {
//     return (dispatch) => {
//       if (parameter) {
//         dispatch(getDataOne());
//       } else {
//         dispatch(getDataOne());
//       }
//     };
//   }


export function getDataRequested() {
    return {
      type: 'GET_DATA_REQUESTED'
    };
  }
  
  export function getDataDone(data) {
    return {
      type: 'GET_DATA_DONE',
      payload: data
    };
  }
  
  export function getDataFailed(error) {
    return {
      type: 'GET_DATA_FAILED',
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