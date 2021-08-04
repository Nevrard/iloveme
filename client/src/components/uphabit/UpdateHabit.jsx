import React  from 'react';
import HabitList from '../habitlist/HabitList';

const UpdateHabit = ({ habits }) => {
    return (
        <>
        <table>
            <tr>
                <th>Habit</th>
                <th>Update</th>
            </tr>
            <HabitList habits={habits}/>
        </table>
        <div>
            <button>Update</button>
        </div>
        </>
    )
}

export default UpdateHabit;