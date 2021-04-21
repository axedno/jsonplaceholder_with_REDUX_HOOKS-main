import {putPosts} from "./actionGetPosts";


export const Delete = (id) => {
    return (dispatch) => {
        console.log(id)
        const a = JSON.parse(localStorage.getItem('posts'));
        a.forEach((item, index) => {
            if(item.id === id) {
                a.splice(index, 1);
                localStorage.setItem('posts', JSON.stringify(a));
                dispatch(putPosts(JSON.parse(localStorage.getItem('posts'))));
            }
        })
    }
}