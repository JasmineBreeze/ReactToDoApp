import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Date from './Components/date';
import Todoinput from './Components/Todoinput';
import ToDoList from './Components/ToDoList';
import uuid from 'uuid';
import axios from "axios";



class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get("https://bm3fja74kk.execute-api.eu-west-1.amazonaws.com/dev/tasks")
    .then((response) => {
        const t = response.data.tasks;
        this.setState({
          items: t
        })
    })
    .catch((err) => {
      console.log(err)
    })
    //fetch the tasks making a GET Request 
    //set them as sate of app 

  }

  handleItemChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleDateChange = (e) => {
    this.setState({
      dateDue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      date: this.state.dateDue,
    }

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      dateDue: '',
      id: uuid(),
      editItem: false,
    });


  };

  clearList = () => {
    this.setState({
      items: []
    })
  }


  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
      dateDue: '',

    });
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
                dateDue={this.state.dateDue}
                handleChange={this.handleItemChange}
                handleDate={this.handleDateChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <ToDoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
