import React,{Component} from "react"

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"hello"
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:"Goodbye...."
        })
        // this keyword is undefined in eventHandler so event binding is necessary in class components 
        console.log("this")
    }
    // 4th appraoch:
    // clickHandler=()=>{
    //     this.setState({
    //         message:"goodbye..."
    //     })
    // }
    render(){
        return(
            <div>
                <div>
                    {this.state.message}
                </div>
               {/* 1st approach:binding in render method (performance implications)
               <button onClick={this.clickHandler.bind(this)}>EventBindClick</button>  */}
               {/* 2nd approach:arrow functn in render method (performance implications)
               <button onClick={()=>this.clickHandler()}>EventBindClick</button>  */}
               {/* 3rd approach:binding in class constructor (best apprach)*/} 
               <button onClick={this.clickHandler}>EventBindClick</button> 
               {/* 4th approach:(also a good approach )
               <button onClick={this.clickHandler}>EventBindClick</button>  */}
            </div>
        )
    }
}
export default EventBind