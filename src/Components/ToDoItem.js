import React, { Component } from "react"


export default class ToDoItem
    extends Component {
          constructor(props){
            super(props);
            this.state = { color: ''};
            this.changeColor = this.changeColor.bind(this);
          }
          
          changeColor() {
            this.setState({ color: 'green' });
          }

    render() {
        const { title, date, handleDelete, handleEdit } = this.props
        return (
            <div className="row">
                <div className="col-5 col-sm-5 col-xs-5">
                    <p style={{background: this.state.color}} className="list-group-item">{title}</p>
                </div>
                <div className="col-4 col-sm-4 col-xs-4">
                    <p style={{background: this.state.color}} className="list-group-item">{date}</p>
                </div>
                <div className="buttons col-1 col-sm-1 col-xs-1">
                    <button onClick={handleEdit} type="button">Edit
                </button>  </div>
                <div className="buttons col-1 col-sm-1 col-xs-1" >
                    <button onClick={this.changeColor} type="button">Done</button>
                </div>
                <div className="buttons col-1 col-sm-1 col-xs-1" >
                    <button onClick={handleDelete} type="button">Delete</button>
                </div>
                
            </div>
        );
    }
}







