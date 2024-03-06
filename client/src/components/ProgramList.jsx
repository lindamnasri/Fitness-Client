import React from 'react'

const ProgramList = ({prog,deleted,clientId}) => {

  console.log(prog)
  return (

   <>
      <h4 className="list">{prog.type}</h4>
      
      <ul >
      <button type="button" onClick={()=>{deleted(clientId)}}>❌</button> 
        <li className="list">{prog.intensity}</li>
        <li className="list">{prog.duration}</li>
        <li className="list">{prog.frequency}</li>
      </ul>

      </>
   
  )
}

export default ProgramList
