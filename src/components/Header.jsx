import React from "react";
import PropTypes from "prop-types"

function Header({ color }) {
    return <header>
        <div className="container">
            <h1 style={{ color }}>Feedback UI</h1>
        </div>
    </header>
}

Header.defaultProps = {
    color: "rgb(255, 0, 98)"
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}



export default Header 