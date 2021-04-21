export const EDIT_TASK = 'EDIT_TASK';


export const editTask = (index, text) => ({
    type: EDIT_TASK,
    payload: {
        index,
        text
    }
});


