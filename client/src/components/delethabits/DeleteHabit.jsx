import React  from 'react';
import HabitList from '../habitlist/HabitList';

const DeleteHabit = ({ habits }) => {
    return (
        <>
        <table>
            <tr>
                <th>Habit</th>
                <th>Delete</th>
            </tr>
            <HabitList habits={habits}/>
        </table>
        <div>
            <button>Delete</button>
        </div>
        </>
    )
}
export default DeleteHabit;