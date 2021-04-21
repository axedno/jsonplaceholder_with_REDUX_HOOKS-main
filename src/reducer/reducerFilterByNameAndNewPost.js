import {ID, NAME} from "../action/actionSearchByName";

export const initialState = {
    payloadId: ''
};

export const reducerFilter = (state=initialState, action) => {
    switch (action.type) {
        case ID:
            return {...state, payloadId: action.payloadId};
        case NAME:
            return {...state, payloadName: action.payloadName};
        default:
            return state;
    }
}