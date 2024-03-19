import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router,Routes,Route, NavLink} from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App(){
    const [feedback,setFeedback] = useState(FeedbackData)

    // const deleteFeedback = (id) =>{
    //     if(window.confirm('are you sure to delete?')){
    //         setFeedback(feedback.filter((item)=>item.id !== id))
    //     }
    // }

    // const addFeedback = (newFeedback) =>{
    //     newFeedback.id = uuidv4()
    //     setFeedback([newFeedback,...feedback])
    // }
    

    return (
        <FeedbackProvider>

        <Router>
        <div className="main">
        <Routes>
            <Route exact path="/" element={
                <>
                <Header />
                <AboutIconLink/>
                {/* <FeedbackForm handleAdd={addFeedback}/> */}
                <FeedbackForm />
                {/* <FeedbackStats feedback={feedback}/> */}
                <FeedbackStats/>
                {/* <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> */}
                {/* <FeedbackList handleDelete={deleteFeedback}/> */}
                <FeedbackList />
                </>
            }/>
        </Routes>
        </div>
        <Card>
            <NavLink to='/' activeclassName='active'>Home</NavLink>
            <NavLink to='/about' activeclassName='active'>About</NavLink>
        </Card>
        <Routes>
            <Route path="/about" element={
                <AboutPage/>
            }></Route>
            {/* <Route path="/post/:id/:name" element={<Post/>}></Route> */}
            {/* <Route path="/post/*" element={<Post/>}></Route> */}
            <Route path="/post" element={<Post/>}></Route>
            
        </Routes>
        </Router>
        </FeedbackProvider>
    )
}

export default App