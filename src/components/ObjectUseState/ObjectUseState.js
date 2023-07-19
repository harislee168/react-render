import React, {useState} from 'react'

export const ObjectUseState = () => {

  const [person, setPerson] = useState({
    fName: 'Bruce',
    lName: 'Wayne'
  })

  const changeNameHandler = () => {
    setPerson({
      fName: 'Henry', lName: 'Ford'
    })
  }
  console.log('use State render')
  return (
    <div>
      <div>{person.fName} {person.lName}</div>
      <button onClick={changeNameHandler}>Change Name</button>
    </div>
  )
}
