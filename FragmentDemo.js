import React from 'react'
import { Columns } from './Columns'

function FragmentDemo() {
    
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        </>
        
        
        
        
        
        // <React.Fragment>
        //     <h1>Fragment Demo</h1>
        //     <p>this is a random para </p>
        // </React.Fragment>
    )
}
/*you can use empty opening and closing tags as a shorthand property for react.fragment */

export default FragmentDemo
