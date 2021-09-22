import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render() {

        // 1st approach: if-else operator 
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Roshni
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // 2nd approach
        // let message 
        // if(this.state.isLoggedIn){
        //    message=<div>Welcome Roshni</div>
        // }
        // else{
        //    message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // 3rd approach:ternary approach (use this)
        // return this.state.isLoggedIn?(
        //     <div>Welcome Roshni</div>
        // ):(
        //     <div>Welcome Guest</div>
        // )

        // 4th approach: short ckt operator 
        return this.state.isLoggedIn && <div>Welcome Roshni</div>

    }
}

export default UserGreeting
