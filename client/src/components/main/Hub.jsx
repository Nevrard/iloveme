import React, {useEffect, useState} from 'react'
import TopNav from '../topnav/TopNav'
import MobileMenu from '../mobilebar/Navbar'

import './hub.scss'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

export default function Hub() {

    return (
       <BrowserRouter>
         <Route render = {(props) => (
             <div className='hub'>
                 
                 <div className="hub__content">
                     {/* <TopNav/> */}
              
                    <div className="hub__content_main">
                        <Routes/>
                 </div>
            </div>
        </div>
          )}/>
</BrowserRouter>
    )
}

