import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'
import {receiveTodos, receiveTodo} from './actions/todo_actions.js'
import Root from './components/root.jsx'
import {allTodos} from './reducers/selectors.js';

window.allTodos = allTodos;

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');
    ReactDOM.render(<Root store={store}/>, content)
})