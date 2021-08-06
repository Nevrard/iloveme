import React, {useEffect, useState} from 'react'
import Sidebar from  '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import MobileMenu from '../mobilebar/Navbar'

import './hub.scss'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

export default function Hub() {
    const [windowDimension, setWindowDimension] = useState(null);
    useEffect(() => {
        setWindowDimension(window.innerWidth);
      }, []);
    
      useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const isMobile = windowDimension <= 768;

    return (
       <BrowserRouter>
         <Route render = {(props) => (
             <div className='hub'>
                 {isMobile ? (
                     <MobileMenu />
                 ) : (
                 <Sidebar {...props}/>
                 )}
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

