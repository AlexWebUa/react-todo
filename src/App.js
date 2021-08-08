import React, {useEffect, useState, useReducer} from 'react';
import ControlPanel from "./ControlPanel";
import ListBody from "./ListBody";
import ListInput from "./ListInput";
import {Context} from "./context";
import reducer from "./reducer";

const Priorities = {
    NONE: '../img/priority-none.png',
    LOW: '../img/priority-low.png',
    MEDIUM: '../img/priority-medium.png',
    HIGH: '../img/priority-high.png',
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')));
    const [activeFilter, setActiveFilter] = useState(null);
    const [priorityFilter, setPriorityFilter] = useState('ALL');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    function addTodo(title) {
        let key = `${new Date().getTime()}`;

        dispatch({
            type: 'add',
            payload: {
                title: title,
                key: key
            }
        })
    }

    return (
        <Context.Provider value={{
            dispatch, Priorities
        }}>
            <div className='list__header'>ToDo List</div>

            {state.length ?
                <ControlPanel activeFilter={activeFilter}
                              changeActiveFilter={(filter) => setActiveFilter(filter)}
                              changePriorityFilter={(filter) => setPriorityFilter(filter)}
                /> : ''}

            <ListInput addTodo={addTodo}/>

            <ListBody
                todos={state}
                activeFilter={activeFilter}
                priorityFilter={priorityFilter}
            />

            {state.length ? <div className='list__footer'>{state.reduce((accum, todo) => {return todo.isDone ? accum : accum + 1;}, 0)} remaining</div> : ''}
        </Context.Provider>
    );
}

export default App;