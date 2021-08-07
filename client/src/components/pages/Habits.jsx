import React, { useEffect, useMemo, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Card from '../createhabit/HabitCard'

import CreateHabit from '../createhabit/Createhabit'

import { QUERY_ALL_HABITS } from '../../utils/queries'

import { CREATE_HABIT } from '../../utils/mutations'



export function Habits() {
    const [modal, setModal] = useState(false);
    ///array will get update with user information 
    const [habitList, setHabitList] = useState([])

    const [addHabit, { error }] = useMutation(CREATE_HABIT);

    const { loading, data } = useQuery(QUERY_ALL_HABITS);

    let storedHabitsList = useMemo(() => {
        let returnedList = data?.getHabits.habits || [{name:"start", rating:''}];
        return Object.values(returnedList);
    },[data]);

    useEffect(() =>  { 
        setHabitList(storedHabitsList);
    },[storedHabitsList])

    const deleteHabit = (index) => {
        let tempList = habitList 
        tempList.splice(index, 1)
        data.setItem("habitList", JSON.stringify(habitList))
        setHabitList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => { 
        let tempList = habitList
        tempList[index] = obj 
        setHabitList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveHabit = (habitObj) => { 
        let tempList = [...storedHabitsList];
        
        tempList.push(habitObj);

        try {
            addHabit({
                variables: {
                    name: habitObj.name,
                    rating: "0"  
                }
            });
        } catch (error) {
            console.error(error);
        }


        setHabitList(tempList);
        setModal(false)    
    }
    return (
        <>
        <div class="header text-center">
            <h4 className = "mt-1">HABITS</h4>
            <button className = "btn btn-primary mt-2" onClick ={() => setModal(true)}>Create Habit</button>
        </div>
        <div className="habit-container"> 
        {/* input card styling bellow */}
            {habitList && habitList.map((obj, index) => <Card habitObj = {obj}  index = {index} deleteHabit = {deleteHabit}  updateListArray = {updateListArray} edit={true}/>)}
        
           

        </div>
        <CreateHabit toggle = {toggle} modal= {modal}  save = {saveHabit} />
        
       
       </>
    )
}

export default Habits
