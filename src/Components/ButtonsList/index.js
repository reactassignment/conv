import React from 'react'
import { useSelector } from 'react-redux'   
import ButtonComponent from '../ButtonComponent'

function ButtonsList() {
    //const users=useSelector((state)=>state)
    //console.log(users)
  return (
      
    <div>
        <h2>Users-List</h2>
        <div style={{}}>
            <ButtonComponent></ButtonComponent>
        </div>
    </div>
  )
}

export default ButtonsList