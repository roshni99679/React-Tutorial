import React from "react"
 
function FunctionClick(){
    function clickHandler(){
        console.log("button clicked")
    }

    return(
        <div>
            <button onClick={clickHandler}>FunctionClickme</button>  
            {/* here clickhandler is not a fn call instead it is a fn so dont use paranthesis with the event handler  */}
        </div>
    )
}
export default FunctionClick