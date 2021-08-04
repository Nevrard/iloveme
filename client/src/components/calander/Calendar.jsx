import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { QUERY_MOOD } from '../../utils/queries';
import { QUERY_MOOD_DESCRIPTION } from '../../utils/queries';

const CalendarPage = () => {
    const { userId } = useParams();
    
    const SetClassName = ({ date, view }) => {
        const { data } = useQuery(QUERY_MOOD, 
            {
                variables: 
                    {
                        _id: userId,
                        date
                    }
            })
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

    const ShowDescription = ({ value, event }) => {
        const { data } = useQuery(QUERY_MOOD_DESCRIPTION,
            {
                variables:
                    {
                        _id: userId,
                        value
                    }
            })
    }
    return (
        
        <Calendar 
            tileClassName = {SetClassName}
            onClickDay = {ShowDescription}
        />
        
    )

}

export default CalendarPage;