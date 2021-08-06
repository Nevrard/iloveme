import React, { useState } from 'react';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



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
    e.preventDefault()
    let habitObj = {} 
    habitObj["name"] = habitName
    habitObj["rating"] = habitrating
    save(habitObj)
}
    return (
            <Modal isOpen={modal} toggle={toggle} >
             <ModalHeader toggle={toggle}>Create habit</ModalHeader>
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
                 <Button color="primary" onClick={savePush}>Create Habit</Button>{' '}
                  
                 <Button color="primary" onClick={toggle}>Cancel</Button>
             </ModalFooter>

            
            </Modal>
            
   
    );
};

export default Createhabit


