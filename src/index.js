import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ControlPanel from "./ControlPanel";
import ListBody from "./ListBody";
import ListInput from "./ListInput";

String.prototype.hashCode = function () {
    let hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

const TodoStates = {
    ALL: 'all',
    ACTIVE: 'active',
    DONE: 'done',
}
Object.freeze(TodoStates);

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            showing: TodoStates.ALL,
        }
    }

    removeItem = (key) => {
        let todos = this.state.todos;
        let itemIndex = todos.findIndex(item => item.key === key);
        todos.splice(itemIndex, 1);
        this.setState({
            todos: todos,
        })
    }

    addTodo = (val) => {
        let key = val.hashCode();

        //TODO: bind states from ListItem here
        let item = {
            title: val,
            key: key,
            removeItem: () => {
                this.removeItem(key)
            },
        }

        this.setState(state => {
            return {todos: state.todos.concat(item)}
        });
    }


    render() {
        const activeTodos = this.state.todos.reduce( (accum, todo) => {
            return todo.done ? accum : accum + 1;
        }, 0 );

        //TODO: add conditional rendering for ContorlPanel and footer
        return (
            <>
                <div className='list__header'>ToDo List</div>
                <ControlPanel/>
                <ListInput addTodo={this.addTodo}/>
                <ListBody todos={this.state.todos} showing={this.state.showing}/>
                <div className='list__footer'>{activeTodos} remaining</div>
            </>
        );
    }
}

ReactDOM.render(<List/>, document.getElementById('list'));