import React, { Component } from "react"


export default class Todoinput
    extends Component {

    render() {
        const { item, handleChange, dateDue, handleDate, handleSubmit, editItem } = this.props
        return (
            <div>
                <input type="text" className="form-control" placeholder="What Do You Need to do and when is it due?" value={item} onChange={handleChange} />
                <br></br>
                        <input type="date" className="form-control" value={dateDue} onChange={handleDate} />
                <br></br>
                <button type="submit" className="btn btn-block" onClick={handleSubmit}>
                    {editItem ? 'Edit Item' : "Add Item"}
                </button>
                <br></br>
            </div>

        )
    }
}
