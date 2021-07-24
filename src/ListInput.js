import React from 'react';

const ENTER_KEY = 13;

class ListInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodo: '',
        }
    }

    handleChange = (e) => {
        this.setState({newTodo: e.target.value});
    }

    handleKeyDown = (e) => {
        if (e.keyCode !== ENTER_KEY) {
            return;
        }

        e.preventDefault();

        let val = this.state.newTodo.trim();

        if (val) {
            this.props.addTodo(val);
            this.setState({newTodo: ''});
        }
    }

    render() {
        return (
            <input
                className='list__input'
                placeholder='What do you need to do?'
                type="text"
                value={this.state.newTodo}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleChange}
                autoFocus={true}
            />
        );
    }
}

export default ListInput;