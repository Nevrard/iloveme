import React, { useState } from 'react';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './card.scss'

const Createhabit = ({modal, toggle, save} )  => {

const [habitName, setHabitName] = useState('');
const [ habitrating, setRating] = useState('')

const handleChange = (e) => {
 
     const {name, value} = e.target

     if(name === "habitName") { 
         setHabitName(value)

     } else {
         setRating(value)
     }
}

const savePush = (e) => { 

    if (!habitName) {
        alert("Please enter a habit you want to save!");
        return;
    };

    e.preventDefault()
    let habitObj = {} 
    habitObj["name"] = habitName
    habitObj["rating"] = habitrating
    save(habitObj)
}
    return (
            <Modal isOpen={modal} toggle={toggle} >
             <ModalHeader toggle={toggle}>Create A Habit</ModalHeader>
             <ModalBody>
                    <div className ="form-group">
                    <label>Habit Name</label>
                        <input type="text"  className ="form-control" value = {habitName} onChange = {handleChange} name = "habitName"/>
                    </div>
                    <div className = "form-group">
                        <label>
                         Rating
                       </label>
                       <textarea rows = "" className = "form-control" value = {habitrating} onChange = {handleChange} name = "rating"></textarea>

                    </div>
        
             </ModalBody>
             <ModalFooter>
                 <Button color="primary" onClick={savePush} class="save-button">Create Habit</Button>{' '}
                  
                 <Button color="primary" onClick={toggle} class="cancel-button">Cancel</Button>
             </ModalFooter>

            
            </Modal>
            
   
    );
};

export default Createhabit


