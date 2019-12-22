import React, { Component } from "react"


export default class Todoinput
    extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="What Do You Need to do?" value={item} onChange={handleChange} />
                    <br></br>
                    <button type="submit" className="btn btn-block">
                        {editItem ? 'Edit Item' : "Add Item"}
                    </button>
                    <br></br>
                </form>
            </div>

        )
    }
}