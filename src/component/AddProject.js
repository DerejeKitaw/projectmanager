import React, { Component } from 'react';

class AddProject extends Component {
    // Set default category
    static defaultProps = {
        categories: [
            'web Design' , 'Web Development', 'Mobile Development'
        ]
    }
  render() {
      let categoryOptions = this.props.categories.map(category =>{
          return <option key={category} value="category">{category}</option>
      });
    return (
      <div>
          <h3>Add Project</h3>
          <form action="">
              <div>
                  <lable>Title</lable>
                  <input type="text" ref="title"/>
              </div>
              <div>
                  <lable>Category</lable>
                  <select ref="category">
                    {categoryOptions}
                  </select>
              </div>
          </form>
      </div>
    );
  }
}

export default AddProject;
