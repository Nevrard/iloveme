import React from 'react'
import Sidebar from  '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import './hub.scss'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

export default function Hub() {
    return (
       <BrowserRouter>
         <Route render = {(props) => (
             <div className='hub'>
                 <Sidebar {...props}/>
                 <div className="hub__content">
                     <TopNav/>
                    <div className="hub__content_main">
                        <Routes/>
                 </div>
            </div>
        </div>
          )}/>
</BrowserRouter>
    )
}

