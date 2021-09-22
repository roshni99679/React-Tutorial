import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Roshni"
        }
        console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("Lifecycle A DidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate ")
    }
    // changestate=()=>{
    //     this.setState({
    //         name:"Codevolution"
    //     })
    // }
    render() {
        console.log("LifecycleA render")
        return (
            
            <div>
                <h3>Lifecycle A</h3>
                {/* <button onChange={this.changestate()}>ChangeState</button> */}
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
