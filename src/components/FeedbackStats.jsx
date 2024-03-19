import React, { useContext } from "react";
import { useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

// function FeedbackStats({feedback}){
function FeedbackStats(){
    const {feedback} = useContext(FeedbackContext)
    const average = feedback.reduce((acc,cur)=>{
        return acc + (cur.rating)
    },0)/feedback.length

    return (
        <div className="div-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average)?0:Math.round(average*100)/100}</h4>
        </div>
    )
}

export default FeedbackStats