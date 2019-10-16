import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    createTodo = () => {
        return (
            <ul>
                {this.state.todos.map(todo => <Todo task={todo.task} remove={() => this.removeTodo(todo.id)}/>)}
            </ul>
        )
    }

    addTodo = (todo) => {
        let newTodo = todo;
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id )
        })
    }

    render() {
        return (
            <div>
            <h1>Todo List</h1>
                <NewTodoForm addTodo={this.addTodo}/>
                {this.createTodo()}
            </div>
        )
    }
}

export default TodoList;
