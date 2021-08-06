import React from 'react'
import StatusCard from '../../statuscard/StatusCard'
import Table from '../../components/table/Table'
import statuscard from '../../JsonData/status-card-data.json'

import '../createhabit/card.scss'

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
    return (
        <div> 
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
            <div className="col-6">
                 <div className="row">
                       { 
                       statuscard.map((item, index,) => ( 
                            <div className ="col-6">
                                <StatusCard 
                                 rating={item.rating}
                                 name={item.name}
                                />
                                  </div>
                        ))
                       }
                 </div>
                 </div>     
                 <div className ="col-6">
                     <div className="card-wrapper">
                       {'import selected mood from database'}     
                     </div>

                 </div>
                 <div className="col-4" >
                     <div className="card">
                         <div className="card__header">
                             <h4>Top Habits</h4>
                         </div>
                          <div className ="card__body">
                              <Table 
                                  headData={topHabits.head} 
                                  renderHabitHead={(item, index) => renderHabitHead(item, index)}
                                  bodyData={topHabits.body}
                                  renderBody={(item, index) => renderHabitBody(item,index)}
                                  />
                              
                          </div>
                     </div>
                 </div>
         </div>
         </div>
    )
}

export default Dashboard
