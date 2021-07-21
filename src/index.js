import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ControlPanel from "./ControlPanel";
import ListBody from "./ListBody";

class List extends React.Component {
    render() {
        return (
            <>
                <div className='list__header'>ToDo List</div>
                <ControlPanel />
                <ListBody />
                <div className='list__footer'></div>
            </>
        );
    }
}

ReactDOM.render(<List />, document.getElementById('list'));