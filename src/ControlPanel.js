import React, {useState} from 'react';
import {TodoStates} from "./Utils";

const Control = ({title, isActive, onClick}) => {
    return (
        <div className={`control ${isActive ? 'active' : ''}`} onClick={onClick}> {title} </div>
    );
}

const PrioritySelectorControl = ({options, defaultValue, changePriorityFilter}) => {
    const [value, setValue] = useState(defaultValue);

    return (
        <label htmlFor='prioritySelector' className='control priority-selector'>
            Priority:
            <select id='prioritySelector' value={value} onChange={
                (e) => {
                    setValue(e.target.value);
                    changePriorityFilter(e.target.value);
                    e.currentTarget.blur()
                }
            }>
                {options.map(option => (<option value={option.value} key={option.value}>{option.title}</option>))}
            </select>
        </label>
    );
}

const ControlPanel = ({activeFilter, changeActiveFilter, changePriorityFilter}) => {
    const controls = [
        {title: 'All', value: TodoStates.ALL},
        {title: 'Active', value: TodoStates.ACTIVE},
        {title: 'Done', value: TodoStates.DONE},
    ]

    return (
        <div className='list__controls'>
            {controls.map(control => (
                <Control
                    title={control.title}
                    isActive={control.value === activeFilter}
                    onClick={() => {
                        changeActiveFilter(control.value)
                    }}
                    key={control.value}
                />)
            )}
            <PrioritySelectorControl
                options={[
                    {value: 'ALL', title: 'All'},
                    {value: 'NONE', title: 'None'},
                    {value: 'LOW', title: 'Low'},
                    {value: 'MEDIUM', title: 'Medium'},
                    {value: 'HIGH', title: 'High'}
                ]}
                defaultValue='all'
                changePriorityFilter={changePriorityFilter}
            />
        </div>
    );
}

export default ControlPanel;