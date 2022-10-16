import { createAction } from "redux-act";
import * as log from 'loglevel';

export const setPostData = createAction('SET_POST_DATA');


export const getPosts = () => {
    return (dispatch, getState, {api}) => {
        return api.get(`/posts`)
        .then(res => res.data)
        .then(res => dispatch(setPostData(res)))
        .catch(err => log.error("GET_POSTS_ERROR",err));
    };
};