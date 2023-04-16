import React from 'react'
import eCourierPhoto from '../../images/eCourierPhoto.png';
import '../../styles/operatorPage-style.css';
import '../../styles/admin-page-style.css';
import { Orders } from '../orders';

function OperatorPage() {
  return (
    <div id='operator-page'>
        <div className="side-bar">
            <div id='operator-title-box'>
                <span id="operator-title">ЦОН</span>
            </div>
            <img className="e-Courier-photo" src={eCourierPhoto} alt="e-courier icon"/>
        </div>

        <Orders />
    </div>
  )
}

export {
    OperatorPage
}
