import React from 'react';
import {TodoStates} from "./Utils";

function Control(props) {
    return (
        <div className={`control ${props.isActive ? 'active' : ''}`} onClick={props.onClick}> {props.title} </div>
    );
}

class PrioritySelectorControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
        }

        this.options = this.props.options.map(
            option => (
                <option value={option.value} key={option.value}>
                    {option.title}
                </option>
            )
        );
    }

    handleChange = (e) => {
        this.setState({value: e.target.value}, () => {
            this.props.changePriorityFilter(this.state.value);
        });
        e.currentTarget.blur();
    }

    render() {
        return (
            <label htmlFor='prioritySelector' className='control priority-selector'>
                Priority:
                <select id='prioritySelector' value={this.state.value} onChange={this.handleChange}>
                    {this.options}
                </select>
            </label>
        );
    }
}

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);

        this.controls = [
            {title: 'All', value: TodoStates.ALL},
            {title: 'Active', value: TodoStates.ACTIVE},
            {title: 'Done', value: TodoStates.DONE},
        ]
    }

    render() {
        return (
            <div className='list__controls'>
                {this.controls.map(control => (
                    <Control
                        title={control.title}
                        isActive={control.value === this.props.activeFilter}
                        onClick={() => {
                            this.props.changeActiveFilter(control.value)
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
                    changePriorityFilter={this.props.changePriorityFilter}
                />
            </div>
        );
    }
}

export default ControlPanel;