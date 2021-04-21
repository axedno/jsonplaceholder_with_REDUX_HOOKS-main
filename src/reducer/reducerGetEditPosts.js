import { PUT} from "../action/actionGetPosts";




import { EDIT_TASK} from "../action/actionEdit";

export const initialState = {
    payloadAll: []
};


export const reducerPutEdit = (state = initialState, action) => {
    let payloadAll = [...state.payloadAll];
    switch (action.type) {
        case PUT:
            return {...state, payloadAll: action.payloadAll};
        case EDIT_TASK:
            payloadAll[action.payload.index] = action.payload.text || payloadAll[action.payload.index];
            return {state, payloadAll};
        default:
            return state;
    }
}