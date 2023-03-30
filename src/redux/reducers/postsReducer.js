import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    posts: [],
    detailPostId: [],
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
        case actionTypes.SET_DETAIL_POST_ID:
            newState = {
                ...state,
                detailPostId: action.payload
            }  
            break;  
 
        default:
            newState =  state;
    }
    return newState
}

export default postsReducer;
