import React from 'react'

const ClientDeatils = ( props ) => {




  return (
  
     
        <div className='client-details'>
          <button type="button" className='button' onClick={()=>{props.deleted(props.clientList.id)}}>❌</button>
          <h3 className='client-name'>name :{props.clientList.name}
            </h3>
          <h3> age    :{props.clientList.age}</h3>
          <h3> Weight :{props.clientList.weight}</h3>
          <button type="button">Add Program</button>
        </div>


      )}





export default ClientDeatils
