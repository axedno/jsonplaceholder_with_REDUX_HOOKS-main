import {baseUrl} from "../const/consts";

export const ID = "ID";
export const NAME = "NAME"


export const search = id => ({
    type: ID,
    payloadId: id
})

export const getName = Name => ({
    type: NAME,
    payloadName: Name
})



export const handleClick = (name) => {
    return dispatch => {
        fetch(`${baseUrl}/users`)
            .then(response => response.json())
            .then(users => {
                users.forEach(item => {
                    if (item.username === name) {
                        dispatch(search(item.id))
                        dispatch(getName(item.name))
                    }
                })
            })
    }
};
