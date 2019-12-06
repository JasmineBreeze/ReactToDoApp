import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Date from './Components/date';
import Todoinput from './Components/Todoinput';
import ToDoList from './Components/ToDoList';
import uuid from 'uuid';


class App extends Component {
  state={
items:[],
id:uuid(),
item:'',
ediit: false

  }

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = (e)=> {
 e.preventDefault();

const newItem = {
  id:this.state.id,
  title:this.state.item

}

const updatedItems = [...this.state.items, newItem];

this.setState({
  items:updatedItems,
  item:'',
  id:uuid(),
  editItem: false
});


  };

  clearList = ()=>{
    this.setState({
      items:[]
    })
  }

  render() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Date />
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-center">My To Do List</h1><br></br>
            <Todoinput  
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
            <ToDoList items={this.state.items} clearList={this.clearList}/>
          </div>
        </div>
      </div>
    </div>
  );
}
}


export default App;
