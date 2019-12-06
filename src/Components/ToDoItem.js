import React, { Component } from "react"


export default class ToDoItem
    extends Component {
    render() {
        const { title } = this.props
        return (
            <div className="row">
            <div className="col-6 col-sm-6 col-xs-6">
            <p className="list-group-item">{title}</p>
            </div>
            <div className="col-3 col-sm-3 col-xs-3">
                <button type="button">Done</button>  </div>
            <div className="col-3 col-sm-3 col-xs-3">
                <button type="button">Delete</button>
            </div>
        </div>
    );
    }
}







