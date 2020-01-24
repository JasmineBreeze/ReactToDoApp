import React, { Component } from "react"
import ToDoItem from './ToDoItem';


export default class ToDoList
    extends Component {
    render() {
        const { items,  clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                {items.map(item => {
                    return <ToDoItem
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                    />
                })}


                <button type="button" className="clear btn btn-block"
                    onClick={clearList}
                >Clear List</button>
            </ul>
        )
    }
}