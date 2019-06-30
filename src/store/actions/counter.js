import * as actionTypes from './actionTypes';


export const plus = ( id ) => {
    return {
        type: actionTypes.PLUS,
        id
    };
};

export const minus = ( id ) => {
    return {
        type: actionTypes.MINUS,
        id
    };
};