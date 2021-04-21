import {baseUrl} from "../const/consts";


export const COMMENTS = "COMMENTS";
export const CHECK = "CHECK";


export const comments = comments => ({
    type: COMMENTS,
    payloadComments: comments
})

export const check = check => ({
    type: CHECK,
    payloadCheck: check
})



export const getComments = () => {
    return (dispatch) => {
        fetch(`${baseUrl}/comments`)
            .then(responce => responce.json())
            .then(data => {
               dispatch(comments(data));
            })
    }
}

export const Check = (id) => {
    return (dispatch) => {
        dispatch(check(id));
    }
}
