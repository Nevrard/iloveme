import React, {useState, useEffect} from 'react';
import {Button, Modal, ModalHeader,ModalBody, ModalFooter} from 'reactstrap';

const EditHabit = ({modal, toggle, updateHabit, habitObj}) => {
   const [habitName, setHabitName] = useState('');
   const [rating, setRating] = useState('');

   const handleChange = (e) => { 
       const {name, value} = e.target

       if(name === "habitName"){
           setHabitName(value)

       }else{
           setRating(value)
       }
   }

   useEffect(() => {
    setHabitName(habitObj.Name)
    setRating(habitObj.Rating)
},[])

   const handleUpdate = (e) => {
       e.preventDefault();
       let tempObj = {}
       tempObj['name'] = habitName
       tempObj['rating'] = rating
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
               <div className = "form-group">
                   <label>Rating</label>
                   <input row = "3" className = "form-control" value = {rating} onChange = {handleChange} name ="description"/>
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