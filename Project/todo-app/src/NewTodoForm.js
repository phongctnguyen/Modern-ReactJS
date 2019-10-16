import React, { Component } from 'react';
import uuid from "uuid/v4";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : ''
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addTodo({...this.state, id: uuid()})
        this.setState({
            task: ''
        });
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="width">New Todo</label>
                    <input 
                    type='text'
                    id='new-todo'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                    />
                    <button>ADD TODO</button>
                </div>
            </form>
        )
    }
}

export default NewTodoForm; 