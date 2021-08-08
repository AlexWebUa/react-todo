import React from 'react';
import ListItem from "./ListItem";

const ListBody = ({todos, activeFilter, priorityFilter}) => {
    let todosCopy = [...todos];

    if (activeFilter !== null) {
        todosCopy = todosCopy.filter(todo => activeFilter === todo.isDone);
    }
    if (priorityFilter !== 'ALL') {
        todosCopy = todosCopy.filter(todo => priorityFilter === todo.priority);
    }

    return (
        <div className='list__body'>
            {todosCopy.map(todo => (
                <ListItem {...todo}/>
            ))}
        </div>
    );
}

export default ListBody;