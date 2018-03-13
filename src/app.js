import React from 'react';
import { render } from 'react-dom';
import TodoPage from './todos/components/todo-page.js'
import TodoLength from './todos/components/todo-length.js'
import { Todos } from './todos/todos.js'
import { Store } from './todos/store.js'

let todos = new Todos();
todos.init();

let store = new Store(todos);

render( <div>
          <TodoPage store={store} />
          <TodoLength store={store} />
        </div> , document.getElementById('app'));
