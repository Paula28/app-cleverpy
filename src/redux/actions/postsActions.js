import * as actionsTypes from './actionsTypes';

export const setPosts = (posts) => ({
    type: actionsTypes.SET_POSTS,
    payload: posts
});