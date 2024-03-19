import React from "react";
import Card from "./shared/Card";
// import { useState } from "react";
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// function FeedbackItem({item,handleDelete}){
function FeedbackItem({item}){
    // const [rating,setRating] = useState(7)
    // const [text,setText] = useState("Hi Good Morning")
    // const handleClick = ()=>{
    //     setText(()=>{
    //         return "Hi Good Afternoon"
    //     })
    //     setRating((prev)=>{
    //         return prev+1
    //     })
    // }

    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
    
    return(
        <Card>
            <div className="rating-close-combine">
            <div className="rating">
                {item.rating}
            </div>
            {/* <button className="close" onClick={()=>(handleDelete(item.id))} > */}
            <div>
            <button className="edit" onClick={()=>editFeedback(item)}>
                <FaEdit color="purple" size={20}/>
            </button>
            <button className="close" onClick={()=>(deleteFeedback(item.id))} >
                <FaTimes color="purple" size={20}/>
            </button>
            </div>
            
            </div>
            
           
            <div className="feedback-item">
            
            <p>{item.text}</p>
        </div>
        </Card>
        
    )
}

export default FeedbackItem 