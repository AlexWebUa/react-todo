import React, {useEffect, useState} from 'react';
import ControlPanel from "./ControlPanel";
import ListBody from "./ListBody";
import ListInput from "./ListInput";
import {TodoStates} from './Utils';

const App = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [activeFilter, setActiveFilter] = useState(TodoStates.ALL);
    const [priorityFilter, setPriorityFilter] = useState('ALL');

    useEffect(() => {
        console.log('effect');
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function addTodo(val) {
        let key = `${new Date().getTime()}`;
        let item = {
            isDone: false,
            title: val,
            priority: 'NONE',
            key: key,
            id: key,
        }

        setTodos(todos.concat(item));
    }

    function handleCheck(key, isDone) {
        let newTodos = todos.map(todo => {
            if (todo.id === key) todo.isDone = isDone;
            return todo;
        });
        setTodos(newTodos);
    }

    function removeTodo(key) {
        let newTodos = todos.filter(todo => todo.id !== key);
        setTodos(newTodos);
    }

    function changePriority(key, priority) {
        let newTodos = todos.map(todo => {
            if (todo.id === key) todo.priority = priority;
            return todo;
        });
        setTodos(newTodos);
    }

    return (
        <>
            <div className='list__header'>ToDo List</div>

            {todos.length ?
                <ControlPanel activeFilter={activeFilter}
                              changeActiveFilter={(filter) => setActiveFilter(filter)}
                              changePriorityFilter={(filter) => setPriorityFilter(filter)}
                /> : ''}

            <ListInput addTodo={addTodo}/>

            <ListBody
                todos={todos}
                activeFilter={activeFilter}
                priorityFilter={priorityFilter}
                handleCheck={handleCheck}
                removeTodo={removeTodo}
                changePriority={changePriority}
            />

            {todos.length ? <div className='list__footer'>{todos.reduce((accum, todo) => {return todo.isDone ? accum : accum + 1;}, 0)} remaining</div> : ''}
        </>
    );
}

export default App;