import React from 'react';

class Control extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: this.props.isActive ?? false,
        }
    }

    render() {
        const title = this.props.title;

        return(
            <div className={`control ${this.state.isActive ? 'active' : ''}`} onClick={this.props.onClick}>
                {title}
            </div>
        );
    }
}

class PrioritySelectorControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
        }

        this.options = [];
        this.props.options.map(option => {
            this.options.push(
                <option value={option.value} key={option.value}>
                    {option.title}
                </option>
            );
        });
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
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
    handleClick = (e) => {
        //TODO: change active control, move it to parent component, change view of the list
        console.log(e.target);
    }

    render() {
        return (
            <div className='list__controls'>
                <Control title='All' onClick={this.handleClick} isActive={true} />
                <Control title='Active' onClick={this.handleClick} />
                <Control title='Done' onClick={this.handleClick} />
                <PrioritySelectorControl
                    options={[
                        {value: 'all', title: 'All'},
                        {value: 'low', title: 'Low'},
                        {value: 'medium', title: 'Medium'},
                        {value: 'high', title: 'High'}
                    ]}
                    defaultValue='all'
                />
            </div>
        );
    }
}

export default ControlPanel;