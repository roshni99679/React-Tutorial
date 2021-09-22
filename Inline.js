import React from 'react'
/*creating an object 
here key is a CSS property name and must be written in camelCase
the value is specified as a string */
const heading={
    fontSize:"44px",
    color:"blue"
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline Styling </h1>
            <h1 className="error">Error</h1>
            {/* <h1 className={styles.success}>Success</h1> */}

        </div>
    )
}

export default Inline
