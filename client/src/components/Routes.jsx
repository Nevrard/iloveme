import React from 'react'

import {Route, Switch} from 'react-router-dom'


import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'
import Mood from './mood/Mood'



const Routes = () => { 
    return (
        <Switch>
            <Route path ='/' exact component={Dashboard} />
             <Route path ='/habits' component={Habits} />
             <Route path = '/MoodForm' component={Mood} />
             </Switch>
             )
}


export default Routes