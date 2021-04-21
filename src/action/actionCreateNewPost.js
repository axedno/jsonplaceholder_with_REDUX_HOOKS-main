import {putPosts} from "./actionGetPosts";


export const create = (post) => {
    return dispatch => {
        console.log(post)
        const a = JSON.parse(localStorage.getItem('posts'));
        a.push(post);
        localStorage.setItem('posts', JSON.stringify(a));
        dispatch(putPosts(a));
    }
}