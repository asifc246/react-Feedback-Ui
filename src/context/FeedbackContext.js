import React from "react";
import { createContext,useState,useEffect } from "react";
import { json } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{

    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:"this is a new feedback",
            rating:10
        }
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit : true
        })
    }

    // const updateFeedback = (id,updatedItem) =>{
    //     setFeedback(feedback.map((item)=>(item.id === id ? {...item,...updatedItem}:item)))
    // }

    const updateFeedback = async(id,updatedItem) =>{
        const response = await fetch(`/feedback/${id}`,
        {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedItem)
        })
        const data = await response.json()
        setFeedback(feedback.map((item)=>(item.id === id ? {...item,...data}:item)))
    }

    // const deleteFeedback = (id) =>{

    //     if(window.confirm('are you sure to delete?')){
    //         setFeedback(feedback.filter((item)=>item.id !== id))
    //     }
    // }

    const deleteFeedback = async(id) =>{

        if(window.confirm('are you sure to delete?')){
            await fetch(`/feedback/${id}`,{method:'DELETE'})
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }

    // const addFeedback = (newFeedback) =>{
    //     newFeedback.id = uuidv4()
    //     setFeedback([newFeedback,...feedback])
    // }

    const addFeedback = async(newFeedback) =>{
        const response = await fetch('/feedback',
        {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        const data = await response.json()
        // newFeedback.id = uuidv4()
        setFeedback([data,...feedback])
    }

    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async()=>{
        const response = await fetch(`http://localhost:5000/feedback`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }


    return <FeedbackContext.Provider value={{feedback,feedbackEdit,isLoading,editFeedback,updateFeedback,deleteFeedback,addFeedback}}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext