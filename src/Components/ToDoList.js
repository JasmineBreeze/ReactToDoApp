import React, { Component } from "react"
import ToDoItem from './ToDoItem';


export default class ToDoList 
extends Component {
    render() {
        const {items, clearList } = this.props;
        return (
            <ul className="list-group my-5">
                {items.map(item => {
                        return <ToDoItem key={item.id} title={item.title} />;
                        
                    } )}
                

                <button type="button" className="btn btn-block"
                onClick={clearList}
                >Clear List</button>
            </ul>
        )
    }
}