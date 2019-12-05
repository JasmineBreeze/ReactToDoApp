import React, { Component } from "react"
import ToDoItem from './ToDoItem';


export default class ToDoList 
extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <ToDoItem />
                <button type="button" className="btn btn-block">Clear List</button>
            </ul>
        )
    }
}