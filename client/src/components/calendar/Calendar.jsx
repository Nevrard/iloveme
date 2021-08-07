import React from 'react';

import { useQuery } from '@apollo/client';

import './calendar.scss';
import Calendar from 'react-calendar';

import { QUERY_MOOD } from '../../utils/queries';


const CalendarPage = () => {
    const { data } = useQuery(QUERY_MOOD)
    console.log(data)
    const SetClassName = ({ date, view }) => {
        if (data) {
            if (view === 'month') {
                let moodDateISO
                let currentDateRating;
                //Get properly formatted date => "2021-01-20"
                const compareDate = date.toISOString().split('T')[0];

                for (let i = 0; i < data.getMoods.moods.length; i++) {
                    //Convert mood in array to same format as compareDate above
                    let moodDate = data.getMoods.moods[i].date
                    const time = new Date(moodDate * 1);
                    let month = time.getMonth() + 1
                    let day = time.getDate()
                    const year = time.getFullYear()
                    if (month < 10) {
                        month = '0' + month
                    };
                    if (day < 10) {
                        day = '0' + day
                    };
                    moodDateISO = year + '-' + month + '-' + day;

                    //If the comparison matches, filter the moods array to only include the mat
                    if (moodDateISO === compareDate) {
                        currentDateRating = data.getMoods.moods[i].rating
                        console.log(typeof currentDateRating)
                    }
                }
                if (currentDateRating === '1') {
                    return 'one'
                } else if (currentDateRating === '2') {
                    return 'two'
                } else if (currentDateRating === '3') {
                    return 'three'
                } else if (currentDateRating === '4') {
                    return 'four'
                } else {
                    return ''
                }

            };
        }
    };

    return (
        <div className= 'calendar-container'>

            <Calendar
                tileClassName={SetClassName}
                minDetail='year'
                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))}
            />
        </div>

    )

}

export default CalendarPage;