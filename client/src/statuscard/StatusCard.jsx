import React from 'react'

import './statuscard.scss'

function StatusCard(props) {
    return (  
        <div className ='status-card'>
            <div className ="status-card_info">
                  <h4>{props.rating}</h4> 
                  <span>{props.name}</span>
        
                <span></span>
            </div>
        </div>
    )
}

export default StatusCard
