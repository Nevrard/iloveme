import React from 'react';

const HabitHeader = ({ handlePageChange }) => {
    return (
        <>
            <nav>
                <a href='#create' onClick= {() => handlePageChange('create')}>Create</a>
                <a href='#update' onClick= {() => handlePageChange('update')}>Update</a>
                <a href='#delete' onClick= {() => handlePageChange('delete')}>Delete</a>
            </nav>
        </>
    )
}

export default HabitHeader;