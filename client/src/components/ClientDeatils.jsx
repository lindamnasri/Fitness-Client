import React, {useState,useEffect} from 'react'
import axios from "axios"
import ProgramDet from './ProgramDet.jsx'
import ProgramList from './ProgramList.jsx'

const ClientDeatils = (props) => {

  const [show, setShow] = useState(false)
  const [sucess,setSucess]=useState(false)
  const [data,setData]=useState([])

  
  useEffect(()=>{
    console.log(props.clientList.id)
          festchListProgram(props.clientList.id)     
        },[sucess])
const festchListProgram=(id)=>{
      axios.get(`http://localhost:3000/api/clientProgram/${id}`).then((response)=>{
  setData(response.data)
 }).catch((err)=>{
  console.log(err)
 })
} 
const programList=(type,intensity,duration,frequency,client_id)=>{   
  axios.post("http://localhost:3000/api/clientProgram/add",
  {type,intensity,duration,frequency,client_id}).then((list)=>{
    console.log(list)
    setSucess(!sucess)
  }).catch((err)=>{
  console.log(err)
  })
    }
    const deleteProgram=(id)=>{
axios.delete(`http://localhost:3000/api/clientProgram/${id}`).then((list)=>{
  setSucess(!sucess)
}).catch((err)=>{
  console.log(err)
})
    }
  
  return (

    <div className='client-details'>
      <div className='container'>
      <div className='details-container'>
        
        <button type="button" className='button' onClick={() => { props.deleted(props.clientList.id) }}>❌</button>
        <h3 className='client-name'>name :{props.clientList.name}
        </h3>
        <h3> age    :{props.clientList.age}</h3>
        <h3> Weight :{props.clientList.weight}</h3>
        <button type="button" onClick={() => { setShow(!show) }}>Add Program</button>
  
        </div>
      <div className='program-container' >
      <div className='prog'>

Program List 🏋️‍♀️
      {data.map((prog)=>{
            return(
  
              <ProgramList prog={prog} deleted={deleteProgram} clientId={props.clientList.id}/>
            )
          })}
          </div>
      </div>
      </div>
      
      {show ? <div>
        <ul className="list-program ">
        
          {props.program.map((list) => {

            return (<ProgramDet list={list} programList={programList}  clientId={props.clientList.id}  />

            )


          })}
        </ul>
      </div> : <></>}


    </div>


  )
}





export default ClientDeatils
