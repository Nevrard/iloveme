import React, {useState} from 'react'

import EditHabit from '../createhabit/EditHabit';


const HabitCard = ({habitObj, index, deleteHabit, updateListArray}) => {
    const [modal, setModal] = useState(false);
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

    const toggle = () => {
        setModal(!modal);
    }

    const updateHabit = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteHabit(index)
    }

    return (
        <div class = "card-wrapper mr-5">
        <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
        <div class = "habit-holder">
            <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{habitObj.Name}</span>
            <p className = "mt-3">{habitObj.Description}</p>

            <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                <i class = "" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                <i class="" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
            </div>
    </div>
    <EditHabit modal = {modal} toggle = {toggle} updateHabit = {updateHabit} habitObj = {habitObj}/>
    </div>
    )
}

export default HabitCard
