import React from "react";

function Button({children,version,type,isDisabled}){
    return(
        <button type={type} disabled={isDisabled}  className={`${!isDisabled} ? btn btn-${version} : btn btn-${version} .false`}>{children}</button>
    )
}

export default Button