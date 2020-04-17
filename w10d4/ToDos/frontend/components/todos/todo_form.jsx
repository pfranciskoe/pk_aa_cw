import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            done: ''
        };
        this.addTodo = this.addTodo.bind(this)
    }
    
    addTodo(title, body) {
        
        this.setState
    }

    render() {
        return (
            <form action="">
                <label>Title
                    <input type="text" name="title"/>
                </label>
                <br/>
                <label>Body
                    <textarea name="body"></textarea>
                </label>
                <button onClick={this.addTodo(title, body)}>Submit new Todo!</button>
            </form>
        )
    }
}

export default TodoForm;