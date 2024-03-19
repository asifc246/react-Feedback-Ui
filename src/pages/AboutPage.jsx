import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage(){
    return (
        <Card>
        <div>
        <h1>About This Project</h1>
        <p>This is a react application to give feedback about the services provided</p>
        <Link to='/'>Back To Home</Link>
        </div>
        </Card>
    )
}

export default AboutPage