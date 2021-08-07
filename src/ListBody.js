import React from 'react';
import ListItem from "./ListItem";
import {TodoStates} from './Utils';

const ListBody = ({todos, activeFilter, priorityFilter, handleCheck, removeTodo, changePriority}) => {
    let todosCopy = [...todos];

    if (priorityFilter !== 'ALL') {
        todosCopy = todos.filter(todo => priorityFilter === todo.priority);
    }

    return (
        <div className='list__body'>
            {
                todosCopy.map(todo => {
                    let listItem = <ListItem handleCheck={handleCheck} removeTodo={removeTodo} changePriority={changePriority} {...todo}/>;

                    if (activeFilter === TodoStates.ACTIVE && !todo.isDone) return listItem;
                    else if (activeFilter === TodoStates.DONE && todo.isDone) return listItem;
                    else if (activeFilter === TodoStates.ALL) return listItem;
                })
            }
        </div>
    );
}

export default ListBody;