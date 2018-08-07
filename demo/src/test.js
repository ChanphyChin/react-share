import React, { Component } from 'react';
class Test extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'test'
    }
  }
  render() {
    return (
      <div className="Test">
        这个是来自test的页面 名字是：{this.state.name}
      </div>
    );
  }
}

export default Test;
