import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TodoList.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null
}

function TodoList({todoList, onTodoClick}) {
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;

    onTodoClick(todo, index)
  } 
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => 
        (
          <li
            key={todo.id}
            className = {classNames({
              'todo=item': true,
              completed: todo.status === 'completed'
            })}
            onClick={() => handleTodoClick(todo, index)}
          >
            {todo.title}
          </li>
        )
      )}
    </ul>
  );
}

export default TodoList;