import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 

//引入test这个组件
import Test from './test'
//引组件
import Test1 from './test.1'
class MyRouter extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return <div>
            <Router>
              <Route path="/test" component={Test}/>
            </Router>
            <Router>
              <Route path="/ttt" component={Test1}/>
            </Router>
          </div>
  }
}
export default MyRouter;