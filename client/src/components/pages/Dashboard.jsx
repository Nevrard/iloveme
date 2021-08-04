import React from 'react'
import Mood from '../mood/Mood'
import StatusCard from '../../statuscard/StatusCard'
import statuscard from '../../JsonData/status-card-data.json'




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
                     <div className="card full-height">
                       {'import selected mood from database'}     
                     </div>

                 </div>
                 <div className="col-4" >
                     <div className="card">
                         <div className="card__header">
                             <h4>Top Habits</h4>
                         </div>
                          <div className ="card__body">
                              
                          </div>
                     </div>
                 </div>
         </div>
         </div>
    )
}

export default Dashboard
