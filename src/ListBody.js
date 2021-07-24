import React from 'react';
import ListItem from "./ListItem";

class ListBody extends React.Component {
    render() {
        const todos = this.props.todos;

        return (
            <div className='list__body'>
                {
                    todos.map(todo => (
                        <ListItem removeItem={todo.removeItem} key={todo.key} title={todo.title}/>
                    ))
                }
            </div>
        );
    }
}

export default ListBody;