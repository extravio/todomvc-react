import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todo-item.js'

const TodoList = ({list, taskToggle, taskRemove}) => {
  return (
      <ul className="todo-list">
        {/* These are here just to show the structure of the list items */}
        {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
        {list.map((item, index) =>
            <TodoItem key={index} item={item} index={index} taskToggle={ taskToggle }  taskRemove={ taskRemove } />
        )}
      </ul>
  );
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired
};

export default TodoList;
