import { createSelector } from "reselect";



const payload = state => state.reducerPutEdit.payloadAll;
const payloadId = state => state.reducerFilter.payloadId


export const payloadNew = createSelector(
    payload,
    payloadId,
    (payload, payloadId) => payload.filter(ech => ech.userId === payloadId)
);

