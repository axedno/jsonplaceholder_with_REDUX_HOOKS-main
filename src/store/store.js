import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {loggerEnhancer} from "../enhancer/loggerEnhancer";
import rootReducer from "../reducer/rootReducer";




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, loggerEnhancer)));