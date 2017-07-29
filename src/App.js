import React, { Component } from 'react';
import './App.css';
import Projects from './component/Projects'
class App extends Component {
constructor(){
  super();
  this.state={
    projects:[
      {title: 'Business Website',
      category: 'Web Design'},
      {title: 'Social App',
      category: 'Mobile Development'},
      {title: 'Ecommerce Shoping Cart',
      category: 'Web Development'}
    ]
  }
}

  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
