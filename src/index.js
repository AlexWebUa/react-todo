import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ControlPanel from "./ControlPanel";

class List extends React.Component {
    render() {
        return (
            <>
                <div className='list__header'>ToDo List</div>
                <ControlPanel />
                <div className='list__body'>
                    <div className="item">
                        <div className='item__checkbox'></div>
                        <div className='item__title'></div>
                        <div className='item__priority'></div>
                        <div className='item__remove'></div>
                    </div>
                </div>
                <div className='list__footer'></div>
            </>
        );
    }
}

ReactDOM.render(<List />, document.getElementById('list'));