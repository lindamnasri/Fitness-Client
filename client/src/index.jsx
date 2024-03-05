import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Client from './components/Client.jsx'
import AddClient from './components/AddClient.jsx'
import ClientDeatils from './components/ClientDeatils.jsx'
import Program from './components/Program.jsx'
const App = () => {
  const [lists, setLists] = useState([])
  const [view,setView]=useState('client')
  const [sucess,setSucces]=useState(false)
  const [clientList,setClient]=useState({})
  const [program,setProgram]=useState([])
  
  const changeView = (option) => {
    setView(option)
  }
  const display=(clientList)=>{
    setClient(clientList)
    setView('ClientDeatils')
  }
  useEffect(() => {
   axios.get("http://localhost:3000/api/client/getAll").then((response)=>{
    setLists(response.data)
   }).catch((err)=>{
    console.log(err)
   })
  }, [sucess])


  useEffect(() => {
    axios.get("http://localhost:3000/api/program/getAll").then((response)=>{
     setProgram(response.data)
    }).catch((err)=>{
     console.log(err)
    })
   }, [sucess])

const create=(name,age,weight,coach_id,program_id)=>{
axios.post("http://localhost:3000/api/client/add",
{name,age,weight,coach_id,program_id}).then(()=>{
  setView('client')
setSucces(!sucess)

}).catch((err)=>{
  console.log(err)
})
  }
  const deleted=(id)=>{
    axios.delete(`http://localhost:3000/api/client/${id}`).then(()=>{
      setSucces(!sucess)
      setView('client')
    }).catch((err)=>{
      console.log(err)
    })
  }
  const createprogram=(type,intensity,duration,frequency)=>{
    axios.post("http://localhost:3000/api/program/add",{
      type ,
    intensity,
    duration,
    frequency
    }).then((program)=>{
      setSucces(!sucess)
    }).catch((err)=>{
      console.log(err)
    }) 
  }

  const renderView=()=>{
    if(view==='client'){
      return <Client lists={lists} display={display}/>
    }
    else 
    if(view==="create"){
      return <AddClient create={create}/>
    }
    else 
    if(view==="program"){
      return <Program program={program} create={createprogram}/>
    }
    else {
      return <ClientDeatils clientList={clientList} deleted={deleted}/>
    }
  }

  return (
    <div>
     <div className='nav'>
<span className='logo'
onClick={()=>changeView('client')}>

My Clients
</span>
<span className={view === 'client'
          ? 'nav-selected'
          : 'nav-unselected'}
          onClick={() => changeView('client')}>
          See all Clients
        </span>
        <span className="logo"
          onClick={() => changeView('create')}>
      Add Client
        </span>
        <span className="logo"
          onClick={() => changeView('program')}>
      Program
        </span>
      </div>

      <div className="main">
        {renderView()}
      </div>
     </div>
   
   
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
