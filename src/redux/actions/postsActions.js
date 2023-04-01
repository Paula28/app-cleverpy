import * as actionsTypes from './actionsTypes';

export const setPosts = (posts) => ({
    type: actionsTypes.SET_POSTS,
    payload: posts
});

export const setCommentsInPost = (comments) => ({
    type: actionsTypes.SET_COMMENTS_IN_POST,
    payload: comments
});

export const setLoggedUser = (user) => ({
    type: actionsTypes.SET_LOGGED_USER,
    payload: user
});

export const setUsers = (users) => ({
    type: actionsTypes.SET_USERS,
    payload: users
})

