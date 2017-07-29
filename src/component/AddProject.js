import React, { Component } from 'react';

class AddProject extends Component {
    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }
    // Set default category
    static defaultProps = {
        categories: [
            'web Design' , 'Web Development', 'Mobile Development'
        ]
    }
    handleSubmit(e){
        console.log("Submitted : " + this.refs.title.value);
        e.preventDefault(); //do not work with out this
    }
  render() {
      let categoryOptions = this.props.categories.map(category =>{
          return <option key={category} value="category">{category}</option>
      });
    return (
      <div>
          <h3>Add Project</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
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
              <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}

export default AddProject;
