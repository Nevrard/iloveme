import React from 'react';
import "./mood.scss"
import { useMutation } from '@apollo/client';
import { CREATE_MOOD } from '../../utils/mutations';

import { useHistory } from "react-router-dom";


const Mood = (props, context) => {

    const history = useHistory();

    const [addMood, { error }] = useMutation(CREATE_MOOD);

    const resolveMoodSubmission = (event) => {
        event.preventDefault();
        // Get the name of the mood via the selected button
        let selectedMood = event.target.id;
        // Based on the selected mood, get a rating number
        let selectedRating = getRatingForMood(selectedMood);

        // Add the mood to the database using the imported mutation
        try {
            addMood({
                variables: {
                    description: selectedMood,
                    rating: selectedRating
                }
            })
        } catch (err) {
            console.log(err);
        }

        history.push("/");
    }

    //Helper function with a switch case to provide a rating as a number(string) based on the selected mood
    const getRatingForMood = (mood) => {

        switch (mood) {
            case "Happy":
                return "1";
            case "Meh":
                return "2";
            case "Spooky":
                return "3";
            case "Angry":
                return "4";
            default:
                return "0";
        }
    }
    

return (
    <div>
       
    <div className="Popup">
  
    <img onClick={resolveMoodSubmission}  id="Happy" src="./assets/smile.png"  alt=""/>
  
    <img onClick={resolveMoodSubmission}  id="Meh" src="./assets/emotions.png"  alt=""/>
    
    <img onClick={resolveMoodSubmission}  id="Spooky" src="./assets/sad.png"  alt=""/>
    
    <img onClick={resolveMoodSubmission}  id="Angry" src="./assets/angry.png"  alt=""/>
    
 </div>
 </div>
 );

}


export default Mood;