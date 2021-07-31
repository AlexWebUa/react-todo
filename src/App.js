import React from 'react';
import ControlPanel from "./ControlPanel";
import ListBody from "./ListBody";
import ListInput from "./ListInput";
import {TodoStates} from './Utils';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: JSON.parse(localStorage.getItem('todos')) || [],
            activeFilter: TodoStates.ALL,
            priorityFilter: 'ALL',
        }
    }

    addTodo = (val) => {
        let key = `${new Date().getTime()}`;
        let item = {
            done: false,
            title: val,
            priority: 'NONE',
            key: key,
            id: key,
        }

        this.setState(state => {
            return {todos: state.todos.concat(item)}
        }, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
    }

    removeTodo = (key) => {
        let todos = this.state.todos.filter(todo => todo.id !== key);
        this.setState({todos: todos}, () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        });
    }

    handleCheck = (key, done) => {
        let todos = [...this.state.todos];
        todos.map(todo => {
            if (todo.id === key) todo.done = done;
        });
        this.setState({todos: todos}, () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        });
    }

    changePriority = (key, priority) => {
        let todos = [...this.state.todos];
        todos.map(todo => {
            if (todo.id === key) todo.priority = priority;
            return todo;
        });
        this.setState({todos: todos}, () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        });
    }

    changeActiveFilter = (filter) => {
        this.setState({activeFilter: filter})
    }

    changePriorityFilter = (filter) => {
        this.setState({priorityFilter: filter})
    }

    render() {
        const activeTodos = this.state.todos.reduce((accum, todo) => {
            return todo.done ? accum : accum + 1;
        }, 0);

        return (
            <>
                <div className='list__header'>ToDo List</div>

                {this.state.todos.length ?
                    <ControlPanel activeFilter={this.state.activeFilter}
                                  changeActiveFilter={this.changeActiveFilter}
                                  changePriorityFilter={this.changePriorityFilter}
                    /> : ''}

                <ListInput addTodo={this.addTodo}/>

                <ListBody
                    todos={this.state.todos}
                    activeFilter={this.state.activeFilter}
                    priorityFilter={this.state.priorityFilter}
                    handleCheck={this.handleCheck} removeTodo={ key => {this.removeTodo(key)} }
                    changePriority={this.changePriority}
                />

                {this.state.todos.length ? <div className='list__footer'>{activeTodos} remaining</div> : ''}
            </>
        );
    }
}