import React, { useState } from 'react';

import { useQuery } from '@apollo/client';


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { QUERY_MOOD } from '../../utils/queries';

const CalendarPage = () => {
    const { data } = useQuery(QUERY_MOOD)
    
    const SetClassName = ({ date, view }) => {
        if (view === 'month') {
        let currentDateRating;
        //Get properly formatted date => "2021-01-20"
        const compareDate = date.toISOString().split('T')[0];

        for (let i=0; i< data.getMoods.moods.length; i++) {
            //Convert mood in array to same format as compareDate above
            let moodDate = data.getMoods.moods[i].date.toJSON().split('T')[0];
            
            //If the comparison matches, filter the moods array to only include the mat
            if(moodDate === compareDate){
                currentDateRating = data.getMoods.moods[i].rating
            }
        }
        
            if (currentDateRating === 1) { 
                return 'very-happy'
            } else if (currentDateRating === 2) { 
                return 'happy'
            } else if (currentDateRating === 3) { 
                return 'meh'
            } else if (currentDateRating === 4) { 
                return 'sad'
            } else if (currentDateRating === 5) { 
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