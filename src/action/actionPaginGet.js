import {baseUrl} from "../const/consts";

export const PUT = "PUT";



export const putPosts = data => ({
    type: PUT,
    payloadAll: data,
})



export const getUser = () => {
    return (dispatch) => {
        fetch(`${baseUrl}/posts`)
            .then(response => response.json())
            .then(data => {
                dispatch(putPosts(data));
            })
    }
}






