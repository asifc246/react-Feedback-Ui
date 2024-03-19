import React, { useState,useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";


// function FeedbackForm({handleAdd}){
function FeedbackForm(){
    const [message,setMessage] = useState('')
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState('true')
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        console.log(feedbackEdit)
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange = (e) =>{
        setText(e.target.value)
        if (text === ""){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text!=="" && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage("!text should be atleast ten characters long")
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
    }
    
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
                addFeedback(newFeedback)
            }
            // handleAdd(newFeedback)
            // addFeedback(newFeedback)
            setText('')
            
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h3>How would you rate our service?</h3>
                <RatingSelect select={(rating)=>setRating(rating)} />
                <div className="form-input">
                    <input type="text" placeholder="write a review" onChange={handleTextChange} value={text}/>
                    <Button isDisabled={btnDisabled} type="submit" version="primary">Send</Button>
                    {message && <div style={{color:"red"}}>{message}</div>}
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm