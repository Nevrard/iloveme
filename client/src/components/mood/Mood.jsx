import React from 'react';
import "./mood.scss"
import Popups  from '../../Popups';
import { useState }  from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
  
    function toggle() {
      setIsShowing(!isShowing);
    }
  
    return {
      isShowing,
      toggle,
    }
  };

export default function Mood() {

 
const {isShowing, toggle} = useModal();

return (
    <div>
        <header>
        <p>Place holder fro mood title</p>
        </header>
    <div className="Popup">
  
    <img onClick={toggle}  id="smile" src="./assets/smile.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
  <img onClick={toggle}  id="emotion" src="./assets/emotions.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
   <img onClick={toggle}  id="sad" src="./assets/sad.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
    <img onClick={toggle}  id="angry" src="./assets/angry.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
 </div>
 </div>
 );


 const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="mood" id="mood"> 
             <h1>Mood</h1>
               <div className ="container">
                   <div className="item">
                    <img  onClick={() => setButtonPopup(true)} id="smile"
                    src="./assets/smile.png" alt="Happy"
                    />
                    <Popups trigger ={buttonPopup} setTrigger ={setButtonPopup}>

                    </Popups>
                    </div>
                    <div className="item" >
                   <img onClick={() => setButtonPopup(true)} id="sad"
                    src="./assets/sad.png" alt="Sad"
                    />
                    <Popups trigger={buttonPopup} setTrigger= {setButtonPopup}>
                    <form>
                   
            </form>
                    </Popups>
                    </div>
                    <div className="item">
                    <img onClick={() => setButtonPopup(true)} id="angry"
                    src="./assets/angry.png" alt="Angry"
                    />
                    <Popups trigger={buttonPopup} setTrigger= {setButtonPopup}>

                    </Popups>
                   </div>
                   <div className="item">
                    <img onClick={() => setButtonPopup(true)} id="emotion"
                    src="./assets/emotions.png" alt="Emotional"/>
                     <Popups trigger={buttonPopup} setTrigger={setButtonPopup}>
                         </Popups>
            
                    </div>
                      </div>
               </div>
    )
}
