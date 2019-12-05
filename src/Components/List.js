import React, { Component } from "react"

class List extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            task: "",
            items: []
        }
    }

    onChange = event => {
        this.SetState({ task: event.target.value });
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({
            task: "",
            items: [...this.state.items, this.state.task]
        })
    }

    onDelete = 

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
            <div className= "col-12">
            <form className="form"><label></label>
                <input type="text" placeholder="What do you need to do?" />
                <button className="button1" type="submit">Add</button>
            </form>
            </div>
            </div>
        </div> 
            )
        }
    }
    
    export default List;
    
    
