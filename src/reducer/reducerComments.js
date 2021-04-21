import {CHECK, COMMENTS} from "../action/actionComments";

const initialState = {
    payloadComments: [],

}



export const reducerComments = (state = initialState, action) => {
    switch (action.type) {
        case COMMENTS:
            return {...state, payloadComments: action.payloadComments};
        case CHECK:
            return {...state, payloadCheck: action.payloadCheck};
        default:
            return state;
    }
}