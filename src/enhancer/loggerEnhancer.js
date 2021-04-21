import {PUT} from "../action/actionPaginGet";



export const loggerEnhancer = store => next => action => {
    if(action.type === PUT){
        localStorage.setItem('posts', JSON.stringify(action.payload));
    }

    return next(action);
}