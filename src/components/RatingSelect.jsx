import React, { useState,useContext,useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({select}) {
    const {feedbackEdit} = useContext(FeedbackContext)
    const [selected,setSelected] = useState(10)

    useEffect(()=>{
        setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])


    const handleChange = (e) =>{
      setSelected(+e.currentTarget.value)
      select(+e.currentTarget.value)
    }
  return (
    <ul>
        <li>
            <input type="radio" id="num1" name="rating" value="1" onChange={handleChange} checked={selected===1}/>
            <label htmlFor="num1" className="label" >1</label>
        </li>
        <li>
            <input type="radio" id="num2" name="rating" value="2" onChange={handleChange} checked={selected===2}/>
            <label htmlFor="num2" className="label">2</label>
        </li>
        <li>
            <input type="radio" id="num3" name="rating" value="3" onChange={handleChange} checked={selected===3}/>
            <label htmlFor="num3" className="label">3</label>
        </li>
        <li>
            <input type="radio" id="num4" name="rating" value="4" onChange={handleChange} checked={selected===4}/>
            <label htmlFor="num4" className="label">4</label>
        </li>
        <li>
            <input type="radio" id="num5" name="rating" value="5" onChange={handleChange} checked={selected===5}/>
            <label htmlFor="num5" className="label">5</label>
        </li>
        <li>
            <input type="radio" id="num6" name="rating" value="6" onChange={handleChange} checked={selected===6}/>
            <label htmlFor="num6" className="label">6</label>
        </li>
        <li>
            <input type="radio" id="num7" name="rating" value="7" onChange={handleChange} checked={selected===7}/>
            <label htmlFor="num7" className="label">7</label>
        </li>
        <li>
            <input type="radio" id="num8" name="rating" value="8" onChange={handleChange} checked={selected===8}/>
            <label htmlFor="num8" className="label">8</label>
        </li>
        <li>
            <input type="radio" id="num9" name="rating" value="9" onChange={handleChange} checked={selected===9}/>
            <label htmlFor="num9" className="label">9</label>
        </li>
        <li>
            <input type="radio" id="num10" name="rating" value="10" onChange={handleChange} checked={selected===10}/>
            <label htmlFor="num10" className="label">10</label>
        </li>
    </ul>
  )
}

export default RatingSelect
