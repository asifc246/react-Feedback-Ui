import React from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";

// function Post(){
//     const navigate = useNavigate()

//     const onClick = ()=>{
//         navigate('/about')
//     }

    

//     return (
//         <div>
//             <button onClick={onClick}>Click</button>
//             <Routes>
//         <Route path="/show" element={<h1>Hello </h1>}></Route>
//         </Routes>
//         </div>
//     )
// }

// function Post(){
//     const params = useParams()
//     return(
//         <div>
//             <h1>Post {params.id}</h1>
//             <h2>Name {params.name}</h2>
//             </div>
//     )
// }

function Post(){
    const status = 404

    if(status === 404){
        return(
        <Navigate to='/notfound'/>
        )
    }
    return (
        <div>Post</div>
    )
}

export default Post