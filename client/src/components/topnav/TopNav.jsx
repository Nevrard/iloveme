import React, { useState } from 'react';
import "./topnav.scss"
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown'
// import notifications from '../../JsonData/notifications.json'
import user_menu from '../../JsonData/user_menu.json'
import { Nav, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../login/SignupForm';
import LoginForm from '../login/LoginForm';
import Auth from '../../utils/auth';



// eslint-disable-next-line no-lone-blocks
{/*username imported from log*/}
//import user_name from '../.../



const curr_user = { 
    display_name: 'Anthony',
//grabs user image from database

}

// const renderNotification = (item, index) => ( 
//     <div className="notification-item" key={index}> 
//     <i className={item.icon}></i>
//      <span>{item.content}</span>
// </div>

// )

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

    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className='topnav'>
                <div className="topnav__search">
            <input type="text" placeholder='Search for habit..'/>
            <i className="bx bx-search"></i>
                </div>
                <div className="topnav__right">
                    <div className="topnav__right-item">
                    <Nav className='ml-auto'>
              
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  
                  <Nav.Link onClick={Auth.logout}>Your are signed in, Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
                        {/*dropdown*/}
                        {/* <Dropdown 
                          icon='bx bx-user' 
                          customToggle={() => renderUserToggle(curr_user)}
                            contentData={user_menu}
                            renderItems={(item, index) => renderUserMenu(item, index)}
                          /> */}
                            </div>
                            {/*static notification/whn have time input live */}
                         {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>


                </div>  
            </div>
        
    )
}

export default TopNav
