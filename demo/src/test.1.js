import React, { Component } from 'react';
class Test1 extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'test1'
    }
  }
  render() {
    return (
      <div className="Test">
        这个是来自test1的页面 名字是：{this.state.name}
      </div>
    );
  }
}

export default Test1;
