import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 
import MyRouter from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>这是公共头部</header>
          <MyRouter />
        <footer>这是公共的底部</footer>
      </div>
    );
  }
}

export default App;
