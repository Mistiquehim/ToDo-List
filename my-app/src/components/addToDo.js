import React, { useState } from "react";
import './style/addToDo.css';
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/action";

export const AddToDo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(value));
        setValue('');
    }

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="todo-inp" type="text" value={value} onChange={handleInput}/>
            <button className="add-btn" type="submit" disabled={!value}>Add List</button>
        </form>
    )
} 