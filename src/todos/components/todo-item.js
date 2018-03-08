import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({item, index, taskToggle, taskRemove}) => {
  /* These are here just to show the structure of the list items */
  /* List items should get the class `editing` when editing and `completed` when marked as completed */
  return (
        <li className={(item.completed) ? 'completed' : '' }>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={ taskToggle } data-index={index} checked={item.completed} />
            <label>{ item.task }</label>
            <button className="destroy" onClick={ taskRemove } data-index={index} ></button>
          </div>
          <input className="edit" defaultValue="Create a TodoMVC template" />
        </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default TodoItem;
