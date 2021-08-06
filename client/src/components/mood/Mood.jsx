import React from 'react';


import "./mood.scss"


import image_routes from '../../JsonData/image_routes.json'

const Mood = () => {
return (
    <div>
        <header>
        <p>Place holder fro mood title</p>
        </header>
    <div className="Popup">
  
    <img onClick={image_routes}  id="smile" src="./assets/smile.png"  alt=""/>
  
  <img onClick={image_routes}  id="emotion" src="./assets/emotions.png"  alt=""/>
    
   <img onClick={image_routes}  id="sad" src="./assets/sad.png"  alt=""/>
    
    <img onClick={image_routes}  id="angry" src="./assets/angry.png"  alt=""/>
    
 </div>
 </div>
 );

}

export default Mood;