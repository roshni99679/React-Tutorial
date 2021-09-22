import React from 'react'
import "./myStyles.css"

function Stylesheet(props) {
    let className=props.primary? "primary":""
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}
/*className is a variable that is why written inside  ${} and to include on more class we hav used back tiks (template literals) */
export default Stylesheet
