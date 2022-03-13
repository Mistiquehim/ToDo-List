import { ADD_TODO, UPDATE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO } from "./../actionTypes";

const initialState = {
    todos: []
};

const todos = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: {
            const {content, id, edited} = action.payload;
            return {
                todos: [
                ...state.todos, 
                { content, completed: false, id, edited: false }
            ]}
        }
        case EDIT_TODO: {
            const { id, edited } = action.payload;
            const todos = state.todos.map(obj => {
                return obj.id === id ? { ...obj, edited } : obj
            });
            return { todos };
        }
        case UPDATE_TODO: {
            const { content, id, edited } = action.payload;
            const todos = state.todos.map(obj => {
                return obj.id === id ? { ...obj, edited: !obj.edited, content: obj.content } : obj
            });
            return { todos };
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            const todos = state.todos.filter(obj => {return obj.id !== id});
            return { todos };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            const todos = state.todos.map(obj => {
                return obj.id === id ? { ...obj, completed: !obj.completed} : obj
            });
            return { todos };
        }
        default: 
            return state;
    }
}

export default todos;