import React from "react";
import FeedbackItem from "./FeedbackItem";
import {motion,AnimatePresence} from 'framer-motion'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

// function FeedbackList({feedback,handleDelete}){
// function FeedbackList({handleDelete}){
function FeedbackList(){
    const {feedback,isLoading} = useContext(FeedbackContext)
    if(!isLoading && !feedback || feedback.length === 0){
        return <p className="no-feedback">No Feedback Yet</p>
    }
    return isLoading ?(
        <Spinner/>
    ):(
        <div className="feedback-list">
            <AnimatePresence>
            {/* {feedback.map((item)=>(
                <div key={item.id}>{item.rating}&nbsp;{item.text}</div>
            ))} */}
                {feedback.map((item)=>(
                    <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    {/* <FeedbackItem key={item.id} item={item} handleDelete = {handleDelete}/> */}
                    <FeedbackItem key={item.id} item={item} />
                    </motion.div> 
                ))}
                </AnimatePresence>
        </div>


        // <div className="feedback-list">
        //     {/* {feedback.map((item)=>(
        //         <div key={item.id}>{item.rating}&nbsp;{item.text}</div>
        //     ))} */}
        //         {feedback.map((item)=>(
        //             <FeedbackItem key={item.id} item={item} handleDelete = {handleDelete}/> 
        //         ))}
        // </div>
    )
}

export default FeedbackList