import React from 'react';
import ListItem from "./ListItem";
import {TodoStates} from './Utils';

class ListBody extends React.Component {
    render() {
        let todos = this.props.todos;

        if (this.props.priorityFilter !== 'ALL') {
            todos = todos.filter(todo => this.props.priorityFilter === todo.priority);
        }

        return (
            <div className='list__body'>
                {
                    todos.map(todo => {
                        let listItem = <ListItem handleCheck={this.props.handleCheck} removeTodo={this.props.removeTodo} changePriority={this.props.changePriority} {...todo}/>;

                        if (this.props.activeFilter === TodoStates.ACTIVE && !todo.done) return listItem;
                        else if (this.props.activeFilter === TodoStates.DONE && todo.done) return listItem;
                        else if (this.props.activeFilter === TodoStates.ALL) return listItem;
                    })
                }
            </div>
        );
    }
}

export default ListBody;