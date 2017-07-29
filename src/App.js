import React, { Component } from 'react';
import uuid from 'uuid';
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
          id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce Shoping Cart',
          category: 'Web Development'
        }
        ]
      }
    )
  }
handleProject(project){
  // console.log(project);
  //Add value to the state
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects})
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
