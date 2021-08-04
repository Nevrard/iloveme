import React from 'react';

const HabitList = ({ habits }) => {
    return (
        <>
        {habits.map((habit, index) => (
            <tr key={index}>
                <td>{habit.habit}</td>
                <td><input type='button'/></td>
                {/* cell with input that changes state making font awesome icon appear */}
                {/* <td><input type="button"><FontAwesomeIcon /></input></td> */}
            </tr>
        ))}
        </>
    )

};
export default HabitList;