import React from "react";
const Client = (props) => {

  return (
    <div>
      <ul className="list ">
        {props.lists.map((list) => {
          return <li className="client-list" onClick={() => { props.display(list) }}> {list.name}
            👁️‍🗨️
          </li>

        })}
      </ul>



    </div>


  )
}

  ;

export default Client;
