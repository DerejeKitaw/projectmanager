import React, { Component } from 'react';


class ProjectItem extends Component {
  deleteProject(id){
    // console.log("works");
    this.props.onDelete(id);
  }
  render() {
      console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.id}</strong>  {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>  
      </li>
    );
  }
}

export default ProjectItem;
