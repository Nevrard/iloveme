import React, { useEffect, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Card from '../createhabit/HabitCard'

import CreateHabit from '../createhabit/Createhabit'

import { QUERY_ALL_HABITS } from '../../utils/queries'


function Habits() {
    const [modal, setModal] = useState(false);
    ///array will get update with user information 
    const [habitList, setHabitList] = useState([])

    const { loading, data } = useQuery(QUERY_ALL_HABITS);

    const databaseHabits = data?.getHabits.habits || [{name:"Hello World", description:'Hi There!'}];

    console.log(databaseHabits);

    console.log(data)

    useEffect(() =>  { 
        let arr = localStorage.getItem("habitList")

        if(arr) {
        let obj = JSON.parse(arr)
           setHabitList(obj)
        }
        
    }, [])

    const deleteHabit = (index) => {
        let tempList = habitList 
        tempList.splice(index, 1)
        localStorage.setItem("habitList", JSON.stringify(habitList))
        setHabitList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => { 
        let tempList = habitList
        tempList[index] = obj 
        localStorage.setItem(habitList, JSON.stringify(tempList))
        setHabitList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveHabit = (habitObj) => { 
             let tempList = habitList 
              localStorage.setItem("habitList", tempList)
             tempList.push(habitObj)
             setHabitList(tempList)
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
         {habitList && habitList.map((obj, index) => <Card habitObj = {obj}  index = {index} deleteHabit = {deleteHabit}  updateListArray = {updateListArray}/>)}
           {habitList.map((obj) => <li>{obj.name}</li>)}

        </div>
        <CreateHabit toggle = {toggle} modal= {modal}  save = {saveHabit}/>
        
       
       </>
    )
}

export default Habits
