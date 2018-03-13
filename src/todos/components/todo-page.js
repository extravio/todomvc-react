import React from 'react';
import TodoList from './todo-list.js'

class TodoPage extends React.Component {

  constructor (props, context) {
    super (props, context);
    this.state = {
      task: '',
      todosObj: props.store
    //   // errors: {},
    //   // saving: false
    };
    this.todoEnter = this.todoEnter.bind(this);
    this.taskChange = this.taskChange.bind(this);
    this.taskToggle = this.taskToggle.bind(this);
    this.taskRemove = this.taskRemove.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onStoreChange () {
    this.setState(() => ( { todosObj: this.props.store } ));
  }

  componentDidMount(){
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }

  todoEnter (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      let task = { task: event.target.value, completed: false };
      // return this.setState((prevState, props) => {
      //   let todos = prevState.todos;
      //   todos.push(task);
      //   return {
      //     todos: todos,
      //     task: ''
      //   }
      // });
      // see https://medium.com/@giltayar/immutably-setting-a-value-in-a-js-array-or-how-an-array-is-also-an-object-55337f4d6702
      this.setState((prevState, props) => ({todos: Object.assign([...prevState.todos], { [prevState.todos.length]: task }), task: ''}));
    }
  }

  taskChange (event){
    let task = event.target.value;
    return this.setState((prevState, props) => ({ task: task }));
  }

  taskToggle (event){
    let index = event.target.dataset.index;
    this.setState((prevState, props) => (
      { todos: Object.assign([...prevState.todos],
                             { [index]: { task: prevState.todos[index]['task'], completed: !prevState.todos[index]['completed'] } }
                            )}
    ));
  }

  taskRemove (event){
    let index = event.target.dataset.index;
    this.state.todosObj.removeTask(index);
    // this.setState((prevState, props) => (
    //   { todos: prevState.todos.filter((e, i) => i != index ) }
    // ));
  }

  render() {
    let todos = this.state.todosObj.todos.getTodos();
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus value={ this.state.task } onKeyPress={ this.todoEnter } onChange={ this.taskChange } />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList list={ todos } taskToggle={ this.taskToggle } taskRemove={ this.taskRemove } />
        </section>
        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count"><strong>0</strong> item left</span>
          {/* Remove this if you don t implement routing */}
          <ul className="filters">
            <li>
              <a className="selected" href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          {/* Hidden if no completed items are left ↓ */}
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
      );
  }
}

export default TodoPage;
