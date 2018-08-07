import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 
import React, { Component } from 'react';
import test from './test';
function MyRouter (props) {
  return <Router>
          <Route path="/test" component={test} />
        </Router>
}
export default MyRouter