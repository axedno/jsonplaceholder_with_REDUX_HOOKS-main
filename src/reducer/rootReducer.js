import { combineReducers } from 'redux'
import {reducerPutEdit} from "./reducerGetEditPosts";
import {reducerFilter} from "./reducerFilterByNameAndNewPost";
import {reducerComments} from "./reducerComments";


 const  rootReducer =  combineReducers({
     reducerPutEdit,
     reducerFilter,
     reducerComments
})

export default rootReducer