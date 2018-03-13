import React from 'react';

class TodoLength extends React.Component {

  constructor (props, context) {
    super (props, context);
    this.state = {
      taskNumber: props.store.todos.getTodos().length
    //   // errors: {},
    //   // saving: false
    };
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onStoreChange () {
    this.setState(() => ( { taskNumber: this.props.store.todos.getTodos().length } ));
  }

  componentDidMount(){
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    return (
      <h3>
        { this.state.taskNumber }
      </h3>
      );
  }
}

export default TodoLength;
