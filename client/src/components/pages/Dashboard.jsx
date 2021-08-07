
import React, { useEffect, useMemo, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Card from '../createhabit/HabitCard'

import StatusCard from '../../statuscard/StatusCard'
import Table from '../../components/table/Table'
import CreateHabit from '../createhabit/Createhabit'

import { QUERY_ALL_HABITS } from '../../utils/queries'

import { CREATE_HABIT } from '../../utils/mutations'



const topHabits = {
    head: [ 
       'name',
         'rating',
         'date',

    ],
    body: [
        
        {
            "name": 'brush teeth',
            'rating': '5 star',
            'date': '0-5-2021'
        
        }, 

        {    
            "name": 'brush teeth',
            'rating': '5 star',
            'date': '0-5-2021'
        
        },
        { 
   
            "name": 'brush teeth',
            'rating': '5 star',
            'date': '0-5-2021'
        
        }
    ]

} 

const renderHabitHead = (item, index) => (
    <ah key={index}>{item}</ah>
    )

    const renderHabitBody = (item, index) => (
    <tr key={index}>
    <td>{item.name}</td>
    <td>{item.rating}</td>
    <td>{item.date}</td>
    <td>
    </td>
    </tr>
    
    )

function Dashboard() {
    const [modal, setModal] = useState(false);
    ///array will get update with user information 
    const [habitList, setHabitList] = useState([])

    const [addHabit, { error }] = useMutation(CREATE_HABIT);

    const { loading, data } = useQuery(QUERY_ALL_HABITS)
    
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
        <div> 
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
            <div className="col-6">
                 <div className="row">
                 <div className="habit-container"> 
        {/* input card styling bellow */}
            {habitList && habitList.map((obj, index) => <Card habitObj = {obj}  index = {index} deleteHabit = {deleteHabit}  updateListArray = {updateListArray}/>)}
        
           

        </div>
                 </div>
                 </div>     
              
                 </div>
                 <div className="col-4" >
                     <div className="card">
                         <div className="card__header">
                             <h4>Top Habits</h4>
                         </div>
                          <div className ="card__body">
                              <Table 
                                  headData={topHabits.head} 
                                  renderHabitHead={(item, index) => renderHabitHead(item, index)}
                                  bodyData={topHabits.body}
                                  renderBody={(item, index) => renderHabitBody(item,index)}
                                  />
                              
                          </div>
                     </div>
                 </div>
         </div>
        
    )
}

export default Dashboard
