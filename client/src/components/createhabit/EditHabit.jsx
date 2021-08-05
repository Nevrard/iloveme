import React, {useState, useEffect} from 'react';
import {Button, Modal, ModalHeader,ModalBody, ModalFooter} from 'reactstrap';

const EditHabit = ({modal, toggle, updateHabit, habitObj}) => {
   const [habitName, setHabitName] = useState('');
   const [description, setDescription] = useState('');

   const handleChange = (e) => { 
       const {name, value} = e.target

       if(name === "habitName"){
           setHabitName(value)

       }else{
           setDescription(value)
       }
   }

   useEffect(() => {
    setHabitName(habitObj.Name)
    setDescription(habitObj.Description)
},[])

   const handleUpdate = (e) => {
       e.preventDefault();
       let tempObj = {}
       tempObj['Name'] = habitName
       tempObj['Description'] = description
       updateHabit(tempObj)
   }


   return( 
       <Modal isOpen={modal} toggle={toggle}>
           <ModalHeader toggle={toggle}>Update Habit</ModalHeader>
           <ModalBody>
               <div className = "form-group">
                   <label>Habit Name</label>
                   <input type='text' className = "form-control" value = {habitName} onChange = {handleChange} name ="habitName"/>
               </div>
               <div className="form-group">
                   <label>Description</label>
                   <textarea rows = "5" className ="form-control" value={description} onChange ={handleChange} name = "description"/>
               </div>
           </ModalBody>
           <ModalFooter>
               <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
               <Button color ="primary" onClick={toggle}>Cancel</Button>
           </ModalFooter>
           </Modal>
   );
};


export default EditHabit;