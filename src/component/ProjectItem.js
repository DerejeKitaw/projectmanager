import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {
      console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.id}</strong>  {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
