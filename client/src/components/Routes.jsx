import React from 'react'

import {Route, Switch} from 'react-router-dom'


import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'
import Mood from './mood/Mood'
import Calendar from './calendar/Calendar'



const Routes = () => { 
    return (
        <Switch>
            <Route path ='/' exact component={Dashboard} />
             <Route path ='/habits' component={Habits} />
             <Route path = '/mood' component={Mood} />
             <Route path = '/calendar' component={Calendar} />
        </Switch>
             )
}


export default Routes