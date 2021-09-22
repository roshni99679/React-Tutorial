import React ,{Component} from "react"
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello  ${this.state.ParentName} from ${childName}` )
    }
    render(){
        return(
            <ChildComponent greetHandler={this.greetParent} />
        )
    }
} 
export default ParentComponent