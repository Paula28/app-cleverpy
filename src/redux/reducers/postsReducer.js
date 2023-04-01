import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    posts: [],
    loggedUser: null
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

        case actionTypes.SET_COMMENTS_IN_POST:
            newState = {
                ...state,
                comments: action.payload
            }    
            break;
        
        case actionTypes.SET_LOGGED_USER:
            newState = {
                ...state,
                loggedUser: action.payload
            }
            break;
            
        default:
            newState =  state;
    }
    return newState
}

export default postsReducer;
