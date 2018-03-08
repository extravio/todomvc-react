import React from 'react';
import { render } from 'react-dom';
import TodoPage from './todos/components/todo-page.js'
import { Todos } from './todos/todos.js'

let todos = new Todos();
todos.init();

render( < TodoPage /> , document.getElementById('app'));
