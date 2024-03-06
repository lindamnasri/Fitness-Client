import React,{useState}from 'react'

const ProgramDet = ({list,programList,clientId})=> {
    const [showDet,setShowDet]=useState(false)
   
  return (
    <div>
      
    <h3 className="list" onClick={()=>{setShowDet(!showDet)}}>{list.type} 
      </h3> 
      <button type="button" onClick={()=>{ programList(list.type,list.intensity,list.duration,list.frequency,clientId) }}>➕</button> 
      
   {showDet?<div>
    <ul className="list-list">
      <li className="list">{list.intensity}</li>
      <li className="list">{list.duration}</li>
      <li className="list">{list.frequency}</li>
    </ul>
   </div>:<></>}
    
   </div>
  )
}

export default ProgramDet
