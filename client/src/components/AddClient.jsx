import React,{useState} from 'react'


const AddClient = (props) => {
 
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const [weight,setWeight]=useState(0)
    const [coach_id,setCoach]=useState(0)
    

    return (
    <div>
        <div>
        <input onChange={(e)=>{setName(e.target.value)}} placeholder='name' type='text'/>
        </div>
     
      <input onChange={(e)=>{setAge(e.target.value)}} placeholder='Age' type='number'/>
      <input onChange={(e)=>{setWeight(e.target.value)}} placeholder='Weight' type='number'/>
    
      <input onChange={(e)=>{setCoach(e.target.value)}} placeholder='Coach' type='number' />
      <input type="button" value="Add To List" onClick={()=>props.create(name,age,weight,coach_id)} />
    </div>
  )
}

export default AddClient
