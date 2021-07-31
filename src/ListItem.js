import React from 'react';
import {Priorities} from './Utils';

class ListItem extends React.Component {
    handleCheck = () => {
        this.props.handleCheck(this.props.id, !this.props.done);
    }

    changePriority = (e) => {
        let selectedPriority = e.target.dataset['priority'];
        let popupClassList = e.currentTarget.classList;

        if (selectedPriority && Priorities.hasOwnProperty(selectedPriority)) {
            this.props.changePriority(this.props.id, e.target.dataset['priority']);
        }

        if (popupClassList.contains('show')) popupClassList.remove('show');
        else popupClassList.add('show');
    }

    render() {
        return (
            <div className={`item ${this.props.done ? 'done' : ''}`}>
                <div className='item__checkbox' onClick={this.handleCheck}>
                    <div className='circle'>
                        <svg viewBox="0 0 512 512">
                            <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"/>
                        </svg>
                    </div>
                </div>

                {/*TODO: make titles editable*/}
                <span className='item__title'>{this.props.title}</span>

                <div className='item__priority' tabIndex='0' onClick={this.changePriority}>
                    <img className="item__priority--icon" src={Priorities[this.props.priority]} alt=''/>
                    <ul className='item__priority--popup'>
                        <li data-priority='NONE' className='none'/>
                        <li data-priority='LOW' className='low'/>
                        <li data-priority='MEDIUM' className='medium'/>
                        <li data-priority='HIGH' className='high'/>
                    </ul>
                </div>

                <div className='item__remove' onClick={() => {this.props.removeTodo(this.props.id)}}>
                    <svg viewBox="0 0 512 512">
                        <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default ListItem;