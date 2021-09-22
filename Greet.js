import React from "react";

// function Greet(){
//     return <h1>Functional Components</h1>
// }

const Greet=({name,heroName,children})=>{
    
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
            
        </div>
        
        
    )
    
}
// using props 
// const Greet =(props)=>{
//     return(
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
            
//         </div>
//     )
// }
export default Greet;