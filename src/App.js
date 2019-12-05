import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Date from './Components/date';
import Todoinput from './Components/Todoinput';
import ToDoList from './Components/ToDoList';
import uuid from 'uuid';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Date />
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-center">My To Do List</h1><br></br>
            <Todoinput />
            <ToDoList />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
