import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {


  render() {
      let todoItems;
      if (this.props.todos){
          todoItems=this.props.todos.map(todo =>{
            return(
            <TodoItem key={todo.title} todo={todo} />);
          })
      }
    return (
      <div className="Todo">
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

//adding validation for the properties
// Todos.propTypes={
//   Todos:React.PropTypes.array,
//   onDelete:React.PropTypes.func
// }
export default Todos;
