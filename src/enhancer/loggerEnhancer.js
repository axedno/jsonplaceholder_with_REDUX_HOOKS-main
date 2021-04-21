import {PUT} from "../action/actionGetPosts";
import {COMMENTS} from "../action/actionComments";



export const loggerEnhancer = store => next => action => {
    if(action.type === PUT){
        localStorage.setItem('posts', JSON.stringify(action.payloadAll));
    }
    if(action.type === COMMENTS){
        localStorage.setItem('comments', JSON.stringify(action.payloadComments));
    }
    return next(action);
}