import React,{useState} from 'react'
import ProgramDet from './ProgramDet.jsx'
const Program = (props) => {
    
    const [type,setType]=useState('')
    const [intensity,setIntensity]=useState('')
    const [duration,setDuration]=useState('')
    const [frequency,setFrequency]=useState('')
   
    
  return ( 
  <div className='container-prog'>
      <div className='prog-container'>
        <input onChange={(e)=>{setType(e.target.value)}} placeholder='type' type='text' className='prog-input'/>
        </div>
           
      <input onChange={(e)=>{setIntensity(e.target.value)}} placeholder='intensity' type='text' className='prog-input'/>
      <input onChange={(e)=>{setDuration(e.target.value)}} placeholder='duration' type='text' className='prog-input'/>
    
      <input onChange={(e)=>{setFrequency(e.target.value)}} placeholder='frequency' type='text' className='prog-input'/>
      <input type="button" value="Add New Program" onClick={()=>props.create(type,intensity,duration,frequency)} className='prog-button'/>

   
    <div/>

    <ul className="list-program ">
          {props.program.map((list)=>{
           return( <div>
            <h3 className="list">{list.type} </h3>
           
            <ul className="list-list">
              <li className="list">{list.intensity}</li>
              <li className="list">{list.duration}</li>
              <li className="list">{list.frequency}</li>
            </ul>
           </div> ) 
          })}
        </ul>
    
    
    
     </div>
     
  )
}

export default Program
