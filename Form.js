import React, { Component } from 'react'


export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             comments:"",
             topic:"react"
        }
    }
    HandleusernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    
    }
    HandleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    HandleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    HandleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        // const {username,comments,topic}=this.state
        // if you write the above line , remove this.state. from all the value attributes to get the same op
        return (
            <form onSubmit={this.HandleSubmit}>
                <div>
                <div>
                <h1>Form Component </h1>
                <label>Username</label>
                <input type="text"
                value={this.state.username}
                onChange={this.HandleusernameChange}></input>
            </div>

            <div>
                <label>Comments</label>
                <textarea 
                value={this.state.comments}
                onChange={this.HandleCommentsChange}></textarea>
            </div>

            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.HandleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue `</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            
            </div>
            </form>
            
            
            
            

        )    
    }
}

export default Form
