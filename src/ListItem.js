import React, {useContext} from 'react';
import {Context} from './context';

const ListItem = ({id, title, isDone, priority}) => {
    const {dispatch, Priorities} = useContext(Context);

    function handlePriorityChange(e) {
        let selectedPriority = e.target.dataset['priority'];
        let popupClassList = e.currentTarget.classList;

        if (selectedPriority && Priorities.hasOwnProperty(selectedPriority)) {
            dispatch({
                type: 'changePriority',
                payload: {
                    id: id,
                    priority: selectedPriority
                }
            })
        }

        if (popupClassList.contains('show')) popupClassList.remove('show');
        else popupClassList.add('show');
    }

    return (
        <div className={`item ${isDone ? 'done' : ''}`}>
            <div className='item__checkbox' onClick={() => {dispatch({
                type: 'handleCheck',
                payload: id
            })}}>
                <div className='circle'>
                    <svg viewBox="0 0 512 512">
                        <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"/>
                    </svg>
                </div>
            </div>

            {/*TODO: make titles editable*/}
            <span className='item__title'>{title}</span>

            <div className='item__priority' tabIndex='0' onClick={handlePriorityChange}>
                <img className="item__priority--icon" src={Priorities[priority]} alt=''/>
                <ul className='item__priority--popup'>
                    <li data-priority='NONE' className='none'/>
                    <li data-priority='LOW' className='low'/>
                    <li data-priority='MEDIUM' className='medium'/>
                    <li data-priority='HIGH' className='high'/>
                </ul>
            </div>

            <div className='item__remove' onClick={() => {dispatch({
                type: 'remove',
                payload: id
            })}}>
                <svg viewBox="0 0 512 512">
                    <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"/>
                </svg>
            </div>
        </div>
    );
}

export default ListItem;