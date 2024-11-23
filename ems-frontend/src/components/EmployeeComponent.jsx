import React, { useState } from 'react';
import { createEmployee } from '../services/EmployeeService';

export default function EmployeeComponent() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const handleFirstname = (e) => { setFirstname(e.target.value); };
  const handleLastname = (e) => { setLastname(e.target.value); };
  const handleEmail = (e) => { setEmail(e.target.value); };
  const saveEmployee = (e) => {
  e.preventDefault(); 
  const employee = { firstname, lastname, email };
  createEmployee(employee)
};
  // html code 
  return (
    <div className='container'>
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                {/* label */}
                <div className="col">
                <label  className="form-label">FirstName</label>
                </div>
                <div className="col">
                <input  type="text" 
                placeholder='Enter Employee Firstname' 
                name='firstname' 
                value={firstname}
                onChange={handleFirstname}
                className='inp'
                />
                </div>
              </div>
              <div className="form-group mb-2">
                <label  className="form-label">LastName</label>
                <input type="text" 
                placeholder='Enter Employee Lastname' 
                name='firstname' 
                value={lastname}
                onChange={handleLastname}
                />
              </div>
              <div className="form-group mb-2">
                <label  className="form-label">Email</label>
                <input type="password" 
                placeholder='Enter Employee Email' 
                name='email' 
                value={email}
                onChange={handleEmail}
                />
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
