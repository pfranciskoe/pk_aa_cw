export const allTodos = (state) => {
    return ( Object.keys(state.todos.todos).map((id) =>
        state.todos.todos[id]
    ))
}

