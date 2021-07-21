import React from 'react';
import {unmountComponentAtNode} from "react-dom";

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.Priorities = {
            NONE: '../img/priority-none.png',
            LOW: '../img/priority-low.png',
            MEDIUM: '../img/priority-medium.png',
            HIGH: '../img/priority-high.png',
        }
        Object.freeze(this.Priorities);

        this.state = {
            done: false,
            title: this.props.title,
            priority: 'NONE',
            popupOpened: false,
            show: true,
        }
    }

    handleCheck = () => {
        this.setState((state) => {
            return {done: !state.done}
        });
    }

    handlePopupClick = () => {
        this.setState((state) => {
            return {popupOpened: !state.popupOpened}
        });
    }

    closePopup = () => {
        this.setState({
            popupOpened: false
        })
    }

    removeItem = () => {
        this.setState({
            show: false
        })
    }

    changePriority = (e) => {
        let selectedPriority = e.target.dataset.priority;
        if (selectedPriority && this.Priorities.hasOwnProperty(selectedPriority)) {
            this.setState({
                priority: selectedPriority
            })
        }
    }

    render() {
        if (!this.state.show) return null

        return (
            <div className={`item ${this.state.done ? 'done' : ''}`}>
                <div className='item__checkbox' onClick={this.handleCheck}>
                    <div className='circle'>
                        <svg viewBox="0 0 512 512">
                            <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"/>
                        </svg>
                    </div>
                </div>

                <input className='item__title' type='text' disabled={true} value={this.state.title} />

                <div className='item__priority' tabIndex='0' onClick={this.handlePopupClick} onBlur={this.closePopup}>
                    <img className="item__priority--icon" src={this.Priorities[this.state.priority]} alt=''/>
                    <ul className={`item__priority--popup ${this.state.popupOpened ? 'show' : ''}`} onClick={this.changePriority}>
                        <li><img src="../img/priority-none.png" data-priority='NONE' alt=""/></li>
                        <li><img src="../img/priority-low.png" data-priority='LOW' alt=""/></li>
                        <li><img src="../img/priority-medium.png" data-priority='MEDIUM' alt=""/></li>
                        <li><img src="../img/priority-high.png" data-priority='HIGH' alt=""/></li>
                    </ul>
                </div>

                <div className='item__remove' onClick={this.removeItem}>
                    <svg viewBox="0 0 512 512">
                        <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"/>
                    </svg>
                </div>
            </div>
        );
    }
}

class ListBody extends React.Component {
    render() {
        return (
            <div className='list__body'>
                <ListItem title='sometingasdfaidsfkj' />
                <ListItem title='something2' />
            </div>
        );
    }
}

export default ListBody;