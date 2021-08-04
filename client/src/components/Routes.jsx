import React from 'react'

import {Route, Switch} from 'react-router-dom'


import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'



const Routes = () => { 
    return (
        <Switch>
            <Route path ='/' exact component={Dashboard} />
             <Route path ='/habits' component={Habits} />
             </Switch>
             )
}


export default Routes