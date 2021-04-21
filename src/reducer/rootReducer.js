import { combineReducers } from 'redux'
import {reducerPutEdit} from "./reducerGetEditPosts";
import {reducerFilter} from "./reducerFilterByNameAndNewPost";


 const  rootReducer =  combineReducers({
     reducerPutEdit,
     reducerFilter
})

export default rootReducer