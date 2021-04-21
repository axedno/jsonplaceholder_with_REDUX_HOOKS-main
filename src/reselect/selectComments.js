import { createSelector } from "reselect";


const payloadCheck = state => state.reducerComments.payloadCheck;
const payloadComments = state => state.reducerComments.payloadComments;



export const payloadCheckComments = createSelector(
    payloadComments,
    payloadCheck,
    (payloadComments, payloadCheck) => payloadComments.filter(ech => ech.postId === payloadCheck)
);

