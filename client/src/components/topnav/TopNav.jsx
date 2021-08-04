import React from 'react'
import "./topnav.scss"
import { Link, useRouteMatch } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../JsonData/notifications.json'

import user_menu from '../../JsonData/user_menu.json'


// eslint-disable-next-line no-lone-blocks
{/*username imported from log*/}
//import user_name from '../.../



const curr_user = { 
    display_name: 'Anthony',
//grabs user image from database

}

const renderNotification = (item, index) => ( 
    <div className="notification-item" key={index}> 
    <i className={item.icon}></i>
     <span>{item.content}</span>
</div>

)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        {}
        <div className="topnav__right-user__image">
         <img src={user.image} alt="" />
        </div>
       
   <div className="topnav__right-user__name">
   {user.displayName}
   </div>
   </div>

    )



const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i> 
            <span>{item.content}</span>
            </div>
            </Link>
            
            )     
    


function TopNav() {
    return (
        <div className='topnav'>
                <div className="topnav__search">
            <input type="text" placeholder='Search for habit..'/>
            <i className="bx bx-search"></i>
                </div>
                <div className="topnav__right">
                    <div className="topnav__right-item">
                        {/*dropdown*/}
                        <Dropdown 
                          icon='bx bx-user' 
                          customToggle={() => renderUserToggle(curr_user)}
                            contentData={user_menu}
                            renderItems={(item, index) => renderUserMenu(item, index)}
                          />
                            </div>
                            {/*static notification/whn have time input live */}
                           <div className="topnav__right-item">
                        {/*dropdown*/}
                        <Dropdown 
                          icon='bx bx-bell' 
                          badge="2"
                          contentData={notifications}
                          renderItems={(item, index) => renderNotification(item, index)}
                          renderFooter={()=> <Link to='/'>View</Link>}
                          />
                    </div>
                  
                   
                </div>  
            </div>
        
    )
}

export default TopNav
