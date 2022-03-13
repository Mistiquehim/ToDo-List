import React, { useState } from "react";
import './style/ToDoList.css';
import { useDispatch, useSelector } from "react-redux";
import { editToDo, updateToDo, deleteToDo, toggleToDo } from "../redux/action";

export const TodoList = () => {

    const dispatch = useDispatch();
    const { todos: { todos } } = useSelector(state => state);
    const [value, setValue] = useState('');
    const [status, setStatus] = useState(false);

    const editList = (id) => {
        dispatch(editToDo(id));
    }

    const updateList = (id) => {
        dispatch(updateToDo(id, value));
    }

    const handleList = (e) => {
        setValue(e.target.value);
    }

    const deleteList = (id) => {
        dispatch(deleteToDo(id));
    }

    const handleStatus = (id) => {
        dispatch(toggleToDo(id));
    }

    return (<>
    {todos.length > 0 ? todos.map((todo, idx) =>
        <div className={!todo.completed ? "incomplete list" : "complete list"}>
            <React.Fragment key={`todo` + idx}>
                {!todo.edited ? <div>{todo.content}</div> : <input className="inp-box" placeholder={todo.content} value={value} onChange={handleList} />}
                <div className="btn-container">
                    <div className="status-input">
                        <input id={todo.id} type="checkbox" checked={todo.completed} disabled={todo.edited} onChange={() => handleStatus(todo.id)} /> {!todo.completed ? <label for={todo.id}>Incomplete</label> : <label for={todo.id}>Complete</label>}
                    </div>
                    {todo.edited ? <div className="btn edit" onClick={() => updateList(todo.id, todo.content)}>Update</div> : <div className="btn" onClick={() => editList(todo.id)}>Edit</div>}
                    <div className="btn delete" onClick={() => deleteList(todo.id)}>Delete</div>
                </div>
            </React.Fragment>
        </div>) : <div>Create your To Do list </div>}
    </>
    )
} 