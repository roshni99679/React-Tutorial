import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Roshni"
        }
        console.log("LifecycleB constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleB DidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate ")
    }
    render() {
        console.log("LifecycleB render")
        return (
            
            <div>
                <h3>Lifecycle B</h3>
            </div>
        )
    }
}

export default LifecycleB
