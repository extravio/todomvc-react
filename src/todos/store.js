import { Todos } from './todos.js';

export class Store {

  constructor(todos) {
    this.todos = todos;
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  subscribe(cb) {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe(subscriptionId) {
    delete this.subscriptions[this.lastSubscriptionId];
  }

  removeTask(index) {
    this.todos.removeTask(index);
    this.notifySubscribers();
  }

  notifySubscribers() {
    Object.values(this.subscriptions).forEach((cb) => { cb(); });
  }

  getState() {
    return {
      todos: this.todos
    }
  }

}
