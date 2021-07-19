import React from 'react';

class ControlPanel extends React.Component {
    render() {
        return (
            <div className='list__controls'>
                <div className='control active'>All</div>
                <div className='control'>Active</div>
                <div className='control'>Done</div>
                <label className='control priority-selector'>
                    Priority:
                    <select id="prioritySelector" defaultValue={'all'}>
                        <option value="all">All</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </label>
            </div>
        );
    }
}

export default ControlPanel;