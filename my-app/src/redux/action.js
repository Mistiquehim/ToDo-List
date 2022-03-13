import { ADD_TODO, EDIT_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

let nextToDoId = 0;

export const addToDo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextToDoId,
        content: content
    }
});

export const editToDo = (id) => ({
    type: EDIT_TODO,
    payload: { 
        id,
        edited: true
    }
});

export const updateToDo = (id, content) => ({
    type: UPDATE_TODO,
    payload: { id, content }
});

export const deleteToDo = (id) => ({
    type: DELETE_TODO,
    payload: {id}
});

export const toggleToDo = (id) => ({
    type: TOGGLE_TODO,
    payload: {id}
})