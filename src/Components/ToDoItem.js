import React, { Component } from "react"


export default class ToDoItem
    extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <div className="icons">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen"></i>

                    </span>
                    <span className="mx-2 text-danger"> 
                        <i className="fas fa-trash"></i>
                    </span>

                </div>
            </li>

        )
    }
}