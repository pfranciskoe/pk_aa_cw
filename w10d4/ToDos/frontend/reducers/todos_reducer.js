import { RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions.js'

const initialState = {
    todos: {
        1: {     
          id: 1,
          title: "wash car", 
          body: "with soap",
          done: false
        },
        2: {  
          id: 2,
          title: "wash dog",
          body: "with shampoo",
          done: true
        }
    }
};

const todosReducer = (state = initialState, action)=>{
    Object.freeze(state);
    const newState = Object.assign({},state);
    switch (action.type) {
        case RECEIVE_TODOS:
            newState.todos = {};
            return action.todos.map((todo)=>{
                newState.todos[todo.id] = todo;
            });
        case RECEIVE_TODO:
            newState.todos[action.todo.id] = action.todo
            return newState;
        default:
            return state;
    }
};

export default todosReducer;


// {
//     1: {
//         id: 1,
//             title: 'wash car',
//                 body: 'with soap',
//                     done: false
//     },
//     2: {
//         id: 2,
//             title: 'wash dog',
//                 body: 'with shampoo',
//                     done: true
//     },
// }