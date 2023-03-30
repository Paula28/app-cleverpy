import * as actionsTypes from './actionsTypes';

export const setPosts = (posts) => ({
    type: actionsTypes.SET_POSTS,
    payload: posts
});

export const setDetailPostId = (detailPostId) => ({
    type: actionsTypes.SET_DETAIL_POST_ID,
    payload: detailPostId
});