import React from 'react'
import Name from '../Name'

function NameList() {
    // const names=["Roshni","Khushbu","Deepu","Geeta","Santosh"]
    // const NameList=names.map((name,index)=><h2 > {index}.{name}</h2>)
    // return (
    //     <div>
    //       {/* <h2>{names[0]}</h2>
    //       <h2>{names[1]}</h2>
    //       <h2>{names[2]}</h2> */}
    //       {NameList}
    //     </div>
    // )

    const persons=[
      {
        id:1,
        name:"Roshni",
        skill:"React"
      },
      {
        id:2,
        name:"Khushbu",
        skill:"Audit"
      },
      {
        id:3,
        name:"Deep",
        skill:"Law"
      }
    ]
    // const PersonList=persons.map(person=> <h2>I am {person.name},I am good at {person.skill}</h2>)

    const PersonList=persons.map(person=> <Name key={person.name} person={person} />)
    return <div>{PersonList}</div>
}

/*A key is a special string attribute you need to include when creating lists of elements
keys give the elements a stable identity
keys help react identify which items have changed ,are added or are removed
helps in efficient update of the user interface[--*/

export default NameList
