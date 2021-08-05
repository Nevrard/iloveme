import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { QUERY_MOOD } from '../../utils/queries';

const CalendarPage = () => {
    const { userId } = useParams();
    const { data } = useQuery(QUERY_MOOD, 
        {
            variables: 
                {
                    _id: userId,
                }
        })
    
    const SetClassName = ({ date, view }) => {

        //Get properly formatted date => "2021-01-20"
        const compareDate = date.split('T')[0];

        for (let i=0; i< data.getMoods.moods.length; i++) {
            //Convert mood in array to same format as compareDate above
            let moodDate = data.getMoods.moods[i].date.toJSON().split('T')[0];
            
            //If the comparison matches, filter the moods array to only include the mat
            if(moodDate === compareDate){
                let nums = [i];
                data.getMoods.moods = data.getMoods.moods.filter((o,i) => nums.indexOf(i) > -1);
            }
        }
        

        if (view === 'month') {
            if (data.rating === 'very-happy') { 
                return 'very-happy'
            } else if (data.rating === 'happy') { 
                return 'happy'
            } else if (data.rating === 'meh') { 
                return 'meh'
            } else if (data.rating === 'sad') { 
                return 'sad'
            } else if (data.rating === 'vary-sad') { 
                return 'very-sad'
            }
        };
    };

    return (
        
        <Calendar 
            tileClassName = {SetClassName}
        />
        
    )

}

export default CalendarPage;