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
        const { title, handleDelete, handleEdit } = this.props
        return (
            <div className="row">
                <div className="col-6 col-sm-6 col-xs-6">
                    <p style={{background: this.state.color}} className="list-group-item">{title}</p>
                </div>
                <div className="buttons col-2 col-sm-2 col-xs-2">
                    <button onClick={handleEdit} type="button">Edit
                </button>  </div>
                <div className="buttons col-2 col-sm-2 col-xs-2" >
                    <button onClick={this.changeColor} type="button">Done</button>
                </div>
                <div className="buttons col-2 col-sm-2 col-xs-2" >
                    <button onClick={handleDelete} type="button">Delete</button>
                </div>
                
            </div>
        );
    }
}







