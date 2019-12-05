import React, { Component } from "react"


export default class Todoinput
    extends Component {
    render() {
        return (
            <div>
                <form>                 
                    <input type="text" className="form-control"  placeholder="What Do You Need to do?"/>  <br></br> 
                    <button type="submit" className="btn btn-block">Add Item</button> <br></br>
                </form>
            </div>

        )
    }
}