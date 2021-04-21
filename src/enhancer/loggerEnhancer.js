import {PUT} from "../action/actionGetPosts";



export const loggerEnhancer = store => next => action => {
    if(action.type === PUT){
        localStorage.setItem('posts', JSON.stringify(action.payloadAll));
    }

    return next(action);
}