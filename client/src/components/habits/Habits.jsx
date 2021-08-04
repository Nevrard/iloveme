import React from 'react';
import HabitList from '../habitlist/HabitList';

const Habits = ({ habits }) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Habit</th>
                    <th>Success</th>
                </tr>
                </thead>
                <tbody>
                <HabitList habits={habits} />
                </tbody>
            </table>
        </>
    )
};

export default Habits
