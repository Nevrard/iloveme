import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.scss'

import logo from '../../images/Loveicon.png'

import sidebar_items from '../../JsonData/sidebar_routes.json'

const SidebarItem = props => {
    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}> 
             <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
         </div>
        
        )
}

function Sidebar (props)  {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="app-logo" />
            </div>
               {
                   sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                          <SidebarItem
                          title={item.display_name}
                          icon={item.icon}
                          active={index === activeItem}
                          />
                        </Link>
                    
                    ))
               }
        
        </div>
    )
}

export default Sidebar
