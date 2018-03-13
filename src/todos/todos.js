import { Task } from './task.js';

export class Todos {

  constructor() {
    this.todos = [];
  }

  init() {
    this.todos.push(new Task('Taste Javascript', true));
    this.todos.push(new Task('Buy a unicorn'));
  }

  addTask(task) {
    this.todos.push(new Task(task));
  }

  removeTask(index) {
    this.todos = this.todos.filter((e, i) => i != index);
  }

  getTodos() {
    return this.todos;
  }

}
