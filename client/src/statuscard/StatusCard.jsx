import React from 'react'

import './statuscard.scss'
const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
]

function StatusCard(props) {
    return ( 
            <div className = "card-wrapper mr-5">
        <div className = "habit-top" style={{"background-color": colors.primaryColor}}></div>
        <div className = "habit-holder">
            <span className = "habit-header" style={{"background-color": colors.secondaryColor, "border-radius": "10px"}}>{props.name}</span>
            <p className = "mt-3">{props.rating}</p>
            <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}></div>
         
        </div>
    </div>
    )
}

export default StatusCard
