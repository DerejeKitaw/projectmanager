import React, { Component } from 'react';


class TodoItem extends Component {
  deleteTodo(id){
    // console.log("works");
    this.props.onDelete(id);
  }
  render() {
      console.log(this.props);
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>  {this.props.todo.category}  
      </li>
    );
  }
}
//adding validation for the properties
// TodoItem.propTypes={
//   TodoItem:React.PropTypes.object,
//   onDelete:React.PropTypes.func
// }
export default TodoItem;
