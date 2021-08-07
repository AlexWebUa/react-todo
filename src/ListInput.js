import React, {useState} from 'react';

const ENTER_KEY = 13;

const ListInput = ({addTodo}) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');

    function handleKeyDown(e) {
        if (e.keyCode !== ENTER_KEY) {
            return;
        }

        e.preventDefault();

        let val = newTodoTitle.trim();

        if (val) {
            addTodo(val);
            setNewTodoTitle('');
        }
    }

    return (
        <input
            className='list__input'
            placeholder='What do you need to do?'
            type="text"
            value={newTodoTitle}
            onKeyDown={handleKeyDown}
            onChange={(e) => {setNewTodoTitle(e.target.value)}}
            autoFocus={true}
        />
    );
}

export default ListInput;