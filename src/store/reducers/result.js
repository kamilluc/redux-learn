import * as actionTypes from '../actions/actionTypes';


// const initialState = {
//     results: []
// };

// const fetchdata = ( state, action ) => {
//     const updatedArray = state.results.filter( result => result.id !== action.resultElId );
//     return updateObject( state, { results: updatedArray } );
// };

// const reducer = ( state = initialState, action ) => {
//     switch ( action.type ) {
//         case actionTypes.FETCH_DATA : return fetchdata(state, action);
//         default: return state;
//     }
   
// };


const reducer = (state, action) => {
    switch (action.type) {
      case actions.GET_DATA_REQUESTED:
        return { ...state, isLoading: true };
      case actions.GET_DATA_DONE:
        return { ...state, isLoading: false, repositories: action.payload };
      case actions.GET_DATA_FAILED:
        return { ...state, isLoading: false, isError: true }
      default:
        return state;
    }
  };

  export default reducer;
