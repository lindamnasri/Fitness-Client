import React,{useState}from 'react'
import ProgramList from './ProgramList.jsx'
const ProgramDet = ({list,programList,clientId}) => {
    const [showDet,setShowDet]=useState(false)
    // const handleAdd=()=>{
    //     programList(type,intensity,duration,frequency,client_id)
    // programList(list.type,list.intensity,list.duration,list.frequency,clientId) }
  return (
    <div>
      
    <h3 className="list" onClick={()=>{setShowDet(!showDet)}}>{list.type} 
      </h3> 
      <button type="button" onClick={()=>{ console.log("err") }}>➕</button> 
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
