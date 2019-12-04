import React, { Component } from 'react';
import './App.css';
import Task from './Task.js';
import Date from './date.js';

function App() {
    return (
      <div className="App">
        <Date />
        <div className="container-fluid">
          <div className="row">
            <h1 className="text-center">My To Do List</h1>
          </div>
        </div>
      </div>
      
     
    );
  }


export default App;
