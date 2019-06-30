import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoading: false, 
    isError: false, 
    posts: []
};


const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_DATA_REQUESTED:
        return { ...state, isLoading: true };
      case actionTypes.GET_DATA_DONE:
        return { ...state, isLoading: false, posts: action.payload };
      case actionTypes.GET_DATA_FAILED:
        return { ...state, isLoading: false, isError: true }
      default:
        return state;
    }
  };

  export default reducer;
