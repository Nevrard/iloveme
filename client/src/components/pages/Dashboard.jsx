
import React, { useEffect, useMemo, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Card from '../createhabit/HabitCard'

import StatusCard from '../../statuscard/StatusCard'
import Table from '../../components/table/Table'
import CreateHabit from '../createhabit/Createhabit'

import { QUERY_ALL_HABITS } from '../../utils/queries'

import { CREATE_HABIT } from '../../utils/mutations'

import { QUERY_MOOD } from '../../utils/queries';



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

    const moodResponse = useQuery(QUERY_MOOD);

    const [currentMoodMessage, setCurrentMoodMessage] = useState();

    ///array will get update with user information 
    const [habitList, setHabitList] = useState([])

    const [addHabit, { error }] = useMutation(CREATE_HABIT);

    const { loading, data } = useQuery(QUERY_ALL_HABITS);

    let moodMessage = useMemo(()=> {
        
        const moodDescription = moodResponse.data?.getMoods.moods[moodResponse.data.getMoods.moods.length-1].description || {description: "_"};

        let message;

        switch (moodDescription) {
            case "Happy":
                
                message = "Oh, happy days!"
                break;
            case "Meh":
                
                message = "Sometimes, things are just okay. And that is okay!"
                break;
            case "Spooky":
                
                message = "Its okay to reach out for support. We all have bad days. Take some time to focus on yourself!"
                break;
            case "Angry":
                
                message = "Take your time. You got this!"
                break;
        
            default:
                message = "We don't know how youre feeling! We'll try harder next time."
                break;
        }
        
        return  message;

    },[moodResponse])

    useEffect(() => {
        setCurrentMoodMessage(moodMessage);
    },[moodMessage])
    
    let storedHabitsList = useMemo(() => {
        let returnedList = data?.getHabits.habits || [{name:"start", rating:''}];

        returnedList = Object.values(returnedList);

        if(returnedList.length > 2){
            let length = returnedList.length;

            returnedList = [returnedList[length-2], returnedList[length-1]];

        }

        return returnedList;
    },[data]);

    useEffect(() =>  { 
        setHabitList(storedHabitsList);
    },[storedHabitsList])

    return (
        <div className="container"> 
            <h2 className="page-header h1">Dashboard</h2>
            <h2 className="h3 custom_header">Recent Habits</h2>
            <div className="row custom_hub_container">
                <div className="col-8">
                    <div className="row">
                    <div className="habit-container"> 
                        {habitList && habitList.map((obj, index) => <Card habitObj = {obj}  index = {index} edit = {false} />)}
                    </div>
                    </div>
                </div>      
                <div className="col-4 mood_message" >
                    <div className="card md-3 h2">
                        <div className="card__header">
                            <h4>Your Mood Message</h4>
                        </div>
                        <div className ="card-body">
                            <p>{moodMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        
    )
}

export default Dashboard
