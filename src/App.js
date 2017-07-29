import React, { Component } from 'react';
import './App.css';
import Projects from './component/Projects'
import AddProject from './component/AddProject'
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount() {
    this.setState(
      {
        projects: [
          {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shoping Cart',
          category: 'Web Development'
        }
        ]
      }
    )
  }
handleProject(project){
  console.log(project);
}

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
