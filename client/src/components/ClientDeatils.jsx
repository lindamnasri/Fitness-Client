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
  
  return (
    <div className='client-details'>
      <button type="button" className='button' onClick={() => { props.deleted(props.clientList.id) }}>❌</button>
      <h3 className='client-name'>name :{props.clientList.name}
      </h3>
      <h3> age    :{props.clientList.age}</h3>
      <h3> Weight :{props.clientList.weight}</h3>
      <button type="button" onClick={() => { setShow(!show) }}>Add Program</button>

      {show ? <div>
        <ul className="list-program ">
        {data.map((prog)=>{
          return(

            <ProgramList prog={prog}/>
          )
        })}
          {props.program.map((list) => {

            return (<ProgramDet list={list} programList={props.programList} clientId={props.clientList.id} />

            )


          })}
        </ul>
      </div> : <></>}


    </div>


  )
}





export default ClientDeatils
