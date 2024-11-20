import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigator = useNavigate();
  function navigeteTo(address) {
    navigator(`${address}`)
  }
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <h1 className='text-center'>
        <div>
        Choose your address
        </div>
        <div className="employee">
          <button className='btn btn-info' onClick={()=>navigeteTo('/employees')}>Employee List</button>
        </div>
        <div className="departement">
          <button className='btn btn-secondary '>Departement List</button>
        </div>
      </h1>
    </div>
  )
}
