import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    posts: [],
}

const postsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case actionTypes.SET_POSTS:
            newState = {
                ...state,
                posts: action.payload
            }    
            break;
 
        default:
            newState =  state;
    }
    return newState
}

export default postsReducer;
