import React, { Component } from "react"


export default class ToDoItem
    extends Component {
    render() {
        const {title} = this.props
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <p>{title}</p>
                <div className="icons">
                    <span className="text-success mx-auto">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-auto text-danger"> 
                        <i className="fas fa-trash"></i>
                    </span>

                </div>
            </li>

        )
    }
}