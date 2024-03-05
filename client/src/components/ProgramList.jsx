import React from 'react'

const ProgramList = ({ prog }) => {

  console.log(prog)
  return (

    <div className='prog'>

               Program List 🏋️‍♀️
      <h4 className="list">{prog.type}</h4>
      <ul >

        <li className="list">{prog.intensity}</li>
        <li className="list">{prog.duration}</li>
        <li className="list">{prog.frequency}</li>
      </ul>


    </div>
  )
}

export default ProgramList
