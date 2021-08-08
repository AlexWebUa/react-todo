import React, {useState} from 'react';

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
        {title: 'All', value: null},
        {title: 'Active', value: false},
        {title: 'Done', value: true},
    ]

    return (
        <div className='list__controls'>
            {controls.map(control => (
                    <div
                        key={control.value}
                        className={`control ${control.value === activeFilter ? 'active' : ''}`}
                        onClick={() => {changeActiveFilter(control.value)}}
                    >{control.title}</div>
                )
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